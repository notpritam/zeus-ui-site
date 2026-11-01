import{W as Ve,x as $,y as $e,z as je,B as k,V as O,i as Xe,E as Ee,F as M,M as U,G as Ye,S as V,H as Ke,I as ke,h as se,m as Ze,J as ve,K as Se,Q as Oe,R as H,U as ue,X as I,j as ze,L as we,Y as Qe,Z as pe,_ as j,a0 as me,a1 as Le,a2 as Te,a3 as Ce,a4 as Ae,a5 as Pe,a6 as Je,q as Ge,a7 as Ne,a8 as We,o as et,a9 as tt,aa as st,ab as le,ac as q,ad as it,ae as ot,af as Re,ag as at,ah as nt}from"./template-shell-BeYEPqdR.js";import{P as rt,a as B,b as Y,N as he,s as J,c as ge,d as lt,e as de,f as ht}from"./zephyr-petal-signup-RDbBN2tW.js";import"./index-BhuRMr7i.js";import"./index-kPxiZZUO.js";import"./recipe-CX_Hq7Sp.js";import"./react-CWvgDdIn.js";import"./index-CXHAiFMv.js";import"./icon-button-DGFnShxz.js";import"./Specimen-wIJO3G_c.js";import"./index-Cz7_bAEE.js";import"./close-button-ukYM2HH6.js";import"./number-BJRdc-Co.js";import"./useLoadMoreSentinel-CX0Z7Ip2.js";import"./I18nProvider-BrV2FG4H.js";import"./useButton-B-b8LYVL.js";import"./usePress-Cz0gfbuG.js";import"./textSelection-BgAosgJl.js";import"./inertValue-DU6FbQtO.js";import"./NumberFormatter-H2sZ7Z8O.js";import"./dropdown-dlmDvlYY.js";import"./Dialog-Cg7aBRCX.js";import"./useOverlayTriggerState-CnY64hyv.js";import"./FocusScope-BC6xS9Ty.js";import"./VisuallyHidden-DuKnApcT.js";import"./animation-oOdFPfBs.js";import"./menu-styles-BqNUlDsC.js";import"./use-dismiss-on-outside-press-BGhKBrJc.js";import"./select-Dk3WDUSt.js";import"./useCollection-DFmGEA_N.js";import"./useDescription-P0VHtou6.js";import"./useCollator-Cknn3rch.js";import"./SelectionIndicator-D7lyJig3.js";import"./SharedElementTransition-BjK3XRet.js";import"./useSelectableList-Cl2Xp4UO.js";import"./useListState-B90LgFaC.js";import"./chevrons-CEYuNLYm.js";import"./switch-BS2pl0t2.js";import"./useToggle-Buxan1wS.js";import"./useSlot-CRYxeTqW.js";import"./useToggleState-CdLgbm5I.js";import"./shared-BxpA2j2y.js";import"./useUpdateEffect-pOtArAt1.js";import"./date-picker-5Zp30XQh.js";import"./chip-DcD_Tzj6.js";import"./checkbox-9NKAsmSt.js";import"./Checkbox-hZcxCuNi.js";import"./file-upload-DJEc5umR.js";import"./pagination-DPTNmj7Y.js";import"./tooltip-CkNdeVsa.js";import"./badge-HTZF_vLH.js";import"./kbd-DLOwrc0y.js";import"./avatar-B1h43DME.js";import"./breadcrumb-DqxAJoC9.js";import"./segmented-control--43c8zbc.js";import"./use-selection-bounds-y4ORyHs2.js";import"./artemis-scope-KK5-0YYn.js";import"./home-dashboard-wolqVt9e.js";import"./Modal-q6WbCQuJ.js";import"./contributions-card-CAMK3jKC.js";import"./chart-cell-Df5tmK6B.js";import"./pro-chart-BO6Fkj82.js";import"./use-count-up-BGNlcXXR.js";import"./use-reduced-motion-K_aoM-Hu.js";import"./chart-bar-track-BVpuEQkP.js";import"./stat-cards-d7p9hvJg.js";import"./data-table-LdwCwQbs.js";import"./table-BC46k_r6.js";import"./TreeDropTargetDelegate--p4tVKfb.js";import"./useHasTabbableChild-eBMbS_hp.js";import"./status-dot-fDCriT0t.js";import"./Bar-D2FMTGd6.js";import"./graphicalItemSelectors-C3lcrdrQ.js";import"./chart-active-dot-DyL-Dm7d.js";import"./Dot-mIBrkDXb.js";import"./Area-accoj2oC.js";import"./recent-hires-card-DsQLD5qe.js";const ye={width:512,height:384},ne=Math.PI*2,xe=o=>Math.min(1,Math.max(0,o)),Fe=o=>1-(1-xe(o))**3;function K(o,e,s,t,i){o.font=s(t);const a=o.measureText(e).width;a>i&&(o.font=s(Math.max(10,Math.floor(t*i/a))))}function Q(o,e,s,t,i,a,c=.7){const l=s+t*.62,v=Math.max(2,t*.16);o.save(),o.beginPath(),o.rect(e-t*3,s-t*4,t*6,t*4+t*.62-v),o.clip(),o.fillStyle=i,o.beginPath(),o.arc(e,s+(1-c)*t*.9,t,0,ne),o.fill(),o.restore(),o.fillStyle=a;const r=Math.max(2,t*.15);o.beginPath(),o.roundRect(e-t*1.55,l-r/2,t*3.1,r,r/2),o.fill()}function ct(o,e,s){const t=[];let i="";for(const a of e.split(/\s+/).filter(Boolean)){const c=i?`${i} ${a}`:a;o.measureText(c).width>s&&i?(t.push(i),i=a):i=c}return i&&t.push(i),t.slice(0,3)}function fe(o,e,s,t,i,a){const c=o.createRadialGradient(e,s,0,e,s,t);c.addColorStop(0,i),c.addColorStop(1,"transparent"),o.globalAlpha=a,o.fillStyle=c,o.fillRect(e-t,s-t,t*2,t*2),o.globalAlpha=1}function ut(o,e,s,t,i,a,c){const{width:l,height:v}=ye;o.save(),o.fillStyle=a.background,o.fillRect(0,0,l,v),o.textAlign="center",o.textBaseline="alphabetic";const r=s<.6||Math.floor(t*1.8)%2===0,n=54,h=l-54;switch(e.kind){case"logo":{const d=.62+.08*Math.sin(t*.5);fe(o,l/2,150,150,a.accent,.16),Q(o,l/2,148,44,a.accent,a.text,d),o.fillStyle=a.text,K(o,i.brand,p=>`600 ${p}px ${c.sans}`,48,h-n),o.fillText(i.brand,l/2,270),o.fillStyle=a.dim,K(o,i.tagline,p=>`400 ${p}px ${c.sans}`,24,h-n),o.fillText(i.tagline,l/2,310);break}case"email":case"password":{o.textAlign="left",o.fillStyle=a.dim,o.font=`500 23px ${c.mono}`,o.fillText(e.kind==="email"?i.email:i.password,n,124),Q(o,h-20,104,15,a.accent,a.dim,.7),o.fillStyle=a.text;const d=214;let p=n;if(e.kind==="email"){o.font=`500 46px ${c.mono}`;const u=e.text,w=o.measureText(u).width,y=h-n-30;o.save(),o.beginPath(),o.rect(n-2,d-56,h-n+4,76),o.clip();const b=Math.max(0,w-y);o.fillText(u,n-b,d),o.restore(),p=n+Math.min(w,y)+5}else{const u=Math.min(e.length,12);for(let w=0;w<u;w++)o.beginPath(),o.arc(n+13+w*32,d-15,10.5,0,ne),o.fill();p=n+u*32+6}r&&(o.fillStyle=a.accent,o.fillRect(p,d-40,19,50)),o.fillStyle=a.dim,o.fillRect(n,d+30,h-n,3);break}case"pending":{const d=.5+.5*Math.sin(t*4);fe(o,l/2,132,120,a.accent,.1+.08*d),Q(o,l/2,130,30,a.accent,a.text,.55+.25*d),o.fillStyle=a.text,K(o,i.pending,z=>`500 ${z}px ${c.sans}`,34,h-n),o.fillText(i.pending,l/2,240);const p=280,u=l/2-p/2;o.fillStyle=a.dim,o.globalAlpha=.45,o.beginPath(),o.roundRect(u,272,p,8,4),o.fill(),o.globalAlpha=1;const w=s*.9%1.4,y=u+p*xe(w-.4),b=u+p*xe(w);o.fillStyle=a.accent,b-y>1&&(o.beginPath(),o.roundRect(y,272,b-y,8,4),o.fill());break}case"error":{o.strokeStyle=a.error,o.lineWidth=4,o.beginPath(),o.arc(l/2,112,26,0,ne),o.stroke(),o.fillStyle=a.error,o.fillRect(l/2-2.5,98,5,18),o.beginPath(),o.arc(l/2,125,3.2,0,ne),o.fill(),o.font=`500 34px ${c.sans}`,ct(o,e.message,h-n).forEach((p,u)=>o.fillText(p,l/2,204+u*44));break}case"welcome":{const d=Fe(s/1.6),p=Fe((s-.45)/.9);fe(o,l/2,150,120+90*d,a.accent,.14+.22*d),Q(o,l/2,150,46,a.accent,a.text,.15+.95*d),o.globalAlpha=p,o.fillStyle=a.text,K(o,i.welcome,u=>`600 ${u}px ${c.sans}`,44,h-n+30),o.fillText(i.welcome,l/2,272+(1-p)*14),o.globalAlpha=p*.9,o.fillStyle=a.dim,K(o,i.tagline,u=>`400 ${u}px ${c.sans}`,24,h-n),o.fillText(i.tagline,l/2,314+(1-p)*14),o.globalAlpha=1;break}}if(e.kind==="error"&&s<.5){const d=1-s/.5,p=Math.floor(s*40);for(let u=0;u<6;u++){const w=Math.sin((p+1)*12.9898+u*78.233)*43758.5453,y=w-Math.floor(w),b=Math.floor(y*v),z=10+Math.floor(y*26),S=(y-.5)*46*d;o.drawImage(o.canvas,0,b,l,z,S,b,l,z)}}if(s<.32){const d=s/.32*(v+60)-30,p=o.createLinearGradient(0,d-30,0,d+30);p.addColorStop(0,"transparent"),p.addColorStop(.5,"rgba(255,255,255,0.22)"),p.addColorStop(1,"transparent"),o.fillStyle=p,o.fillRect(0,d-30,l,60)}o.restore()}const pt=(o,e)=>o.kind==="pending"||o.kind==="logo"||e<2||o.kind==="email"||o.kind==="password",L=Math.PI*2,Me=24,mt=.035,re=(o,e,s)=>o+(e-o)*s,ie=new M(-.15,.55,3.6),oe=new M(.25,.65,-.2),dt=new M;function Be(o=6,e=4){const s=[],t=[],i=[];for(let l=0;l<=o;l++){const v=l/o,r=.33*Math.sin(Math.PI*v**.65*.9)+.025*(1-v);for(let n=0;n<=e;n++){const h=n/e*2-1,d=h*r,p=v-.13*v**5*(1-h*h)-.5,u=.12*h*h*Math.sin(Math.PI*v)-.09*v*v;s.push(d,p,u),t.push(n/e,v)}}const a=e+1;for(let l=0;l<o;l++)for(let v=0;v<e;v++){const r=l*a+v;i.push(r,r+1,r+a,r+1,r+a+1,r+a)}const c=new le;return c.setAttribute("position",new q(s,3)),c.setAttribute("uv",new q(t,2)),c.setIndex(i),c.computeVertexNormals(),c}function _e(o){const e=o.map(i=>i.index?i.toNonIndexed():i),s=(i,a)=>{const c=e.reduce((r,n)=>r+n.attributes.position.count,0),l=new Float32Array(c*a);let v=0;for(const r of e){const n=r.attributes[i];n&&l.set(n.array.subarray(0,r.attributes.position.count*a),v),v+=r.attributes.position.count*a}return new nt(l,a)},t=new le;t.setAttribute("position",s("position",3)),t.setAttribute("normal",s("normal",3)),t.setAttribute("uv",s("uv",2));for(const i of e)i.dispose();for(const i of o)i.dispose();return t}function ft(){const o=[];for(let t=0;t<5;t++){const i=Be(3,1);i.scale(.5,.5,.5),i.translate(0,.25,0),i.rotateX(.42),i.rotateZ(t/5*L+.3),o.push(i)}const e=new ot(.075,6);e.translate(0,0,.02);const s=e.attributes.uv;for(let t=0;t<s.count;t++)s.setXY(t,.5,0);return o.push(e),_e(o)}function vt(o,e,s){const t=new at,i=-o/2,a=-e/2;return t.moveTo(i+s,a),t.lineTo(i+o-s,a),t.quadraticCurveTo(i+o,a,i+o,a+s),t.lineTo(i+o,a+e-s),t.quadraticCurveTo(i+o,a+e,i+o-s,a+e),t.lineTo(i+s,a+e),t.quadraticCurveTo(i,a+e,i,a+e-s),t.lineTo(i,a+s),t.quadraticCurveTo(i,a,i+s,a),t}function Z(o,e,s,t,i=.008){const a=new it(vt(o-2*i,e-2*i,Math.max(.002,t-i)),{depth:s-2*i,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:2,curveSegments:5});return a.translate(0,0,-(s-2*i)/2),a}function ae(o,e,s,t,i=8){const a=new Le(o,e,1,i,!1),c=a.attributes.position,l=new M,v=new M,r=i+1;for(let n=0;n<=e;n++){const h=n/e;o.getPointAt(h,l);const d=re(s,t,h**.8);for(let p=0;p<r;p++){const u=n*r+p,w=s>.04?1+.16*Math.sin(p/i*L*5+h*13)+.09*Math.cos(p/i*L*9-h*23)+.07*Math.sin(h*47+p*3):1;v.fromBufferAttribute(c,u).sub(l).multiplyScalar(d*w).add(l),c.setXYZ(u,v.x,v.y,v.z)}}return a.computeVertexNormals(),a}function wt(o){const{stone:e}=B,s=[];for(let x=1;x<=44;x++)s.push(Math.sin(x/44*(Math.PI/2)));s.push(1,1.06,1.16);const t=112,i=[0,0,0],a=[],c=[0,0],l=new he(J(356382)),v=new k(o.stone),r=v.clone().multiplyScalar(.2),n=v.clone().lerp(new k("#a49a7e"),.18),h=new k,d=(x,C,m)=>{const f=.5+.5*l.at(x*6.5,C*6.5,m*6.5),g=1-Re.smoothstep(C,.012,.11);h.copy(v).lerp(n,f*.7).lerp(r,g),h.multiplyScalar(.9+.2*l.at(x*19,3.1,m*19)),a.push(h.r,h.g,h.b)},p=Math.cos(e.yaw),u=Math.sin(e.yaw),w=ge(e.x,e.z);i[0]=e.x,i[1]=w,i[2]=e.z,d(e.x,w,e.z);for(const x of s)for(let C=0;C<t;C++){const m=C/t*L,f=1+.07*Math.sin(m*3+.7)+.045*Math.sin(m*5+2.1)+.022*Math.sin(m*11),g=Math.cos(m)*e.radiusX*x*f,T=Math.sin(m)*e.radiusZ*x*f,E=e.x+g*p+T*u,F=e.z-g*u+T*p,A=Math.max(-.08,ge(E,F)),G=Re.smoothstep(x,.65,1),W=l.at(E*15,A*24,F*15)*.075*G;i.push(E+Math.cos(m)*W,A,F+Math.sin(m)*W),c.push(g*2.4,T*2.4),d(E,A,F)}const y=[];for(let x=0;x<t;x++)y.push(0,1+(x+1)%t,1+x);for(let x=0;x<s.length-1;x++)for(let C=0;C<t;C++){const m=1+x*t+C,f=1+x*t+(C+1)%t,g=m+t,T=f+t;y.push(m,f,g,f,T,g)}const b=new le;b.setAttribute("position",new q(i,3)),b.setAttribute("color",new q(a,3)),b.setAttribute("uv",new q(c,2)),b.setIndex(y),b.computeVertexNormals();const z=b.toNonIndexed();b.dispose();const S=z.attributes.position,P=z.attributes.uv,N=new M,R=new M,_=new M;for(let x=0;x<S.count;x+=3){N.fromBufferAttribute(S,x),R.fromBufferAttribute(S,x+1).sub(N),_.fromBufferAttribute(S,x+2).sub(N),R.cross(_).normalize();const C=Math.abs(R.y)>Math.max(Math.abs(R.x),Math.abs(R.z)),m=Math.abs(R.x)>Math.abs(R.z);for(let f=x;f<x+3;f++){const g=C||!m?S.getX(f):S.getZ(f),T=C?-S.getZ(f):S.getY(f);P.setXY(f,g*2.3,T*2.3)}}return z}function gt(){const e=new he(J(108695934)),s=new Float32Array(512*512),t=new Uint8Array(512*512*4),i=new Uint8Array(512*512*4),a=new Uint8Array(512*512*4),c=(r,n,h,d)=>{const p=r/512*L,u=n/512*L,w=h/L;return e.at((3+Math.cos(u))*Math.cos(p)*w,(3+Math.cos(u))*Math.sin(p)*w,Math.sin(u)*w+d)};for(let r=0;r<512;r++)for(let n=0;n<512;n++){const h=r*512+n,d=h*4,p=c(n,r,8,3),u=c(n,r,100,7),w=c(n,r,230,11),y=Math.pow(Math.max(0,1-Math.abs(c(n,r,11,19)+p*.35)*30),3),b=Math.max(0,u-.08)*1.2,z=Math.max(0,-u-.12);s[h]=p*.42+u*.13+w*.045-y*.2;const S=Math.max(.12,.68+p*.3+w*.25+z*.85-b*.9-y*.28);t[d]=Math.min(255,S*255),t[d+1]=Math.min(255,S*242),t[d+2]=Math.min(255,S*221),t[d+3]=255;const P=Math.min(255,Math.max(90,215+u*60-z*120));a[d]=a[d+1]=a[d+2]=P,a[d+3]=255}const l=(r,n)=>s[(n+512)%512*512+(r+512)%512];for(let r=0;r<512;r++)for(let n=0;n<512;n++){const h=(l(n-1,r)-l(n+1,r))*5.5,d=(l(n,r-1)-l(n,r+1))*5.5,p=Math.hypot(h,d,1),u=(r*512+n)*4;i[u]=(h/p*.5+.5)*255,i[u+1]=(d/p*.5+.5)*255,i[u+2]=(1/p*.5+.5)*255,i[u+3]=255}const v=(r,n=!1)=>{const h=new Ge(r,512,512);return h.wrapS=h.wrapT=Ne,h.magFilter=we,h.minFilter=We,h.generateMipmaps=!0,h.anisotropy=4,n&&(h.colorSpace=$),h.needsUpdate=!0,h};return{map:v(t,!0),normalMap:v(i),roughnessMap:v(a)}}function yt(o,e,s,t){const i=new he(J(t)),a=200,c=[],l=[];for(let n=0;n<=a;n++){const h=re(-110,110,n/a);let d=0,p=.55,u=s;for(let y=0;y<4;y++)d+=p*(1-Math.abs(i.at(h*u,t%17,y*3.7))),p*=.48,u*=2.2;const w=e*(d-.45)*1.25;c.push(h,Math.max(.15,w),o,h,-3,o),l.push(1,0)}const v=[];for(let n=0;n<a;n++){const h=n*2;v.push(h,h+1,h+2,h+2,h+1,h+3)}const r=new le;return r.setAttribute("position",new q(c,3)),r.setAttribute("aTop",new q(l,1)),r.setIndex(v),r}const De=`
attribute vec4 aData;
varying vec3 vWorld;
varying vec3 vNormal;
varying vec2 vUv;
varying vec4 vData;
void main() {
  mat4 m = modelMatrix;
#ifdef USE_INSTANCING
  m = modelMatrix * instanceMatrix;
#endif
  vec4 w = m * vec4(position, 1.0);
  vWorld = w.xyz;
  vNormal = normalize(mat3(m) * normal);
  vUv = uv;
  vData = aData;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Ue=`
uniform vec3 uBase;
uniform vec3 uTip;
uniform vec3 uSunDir;
uniform vec3 uSun;
uniform vec3 uSky;
uniform vec3 uGround;
uniform vec3 uHaze;
uniform vec2 uFog;
varying vec3 vWorld;
varying vec3 vNormal;
varying vec2 vUv;
varying vec4 vData;
void main() {
  vec3 n = normalize(vNormal);
  if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(cameraPosition - vWorld);
  vec3 tone = mix(uBase, uTip, smoothstep(0.02, 0.8, vUv.y));
  tone *= mix(vec3(0.78, 0.50, 0.64), vec3(1.08, 1.0, 1.0), vData.y);
  tone = mix(tone, vec3(1.0, .82, .87), smoothstep(.92, 1., vData.y) * smoothstep(.6,1.,vUv.y) * .35);
  float ndl = dot(n, uSunDir);
  vec3 ambient = mix(uGround, uSky, n.y * 0.5 + 0.5);
  vec3 lit = tone * (ambient * 0.88 + uSun * max(ndl, 0.0) * 0.7);
  // Light comes through a petal when the sun is behind it.
  float behind = pow(max(dot(-v, uSunDir), 0.0), 4.0);
  lit += tone * uSun * (max(-ndl, 0.0) * 0.32 + behind * 0.28);
  lit *= 1.0 - 0.07 * exp(-pow((vUv.x - 0.5) * 12.0, 2.0)) * vUv.y;
  lit *= 1.0 - 0.2 * vData.z - 0.23 * vData.w;
  float f = smoothstep(uFog.x, uFog.y, length(vWorld - cameraPosition));
  gl_FragColor = vec4(mix(lit, uHaze, f), vData.x);
  #include <colorspace_fragment>
}`,xt=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,Mt=`
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGlow;
uniform vec3 uSun;
uniform vec3 uSunDir;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float up = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(uHorizon, uZenith, pow(smoothstep(0.0, 0.6, up), 0.62));
  float s = max(dot(d, uSunDir), 0.0);
  col = mix(col, uGlow, pow(s, 5.0) * 0.6 * (1.0 - smoothstep(0.0, 0.45, up)));
  col += uSun * (pow(s, 48.0) * 0.32 + pow(s, 600.0) * 0.55);
  float disc = smoothstep(0.99955, 0.99974, s);
  col = mix(col, uSun * 1.25 + vec3(0.25), disc);
  float band = exp(-pow((d.y - 0.075) * 30.0, 2.0)) * (0.55 + 0.45 * sin(d.x * 11.0 + d.z * 4.0));
  col = mix(col, uGlow, band * 0.1);
  col = mix(col, uHorizon, smoothstep(0.0, -0.04, d.y));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,bt=`
attribute float aTop;
varying float vTop;
varying vec3 vWorld;
void main() {
  vTop = aTop;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,kt=`
uniform vec3 uColor;
uniform vec3 uHaze;
uniform vec3 uSun;
uniform vec3 uSunDir;
uniform float uFar;
varying float vTop;
varying vec3 vWorld;
void main() {
  float mist = 1.0 - smoothstep(0.0, 2.6, vWorld.y);
  vec3 col = mix(uColor, uHaze, clamp(uFar + mist * 0.6, 0.0, 1.0));
  vec3 d = normalize(vWorld - cameraPosition);
  float toward = pow(max(dot(normalize(d.xz), normalize(uSunDir.xz)), 0.0), 10.0);
  col += uSun * smoothstep(0.9, 1.0, vTop) * (0.05 + 0.4 * toward) * (1.0 - uFar);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,St=`
uniform mat4 uMirror;
varying vec4 vMirror;
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vMirror = uMirror * w;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,zt=`
#define RIPPLES ${Me}
uniform sampler2D uReflection;
uniform vec2 uTexel;
uniform vec4 uRipples[RIPPLES];
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uHaze;
uniform vec3 uSun;
uniform vec3 uSunDir;
varying vec4 vMirror;
varying vec3 vWorld;
void main() {
  vec2 p = vWorld.xz;
  vec2 slope = vec2(0.0);
  for (int i = 0; i < RIPPLES; i++) {
    vec4 r = uRipples[i];
    float age = uTime - r.z;
    if (age <= 0.0 || age > 3.4) continue;
    vec2 d = p - r.xy;
    float dist = length(d);
    float big = step(1.5, r.w);
    float x = dist - (age * (0.3 + 0.12 * big) + big * 0.95);
    float width = 0.03 + age * 0.035;
    float env = exp(-(x * x) / (width * width)) * (1.0 - age / 3.4) * min(r.w, 1.3) / (1.0 + dist * 2.5);
    slope += (d / max(dist, 1e-4)) * cos(x * 75.0) * env;
  }
  slope *= 0.055;
  slope += vec2(sin(p.x * 1.7 + uTime * 0.35) + sin(p.y * 2.3 - uTime * 0.27),
                cos(p.x * 2.1 - uTime * 0.31) + cos(p.y * 1.3 + uTime * 0.22)) * 0.0012;
  slope.y += sin(p.y * 76.0 + sin(p.x * 35.0 + uTime * .6)) * .003;
  vec3 n = normalize(vec3(-slope.x, 1.0, -slope.y));
  vec3 v = normalize(cameraPosition - vWorld);
  float facing = clamp(dot(n, v), 0.0, 1.0);
  float fresnel = 0.04 + 0.96 * pow(1.0 - facing, 5.0);
  vec4 m = vMirror;
  m.xy += slope * m.w * 0.55;
  // A single bilinear sample keeps the ledge and CRT mirror crisp. Fresnel increases toward the far shore.
  vec2 uv = m.xy / m.w;
  vec3 reflected = texture2D(uReflection, uv).rgb;
  float far = smoothstep(1.5, 16.0, length(vWorld.xz - cameraPosition.xz));
  vec3 body = mix(uShallow, uDeep, far);
  vec3 col = mix(body, reflected, clamp(fresnel * .88 + .12, 0.0, 1.0));
  vec3 h = normalize(uSunDir + v);
  // Small capillary waves broaden the glint vertically, while keeping it narrow across the lake.
  float glint = exp(-pow(h.x / .024, 2.) - pow(h.z / .14, 2.));
  vec2 cell = floor(p * vec2(180., 135.));
  float grain = fract(sin(dot(cell,vec2(127.1,311.7)))*43758.5453);
  float wave = .5 + .5*sin(p.y*170. + sin(p.x*81. + uTime)*3. + uTime*1.7);
  float fleck = smoothstep(.68,.96,grain*.65+wave*.35);
  col += uSun * glint * (.06 + fleck*1.9);
  col = mix(col, uHaze, smoothstep(80.0, 220.0, length(vWorld.xz - cameraPosition.xz)) * 0.22);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,Tt=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ct=`
uniform sampler2D uMap;
uniform float uTime;
uniform float uPower;
uniform sampler2D uBackdrop;
uniform float uIdle;
uniform vec3 uGlass;
varying vec2 vUv;
void main() {
  vec2 c = vUv * 2.0 - 1.0;
  vec2 bent = c * (1.0 + 0.05 * dot(c, c));
  vec2 uv = bent * 0.5 + 0.5;
  float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  vec3 col = texture2D(uMap, uv).rgb * inside;
  float scan = 0.9 + 0.1 * sin(uv.y * 1150.0 + uTime * 3.0);
  float vignette = smoothstep(1.5, 0.6, length(bent * vec2(0.92, 1.0)));
  col *= scan * vignette * uPower;
  vec3 landscape = texture2D(uBackdrop, vec2(.08 + uv.x*.57, .23 + uv.y*.5)).rgb;
  col += landscape * uIdle * .32 * inside * vignette;
  col += uGlass * (0.05 + 0.12 * smoothstep(0.25, 1.0, vUv.y) * smoothstep(1.0, 0.2, vUv.x));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;class At{constructor(){this.target=new et(2,2,{type:tt,samples:4}),this.texel=new O(.5,.5),this.camera=new Ee,this.matrix=new j,this.normal=new M(0,1,0),this.origin=new M(0,0,0),this.plane=new st,this.clip=new ve,this.q=new ve,this.eye=new M,this.view=new M,this.look=new M,this.aim=new M,this.rotation=new j}setSize(e,s){const t=Math.max(2,Math.round(e)),i=Math.max(2,Math.round(s));this.target.setSize(t,i),this.texel.set(1/t,1/i)}update(e){const{normal:s,origin:t,eye:i,view:a,look:c,aim:l,rotation:v}=this;i.setFromMatrixPosition(e.matrixWorld),v.extractRotation(e.matrixWorld),a.subVectors(t,i).reflect(s).negate().add(t),c.set(0,0,-1).applyMatrix4(v).add(i),l.subVectors(t,c).reflect(s).negate().add(t);const r=this.camera;r.position.copy(a),r.up.set(0,1,0).applyMatrix4(v).reflect(s),r.lookAt(l),r.near=e.near,r.far=e.far,r.updateMatrixWorld(),r.projectionMatrix.copy(e.projectionMatrix),this.matrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.matrix.multiply(r.projectionMatrix).multiply(r.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(s,t).applyMatrix4(r.matrixWorldInverse);const n=this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant),h=r.projectionMatrix.elements,d=this.q;d.x=(Math.sign(n.x)+h[8])/h[0],d.y=(Math.sign(n.y)+h[9])/h[5],d.z=-1,d.w=(1+h[10])/h[14],n.multiplyScalar(2/n.dot(d)),h[2]=n.x,h[6]=n.y,h[10]=n.z+1-.002,h[14]=n.w,r.projectionMatrixInverse.copy(r.projectionMatrix).invert()}dispose(){this.target.dispose()}}const Pt=["1234567890-=","qwertyuiop[]","asdfghjkl;'","zxcvbnm,./"],Rt={"!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/"};class He{static create(e,s){let t;try{t=new Ve({canvas:e,antialias:!s.phone,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}return t.getContext()?new He(t,s):(t.dispose(),null)}constructor(e,s){this.renderer=e,this.options=s,this.palette=s.palette,this.fonts=s.fonts,this.screenCopy=s.screenCopy,this.onQuality=s.onQuality,e.outputColorSpace=$,e.toneMapping=$e,e.info.autoReset=!1,e.shadowMap.enabled=!0,e.shadowMap.type=je,e.shadowMap.autoUpdate=!1,e.setClearColor(new k(this.palette.horizon),1),this.time=0,this.acc=0,this.width=1,this.height=1,this.dprCap=s.phone?1.5:2,this.quality=0,this.reflectionScale=.5,this.pixelScale=1,this.frameMs=16.7,this.cpuMs=0,this.slowFrames=0,this.frames=0,this.running=!1,this.manual=!1,this.raf=0,this.last=0,this.shadowAge=99,this.pointerAt=new O,this.pointerTime=0,this.parallax=new O,this.kick=0,this.kickSpeed=0,this.shake=-10,this.cheer=-10,this.screenState={kind:"logo"},this.screenSince=0,this.screenDrawn=-1,this.screenBusy=!0;const t=new Xe;if(this.scene=t,this.camera=new Ee(40,1,.05,260),this.camera.position.copy(ie),this.camera.lookAt(oe),this.mirror=new At,this.colors={sky:new k(this.palette.sky),horizon:new k(this.palette.horizon),glow:new k(this.palette.glow),sun:new k(this.palette.sun),white:new k("#fff6ea")},this.sunDir=new M(0,.1,-1).normalize(),this.sunColor=this.colors.sun.clone(),this.skyNow=this.colors.sky.clone(),this.groundColor=new k(this.palette.water).lerp(new k(this.palette.horizon),.3),this.buildSky(),this.buildHills(),this.buildBackdrop(),this.buildWater(),this.buildLights(),this.buildStone(),this.buildComputer(),this.buildBranch(),this.updateBranch(0,0),this.sim=new rt({seed:s.seed,count:s.phone?Math.min(s.petalCount,280):s.petalCount,wind:s.wind,blossoms:this.blossomWorld}),this.buildPetals(this.sim.capacity),this.updateBranch(0,0),this.updateLight(0),typeof document<"u"&&document.fonts){const i=[`600 38px ${this.fonts.sans}`,`500 34px ${this.fonts.mono}`].map(a=>document.fonts.load(a).catch(()=>[]));Promise.all(i).then(()=>this.screenBusy=!0)}}buildSky(){this.skyUniforms={uZenith:{value:new k},uHorizon:{value:new k(this.palette.horizon)},uGlow:{value:new k(this.palette.glow)},uSun:{value:new k(this.palette.sun)},uSunDir:{value:this.sunDir}};const e=new U(new Ye(180,48,24),new V({uniforms:this.skyUniforms,vertexShader:xt,fragmentShader:Mt,side:Ke,depthWrite:!1}));e.renderOrder=-10,e.frustumCulled=!1,this.sky=e,this.scene.add(e)}buildHills(){const e=[{z:-78,height:9.5,frequency:.03,seed:11,far:.62,color:this.palette.hills[0]},{z:-50,height:5.2,frequency:.055,seed:23,far:.42,color:this.palette.hills[1]},{z:-30,height:1.9,frequency:.11,seed:37,far:.24,color:this.palette.hills[2]}];this.hills=[],this.hillUniforms=[];for(const s of e){const t={uColor:{value:new k(s.color)},uHaze:{value:new k(this.palette.horizon)},uSun:{value:this.sunColor},uSunDir:{value:this.sunDir},uFar:{value:s.far}};this.hillUniforms.push(t);const i=new U(yt(s.z,s.height,s.frequency,s.seed),new V({uniforms:t,vertexShader:bt,fragmentShader:kt}));i.frustumCulled=!1,this.hills.push(i),this.scene.add(i)}}buildBackdrop(){if(!this.options.backdropUrl)return;const e=36,s=e*16/9,t=new ke({color:this.options.backdropTint??"#ffffff",toneMapped:!1}),i=new U(new se(s,e),t);i.position.set(5.5,e*(.5-.335),-50),i.visible=!1,i.name="Distant sky, mountains and far shore (image plate)",this.backdrop=i,this.scene.add(i),new Ze().load(this.options.backdropUrl,a=>{if(this.disposed){a.dispose();return}a.colorSpace=$,a.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),t.map=a,this.screenUniforms&&(this.screenUniforms.uBackdrop.value=a),t.needsUpdate=!0,i.visible=!0,this.hills.forEach(c=>c.visible=!1),this.render()},void 0,()=>{})}buildWater(){this.ripples=Array.from({length:Me},()=>new ve(0,0,-100,0)),this.rippleNext=0;const e=new k(this.palette.water);this.waterUniforms={uReflection:{value:this.mirror.target.texture},uTexel:{value:this.mirror.texel},uMirror:{value:this.mirror.matrix},uRipples:{value:this.ripples},uTime:{value:0},uDeep:{value:e},uShallow:{value:e.clone().multiplyScalar(.65)},uHaze:{value:new k(this.palette.horizon)},uSun:{value:this.sunColor},uSunDir:{value:this.sunDir}};const s=new U(new se(320,320,1,1),new V({uniforms:this.waterUniforms,vertexShader:St,fragmentShader:zt}));s.rotation.x=-Math.PI/2,s.position.set(0,0,-80),s.frustumCulled=!1,this.water=s,this.scene.add(s)}buildLights(){this.sunLight=new Se(this.sunColor,2.4),this.sunLight.castShadow=!0;const e=this.sunLight.shadow,s=this.options.phone?1024:2048;e.mapSize.set(s,s),e.camera.left=-2.4,e.camera.right=2.4,e.camera.top=2.4,e.camera.bottom=-2.4,e.camera.near=.5,e.camera.far=14,e.bias=-6e-4,e.normalBias=.012,e.radius=3,this.sunLight.target.position.set(B.computer.x,.3,B.computer.z),this.scene.add(this.sunLight,this.sunLight.target),this.hemi=new Oe(new k(this.palette.sky),this.groundColor,1.25),this.scene.add(this.hemi);const t=new Se("#dce8f5",.9);t.position.set(-2,3,5),this.scene.add(t)}buildStone(){const e=new U(wt(this.palette),new H({...gt(),vertexColors:!0,roughness:1,normalScale:new O(.9,.9),metalness:0}));e.material.onBeforeCompile=t=>{t.vertexShader=`varying vec3 vRock;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRock = position;`),t.fragmentShader=`varying vec3 vRock;
        float rockHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
        float rockNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
          return mix(mix(mix(rockHash(i),rockHash(i+vec3(1,0,0)),f.x),mix(rockHash(i+vec3(0,1,0)),rockHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(rockHash(i+vec3(0,0,1)),rockHash(i+vec3(1,0,1)),f.x),mix(rockHash(i+vec3(0,1,1)),rockHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
        vec3 growthGradient(vec3 p) {
          vec3 h=fract(p*vec3(.1031,.103,.0973));
          h+=dot(h,h.yxz+33.33);
          return normalize(fract((h.xxy+h.yzz)*h.zyx)*2.-1.);
        }
        float growthNoise(vec3 p) {
          vec3 i=floor(p), f=fract(p), u=f*f*f*(f*(f*6.-15.)+10.);
          return mix(mix(mix(dot(growthGradient(i),f),dot(growthGradient(i+vec3(1,0,0)),f-vec3(1,0,0)),u.x),
            mix(dot(growthGradient(i+vec3(0,1,0)),f-vec3(0,1,0)),dot(growthGradient(i+vec3(1,1,0)),f-vec3(1,1,0)),u.x),u.y),
            mix(mix(dot(growthGradient(i+vec3(0,0,1)),f-vec3(0,0,1)),dot(growthGradient(i+vec3(1,0,1)),f-vec3(1,0,1)),u.x),
            mix(dot(growthGradient(i+vec3(0,1,1)),f-vec3(0,1,1)),dot(growthGradient(i+vec3(1,1,1)),f-vec3(1,1,1)),u.x),u.y),u.z);
        }
        // World-space growth masks share the granite's surface, albedo and roughness.
        // Several scales and a soft edge retain mineral detail instead of forming flat pale islands.
        vec2 rockGrowth(vec3 p) {
          float coarse=growthNoise(p*7.);
          float fine=growthNoise(p*43.+vec3(9,3,7));
          float mossField=coarse*.7 + growthNoise(p*17.)*.3 + fine*.12;
          float lichenField=growthNoise(p*26.+coarse*.6)*.7 + fine*.3;
          float dry=smoothstep(.1,.27,p.y);
          return vec2(smoothstep(-.05,.3,mossField)*dry,
            smoothstep(.02,.34,lichenField)*dry*(.5+.5*smoothstep(-.2,.2,coarse)));
        }
      `+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        float seam=rockNoise(vRock*12. + rockNoise(vRock*4.)*3.);
        float mineral=rockNoise(vRock*230.);
        diffuseColor.rgb *= .7+seam*.7+mineral*.3;
        float vein=pow(abs(sin(vRock.y*68. + rockNoise(vRock*9.)*6.)),22.);
        diffuseColor.rgb *= 1.-vein*.45;
        vec2 growth=rockGrowth(vRock);
        diffuseColor.rgb=mix(diffuseColor.rgb,
          diffuseColor.rgb*vec3(.55,.78,.34)+vec3(.003,.005,.001),growth.x*.72);
        diffuseColor.rgb*=mix(vec3(1.),vec3(1.24,1.31,.91),growth.y*.65);
      `),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        float rockHeight=rockNoise(vRock*38.)*.012+rockNoise(vRock*190.)*.003;
        vec3 sx=dFdx(-vViewPosition),sy=dFdy(-vViewPosition);
        vec3 r1=cross(sy,normal),r2=cross(normal,sx);
        float det=dot(sx,r1);
        normal=normalize(abs(det)*normal-sign(det)*(dFdx(rockHeight)*r1+dFdy(rockHeight)*r2));
      `)};const s=e.material.onBeforeCompile;e.material.onBeforeCompile=t=>{s(t),t.fragmentShader=t.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor=mix(roughnessFactor,.98,growth.x*.65);
        roughnessFactor=mix(roughnessFactor,.9,growth.y*.45);
        roughnessFactor*=mix(.36,1.,smoothstep(.02,.12,vRock.y));`)},this.stone=e,e.name="Granite ledge above the waterline",e.receiveShadow=!0,e.castShadow=!0,this.scene.add(e)}buildComputer(){const e=this.palette,s=new ue;s.position.set(B.computer.x,Y.base,B.computer.z),s.rotation.y=B.computer.yaw;const t=B.computer.scale;s.scale.setScalar(t);const i=new H({color:e.computer,roughness:.48,metalness:0}),a=new H({color:e.keys,roughness:.6,metalness:0}),c=new H({color:"#1d2123",roughness:.55,metalness:0}),l=(m,f,g,T,E,F=!0)=>{const A=new U(m,f);return A.position.set(g,T,E),A.castShadow=F,A.receiveShadow=!0,s.add(A),A},v=Y.base;l(Z(.58,.1,.5,.02,.01),i,0,.05,0),l(new I(.15,.011,.01),c,-.13,.058,.25),l(new I(.15,.011,.01),c,.07,.058,.25),l(new I(.03,.006,.006),a,.21,.058,.252),l(new I(.56,.004,.004),a,0,.022,.251,!1);const r=(Y.monitor.top-v)/t,n=.43,h=r-n/2;l(Z(.51,n,.455,.045,.014),i,0,h,-.0225),l(Z(.36,.34,.24,.06,.02),i,0,h-.02,-.33);for(let m=0;m<6;m++)l(new I(.2,.004,.012),c,0,r-.001,-.21+m*.026,!1);const d=.205,p=h+.025;l(Z(.43,.33,.012,.035,.004),c,0,p,d);const u=new se(.38,.285,18,14),w=u.attributes.position;for(let m=0;m<w.count;m++){const f=w.getX(m)/.19,g=w.getY(m)/.1425;w.setZ(m,.011*(1-f*f*.8)*(1-g*g*.8))}u.computeVertexNormals(),this.screenCanvas=typeof document<"u"?document.createElement("canvas"):null,this.screenCanvas&&(this.screenCanvas.width=ye.width,this.screenCanvas.height=ye.height),this.screenContext=this.screenCanvas?.getContext("2d")??null,this.screenTexture=new ze(this.screenCanvas??void 0),this.screenTexture.colorSpace=$,this.screenTexture.generateMipmaps=!1,this.screenTexture.minFilter=we,this.screenTexture.anisotropy=4,this.screenUniforms={uMap:{value:this.screenTexture},uBackdrop:{value:this.screenTexture},uIdle:{value:0},uTime:{value:0},uPower:{value:1.15},uGlass:{value:new k(e.sky).multiplyScalar(.6)}};const y=new U(u,new V({uniforms:this.screenUniforms,vertexShader:Tt,fragmentShader:Ct}));y.position.set(0,p,d+.0075),s.add(y);const b=typeof document<"u"?document.createElement("canvas"):null;if(b){b.width=64,b.height=64;const m=b.getContext("2d");m&&Q(m,32,30,15,"#7d7a72","#7d7a72",.7)}this.badgeTexture=new ze(b??void 0),this.badgeTexture.colorSpace=$;const z=new U(new se(.034,.034),new H({map:this.badgeTexture,transparent:!0,roughness:.5}));z.position.set(-.17,p-.182,d+5e-4),s.add(z),this.led=new U(new I(.012,.006,.004),new ke({color:"#8fe3a6"})),this.led.position.set(.185,p-.183,d+.002),s.add(this.led),this.screenLight=new Qe(new k(e.screenAccent),.5,1.6,2),this.screenLight.position.set(0,p,d+.18),s.add(this.screenLight);const S=new ue;S.position.set(0,(Y.keyboardBase-v)/t,.42),S.rotation.x=.06,s.add(S);const P=new U(Z(.47,.022,.16,.012,.006),i);P.position.y=.011,P.castShadow=!0,P.receiveShadow=!0,S.add(P),this.keys=[];const N=.031;Pt.forEach((m,f)=>{for(let g=0;g<m.length;g++)this.keys.push({char:m[g],x:-.2+g*N+f*.008,z:-.054+f*.03,w:1,at:-10})}),this.keys.push({char:" ",x:0,z:.066,w:6.2,at:-10}),this.keys.push({char:"Backspace",x:.19,z:-.054,w:1.7,at:-10}),this.keys.push({char:"Enter",x:.19,z:.006,w:1.7,at:-10});const R=new H({color:"#ffffff",roughness:.55});this.keyMesh=new pe(new I(.026,.012,.026),R,this.keys.length),this.keyMesh.castShadow=!0,this.keyMesh.receiveShadow=!0;const _=new k(e.keys),x=new k(e.petalDeep).lerp(new k(e.keys),.35);this.keys.forEach((m,f)=>this.keyMesh.setColorAt(f,m.char==="Enter"?x:_)),this.keyMatrix=new j,this.keys.forEach((m,f)=>this.placeKey(f,0)),S.add(this.keyMesh);const C=new me([new M(-.2,(Y.keyboardBase-v)/t+.012,.34),new M(-.27,.006,.33),new M(-.34,.005,.27),new M(-.33,.006,.2),new M(-.29,.03,.16)]);l(new Le(C,32,.0055,6,!1),c,0,0,0),this.computer=s,this.scene.add(s)}placeKey(e,s){const t=this.keys[e];this.keyMatrix.makeScale(t.w,1,1),this.keyMatrix.setPosition(t.x,.028-s*.006,t.z),this.keyMesh.setMatrixAt(e,this.keyMatrix)}buildBranch(){const e=this.palette,s=J(725077),t=new ue,i=new M(1.52,.27,-.38);t.position.copy(i);const a=(m,f,g)=>new M(m,f-.13,g).sub(i),c=m=>new me(m.map(f=>a(...f))),l=c([[1.85,.37,-.38],[1.85,.72,-.4],[1.58,1.12,-.32],[1.12,1.6,-.18],[1.02,2.04,-.28]]),v=[c([[1.43,1.12,-.32],[1.14,1.42,-.15],[.66,1.57,.05],[.1,1.61,.12],[-.56,1.52,.16],[-1.05,1.7,.04]]),c([[1.12,1.6,-.18],[.72,1.78,-.26],[.1,1.93,-.22],[-.48,1.84,-.1],[-.91,2.02,.05]]),c([[1.43,1.12,-.32],[1.69,1.43,-.25],[1.96,1.68,-.1],[2.22,1.96,-.2]]),c([[1.14,1.42,-.15],[1.16,1.57,.3],[.81,1.75,.48],[.25,1.78,.45],[-.35,1.8,.52]]),c([[1.12,1.6,-.18],[1.45,1.85,-.6],[1.7,2.07,-.8]])],r=512,n=256,h=new Uint8Array(r*n*4),d=new Uint8Array(r*n*4),p=new Uint8Array(r*n*4),u=new he(J(764485));for(let m=0;m<n;m++)for(let f=0;f<r;f++){const g=f/r*L,T=m/n*L,E=Math.sin(g+T*2)*.28+Math.sin(g*3-T)*.1,F=T*13+Math.sin(T*3)*.7+Math.sin(T*7)*.22+E,A=u.at(f*.018,m*.07,2),G=Math.pow(.5+.5*Math.cos(F+A*.24),16+A*8),W=Math.pow(.5-.5*Math.cos(F),.65),X=Math.pow(.5+.5*Math.cos(F*3+Math.sin(g*2)*.2),28),ee=u.at(Math.cos(g)*3,Math.sin(g)*3,m*.2)*.045,te=u.at(f*.55,m*.7,5)*.13,be=u.at(f*.035,m*.7,11)*.15,Ie=u.at(f*.015,m*.12,3)*.1,ce=Math.max(.08,Math.min(1,.65+W*.24-G*.48-X*.1+ee+te+be+Ie)),qe=Math.max(0,Math.min(1,.34+W*.28-G*.28-X*.06+ee+be*.45+te*.25)),D=(m*r+f)*4;h[D]=ce*226,h[D+1]=ce*203,h[D+2]=ce*174,h[D+3]=255,d[D]=d[D+1]=d[D+2]=qe*255,d[D+3]=255,p[D]=p[D+1]=p[D+2]=215+G*35-W*12,p[D+3]=255}const w=(m,f=!1)=>{const g=new Ge(m,r,n);return g.wrapS=g.wrapT=Ne,g.repeat.set(2,3),g.magFilter=we,g.minFilter=We,g.generateMipmaps=!0,g.anisotropy=4,f&&(g.colorSpace=$),g.needsUpdate=!0,g},y=new H({color:e.bark,map:w(h,!0),bumpMap:w(d),bumpScale:.025,roughnessMap:w(p),roughness:1}),b=[ae(l,100,.26,.065,24)];v.forEach((m,f)=>b.push(ae(m,44,f===0?.115:.073,.005,8)));for(let m=0;m<6;m++){const f=m*1.05,g=1.85+Math.cos(f)*.43,T=-.38+Math.sin(f)*.38;b.push(ae(c([[1.85,.48,-.38],[1.85+Math.cos(f)*.2,.43,-.38+Math.sin(f)*.2],[g,Math.max(.025,ge(g,T))+.136,T]]),16,.09,.006,7))}const z=[];for(const m of v)for(let f=1;f<=24;f++){const g=.15+f/24*.8,T=m.getPointAt(g),E=f%2?1:-1,F=T.clone().add(new M(-.12-s()*.18,(s()-.35)*.32,E*(.16+s()*.36))),A=new me([T,T.clone().lerp(F,.5).add(new M(0,.04,0)),F]);b.push(ae(A,10,.008,.0015,5));for(let G=0;G<7;G++){const W=A.getPointAt(.16+G*.13);for(let X=0;X<(this.options.phone?6:8);X++){const ee=new M((s()-.5)*.21,(s()-.45)*.18,(s()-.5)*.18),te=new M((s()-.5)*1.8,(s()-.4)*1.7,.3+s()).normalize();z.push({at:W.clone().add(ee),facing:te,size:.055+s()*.04,tint:s()})}}}const S=new U(_e(b),y);S.castShadow=!0,S.receiveShadow=!0,t.add(S);const P=new Float32Array(z.length*4),N=ft();N.setAttribute("aData",new Te(P,4)),this.flowerUniforms=this.petalUniforms(e.petalDeep,e.blossom);const R=new pe(N,new V({uniforms:this.flowerUniforms,vertexShader:De,fragmentShader:Ue,side:Ce}),z.length),_=new j,x=new Ae,C=new M(0,0,1);z.forEach((m,f)=>{x.setFromUnitVectors(C,m.facing),_.compose(m.at,x,new M(m.size,m.size,m.size)),R.setMatrixAt(f,_),P[f*4]=1,P[f*4+1]=m.tint,P[f*4+3]=s()*.65}),R.name=`Full bloom — ${z.length.toLocaleString()} instanced cherry blossoms`,t.add(R),this.blossomLocal=z.map(m=>m.at),this.blossomWorld=new Float32Array(z.length*3),this.branch=t,this.scene.add(t)}petalUniforms(e,s){return{uBase:{value:new k(e)},uTip:{value:new k(s)},uSunDir:{value:this.sunDir},uSun:{value:this.sunColor},uSky:{value:this.skyNow},uGround:{value:this.groundColor},uHaze:{value:new k(this.palette.horizon)},uFog:{value:new O(9,60)}}}buildPetals(e){const s=Be();this.petalData=new Te(new Float32Array(e*4),4),this.petalData.setUsage(Pe),s.setAttribute("aData",this.petalData),this.petalUniformValues=this.petalUniforms(this.palette.petalDeep,this.palette.petal),this.petals=new pe(s,new V({uniforms:this.petalUniformValues,vertexShader:De,fragmentShader:Ue,side:Ce,transparent:!0,depthWrite:!1}),e),this.petals.instanceMatrix.setUsage(Pe),this.petals.frustumCulled=!1,this.petals.count=0,this.order=new Uint16Array(e),this.depth=new Float32Array(e),this.tmp={m:new j,q:new Ae,e:new Je,p:new M,s:new M,v:new M,vp:new j,right:new M,up:new M},this.scene.add(this.petals)}updateLight(e){const s=.08+Math.sin(e*.04)*.015;this.sunDir.set(-.2,.24,-1).normalize(),this.sunColor.copy(this.colors.sun).lerp(this.colors.white,s*.55),this.skyNow.copy(this.colors.sky).lerp(this.colors.white,s*.08),this.skyUniforms.uZenith.value.copy(this.skyNow),this.skyUniforms.uSun.value.copy(this.sunColor),this.skyUniforms.uGlow.value.copy(this.colors.glow).lerp(this.colors.horizon,s*.35),this.sunLight.color.copy(this.sunColor),this.sunLight.intensity=2.6,this.sunLight.position.copy(this.sunLight.target.position).addScaledVector(this.sunDir,7),this.hemi.color.copy(this.skyNow)}updateCamera(e,s){const t=1-Math.exp(-e*2.5);this.parallax.x+=(this.pointerAt.x-this.parallax.x)*t,this.parallax.y+=(this.pointerAt.y-this.parallax.y)*t;const i=this.camera;i.position.set(ie.x+Math.sin(s*.071)*.05+this.parallax.x*.09,ie.y+Math.sin(s*.053)*.014+this.parallax.y*.03,ie.z),i.lookAt(oe.x+this.parallax.x*.03,oe.y,oe.z),i.updateMatrixWorld(),this.sky.position.copy(i.position)}updateBranch(e,s){this.kickSpeed+=(-this.kick*38-this.kickSpeed*5.5)*e,this.kick+=this.kickSpeed*e;const t=this.sim?this.sim.gust:0,i=this.branch;i.rotation.z=.003*Math.sin(s*.8)+.002*Math.sin(s*1.9+1)+this.kick*.25+t*.008*Math.sin(s*6.5),i.rotation.x=.002*Math.sin(s*.6+.4)+this.kick*.1,i.updateMatrixWorld(!0);const a=dt;this.blossomLocal.forEach((c,l)=>{a.copy(c).applyMatrix4(i.matrixWorld),this.blossomWorld[l*3]=a.x,this.blossomWorld[l*3+1]=a.y,this.blossomWorld[l*3+2]=a.z}),this.sim&&this.sim.setBlossoms(this.blossomWorld)}updateKeys(e){let s=!1;this.keys.forEach((t,i)=>{const a=e-t.at;if(a<0||a>.3){t.down&&(t.down=!1,this.placeKey(i,0),s=!0);return}t.down=!0;const c=a<.05?a/.05:Math.max(0,1-(a-.05)/.22);this.placeKey(i,c),s=!0}),s&&(this.keyMesh.instanceMatrix.needsUpdate=!0)}updateScreen(e){const s=e-this.screenSince,t=this.screenState,i=e-this.shake<.5;this.screenUniforms.uTime.value=e,this.screenUniforms.uIdle.value=t.kind==="logo"&&this.backdrop?.visible?1:0,this.screenUniforms.uPower.value=(t.kind==="welcome"?1.25:1.12)*(i?.85+.15*Math.sin(e*90):1);const a={pending:Math.sin(e*9)>0?"#ffcf7a":"#6b5a3a",error:"#ff7b66",welcome:"#fff4dc"};this.led.material.color.set(a[t.kind]??"#8fe3a6");const c=Math.max(0,1-(e-this.cheer)/2.5);if(this.screenLight.intensity=.45+(t.kind==="welcome"?.35:0)+c*.6,this.screenLight.color.set(t.kind==="error"?this.palette.screenError:this.palette.screenAccent),!this.screenContext)return;const l=Math.floor(e*30);!this.screenBusy&&(l===this.screenDrawn||!pt(t,s))||(this.screenDrawn=l,this.screenBusy=!1,ut(this.screenContext,t,s,e,this.screenCopy,{background:this.palette.screen,text:this.palette.screenText,dim:this.palette.screenDim,accent:this.palette.screenAccent,error:this.palette.screenError},this.fonts),this.screenTexture.needsUpdate=!0)}updatePetals(){const e=this.sim,{m:s,q:t,e:i,p:a,s:c}=this.tmp,l=this.camera.position,v=this.order,r=this.depth;let n=0;for(let u=0;u<e.capacity;u++){if(e.mode[u]===lt.IDLE||e.alpha[u]<=.004)continue;const w=e.x[u]-l.x,y=e.y[u]-l.y,b=e.z[u]-l.z;r[u]=w*w+y*y+b*b,v[n++]=u}const h=v.subarray(0,n).sort((u,w)=>r[w]-r[u]),d=this.petals.instanceMatrix.array,p=this.petalData.array;for(let u=0;u<n;u++){const w=h[u];i.set(e.rx[w],e.ry[w],e.rz[w]),t.setFromEuler(i),a.set(e.x[w],e.y[w],e.z[w]);const y=e.size[w]*mt;c.set(y,y,y),s.compose(a,t,c),s.toArray(d,u*16),p[u*4]=e.alpha[w],p[u*4+1]=e.tint[w],p[u*4+2]=e.wet[w],p[u*4+3]=0}this.petals.count=n,this.petals.instanceMatrix.needsUpdate=!0,this.petalData.needsUpdate=!0}ripple(e,s,t){this.ripples[this.rippleNext].set(e,s,this.time,t),this.rippleNext=(this.rippleNext+1)%Me}frame(e){const s=performance.now(),t=this.renderer;t.info.reset(),this.acc+=e;let i=0;for(;this.acc>=de-1e-6&&i<5;)this.sim.step(de),this.acc-=de,i++;i===5&&(this.acc=0),this.time+=e;const a=this.time;this.sim.drainLandings((c,l,v)=>this.ripple(c,l,v)),this.updateLight(a),this.updateCamera(e,a),this.updateBranch(e,a),this.updateKeys(a),this.updateScreen(a),this.updatePetals(),this.waterUniforms.uTime.value=a,++this.shadowAge>12&&(t.shadowMap.needsUpdate=!0,this.shadowAge=0),this.mirror.update(this.camera),this.water.visible=!1,t.setRenderTarget(this.mirror.target),t.clear(),t.render(this.scene,this.mirror.camera),t.setRenderTarget(null),this.water.visible=!0,t.render(this.scene,this.camera),this.cpuMs=re(this.cpuMs,performance.now()-s,.1)}loop=e=>{this.raf=requestAnimationFrame(this.loop);const s=this.last?e-this.last:16.7;this.last=e,this.frame(Math.min(s,100)/1e3),this.adapt(s)};adapt(e){this.manual||(this.frames++,this.frameMs=re(this.frameMs,e,.08),!(this.frames<45||e>250)&&(this.slowFrames=this.frameMs>24?this.slowFrames+1:Math.max(0,this.slowFrames-2),!(this.slowFrames<50||this.quality>=3)&&(this.slowFrames=0,this.frames=0,this.quality++,this.quality===1&&(this.reflectionScale=.25),this.quality===2&&(this.sim.density=.5),this.quality===3&&(this.pixelScale=.75),this.setSize(this.width,this.height),this.onQuality?.(this.qualityState()))))}qualityState(){return{level:this.quality,reflectionScale:this.reflectionScale,density:this.sim.density,pixelRatio:this.renderer.getPixelRatio()}}setSize(e,s){this.width=Math.max(1,e),this.height=Math.max(1,s);const t=Math.min(typeof devicePixelRatio=="number"?devicePixelRatio:1,this.dprCap)*this.pixelScale;this.renderer.setPixelRatio(t),this.renderer.setSize(this.width,this.height,!1);const i=this.width/this.height;this.camera.aspect=i,this.camera.fov=i<1?2*Math.atan(Math.tan(20*Math.PI/180)/i)*180/Math.PI:40,this.camera.updateProjectionMatrix(),this.mirror.setSize(this.width*t*this.reflectionScale,this.height*t*this.reflectionScale),(!this.running||this.manual)&&this.render()}setRunning(e){this.manual||e!==this.running&&(this.running=e,cancelAnimationFrame(this.raf),e&&(this.last=0,this.raf=requestAnimationFrame(this.loop)))}render(){this.frame(0)}setManual(e){this.manual=e,cancelAnimationFrame(this.raf),this.running=!1,e||this.setRunning(!0)}advance(e){this.frame(e)}setScreen(e){if(ht(e,this.screenState))return;const s=e.kind!==this.screenState.kind;this.screenState=e,s?this.screenSince=this.time:this.screenSince=Math.min(this.screenSince,this.time-.33),e.kind==="error"&&s&&(this.shake=this.time),this.screenBusy=!0}keystroke(e){this.sim.queueRelease(1),this.kickSpeed+=.05;const s=e?.length===1?Rt[e]??e.toLowerCase():e;let t=this.keys.findIndex(i=>i.char===s);t<0&&(t=Math.abs(Math.floor(Math.sin(this.time*97.3)*1e4))%this.keys.length),this.keys[t].at=this.time}celebrate(){this.sim.burst(40),this.kickSpeed+=.55,this.cheer=this.time;const{stone:e}=B;for(let s=0;s<4;s++){const t=s/4*L+.4;this.ripple(e.x+Math.cos(t)*.15,e.z+Math.sin(t)*.12,2.2)}}pointer(e,s,t,i,a){if(this.manual&&(a=this.time-this.pointerTime),this.pointerTime=this.time,this.pointerAt.set(e,s),Math.abs(t)+Math.abs(i)<1e-5)return;const c=this.camera,{vp:l,right:v,up:r}=this.tmp;l.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),v.setFromMatrixColumn(c.matrixWorld,0),r.setFromMatrixColumn(c.matrixWorld,1),this.sim.stir({x:e,y:s,dx:t,dy:i,dt:a,viewProjection:l.elements,eye:c.position,right:v,up:r,tanHalfFov:Math.tan(c.fov*Math.PI/360),aspect:c.aspect,radius:.26})}stats(){const e=this.renderer.info.render;return{drawCalls:e.calls,triangles:e.triangles,petals:this.sim.active,frameMs:Math.round(this.frameMs*10)/10,cpuMs:Math.round(this.cpuMs*100)/100,...this.qualityState()}}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.running=!1,this.scene.traverse(e=>{e.geometry&&e.geometry.dispose();const s=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(const t of s){for(const i of Object.values(t))i&&i.isTexture&&i.dispose();t.dispose()}}),this.screenTexture.dispose(),this.badgeTexture.dispose(),this.mirror.dispose(),this.sunLight.shadow.map?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss()}}export{He as PetalScene,wt as stoneGeometry};
