if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),a={module:{uri:n},exports:u,require:t};e[n]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-1504e367"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/(XD) PAL Starter Eevee RNG-Bv1EtYHF.js",revision:null},{url:"assets/Advancing the RNG-B7So-qcL.js",revision:null},{url:"assets/Advancing the RNG-CzVaXvD_.js",revision:null},{url:"assets/Advancing the RNG-DBacxbSs.js",revision:null},{url:"assets/Basic Rules of RNG-D-Ypvjfm.js",revision:null},{url:"assets/Basic Rules of RNG-Dl8ohd1U.js",revision:null},{url:"assets/Basic Rules of RNG-MY5GxoI5.js",revision:null},{url:"assets/BK - Emulator Setup-D5gzF8hj.js",revision:null},{url:"assets/BK - How to use PokeFinder-Ck0j2E4p.js",revision:null},{url:"assets/BK - How to use Shiny's site-BJXm2mke.js",revision:null},{url:"assets/Breeding RNG (Emu)-RrUnM2xA.js",revision:null},{url:"assets/CaptureSight Install-ClfmgG7F.js",revision:null},{url:"assets/Channel-CVMVWf_k.js",revision:null},{url:"assets/CitraRNG Setup-8Llu0d-0.js",revision:null},{url:"assets/Colosseum General Guide (Emu)-CzyF-NLI.js",revision:null},{url:"assets/Cute Charm-B32jdizR.js",revision:null},{url:"assets/Cute Charm-DU96XdmG.js",revision:null},{url:"assets/Dead Battery Stationary RNG  (Emulator)-BM1-cZhC.js",revision:null},{url:"assets/Desmume Setup-B-axxjE4.js",revision:null},{url:"assets/DexNav RNG-fQjf3Y30.js",revision:null},{url:"assets/Dream Radar-DALeoW7Y.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-BlERk2zS.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-C0t-wNVQ.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-DfnEyr4A.js",revision:null},{url:"assets/Egg RNG With Masuda Method or Shiny Charm-Dje_f78B.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-B5J2eM-d.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-BqyK7WwG.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-CnLtRNPi.js",revision:null},{url:"assets/Egg RNG Without Masuda Method or Shiny Charm-DqsrmHkj.js",revision:null},{url:"assets/Egg RNG-bb_BgOai.js",revision:null},{url:"assets/Egg RNG-BCib6Uaw.js",revision:null},{url:"assets/Egg RNG-D6B-lXVA.js",revision:null},{url:"assets/Egg RNG-DweKcSsq.js",revision:null},{url:"assets/Egg-CNbXRedw.js",revision:null},{url:"assets/Egg-eW5bmXfc.js",revision:null},{url:"assets/Egg-fuSeRA4T.js",revision:null},{url:"assets/Entralink-CNFmd8AF.js",revision:null},{url:"assets/Find DS Parameters-D4kgg1y3.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-BC2fUUgk.js",revision:null},{url:"assets/Finding Initial Seed with Clocks-CQGA5JhT.js",revision:null},{url:"assets/Friend Safari RNG Guide-BK-ld02i.js",revision:null},{url:"assets/Get Raid Seed With CFW-D8t3VtJ5.js",revision:null},{url:"assets/Get Raid Seed Without CFW-DD5w-6Lw.js",revision:null},{url:"assets/Home-BforXQPu.js",revision:null},{url:"assets/Honey-C6t9IWi2.js",revision:null},{url:"assets/How to Connect Dolphin to VBA-F4KwEjlV.js",revision:null},{url:"assets/How to Extract GBA Bios-DsqWLg7V.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-19-3dmiP.js",revision:null},{url:"assets/How to Find Egg Seeds Without Custom Firmware-D1Qg3UW5.js",revision:null},{url:"assets/How to Install PCalc-CkPYThjq.js",revision:null},{url:"assets/How to Install PokeReader-yJ2C2DEq.js",revision:null},{url:"assets/index-BAEKAekl.js",revision:null},{url:"assets/Initial Seed Botting-BgnGoh15.js",revision:null},{url:"assets/Initial Seed RNG-C7c5o4oV.js",revision:null},{url:"assets/Initial Seed RNG-ChTYRU23.js",revision:null},{url:"assets/Initial Seed RNG-DJ5tdWN3.js",revision:null},{url:"assets/Initial Seed RNG-DoT2jdio.js",revision:null},{url:"assets/Island Scan Pokemon-5islBWul.js",revision:null},{url:"assets/Island Scan Pokemon-gE0t_Kc1.js",revision:null},{url:"assets/Island Scan RNG-COgfArlo.js",revision:null},{url:"assets/Island Scan-DDlqDzAP.js",revision:null},{url:"assets/Live and Dry Battery-CSNJHjyu.js",revision:null},{url:"assets/Live Battery TID RNG-BiTAp7Ck.js",revision:null},{url:"assets/MMO-CTx0iaJH.js",revision:null},{url:"assets/Mystery Gift-D9-f43Ip.js",revision:null},{url:"assets/Mystery Gift-De288CdR.js",revision:null},{url:"assets/Nature Table-DcgUHGrL.js",revision:null},{url:"assets/NTR Helper Usage-mwZqSH0r.js",revision:null},{url:"assets/PokeFinder Setup-BnhiaQC3.js",revision:null},{url:"assets/PokeRadar-DYCEA3th.js",revision:null},{url:"assets/Raid RNG-BUGqyPJD.js",revision:null},{url:"assets/Reseed RNG-D3e3skvi.js",revision:null},{url:"assets/RNGing Without Custom Firmware-CaymX9Nu.js",revision:null},{url:"assets/RNGing Without Custom Firmware-S5WGOxPN.js",revision:null},{url:"assets/Roamers-Csu1MERU.js",revision:null},{url:"assets/RSE Wild RNG - Dry Battery Emulator-Du7PF3yz.js",revision:null},{url:"assets/Ruby _ Sapphire Live Battery Stationary Abuse-DXGsHfrU.js",revision:null},{url:"assets/Shiny WISHMKR Jirachi with wishmaker-calc-C5h_YWMZ.js",revision:null},{url:"assets/SOS RNG Guide-BRX97s6w.js",revision:null},{url:"assets/SOS RNG-D9t9xizw.js",revision:null},{url:"assets/Special Wild Case (Emu)-DpswvcPe.js",revision:null},{url:"assets/Stationary and Gift RNG-DcfAXQsj.js",revision:null},{url:"assets/Stationary RNG Emu-CNnPM2IB.js",revision:null},{url:"assets/Stationary RNG-D7lSChpF.js",revision:null},{url:"assets/Stationary RNG-Vq7QeOQk.js",revision:null},{url:"assets/Stationary v2 Emu-B4wc_Rgo.js",revision:null},{url:"assets/Stationary Wormhole RNG-n7MEvJgq.js",revision:null},{url:"assets/Stationary-BIdj05L2.js",revision:null},{url:"assets/Stationary-Dsaze2Vk.js",revision:null},{url:"assets/TID RNG Guide-7FnRHzdf.js",revision:null},{url:"assets/TID SID RNG-BSMaGrz7.js",revision:null},{url:"assets/TID SID-BBke92Ta.js",revision:null},{url:"assets/TID SID-BR5xwwpF.js",revision:null},{url:"assets/Time Finder.js (Citra)-BGhY5fRf.js",revision:null},{url:"assets/Time Finder.js (Citra)-CME2Ev1D.js",revision:null},{url:"assets/Timeline Guide-BlCBspDy.js",revision:null},{url:"assets/Timeline Guide-DixTJgbb.js",revision:null},{url:"assets/Timeline Leap Guide-DeKw9GNQ.js",revision:null},{url:"assets/Timeline Leap Guide-DzWIsVid.js",revision:null},{url:"assets/Timeline With Fidget Guide-_37miZj5.js",revision:null},{url:"assets/Timeline With Fidget Guide-juqrz6MG.js",revision:null},{url:"assets/Transporter Patches-COQ17hKi.js",revision:null},{url:"assets/Transporter-CRoVV0dG.js",revision:null},{url:"assets/Using IPS Patches with Luma and Citra-Cbjvd8iy.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-c0IthQUY.js",revision:null},{url:"assets/Using Runasdate to RNG Initial Seed-DLrMk-zC.js",revision:null},{url:"assets/White Forest RNG (Emu)-BAatT9e8.js",revision:null},{url:"assets/Wild RNG - Emulator-CwhleYrA.js",revision:null},{url:"assets/Wild RNG Emu-0BJdmtGa.js",revision:null},{url:"assets/Wild RNG Emu-CcXayu_6.js",revision:null},{url:"assets/Wild RNG-BqMJzoQe.js",revision:null},{url:"assets/Wild RNG-BY7Eo-1X.js",revision:null},{url:"assets/Wild RNG-DZZkoMxd.js",revision:null},{url:"assets/Wild Spots-DrmpSC7Z.js",revision:null},{url:"assets/Wild-DevOypbF.js",revision:null},{url:"assets/Wild-DFzq9edo.js",revision:null},{url:"assets/wildv2lua--0HS4Ud9.js",revision:null},{url:"assets/Wondercard-DP4ROKPt.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/XY Trainer ID_ Secret ID_ and TSV RNG Guide-B5RQ5dg3.js",revision:null},{url:"index.html",revision:"d8910e7c937fdcca52fbc66b7dcad167"},{url:"manifest.webmanifest",revision:"914c5dd2e345e3b2b21ef5b7ee551728"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/\.zip$/]})),s.registerRoute((({url:s})=>s.pathname.endsWith(".zip")),new s.NetworkFirst,"GET")}));
