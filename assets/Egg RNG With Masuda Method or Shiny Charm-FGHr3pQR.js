import{u as s,j as e}from"./index-DW6IbR-p.js";const o={title:"Egg RNG Guide with Masuda and/or Shiny Charm",description:"RNG for eggs using Masuda Method and/or with the Shiny Charm",slug:"retail-sm-egg-mmsc",subCategory:"General"};function i(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Differences with Masuda Method and/or Shiny Charm"}),`
`,e.jsx(n.p,{children:"Using the Masuda Method and/or Shiny Charm sets the ESVs of all eggs in a fixed order. To reach desired frames, you'll need to accept or reject eggs accordingly. Without these, any egg frame can have the ESV you want since ESVs are only generated once you accept an egg."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Note: ESV (Egg Shiny Value) determines if an egg will hatch shiny or not. If an ESV matches a TSV (Trainer Shiny Value), the egg will hatch shiny.
`})}),`
`,e.jsx(n.h2,{children:"Tools"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/wwwwwwzx/3DSRNGTool/releases",children:"3DSRNGTool"})}),`
`,e.jsxs(n.li,{children:["Optional: A 3DS with PCalc (",e.jsx(n.a,{href:"https://www.pokemonrng.com/misc-3ds-installing-pcalc",children:"PCalc Install Guide"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 1: Setting Up 3DSRNGTool"}),`
`,e.jsx(n.h3,{children:"Configuration:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Enter your game version and TSV (",e.jsx(n.code,{children:"Start + Up"})," in PCalc will reveal TSV in the Game View window)."]}),`
`,e.jsx(n.li,{children:"Ignore the initial seed as it won't be used."}),`
`,e.jsx(n.li,{children:'Tick the "Shiny Charm" checkbox if you have the Shiny Charm.'}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Note: If you aim to RNG an egg with specific ESV that is not yours, click Edit TSV List, enter TSV(s), then tick the "Other TSVs Shiny". Do not enter the TSV in the top right. Only YOUR TSV should be in the top right or the RNG will be incorrect.
`})}),`
`,e.jsx(n.h3,{children:"Parents information:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fill in details as per the parents you're using.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Tick the "Masuda Method" box if the parents have different languages.'}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Note: Only language of the Pokémon matters for Masuda Method, not the region.
`})}),`
`,e.jsx(n.p,{children:"When using a Ditto with a genderless Pokémon, Ditto is considered the female parent. If not, Ditto is the opposite gender of the other parent."}),`
`,e.jsx(n.h3,{children:"Current status:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:['Input your current egg seeds in the "Current Status" section of 3DSRNGTool.',`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Press ",e.jsx(n.code,{children:"Start + Down"})," in-game if you are using PCalc, then insert the resultant egg seed into 3DSRNGTool."]}),`
`,e.jsx(n.li,{children:"Refer to Additional Notes for other methods to find egg seeds without PCalc."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:'Avoid ticking the "Main RNG Egg (PID)" box.'}),`
`,e.jsx(n.li,{children:'Fill in "Filters" with the details of the egg you aim to RNG.'}),`
`,e.jsx(n.li,{children:'Tick "Shiny Only" if you want a shiny egg.'}),`
`,e.jsx(n.li,{children:'Enter "0" as the starting frame.'}),`
`,e.jsx(n.li,{children:'Click "Calculate".'}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 2: Selecting a Target Frame"}),`
`,e.jsx(n.p,{children:"Any given frame can be chosen, but lower frames are usually more convenient due to fewer egg accepts/rejects."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'Right-click on your desired row and select "Set as Target Frame".'}),`
`,e.jsxs(n.li,{children:['Click on "Shortest Path" and then "Calculate".',`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This calculates the shortest path for your target egg with the least number of accepts and rejects."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Accept or reject the eggs from top to bottom as listed. A different order will yield the wrong egg seeds."}),`
`,e.jsxs(n.li,{children:["The final egg that you accept will be your target egg.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Confirm your egg frame using PCalc by checking your egg seeds in-game (",e.jsx(n.code,{children:"Start + Down"})," to open the menu)."]}),`
`,e.jsx(n.li,{children:"If a specific shiny egg is what you're after, the frames could be quite high and demand a lot of egg accepts/rejects. This is due to the predetermined ESVs of the eggs."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{children:"Additional Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["PCalc is useful for checking your TSV, Shiny Charm, or Masuda Method.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For TSV, press ",e.jsx(n.code,{children:"Start + Up"})," to view the Game View window. Look where it says ",e.jsx(n.code,{children:"YOUR TSV"}),"."]}),`
`,e.jsxs(n.li,{children:["For Shiny Charm and parents' info, press ",e.jsx(n.code,{children:"Start + Down"})," for the Egg Info window."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Without PCalc, your TSV can be found in other ways.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Via Homebrew or CFW with a save manager like Checkpoint. Extract save file, view it in PKHeX, then hover over TID and SID to find TSV."}),`
`,e.jsx(n.li,{children:"At /r/SVEXchange, someone else might be able to help you find it."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If you aren't using PCalc and don't know your egg seeds, try these methods.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you've accepted or rejected eggs and don't want to use Homebrew or CFW, use the ",e.jsx(n.a,{href:"https://www.pokemonrng.com/retail-sm-egg-seed-no-cfw",children:"127 Magikarp method"}),"."]}),`
`,e.jsxs(n.li,{children:["If you haven't interacted with the daycare and don't want to use Homebrew or CFW, try the ",e.jsx(n.a,{href:"https://www.pokemonrng.com/retail-sm-egg-seed-no-cfw",children:"8 egg method"}),"."]}),`
`,e.jsx(n.li,{children:"With access to Homebrew or CFW, PKHeX can view your egg seeds after extracting the save file using a save manager like Checkpoint."}),`
`]}),`
`]}),`
`]})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default,o as frontmatter};
