import{W as Ve,x as $,y as $e,z as je,B as S,V as O,i as Xe,E as Ue,F as M,M as E,G as Ye,S as V,H as Ze,I as Se,h as se,m as Ke,J as ve,K as ke,Q as Oe,R as H,U as ue,X as I,j as ze,L as we,Y as Qe,Z as pe,_ as j,a0 as me,a1 as Le,a2 as Te,a3 as Ce,a4 as Ae,a5 as Pe,a6 as Je,q as Ge,a7 as Ne,a8 as We,o as et,a9 as tt,aa as st,ab as le,ac as q,ad as it,ae as ot,af as Re,ag as at,ah as nt}from"./template-shell-TqPlGrjQ.js";import{P as rt,a as _,b as Y,N as he,s as J,c as ge,d as lt,e as de,f as ht}from"./zephyr-petal-signup-KvKVmN33.js";import"./index-nXBh-1Hs.js";import"./index-BRbW2wd2.js";import"./recipe-DaAV5BFP.js";import"./react-CcamM8xE.js";import"./index-CXHAiFMv.js";import"./icon-button-8EtJ_Rl3.js";import"./Specimen-Dl4cPlq6.js";import"./index-DqwJF8Gv.js";import"./close-button-BGH3xz36.js";import"./number-BJRdc-Co.js";import"./useLoadMoreSentinel-Boh7-FQN.js";import"./I18nProvider-Dd0YL3Py.js";import"./useButton-CYX8zBwx.js";import"./usePress-DzFz8RzA.js";import"./textSelection-BpwQrpqj.js";import"./inertValue-CU4B7xHg.js";import"./NumberFormatter-H2sZ7Z8O.js";import"./dropdown-DsQTY_B-.js";import"./Dialog-CZ4ujty6.js";import"./useOverlayTriggerState-BvZ8vKR7.js";import"./FocusScope-Czv1TiAP.js";import"./VisuallyHidden-byef8ULO.js";import"./animation-C46cYqWd.js";import"./menu-styles-BqNUlDsC.js";import"./use-dismiss-on-outside-press-BOJgyj2V.js";import"./select-CB19D3GW.js";import"./useCollection-Dz9rYASR.js";import"./useDescription-Ch7ffCXB.js";import"./useCollator-Bq3QUj0V.js";import"./SelectionIndicator-wiaEdnqr.js";import"./SharedElementTransition-Bt8uZpmb.js";import"./useSelectableList-2EUrg3qG.js";import"./useListState-XLP3M28M.js";import"./chevrons-CZyYP3Jq.js";import"./switch-CH5VWxSM.js";import"./useToggle-CXnBWHbh.js";import"./useSlot-BTyxnHqg.js";import"./useToggleState-CUy6g215.js";import"./shared-B0qdb4WM.js";import"./useUpdateEffect-kznyEgwV.js";import"./date-picker-DfrlTNLB.js";import"./chip-WNJLs8iL.js";import"./checkbox-C6hVj4ye.js";import"./Checkbox-DjdXXQFf.js";import"./file-upload-v-_wVjlg.js";import"./pagination--NCS6Tw-.js";import"./tooltip-nLhq0W_X.js";import"./badge-nKs0Khjc.js";import"./kbd-CY9_tjlW.js";import"./avatar-BZKig3zb.js";import"./breadcrumb-FCABhnIb.js";import"./segmented-control-FLDdeyFP.js";import"./use-selection-bounds-C-RztvL9.js";import"./artemis-scope-CzeVDnPg.js";import"./home-dashboard-0QfsBqlT.js";import"./Modal-BgHf0xBP.js";import"./contributions-card-DNQTHGI1.js";import"./chart-cell-CS7gHzEN.js";import"./pro-chart-Il3fero_.js";import"./use-count-up-CWSNkI2D.js";import"./use-reduced-motion-BIJDABSG.js";import"./chart-bar-track-JeaM9r8p.js";import"./stat-cards-BI6TzhK0.js";import"./data-table-CFCY4eQn.js";import"./table-CGRPYtWT.js";import"./TreeDropTargetDelegate-CU9HDnD7.js";import"./useHasTabbableChild-DtyeNWD0.js";import"./status-dot-BiNJ4FR3.js";import"./Bar-Cre2CX7-.js";import"./graphicalItemSelectors-CIL7uNMk.js";import"./chart-active-dot-DPwMpVVv.js";import"./Dot-Br7Dewzb.js";import"./Area-CAt2HXoM.js";import"./recent-hires-card-CO-A3v1K.js";const ye={width:512,height:384},ne=Math.PI*2,xe=i=>Math.min(1,Math.max(0,i)),Fe=i=>1-(1-xe(i))**3;function Z(i,e,s,t,o){i.font=s(t);const a=i.measureText(e).width;a>o&&(i.font=s(Math.max(10,Math.floor(t*o/a))))}function Q(i,e,s,t,o,a,h=.7){const n=s+t*.62,v=Math.max(2,t*.16);i.save(),i.beginPath(),i.rect(e-t*3,s-t*4,t*6,t*4+t*.62-v),i.clip(),i.fillStyle=o,i.beginPath(),i.arc(e,s+(1-h)*t*.9,t,0,ne),i.fill(),i.restore(),i.fillStyle=a;const l=Math.max(2,t*.15);i.beginPath(),i.roundRect(e-t*1.55,n-l/2,t*3.1,l,l/2),i.fill()}function ct(i,e,s){const t=[];let o="";for(const a of e.split(/\s+/).filter(Boolean)){const h=o?`${o} ${a}`:a;i.measureText(h).width>s&&o?(t.push(o),o=a):o=h}return o&&t.push(o),t.slice(0,3)}function fe(i,e,s,t,o,a){const h=i.createRadialGradient(e,s,0,e,s,t);h.addColorStop(0,o),h.addColorStop(1,"transparent"),i.globalAlpha=a,i.fillStyle=h,i.fillRect(e-t,s-t,t*2,t*2),i.globalAlpha=1}function ut(i,e,s,t,o,a,h){const{width:n,height:v}=ye;i.save(),i.fillStyle=a.background,i.fillRect(0,0,n,v),i.textAlign="center",i.textBaseline="alphabetic";const l=s<.6||Math.floor(t*1.8)%2===0,r=54,c=n-54;switch(e.kind){case"logo":{const d=.62+.08*Math.sin(t*.5);fe(i,n/2,150,150,a.accent,.16),Q(i,n/2,148,44,a.accent,a.text,d),i.fillStyle=a.text,Z(i,o.brand,p=>`600 ${p}px ${h.sans}`,48,c-r),i.fillText(o.brand,n/2,270),i.fillStyle=a.dim,Z(i,o.tagline,p=>`400 ${p}px ${h.sans}`,24,c-r),i.fillText(o.tagline,n/2,310);break}case"email":case"password":{i.textAlign="left",i.fillStyle=a.dim,i.font=`500 23px ${h.mono}`,i.fillText(e.kind==="email"?o.email:o.password,r,124),Q(i,c-20,104,15,a.accent,a.dim,.7),i.fillStyle=a.text;const d=214;let p=r;if(e.kind==="email"){i.font=`500 46px ${h.mono}`;const u=e.text,w=i.measureText(u).width,y=c-r-30;i.save(),i.beginPath(),i.rect(r-2,d-56,c-r+4,76),i.clip();const b=Math.max(0,w-y);i.fillText(u,r-b,d),i.restore(),p=r+Math.min(w,y)+5}else{const u=Math.min(e.length,12);for(let w=0;w<u;w++)i.beginPath(),i.arc(r+13+w*32,d-15,10.5,0,ne),i.fill();p=r+u*32+6}l&&(i.fillStyle=a.accent,i.fillRect(p,d-40,19,50)),i.fillStyle=a.dim,i.fillRect(r,d+30,c-r,3);break}case"pending":{const d=.5+.5*Math.sin(t*4);fe(i,n/2,132,120,a.accent,.1+.08*d),Q(i,n/2,130,30,a.accent,a.text,.55+.25*d),i.fillStyle=a.text,Z(i,o.pending,z=>`500 ${z}px ${h.sans}`,34,c-r),i.fillText(o.pending,n/2,240);const p=280,u=n/2-p/2;i.fillStyle=a.dim,i.globalAlpha=.45,i.beginPath(),i.roundRect(u,272,p,8,4),i.fill(),i.globalAlpha=1;const w=s*.9%1.4,y=u+p*xe(w-.4),b=u+p*xe(w);i.fillStyle=a.accent,b-y>1&&(i.beginPath(),i.roundRect(y,272,b-y,8,4),i.fill());break}case"error":{i.strokeStyle=a.error,i.lineWidth=4,i.beginPath(),i.arc(n/2,112,26,0,ne),i.stroke(),i.fillStyle=a.error,i.fillRect(n/2-2.5,98,5,18),i.beginPath(),i.arc(n/2,125,3.2,0,ne),i.fill(),i.font=`500 34px ${h.sans}`,ct(i,e.message,c-r).forEach((p,u)=>i.fillText(p,n/2,204+u*44));break}case"welcome":{const d=Fe(s/1.6),p=Fe((s-.45)/.9);fe(i,n/2,150,120+90*d,a.accent,.14+.22*d),Q(i,n/2,150,46,a.accent,a.text,.15+.95*d),i.globalAlpha=p,i.fillStyle=a.text,Z(i,o.welcome,u=>`600 ${u}px ${h.sans}`,44,c-r+30),i.fillText(o.welcome,n/2,272+(1-p)*14),i.globalAlpha=p*.9,i.fillStyle=a.dim,Z(i,o.tagline,u=>`400 ${u}px ${h.sans}`,24,c-r),i.fillText(o.tagline,n/2,314+(1-p)*14),i.globalAlpha=1;break}}if(e.kind==="error"&&s<.5){const d=1-s/.5,p=Math.floor(s*40);for(let u=0;u<6;u++){const w=Math.sin((p+1)*12.9898+u*78.233)*43758.5453,y=w-Math.floor(w),b=Math.floor(y*v),z=10+Math.floor(y*26),k=(y-.5)*46*d;i.drawImage(i.canvas,0,b,n,z,k,b,n,z)}}if(s<.32){const d=s/.32*(v+60)-30,p=i.createLinearGradient(0,d-30,0,d+30);p.addColorStop(0,"transparent"),p.addColorStop(.5,"rgba(255,255,255,0.22)"),p.addColorStop(1,"transparent"),i.fillStyle=p,i.fillRect(0,d-30,n,60)}i.restore()}const pt=(i,e)=>i.kind==="pending"||i.kind==="logo"||e<2||i.kind==="email"||i.kind==="password",L=Math.PI*2,Me=24,mt=.035,re=(i,e,s)=>i+(e-i)*s,ie=new M(-.15,.7,5.2),oe=new M(.45,.65,-.2),dt=new M;function _e(i=6,e=4){const s=[],t=[],o=[];for(let n=0;n<=i;n++){const v=n/i,l=.33*Math.sin(Math.PI*v**.65*.9)+.025*(1-v);for(let r=0;r<=e;r++){const c=r/e*2-1,d=c*l,p=v-.13*v**5*(1-c*c)-.5,u=.12*c*c*Math.sin(Math.PI*v)-.09*v*v;s.push(d,p,u),t.push(r/e,v)}}const a=e+1;for(let n=0;n<i;n++)for(let v=0;v<e;v++){const l=n*a+v;o.push(l,l+1,l+a,l+1,l+a+1,l+a)}const h=new le;return h.setAttribute("position",new q(s,3)),h.setAttribute("uv",new q(t,2)),h.setIndex(o),h.computeVertexNormals(),h}function Be(i){const e=i.map(o=>o.index?o.toNonIndexed():o),s=(o,a)=>{const h=e.reduce((l,r)=>l+r.attributes.position.count,0),n=new Float32Array(h*a);let v=0;for(const l of e){const r=l.attributes[o];r&&n.set(r.array.subarray(0,l.attributes.position.count*a),v),v+=l.attributes.position.count*a}return new nt(n,a)},t=new le;t.setAttribute("position",s("position",3)),t.setAttribute("normal",s("normal",3)),t.setAttribute("uv",s("uv",2));for(const o of e)o.dispose();for(const o of i)o.dispose();return t}function ft(){const i=[];for(let t=0;t<5;t++){const o=_e(3,1);o.scale(.5,.5,.5),o.translate(0,.25,0),o.rotateX(.42),o.rotateZ(t/5*L+.3),i.push(o)}const e=new ot(.075,6);e.translate(0,0,.02);const s=e.attributes.uv;for(let t=0;t<s.count;t++)s.setXY(t,.5,0);return i.push(e),Be(i)}function vt(i,e,s){const t=new at,o=-i/2,a=-e/2;return t.moveTo(o+s,a),t.lineTo(o+i-s,a),t.quadraticCurveTo(o+i,a,o+i,a+s),t.lineTo(o+i,a+e-s),t.quadraticCurveTo(o+i,a+e,o+i-s,a+e),t.lineTo(o+s,a+e),t.quadraticCurveTo(o,a+e,o,a+e-s),t.lineTo(o,a+s),t.quadraticCurveTo(o,a,o+s,a),t}function K(i,e,s,t,o=.008){const a=new it(vt(i-2*o,e-2*o,Math.max(.002,t-o)),{depth:s-2*o,bevelEnabled:!0,bevelThickness:o,bevelSize:o,bevelSegments:2,curveSegments:5});return a.translate(0,0,-(s-2*o)/2),a}function ae(i,e,s,t,o=8){const a=new Le(i,e,1,o,!1),h=a.attributes.position,n=new M,v=new M,l=o+1;for(let r=0;r<=e;r++){const c=r/e;i.getPointAt(c,n);const d=re(s,t,c**.8);for(let p=0;p<l;p++){const u=r*l+p,w=s>.04?1+.16*Math.sin(p/o*L*5+c*13)+.09*Math.cos(p/o*L*9-c*23)+.07*Math.sin(c*47+p*3):1;v.fromBufferAttribute(h,u).sub(n).multiplyScalar(d*w).add(n),h.setXYZ(u,v.x,v.y,v.z)}}return a.computeVertexNormals(),a}function wt(i){const{stone:e}=_,s=[];for(let x=1;x<=44;x++)s.push(Math.sin(x/44*(Math.PI/2)));s.push(1,1.06,1.16);const t=112,o=[0,0,0],a=[],h=[0,0],n=new he(J(356382)),v=new S(i.stone),l=v.clone().multiplyScalar(.2),r=v.clone().lerp(new S("#a49a7e"),.18),c=new S,d=(x,C,m)=>{const f=.5+.5*n.at(x*6.5,C*6.5,m*6.5),g=1-Re.smoothstep(C,.012,.11);c.copy(v).lerp(r,f*.7).lerp(l,g),c.multiplyScalar(.9+.2*n.at(x*19,3.1,m*19)),a.push(c.r,c.g,c.b)},p=Math.cos(e.yaw),u=Math.sin(e.yaw),w=ge(e.x,e.z);o[0]=e.x,o[1]=w,o[2]=e.z,d(e.x,w,e.z);for(const x of s)for(let C=0;C<t;C++){const m=C/t*L,f=1+.07*Math.sin(m*3+.7)+.045*Math.sin(m*5+2.1)+.022*Math.sin(m*11),g=Math.cos(m)*e.radiusX*x*f,T=Math.sin(m)*e.radiusZ*x*f,U=e.x+g*p+T*u,F=e.z-g*u+T*p,A=Math.max(-.08,ge(U,F)),G=Re.smoothstep(x,.65,1),W=n.at(U*15,A*24,F*15)*.075*G;o.push(U+Math.cos(m)*W,A,F+Math.sin(m)*W),h.push(g*2.4,T*2.4),d(U,A,F)}const y=[];for(let x=0;x<t;x++)y.push(0,1+(x+1)%t,1+x);for(let x=0;x<s.length-1;x++)for(let C=0;C<t;C++){const m=1+x*t+C,f=1+x*t+(C+1)%t,g=m+t,T=f+t;y.push(m,f,g,f,T,g)}const b=new le;b.setAttribute("position",new q(o,3)),b.setAttribute("color",new q(a,3)),b.setAttribute("uv",new q(h,2)),b.setIndex(y),b.computeVertexNormals();const z=b.toNonIndexed();b.dispose();const k=z.attributes.position,P=z.attributes.uv,N=new M,R=new M,B=new M;for(let x=0;x<k.count;x+=3){N.fromBufferAttribute(k,x),R.fromBufferAttribute(k,x+1).sub(N),B.fromBufferAttribute(k,x+2).sub(N),R.cross(B).normalize();const C=Math.abs(R.y)>Math.max(Math.abs(R.x),Math.abs(R.z)),m=Math.abs(R.x)>Math.abs(R.z);for(let f=x;f<x+3;f++){const g=C||!m?k.getX(f):k.getZ(f),T=C?-k.getZ(f):k.getY(f);P.setXY(f,g*2.3,T*2.3)}}return z}function gt(){const e=new he(J(108695934)),s=new Float32Array(512*512),t=new Uint8Array(512*512*4),o=new Uint8Array(512*512*4),a=new Uint8Array(512*512*4),h=(l,r,c,d)=>{const p=l/512*L,u=r/512*L,w=c/L;return e.at((3+Math.cos(u))*Math.cos(p)*w,(3+Math.cos(u))*Math.sin(p)*w,Math.sin(u)*w+d)};for(let l=0;l<512;l++)for(let r=0;r<512;r++){const c=l*512+r,d=c*4,p=h(r,l,8,3),u=h(r,l,100,7),w=h(r,l,230,11),y=Math.pow(Math.max(0,1-Math.abs(h(r,l,11,19)+p*.35)*30),3),b=Math.max(0,u-.08)*1.2,z=Math.max(0,-u-.12);s[c]=p*.42+u*.13+w*.045-y*.2;const k=Math.max(.12,.68+p*.3+w*.25+z*.85-b*.9-y*.28);t[d]=Math.min(255,k*255),t[d+1]=Math.min(255,k*242),t[d+2]=Math.min(255,k*221),t[d+3]=255;const P=Math.min(255,Math.max(90,215+u*60-z*120));a[d]=a[d+1]=a[d+2]=P,a[d+3]=255}const n=(l,r)=>s[(r+512)%512*512+(l+512)%512];for(let l=0;l<512;l++)for(let r=0;r<512;r++){const c=(n(r-1,l)-n(r+1,l))*5.5,d=(n(r,l-1)-n(r,l+1))*5.5,p=Math.hypot(c,d,1),u=(l*512+r)*4;o[u]=(c/p*.5+.5)*255,o[u+1]=(d/p*.5+.5)*255,o[u+2]=(1/p*.5+.5)*255,o[u+3]=255}const v=(l,r=!1)=>{const c=new Ge(l,512,512);return c.wrapS=c.wrapT=Ne,c.magFilter=we,c.minFilter=We,c.generateMipmaps=!0,c.anisotropy=4,r&&(c.colorSpace=$),c.needsUpdate=!0,c};return{map:v(t,!0),normalMap:v(o),roughnessMap:v(a)}}function yt(i,e,s,t){const o=new he(J(t)),a=200,h=[],n=[];for(let r=0;r<=a;r++){const c=re(-110,110,r/a);let d=0,p=.55,u=s;for(let y=0;y<4;y++)d+=p*(1-Math.abs(o.at(c*u,t%17,y*3.7))),p*=.48,u*=2.2;const w=e*(d-.45)*1.25;h.push(c,Math.max(.15,w),i,c,-3,i),n.push(1,0)}const v=[];for(let r=0;r<a;r++){const c=r*2;v.push(c,c+1,c+2,c+2,c+1,c+3)}const l=new le;return l.setAttribute("position",new q(h,3)),l.setAttribute("aTop",new q(n,1)),l.setIndex(v),l}const De=`
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
}`,Ee=`
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
}`,St=`
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
}`,kt=`
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
}`;class At{constructor(){this.target=new et(2,2,{type:tt,samples:4}),this.texel=new O(.5,.5),this.camera=new Ue,this.matrix=new j,this.normal=new M(0,1,0),this.origin=new M(0,0,0),this.plane=new st,this.clip=new ve,this.q=new ve,this.eye=new M,this.view=new M,this.look=new M,this.aim=new M,this.rotation=new j}setSize(e,s){const t=Math.max(2,Math.round(e)),o=Math.max(2,Math.round(s));this.target.setSize(t,o),this.texel.set(1/t,1/o)}update(e){const{normal:s,origin:t,eye:o,view:a,look:h,aim:n,rotation:v}=this;o.setFromMatrixPosition(e.matrixWorld),v.extractRotation(e.matrixWorld),a.subVectors(t,o).reflect(s).negate().add(t),h.set(0,0,-1).applyMatrix4(v).add(o),n.subVectors(t,h).reflect(s).negate().add(t);const l=this.camera;l.position.copy(a),l.up.set(0,1,0).applyMatrix4(v).reflect(s),l.lookAt(n),l.near=e.near,l.far=e.far,l.updateMatrixWorld(),l.projectionMatrix.copy(e.projectionMatrix),this.matrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.matrix.multiply(l.projectionMatrix).multiply(l.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(s,t).applyMatrix4(l.matrixWorldInverse);const r=this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant),c=l.projectionMatrix.elements,d=this.q;d.x=(Math.sign(r.x)+c[8])/c[0],d.y=(Math.sign(r.y)+c[9])/c[5],d.z=-1,d.w=(1+c[10])/c[14],r.multiplyScalar(2/r.dot(d)),c[2]=r.x,c[6]=r.y,c[10]=r.z+1-.002,c[14]=r.w,l.projectionMatrixInverse.copy(l.projectionMatrix).invert()}dispose(){this.target.dispose()}}const Pt=["1234567890-=","qwertyuiop[]","asdfghjkl;'","zxcvbnm,./"],Rt={"!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/"};class He{static create(e,s){let t;try{t=new Ve({canvas:e,antialias:!s.phone,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}return t.getContext()?new He(t,s):(t.dispose(),null)}constructor(e,s){this.renderer=e,this.options=s,this.palette=s.palette,this.fonts=s.fonts,this.screenCopy=s.screenCopy,this.onQuality=s.onQuality,e.outputColorSpace=$,e.toneMapping=$e,e.info.autoReset=!1,e.shadowMap.enabled=!0,e.shadowMap.type=je,e.shadowMap.autoUpdate=!1,e.setClearColor(new S(this.palette.horizon),1),this.time=0,this.acc=0,this.width=1,this.height=1,this.dprCap=s.phone?1.5:2,this.quality=0,this.reflectionScale=.5,this.pixelScale=1,this.frameMs=16.7,this.cpuMs=0,this.slowFrames=0,this.frames=0,this.running=!1,this.manual=!1,this.raf=0,this.last=0,this.shadowAge=99,this.pointerAt=new O,this.pointerTime=0,this.parallax=new O,this.kick=0,this.kickSpeed=0,this.shake=-10,this.cheer=-10,this.screenState={kind:"logo"},this.screenSince=0,this.screenDrawn=-1,this.screenBusy=!0;const t=new Xe;if(this.scene=t,this.camera=new Ue(40,1,.05,260),this.camera.position.copy(ie),this.camera.lookAt(oe),this.mirror=new At,this.colors={sky:new S(this.palette.sky),horizon:new S(this.palette.horizon),glow:new S(this.palette.glow),sun:new S(this.palette.sun),white:new S("#fff6ea")},this.sunDir=new M(0,.1,-1).normalize(),this.sunColor=this.colors.sun.clone(),this.skyNow=this.colors.sky.clone(),this.groundColor=new S(this.palette.water).lerp(new S(this.palette.horizon),.3),this.buildSky(),this.buildHills(),this.buildBackdrop(),this.buildWater(),this.buildLights(),this.buildStone(),this.buildComputer(),this.buildBranch(),this.updateBranch(0,0),this.sim=new rt({seed:s.seed,count:s.phone?Math.min(s.petalCount,280):s.petalCount,wind:s.wind,blossoms:this.blossomWorld}),this.buildPetals(this.sim.capacity),this.updateBranch(0,0),this.updateLight(0),typeof document<"u"&&document.fonts){const o=[`600 38px ${this.fonts.sans}`,`500 34px ${this.fonts.mono}`].map(a=>document.fonts.load(a).catch(()=>[]));Promise.all(o).then(()=>this.screenBusy=!0)}}buildSky(){this.skyUniforms={uZenith:{value:new S},uHorizon:{value:new S(this.palette.horizon)},uGlow:{value:new S(this.palette.glow)},uSun:{value:new S(this.palette.sun)},uSunDir:{value:this.sunDir}};const e=new E(new Ye(180,48,24),new V({uniforms:this.skyUniforms,vertexShader:xt,fragmentShader:Mt,side:Ze,depthWrite:!1}));e.renderOrder=-10,e.frustumCulled=!1,this.sky=e,this.scene.add(e)}buildHills(){const e=[{z:-78,height:9.5,frequency:.03,seed:11,far:.62,color:this.palette.hills[0]},{z:-50,height:5.2,frequency:.055,seed:23,far:.42,color:this.palette.hills[1]},{z:-30,height:1.9,frequency:.11,seed:37,far:.24,color:this.palette.hills[2]}];this.hills=[],this.hillUniforms=[];for(const s of e){const t={uColor:{value:new S(s.color)},uHaze:{value:new S(this.palette.horizon)},uSun:{value:this.sunColor},uSunDir:{value:this.sunDir},uFar:{value:s.far}};this.hillUniforms.push(t);const o=new E(yt(s.z,s.height,s.frequency,s.seed),new V({uniforms:t,vertexShader:bt,fragmentShader:St}));o.frustumCulled=!1,this.hills.push(o),this.scene.add(o)}}buildBackdrop(){if(!this.options.backdropUrl)return;const e=36,s=e*16/9,t=new Se({color:this.options.backdropTint??"#ffffff",toneMapped:!1}),o=new se(s*3,e*4),a=o.getAttribute("uv");for(let n=0;n<a.count;n++)a.setXY(n,(a.getX(n)-.5)*3+.5,(a.getY(n)-.5)*4+.5);t.onBeforeCompile=n=>{n.uniforms.uPlateZenith={value:new S("#7f95a6")},n.fragmentShader=`uniform vec3 uPlateZenith;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`
        #include <map_fragment>
        #ifdef USE_MAP
          float skyExtension = 1. - exp(-max(0., vMapUv.y - 1.) * 3.);
          diffuseColor.rgb = mix(diffuseColor.rgb, uPlateZenith, skyExtension);
        #endif
      `)};const h=new E(o,t);h.position.set(5.5,e*(.5-.335),-50),h.visible=!1,h.name="Distant sky, mountains and far shore (image plate)",this.backdrop=h,this.scene.add(h),new Ke().load(this.options.backdropUrl,n=>{if(this.disposed){n.dispose();return}n.colorSpace=$,n.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),t.map=n,this.screenUniforms&&(this.screenUniforms.uBackdrop.value=n),t.needsUpdate=!0,h.visible=!0,this.hills.forEach(v=>v.visible=!1),this.render()},void 0,()=>{})}buildWater(){this.ripples=Array.from({length:Me},()=>new ve(0,0,-100,0)),this.rippleNext=0;const e=new S(this.palette.water);this.waterUniforms={uReflection:{value:this.mirror.target.texture},uTexel:{value:this.mirror.texel},uMirror:{value:this.mirror.matrix},uRipples:{value:this.ripples},uTime:{value:0},uDeep:{value:e},uShallow:{value:e.clone().multiplyScalar(.65)},uHaze:{value:new S(this.palette.horizon)},uSun:{value:this.sunColor},uSunDir:{value:this.sunDir}};const s=new E(new se(320,320,1,1),new V({uniforms:this.waterUniforms,vertexShader:kt,fragmentShader:zt}));s.rotation.x=-Math.PI/2,s.position.set(0,0,-80),s.frustumCulled=!1,this.water=s,this.scene.add(s)}buildLights(){this.sunLight=new ke(this.sunColor,2.4),this.sunLight.castShadow=!0;const e=this.sunLight.shadow,s=this.options.phone?1024:2048;e.mapSize.set(s,s),e.camera.left=-2.4,e.camera.right=2.4,e.camera.top=2.4,e.camera.bottom=-2.4,e.camera.near=.5,e.camera.far=14,e.bias=-6e-4,e.normalBias=.012,e.radius=3,this.sunLight.target.position.set(_.computer.x,.3,_.computer.z),this.scene.add(this.sunLight,this.sunLight.target),this.hemi=new Oe(new S(this.palette.sky),this.groundColor,1.25),this.scene.add(this.hemi);const t=new ke("#dce8f5",.9);t.position.set(-2,3,5),this.scene.add(t)}buildStone(){const e=new E(wt(this.palette),new H({...gt(),vertexColors:!0,roughness:1,normalScale:new O(.9,.9),metalness:0}));e.material.onBeforeCompile=t=>{t.vertexShader=`varying vec3 vRock;
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
        roughnessFactor*=mix(.36,1.,smoothstep(.02,.12,vRock.y));`)},this.stone=e,e.name="Granite ledge above the waterline",e.receiveShadow=!0,e.castShadow=!0,this.scene.add(e)}buildComputer(){const e=this.palette,s=new ue;s.position.set(_.computer.x,Y.base,_.computer.z),s.rotation.y=_.computer.yaw;const t=_.computer.scale;s.scale.setScalar(t);const o=new H({color:e.computer,roughness:.48,metalness:0}),a=new H({color:e.keys,roughness:.6,metalness:0}),h=new H({color:"#1d2123",roughness:.55,metalness:0}),n=(m,f,g,T,U,F=!0)=>{const A=new E(m,f);return A.position.set(g,T,U),A.castShadow=F,A.receiveShadow=!0,s.add(A),A},v=Y.base;n(K(.58,.1,.5,.02,.01),o,0,.05,0),n(new I(.15,.011,.01),h,-.13,.058,.25),n(new I(.15,.011,.01),h,.07,.058,.25),n(new I(.03,.006,.006),a,.21,.058,.252),n(new I(.56,.004,.004),a,0,.022,.251,!1);const l=(Y.monitor.top-v)/t,r=.43,c=l-r/2;n(K(.51,r,.455,.045,.014),o,0,c,-.0225),n(K(.36,.34,.24,.06,.02),o,0,c-.02,-.33);for(let m=0;m<6;m++)n(new I(.2,.004,.012),h,0,l-.001,-.21+m*.026,!1);const d=.205,p=c+.025;n(K(.43,.33,.012,.035,.004),h,0,p,d);const u=new se(.38,.285,18,14),w=u.attributes.position;for(let m=0;m<w.count;m++){const f=w.getX(m)/.19,g=w.getY(m)/.1425;w.setZ(m,.011*(1-f*f*.8)*(1-g*g*.8))}u.computeVertexNormals(),this.screenCanvas=typeof document<"u"?document.createElement("canvas"):null,this.screenCanvas&&(this.screenCanvas.width=ye.width,this.screenCanvas.height=ye.height),this.screenContext=this.screenCanvas?.getContext("2d")??null,this.screenTexture=new ze(this.screenCanvas??void 0),this.screenTexture.colorSpace=$,this.screenTexture.generateMipmaps=!1,this.screenTexture.minFilter=we,this.screenTexture.anisotropy=4,this.screenUniforms={uMap:{value:this.screenTexture},uBackdrop:{value:this.screenTexture},uIdle:{value:0},uTime:{value:0},uPower:{value:1.15},uGlass:{value:new S(e.sky).multiplyScalar(.6)}};const y=new E(u,new V({uniforms:this.screenUniforms,vertexShader:Tt,fragmentShader:Ct}));y.position.set(0,p,d+.0075),s.add(y);const b=typeof document<"u"?document.createElement("canvas"):null;if(b){b.width=64,b.height=64;const m=b.getContext("2d");m&&Q(m,32,30,15,"#7d7a72","#7d7a72",.7)}this.badgeTexture=new ze(b??void 0),this.badgeTexture.colorSpace=$;const z=new E(new se(.034,.034),new H({map:this.badgeTexture,transparent:!0,roughness:.5}));z.position.set(-.17,p-.182,d+5e-4),s.add(z),this.led=new E(new I(.012,.006,.004),new Se({color:"#8fe3a6"})),this.led.position.set(.185,p-.183,d+.002),s.add(this.led),this.screenLight=new Qe(new S(e.screenAccent),.5,1.6,2),this.screenLight.position.set(0,p,d+.18),s.add(this.screenLight);const k=new ue;k.position.set(0,(Y.keyboardBase-v)/t,.42),k.rotation.x=.06,s.add(k);const P=new E(K(.47,.022,.16,.012,.006),o);P.position.y=.011,P.castShadow=!0,P.receiveShadow=!0,k.add(P),this.keys=[];const N=.031;Pt.forEach((m,f)=>{for(let g=0;g<m.length;g++)this.keys.push({char:m[g],x:-.2+g*N+f*.008,z:-.054+f*.03,w:1,at:-10})}),this.keys.push({char:" ",x:0,z:.066,w:6.2,at:-10}),this.keys.push({char:"Backspace",x:.19,z:-.054,w:1.7,at:-10}),this.keys.push({char:"Enter",x:.19,z:.006,w:1.7,at:-10});const R=new H({color:"#ffffff",roughness:.55});this.keyMesh=new pe(new I(.026,.012,.026),R,this.keys.length),this.keyMesh.castShadow=!0,this.keyMesh.receiveShadow=!0;const B=new S(e.keys),x=new S(e.petalDeep).lerp(new S(e.keys),.35);this.keys.forEach((m,f)=>this.keyMesh.setColorAt(f,m.char==="Enter"?x:B)),this.keyMatrix=new j,this.keys.forEach((m,f)=>this.placeKey(f,0)),k.add(this.keyMesh);const C=new me([new M(-.2,(Y.keyboardBase-v)/t+.012,.34),new M(-.27,.006,.33),new M(-.34,.005,.27),new M(-.33,.006,.2),new M(-.29,.03,.16)]);n(new Le(C,32,.0055,6,!1),h,0,0,0),this.computer=s,this.scene.add(s)}placeKey(e,s){const t=this.keys[e];this.keyMatrix.makeScale(t.w,1,1),this.keyMatrix.setPosition(t.x,.028-s*.006,t.z),this.keyMesh.setMatrixAt(e,this.keyMatrix)}buildBranch(){const e=this.palette,s=J(725077),t=new ue,o=new M(1.52,.27,-.38);t.position.copy(o);const a=(m,f,g)=>new M(m,f-.13,g).sub(o),h=m=>new me(m.map(f=>a(...f))),n=h([[1.85,.37,-.38],[1.85,.72,-.4],[1.58,1.12,-.32],[1.12,1.6,-.18],[1.02,2.04,-.28]]),v=[h([[1.43,1.12,-.32],[1.14,1.42,-.15],[.66,1.57,.05],[.1,1.61,.12],[-.56,1.52,.16],[-1.05,1.7,.04]]),h([[1.12,1.6,-.18],[.72,1.78,-.26],[.1,1.93,-.22],[-.48,1.84,-.1],[-.91,2.02,.05]]),h([[1.43,1.12,-.32],[1.69,1.43,-.25],[1.96,1.68,-.1],[2.22,1.96,-.2]]),h([[1.14,1.42,-.15],[1.16,1.57,.3],[.81,1.75,.48],[.25,1.78,.45],[-.35,1.8,.52]]),h([[1.12,1.6,-.18],[1.45,1.85,-.6],[1.7,2.07,-.8]])],l=512,r=256,c=new Uint8Array(l*r*4),d=new Uint8Array(l*r*4),p=new Uint8Array(l*r*4),u=new he(J(764485));for(let m=0;m<r;m++)for(let f=0;f<l;f++){const g=f/l*L,T=m/r*L,U=Math.sin(g+T*2)*.28+Math.sin(g*3-T)*.1,F=T*13+Math.sin(T*3)*.7+Math.sin(T*7)*.22+U,A=u.at(f*.018,m*.07,2),G=Math.pow(.5+.5*Math.cos(F+A*.24),16+A*8),W=Math.pow(.5-.5*Math.cos(F),.65),X=Math.pow(.5+.5*Math.cos(F*3+Math.sin(g*2)*.2),28),ee=u.at(Math.cos(g)*3,Math.sin(g)*3,m*.2)*.045,te=u.at(f*.55,m*.7,5)*.13,be=u.at(f*.035,m*.7,11)*.15,Ie=u.at(f*.015,m*.12,3)*.1,ce=Math.max(.08,Math.min(1,.65+W*.24-G*.48-X*.1+ee+te+be+Ie)),qe=Math.max(0,Math.min(1,.34+W*.28-G*.28-X*.06+ee+be*.45+te*.25)),D=(m*l+f)*4;c[D]=ce*226,c[D+1]=ce*203,c[D+2]=ce*174,c[D+3]=255,d[D]=d[D+1]=d[D+2]=qe*255,d[D+3]=255,p[D]=p[D+1]=p[D+2]=215+G*35-W*12,p[D+3]=255}const w=(m,f=!1)=>{const g=new Ge(m,l,r);return g.wrapS=g.wrapT=Ne,g.repeat.set(2,3),g.magFilter=we,g.minFilter=We,g.generateMipmaps=!0,g.anisotropy=4,f&&(g.colorSpace=$),g.needsUpdate=!0,g},y=new H({color:e.bark,map:w(c,!0),bumpMap:w(d),bumpScale:.025,roughnessMap:w(p),roughness:1}),b=[ae(n,100,.26,.065,24)];v.forEach((m,f)=>b.push(ae(m,44,f===0?.115:.073,.005,8)));for(let m=0;m<6;m++){const f=m*1.05,g=1.85+Math.cos(f)*.43,T=-.38+Math.sin(f)*.38;b.push(ae(h([[1.85,.48,-.38],[1.85+Math.cos(f)*.2,.43,-.38+Math.sin(f)*.2],[g,Math.max(.025,ge(g,T))+.136,T]]),16,.09,.006,7))}const z=[];for(const m of v)for(let f=1;f<=24;f++){const g=.15+f/24*.8,T=m.getPointAt(g),U=f%2?1:-1,F=T.clone().add(new M(-.12-s()*.18,(s()-.35)*.32,U*(.16+s()*.36))),A=new me([T,T.clone().lerp(F,.5).add(new M(0,.04,0)),F]);b.push(ae(A,10,.008,.0015,5));for(let G=0;G<7;G++){const W=A.getPointAt(.16+G*.13);for(let X=0;X<(this.options.phone?6:8);X++){const ee=new M((s()-.5)*.21,(s()-.45)*.18,(s()-.5)*.18),te=new M((s()-.5)*1.8,(s()-.4)*1.7,.3+s()).normalize();z.push({at:W.clone().add(ee),facing:te,size:.055+s()*.04,tint:s()})}}}const k=new E(Be(b),y);k.castShadow=!0,k.receiveShadow=!0,t.add(k);const P=new Float32Array(z.length*4),N=ft();N.setAttribute("aData",new Te(P,4)),this.flowerUniforms=this.petalUniforms(e.petalDeep,e.blossom);const R=new pe(N,new V({uniforms:this.flowerUniforms,vertexShader:De,fragmentShader:Ee,side:Ce}),z.length),B=new j,x=new Ae,C=new M(0,0,1);z.forEach((m,f)=>{x.setFromUnitVectors(C,m.facing),B.compose(m.at,x,new M(m.size,m.size,m.size)),R.setMatrixAt(f,B),P[f*4]=1,P[f*4+1]=m.tint,P[f*4+3]=s()*.65}),R.name=`Full bloom — ${z.length.toLocaleString()} instanced cherry blossoms`,t.add(R),this.blossomLocal=z.map(m=>m.at),this.blossomWorld=new Float32Array(z.length*3),this.branch=t,this.scene.add(t)}petalUniforms(e,s){return{uBase:{value:new S(e)},uTip:{value:new S(s)},uSunDir:{value:this.sunDir},uSun:{value:this.sunColor},uSky:{value:this.skyNow},uGround:{value:this.groundColor},uHaze:{value:new S(this.palette.horizon)},uFog:{value:new O(9,60)}}}buildPetals(e){const s=_e();this.petalData=new Te(new Float32Array(e*4),4),this.petalData.setUsage(Pe),s.setAttribute("aData",this.petalData),this.petalUniformValues=this.petalUniforms(this.palette.petalDeep,this.palette.petal),this.petals=new pe(s,new V({uniforms:this.petalUniformValues,vertexShader:De,fragmentShader:Ee,side:Ce,transparent:!0,depthWrite:!1}),e),this.petals.instanceMatrix.setUsage(Pe),this.petals.frustumCulled=!1,this.petals.count=0,this.order=new Uint16Array(e),this.depth=new Float32Array(e),this.tmp={m:new j,q:new Ae,e:new Je,p:new M,s:new M,v:new M,vp:new j,right:new M,up:new M},this.scene.add(this.petals)}updateLight(e){const s=.08+Math.sin(e*.04)*.015;this.sunDir.set(-.2,.24,-1).normalize(),this.sunColor.copy(this.colors.sun).lerp(this.colors.white,s*.55),this.skyNow.copy(this.colors.sky).lerp(this.colors.white,s*.08),this.skyUniforms.uZenith.value.copy(this.skyNow),this.skyUniforms.uSun.value.copy(this.sunColor),this.skyUniforms.uGlow.value.copy(this.colors.glow).lerp(this.colors.horizon,s*.35),this.sunLight.color.copy(this.sunColor),this.sunLight.intensity=2.6,this.sunLight.position.copy(this.sunLight.target.position).addScaledVector(this.sunDir,7),this.hemi.color.copy(this.skyNow)}updateCamera(e,s){const t=1-Math.exp(-e*2.5);this.parallax.x+=(this.pointerAt.x-this.parallax.x)*t,this.parallax.y+=(this.pointerAt.y-this.parallax.y)*t;const o=this.camera;o.position.set(ie.x+Math.sin(s*.071)*.05+this.parallax.x*.09,ie.y+Math.sin(s*.053)*.014+this.parallax.y*.03,ie.z),o.lookAt(oe.x+this.parallax.x*.03,oe.y,oe.z),o.updateMatrixWorld(),this.sky.position.copy(o.position)}updateBranch(e,s){this.kickSpeed+=(-this.kick*38-this.kickSpeed*5.5)*e,this.kick+=this.kickSpeed*e;const t=this.sim?this.sim.gust:0,o=this.branch;o.rotation.z=.003*Math.sin(s*.8)+.002*Math.sin(s*1.9+1)+this.kick*.25+t*.008*Math.sin(s*6.5),o.rotation.x=.002*Math.sin(s*.6+.4)+this.kick*.1,o.updateMatrixWorld(!0);const a=dt;this.blossomLocal.forEach((h,n)=>{a.copy(h).applyMatrix4(o.matrixWorld),this.blossomWorld[n*3]=a.x,this.blossomWorld[n*3+1]=a.y,this.blossomWorld[n*3+2]=a.z}),this.sim&&this.sim.setBlossoms(this.blossomWorld)}updateKeys(e){let s=!1;this.keys.forEach((t,o)=>{const a=e-t.at;if(a<0||a>.3){t.down&&(t.down=!1,this.placeKey(o,0),s=!0);return}t.down=!0;const h=a<.05?a/.05:Math.max(0,1-(a-.05)/.22);this.placeKey(o,h),s=!0}),s&&(this.keyMesh.instanceMatrix.needsUpdate=!0)}updateScreen(e){const s=e-this.screenSince,t=this.screenState,o=e-this.shake<.5;this.screenUniforms.uTime.value=e,this.screenUniforms.uIdle.value=t.kind==="logo"&&this.backdrop?.visible?1:0,this.screenUniforms.uPower.value=(t.kind==="welcome"?1.25:1.12)*(o?.85+.15*Math.sin(e*90):1);const a={pending:Math.sin(e*9)>0?"#ffcf7a":"#6b5a3a",error:"#ff7b66",welcome:"#fff4dc"};this.led.material.color.set(a[t.kind]??"#8fe3a6");const h=Math.max(0,1-(e-this.cheer)/2.5);if(this.screenLight.intensity=.45+(t.kind==="welcome"?.35:0)+h*.6,this.screenLight.color.set(t.kind==="error"?this.palette.screenError:this.palette.screenAccent),!this.screenContext)return;const n=Math.floor(e*30);!this.screenBusy&&(n===this.screenDrawn||!pt(t,s))||(this.screenDrawn=n,this.screenBusy=!1,ut(this.screenContext,t,s,e,this.screenCopy,{background:this.palette.screen,text:this.palette.screenText,dim:this.palette.screenDim,accent:this.palette.screenAccent,error:this.palette.screenError},this.fonts),this.screenTexture.needsUpdate=!0)}updatePetals(){const e=this.sim,{m:s,q:t,e:o,p:a,s:h}=this.tmp,n=this.camera.position,v=this.order,l=this.depth;let r=0;for(let u=0;u<e.capacity;u++){if(e.mode[u]===lt.IDLE||e.alpha[u]<=.004)continue;const w=e.x[u]-n.x,y=e.y[u]-n.y,b=e.z[u]-n.z;l[u]=w*w+y*y+b*b,v[r++]=u}const c=v.subarray(0,r).sort((u,w)=>l[w]-l[u]),d=this.petals.instanceMatrix.array,p=this.petalData.array;for(let u=0;u<r;u++){const w=c[u];o.set(e.rx[w],e.ry[w],e.rz[w]),t.setFromEuler(o),a.set(e.x[w],e.y[w],e.z[w]);const y=e.size[w]*mt;h.set(y,y,y),s.compose(a,t,h),s.toArray(d,u*16),p[u*4]=e.alpha[w],p[u*4+1]=e.tint[w],p[u*4+2]=e.wet[w],p[u*4+3]=0}this.petals.count=r,this.petals.instanceMatrix.needsUpdate=!0,this.petalData.needsUpdate=!0}ripple(e,s,t){this.ripples[this.rippleNext].set(e,s,this.time,t),this.rippleNext=(this.rippleNext+1)%Me}frame(e){const s=performance.now(),t=this.renderer;t.info.reset(),this.acc+=e;let o=0;for(;this.acc>=de-1e-6&&o<5;)this.sim.step(de),this.acc-=de,o++;o===5&&(this.acc=0),this.time+=e;const a=this.time;this.sim.drainLandings((h,n,v)=>this.ripple(h,n,v)),this.updateLight(a),this.updateCamera(e,a),this.updateBranch(e,a),this.updateKeys(a),this.updateScreen(a),this.updatePetals(),this.waterUniforms.uTime.value=a,++this.shadowAge>12&&(t.shadowMap.needsUpdate=!0,this.shadowAge=0),this.mirror.update(this.camera),this.water.visible=!1,t.setRenderTarget(this.mirror.target),t.clear(),t.render(this.scene,this.mirror.camera),t.setRenderTarget(null),this.water.visible=!0,t.render(this.scene,this.camera),this.cpuMs=re(this.cpuMs,performance.now()-s,.1)}loop=e=>{this.raf=requestAnimationFrame(this.loop);const s=this.last?e-this.last:16.7;this.last=e,this.frame(Math.min(s,100)/1e3),this.adapt(s)};adapt(e){this.manual||(this.frames++,this.frameMs=re(this.frameMs,e,.08),!(this.frames<45||e>250)&&(this.slowFrames=this.frameMs>24?this.slowFrames+1:Math.max(0,this.slowFrames-2),!(this.slowFrames<50||this.quality>=3)&&(this.slowFrames=0,this.frames=0,this.quality++,this.quality===1&&(this.reflectionScale=.25),this.quality===2&&(this.sim.density=.5),this.quality===3&&(this.pixelScale=.75),this.setSize(this.width,this.height),this.onQuality?.(this.qualityState()))))}qualityState(){return{level:this.quality,reflectionScale:this.reflectionScale,density:this.sim.density,pixelRatio:this.renderer.getPixelRatio()}}setSize(e,s){this.width=Math.max(1,e),this.height=Math.max(1,s);const t=Math.min(typeof devicePixelRatio=="number"?devicePixelRatio:1,this.dprCap)*this.pixelScale;this.renderer.setPixelRatio(t),this.renderer.setSize(this.width,this.height,!1);const o=this.width/this.height;this.camera.aspect=o,this.camera.fov=o<1?2*Math.atan(Math.tan(20*Math.PI/180)/o)*180/Math.PI:40,this.camera.updateProjectionMatrix(),this.mirror.setSize(this.width*t*this.reflectionScale,this.height*t*this.reflectionScale),(!this.running||this.manual)&&this.render()}setRunning(e){this.manual||e!==this.running&&(this.running=e,cancelAnimationFrame(this.raf),e&&(this.last=0,this.raf=requestAnimationFrame(this.loop)))}render(){this.frame(0)}setManual(e){this.manual=e,cancelAnimationFrame(this.raf),this.running=!1,e||this.setRunning(!0)}advance(e){this.frame(e)}setScreen(e){if(ht(e,this.screenState))return;const s=e.kind!==this.screenState.kind;this.screenState=e,s?this.screenSince=this.time:this.screenSince=Math.min(this.screenSince,this.time-.33),e.kind==="error"&&s&&(this.shake=this.time),this.screenBusy=!0}keystroke(e){this.sim.queueRelease(1),this.kickSpeed+=.05;const s=e?.length===1?Rt[e]??e.toLowerCase():e;let t=this.keys.findIndex(o=>o.char===s);t<0&&(t=Math.abs(Math.floor(Math.sin(this.time*97.3)*1e4))%this.keys.length),this.keys[t].at=this.time}celebrate(){this.sim.burst(40),this.kickSpeed+=.55,this.cheer=this.time;const{stone:e}=_;for(let s=0;s<4;s++){const t=s/4*L+.4;this.ripple(e.x+Math.cos(t)*.15,e.z+Math.sin(t)*.12,2.2)}}pointer(e,s,t,o,a){if(this.manual&&(a=this.time-this.pointerTime),this.pointerTime=this.time,this.pointerAt.set(e,s),Math.abs(t)+Math.abs(o)<1e-5)return;const h=this.camera,{vp:n,right:v,up:l}=this.tmp;n.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),v.setFromMatrixColumn(h.matrixWorld,0),l.setFromMatrixColumn(h.matrixWorld,1),this.sim.stir({x:e,y:s,dx:t,dy:o,dt:a,viewProjection:n.elements,eye:h.position,right:v,up:l,tanHalfFov:Math.tan(h.fov*Math.PI/360),aspect:h.aspect,radius:.48})}stats(){const e=this.renderer.info.render;return{drawCalls:e.calls,triangles:e.triangles,petals:this.sim.active,frameMs:Math.round(this.frameMs*10)/10,cpuMs:Math.round(this.cpuMs*100)/100,...this.qualityState()}}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.running=!1,this.scene.traverse(e=>{e.geometry&&e.geometry.dispose();const s=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(const t of s){for(const o of Object.values(t))o&&o.isTexture&&o.dispose();t.dispose()}}),this.screenTexture.dispose(),this.badgeTexture.dispose(),this.mirror.dispose(),this.sunLight.shadow.map?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss()}}export{He as PetalScene,wt as stoneGeometry};
