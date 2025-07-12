const n=`---
- title: "Diamond, Pearl, and Platinum Wild RNG Guide"
  navDrawerTitle: "Wild RNG"
  description: "Learn how to RNG wild Pokémon in Diamond, Pearl, and Platinum for shiny and high-IV results."
  slug: "dppt-wild"
  category: "Diamond, Pearl, and Platinum"
  tag: "any"
---

## Introduction

This guide shows how to RNG wild Pokémon in **Diamond, Pearl, and Platinum** on both **retail** and **emulator**, including Trophy Garden and the Great Marsh.

## Tools

- [PokeFinder](/pokefinder)

## Set Up PokeFinder

1. Open PokeFinder and go to the Gen 4 Wild tab.
2. Choose "Searcher" and then select your profile.
3. In "Settings" pick the Pokemon you want to RNG.
4. Click "Search" and pick your target advance.

## Basic Wild RNG

You need to be in the area where your target Pokemon appears.  
You also need a Pokémon with **Sweet Scent** or the **Honey** item.

1. RNG for your initial seed:
   - [Retail Initial Seed RNG Guide](/dppt-initial-seed-retail)
   - [Emulator Initial Seed RNG Guide](/dppt-initial-seed)
2. Open your party menu in-game.
3. Use Chatots to advance to your target frame.
4. Use **Sweet Scent** or **Honey**.

Sweet Scent and Honey animations do **not** affect the RNG like in Gen 5.

## GBA Insertions

This works the same as basic wild RNG.  
GBA slot Pokemon appear in Encounter Slots 8 and 9.  
PokeFinder will show this info if your profile and settings are set up correctly.

## Fishing RNG

\`\`\`
Note: Methods that claim to boost fishing success do not work.
PokeFinder handles this bug automatically.
\`\`\`

1. Go to the fishing spot where your target Pokemon appears.
2. Use Chatots to reach the correct RNG advance.
3. Open your bag and use the fishing rod.

**On emulator:**
A big RNG jump after casting means you successfully hooked something.

### Feebas

Feebas encounters are trickier.

1. Find the correct tile where Feebas appears.
2. Save and prepare your RNG.
3. Use PokeFinder's Generator and input your initial seed.
4. Make sure your target advance results in an encounter.

Feebas RNG is not fully supported and may take trial and error.

## Trophy Garden RNG

1. Save your game in front of the garden owner.
2. Reload your game.
3. Open PokeFinder → Static → Method 1 and generate results.
4. Check the first value of the PID at your current advance.
5. Use this table to see which Pokemon he will mention:

<details>
<summary><b>Trophy Garden Table</b></summary>
| PID | Pokemon                   |
| --- | ------------------------- |
| 0   | Eevee                     |
| 1   | Bonsly                    |
| 2   | Happiny                   |
| 3   | Meowth                    |
| 4   | Cleffa                    |
| 5   | Clefairy                  |
| 6   | Igglybuff                 |
| 7   | Plusle                    |
| 8   | Jigglypuff                |
| 9   | Porygon (DP) / Ditto (Pt) |
| A   | Castform                  |
| B   | Minun                     |
| C   | Mime Jr.                  |
| D   | Marill                    |
| E   | Chansey                   |
| F   | Azurill                   |

</details>
\`\`\`
Note: You might be off by one due to indexing differences between tools.
Adjust if needed.
\`\`\`

\`\`\`
Note: The Pokemon of the day occupies Encounter Slot 6, and the previous day's Pokémon will be in Encounter Slot 7.
\`\`\`

## Great Marsh RNG

Works like Trophy Garden, and uses Encounter Slots 6 and 7.

1. Use the lookout to pick your desired Pokemon.
2. Save your game in front of the Great Marsh.
3. Find a target with a narrow enough range that allows hitting the target without introducing RNG noise from walking.
4. Perform the RNG as usual.

## Credits

- Chinese translation: xuanyelin, Hakuhiro.
`;export{n as default};
