if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),a={module:{uri:n},exports:u,require:t};e[n]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-675956ea"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/(XD) PAL Starter Eevee RNG-DvopYBTh.js",revision:null},{url:"assets/Advancing the RNG-By4r7GDg.js",revision:null},{url:"assets/Advancing the RNG-CepyiG0e.js",revision:null},{url:"assets/Advancing the RNG-DtbHYKui.js",revision:null},{url:"assets/Basic Rules of RNG-6ZbPSlk1.js",revision:null},{url:"assets/Basic Rules of RNG-Bl0fEuHA.js",revision:null},{url:"assets/Basic Rules of RNG-Cj62-Zqy.js",revision:null},{url:"assets/BK - Emulator Setup-rsNSRpqm.js",revision:null},{url:"assets/BK - How to use PokeFinder-C1jg1VN0.js",revision:null},{url:"assets/BK - How to use Shiny's site-CqQgzVzf.js",revision:null},{url:"assets/Breeding RNG (Emu)-BjsbGAbx.js",revision:null},{url:"assets/CaptureSight Install-FVfGkfq2.js",revision:null},{url:"assets/Celebi-DdwQeJHG.js",revision:null},{url:"assets/Channel-DAK_2cCw.js",revision:null},{url:"assets/CitraRNG Setup-DQL14cKr.js",revision:null},{url:"assets/Colosseum General Guide (Emu)-D_Vdjs3K.js",revision:null},{url:"assets/Cute Charm-7eUaVMt2.js",revision:null},{url:"assets/Cute Charm-BPjLQVyp.js",revision:null},{url:"assets/Dead Battery Stationary RNG  (Emulator)-DHuHWwMn.js",revision:null},{url:"assets/Desmume Setup-BiYGcoTJ.js",revision:null},{url:"assets/DexNav RNG-G77EPHPJ.js",revision:null},{url:"assets/Dream Radar-CTXPBQ7Y.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-B3RQWSY0.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-BeQFmaw4.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-Cej5xbsy.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-D8fwZYH8.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-Cq0yGpa3.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-Db-zFtaz.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-EEpcRGux.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-jZwdC661.js",revision:null},{url:"assets/Egg RNG-BL0Tm9I3.js",revision:null},{url:"assets/Egg RNG-BTsHrtSA.js",revision:null},{url:"assets/Egg RNG-FoTS_Zuk.js",revision:null},{url:"assets/Egg RNG-q4EBrnZU.js",revision:null},{url:"assets/Egg-B1zwZIQv.js",revision:null},{url:"assets/Egg-Bn803eEh.js",revision:null},{url:"assets/Egg-CQ7aX0xE.js",revision:null},{url:"assets/Entralink-BxfgCji9.js",revision:null},{url:"assets/Find DS Parameters-DPP-qy2M.js",revision:null},{url:"assets/Find SID with Feebas-_z-rmcVF.js",revision:null},{url:"assets/Find SID-BtI42kOi.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-BvbiyTBp.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-Cg9yD8uR.js",revision:null},{url:"assets/Friend Safari RNG Guide-ChXoHwZO.js",revision:null},{url:"assets/Get Raid Seed With CFW-D9DH0AYQ.js",revision:null},{url:"assets/Get Raid Seed Without CFW-NMCdyHTY.js",revision:null},{url:"assets/Home-CM0j3gCZ.js",revision:null},{url:"assets/Honey-FJMh9nJ0.js",revision:null},{url:"assets/How to Connect Dolphin to VBA-W_qH03ci.js",revision:null},{url:"assets/How to Extract GBA Bios-UlLXj43Z.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-CF70TC_C.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-Xdk-rhey.js",revision:null},{url:"assets/How to Install PCalc-BXUuJxVj.js",revision:null},{url:"assets/How to Install PokeReader-5rWwhCX4.js",revision:null},{url:"assets/index-ufF5IZ5h.js",revision:null},{url:"assets/Initial Seed Botting-RH4P79zR.js",revision:null},{url:"assets/Initial Seed RNG-C0VEziZF.js",revision:null},{url:"assets/Initial Seed RNG-CAFjw710.js",revision:null},{url:"assets/Initial Seed RNG-DsXVV92e.js",revision:null},{url:"assets/Initial Seed RNG-DUt7oxGV.js",revision:null},{url:"assets/Island Scan Pokemon-BImMhPXX.js",revision:null},{url:"assets/Island Scan Pokemon-DUYalE1A.js",revision:null},{url:"assets/Island Scan RNG-HpCcLYRu.js",revision:null},{url:"assets/Island Scan-Tw3NjYhC.js",revision:null},{url:"assets/Live and Dry Battery-BhZ4wMNC.js",revision:null},{url:"assets/Live Battery TID RNG-Dyejy3Lk.js",revision:null},{url:"assets/MMO-cIKZ_Tbz.js",revision:null},{url:"assets/Mystery Gift-C0q-PWW4.js",revision:null},{url:"assets/Mystery Gift-Db0k3HaR.js",revision:null},{url:"assets/Nature Table-BgK57eiM.js",revision:null},{url:"assets/NTR Helper Usage-CltVGUB-.js",revision:null},{url:"assets/PokeFinder Setup-DjPAC5hC.js",revision:null},{url:"assets/PokeFinder Setup-Pdu7HXat.js",revision:null},{url:"assets/PokeRadar-DlCLnqvZ.js",revision:null},{url:"assets/Raid RNG-BgZQ3xO8.js",revision:null},{url:"assets/Reseed RNG-BGHJl8-r.js",revision:null},{url:"assets/Retail Entralink-CHELhAkO.js",revision:null},{url:"assets/Retail Wild RNG-Cm1QHDNw.js",revision:null},{url:"assets/rng_tools_bg-CSVSdWod.wasm",revision:null},{url:"assets/RNGing Without Custom Firmware-Bp3pwcqu.js",revision:null},{url:"assets/RNGing Without Custom Firmware-DmzPwby1.js",revision:null},{url:"assets/RngResearch-dzYzkwAV.js",revision:null},{url:"assets/Roamers-CbGIQrAB.js",revision:null},{url:"assets/RSE Wild RNG - Dry Battery Emulator-DMROM9_o.js",revision:null},{url:"assets/Ruby _ Sapphire Live Battery Stationary Abuse-B1oh3TQo.js",revision:null},{url:"assets/Shiny WISHMKR Jirachi with wishmaker-calc-QrtZSGHx.js",revision:null},{url:"assets/SOS RNG Guide-BmRIED2z.js",revision:null},{url:"assets/SOS RNG-DipdV2XR.js",revision:null},{url:"assets/Special Wild Case (Emu)-DuC7-Cvr.js",revision:null},{url:"assets/Starter-CJ7KeXV-.js",revision:null},{url:"assets/Stationary and Gift RNG-BLVvJlZl.js",revision:null},{url:"assets/Stationary RNG Emu-B_atVNYf.js",revision:null},{url:"assets/Stationary RNG-DmGZslsp.js",revision:null},{url:"assets/Stationary RNG-MBjFvicC.js",revision:null},{url:"assets/Stationary v2 Emu-BPSnizgT.js",revision:null},{url:"assets/Stationary Wormhole RNG-EPyKBTIz.js",revision:null},{url:"assets/Stationary-B_H6xB4J.js",revision:null},{url:"assets/Stationary-BXPwp_X3.js",revision:null},{url:"assets/TID RNG Guide-KAqrygew.js",revision:null},{url:"assets/TID SID RNG-C3S1Womr.js",revision:null},{url:"assets/TID SID-BcqDcaCJ.js",revision:null},{url:"assets/TID SID-CB3iePJw.js",revision:null},{url:"assets/Time Finder.js (Citra)-CT8muipU.js",revision:null},{url:"assets/Time Finder.js (Citra)-kmIEEmKO.js",revision:null},{url:"assets/Timeline Guide-B9L3-46i.js",revision:null},{url:"assets/Timeline Guide-BZXKvKnX.js",revision:null},{url:"assets/Timeline Leap Guide-Bs3I9Vgw.js",revision:null},{url:"assets/Timeline Leap Guide-SwkaVHMx.js",revision:null},{url:"assets/Timeline With Fidget Guide-C4zEZ_zD.js",revision:null},{url:"assets/Timeline With Fidget Guide-D7Vdck1m.js",revision:null},{url:"assets/Transporter Patches-B9Sh1LIl.js",revision:null},{url:"assets/Transporter with Offline Patch-CIeyXCVH.js",revision:null},{url:"assets/Transporter-CJUPfj5r.js",revision:null},{url:"assets/Using IPS Patches with Luma and Citra-XI931zkj.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-B0ZE5MKe.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-H0wAlVw4.js",revision:null},{url:"assets/White Forest RNG (Emu)-DtWYqCa6.js",revision:null},{url:"assets/Wild RNG - Emulator-Dav_zX5e.js",revision:null},{url:"assets/Wild RNG Emu-BMpzEqai.js",revision:null},{url:"assets/Wild RNG Emu-CfMNSK0B.js",revision:null},{url:"assets/Wild RNG-Bb3QuvrN.js",revision:null},{url:"assets/Wild RNG-CC-WAbso.js",revision:null},{url:"assets/Wild RNG-Cky2OeUe.js",revision:null},{url:"assets/Wild Spots-BJjR0h6Y.js",revision:null},{url:"assets/Wild-DJ3YcX_m.js",revision:null},{url:"assets/Wild-fD2Rrp-l.js",revision:null},{url:"assets/wildv2lua-BR5vOuhb.js",revision:null},{url:"assets/Wondercard-9XrOaz61.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/XY Trainer ID_ Secret ID_ and TSV RNG Guide-BRrTSU5B.js",revision:null},{url:"index.html",revision:"9a174e7c1c0072636450dda19c3148f3"},{url:"manifest.webmanifest",revision:"914c5dd2e345e3b2b21ef5b7ee551728"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/\.zip$/,/\.gm9$/]})),s.registerRoute((({url:s})=>s.pathname.endsWith(".zip")||s.pathname.endsWith(".gm9")),new s.NetworkFirst,"GET"),s.registerRoute((({url:s})=>s.pathname.endsWith(".wasm")),new s.CacheFirst({cacheName:"wasm-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3})]}),"GET")}));
