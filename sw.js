if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),a={module:{uri:n},exports:u,require:t};e[n]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/(XD) PAL Starter Eevee RNG-rXfpwjvg.js",revision:null},{url:"assets/Advancing the RNG-Bs_ozatv.js",revision:null},{url:"assets/Advancing the RNG-BxF19rja.js",revision:null},{url:"assets/Advancing the RNG-CKRh2zyt.js",revision:null},{url:"assets/Basic Rules of RNG-Cd1222LR.js",revision:null},{url:"assets/Basic Rules of RNG-DhNWXfhP.js",revision:null},{url:"assets/Basic Rules of RNG-DIDyiPBv.js",revision:null},{url:"assets/BK - Emulator Setup-Dklhvg0j.js",revision:null},{url:"assets/BK - How to use PokeFinder-DpZq85AT.js",revision:null},{url:"assets/BK - How to use Shiny's site-D86TXCWm.js",revision:null},{url:"assets/Breeding RNG (Emu)-BrkP5kAE.js",revision:null},{url:"assets/CaptureSight Install-CcaWW99M.js",revision:null},{url:"assets/Channel-BbR4eg0i.js",revision:null},{url:"assets/CitraRNG Setup-BitJa7p2.js",revision:null},{url:"assets/Colosseum General Guide (Emu)-C9eKC-3K.js",revision:null},{url:"assets/Cute Charm-CCyYn2xa.js",revision:null},{url:"assets/Cute Charm-p0-oSlTz.js",revision:null},{url:"assets/Dead Battery Stationary RNG  (Emulator)-hslaFtbL.js",revision:null},{url:"assets/Desmume Setup-CFpexAvo.js",revision:null},{url:"assets/DexNav RNG-CjVW_uqO.js",revision:null},{url:"assets/Dream Radar-a2a9CZ68.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-B8G4LeXG.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-BkS0o1qu.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-CaRPd6oz.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-CLJgMENu.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-BrkhCA7a.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-Cve28yAt.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-Cz06n2eL.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-i0rNNsjH.js",revision:null},{url:"assets/Egg RNG-AjKYR6uh.js",revision:null},{url:"assets/Egg RNG-BvwabEvC.js",revision:null},{url:"assets/Egg RNG-D0SGLn_u.js",revision:null},{url:"assets/Egg RNG-ZZwgr3vI.js",revision:null},{url:"assets/Egg-6fLJg9Mm.js",revision:null},{url:"assets/Egg-CCbb0XVl.js",revision:null},{url:"assets/Egg-X0jEqFvV.js",revision:null},{url:"assets/Entralink-CUF4-Ez7.js",revision:null},{url:"assets/Find DS Parameters-DSlS7A6E.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-aFnhKD3Q.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-C0SicA-2.js",revision:null},{url:"assets/Friend Safari RNG Guide-nVmvROp8.js",revision:null},{url:"assets/Get Raid Seed With CFW-C2UeiwrZ.js",revision:null},{url:"assets/Get Raid Seed Without CFW-Clb_pv79.js",revision:null},{url:"assets/Home-6MucwjPx.js",revision:null},{url:"assets/Honey-CrvfGr28.js",revision:null},{url:"assets/How to Connect Dolphin to VBA-CVyDo_OW.js",revision:null},{url:"assets/How to Extract GBA Bios-CVoHgENl.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-BS2YARaO.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-BTEI4irO.js",revision:null},{url:"assets/How to Install PCalc-BtDp2d83.js",revision:null},{url:"assets/How to Install PokeReader-DPv-NlLM.js",revision:null},{url:"assets/index-C7pESl3A.js",revision:null},{url:"assets/Initial Seed Botting-CB0l_B7I.js",revision:null},{url:"assets/Initial Seed RNG-4n9FMr4D.js",revision:null},{url:"assets/Initial Seed RNG-8y-3zBD1.js",revision:null},{url:"assets/Initial Seed RNG-ByzYBggj.js",revision:null},{url:"assets/Initial Seed RNG-DbaiQ43V.js",revision:null},{url:"assets/Island Scan Pokemon-CTf0us4Z.js",revision:null},{url:"assets/Island Scan Pokemon-M7XYFwKV.js",revision:null},{url:"assets/Island Scan RNG-jh7r5pic.js",revision:null},{url:"assets/Island Scan-DlOr0e2Y.js",revision:null},{url:"assets/Live and Dry Battery-DMWRGAES.js",revision:null},{url:"assets/Live Battery TID RNG-GqkozFk2.js",revision:null},{url:"assets/MMO-DNcpZYyQ.js",revision:null},{url:"assets/Mystery Gift-akC0cy74.js",revision:null},{url:"assets/Mystery Gift-BTW__rSd.js",revision:null},{url:"assets/Nature Table-BOnD6lU8.js",revision:null},{url:"assets/NTR Helper Usage-UkB302XG.js",revision:null},{url:"assets/PokeFinder Setup-DyCenK-w.js",revision:null},{url:"assets/PokeRadar-BSYYZfV6.js",revision:null},{url:"assets/Raid RNG-BN9_np8_.js",revision:null},{url:"assets/Reseed RNG-DbyAHeEp.js",revision:null},{url:"assets/RNGing Without Custom Firmware-DDnnRsQ2.js",revision:null},{url:"assets/RNGing Without Custom Firmware-DVHSQVf1.js",revision:null},{url:"assets/Roamers-D6fB_zrH.js",revision:null},{url:"assets/RSE Wild RNG - Dry Battery Emulator-DUtzqmkM.js",revision:null},{url:"assets/Ruby _ Sapphire Live Battery Stationary Abuse-BPHGephO.js",revision:null},{url:"assets/Shiny WISHMKR Jirachi with wishmaker-calc-l-Y0WzLL.js",revision:null},{url:"assets/SOS RNG Guide-D0Er2q5o.js",revision:null},{url:"assets/SOS RNG-C4EF-_ce.js",revision:null},{url:"assets/Special Wild Case (Emu)-BXu2TLct.js",revision:null},{url:"assets/Stationary and Gift RNG-CtV0KJHI.js",revision:null},{url:"assets/Stationary RNG Emu-BiWzCEcb.js",revision:null},{url:"assets/Stationary RNG-Cx-dPkQ6.js",revision:null},{url:"assets/Stationary RNG-iHQStj9A.js",revision:null},{url:"assets/Stationary v2 Emu-DjtBr2kl.js",revision:null},{url:"assets/Stationary Wormhole RNG-C2bnMHqs.js",revision:null},{url:"assets/Stationary-CJ0WsaX-.js",revision:null},{url:"assets/Stationary-Ppe603D6.js",revision:null},{url:"assets/TID RNG Guide-BUkd-xvO.js",revision:null},{url:"assets/TID SID RNG-B8mdKccR.js",revision:null},{url:"assets/TID SID-CdyMFhxE.js",revision:null},{url:"assets/TID SID-D6DZtHoe.js",revision:null},{url:"assets/Time Finder.js (Citra)-_bop39P3.js",revision:null},{url:"assets/Time Finder.js (Citra)-DXSaG7XX.js",revision:null},{url:"assets/Timeline Guide-CoK9rp4z.js",revision:null},{url:"assets/Timeline Guide-D87q1gCL.js",revision:null},{url:"assets/Timeline Leap Guide-BKUWx3n1.js",revision:null},{url:"assets/Timeline Leap Guide-fHjLYbcw.js",revision:null},{url:"assets/Timeline With Fidget Guide-CPfJkSJ9.js",revision:null},{url:"assets/Timeline With Fidget Guide-Dv-ZK8Li.js",revision:null},{url:"assets/Transporter Patches-BQXuuCBn.js",revision:null},{url:"assets/Transporter-DffmtT1P.js",revision:null},{url:"assets/Using IPS Patches with Luma and Citra-BO9gMP2o.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-DE72xrog.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-DoNfBjSr.js",revision:null},{url:"assets/White Forest RNG (Emu)-CA61lzR5.js",revision:null},{url:"assets/Wild RNG - Emulator-DbDJGlH9.js",revision:null},{url:"assets/Wild RNG Emu-CVuvYGac.js",revision:null},{url:"assets/Wild RNG Emu-Cwrg0crE.js",revision:null},{url:"assets/Wild RNG-BDx8792V.js",revision:null},{url:"assets/Wild RNG-BJueemIo.js",revision:null},{url:"assets/Wild RNG-WjVKz0k3.js",revision:null},{url:"assets/Wild Spots-B6hohPPd.js",revision:null},{url:"assets/Wild-azULBpGh.js",revision:null},{url:"assets/Wild-DoZIdSfI.js",revision:null},{url:"assets/wildv2lua-CornX4Ji.js",revision:null},{url:"assets/Wondercard-x2ovv9So.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/XY Trainer ID_ Secret ID_ and TSV RNG Guide-DJETzIfO.js",revision:null},{url:"index.html",revision:"48e4757afc50730b88b16f30e7808e0a"},{url:"manifest.webmanifest",revision:"914c5dd2e345e3b2b21ef5b7ee551728"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
