if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-675956ea"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/(XD) PAL Starter Eevee RNG-SZzwaVVW.js",revision:null},{url:"assets/3DS PokeReader-C0ptTAby.js",revision:null},{url:"assets/Advancing the RNG-C956HkUF.js",revision:null},{url:"assets/Advancing the RNG-D-_2UrhU.js",revision:null},{url:"assets/Advancing the RNG-DaOhltlh.js",revision:null},{url:"assets/Basic Rules of RNG-CF_Z1GI9.js",revision:null},{url:"assets/Basic Rules of RNG-COZvYYQs.js",revision:null},{url:"assets/Basic Rules of RNG-JBNv99eg.js",revision:null},{url:"assets/BK - Emulator Setup-Bbst_a5L.js",revision:null},{url:"assets/BK - How to use PokeFinder-DOVhVRrO.js",revision:null},{url:"assets/BK - How to use Shiny's site-DGEw6nk6.js",revision:null},{url:"assets/Breeding RNG (Emu)-C2q0Ze3w.js",revision:null},{url:"assets/CaptureSight Install-DI8xZFYR.js",revision:null},{url:"assets/Celebi-ib_ImbmN.js",revision:null},{url:"assets/Channel-C6kEcX_h.js",revision:null},{url:"assets/CitraRNG Setup-BudAmL98.js",revision:null},{url:"assets/Colosseum General Guide (Emu)-Dd7-AsXA.js",revision:null},{url:"assets/Cute Charm-ClYieUML.js",revision:null},{url:"assets/Cute Charm-Cw8OlTNU.js",revision:null},{url:"assets/Dead Battery Stationary RNG  (Emulator)-C7pSzv98.js",revision:null},{url:"assets/Desmume Setup-DlLj_N_R.js",revision:null},{url:"assets/DexNav RNG-qk1EN9HM.js",revision:null},{url:"assets/Dream Radar-DhtblGPj.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-B9qZp1qM.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-C7Fv_zFQ.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-CjnT53t1.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-DTGNeWFf.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-0o_FgU3e.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-Bx4S1Lrn.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-CNJO92ow.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-DjMQEx3R.js",revision:null},{url:"assets/Egg RNG-DJamXoYG.js",revision:null},{url:"assets/Egg RNG-DmcaTHLH.js",revision:null},{url:"assets/Egg RNG-DzlyMJIC.js",revision:null},{url:"assets/Egg RNG-QMLeFu5c.js",revision:null},{url:"assets/Egg-BmB1EZ8m.js",revision:null},{url:"assets/Egg-C8_w6jDZ.js",revision:null},{url:"assets/Egg-CXbtaJQH.js",revision:null},{url:"assets/Emu PokeReader-HufiSE4B.js",revision:null},{url:"assets/Entralink-BD4BeLV0.js",revision:null},{url:"assets/Find DS Parameters-C_AKJpLf.js",revision:null},{url:"assets/Find SID with Feebas-BpHjhuJV.js",revision:null},{url:"assets/Find SID-0J-se2_l.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-BU5RhP9S.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-ChVXsd2x.js",revision:null},{url:"assets/Friend Safari RNG Guide-D1wbjIRe.js",revision:null},{url:"assets/Get Raid Seed With CFW-qFJrs7xj.js",revision:null},{url:"assets/Get Raid Seed Without CFW-CzztZZwb.js",revision:null},{url:"assets/Home-Dptt9Q5I.js",revision:null},{url:"assets/Honey-BaN53brb.js",revision:null},{url:"assets/How to Connect Dolphin to VBA-Ddqr1ncM.js",revision:null},{url:"assets/How to Extract GBA Bios-xxTltYqM.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-CkxbQNtf.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-DrCqaT2w.js",revision:null},{url:"assets/How to Install PCalc-C7H0UVYe.js",revision:null},{url:"assets/index-C_U97lQU.js",revision:null},{url:"assets/Initial Seed Botting-DVyTAml8.js",revision:null},{url:"assets/Initial Seed RNG-Cka4lQaR.js",revision:null},{url:"assets/Initial Seed RNG-CVWcPRND.js",revision:null},{url:"assets/Initial Seed RNG-DRtk2wkP.js",revision:null},{url:"assets/Initial Seed RNG-DxyA3R-v.js",revision:null},{url:"assets/Island Scan Pokemon-D5pOvxxt.js",revision:null},{url:"assets/Island Scan Pokemon-y-xAef8F.js",revision:null},{url:"assets/Island Scan RNG-Cp9vA1II.js",revision:null},{url:"assets/Island Scan-CETNJQoJ.js",revision:null},{url:"assets/Live and Dry Battery-Co1nlPrS.js",revision:null},{url:"assets/Live Battery TID RNG-Cxa8gR9w.js",revision:null},{url:"assets/mGBA Setup-CYz4Y2Ml.js",revision:null},{url:"assets/Mirage Spot-ByYWvGzL.js",revision:null},{url:"assets/MMO-HLeSCeqT.js",revision:null},{url:"assets/Mystery Gift-BfZ2V-rT.js",revision:null},{url:"assets/Mystery Gift-okwwo9Vh.js",revision:null},{url:"assets/Nature Table-BuFkHMSu.js",revision:null},{url:"assets/NTR Helper Usage-Dgd1yIa2.js",revision:null},{url:"assets/PokeFinder Setup-Di0PypYX.js",revision:null},{url:"assets/PokeFinder Setup-KjMCc7AH.js",revision:null},{url:"assets/PokeRadar-BNDMtRqa.js",revision:null},{url:"assets/Raid RNG-CCGqXlFr.js",revision:null},{url:"assets/Remove Time Penalties-BmbgYTUH.js",revision:null},{url:"assets/Reseed RNG-DYilv5to.js",revision:null},{url:"assets/Retail Entralink-CRCVAKgX.js",revision:null},{url:"assets/Retail Wild RNG-C4rLhSbz.js",revision:null},{url:"assets/rng_tools_bg-Dq1k7H7c.wasm",revision:null},{url:"assets/RNGing Without Custom Firmware-Bxn9_M34.js",revision:null},{url:"assets/RNGing Without Custom Firmware-ubOIzHip.js",revision:null},{url:"assets/RngResearch-DEiG5mjj.js",revision:null},{url:"assets/Roamers-_vvuboh6.js",revision:null},{url:"assets/RSE Wild RNG - Dry Battery Emulator-CDK8Whxe.js",revision:null},{url:"assets/Ruby _ Sapphire Live Battery Stationary Abuse-7Ibzt3Az.js",revision:null},{url:"assets/Shiny WISHMKR Jirachi with wishmaker-calc-B2KYkNIF.js",revision:null},{url:"assets/SOS RNG Guide--Wj0B9kL.js",revision:null},{url:"assets/SOS RNG-DBxaKCd0.js",revision:null},{url:"assets/Special Wild Case (Emu)-BXX43Dye.js",revision:null},{url:"assets/Starter-BPVbpyRL.js",revision:null},{url:"assets/Stationary and Gift RNG-BfxB9gih.js",revision:null},{url:"assets/Stationary RNG Emu-LzNp9ybU.js",revision:null},{url:"assets/Stationary RNG-CupPWEWb.js",revision:null},{url:"assets/Stationary RNG-lArITECq.js",revision:null},{url:"assets/Stationary v2 Emu-BWaWxbQG.js",revision:null},{url:"assets/Stationary Wormhole RNG-Bi4CWv0o.js",revision:null},{url:"assets/Stationary-4onQUbIW.js",revision:null},{url:"assets/Stationary-DDguezAE.js",revision:null},{url:"assets/TID RNG Guide-CfIsu-ZZ.js",revision:null},{url:"assets/TID SID RNG-DxaVH_Wt.js",revision:null},{url:"assets/TID SID-CBG8K8Bt.js",revision:null},{url:"assets/TID SID-l8CsDTeO.js",revision:null},{url:"assets/Time Finder.js (Citra)-CcS2tuN2.js",revision:null},{url:"assets/Time Finder.js (Citra)-DRnwM5AY.js",revision:null},{url:"assets/Timeline Guide-Dj0fyxo5.js",revision:null},{url:"assets/Timeline Guide-Dtj8Ak9u.js",revision:null},{url:"assets/Timeline Leap Guide-BcB1ECZA.js",revision:null},{url:"assets/Timeline Leap Guide-qzkhWTx2.js",revision:null},{url:"assets/Timeline With Fidget Guide-1N3QL3D-.js",revision:null},{url:"assets/Timeline With Fidget Guide-DEr_YyTP.js",revision:null},{url:"assets/Transporter Patches-BqaF0X6_.js",revision:null},{url:"assets/Transporter with Offline Patch-CrjXmQ_o.js",revision:null},{url:"assets/Transporter-9eM3vR7w.js",revision:null},{url:"assets/Using IPS Patches with Luma and Citra-CFunIahC.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-CDm7dMXA.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-xw0SvKbu.js",revision:null},{url:"assets/White Forest RNG (Emu)-BAXo9qXo.js",revision:null},{url:"assets/Wild RNG - Emulator-DHulhvGl.js",revision:null},{url:"assets/Wild RNG Emu-CMLTJ3a5.js",revision:null},{url:"assets/Wild RNG Emu-CrGMFGJw.js",revision:null},{url:"assets/Wild RNG-B4qAEWKl.js",revision:null},{url:"assets/Wild RNG-DpBb8X5y.js",revision:null},{url:"assets/Wild RNG-fzYrR_An.js",revision:null},{url:"assets/Wild Spots-BzWa2x0o.js",revision:null},{url:"assets/Wild-DfNM0dyC.js",revision:null},{url:"assets/Wild-DU6sGPO2.js",revision:null},{url:"assets/wildv2lua-C9VEnoxF.js",revision:null},{url:"assets/Wondercard-DnKcENdW.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/XY Trainer ID_ Secret ID_ and TSV RNG Guide-DkahLW-e.js",revision:null},{url:"index.html",revision:"052c31a751c27bc325f52010a7e0244c"},{url:"manifest.webmanifest",revision:"914c5dd2e345e3b2b21ef5b7ee551728"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/\//]})),s.registerRoute((({url:s})=>!s.pathname.endsWith(".wasm")),new s.NetworkFirst,"GET"),s.registerRoute((({url:s})=>s.pathname.endsWith(".wasm")),new s.CacheFirst({cacheName:"wasm-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3})]}),"GET")}));
