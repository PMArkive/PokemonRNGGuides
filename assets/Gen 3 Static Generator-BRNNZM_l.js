import{u as i,j as e}from"./index-CdUmV78P.js";const c=[{title:"Emerald Static3 Generator",description:"Generator for Static encounters in Emerald",slug:"emerald-static-generator",category:"Emerald",subCategory:"Tools",tag:"any",isRoughDraft:!0},{title:"Ruby and Sapphire Static3 Generator",description:"Generator for Static encounters in Ruby and Sapphire",slug:"rs-static-generator",category:"Ruby and Sapphire",subCategory:"Tools",tag:"any",isRoughDraft:!0},{title:"FireRed and LeafGreen Static3 Generator",description:"Generator for Static encounters in FireRed and LeafGreen",slug:"frlg-static-generator",category:"FireRed and LeafGreen",subCategory:"Tools",tag:"any",isRoughDraft:!0}];function a(t){const{ShowIf:r,Static3Generator:n}={...i(),...t.components};return r||o("ShowIf"),n||o("Static3Generator"),e.jsxs(e.Fragment,{children:[e.jsx(r,{slug:"/emerald-static-generator",children:e.jsx(n,{game:"emerald"})}),`
`,e.jsx(r,{slug:"/rs-static-generator",children:e.jsx(n,{game:"rs"})}),`
`,e.jsx(r,{slug:"/frlg-static-generator",children:e.jsx(n,{game:"frlg"})})]})}function g(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(a,{...t})}):a(t)}function o(t,r){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default,c as frontmatter};
