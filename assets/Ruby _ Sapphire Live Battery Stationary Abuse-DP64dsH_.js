import{u as s,j as e}from"./index-DODpnl6_.js";const a={title:"Live Battery Stationary RNG",description:"RNG stationary Pokémon with more options than dead battery",slug:"emulator-rs-stationary",subCategory:"Emulator",tag:"emu"};function i(t){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Tools"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/mgba-setup",children:"mGBA with lua scripts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Admiral-Fish/PokeFinder/releases",children:"PokeFinder"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.nirsoft.net/utils/run_as_date.html",children:"runasdate (Optional)"})}),`
`,e.jsx(n.li,{children:"A save file that has been ID abused. It's optional but recommended if going for shiny spreads with good IVs"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Note: This method works for any Pokémon generated by Method 1 in Pokémon Ruby/Sapphire. If you're looking for a specific spread to be shiny, ID/SID abuse might be required first.
`})}),`
`,e.jsx(n.h2,{children:"Step 1: Setup VBA-RR"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Set the save mode correctly. Options > Emulation > Save Type > Automatic & Flash 128K."}),`
`,e.jsx(n.li,{children:"Enable Real Time Clock to obtain Live Battery seeds. Options > Emulation > Real Time Clock. If there are errors loading past the title screen, restart VBA for the changes to take effect."}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 2: Setup PokeFinder"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'In PokeFinder, choose "Gen 3 Stationary" and click the "Searcher" tab.'}),`
`,e.jsx(n.li,{children:"Input the spread you want and look for results. If no results appear, adjust filters until you find a suitable one. Ensure PokeFinder is using Method 1."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Setup.png",alt:"Setup"})}),`
`,e.jsx(n.h2,{children:"Step 3: Getting your Initial Seed"}),`
`,e.jsxs(n.p,{children:["The seed shown on the screen is what you must hit when you press ",e.jsx(n.code,{children:"A"})," on encounter."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'Right-click on the seed you are using and choose "Generate times to seed."'}),`
`,e.jsx(n.li,{children:`The seed will automatically be added into "16-Bit Seed To Time." Make sure the year is set to 2000 as other years won't work. This will give you your initial seed and the date and time needed to hit your desired seed.`}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Seed-to-Time.png",alt:"Seed to Time"})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:`Finding the frame to hit. On PokeFinder, enter your initial seed and spread, making sure it's set to search "Method 1." It should look something like this:`}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Target.png",alt:"Target"})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:`Click "Generate" and look for results. If you don't get a result, increase the max results number.`}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 4: Hitting the Desired Seed and Frame"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'Open runasdate (or change your computer clock) and set the date to one listed in "16-Bit Seed To Time."'}),`
`,e.jsx(n.li,{children:"If using runasdate, set up the screen like shown below:"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Initial-Seed.png",alt:"Initial Seed"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Note: Unlike Generations 4 and 5, only the hours and minutes matter for hitting the initial seed.
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Hit run to open VBA-RR."}),`
`,e.jsx(n.li,{children:"Load the lua script for your game."}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 5: Finding the Delay"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Advance to the final screen before encountering the target Pokémon, making save states along the way."}),`
`,e.jsxs(n.li,{children:["When you reach your target frame, press ",e.jsx(n.code,{children:"A"})," to enter the encounter."]}),`
`,e.jsx(n.li,{children:"Take note of the IVs of the Pokémon you encountered."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/IVs.png",alt:"IVs"})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:"Open a new PokeFinder and input your initial seed and the IVs of the encountered Pokémon."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Calibration.png",alt:"Calibration"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Since I hit ",e.jsx(n.code,{children:"A"})," on Frame 89016, that means 54 frames passed between my last input (pressing ",e.jsx(n.code,{children:"A"}),") and the IVs and PID being generated."]}),`
`,e.jsx(n.li,{children:"Therefore, to hit my 31/2/31/31/31/31 Modest spread, I must hit frame 180124."}),`
`,e.jsx(n.li,{children:"Target Frame = Desired Frame - Delay."}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 6: Advancing Frames"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Advance frames, keeping track of the frame count to avoid missing your target frame."}),`
`,e.jsxs(n.li,{children:["Continue until you reach your new target frame, pause the emulator, and hold the ",e.jsx(n.code,{children:"A"})," button."]}),`
`,e.jsx(n.li,{children:"Unpause the emulator and hit your shiny frame!"}),`
`,e.jsx(n.li,{children:"If you did everything right, you should hit your desired spread on your Pokémon. If not, calculate how many frames you're off, reload a previous save state, adjust accordingly, and try again."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Success.png",alt:"Success"})})]})}function o(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{o as default,a as frontmatter};
