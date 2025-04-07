import{u as r,j as e}from"./index-CPDhDZJw.js";const a={title:"Live Battery Stationary RNG",description:"Easily RNG for perfect shiny legendaries in Ruby and Sapphire",slug:"emulator-rs-stationary",subCategory:"Emulator",tag:"emu"};function i(t){const n={a:"a",br:"br",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Tools"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/mgba-setup",children:"mGBA with lua scripts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Admiral-Fish/PokeFinder/releases",children:"PokeFinder"})}),`
`,e.jsx(n.li,{children:"A save file that has been ID abused. It's optional but recommended if going for shiny spreads with good IVs"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Note: This method works for any Pokémon generated by Method 1 in Pokémon Ruby/Sapphire. If you're looking for a specific spread to be shiny, ID/SID abuse might be required first.
`})}),`
`,e.jsx(n.h2,{children:"Step 1: Set Up PokeFinder"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'Open PokeFinder, select "Gen 3 Stationary," and go to the "Searcher" tab.'}),`
`,e.jsx(n.li,{children:"Enter the spread you want and check for results."}),`
`,e.jsx(n.li,{children:"If no results appear, adjust the filters until you find a result."}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 2: Get Your Initial Seed"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'Right-click your chosen seed and select "Generate times to seed."'}),`
`,e.jsxs(n.li,{children:[`The seed will appear in "16-Bit Seed To Time." Set the year to 2000, as other years won't work.`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This gives you the initial seed and the time/date needed to hit it."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:'In the "Generator" tab, enter the initial seed from "16-Bit Seed To Time."'}),`
`,e.jsx(n.li,{children:'Set the search method to "Method 1" and click "Generate."'}),`
`,e.jsx(n.li,{children:'Find the advance given in "16-Bit Seed To Time."'}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 3: Hitting the Desired Seed and Advance"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["In mGBA, go to ",e.jsx(n.code,{children:"Tools -> Game overrides..."}),' and enable "Realtime clock."']}),`
`,e.jsxs(n.li,{children:["Then go to ",e.jsx(n.code,{children:"Tools -> Game Pak Sensors..."}),', select "Start time at," and enter the target time and date.']}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Note: Unlike Generations 4 and 5, only the hours and minutes matter for hitting the initial seed.
`})}),`
`,e.jsx(n.h2,{children:"Step 4: Finding the Delay"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Load the game and reach the final screen before encountering the target Pokémon. Make save states along the way."}),`
`,e.jsxs(n.li,{children:["At the target advance, press ",e.jsx(n.code,{children:"A"})," to start the encounter."]}),`
`,e.jsx(n.li,{children:"Check the IVs of the encountered Pokémon."}),`
`,e.jsx(n.li,{children:"In PokeFinder, enter the IVs and search for the advance you hit."}),`
`,e.jsxs(n.li,{children:["Calculate the delay:",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"Delay = Target Advance - Advance Hit"})]}),`
`,e.jsx(n.li,{children:"Input this delay into PokeFinder and generate results again."}),`
`,e.jsx(n.li,{children:"Find your target advance and note the new advance number."}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 5: Obtain the Desired Pokémon"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Repeat the process using the new advance after factoring in the delay."}),`
`,e.jsx(n.li,{children:"If done correctly, you'll hit the desired spread."}),`
`,e.jsx(n.li,{children:"If off, check how many advances you missed, reload a save state, adjust, and try again."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Success.png",alt:"Success"})})]})}function d(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default,a as frontmatter};
