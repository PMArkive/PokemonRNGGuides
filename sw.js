if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),a={module:{uri:n},exports:u,require:t};e[n]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-6e150728"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/(XD) PAL Starter Eevee RNG-gvarI8Hk.js",revision:null},{url:"assets/Advancing the RNG-B1YuQni0.js",revision:null},{url:"assets/Advancing the RNG-CEDluZAA.js",revision:null},{url:"assets/Advancing the RNG-Ck8c11b_.js",revision:null},{url:"assets/Basic Rules of RNG-BG-o41kg.js",revision:null},{url:"assets/Basic Rules of RNG-C_XdAl2k.js",revision:null},{url:"assets/Basic Rules of RNG-DZm3KeCP.js",revision:null},{url:"assets/BK - Emulator Setup-CBma8BPs.js",revision:null},{url:"assets/BK - How to use PokeFinder-eEl-0GUq.js",revision:null},{url:"assets/BK - How to use Shiny's site-CHU6vjF9.js",revision:null},{url:"assets/Breeding RNG (Emu)-D9aerXlY.js",revision:null},{url:"assets/CaptureSight Install-cGvsA3jA.js",revision:null},{url:"assets/Channel-3giOukr7.js",revision:null},{url:"assets/CitraRNG Setup-BbtNYGbR.js",revision:null},{url:"assets/Colosseum General Guide (Emu)-pEHOcT1v.js",revision:null},{url:"assets/Cute Charm-CSL6VsL1.js",revision:null},{url:"assets/Cute Charm-CwgSfPwQ.js",revision:null},{url:"assets/Dead Battery Stationary RNG  (Emulator)-DdHqk9FT.js",revision:null},{url:"assets/Desmume Setup-DpRUTGbp.js",revision:null},{url:"assets/DexNav RNG-B-8e_jXg.js",revision:null},{url:"assets/Dream Radar-Bse0Uxo7.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-BZvzVpv6.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-CA9gYXAK.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-DfzXLpwG.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-GSuoZFlJ.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-8GftLqJ8.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-Daof1QwV.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-DNP1TA4M.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-zXU-G1Gc.js",revision:null},{url:"assets/Egg RNG-BhXihVIv.js",revision:null},{url:"assets/Egg RNG-CKi9Uz2j.js",revision:null},{url:"assets/Egg RNG-D5thv0Wh.js",revision:null},{url:"assets/Egg RNG-EWeiVm4g.js",revision:null},{url:"assets/Egg-B1gC5WsK.js",revision:null},{url:"assets/Egg-DEohMz-m.js",revision:null},{url:"assets/Egg-JxHpSa7T.js",revision:null},{url:"assets/Entralink-CvT6E2z5.js",revision:null},{url:"assets/Find DS Parameters-DifTO9Cs.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-Dh7EJdcd.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-DMG5YYCb.js",revision:null},{url:"assets/Friend Safari RNG Guide-z8ZOAu1Y.js",revision:null},{url:"assets/Get Raid Seed With CFW-Cg7ObuYP.js",revision:null},{url:"assets/Get Raid Seed Without CFW-C6pvBhT_.js",revision:null},{url:"assets/Home-BbIAQXFM.js",revision:null},{url:"assets/Honey-YfxwZhAm.js",revision:null},{url:"assets/How to Connect Dolphin to VBA-a7cSKPtr.js",revision:null},{url:"assets/How to Extract GBA Bios-BEaW2FbJ.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-DhFWJV0L.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-s2ZCoI-U.js",revision:null},{url:"assets/How to Install PCalc-B_CVXo9z.js",revision:null},{url:"assets/How to Install PokeReader-BYzH9QR-.js",revision:null},{url:"assets/index-CpyEa1Z6.js",revision:null},{url:"assets/Initial Seed Botting-BCatY1WZ.js",revision:null},{url:"assets/Initial Seed RNG-B5BEs4Vg.js",revision:null},{url:"assets/Initial Seed RNG-CeyTAVHp.js",revision:null},{url:"assets/Initial Seed RNG-Co3MYT_o.js",revision:null},{url:"assets/Initial Seed RNG-Dj_sfdy_.js",revision:null},{url:"assets/Island Scan Pokemon-BIyTXJFo.js",revision:null},{url:"assets/Island Scan Pokemon-KHLKu4JX.js",revision:null},{url:"assets/Island Scan RNG-Bx8n4H7m.js",revision:null},{url:"assets/Island Scan-C7viHjXc.js",revision:null},{url:"assets/Live and Dry Battery-D9ya7Gft.js",revision:null},{url:"assets/Live Battery TID RNG-BjcbNL0a.js",revision:null},{url:"assets/MMO-DtXpRgct.js",revision:null},{url:"assets/Mystery Gift-B4eNKHiD.js",revision:null},{url:"assets/Mystery Gift-ChgJ9fxC.js",revision:null},{url:"assets/Nature Table-biK1jaz5.js",revision:null},{url:"assets/NTR Helper Usage-S94SBVZf.js",revision:null},{url:"assets/PokeFinder Setup-NnfcLpQJ.js",revision:null},{url:"assets/PokeRadar-CONGTBZI.js",revision:null},{url:"assets/Raid RNG-DzLNinPH.js",revision:null},{url:"assets/Reseed RNG-uPIIdZqQ.js",revision:null},{url:"assets/RNGing Without Custom Firmware-BsgoTj7B.js",revision:null},{url:"assets/RNGing Without Custom Firmware-CtrxC--9.js",revision:null},{url:"assets/Roamers-DtOu3QxV.js",revision:null},{url:"assets/RSE Wild RNG - Dry Battery Emulator-CLuZaWSB.js",revision:null},{url:"assets/Ruby _ Sapphire Live Battery Stationary Abuse-DNs23OD_.js",revision:null},{url:"assets/Shiny WISHMKR Jirachi with wishmaker-calc-C7kDUMy2.js",revision:null},{url:"assets/SOS RNG Guide-Cu_TunQS.js",revision:null},{url:"assets/SOS RNG-BiAii0iQ.js",revision:null},{url:"assets/Special Wild Case (Emu)-CQcvLFmh.js",revision:null},{url:"assets/Stationary and Gift RNG-BDhrNIam.js",revision:null},{url:"assets/Stationary RNG Emu-CI6XeO7l.js",revision:null},{url:"assets/Stationary RNG-C1BGbZ1l.js",revision:null},{url:"assets/Stationary RNG-DzCSpuKy.js",revision:null},{url:"assets/Stationary v2 Emu-Q7ECrTME.js",revision:null},{url:"assets/Stationary Wormhole RNG-CPcnxrRK.js",revision:null},{url:"assets/Stationary-7SVHLpnC.js",revision:null},{url:"assets/Stationary-BegNLtl9.js",revision:null},{url:"assets/TID RNG Guide-CvhKodM1.js",revision:null},{url:"assets/TID SID RNG-kTLrisrh.js",revision:null},{url:"assets/TID SID-BDuhY2IR.js",revision:null},{url:"assets/TID SID-DZ9iaSgq.js",revision:null},{url:"assets/Time Finder.js (Citra)-CKUgItsd.js",revision:null},{url:"assets/Time Finder.js (Citra)-DzH2S-by.js",revision:null},{url:"assets/Timeline Guide-C70BEuXX.js",revision:null},{url:"assets/Timeline Guide-dCeSVEPr.js",revision:null},{url:"assets/Timeline Leap Guide-DzmKgX86.js",revision:null},{url:"assets/Timeline Leap Guide-F633hZD3.js",revision:null},{url:"assets/Timeline With Fidget Guide-BG402f8c.js",revision:null},{url:"assets/Timeline With Fidget Guide-Cfa37pUJ.js",revision:null},{url:"assets/Transporter Patches-X_1PwTRC.js",revision:null},{url:"assets/Transporter-CtD-kjJX.js",revision:null},{url:"assets/Using IPS Patches with Luma and Citra-BzgRNMWH.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-8YUHQHc7.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-D50dYvkc.js",revision:null},{url:"assets/White Forest RNG (Emu)-OLAYuWPq.js",revision:null},{url:"assets/Wild RNG - Emulator-Dj61tWco.js",revision:null},{url:"assets/Wild RNG Emu-C4fj0zRd.js",revision:null},{url:"assets/Wild RNG Emu-CxlyrWbj.js",revision:null},{url:"assets/Wild RNG-ByVxIUNk.js",revision:null},{url:"assets/Wild RNG-CoOGPalf.js",revision:null},{url:"assets/Wild RNG-CxS4UK6d.js",revision:null},{url:"assets/Wild Spots-DRP_2l33.js",revision:null},{url:"assets/Wild-p3i2Y5ww.js",revision:null},{url:"assets/Wild-QPvZjtv_.js",revision:null},{url:"assets/wildv2lua-9TNUqxOW.js",revision:null},{url:"assets/Wondercard-fmRoecbi.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/XY Trainer ID_ Secret ID_ and TSV RNG Guide-CLfez3DV.js",revision:null},{url:"index.html",revision:"90b83bf053e4149f8f8960da1f31413d"},{url:"manifest.webmanifest",revision:"914c5dd2e345e3b2b21ef5b7ee551728"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute((({url:s})=>s.pathname.startsWith("/downloads/")),new s.NetworkOnly,"GET")}));
