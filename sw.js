if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-1504e367"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/(XD) PAL Starter Eevee RNG-DJMz4g1W.js",revision:null},{url:"assets/Advancing the RNG-BnxFtDNw.js",revision:null},{url:"assets/Advancing the RNG-C3Bh8hmj.js",revision:null},{url:"assets/Advancing the RNG-CDLvJb27.js",revision:null},{url:"assets/Basic Rules of RNG-BMvFVOCr.js",revision:null},{url:"assets/Basic Rules of RNG-C_ytETQI.js",revision:null},{url:"assets/Basic Rules of RNG-D07Rl2A8.js",revision:null},{url:"assets/BK - Emulator Setup-CbqDQgty.js",revision:null},{url:"assets/BK - How to use PokeFinder-DxB4W6K0.js",revision:null},{url:"assets/BK - How to use Shiny's site-DcGIMXrp.js",revision:null},{url:"assets/Breeding RNG (Emu)-eSVltd62.js",revision:null},{url:"assets/CaptureSight Install-Be_KUlx5.js",revision:null},{url:"assets/Celebi-BVUrqmJw.js",revision:null},{url:"assets/Channel-7TpLIdMx.js",revision:null},{url:"assets/CitraRNG Setup-Qdn3wqAe.js",revision:null},{url:"assets/Colosseum General Guide (Emu)-ikAW0ghQ.js",revision:null},{url:"assets/Cute Charm-DIG3R1c9.js",revision:null},{url:"assets/Cute Charm-kWw_hVSf.js",revision:null},{url:"assets/Dead Battery Stationary RNG  (Emulator)-CpmFv5gS.js",revision:null},{url:"assets/Desmume Setup-DZYSIl3n.js",revision:null},{url:"assets/DexNav RNG-ljxi6mO6.js",revision:null},{url:"assets/Dream Radar-BP2qPmv3.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-B8j6XXrw.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-BTj0VD17.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-CBxV5WdW.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-CKpP_CSd.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-21Rzj7w_.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-BAotvdnQ.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-C6jJt6HA.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-Dd6hEKe2.js",revision:null},{url:"assets/Egg RNG-7pVyTYgf.js",revision:null},{url:"assets/Egg RNG-BUQyh-kl.js",revision:null},{url:"assets/Egg RNG-Ds72yNyQ.js",revision:null},{url:"assets/Egg RNG-RfouKUp0.js",revision:null},{url:"assets/Egg-BBwe6Lhb.js",revision:null},{url:"assets/Egg-BHEm6vKm.js",revision:null},{url:"assets/Egg-WHpkNvqW.js",revision:null},{url:"assets/Entralink-D5PxTROt.js",revision:null},{url:"assets/Find DS Parameters-BHGJnTWX.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-Bkd-IAGx.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-DpUwvXVa.js",revision:null},{url:"assets/Friend Safari RNG Guide-DpNvWVmN.js",revision:null},{url:"assets/Get Raid Seed With CFW-Cacwj92V.js",revision:null},{url:"assets/Get Raid Seed Without CFW-9l3AK5Xy.js",revision:null},{url:"assets/Home-BdwsjNgC.js",revision:null},{url:"assets/Honey-SHz-g5jN.js",revision:null},{url:"assets/How to Connect Dolphin to VBA-C_z_NlOH.js",revision:null},{url:"assets/How to Extract GBA Bios-aQlym_qW.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-Bw_Z55w-.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-CQqfzdHY.js",revision:null},{url:"assets/How to Install PCalc-CT1KnbRK.js",revision:null},{url:"assets/How to Install PokeReader-Btuk3wuG.js",revision:null},{url:"assets/index-DbyejMP8.js",revision:null},{url:"assets/Initial Seed Botting-P_iFAtpm.js",revision:null},{url:"assets/Initial Seed RNG-Ci8T38Ic.js",revision:null},{url:"assets/Initial Seed RNG-CZyMU706.js",revision:null},{url:"assets/Initial Seed RNG-D4Dh7XX5.js",revision:null},{url:"assets/Initial Seed RNG-NNgJNIbk.js",revision:null},{url:"assets/Island Scan Pokemon-BALaTzko.js",revision:null},{url:"assets/Island Scan Pokemon-C-Go8TNe.js",revision:null},{url:"assets/Island Scan RNG-CkuQUffx.js",revision:null},{url:"assets/Island Scan-MXcC-JcD.js",revision:null},{url:"assets/Live and Dry Battery-XtctW5EZ.js",revision:null},{url:"assets/Live Battery TID RNG-OgOJ6Ns4.js",revision:null},{url:"assets/MMO-Dg5fYKgy.js",revision:null},{url:"assets/Mystery Gift-BVPzzfOo.js",revision:null},{url:"assets/Mystery Gift-C8osWZUB.js",revision:null},{url:"assets/Nature Table-BmumrxpM.js",revision:null},{url:"assets/NTR Helper Usage-Bf962L5D.js",revision:null},{url:"assets/PokeFinder Setup-BrM32iL4.js",revision:null},{url:"assets/PokeFinder Setup-CxO5oJq6.js",revision:null},{url:"assets/PokeRadar-72RAL3yI.js",revision:null},{url:"assets/Raid RNG-C9I1nK7O.js",revision:null},{url:"assets/Reseed RNG-D_yVJy_h.js",revision:null},{url:"assets/Retail Entralink-DMZRLH7N.js",revision:null},{url:"assets/Retail Wild RNG-P_KPP8FD.js",revision:null},{url:"assets/RNGing Without Custom Firmware-C1yyKtd1.js",revision:null},{url:"assets/RNGing Without Custom Firmware-su6mA_jh.js",revision:null},{url:"assets/Roamers-DpQ-VBRx.js",revision:null},{url:"assets/RSE Wild RNG - Dry Battery Emulator-D3_KcpdM.js",revision:null},{url:"assets/Ruby _ Sapphire Live Battery Stationary Abuse-D4m8WM3t.js",revision:null},{url:"assets/Shiny WISHMKR Jirachi with wishmaker-calc-_soI73z3.js",revision:null},{url:"assets/SOS RNG Guide-DfsQIZZq.js",revision:null},{url:"assets/SOS RNG-ECa98Lsh.js",revision:null},{url:"assets/Special Wild Case (Emu)-GKuvkNw2.js",revision:null},{url:"assets/Starter-CIHwDJl_.js",revision:null},{url:"assets/Stationary and Gift RNG-9EH-RfmW.js",revision:null},{url:"assets/Stationary RNG Emu-B7GZY40E.js",revision:null},{url:"assets/Stationary RNG-12Qji1bI.js",revision:null},{url:"assets/Stationary RNG-D_03S9q4.js",revision:null},{url:"assets/Stationary v2 Emu-DGwfo02F.js",revision:null},{url:"assets/Stationary Wormhole RNG-BmDZqx4V.js",revision:null},{url:"assets/Stationary-CyqQSsMH.js",revision:null},{url:"assets/Stationary-oBXx9f0K.js",revision:null},{url:"assets/TID RNG Guide-DKykGagE.js",revision:null},{url:"assets/TID SID RNG-pG9itOah.js",revision:null},{url:"assets/TID SID-3oFleEvx.js",revision:null},{url:"assets/TID SID-B6Y0t2A2.js",revision:null},{url:"assets/Time Finder.js (Citra)-BqpYUWN-.js",revision:null},{url:"assets/Time Finder.js (Citra)-RLHYThEx.js",revision:null},{url:"assets/Timeline Guide-B8c4YW3U.js",revision:null},{url:"assets/Timeline Guide-BKjpO_Jr.js",revision:null},{url:"assets/Timeline Leap Guide-DMrfkPgv.js",revision:null},{url:"assets/Timeline Leap Guide-xGCwd2ou.js",revision:null},{url:"assets/Timeline With Fidget Guide-7Go7gBCc.js",revision:null},{url:"assets/Timeline With Fidget Guide-cYBHNjCF.js",revision:null},{url:"assets/Transporter Patches-4C0tshqP.js",revision:null},{url:"assets/Transporter with Offline Patch-D2C-3tSh.js",revision:null},{url:"assets/Transporter-B0hzcacd.js",revision:null},{url:"assets/Using IPS Patches with Luma and Citra-DPoQnFjW.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-52dxPNkR.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-ipsOknGL.js",revision:null},{url:"assets/White Forest RNG (Emu)-BDnTZqwP.js",revision:null},{url:"assets/Wild RNG - Emulator-BS1efwXG.js",revision:null},{url:"assets/Wild RNG Emu-DW7XaDsr.js",revision:null},{url:"assets/Wild RNG Emu-PDI-kNgD.js",revision:null},{url:"assets/Wild RNG-CGJDpz76.js",revision:null},{url:"assets/Wild RNG-sDzPn1tF.js",revision:null},{url:"assets/Wild RNG-vioKSNoF.js",revision:null},{url:"assets/Wild Spots-Xa3JLdfc.js",revision:null},{url:"assets/Wild-BvJ6VlQ8.js",revision:null},{url:"assets/Wild-DG6qx3Ok.js",revision:null},{url:"assets/wildv2lua-DfSQpXQb.js",revision:null},{url:"assets/Wondercard-zrKW8U-J.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/XY Trainer ID_ Secret ID_ and TSV RNG Guide-wM3ccW1E.js",revision:null},{url:"index.html",revision:"b0b15b64cbb5105d15da2191452a553e"},{url:"manifest.webmanifest",revision:"914c5dd2e345e3b2b21ef5b7ee551728"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/\.zip$/,/\.gm9$/]})),s.registerRoute((({url:s})=>s.pathname.endsWith(".zip")||s.pathname.endsWith(".gm9")),new s.NetworkFirst,"GET")}));
