if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-675956ea"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/(XD) PAL Starter Eevee RNG-DExNd1hT.js",revision:null},{url:"assets/Advancing the RNG-CIic3aA8.js",revision:null},{url:"assets/Advancing the RNG-DLl2BXet.js",revision:null},{url:"assets/Advancing the RNG-DmtpSLN9.js",revision:null},{url:"assets/Basic Rules of RNG-0H66fvII.js",revision:null},{url:"assets/Basic Rules of RNG-CpHqany_.js",revision:null},{url:"assets/Basic Rules of RNG-IfdFfMid.js",revision:null},{url:"assets/BK - Emulator Setup-DXrsDJfr.js",revision:null},{url:"assets/BK - How to use PokeFinder-DdPufcjS.js",revision:null},{url:"assets/BK - How to use Shiny's site-BIdgqxhE.js",revision:null},{url:"assets/Breeding RNG (Emu)-BYGQjd6O.js",revision:null},{url:"assets/CaptureSight Install-DJedNn4D.js",revision:null},{url:"assets/Celebi-nnWOOduR.js",revision:null},{url:"assets/Channel-tFbHYoN1.js",revision:null},{url:"assets/CitraRNG Setup-C2pGRf4z.js",revision:null},{url:"assets/Colosseum General Guide (Emu)-D3YuKvB8.js",revision:null},{url:"assets/Cute Charm-Bkt1k_cp.js",revision:null},{url:"assets/Cute Charm-C3bwcz6f.js",revision:null},{url:"assets/Dead Battery Stationary RNG  (Emulator)-RMYYTuvK.js",revision:null},{url:"assets/Desmume Setup-1xIZI6jO.js",revision:null},{url:"assets/DexNav RNG-CXpFa1uM.js",revision:null},{url:"assets/Dream Radar-BESmtoBq.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-B-WKGRRo.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-Dg4WI54W.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-NiwKM-fp.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-wqIyaKwi.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-BHx_lBzy.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-Cy_iXpmU.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-Dr6RQOVU.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-PjDq33Ph.js",revision:null},{url:"assets/Egg RNG-BWYYcadF.js",revision:null},{url:"assets/Egg RNG-CjAQ71tP.js",revision:null},{url:"assets/Egg RNG-CsM1_pcD.js",revision:null},{url:"assets/Egg RNG-jUOfUWDx.js",revision:null},{url:"assets/Egg-B1PZu8Xg.js",revision:null},{url:"assets/Egg-esqztLX9.js",revision:null},{url:"assets/Egg-nL1_3OJw.js",revision:null},{url:"assets/Entralink-CbK-VAnV.js",revision:null},{url:"assets/Find DS Parameters-Cll6ykY3.js",revision:null},{url:"assets/Find SID with Feebas-CH2NvUac.js",revision:null},{url:"assets/Find SID-BetBBGJJ.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-B5lfY6qp.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-C0HpdauH.js",revision:null},{url:"assets/Friend Safari RNG Guide-DIriypno.js",revision:null},{url:"assets/Get Raid Seed With CFW-BGIK0cQu.js",revision:null},{url:"assets/Get Raid Seed Without CFW-BoaWS6uj.js",revision:null},{url:"assets/Home-Zn23yYgh.js",revision:null},{url:"assets/Honey-D_tNK-hJ.js",revision:null},{url:"assets/How to Connect Dolphin to VBA-BYMQKZbq.js",revision:null},{url:"assets/How to Extract GBA Bios-BXXNKLnm.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-B644wvfg.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-D9MPRImr.js",revision:null},{url:"assets/How to Install PCalc-QaDDY_yt.js",revision:null},{url:"assets/How to Install PokeReader-Dr2WPouZ.js",revision:null},{url:"assets/index-uFSWPmqj.js",revision:null},{url:"assets/Initial Seed Botting-DFEqHZFv.js",revision:null},{url:"assets/Initial Seed RNG-BAIOSjcd.js",revision:null},{url:"assets/Initial Seed RNG-C5Ei8xy1.js",revision:null},{url:"assets/Initial Seed RNG-CDEUtVjQ.js",revision:null},{url:"assets/Initial Seed RNG-Dw9XEAfm.js",revision:null},{url:"assets/Island Scan Pokemon-Cfsh5Cc0.js",revision:null},{url:"assets/Island Scan Pokemon-CrqYJmqY.js",revision:null},{url:"assets/Island Scan RNG-DRMyh2s5.js",revision:null},{url:"assets/Island Scan-B9DCAUlH.js",revision:null},{url:"assets/Live and Dry Battery-CTyPeiDK.js",revision:null},{url:"assets/Live Battery TID RNG-CUgZeESD.js",revision:null},{url:"assets/mGBA Setup-wQSzLeQO.js",revision:null},{url:"assets/MMO-Bolqlv2Z.js",revision:null},{url:"assets/Mystery Gift-D4M8Tw-P.js",revision:null},{url:"assets/Mystery Gift-pyECtxkb.js",revision:null},{url:"assets/Nature Table-GroBfwPy.js",revision:null},{url:"assets/NTR Helper Usage-jjY22B7x.js",revision:null},{url:"assets/PokeFinder Setup-BDsFTJmW.js",revision:null},{url:"assets/PokeFinder Setup-Dgza6yXO.js",revision:null},{url:"assets/PokeRadar-DvHeTVbv.js",revision:null},{url:"assets/Raid RNG-DAsblhXW.js",revision:null},{url:"assets/Reseed RNG-_fxCB5-e.js",revision:null},{url:"assets/Retail Entralink-CJrRmhr0.js",revision:null},{url:"assets/Retail Wild RNG-DIJip4Dp.js",revision:null},{url:"assets/rng_tools_bg-CSVSdWod.wasm",revision:null},{url:"assets/RNGing Without Custom Firmware-DCJbmE8G.js",revision:null},{url:"assets/RNGing Without Custom Firmware-V7adrski.js",revision:null},{url:"assets/RngResearch-CbzY2uwg.js",revision:null},{url:"assets/Roamers-B757PTKB.js",revision:null},{url:"assets/RSE Wild RNG - Dry Battery Emulator-BJkJ33OY.js",revision:null},{url:"assets/Ruby _ Sapphire Live Battery Stationary Abuse-TimHhQjz.js",revision:null},{url:"assets/Shiny WISHMKR Jirachi with wishmaker-calc-CQRlW5df.js",revision:null},{url:"assets/SOS RNG Guide-C7Kc27Rs.js",revision:null},{url:"assets/SOS RNG-64Cz6vzd.js",revision:null},{url:"assets/Special Wild Case (Emu)-CGQCDdk8.js",revision:null},{url:"assets/Starter-Dm9_Yp4j.js",revision:null},{url:"assets/Stationary and Gift RNG-BnjyGX-K.js",revision:null},{url:"assets/Stationary RNG Emu-AToG1hTv.js",revision:null},{url:"assets/Stationary RNG-C-jek1j5.js",revision:null},{url:"assets/Stationary RNG-CoTgq_S5.js",revision:null},{url:"assets/Stationary v2 Emu-BeQvHplD.js",revision:null},{url:"assets/Stationary Wormhole RNG-B8kUF4Zr.js",revision:null},{url:"assets/Stationary-DeaHPFLD.js",revision:null},{url:"assets/Stationary-DnB_Qj97.js",revision:null},{url:"assets/TID RNG Guide-75Uv6rMu.js",revision:null},{url:"assets/TID SID RNG-lEkFcko6.js",revision:null},{url:"assets/TID SID-BIzlCNth.js",revision:null},{url:"assets/TID SID-CV9aB-tc.js",revision:null},{url:"assets/Time Finder.js (Citra)-CVha4XOH.js",revision:null},{url:"assets/Time Finder.js (Citra)-x_4rCzCL.js",revision:null},{url:"assets/Timeline Guide-BDtBVojU.js",revision:null},{url:"assets/Timeline Guide-DsRLiCvS.js",revision:null},{url:"assets/Timeline Leap Guide-BnrEYlLd.js",revision:null},{url:"assets/Timeline Leap Guide-Cn0We1SM.js",revision:null},{url:"assets/Timeline With Fidget Guide-DV4CF2Zx.js",revision:null},{url:"assets/Timeline With Fidget Guide-U6Gb9AZH.js",revision:null},{url:"assets/Transporter Patches-C18VbfJH.js",revision:null},{url:"assets/Transporter with Offline Patch-BdadJNgK.js",revision:null},{url:"assets/Transporter-CHJ4jQij.js",revision:null},{url:"assets/Using IPS Patches with Luma and Citra-Bk-Hiusb.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-DI9PKwvd.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-DNb9p643.js",revision:null},{url:"assets/White Forest RNG (Emu)-DIeI-Si1.js",revision:null},{url:"assets/Wild RNG - Emulator-Cc7jkJMS.js",revision:null},{url:"assets/Wild RNG Emu-CxM8Wvw-.js",revision:null},{url:"assets/Wild RNG Emu-D8_AX6cw.js",revision:null},{url:"assets/Wild RNG-AteP5IUI.js",revision:null},{url:"assets/Wild RNG-CPtIzk2D.js",revision:null},{url:"assets/Wild RNG-q44CCv3l.js",revision:null},{url:"assets/Wild Spots-DBJT5j9G.js",revision:null},{url:"assets/Wild-aoaRjv4A.js",revision:null},{url:"assets/Wild-LRX_Mj52.js",revision:null},{url:"assets/wildv2lua-DokKrtgJ.js",revision:null},{url:"assets/Wondercard-B3AVDcvH.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/XY Trainer ID_ Secret ID_ and TSV RNG Guide-CIgaCwKL.js",revision:null},{url:"index.html",revision:"84b25475441f50696f1d259e7f08f9f0"},{url:"manifest.webmanifest",revision:"914c5dd2e345e3b2b21ef5b7ee551728"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/\//]})),s.registerRoute((({url:s})=>!s.pathname.endsWith(".wasm")),new s.NetworkFirst,"GET"),s.registerRoute((({url:s})=>s.pathname.endsWith(".wasm")),new s.CacheFirst({cacheName:"wasm-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3})]}),"GET")}));
