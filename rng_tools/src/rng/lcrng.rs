use super::rng_trait::{GetMaxRand, GetRand, Rng};
use crate::Ivs;
use std::iter::{DoubleEndedIterator, Iterator, Rev, Skip};

pub type Pokerng = Lcrng<0x6073, 0x41c64e6d, 0xa3561a1, 0xeeb9eb65>;
pub type Xdrng = Lcrng<0x269EC3, 0x343FD, 0xA170F641, 0xB9B33155>;

#[derive(Debug, Clone, Copy)]
pub struct Lcrng<const ADD: u32, const MUL: u32, const P_ADD: u32, const P_MUL: u32> {
    state: u32,
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> Lcrng<A, M, PA, PM> {
    pub fn new(seed: u32) -> Self {
        Self { state: seed }
    }

    fn prev_state(&mut self) -> u32 {
        self.state = self.state.wrapping_mul(PM).wrapping_add(PA);
        self.state
    }

    fn next_state(&mut self) -> u32 {
        self.state = self.state.wrapping_mul(M).wrapping_add(A);
        self.state
    }

    fn next_u16(&mut self) -> u16 {
        (self.next_state() >> 16) as u16
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> Iterator for Lcrng<A, M, PA, PM> {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        Some(self.next_state())
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> DoubleEndedIterator
    for Lcrng<A, M, PA, PM>
{
    fn next_back(&mut self) -> Option<Self::Item> {
        Some(self.prev_state())
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetRand<u8> for Lcrng<A, M, PA, PM> {
    fn get(&mut self) -> u8 {
        self.next_u16() as u8
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetRand<u16>
    for Lcrng<A, M, PA, PM>
{
    fn get(&mut self) -> u16 {
        self.next_u16()
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetMaxRand<u16>
    for Lcrng<A, M, PA, PM>
{
    fn get_max(&mut self, max: u16) -> u16 {
        ((self.next().unwrap_or_default() >> 16) as u16) % max
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetRand<u32>
    for Lcrng<A, M, PA, PM>
{
    fn get(&mut self) -> u32 {
        self.next_state()
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetRand<u8>
    for Skip<Lcrng<A, M, PA, PM>>
{
    fn get(&mut self) -> u8 {
        GetRand::<u16>::get(self) as u8
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetRand<u16>
    for Skip<Lcrng<A, M, PA, PM>>
{
    fn get(&mut self) -> u16 {
        (self.next().unwrap_or_default() >> 16) as u16
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetRand<u32>
    for Skip<Lcrng<A, M, PA, PM>>
{
    fn get(&mut self) -> u32 {
        self.next().unwrap_or_default()
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetRand<u8>
    for Rev<Lcrng<A, M, PA, PM>>
{
    fn get(&mut self) -> u8 {
        GetRand::<u16>::get(self) as u8
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetRand<u16>
    for Rev<Lcrng<A, M, PA, PM>>
{
    fn get(&mut self) -> u16 {
        (self.next().unwrap_or_default() >> 16) as u16
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> GetRand<u32>
    for Rev<Lcrng<A, M, PA, PM>>
{
    fn get(&mut self) -> u32 {
        self.next().unwrap()
    }
}

impl<const A: u32, const M: u32, const PA: u32, const PM: u32> Rng for Lcrng<A, M, PA, PM> {}

fn recover_poke_rng_ivs_method4(ivs: &Ivs) -> Vec<u32> {
    let Ivs {
        hp,
        atk,
        def,
        spa,
        spd,
        spe,
    } = *ivs;

    const ADD: u32 = 0xe97e7b6a;
    const MULT: u32 = 0xc2a29a69;
    const MOD: u32 = 0x3a89;
    const PAT: u32 = 0x2e4c;
    const INC: u32 = 0x5831;

    let first = ((hp as u32) | ((atk as u32) << 5) | ((def as u32) << 10)) << 16;
    let second = ((spe as u32) | ((spa as u32) << 5) | ((spd as u32) << 10)) << 16;

    let diff = second.wrapping_sub(first.wrapping_mul(MULT).wrapping_add(ADD)) >> 16;
    let start1 = (diff.wrapping_mul(MOD).wrapping_add(INC) >> 16).wrapping_mul(PAT) % MOD;
    let start2 = (((diff & 0xFFFF) ^ 0x8000)
        .wrapping_mul(MOD)
        .wrapping_add(INC)
        >> 16)
        .wrapping_mul(PAT)
        % MOD;

    let mut seeds = Vec::with_capacity(6);

    reverse_poke_rng_seeds::<MULT, ADD, MOD>(first, second, start1, &mut seeds);
    reverse_poke_rng_seeds::<MULT, ADD, MOD>(first, second, start2, &mut seeds);

    seeds
}

fn recover_poke_rng_ivs_method12(ivs: &Ivs) -> Vec<u32> {
    let Ivs {
        hp,
        atk,
        def,
        spa,
        spd,
        spe,
    } = *ivs;

    const ADD: u32 = 0x6073;
    const MULT: u32 = 0x41c64e6d;
    const MOD: u32 = 0x67d3;
    const PAT: u32 = 0xd3e;
    const INC: u32 = 0x4034;

    let first = ((hp as u32) | ((atk as u32) << 5) | ((def as u32) << 10)) << 16;
    let second = ((spe as u32) | ((spa as u32) << 5) | ((spd as u32) << 10)) << 16;

    let diff = second.wrapping_sub(first.wrapping_mul(MULT)) >> 16;
    let start1 = (diff.wrapping_mul(MOD).wrapping_add(INC) >> 16).wrapping_mul(PAT) % MOD;
    let start2 =
        ((diff ^ 0x8000).wrapping_mul(MOD).wrapping_add(INC) >> 16).wrapping_mul(PAT) % MOD;

    let mut seeds = Vec::with_capacity(6);

    reverse_poke_rng_seeds::<MULT, ADD, MOD>(first, second, start1, &mut seeds);
    reverse_poke_rng_seeds::<MULT, ADD, MOD>(first, second, start2, &mut seeds);

    seeds
}

fn reverse_poke_rng_seeds<const MULT: u32, const ADD: u32, const MOD: u32>(
    first: u32,
    second: u32,
    start: u32,
    seeds: &mut Vec<u32>,
) {
    (start..0x10000).step_by(MOD as usize).for_each(|low| {
        let seed = first | low;
        if (seed.wrapping_mul(MULT).wrapping_add(ADD) & 0x7fff0000) == second {
            seeds.push(seed);
            seeds.push(seed ^ 0x80000000);
        }
    })
}

pub fn recover_poke_rng_iv(ivs: &Ivs, method4: bool) -> Vec<u32> {
    if method4 {
        recover_poke_rng_ivs_method4(ivs)
    } else {
        recover_poke_rng_ivs_method12(ivs)
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::assert_list_eq;

    const MAX_IVS: Ivs = Ivs {
        hp: 31,
        atk: 31,
        def: 31,
        spa: 31,
        spd: 31,
        spe: 31,
    };

    const ATK_IVS: Ivs = Ivs {
        hp: 31,
        atk: 31,
        def: 31,
        spa: 0,
        spd: 31,
        spe: 31,
    };

    const SPA_IVS: Ivs = Ivs {
        hp: 31,
        atk: 0,
        def: 31,
        spa: 31,
        spd: 31,
        spe: 31,
    };

    #[test]
    fn produces_correct_rands() {
        let expected: [u32; 1000] = [
            0x00006073, 0xe97e7b6a, 0x52713895, 0x31b0dde4, 0x8e425287, 0xe2cca5ee, 0xafc58ac9,
            0x67dbb608, 0xfc3351db, 0xef2cf4b2, 0xfc5ecc3d, 0xcac5ec6c, 0xebd6f26f, 0x993d6bb6,
            0x7abcb0f1, 0xcba72510, 0x5dd60843, 0x91784efa, 0x27a62ce5, 0x618d43f4, 0x1692a757,
            0xcfb8227e, 0x375d7419, 0x30806d18, 0x407c23ab, 0x48fbaa42, 0x3213fa8d, 0xfee7047c,
            0xdfa3113f, 0x3d69ea46, 0x639e7441, 0x1d29ae20, 0xea8d4413, 0x6296268a, 0x9268d535,
            0xa3974e04, 0x1c49d027, 0x6e03e30e, 0x31aa5169, 0xaa890828, 0xd3c5097b, 0xc3eae3d2,
            0x82d95cdd, 0xe0c6408c, 0x945c840f, 0x4e3b2cd6, 0x5a5fab91, 0x24289b30, 0xfbb313e3,
            0xbfe1021a, 0x7b8e3185, 0x007ffc14, 0x40c4ccf7, 0xc848e79e, 0xbfd122b9, 0x38b68738,
            0x903b034b, 0xfb23a162, 0x7d23f32d, 0xbe34a09c, 0xda004adf, 0x706a3366, 0xdfc556e1,
            0xba84ec40, 0xe41477b3, 0x60a1e1aa, 0x2b2b41d5, 0x8f384e24, 0xb6a09dc7, 0x4160302e,
            0x1636e809, 0xf009ea48, 0xb54b111b, 0x260ee2f2, 0xb6a8bd7d, 0x7b4324ac, 0xf9cb65af,
            0x68effdf6, 0xafd47631, 0x745fa150, 0xc3be6f83, 0xe061c53a, 0x98950625, 0x84f14434,
            0x11ba4297, 0x2462bcbe, 0xcc80a159, 0xa7c43158, 0xb7a232eb, 0xa855a882, 0x1c5cbbcd,
            0xa242ccbc, 0x863ad47f, 0xad058c86, 0x11d20981, 0xb019ba60, 0x57fdfb53, 0x4ee9acca,
            0xba607e75, 0x451bde44, 0x172ebb67, 0x34a98d4e, 0x2d934ea9, 0x09665c68, 0x112d68bb,
            0xa1e0f212, 0x4274ee1d, 0x73c498cc, 0x2b0b974f, 0xf223df16, 0x284310d1, 0xa6543770,
            0xcb601b23, 0xc042985a, 0xd662aac5, 0x71691c54, 0x8d5b0837, 0x3dcda1de, 0x8793eff9,
            0xa0b16b78, 0x1119b28b, 0x7ed9bfa2, 0xb466546d, 0xf69988dc, 0x7d3aae1f, 0xbe03f5a6,
            0x40ec8c21, 0x79f01880, 0x85b1cef3, 0xdcb587ea, 0xd1b08b15, 0xf9c9fe64, 0x0bdc2907,
            0xa3a7fa6e, 0x7be78549, 0xeba65e88, 0xabd4105b, 0x87a91132, 0x44e5eebd, 0x07d29cec,
            0xcb0518ef, 0xf69ed036, 0x24d37b71, 0x480e5d90, 0xfc0016c3, 0x70cb7b7a, 0x809f1f65,
            0x2c6f8474, 0xcb8f1dd7, 0xf25196fe, 0x4f330e99, 0x6a863598, 0x4b09822b, 0x70f7e6c2,
            0x5de8bd0d, 0x6ac0d4fc, 0xebe7d7bf, 0x722d6ec6, 0x683cdec1, 0x381006a0, 0x8097f293,
            0xfd4d730a, 0xf6c367b5, 0xc5caae84, 0x7690e6a7, 0x6e23778e, 0x395b8be9, 0xafd1f0a8,
            0x9da707fb, 0xebaf4052, 0x50a3bf5d, 0xd8f5310c, 0x109fea8f, 0x8728d156, 0xbaadb611,
            0x8b9613b0, 0x13066263, 0x47446e9a, 0xd6f26405, 0x008c7c94, 0xf83e8377, 0xa3b69c1e,
            0xb585fd39, 0x704a8fb8, 0x67d9a1cb, 0x34f81de2, 0xa58bf5ad, 0x1240b11c, 0x932a515f,
            0x9c49f7e6, 0x36eb0161, 0xae8184c0, 0x30186633, 0xe7f96e2a, 0xa3411455, 0xa5a5eea4,
            0x4d34f447, 0xf7e404ae, 0xd2176289, 0x92f112c8, 0x530e4f9b, 0xa63b7f72, 0x6c565ffd,
            0xecb4552c, 0xc6c40c2f, 0xb889e276, 0xb2f9c0b1, 0x46f359d0, 0xa1dafe03, 0xdcf571ba,
            0x0d0478a5, 0x1c4804b4, 0x53513917, 0x37c4b13e, 0x80b4bbd9, 0x410679d8, 0xbdf2116b,
            0x45226502, 0x8bf7fe4d, 0x64a11d3c, 0xc7ea1aff, 0x13219106, 0x101ef401, 0x454c92e0,
            0x4f9b29d3, 0x1801794a, 0x44d190f5, 0x79e3bec4, 0x99b051e7, 0x28b1a1ce, 0xe6430929,
            0xf60bc4e8, 0x8c71e73b, 0x5395ce92, 0x12a5d09d, 0xac98094c, 0x4c597dcf, 0xa38a0396,
            0x8adf9b51, 0xf42e2ff0, 0x0de5e9a3, 0x0f2684da, 0x4a7d5d45, 0x922a1cd4, 0x30af3eb7,
            0x1843d65e, 0xaae74a79, 0x8fc1f3f8, 0xf7bad10b, 0xdfbebc22, 0x85d4d6ed, 0x3d6a195c,
            0x730f349f, 0xb17c3a26, 0x0b00b6a1, 0x08793100, 0x6e883d73, 0x4cad946a, 0x3d1cdd95,
            0x070c1ee4, 0x79eaff87, 0x6c544eee, 0x4a067fc9, 0x5e2a0708, 0x5e39cedb, 0x54062db2,
            0x323a113d, 0xe6284d6c, 0x94483f6f, 0x64f134b6, 0x738745f1, 0xb14e9610, 0x908f2543,
            0xff1fa7fa, 0xab0511e5, 0x58bac4f4, 0xf8409457, 0x32fc0b7e, 0x6245a919, 0x3384fe18,
            0x139be0ab, 0x07152342, 0x7bca7f8d, 0xdc23a57c, 0x11819e3f, 0x5621f346, 0xf2b84941,
            0xa80f5f20, 0xf047a113, 0x8945bf8a, 0xe1cafa35, 0xf5a70f04, 0x1fccfd27, 0xb2940c0e,
            0x0589c669, 0x7453d928, 0x30ce067b, 0xcbd49cd2, 0x2dbb21dd, 0xcaed218c, 0x2578510f,
            0x1d8775d6, 0x5218c091, 0x405c8c30, 0x373eb0e3, 0x1228db1a, 0x3e439685, 0x4a81fd14,
            0x25ed39f7, 0xf9b5509e, 0x08f7d7b9, 0x27579838, 0x63fd404b, 0x816d9a62, 0xca80f82d,
            0xe455c19c, 0xb42957df, 0xe3dabc66, 0x466dabe1, 0x78171d40, 0x0c4154b3, 0x1511faaa,
            0x7c83e6d5, 0xd23c8f24, 0xd13e4ac7, 0x6f38d92e, 0x54f4dd09, 0x05913b48, 0xc0968e1b,
            0xa3491bf2, 0xdbd1027d, 0xf06e85ac, 0x1ad1b2af, 0xf214c6f6, 0xbfbc0b31, 0x07601250,
            0xe35c8c83, 0xf18a1e3a, 0x07e0eb25, 0x2607c534, 0x499d2f97, 0x6237a5be, 0x3525d659,
            0x8a41c258, 0x8f46efeb, 0xd9102182, 0x42a040cd, 0x5d886dbc, 0xffee617f, 0x416e9586,
            0x3948de81, 0x70986b60, 0xcddd5853, 0x7b5a45ca, 0x4aefa375, 0x0d549f44, 0xe826e867,
            0x9a0ab64e, 0xa86fc3a9, 0x02ea2d68, 0x1dfb65bb, 0x86abab12, 0x8723b31d, 0x503479cc,
            0x233c644f, 0x0b612816, 0x099925d1, 0x10612870, 0x4a50b823, 0x8a8b715a, 0xff850fc5,
            0x8dd41d54, 0x07387537, 0xe64b0ade, 0xb0f7a4f9, 0x9f4b7c78, 0x8fe0ef8b, 0x5c44b8a2,
            0x28d0596d, 0xb343a9dc, 0x2db8bb1f, 0x59a57ea6, 0xb271e121, 0x2d9b4980, 0x1483abf3,
            0x8b66a0ea, 0x7eb63015, 0xfb773f64, 0xd26ed607, 0xaed1a36e, 0xa4227a49, 0x8166af88,
            0xad648d5b, 0xe6444a32, 0xee5b33bd, 0x47c6fdec, 0x81a065ef, 0x96349936, 0x30d81071,
            0x0967ce90, 0xf58333c3, 0x0e74d47a, 0x10d80465, 0x086f0574, 0x16a70ad7, 0x83b77ffe,
            0x7a954399, 0xcd7cc698, 0xb4333f2b, 0x1d535fc2, 0x35b9420d, 0xb50f75fc, 0x0a7064bf,
            0x1b4777c6, 0x4d10b3c1, 0xef27b7a0, 0x939c4f93, 0x587f0c0a, 0x3d7f8cb5, 0xd52c6f84,
            0x11fe13a7, 0xad55a08e, 0x203500e9, 0xba0ec1a8, 0x273a04fb, 0xf65af952, 0x441f845d,
            0x98ae120c, 0x0ce5b78f, 0xc3571a56, 0xeaa0cb11, 0x447c04b0, 0x425bff63, 0xf28e479a,
            0x1b81c905, 0x00607d94, 0x43d0f077, 0xbc45051e, 0xc426b239, 0x9fdda0b8, 0x9ea5decb,
            0xf28416e2, 0x9602faad, 0x9673d21c, 0xf6fd5e5f, 0x791c80e6, 0x584d5661, 0x9945b5c0,
            0xd28f4333, 0x39eb872a, 0xa0f3b955, 0xb6fc2fa4, 0x3cbca147, 0x195eadae, 0x28cf5789,
            0x09ea63c8, 0x97e3cc9b, 0xaf37b872, 0x2f18a4fd, 0x6871b62c, 0x2ff4592f, 0xc790ab76,
            0xa01b55b1, 0xb7a5cad0, 0x62431b03, 0xf01fcaba, 0xf32a5da5, 0xc43085b4, 0x6e9e2617,
            0x95bb9a3e, 0xf3d3f0d9, 0xc5760ad8, 0x45a0ce6b, 0x761ede02, 0xea55834d, 0xeef8be3c,
            0xe847a7ff, 0x69ec9a06, 0xd74fc901, 0xb3fd43e0, 0x2cc486d3, 0xcaf4124a, 0xb6bab5f5,
            0xa16e7fc4, 0xfc927ee7, 0xfab4cace, 0xfe197e29, 0xf20195e8, 0x5fc9e43b, 0xcd228792,
            0xc9ee959d, 0x4099ea4c, 0xe9b44acf, 0xdba94c96, 0x6e6fb051, 0xfced20f0, 0x5aa086a3,
            0x04715dda, 0x5f79c245, 0x86671dd4, 0x8af6abb7, 0x99e33f5e, 0xa3c4ff79, 0x114e04f8,
            0xf38c0e0b, 0x066bb522, 0x4758dbed, 0xba263a5c, 0x6737419f, 0xe87fc326, 0x81400ba1,
            0x6b566200, 0xd1a41a73, 0xeae0ad6a, 0x807c8295, 0x790b5fe4, 0x0f67ac87, 0xdd1ff7ee,
            0x143b74c9, 0x175c5808, 0x33544bdb, 0xd06366b2, 0xa349563d, 0x0eaeae6c, 0xcd0d8c6f,
            0x3c68fdb6, 0x26c5daf1, 0x525a0710, 0x04dc4243, 0x70cb00fa, 0x1c17f6e5, 0x5d8c45f4,
            0xa0c28157, 0xd683f47e, 0xa221de19, 0x7a6d8f18, 0x46cf9dab, 0xc5b29c42, 0x35b5048d,
            0x5784467c, 0x90b42b3f, 0xf39dfc46, 0xc1461e41, 0x8f591020, 0xc495fe13, 0xbcf9588a,
            0xf3e11f35, 0x065ad004, 0x47242a27, 0xd068350e, 0x135d3b69, 0x4302aa28, 0x1aeb037b,
            0xfd4255d2, 0xbdd0e6dd, 0x2438028c, 0x00e81e0f, 0x2a97bed6, 0x4e45d591, 0x99f47d30,
            0x0e5e4de3, 0xba74b41a, 0xd8acfb85, 0x4427fe14, 0xcbe9a6f7, 0xdd65b99e, 0xf1128cb9,
            0x1bdca938, 0x31d37d4b, 0x9a3b9362, 0xb211fd2d, 0x8a9ae29c, 0x15a664df, 0x8e0f4566,
            0xb68a00e1, 0x940d4e40, 0xdd0231b3, 0xa88613aa, 0xfa908bd5, 0xf5e4d024, 0x89aff7c7,
            0x6855822e, 0xd7a6d209, 0x61fc8c48, 0x72f60b1b, 0x5c0754f2, 0x902d477d, 0x36bde6ac,
            0x402bffaf, 0xeafd8ff6, 0x1e17a031, 0x59c48350, 0xf88ea983, 0xaab6773a, 0x38e0d025,
            0x18c24634, 0x3c541c97, 0xc4508ebe, 0xc6bf0b59, 0x34a35358, 0xfaffaceb, 0x2e4e9a82,
            0x2d17c5cd, 0x7af20ebc, 0x3af5ee7f, 0xbe9b9e86, 0x3433b381, 0x917b1c60, 0xc650b553,
            0x58cedeca, 0x7232c875, 0xd8316044, 0xd0f31567, 0xbcafdf4e, 0x714038a9, 0x8551fe68,
            0xebdd62bb, 0xb8fa6412, 0x0506781d, 0x5fc85acc, 0xd9c1314f, 0xc6627116, 0x83633ad1,
            0xbbd21970, 0x18d55523, 0x4ed84a5a, 0xd45b74c5, 0x9de31e54, 0x35e9e237, 0x250c73de,
            0x8d4f59f9, 0x27c98d78, 0x3cbc2c8b, 0xf033b1a2, 0x8b6e5e6d, 0xb411cadc, 0xd98ac81f,
            0x900b07a6, 0xc16b3621, 0x43aa7a80, 0xffe988f3, 0xbd1bb9ea, 0x2c6fd515, 0x21c88064,
            0x2ad58307, 0x693f4c6e, 0x24516f49, 0xe20b0088, 0x8a090a5b, 0xa4638332, 0x7b0478bd,
            0x1cdf5eec, 0xb08fb2ef, 0x098e6236, 0x1f50a571, 0x8e253f90, 0x989a50c3, 0xf8222d7a,
            0x36c4e965, 0x7a128674, 0x1092f7d7, 0x1d6168fe, 0xe2eb7899, 0x7c575798, 0xe570fc2b,
            0x1232d8c2, 0x25bdc70d, 0x258216fc, 0x5e4cf1bf, 0x112580c6, 0x995888c1, 0x0aa368a0,
            0xdd34ac93, 0x08b4a50a, 0xeeefb1b5, 0x2b323084, 0xb93f40a7, 0x8dcbc98e, 0x690275e9,
            0xd12f92a8, 0xa5e101fb, 0x728ab252, 0xc4cf495d, 0x4f8af30c, 0x3b7f848f, 0x05496356,
            0x4707e011, 0x42c5f5b0, 0x75459c63, 0x3bdc209a, 0xdfc52e05, 0x37d87e94, 0x38375d77,
            0x4f176e1e, 0x99bb6739, 0xdd54b1b8, 0x37861bcb, 0x8a940fe2, 0xc8adffad, 0x22caf31c,
            0xca246b5f, 0x54b309e6, 0xab23ab61, 0xea6de6c0, 0x859a2033, 0xb2e1a02a, 0x735a5e55,
            0x30f670a4, 0xb2184e47, 0xce1d56ae, 0xeb7b4c89, 0xcfc7b4c8, 0xebcd499b, 0x3bb7f172,
            0x290ee9fd, 0x3d53172c, 0x8578a62f, 0x0e5b7476, 0x03b0eab1, 0xefbc3bd0, 0x803f3803,
            0xf34e23ba, 0x430442a5, 0x45bd06b4, 0x2cbf1317, 0xdff6833e, 0xb7e725d9, 0x19c99bd8,
            0xc9638b6b, 0x139f5702, 0xb4e7084d, 0x63745f3c, 0xb1f934ff, 0x717ba306, 0x99f49e01,
            0x8b11f4e0, 0xf481e3d3, 0x76eaab4a, 0x6757daf5, 0x539d40c4, 0x5f48abe7, 0x51fbf3ce,
            0x8be3f329, 0x7edb66e8, 0x5c35e13b, 0xdc334092, 0x626b5a9d, 0x8fbfcb4c, 0x2d6317cf,
            0x7d8c9596, 0x1273c551, 0x4f1011f0, 0x5eef23a3, 0x3bc036da, 0xc82a2745, 0xf6481ed4,
            0x821218b7, 0x79c6a85e, 0x7796b479, 0x24be15f8, 0x85714b0b, 0x2b9cae22, 0x9f10e0ed,
            0x03065b5c, 0x3eb34e9f, 0x82474c26, 0xbcf360a1, 0x38979300, 0xf953f773, 0x5417c66a,
            0x6c902795, 0x97aea0e4, 0x1eb85987, 0xc52fa0ee, 0x5e6469c9, 0xa372a908, 0x4b82c8db,
            0xf4449fb2, 0x9f8c9b3d, 0x54590f6c, 0x6626d96f, 0xafa4c6b6, 0xe4786ff1, 0xbec97810,
            0x8abd5f43, 0x767a59fa, 0xcadedbe5, 0x8001c6f4, 0xe0186e57, 0x4a4fdd7e, 0x46f21319,
            0x153a2018, 0xaa175aab, 0x14d41542, 0xafd3898d, 0x8108e77c, 0x2d3ab83f, 0xa5de0546,
            0x1f47f341, 0xe306c120, 0x37785b13, 0x8db0f18a, 0x18ab4435, 0xe5b29104, 0x624f5727,
            0x57805e0e, 0xab24b069, 0x26957b28, 0x621c007b, 0xe8340ed2, 0x831aabdd, 0xfca6e38c,
            0xf6abeb0f, 0x056c07d6, 0x9ee6ea91, 0x40f06e30, 0x5111eae3, 0x48c48d1a, 0x9aca6085,
            0xfd71ff14, 0x02ba13f7, 0x035a229e, 0xc82141b9, 0x2645ba38, 0xc9bdba4b, 0xd58d8c62,
            0x83d7022d, 0xc104039c, 0xce7771df, 0xff07ce66, 0x801a55e1, 0x1e677f40, 0x26570eb3,
            0xaafe2caa, 0xf55130d5, 0x0a311124, 0xaff5a4c7, 0xbcb62b2e, 0xee4cc709, 0x154bdd48,
            0x9c69881b, 0xe0498df2, 0x23bd8c7d, 0x5e3147ac, 0x39da4caf, 0xe3aa58f6, 0x1ae73531,
            0x7b8cf450, 0xd354c683, 0x9be6d03a, 0x7b94b525, 0x6d20c734, 0xb9df0997, 0xdaad77be,
            0xd14c4059, 0xb6e8e458, 0xcacc69eb, 0x38111382, 0x2bc34acd, 0x0a7fafbc, 0x07517b7f,
            0xb48ca786, 0x52928881, 0x22c1cd60, 0x11581253, 0x774777ca, 0x8029ed75, 0xb5b22144,
            0xa1934267, 0x2c99084e, 0xd804ada9, 0xa09dcf68, 0x4ad35fbb, 0xc8cd1d12, 0x0c1d3d1d,
            0xb2803bcc, 0x1e99fe4f, 0xb327ba16, 0xe5a14fd1, 0xb8a70a70, 0x06edf223, 0x9d29235a,
            0xa4e5d9c5, 0xb1961f54, 0xe96f4f37, 0x8a11dcde, 0x6c9b0ef9, 0x4a2b9e78, 0xe7ab698b,
            0xcaa6aaa2, 0x2c40636d, 0x0903ebdc, 0x50b0d51f, 0xf13490a6, 0xbdd88b21, 0xcc1dab80,
            0x17e365f3, 0x01d4d2ea, 0x2add7a15, 0x7cbdc164, 0xe5103007, 0x62f0f56e, 0x4c746449,
            0x1d935188, 0x11c1875b, 0x5206bc32, 0x3ae1bdbd, 0x971bbfec, 0x27d2ffef, 0xe0ac2b36,
            0x403d3a71, 0xe646b090, 0xb5456dc3, 0xbdd3867a, 0x4265ce65, 0x915a0774, 0x8952e4d7,
            0x4f4f51fe, 0xd835ad99, 0x8715e898, 0xaec2b92b, 0xdf9651c2, 0x7df64c0d, 0xcc18b7fc,
            0xb77d7ebf, 0xe3c789c6, 0x9d145dc1, 0x9a8319a0, 0x2d610993, 0x9dee3e0a, 0x5b13d6b5,
            0xd7dbf184, 0x3c546da7, 0x9f85f28e, 0x63c3eae9, 0x053463a8, 0xe99bfefb, 0xf03e6b52,
            0x22b30e5d, 0x0d8bd40c, 0x6c6d518f, 0xdcffac56, 0x1fe2f511, 0x9673e6b0, 0x7bc33963,
            0xb32df99a, 0x73bc9305, 0xb6f47f94, 0xa571ca77, 0xec2dd71e, 0x86441c39, 0x38afc2b8,
            0x027a58cb, 0x8d2808e2, 0x8d8d04ad, 0xc746141c, 0xdc9f785f, 0xbf0d92e6, 0x7f6e0061,
            0xb1fa17c0, 0x1938fd33, 0xe2dbb92a, 0x6a750355, 0x2394b1a4, 0x7d47fb47, 0xa61fffae,
            0x6a1b4189, 0xf48905c8, 0x1ecac69b, 0xdbbc2a72, 0xaa392efd, 0x7b58782c, 0x9750f32f,
            0x1cea3d76, 0x2dba7fb1, 0xff36acd0, 0xcbcf5503, 0x76807cba, 0x4c9227a5, 0xb0ed87b4,
            0x5db40017, 0xa6756c3e, 0x1cee5ad9, 0x4e012cd8, 0x193a486b, 0xada3d002, 0x3bac8d4d,
            0xd214003c, 0xf4fec1ff, 0xb9ceac06, 0xa80d7301, 0xda8aa5e0, 0x76d340d3, 0xabe5444a,
            0xa6a8fff5, 0xa07001c4, 0x91d2d8e7, 0xbe871cce, 0xdfa26829, 0xac9937e8,
        ];

        let results = Pokerng::new(0).take(1000).collect::<Vec<_>>();

        assert_list_eq!(results, expected);
    }

    #[test]
    fn can_reverse() {
        let mut rng = Pokerng::new(0);
        assert_eq!(rng.nth(100), Some(0x172ebb67));
        assert_eq!(rng.nth_back(100), Some(0));
    }

    #[test]
    fn can_rev_iterator() {
        let mut rng = Pokerng::new(0xe97e7b6a).rev();
        assert_eq!(rng.next(), Some(0x00006073));
        assert_eq!(rng.rand::<u32>(), 0);
    }

    #[test]
    fn demo_rands() {
        // Get free iteration tools, like advancing and collecting
        let result: Vec<u32> = Pokerng::new(0).skip(0).take(4).collect();
        assert_eq!(result, [0x00006073, 0xe97e7b6a, 0x52713895, 0x31b0dde4]);

        // Advance without chaining
        let mut rng = Pokerng::new(0);
        rng.advance(1);
        assert_eq!(rng.rand::<u16>(), 0xe97e);

        // Custom behavior for different types, such as u32 being u16 << 16 | u16
        assert_eq!(rng.rand::<u32>(), 0x52713895);
    }

    #[test]
    fn recover_poke_6iv_method1() {
        let results = recover_poke_rng_iv(&MAX_IVS, false);
        let expected = [
            2147430490, 4294914138, 2147457069, 4294940717, 2147481953, 4294965601,
        ];

        assert_list_eq!(results, expected);
    }

    #[test]
    fn recover_poke_atk_ivs_method1() {
        let results = recover_poke_rng_iv(&ATK_IVS, false);
        let expected = [2147448123, 4294931771, 2147474702, 4294958350];

        assert_list_eq!(results, expected);
    }

    #[test]
    fn recover_poke_spa_ivs_method1() {
        let results = recover_poke_rng_iv(&SPA_IVS, false);
        let expected = [2082409964, 4229893612, 2082436543, 4229920191];

        assert_list_eq!(results, expected);
    }

    #[test]
    fn recover_poke_6iv_method4() {
        let results = recover_poke_rng_iv(&MAX_IVS, true);
        let expected = [2147439333, 4294922981, 2147454318, 4294937966];

        assert_list_eq!(results, expected);
    }

    #[test]
    fn recover_poke_atk_ivs_method4() {
        let results = recover_poke_rng_iv(&ATK_IVS, true);
        let expected = [2147461214, 4294944862, 2147476199, 4294959847];

        assert_list_eq!(results, expected);
    }

    #[test]
    fn recover_poke_spa_ivs_method4() {
        let results = recover_poke_rng_iv(&SPA_IVS, true);
        let expected = [2082470326, 4229953974];

        assert_list_eq!(results, expected);
    }
}
