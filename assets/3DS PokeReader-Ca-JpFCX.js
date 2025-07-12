const e=`---
- title: "PokeReader 3DS"
  description: "Learn how to install PokeReader on your 3DS to assist with RNG and perfect Pokémon hunting."
  slug: "install-pokereader"
  category: "3DS Tools"
  tag: "cfw"
---

PokeReader is a plugin to help RNG by bringing emulator-like functionality to physical consoles.

For how to install PokeReader on a 3DS emulator, [go here](/install-pokereader-emu).

## Tools

- [A 3DS with CFW (Custom Firmware)](https://3ds.hacks.guide/)
- [Luma version 13.0.0 or higher](https://github.com/LumaTeam/Luma3DS/releases)

## Install PokeReader on 3DS

1. Download the [latest release of PokeReader](https://github.com/zaksabeast/PokeReader/releases/latest).
2. Create the \`/luma/plugins\` folder if it does not exist.
3. Copy \`default.3gx\` to the \`/luma/plugins/\` folder.
4. Open Rosalina (\`L\` + \`Down\` + \`Select\`) and enable the \`Plugin Loader\`.

## PokeReader Controls

- \`Start\` + \`Up\`: Opens and closes the overlay
- \`Start\` + \`Select\`: Pauses the game
- \`Start\` while paused: Advances the game by 1 frame
- \`Select\` while paused: Unpauses the game
- Crystal VC only
  - \`L\` + \`R\`: Pauses the game
  - \`L\` while paused: Advances the game by 1 frame
  - \`R\` while paused: Unpauses the game

## Troubleshooting

**PokeReader does not load and my game crashes!**

Make sure you have updated the game to the latest version. PokeReader will not work on older game versions.

Game updates can be downloaded from the Nintendo eShop.

## What next?

Try some of these RNGs!

- [Shiny Celebi in Crystal](/gen2-celebi)
- [Easy Transporter RNG for perfect Pokemon](/transporter-rng-offline)
- [Shiny Wormhole Legends in USUM](/retail-usum-wormhole)

## Credits

- Chinese translation: Hakuhiro.
`;export{e as default};
