import{u as s,j as e}from"./index-JGnwVbR5.js";const a={title:"Live Battery Stationary RNG",description:"RNG stationary Pokemon with more options than dead battery",slug:"emulator-rs-stationary",subCategory:"Emulator"};function t(i){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Tools"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://code.google.com/archive/p/vba-rerecording/downloads",children:"VBA-RR"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Admiral-Fish/PokeFinder/releases",children:"PokeFinder"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"http://pokerng.forumcommunity.net/?t=56443955",children:"The Ruby/Sapphire Lua Scripts for your language"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Password for the lua script archive is ",e.jsx(n.code,{children:"allyouneedisnoob"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.nirsoft.net/utils/run_as_date.html",children:"runasdate (Optional)"})}),`
`,e.jsxs(n.li,{children:["A save file that has been ID abused.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Optional but recommended if going for shiny spreads with good IVs."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Note: This method will work on any Pokemon generated by Method 1 in Pokemon Ruby/Sapphire. Keep in mind that if you're looking for an specific spread to be shiny, ID/SID abuse might be required before attempting this RNG.
`})}),`
`,e.jsx(n.h2,{children:"Step 1: Setup VBA-RR"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Make sure the save mode is set correctly.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Options > Emulation > Save Type > Automatic & Flash 128K"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Real Time Clock must be enabled in order to obtain Live Battery seeds.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Options > Emulation > Real Time Clock"}),`
`,e.jsx(n.li,{children:"If there are errors when loading past the title screen, such as corrupted save or dead battery message, restart VBA for the changes to take effect."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 2: Setup PokeFinder"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'In PokeFinder, Choose "Gen 3 Stationary" and click the "Searcher" tab'}),`
`,e.jsxs(n.li,{children:["Input the spread you want and look for results.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If there are no results, adjust filters until there is a result that you want."}),`
`,e.jsx(n.li,{children:"Make sure PokeFinder is using Method 1"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Setup.png",alt:"Setup"})}),`
`,e.jsx(n.h2,{children:"Step 3: Getting your Initial Seed"}),`
`,e.jsxs(n.p,{children:["The seed you got from that screen was simply the seed you must hit when you press ",e.jsx(n.code,{children:"A"})," on encounter."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'To get your initial seed, right click on the seed you are using and choose "Generate times to seed".'}),`
`,e.jsxs(n.li,{children:['The seed will automatically be added into "16-Bit Seed To Time".',`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Make sure the year is set to 2000 as other years will not work correctly."}),`
`,e.jsx(n.li,{children:"This will give you your initial seed and the date and time needed to hit your desired seed."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Seed-to-Time.png",alt:"Seed to Time"})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:["Finding the Frame to hit",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'On the screen of PokeFinder below enter your initial seed and spread. Make sure that it is set to search "Method 1". It should look something like this:'}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Target.png",alt:"Target"})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:`Hit "Generate" and look for results. If you don't get a result, try extending the max results to a higher number.`}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 4: Hitting the Desired Seed and Frame"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'Open runasdate (or change your computer clock) and set the date to one listed in "16-Bit Seed To Time".'}),`
`,e.jsx(n.li,{children:"If you are using runasdate set up the screen just like how it is shown below:"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Initial-Seed.png",alt:"Initial Seed"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Note: Unlike Generations 4 and 5, only the hours and minutes matter for hitting the initial seed.
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Hit run and you will open VBA-RR."}),`
`,e.jsx(n.li,{children:"Load the lua script for your game."}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 5: Finding the delay"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Advance to the final screen before encountering the target Pokemon making save states along the way."}),`
`,e.jsxs(n.li,{children:["When you land on your target frame press ",e.jsx(n.code,{children:"A"})," and enter the encounter."]}),`
`,e.jsx(n.li,{children:"Take note of the IVs of the Pokemon you encounterd."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/IVs.png",alt:"IVs"})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:"Open a new PokeFinder and input your initial seed and the IVs of the Pokemon encountered."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Calibration.png",alt:"Calibration"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Since I hit ",e.jsx(n.code,{children:"A"})," on Frame 89016 that means 54 Frames went by between my last input (hitting ",e.jsx(n.code,{children:"A"}),") and the IVs and PID being generated."]}),`
`,e.jsx(n.li,{children:"Therefore, to hit my 31/2/31/31/31/31 Modest spread, I must hit frame 180124."}),`
`,e.jsx(n.li,{children:"Target Frame = Desired Frame - Delay"}),`
`]}),`
`,e.jsx(n.h2,{children:"Step 6: Advancing frames"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Advance frames paying attention to the frame count so you don't miss your target frame."}),`
`,e.jsxs(n.li,{children:["Advance until you reach your new target frame, pause the emulator again and hold the ",e.jsx(n.code,{children:"A"})," button."]}),`
`,e.jsx(n.li,{children:"Unpause the emulator and hit your shiny frame!"}),`
`,e.jsx(n.li,{children:"If you did everything right, you should be able to hit your desired spread on your Pokemon. If not, calculate how many frames you are off, reload a previous save state, adjust accordingly, and try again."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/Ruby-Sapphire/Stationary/Success.png",alt:"Success"})})]})}function o(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{o as default,a as frontmatter};
