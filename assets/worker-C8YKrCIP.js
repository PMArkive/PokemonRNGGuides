var He="/assets/rng_tools_bg-DAacYHm9.wasm",Ge=async(e={},t)=>{let n;if(t.startsWith("data:")){const a=t.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(a,"base64");else if(typeof atob=="function"){const i=atob(a);r=new Uint8Array(i.length);for(let c=0;c<i.length;c++)r[c]=i.charCodeAt(c)}else throw new Error("Cannot decode base64-encoded data URL");n=await WebAssembly.instantiate(r,e)}else{const a=await fetch(t),r=a.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))n=await WebAssembly.instantiateStreaming(a,e);else{const i=await a.arrayBuffer();n=await WebAssembly.instantiate(i,e)}}return n.instance.exports};let _;function B(e){_=e}let p=0,A=null;function $(){return(A===null||A.byteLength===0)&&(A=new Uint8Array(_.memory.buffer)),A}const Ye=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let T=new Ye("utf-8");const Je=typeof T.encodeInto=="function"?function(e,t){return T.encodeInto(e,t)}:function(e,t){const n=T.encode(e);return t.set(n),{read:e.length,written:n.length}};function U(e,t,n){if(n===void 0){const g=T.encode(e),o=t(g.length,1)>>>0;return $().subarray(o,o+g.length).set(g),p=g.length,o}let a=e.length,r=t(a,1)>>>0;const i=$();let c=0;for(;c<a;c++){const g=e.charCodeAt(c);if(g>127)break;i[r+c]=g}if(c!==a){c!==0&&(e=e.slice(c)),r=n(r,a,a=c+e.length*3,1)>>>0;const g=$().subarray(r+c,r+a),o=Je(e,g);c+=o.written,r=n(r,a,c,1)>>>0}return p=c,r}let y=null;function w(){return(y===null||y.buffer.detached===!0||y.buffer.detached===void 0&&y.buffer!==_.memory.buffer)&&(y=new DataView(_.memory.buffer)),y}function Xe(e){const t=_.__externref_table_alloc();return _.__wbindgen_export_4.set(t,e),t}function W(e,t){try{return e.apply(this,t)}catch(n){const a=Xe(n);_.__wbindgen_exn_store(a)}}function k(e){return e==null}function F(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const r=e.description;return r==null?"Symbol":`Symbol(${r})`}if(t=="function"){const r=e.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(e)){const r=e.length;let i="[";r>0&&(i+=F(e[0]));for(let c=1;c<r;c++)i+=", "+F(e[c]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let a;if(n&&n.length>1)a=n[1];else return toString.call(e);if(a=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:a}const Ke=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let V=new Ke("utf-8",{ignoreBOM:!0,fatal:!0});V.decode();function z(e,t){return e=e>>>0,V.decode($().subarray(e,e+t))}function d(e,t){e=e>>>0;const n=w(),a=[];for(let r=e;r<e+4*t;r+=4)a.push(_.__wbindgen_export_4.get(n.getUint32(r,!0)));return _.__externref_drop_slice(e,t),a}function Qe(e){const t=_.gen3_static_states(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function Ze(e){const t=_.generate_mirage_spots(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}let E=null;function q(){return(E===null||E.byteLength===0)&&(E=new Float32Array(_.memory.buffer)),E}function v(e,t){return e=e>>>0,q().subarray(e/4,e/4+t)}function et(e){const t=_.create_gen4_timer(e);var n=v(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function tt(e,t){return _.calibrate_gen4_timer(e,t)}function nt(e,t){const n=t(e.length*4,4)>>>0;return q().set(e,n/4),p=e.length,n}function _t(e){const t=nt(e,_.__wbindgen_malloc),n=p;return _.minutes_before(t,n)}function rt(e){return _.generate_poke_radar_states(e)}function at(e){const t=_.create_gen3_timer(e);var n=v(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function st(e,t){return _.calibrate_gen3_timer(e,t)}function it(e,t,n,a,r,i,c){const g=_.gen2_generate_rng_states(e,t,n,a,r,i,c);var o=d(g[0],g[1]).slice();return _.__wbindgen_free(g[0],g[1]*4,4),o}function ct(e){const t=_.dppt_calculate_seedtime(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function gt(e,t){const n=_.dppt_calibrate_seedtime(e,t);var a=d(n[0],n[1]).slice();return _.__wbindgen_free(n[0],n[1]*4,4),a}function ot(e){const t=_.create_gen5_entralink_timer(e);var n=v(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function bt(e,t,n){return _.calibrate_gen5_entralink_timer(e,t,n)}function dt(e){const t=_.emerald_egg_pickup_states(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function ft(e){const t=_.create_gen5_standard_timer(e);var n=v(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function ut(e,t){return _.calibrate_gen5_standard_timer(e,t)}function lt(e){const t=_.find_seed6_state(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function wt(e){const t=_.create_gen5_entralink_plus_timer(e);var n=v(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function mt(e,t,n,a){return _.calibrate_gen5_entralink_plus_timer(e,t,n,a)}function pt(e){const t=_.generate_dppt_ids(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function yt(e){const t=_.search_dppt_ids(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function ht(e){const t=_.generate_oras_id(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function vt(e){const t=_.create_gen5_cgear_timer(e);var n=v(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function xt(e,t){return _.calibrate_gen5_cgear_timer(e,t)}function kt(e,t,n,a,r,i,c,g){const o=_.crystal_generate_celebi(e,t,n,a,r,i,c,g);var b=d(o[0],o[1]).slice();return _.__wbindgen_free(o[0],o[1]*4,4),b}function At(e){const t=_.emerald_egg_held_states(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function Et(e,t,n,a,r,i,c,g){const o=_.crystal_generate_starters(e,t,n,a,r,i,c,g);var b=d(o[0],o[1]).slice();return _.__wbindgen_free(o[0],o[1]*4,4),b}function St(e){const t=_.generate_stationary6(e);var n=d(t[0],t[1]).slice();return _.__wbindgen_free(t[0],t[1]*4,4),n}function $t(e,t,n,a){const r=_.emerald_sid_from_feebas_seed(e,t,n,a);var i=d(r[0],r[1]).slice();return _.__wbindgen_free(r[0],r[1]*4,4),i}function Tt(e,t,n,a){const r=_.rs_sid_from_feebas_seed(e,t,n,a);var i=d(r[0],r[1]).slice();return _.__wbindgen_free(r[0],r[1]*4,4),i}const L=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>_.__wbg_gen2rngstate_free(e>>>0,1));class I{static __wrap(t){t=t>>>0;const n=Object.create(I.prototype);return n.__wbg_ptr=t,L.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,L.unregister(this),t}free(){const t=this.__destroy_into_raw();_.__wbg_gen2rngstate_free(t,0)}get rand(){return _.__wbg_get_gen2rngstate_rand(this.__wbg_ptr)}set rand(t){_.__wbg_set_gen2rngstate_rand(this.__wbg_ptr,t)}get advance(){return _.__wbg_get_gen2rngstate_advance(this.__wbg_ptr)>>>0}set advance(t){_.__wbg_set_gen2rngstate_advance(this.__wbg_ptr,t)}get add_div(){return _.__wbg_get_gen2rngstate_add_div(this.__wbg_ptr)}set add_div(t){_.__wbg_set_gen2rngstate_add_div(this.__wbg_ptr,t)}get sub_div(){return _.__wbg_get_gen2rngstate_sub_div(this.__wbg_ptr)}set sub_div(t){_.__wbg_set_gen2rngstate_sub_div(this.__wbg_ptr,t)}}function H(e,t){const n=String(t),a=U(n,_.__wbindgen_malloc,_.__wbindgen_realloc),r=p;w().setInt32(e+4*1,r,!0),w().setInt32(e+4*0,a,!0)}function G(e){return e.buffer}function Y(){return W(function(e,t){return e.call(t)},arguments)}function J(e){return e.done}function X(e){return Object.entries(e)}function K(e){return I.__wrap(e)}function Q(){return W(function(e,t){return Reflect.get(e,t)},arguments)}function Z(e,t){return e[t>>>0]}function ee(e,t){return e[t]}function te(e){let t;try{t=e instanceof ArrayBuffer}catch{t=!1}return t}function ne(e){let t;try{t=e instanceof Uint8Array}catch{t=!1}return t}function _e(e){return Array.isArray(e)}function re(e){return Number.isSafeInteger(e)}function ae(){return Symbol.iterator}function se(e){return e.length}function ie(e){return e.length}function ce(){return new Object}function ge(){return new Array}function oe(e){return new Uint8Array(e)}function be(e){return e.next}function de(){return W(function(e){return e.next()},arguments)}function fe(e,t,n){e[t>>>0]=n}function ue(e,t,n){e[t]=n}function le(e,t,n){e.set(t,n>>>0)}function we(e){return e.value}function me(e){return+e}function pe(e){return e}function ye(e){return BigInt.asUintN(64,e)}function he(e,t){const n=t,a=typeof n=="bigint"?n:void 0;w().setBigInt64(e+8*1,k(a)?BigInt(0):a,!0),w().setInt32(e+4*0,!k(a),!0)}function ve(e){const t=e;return typeof t=="boolean"?t?1:0:2}function xe(e,t){const n=F(t),a=U(n,_.__wbindgen_malloc,_.__wbindgen_realloc),r=p;w().setInt32(e+4*1,r,!0),w().setInt32(e+4*0,a,!0)}function ke(e,t){return new Error(z(e,t))}function Ae(e,t){return e in t}function Ee(){const e=_.__wbindgen_export_4,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}function Se(e){return typeof e=="bigint"}function $e(e){return typeof e=="function"}function Te(e){const t=e;return typeof t=="object"&&t!==null}function Me(e){return typeof e=="string"}function je(e){return e===void 0}function Oe(e,t){return e===t}function Re(e,t){return e==t}function Ie(){return _.memory}function Ce(e,t){const n=t,a=typeof n=="number"?n:void 0;w().setFloat64(e+8*1,k(a)?0:a,!0),w().setInt32(e+4*0,!k(a),!0)}function Fe(e){return e}function Pe(e,t){const n=t,a=typeof n=="string"?n:void 0;var r=k(a)?0:U(a,_.__wbindgen_malloc,_.__wbindgen_realloc),i=p;w().setInt32(e+4*1,i,!0),w().setInt32(e+4*0,r,!0)}function Ue(e,t){return z(e,t)}function We(e,t){throw new Error(z(e,t))}URL=globalThis.URL;const s=await Ge({"./rng_tools_bg.js":{__wbindgen_is_bigint:Se,__wbindgen_bigint_from_u64:ye,__wbindgen_jsval_eq:Oe,__wbindgen_error_new:ke,__wbindgen_string_get:Pe,__wbindgen_boolean_get:ve,__wbindgen_is_string:Me,__wbindgen_is_object:Te,__wbindgen_is_undefined:je,__wbindgen_in:Ae,__wbindgen_number_get:Ce,__wbindgen_bigint_from_i64:pe,__wbg_gen2rngstate_new:K,__wbindgen_as_number:me,__wbindgen_number_new:Fe,__wbindgen_jsval_loose_eq:Re,__wbg_String_8f0eb39a4a4c2f66:H,__wbindgen_string_new:Ue,__wbg_getwithrefkey_1dc361bd10053bfe:ee,__wbg_set_3f1d0b984ed272ed:ue,__wbg_get_b9b93047fe3cf45b:Z,__wbg_length_e2d2a49132c1b256:ie,__wbg_new_78feb108b6472713:ge,__wbindgen_is_function:$e,__wbg_next_25feadfc0913fea9:be,__wbg_next_6574e1a8a62d1055:de,__wbg_done_769e5ede4b31c67b:J,__wbg_value_cd1ffa7b1ab794f1:we,__wbg_iterator_9a24c88df860dc65:ae,__wbg_get_67b2ba62fc30de12:Q,__wbg_call_672a4d21634d4a24:Y,__wbg_new_405e22f390576ce2:ce,__wbg_set_37837023f3d740e8:fe,__wbg_isArray_a1eab7e0d067391b:_e,__wbg_instanceof_ArrayBuffer_e14585432e3737fc:te,__wbg_isSafeInteger_343e2beeeece1bb0:re,__wbg_entries_3265d4158b33e5dc:X,__wbg_buffer_609cc3eee51ed158:G,__wbg_new_a12002a7f91c75be:oe,__wbg_set_65595bdd868b3009:le,__wbg_length_a446193dc22c12f8:se,__wbg_instanceof_Uint8Array_17156bcf118086a9:ne,__wbindgen_bigint_get_as_i64:he,__wbindgen_debug_string:xe,__wbindgen_throw:We,__wbindgen_memory:Ie,__wbindgen_init_externref_table:Ee}},He),Mt=s.memory,jt=s.gen3_static_states,Ot=s.generate_mirage_spots,Rt=s.create_gen4_timer,It=s.calibrate_gen4_timer,Ct=s.minutes_before,Ft=s.generate_poke_radar_states,Pt=s.create_gen3_timer,Ut=s.calibrate_gen3_timer,Wt=s.__wbg_gen2rngstate_free,zt=s.__wbg_get_gen2rngstate_rand,Nt=s.__wbg_set_gen2rngstate_rand,Lt=s.__wbg_get_gen2rngstate_advance,Dt=s.__wbg_set_gen2rngstate_advance,Bt=s.__wbg_get_gen2rngstate_add_div,Vt=s.__wbg_set_gen2rngstate_add_div,qt=s.__wbg_get_gen2rngstate_sub_div,Ht=s.__wbg_set_gen2rngstate_sub_div,Gt=s.gen2_generate_rng_states,Yt=s.dppt_calculate_seedtime,Jt=s.dppt_calibrate_seedtime,Xt=s.create_gen5_entralink_timer,Kt=s.calibrate_gen5_entralink_timer,Qt=s.emerald_egg_pickup_states,Zt=s.create_gen5_standard_timer,en=s.calibrate_gen5_standard_timer,tn=s.find_seed6_state,nn=s.create_gen5_entralink_plus_timer,_n=s.calibrate_gen5_entralink_plus_timer,rn=s.generate_dppt_ids,an=s.search_dppt_ids,sn=s.generate_oras_id,cn=s.create_gen5_cgear_timer,gn=s.calibrate_gen5_cgear_timer,on=s.crystal_generate_celebi,bn=s.emerald_egg_held_states,dn=s.crystal_generate_starters,fn=s.generate_stationary6,un=s.emerald_sid_from_feebas_seed,ln=s.rs_sid_from_feebas_seed,wn=s.__wbindgen_malloc,mn=s.__wbindgen_realloc,pn=s.__wbindgen_exn_store,yn=s.__externref_table_alloc,hn=s.__wbindgen_export_4,vn=s.__externref_drop_slice,xn=s.__wbindgen_free,ze=s.__wbindgen_start;var kn=Object.freeze({__proto__:null,__externref_drop_slice:vn,__externref_table_alloc:yn,__wbg_gen2rngstate_free:Wt,__wbg_get_gen2rngstate_add_div:Bt,__wbg_get_gen2rngstate_advance:Lt,__wbg_get_gen2rngstate_rand:zt,__wbg_get_gen2rngstate_sub_div:qt,__wbg_set_gen2rngstate_add_div:Vt,__wbg_set_gen2rngstate_advance:Dt,__wbg_set_gen2rngstate_rand:Nt,__wbg_set_gen2rngstate_sub_div:Ht,__wbindgen_exn_store:pn,__wbindgen_export_4:hn,__wbindgen_free:xn,__wbindgen_malloc:wn,__wbindgen_realloc:mn,__wbindgen_start:ze,calibrate_gen3_timer:Ut,calibrate_gen4_timer:It,calibrate_gen5_cgear_timer:gn,calibrate_gen5_entralink_plus_timer:_n,calibrate_gen5_entralink_timer:Kt,calibrate_gen5_standard_timer:en,create_gen3_timer:Pt,create_gen4_timer:Rt,create_gen5_cgear_timer:cn,create_gen5_entralink_plus_timer:nn,create_gen5_entralink_timer:Xt,create_gen5_standard_timer:Zt,crystal_generate_celebi:on,crystal_generate_starters:dn,dppt_calculate_seedtime:Yt,dppt_calibrate_seedtime:Jt,emerald_egg_held_states:bn,emerald_egg_pickup_states:Qt,emerald_sid_from_feebas_seed:un,find_seed6_state:tn,gen2_generate_rng_states:Gt,gen3_static_states:jt,generate_dppt_ids:rn,generate_mirage_spots:Ot,generate_oras_id:sn,generate_poke_radar_states:Ft,generate_stationary6:fn,memory:Mt,minutes_before:Ct,rs_sid_from_feebas_seed:ln,search_dppt_ids:an});B(kn);ze();var An=Object.freeze({__proto__:null,Gen2RngState:I,__wbg_String_8f0eb39a4a4c2f66:H,__wbg_buffer_609cc3eee51ed158:G,__wbg_call_672a4d21634d4a24:Y,__wbg_done_769e5ede4b31c67b:J,__wbg_entries_3265d4158b33e5dc:X,__wbg_gen2rngstate_new:K,__wbg_get_67b2ba62fc30de12:Q,__wbg_get_b9b93047fe3cf45b:Z,__wbg_getwithrefkey_1dc361bd10053bfe:ee,__wbg_instanceof_ArrayBuffer_e14585432e3737fc:te,__wbg_instanceof_Uint8Array_17156bcf118086a9:ne,__wbg_isArray_a1eab7e0d067391b:_e,__wbg_isSafeInteger_343e2beeeece1bb0:re,__wbg_iterator_9a24c88df860dc65:ae,__wbg_length_a446193dc22c12f8:se,__wbg_length_e2d2a49132c1b256:ie,__wbg_new_405e22f390576ce2:ce,__wbg_new_78feb108b6472713:ge,__wbg_new_a12002a7f91c75be:oe,__wbg_next_25feadfc0913fea9:be,__wbg_next_6574e1a8a62d1055:de,__wbg_set_37837023f3d740e8:fe,__wbg_set_3f1d0b984ed272ed:ue,__wbg_set_65595bdd868b3009:le,__wbg_set_wasm:B,__wbg_value_cd1ffa7b1ab794f1:we,__wbindgen_as_number:me,__wbindgen_bigint_from_i64:pe,__wbindgen_bigint_from_u64:ye,__wbindgen_bigint_get_as_i64:he,__wbindgen_boolean_get:ve,__wbindgen_debug_string:xe,__wbindgen_error_new:ke,__wbindgen_in:Ae,__wbindgen_init_externref_table:Ee,__wbindgen_is_bigint:Se,__wbindgen_is_function:$e,__wbindgen_is_object:Te,__wbindgen_is_string:Me,__wbindgen_is_undefined:je,__wbindgen_jsval_eq:Oe,__wbindgen_jsval_loose_eq:Re,__wbindgen_memory:Ie,__wbindgen_number_get:Ce,__wbindgen_number_new:Fe,__wbindgen_string_get:Pe,__wbindgen_string_new:Ue,__wbindgen_throw:We,calibrate_gen3_timer:st,calibrate_gen4_timer:tt,calibrate_gen5_cgear_timer:xt,calibrate_gen5_entralink_plus_timer:mt,calibrate_gen5_entralink_timer:bt,calibrate_gen5_standard_timer:ut,create_gen3_timer:at,create_gen4_timer:et,create_gen5_cgear_timer:vt,create_gen5_entralink_plus_timer:wt,create_gen5_entralink_timer:ot,create_gen5_standard_timer:ft,crystal_generate_celebi:kt,crystal_generate_starters:Et,dppt_calculate_seedtime:ct,dppt_calibrate_seedtime:gt,emerald_egg_held_states:At,emerald_egg_pickup_states:dt,emerald_sid_from_feebas_seed:$t,find_seed6_state:lt,gen2_generate_rng_states:it,gen3_static_states:Qe,generate_dppt_ids:pt,generate_mirage_spots:Ze,generate_oras_id:ht,generate_poke_radar_states:rt,generate_stationary6:St,minutes_before:_t,rs_sid_from_feebas_seed:Tt,search_dppt_ids:yt});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ne=Symbol("Comlink.proxy"),En=Symbol("Comlink.endpoint"),Sn=Symbol("Comlink.releaseProxy"),C=Symbol("Comlink.finalizer"),M=Symbol("Comlink.thrown"),Le=e=>typeof e=="object"&&e!==null||typeof e=="function",$n={canHandle:e=>Le(e)&&e[Ne],serialize(e){const{port1:t,port2:n}=new MessageChannel;return N(e,t),[n,[n]]},deserialize(e){return e.start(),On(e)}},Tn={canHandle:e=>Le(e)&&M in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},De=new Map([["proxy",$n],["throw",Tn]]);function Mn(e,t){for(const n of e)if(t===n||n==="*"||n instanceof RegExp&&n.test(t))return!0;return!1}function N(e,t=globalThis,n=["*"]){t.addEventListener("message",function a(r){if(!r||!r.data)return;if(!Mn(n,r.origin)){console.warn(`Invalid origin '${r.origin}' for comlink proxy`);return}const{id:i,type:c,path:g}=Object.assign({path:[]},r.data),o=(r.data.argumentList||[]).map(m);let b;try{const f=g.slice(0,-1).reduce((u,x)=>u[x],e),l=g.reduce((u,x)=>u[x],e);switch(c){case"GET":b=l;break;case"SET":f[g.slice(-1)[0]]=m(r.data.value),b=!0;break;case"APPLY":b=l.apply(f,o);break;case"CONSTRUCT":{const u=new l(...o);b=Pn(u)}break;case"ENDPOINT":{const{port1:u,port2:x}=new MessageChannel;N(e,x),b=Fn(u,[u])}break;case"RELEASE":b=void 0;break;default:return}}catch(f){b={value:f,[M]:0}}Promise.resolve(b).catch(f=>({value:f,[M]:0})).then(f=>{const[l,u]=R(f);t.postMessage(Object.assign(Object.assign({},l),{id:i}),u),c==="RELEASE"&&(t.removeEventListener("message",a),Be(t),C in e&&typeof e[C]=="function"&&e[C]())}).catch(f=>{const[l,u]=R({value:new TypeError("Unserializable return value"),[M]:0});t.postMessage(Object.assign(Object.assign({},l),{id:i}),u)})}),t.start&&t.start()}function jn(e){return e.constructor.name==="MessagePort"}function Be(e){jn(e)&&e.close()}function On(e,t){const n=new Map;return e.addEventListener("message",function(r){const{data:i}=r;if(!i||!i.id)return;const c=n.get(i.id);if(c)try{c(i)}finally{n.delete(i.id)}}),P(e,n,[],t)}function S(e){if(e)throw new Error("Proxy has been released and is not useable")}function Ve(e){return h(e,new Map,{type:"RELEASE"}).then(()=>{Be(e)})}const j=new WeakMap,O="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(j.get(e)||0)-1;j.set(e,t),t===0&&Ve(e)});function Rn(e,t){const n=(j.get(t)||0)+1;j.set(t,n),O&&O.register(e,t,e)}function In(e){O&&O.unregister(e)}function P(e,t,n=[],a=function(){}){let r=!1;const i=new Proxy(a,{get(c,g){if(S(r),g===Sn)return()=>{In(i),Ve(e),t.clear(),r=!0};if(g==="then"){if(n.length===0)return{then:()=>i};const o=h(e,t,{type:"GET",path:n.map(b=>b.toString())}).then(m);return o.then.bind(o)}return P(e,t,[...n,g])},set(c,g,o){S(r);const[b,f]=R(o);return h(e,t,{type:"SET",path:[...n,g].map(l=>l.toString()),value:b},f).then(m)},apply(c,g,o){S(r);const b=n[n.length-1];if(b===En)return h(e,t,{type:"ENDPOINT"}).then(m);if(b==="bind")return P(e,t,n.slice(0,-1));const[f,l]=D(o);return h(e,t,{type:"APPLY",path:n.map(u=>u.toString()),argumentList:f},l).then(m)},construct(c,g){S(r);const[o,b]=D(g);return h(e,t,{type:"CONSTRUCT",path:n.map(f=>f.toString()),argumentList:o},b).then(m)}});return Rn(i,e),i}function Cn(e){return Array.prototype.concat.apply([],e)}function D(e){const t=e.map(R);return[t.map(n=>n[0]),Cn(t.map(n=>n[1]))]}const qe=new WeakMap;function Fn(e,t){return qe.set(e,t),e}function Pn(e){return Object.assign(e,{[Ne]:!0})}function R(e){for(const[t,n]of De)if(n.canHandle(e)){const[a,r]=n.serialize(e);return[{type:"HANDLER",name:t,value:a},r]}return[{type:"RAW",value:e},qe.get(e)||[]]}function m(e){switch(e.type){case"HANDLER":return De.get(e.name).deserialize(e.value);case"RAW":return e.value}}function h(e,t,n,a){return new Promise(r=>{const i=Un();t.set(i,r),e.start&&e.start(),e.postMessage(Object.assign({id:i},n),a)})}function Un(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}N(An);
