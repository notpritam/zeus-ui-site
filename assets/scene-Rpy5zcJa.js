import{W as zt,v as j,w as Ct,x as At,y,V as K,h as Pt,z as gt,B as M,M as A,E as Dt,S as U,F as Et,G as it,g as O,H as Rt,I as Lt,J as E,K as Q,Q as R,C as nt,L as Ft,R as Ut,U as Wt,X as J,Y as W,Z as tt,_ as yt,a0 as lt,a1 as ht,a2 as ct,a3 as ut,a4 as Gt,l as Nt,a5 as _t,a6 as It,a7 as Y,a8 as F,a9 as pt,aa as Bt,ab as qt,ac as Ht,ad as $t,ae as Vt}from"./template-shell-CHSUuLDi.js";import{P as jt,a as L,b as _,c as Kt,d as et,s as Xt,e as Z,N as xt,f as mt}from"./zephyr-petal-signup-BwqM0f_H.js";import"./index-AxgP5lyr.js";import"./index-C-GyKu8Z.js";import"./recipe--77bzE-m.js";import"./Specimen-DbwDkXYj.js";import"./close-button-Bbezxn7K.js";import"./NumberFormatter-H2sZ7Z8O.js";import"./dropdown-ShCLYDXY.js";import"./switch-80CPkzN5.js";import"./useToggle-CpkNncj2.js";import"./useSlot-BiMBRaSY.js";import"./shared-CegY9pO-.js";import"./useUpdateEffect-BbumPFBj.js";import"./date-picker-jhg16iFd.js";import"./checkbox-C7WFMHEV.js";import"./Checkbox-DzXFENq1.js";import"./file-upload-CYm5EAkI.js";import"./pagination-Bm9Wo8i3.js";import"./tooltip-CNGsZOKH.js";import"./badge-Uy_ghwML.js";import"./kbd-Sj5WVe49.js";import"./avatar-B8U_p5od.js";import"./breadcrumb-Be3hoYnt.js";import"./artemis-scope-gNYXKmvs.js";import"./home-dashboard-BUkNhsBm.js";import"./Modal-DRhQ6ZZq.js";import"./contributions-card-B4U7U0OQ.js";import"./chart-cell-D6pA6iAs.js";import"./chart-bar-track-CRycTpFP.js";import"./stat-cards-BtVj9bSf.js";import"./data-table-B-kkcSfk.js";import"./table-BZoKzBa6.js";import"./TreeDropTargetDelegate-CFYrBWPU.js";import"./status-dot-CbmlR_JD.js";import"./recent-hires-card-CxvfMwoI.js";const ot={width:512,height:384},X=Math.PI*2,at=i=>Math.min(1,Math.max(0,i)),dt=i=>1-(1-at(i))**3;function I(i,t,s,e,n){i.font=s(e);const o=i.measureText(t).width;o>n&&(i.font=s(Math.max(10,Math.floor(e*n/o))))}function H(i,t,s,e,n,o,a=.7){const r=s+e*.62,p=Math.max(2,e*.16);i.save(),i.beginPath(),i.rect(t-e*3,s-e*4,e*6,e*4+e*.62-p),i.clip(),i.fillStyle=n,i.beginPath(),i.arc(t,s+(1-a)*e*.9,e,0,X),i.fill(),i.restore(),i.fillStyle=o;const h=Math.max(2,e*.15);i.beginPath(),i.roundRect(t-e*1.55,r-h/2,e*3.1,h,h/2),i.fill()}function Yt(i,t,s){const e=[];let n="";for(const o of t.split(/\s+/).filter(Boolean)){const a=n?`${n} ${o}`:o;i.measureText(a).width>s&&n?(e.push(n),n=o):n=a}return n&&e.push(n),e.slice(0,3)}function st(i,t,s,e,n,o){const a=i.createRadialGradient(t,s,0,t,s,e);a.addColorStop(0,n),a.addColorStop(1,"transparent"),i.globalAlpha=o,i.fillStyle=a,i.fillRect(t-e,s-e,e*2,e*2),i.globalAlpha=1}function Zt(i,t,s,e,n,o,a){const{width:r,height:p}=ot;i.save(),i.fillStyle=o.background,i.fillRect(0,0,r,p),i.textAlign="center",i.textBaseline="alphabetic";const h=s<.6||Math.floor(e*1.8)%2===0,l=54,c=r-54;switch(t.kind){case"logo":{const m=.62+.08*Math.sin(e*.5);st(i,r/2,150,150,o.accent,.16),H(i,r/2,148,44,o.accent,o.text,m),i.fillStyle=o.text,I(i,n.brand,d=>`600 ${d}px ${a.sans}`,48,c-l),i.fillText(n.brand,r/2,270),i.fillStyle=o.dim,I(i,n.tagline,d=>`400 ${d}px ${a.sans}`,24,c-l),i.fillText(n.tagline,r/2,310);break}case"email":case"password":{i.textAlign="left",i.fillStyle=o.dim,i.font=`500 23px ${a.mono}`,i.fillText(t.kind==="email"?n.email:n.password,l,124),H(i,c-20,104,15,o.accent,o.dim,.7),i.fillStyle=o.text;const m=214;let d=l;if(t.kind==="email"){i.font=`500 46px ${a.mono}`;const u=t.text,f=i.measureText(u).width,v=c-l-30;i.save(),i.beginPath(),i.rect(l-2,m-56,c-l+4,76),i.clip();const b=Math.max(0,f-v);i.fillText(u,l-b,m),i.restore(),d=l+Math.min(f,v)+5}else{const u=Math.min(t.length,12);for(let f=0;f<u;f++)i.beginPath(),i.arc(l+13+f*32,m-15,10.5,0,X),i.fill();d=l+u*32+6}h&&(i.fillStyle=o.accent,i.fillRect(d,m-40,19,50)),i.fillStyle=o.dim,i.fillRect(l,m+30,c-l,3);break}case"pending":{const m=.5+.5*Math.sin(e*4);st(i,r/2,132,120,o.accent,.1+.08*m),H(i,r/2,130,30,o.accent,o.text,.55+.25*m),i.fillStyle=o.text,I(i,n.pending,g=>`500 ${g}px ${a.sans}`,34,c-l),i.fillText(n.pending,r/2,240);const d=280,u=r/2-d/2;i.fillStyle=o.dim,i.globalAlpha=.45,i.beginPath(),i.roundRect(u,272,d,8,4),i.fill(),i.globalAlpha=1;const f=s*.9%1.4,v=u+d*at(f-.4),b=u+d*at(f);i.fillStyle=o.accent,b-v>1&&(i.beginPath(),i.roundRect(v,272,b-v,8,4),i.fill());break}case"error":{i.strokeStyle=o.error,i.lineWidth=4,i.beginPath(),i.arc(r/2,112,26,0,X),i.stroke(),i.fillStyle=o.error,i.fillRect(r/2-2.5,98,5,18),i.beginPath(),i.arc(r/2,125,3.2,0,X),i.fill(),i.font=`500 34px ${a.sans}`,Yt(i,t.message,c-l).forEach((d,u)=>i.fillText(d,r/2,204+u*44));break}case"welcome":{const m=dt(s/1.6),d=dt((s-.45)/.9);st(i,r/2,150,120+90*m,o.accent,.14+.22*m),H(i,r/2,150,46,o.accent,o.text,.15+.95*m),i.globalAlpha=d,i.fillStyle=o.text,I(i,n.welcome,u=>`600 ${u}px ${a.sans}`,44,c-l+30),i.fillText(n.welcome,r/2,272+(1-d)*14),i.globalAlpha=d*.9,i.fillStyle=o.dim,I(i,n.tagline,u=>`400 ${u}px ${a.sans}`,24,c-l),i.fillText(n.tagline,r/2,314+(1-d)*14),i.globalAlpha=1;break}}if(t.kind==="error"&&s<.5){const m=1-s/.5,d=Math.floor(s*40);for(let u=0;u<6;u++){const f=Math.sin((d+1)*12.9898+u*78.233)*43758.5453,v=f-Math.floor(f),b=Math.floor(v*p),g=10+Math.floor(v*26),w=(v-.5)*46*m;i.drawImage(i.canvas,0,b,r,g,w,b,r,g)}}if(s<.32){const m=s/.32*(p+60)-30,d=i.createLinearGradient(0,m-30,0,m+30);d.addColorStop(0,"transparent"),d.addColorStop(.5,"rgba(255,255,255,0.22)"),d.addColorStop(1,"transparent"),i.fillStyle=d,i.fillRect(0,m-30,r,60)}i.restore()}const Ot=(i,t)=>i.kind==="pending"||i.kind==="logo"||t<2||i.kind==="email"||i.kind==="password",$=Math.PI*2,rt=24,Qt=.052,D=(i,t,s)=>i+(t-i)*s,V=new M(-.14,.64,2.8),B=new M(.3,.44,-.2),Jt=new M;function Mt(i=6,t=4){const s=[],e=[],n=[];for(let r=0;r<=i;r++){const p=r/i,h=.34*Math.sin(Math.PI*Math.min(1,p**.72*1.02))+.04*(1-p);for(let l=0;l<=t;l++){const c=l/t*2-1,m=c*h,d=p-.13*p**5*(1-c*c)-.5,u=.12*c*c*Math.sin(Math.PI*p)-.09*p*p;s.push(m,d,u),e.push(l/t,p)}}const o=t+1;for(let r=0;r<i;r++)for(let p=0;p<t;p++){const h=r*o+p;n.push(h,h+1,h+o,h+1,h+o+1,h+o)}const a=new Y;return a.setAttribute("position",new F(s,3)),a.setAttribute("uv",new F(e,2)),a.setIndex(n),a.computeVertexNormals(),a}function te(i){const t=i.map(n=>n.index?n.toNonIndexed():n),s=(n,o)=>{const a=t.reduce((h,l)=>h+l.attributes.position.count,0),r=new Float32Array(a*o);let p=0;for(const h of t){const l=h.attributes[n];l&&r.set(l.array.subarray(0,h.attributes.position.count*o),p),p+=h.attributes.position.count*o}return new Vt(r,o)},e=new Y;e.setAttribute("position",s("position",3)),e.setAttribute("normal",s("normal",3)),e.setAttribute("uv",s("uv",2));for(const n of t)n.dispose();for(const n of i)n.dispose();return e}function ee(){const i=[];for(let e=0;e<5;e++){const n=Mt(5,3);n.scale(.5,.5,.5),n.translate(0,.25,0),n.rotateX(.42),n.rotateZ(e/5*$+.3),i.push(n)}const t=new qt(.1,10);t.translate(0,0,.02);const s=t.attributes.uv;for(let e=0;e<s.count;e++)s.setXY(e,.5,0);return i.push(t),te(i)}function se(i,t,s){const e=new Ht,n=-i/2,o=-t/2;return e.moveTo(n+s,o),e.lineTo(n+i-s,o),e.quadraticCurveTo(n+i,o,n+i,o+s),e.lineTo(n+i,o+t-s),e.quadraticCurveTo(n+i,o+t,n+i-s,o+t),e.lineTo(n+s,o+t),e.quadraticCurveTo(n,o+t,n,o+t-s),e.lineTo(n,o+s),e.quadraticCurveTo(n,o,n+s,o),e}function q(i,t,s,e,n=.008){const o=new Bt(se(i-2*n,t-2*n,Math.max(.002,e-n)),{depth:s-2*n,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:5});return o.translate(0,0,-(s-2*n)/2),o}function ft(i,t,s,e){const n=new yt(i,t,1,7,!1),o=n.attributes.position,a=new M,r=new M,p=8;for(let h=0;h<=t;h++){const l=h/t;i.getPointAt(l,a);const c=D(s,e,l**.8);for(let m=0;m<p;m++){const d=h*p+m;r.fromBufferAttribute(o,d).sub(a).multiplyScalar(c).add(a),o.setXYZ(d,r.x,r.y,r.z)}}return n.computeVertexNormals(),n}function ie(i){const{stone:t}=L,s=[];for(let g=1;g<=26;g++)s.push(Math.sin(g/26*(Math.PI/2)));s.push(1,1.06,1.16);const e=112,n=[0,0,0],o=[],a=[0,0],r=new xt(Z(356382)),p=new y(i.stone),h=p.clone().multiplyScalar(.5),l=p.clone().lerp(new y("#ffffff"),.12),c=new y,m=(g,w,x)=>{const k=.5+.5*r.at(g*6.5,w*6.5,x*6.5),T=1-$t.smoothstep(w,.004,.032);c.copy(p).lerp(l,k*.7).lerp(h,T),c.multiplyScalar(.9+.2*r.at(g*19,3.1,x*19)),o.push(c.r,c.g,c.b)},d=Math.cos(t.yaw),u=Math.sin(t.yaw),f=mt(t.x,t.z);n[0]=t.x,n[1]=f,n[2]=t.z,m(t.x,f,t.z);for(const g of s)for(let w=0;w<e;w++){const x=w/e*$,k=1+.055*Math.sin(x*3+.7)+.03*Math.sin(x*5+2.1),T=Math.cos(x)*t.radiusX*g*k,C=Math.sin(x)*t.radiusZ*g*k,G=t.x+T*d+C*u,S=t.z-T*u+C*d,z=Math.max(-.08,mt(G,S));n.push(G,z,S),a.push(T*2.4,C*2.4),m(G,z,S)}const v=[];for(let g=0;g<e;g++)v.push(0,1+g,1+(g+1)%e);for(let g=0;g<s.length-1;g++)for(let w=0;w<e;w++){const x=1+g*e+w,k=1+g*e+(w+1)%e,T=x+e,C=k+e;v.push(x,T,k,k,T,C)}const b=new Y;return b.setAttribute("position",new F(n,3)),b.setAttribute("color",new F(o,3)),b.setAttribute("uv",new F(a,2)),b.setIndex(v),b.computeVertexNormals(),b}function ne(){if(typeof document>"u")return null;const i=256,t=document.createElement("canvas");t.width=i,t.height=i;const s=t.getContext("2d");if(!s)return null;const e=Z(111321470);s.fillStyle="#e9e7e3",s.fillRect(0,0,i,i);const n=(a,r,p)=>{for(const h of[-i,0,i])for(const l of[-i,0,i])a+h<-p||a+h>i+p||r+l<-p||r+l>i+p||(s.beginPath(),s.arc(a+h,r+l,p,0,$),s.fill())};for(let a=0;a<70;a++)s.fillStyle=`rgba(${e()<.5?"255,252,246":"150,146,140"},0.16)`,n(e()*i,e()*i,8+e()*22);for(let a=0;a<2600;a++){const r=e();s.fillStyle=r<.55?`rgba(90,88,86,${.25+e()*.35})`:r<.9?`rgba(255,255,255,${.35+e()*.4})`:"rgba(60,52,48,0.7)",n(e()*i,e()*i,.45+e()*e()*1.6)}const o=new nt(t);return o.colorSpace=j,o.wrapS=pt,o.wrapT=pt,o.anisotropy=4,o}function oe(i,t,s,e){const n=new xt(Z(e)),o=200,a=[],r=[];for(let l=0;l<=o;l++){const c=D(-110,110,l/o);let m=0,d=.55,u=s;for(let v=0;v<4;v++)m+=d*(1-Math.abs(n.at(c*u,e%17,v*3.7))),d*=.48,u*=2.2;const f=t*(m-.45)*1.25;a.push(c,Math.max(.15,f),i,c,-3,i),r.push(1,0)}const p=[];for(let l=0;l<o;l++){const c=l*2;p.push(c,c+1,c+2,c+2,c+1,c+3)}const h=new Y;return h.setAttribute("position",new F(a,3)),h.setAttribute("aTop",new F(r,1)),h.setIndex(p),h}const wt=`
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
}`,vt=`
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
  tone = mix(tone, vec3(1.0, 0.975, 0.97), vData.y * 0.42);
  float ndl = dot(n, uSunDir);
  vec3 ambient = mix(uGround, uSky, n.y * 0.5 + 0.5);
  vec3 lit = tone * (ambient * 0.66 + uSun * max(ndl, 0.0) * 0.8);
  // Light comes through a petal when the sun is behind it.
  float behind = pow(max(dot(-v, uSunDir), 0.0), 4.0);
  lit += tone * uSun * (max(-ndl, 0.0) * 0.42 + behind * 0.85);
  lit *= 1.0 - 0.07 * exp(-pow((vUv.x - 0.5) * 12.0, 2.0)) * vUv.y;
  lit *= 1.0 - 0.2 * vData.z;
  float f = smoothstep(uFog.x, uFog.y, length(vWorld - cameraPosition));
  gl_FragColor = vec4(mix(lit, uHaze, f), vData.x);
  #include <colorspace_fragment>
}`,ae=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,re=`
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
}`,le=`
attribute float aTop;
varying float vTop;
varying vec3 vWorld;
void main() {
  vTop = aTop;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,he=`
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
}`,ce=`
uniform mat4 uMirror;
varying vec4 vMirror;
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vMirror = uMirror * w;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,ue=`
#define RIPPLES ${rt}
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
  slope *= 0.32;
  slope += vec2(sin(p.x * 1.7 + uTime * 0.35) + sin(p.y * 2.3 - uTime * 0.27),
                cos(p.x * 2.1 - uTime * 0.31) + cos(p.y * 1.3 + uTime * 0.22)) * 0.0016;
  vec3 n = normalize(vec3(-slope.x, 1.0, -slope.y));
  vec3 v = normalize(cameraPosition - vWorld);
  float facing = clamp(dot(n, v), 0.0, 1.0);
  float fresnel = 0.04 + 0.96 * pow(1.0 - facing, 5.0);
  vec4 m = vMirror;
  m.xy += slope * m.w * 0.55;
  // Five taps, wider down than across: still water softens a reflection, and the taps hide its lower resolution.
  vec2 uv = m.xy / m.w;
  vec2 ax = vec2(uTexel.x * 1.3, 0.0);
  vec2 ay = vec2(0.0, uTexel.y * 2.2);
  vec3 reflected = texture2D(uReflection, uv).rgb * 0.36
    + (texture2D(uReflection, uv + ax).rgb + texture2D(uReflection, uv - ax).rgb) * 0.16
    + (texture2D(uReflection, uv + ay).rgb + texture2D(uReflection, uv - ay).rgb) * 0.16;
  float far = smoothstep(1.5, 16.0, length(vWorld.xz - cameraPosition.xz));
  vec3 body = mix(uShallow, uDeep, far);
  vec3 col = mix(body, reflected, clamp(fresnel * 0.85 + 0.3, 0.0, 1.0));
  vec3 h = normalize(uSunDir + v);
  col += uSun * pow(max(dot(n, h), 0.0), 700.0) * 1.6;
  col = mix(col, uHaze, smoothstep(40.0, 120.0, length(vWorld.xz - cameraPosition.xz)));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,pe=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,me=`
uniform sampler2D uMap;
uniform float uTime;
uniform float uPower;
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
  col += uGlass * (0.05 + 0.12 * smoothstep(0.25, 1.0, vUv.y) * smoothstep(1.0, 0.2, vUv.x));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;class de{constructor(){this.target=new Nt(2,2,{type:_t,samples:4}),this.texel=new K(.5,.5),this.camera=new gt,this.matrix=new W,this.normal=new M(0,1,0),this.origin=new M(0,0,0),this.plane=new It,this.clip=new it,this.q=new it,this.eye=new M,this.view=new M,this.look=new M,this.aim=new M,this.rotation=new W}setSize(t,s){const e=Math.max(2,Math.round(t)),n=Math.max(2,Math.round(s));this.target.setSize(e,n),this.texel.set(1/e,1/n)}update(t){const{normal:s,origin:e,eye:n,view:o,look:a,aim:r,rotation:p}=this;n.setFromMatrixPosition(t.matrixWorld),p.extractRotation(t.matrixWorld),o.subVectors(e,n).reflect(s).negate().add(e),a.set(0,0,-1).applyMatrix4(p).add(n),r.subVectors(e,a).reflect(s).negate().add(e);const h=this.camera;h.position.copy(o),h.up.set(0,1,0).applyMatrix4(p).reflect(s),h.lookAt(r),h.near=t.near,h.far=t.far,h.updateMatrixWorld(),h.projectionMatrix.copy(t.projectionMatrix),this.matrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.matrix.multiply(h.projectionMatrix).multiply(h.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(s,e).applyMatrix4(h.matrixWorldInverse);const l=this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant),c=h.projectionMatrix.elements,m=this.q;m.x=(Math.sign(l.x)+c[8])/c[0],m.y=(Math.sign(l.y)+c[9])/c[5],m.z=-1,m.w=(1+c[10])/c[14],l.multiplyScalar(2/l.dot(m)),c[2]=l.x,c[6]=l.y,c[10]=l.z+1-.002,c[14]=l.w,h.projectionMatrixInverse.copy(h.projectionMatrix).invert()}dispose(){this.target.dispose()}}const fe=["1234567890-=","qwertyuiop[]","asdfghjkl;'","zxcvbnm,./"],we={"!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/"};class St{static create(t,s){let e;try{e=new zt({canvas:t,antialias:!s.phone,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}return e.getContext()?new St(e,s):(e.dispose(),null)}constructor(t,s){this.renderer=t,this.options=s,this.palette=s.palette,this.fonts=s.fonts,this.screenCopy=s.screenCopy,this.onQuality=s.onQuality,t.outputColorSpace=j,t.toneMapping=Ct,t.info.autoReset=!1,t.shadowMap.enabled=!0,t.shadowMap.type=At,t.shadowMap.autoUpdate=!1,t.setClearColor(new y(this.palette.horizon),1),this.time=0,this.acc=0,this.width=1,this.height=1,this.dprCap=s.phone?1.5:2,this.quality=0,this.reflectionScale=.5,this.pixelScale=1,this.frameMs=16.7,this.cpuMs=0,this.slowFrames=0,this.frames=0,this.running=!1,this.manual=!1,this.raf=0,this.last=0,this.shadowAge=99,this.pointerAt=new K,this.pointerTime=0,this.parallax=new K,this.kick=0,this.kickSpeed=0,this.shake=-10,this.cheer=-10,this.screenState={kind:"logo"},this.screenSince=0,this.screenDrawn=-1,this.screenBusy=!0;const e=new Pt;if(this.scene=e,this.camera=new gt(30,1,.05,260),this.camera.position.copy(V),this.camera.lookAt(B),this.mirror=new de,this.colors={sky:new y(this.palette.sky),horizon:new y(this.palette.horizon),glow:new y(this.palette.glow),sun:new y(this.palette.sun),white:new y("#fff6ea")},this.sunDir=new M(0,.1,-1).normalize(),this.sunColor=this.colors.sun.clone(),this.skyNow=this.colors.sky.clone(),this.groundColor=new y(this.palette.water).lerp(new y(this.palette.horizon),.3),this.buildSky(),this.buildHills(),this.buildWater(),this.buildLights(),this.buildStone(),this.buildComputer(),this.buildBranch(),this.sim=new jt({seed:s.seed,count:s.petalCount,wind:s.wind,blossoms:this.blossomWorld}),this.buildPetals(this.sim.capacity),this.updateBranch(0,0),this.updateLight(0),typeof document<"u"&&document.fonts){const n=[`600 38px ${this.fonts.sans}`,`500 34px ${this.fonts.mono}`].map(o=>document.fonts.load(o).catch(()=>[]));Promise.all(n).then(()=>this.screenBusy=!0)}}buildSky(){this.skyUniforms={uZenith:{value:new y},uHorizon:{value:new y(this.palette.horizon)},uGlow:{value:new y(this.palette.glow)},uSun:{value:new y(this.palette.sun)},uSunDir:{value:this.sunDir}};const t=new A(new Dt(180,48,24),new U({uniforms:this.skyUniforms,vertexShader:ae,fragmentShader:re,side:Et,depthWrite:!1}));t.renderOrder=-10,t.frustumCulled=!1,this.sky=t,this.scene.add(t)}buildHills(){const t=[{z:-78,height:9.5,frequency:.03,seed:11,far:.62,color:this.palette.hills[0]},{z:-50,height:5.2,frequency:.055,seed:23,far:.42,color:this.palette.hills[1]},{z:-30,height:1.9,frequency:.11,seed:37,far:.24,color:this.palette.hills[2]}];this.hillUniforms=[];for(const s of t){const e={uColor:{value:new y(s.color)},uHaze:{value:new y(this.palette.horizon)},uSun:{value:this.sunColor},uSunDir:{value:this.sunDir},uFar:{value:s.far}};this.hillUniforms.push(e);const n=new A(oe(s.z,s.height,s.frequency,s.seed),new U({uniforms:e,vertexShader:le,fragmentShader:he}));n.frustumCulled=!1,this.scene.add(n)}}buildWater(){this.ripples=Array.from({length:rt},()=>new it(0,0,-100,0)),this.rippleNext=0;const t=new y(this.palette.water);this.waterUniforms={uReflection:{value:this.mirror.target.texture},uTexel:{value:this.mirror.texel},uMirror:{value:this.mirror.matrix},uRipples:{value:this.ripples},uTime:{value:0},uDeep:{value:t},uShallow:{value:t.clone().lerp(new y(this.palette.sky),.25).multiplyScalar(.8)},uHaze:{value:new y(this.palette.horizon)},uSun:{value:this.sunColor},uSunDir:{value:this.sunDir}};const s=new A(new O(320,320,1,1),new U({uniforms:this.waterUniforms,vertexShader:ce,fragmentShader:ue}));s.rotation.x=-Math.PI/2,s.position.set(0,0,-80),s.frustumCulled=!1,this.water=s,this.scene.add(s)}buildLights(){this.sunLight=new Rt(this.sunColor,2.4),this.sunLight.castShadow=!0;const t=this.sunLight.shadow,s=this.options.phone?1024:2048;t.mapSize.set(s,s),t.camera.left=-.95,t.camera.right=.95,t.camera.top=.95,t.camera.bottom=-.95,t.camera.near=.5,t.camera.far=14,t.bias=-6e-4,t.normalBias=.012,t.radius=3,this.sunLight.target.position.set(L.computer.x,.3,L.computer.z),this.scene.add(this.sunLight,this.sunLight.target),this.hemi=new Lt(new y(this.palette.sky),this.groundColor,3),this.scene.add(this.hemi)}buildStone(){const t=new A(ie(this.palette),new E({vertexColors:!0,map:ne(),roughness:.72,metalness:0}));t.receiveShadow=!0,t.castShadow=!0,this.scene.add(t)}buildComputer(){const t=this.palette,s=new Q;s.position.set(L.computer.x,_.base,L.computer.z),s.rotation.y=L.computer.yaw;const e=new E({color:t.computer,roughness:.48,metalness:0}),n=new E({color:t.keys,roughness:.6,metalness:0}),o=new E({color:"#1d2123",roughness:.55,metalness:0}),a=(S,z,P,bt,kt,Tt=!0)=>{const N=new A(S,z);return N.position.set(P,bt,kt),N.castShadow=Tt,N.receiveShadow=!0,s.add(N),N},r=_.base;a(q(.58,.1,.5,.02,.01),e,0,.05,0),a(new R(.15,.011,.01),o,-.13,.058,.25),a(new R(.15,.011,.01),o,.07,.058,.25),a(new R(.03,.006,.006),n,.21,.058,.252),a(new R(.56,.004,.004),n,0,.022,.251,!1);const p=_.monitor.top-r,h=.43,l=p-h/2;a(q(.51,h,.455,.045,.014),e,0,l,-.0225),a(q(.36,.34,.24,.06,.02),e,0,l-.02,-.33);for(let S=0;S<6;S++)a(new R(.2,.004,.012),o,0,p-.001,-.21+S*.026,!1);const c=.205,m=l+.025;a(q(.43,.33,.012,.035,.004),o,0,m,c);const d=new O(.38,.285,18,14),u=d.attributes.position;for(let S=0;S<u.count;S++){const z=u.getX(S)/.19,P=u.getY(S)/.1425;u.setZ(S,.011*(1-z*z*.8)*(1-P*P*.8))}d.computeVertexNormals(),this.screenCanvas=typeof document<"u"?document.createElement("canvas"):null,this.screenCanvas&&(this.screenCanvas.width=ot.width,this.screenCanvas.height=ot.height),this.screenContext=this.screenCanvas?.getContext("2d")??null,this.screenTexture=new nt(this.screenCanvas??void 0),this.screenTexture.colorSpace=j,this.screenTexture.generateMipmaps=!1,this.screenTexture.minFilter=Ft,this.screenTexture.anisotropy=4,this.screenUniforms={uMap:{value:this.screenTexture},uTime:{value:0},uPower:{value:1.15},uGlass:{value:new y(t.sky).multiplyScalar(.6)}};const f=new A(d,new U({uniforms:this.screenUniforms,vertexShader:pe,fragmentShader:me}));f.position.set(0,m,c+.0075),s.add(f);const v=typeof document<"u"?document.createElement("canvas"):null;if(v){v.width=64,v.height=64;const S=v.getContext("2d");S&&H(S,32,30,15,"#7d7a72","#7d7a72",.7)}this.badgeTexture=new nt(v??void 0),this.badgeTexture.colorSpace=j;const b=new A(new O(.034,.034),new E({map:this.badgeTexture,transparent:!0,roughness:.5}));b.position.set(-.17,m-.182,c+5e-4),s.add(b),this.led=new A(new R(.012,.006,.004),new Ut({color:"#8fe3a6"})),this.led.position.set(.185,m-.183,c+.002),s.add(this.led),this.screenLight=new Wt(new y(t.screenAccent),.5,1.6,2),this.screenLight.position.set(0,m,c+.18),s.add(this.screenLight);const g=new Q;g.position.set(0,_.keyboardBase-r,.42),g.rotation.x=.06,s.add(g);const w=new A(q(.47,.022,.16,.012,.006),e);w.position.y=.011,w.castShadow=!0,w.receiveShadow=!0,g.add(w),this.keys=[];const x=.031;fe.forEach((S,z)=>{for(let P=0;P<S.length;P++)this.keys.push({char:S[P],x:-.2+P*x+z*.008,z:-.054+z*.03,w:1,at:-10})}),this.keys.push({char:" ",x:0,z:.066,w:6.2,at:-10}),this.keys.push({char:"Backspace",x:.19,z:-.054,w:1.7,at:-10}),this.keys.push({char:"Enter",x:.19,z:.006,w:1.7,at:-10});const k=new E({color:"#ffffff",roughness:.55});this.keyMesh=new J(new R(.026,.012,.026),k,this.keys.length),this.keyMesh.castShadow=!0,this.keyMesh.receiveShadow=!0;const T=new y(t.keys),C=new y(t.petalDeep).lerp(new y(t.keys),.35);this.keys.forEach((S,z)=>this.keyMesh.setColorAt(z,S.char==="Enter"?C:T)),this.keyMatrix=new W,this.keys.forEach((S,z)=>this.placeKey(z,0)),g.add(this.keyMesh);const G=new tt([new M(-.2,_.keyboardBase-r+.012,.34),new M(-.27,.006,.33),new M(-.34,.005,.27),new M(-.33,.006,.2),new M(-.29,.03,.16)]);a(new yt(G,32,.0055,6,!1),o,0,0,0),this.computer=s,this.scene.add(s)}placeKey(t,s){const e=this.keys[t];this.keyMatrix.makeScale(e.w,1,1),this.keyMatrix.setPosition(e.x,.028-s*.006,e.z),this.keyMesh.setMatrixAt(t,this.keyMatrix)}buildBranch(){const t=this.palette,s=new M(1.5,1.35,.55),e=new Q;e.position.copy(s);const n=(w,x,k)=>new M(w,x,k).sub(s),o=new tt([n(1.5,1.35,.55),n(1.12,1.13,.68),n(.82,1,.8),n(.52,.95,.9),n(.26,.94,.98),n(.04,.97,1.04)]),a=[{from:.3,points:[n(1,1,.8),n(.95,.9,.86)]},{from:.48,points:[n(.66,1.04,.78),n(.56,1.09,.72)]},{from:.62,points:[n(.47,.88,.95),n(.43,.8,1)]},{from:.78,points:[n(.22,1,.93),n(.12,1.05,.88)]},{from:.9,points:[n(.08,.9,1.07),n(0,.86,1.1)]}],r=new E({color:t.bark,roughness:.92,metalness:0}),p=[ft(o,64,.03,.007)],h=[o];for(const w of a){const x=o.getPointAt(w.from),k=new tt([x,...w.points]);h.push(k),p.push(ft(k,24,.01,.003))}for(const w of p){const x=new A(w,r);x.castShadow=!1,e.add(x)}const l=Z(725077),c=[];h.forEach((w,x)=>{const k=x===0?.32:.25,T=x===0?9:5;for(let C=0;C<T;C++)c.push(w.getPointAt(k+(1-k)*(C+l()*.6)/T))});const m=[];for(const w of c){const x=2+Math.floor(l()*3);for(let k=0;k<x;k++){const T=new M((l()-.5)*.06,(l()-.7)*.045,(l()-.4)*.05),C=new M((l()-.5)*1.4,(l()-.65)*1.2,.6+l()).normalize();m.push({at:w.clone().add(T),facing:C,size:.021+l()*.012,tint:l()})}}const d=new Float32Array(m.length*4),u=ee();u.setAttribute("aData",new lt(d,4)),this.flowerUniforms=this.petalUniforms(t.petalDeep,t.blossom);const f=new J(u,new U({uniforms:this.flowerUniforms,vertexShader:wt,fragmentShader:vt,side:ht}),m.length),v=new W,b=new ct,g=new M(0,0,1);m.forEach((w,x)=>{b.setFromUnitVectors(g,w.facing),v.compose(w.at,b,new M(w.size,w.size,w.size)),f.setMatrixAt(x,v),d[x*4]=1,d[x*4+1]=w.tint}),e.add(f),this.blossomLocal=m.map(w=>w.at),this.blossomWorld=new Float32Array(m.length*3),this.branch=e,this.scene.add(e)}petalUniforms(t,s){return{uBase:{value:new y(t)},uTip:{value:new y(s)},uSunDir:{value:this.sunDir},uSun:{value:this.sunColor},uSky:{value:this.skyNow},uGround:{value:this.groundColor},uHaze:{value:new y(this.palette.horizon)},uFog:{value:new K(9,60)}}}buildPetals(t){const s=Mt();this.petalData=new lt(new Float32Array(t*4),4),this.petalData.setUsage(ut),s.setAttribute("aData",this.petalData),this.petalUniformValues=this.petalUniforms(this.palette.petalDeep,this.palette.petal),this.petals=new J(s,new U({uniforms:this.petalUniformValues,vertexShader:wt,fragmentShader:vt,side:ht,transparent:!0,depthWrite:!1}),t),this.petals.instanceMatrix.setUsage(ut),this.petals.frustumCulled=!1,this.petals.count=0,this.order=new Uint16Array(t),this.depth=new Float32Array(t),this.tmp={m:new W,q:new ct,e:new Gt,p:new M,s:new M,v:new M,vp:new W,right:new M,up:new M},this.scene.add(this.petals)}updateLight(t){const s=.5-.5*Math.cos(t/60*$),e=D(.062,.15,s),n=D(-.03,.03,s);this.sunDir.set(Math.sin(n)*Math.cos(e),Math.sin(e),-Math.cos(n)*Math.cos(e)).normalize(),this.sunColor.copy(this.colors.sun).lerp(this.colors.white,s*.55),this.skyNow.copy(this.colors.sky).lerp(this.colors.white,s*.08),this.skyUniforms.uZenith.value.copy(this.skyNow),this.skyUniforms.uSun.value.copy(this.sunColor),this.skyUniforms.uGlow.value.copy(this.colors.glow).lerp(this.colors.horizon,s*.35),this.sunLight.color.copy(this.sunColor),this.sunLight.intensity=D(2.2,2.9,s),this.sunLight.position.copy(this.sunLight.target.position).addScaledVector(this.sunDir,7),this.hemi.color.copy(this.skyNow)}updateCamera(t,s){const e=1-Math.exp(-t*2.5);this.parallax.x+=(this.pointerAt.x-this.parallax.x)*e,this.parallax.y+=(this.pointerAt.y-this.parallax.y)*e;const n=this.height<420?.88:1,o=this.camera;o.position.set(V.x+Math.sin(s*.071)*.05+this.parallax.x*.09,V.y+Math.sin(s*.053)*.014+this.parallax.y*.03,D(B.z,V.z,n)),o.lookAt(B.x+this.parallax.x*.03,B.y,B.z),o.updateMatrixWorld(),this.sky.position.copy(o.position)}updateBranch(t,s){this.kickSpeed+=(-this.kick*38-this.kickSpeed*5.5)*t,this.kick+=this.kickSpeed*t;const e=this.sim?this.sim.gust:0,n=this.branch;n.rotation.z=.012*Math.sin(s*.8)+.007*Math.sin(s*1.9+1)+this.kick+e*.03*Math.sin(s*6.5),n.rotation.x=.008*Math.sin(s*.6+.4)+this.kick*.4,n.updateMatrixWorld(!0);const o=Jt;this.blossomLocal.forEach((a,r)=>{o.copy(a).applyMatrix4(n.matrixWorld),this.blossomWorld[r*3]=o.x,this.blossomWorld[r*3+1]=o.y,this.blossomWorld[r*3+2]=o.z}),this.sim&&this.sim.setBlossoms(this.blossomWorld)}updateKeys(t){let s=!1;this.keys.forEach((e,n)=>{const o=t-e.at;if(o<0||o>.3){e.down&&(e.down=!1,this.placeKey(n,0),s=!0);return}e.down=!0;const a=o<.05?o/.05:Math.max(0,1-(o-.05)/.22);this.placeKey(n,a),s=!0}),s&&(this.keyMesh.instanceMatrix.needsUpdate=!0)}updateScreen(t){const s=t-this.screenSince,e=this.screenState,n=t-this.shake<.5;this.screenUniforms.uTime.value=t,this.screenUniforms.uPower.value=(e.kind==="welcome"?1.25:1.12)*(n?.85+.15*Math.sin(t*90):1);const o={pending:Math.sin(t*9)>0?"#ffcf7a":"#6b5a3a",error:"#ff7b66",welcome:"#fff4dc"};this.led.material.color.set(o[e.kind]??"#8fe3a6");const a=Math.max(0,1-(t-this.cheer)/2.5);if(this.screenLight.intensity=.45+(e.kind==="welcome"?.35:0)+a*.6,this.screenLight.color.set(e.kind==="error"?this.palette.screenError:this.palette.screenAccent),!this.screenContext)return;const r=Math.floor(t*30);!this.screenBusy&&(r===this.screenDrawn||!Ot(e,s))||(this.screenDrawn=r,this.screenBusy=!1,Zt(this.screenContext,e,s,t,this.screenCopy,{background:this.palette.screen,text:this.palette.screenText,dim:this.palette.screenDim,accent:this.palette.screenAccent,error:this.palette.screenError},this.fonts),this.screenTexture.needsUpdate=!0)}updatePetals(){const t=this.sim,{m:s,q:e,e:n,p:o,s:a}=this.tmp,r=this.camera.position,p=this.order,h=this.depth;let l=0;for(let u=0;u<t.capacity;u++){if(t.mode[u]===Kt.IDLE||t.alpha[u]<=.004)continue;const f=t.x[u]-r.x,v=t.y[u]-r.y,b=t.z[u]-r.z;h[u]=f*f+v*v+b*b,p[l++]=u}const c=p.subarray(0,l).sort((u,f)=>h[f]-h[u]),m=this.petals.instanceMatrix.array,d=this.petalData.array;for(let u=0;u<l;u++){const f=c[u];n.set(t.rx[f],t.ry[f],t.rz[f]),e.setFromEuler(n),o.set(t.x[f],t.y[f],t.z[f]);const v=t.size[f]*Qt;a.set(v,v,v),s.compose(o,e,a),s.toArray(m,u*16),d[u*4]=t.alpha[f],d[u*4+1]=t.tint[f],d[u*4+2]=t.wet[f],d[u*4+3]=0}this.petals.count=l,this.petals.instanceMatrix.needsUpdate=!0,this.petalData.needsUpdate=!0}ripple(t,s,e){this.ripples[this.rippleNext].set(t,s,this.time,e),this.rippleNext=(this.rippleNext+1)%rt}frame(t){const s=performance.now(),e=this.renderer;e.info.reset(),this.acc+=t;let n=0;for(;this.acc>=et-1e-6&&n<5;)this.sim.step(et),this.acc-=et,n++;n===5&&(this.acc=0),this.time+=t;const o=this.time;this.sim.drainLandings((a,r,p)=>this.ripple(a,r,p)),this.updateLight(o),this.updateCamera(t,o),this.updateBranch(t,o),this.updateKeys(o),this.updateScreen(o),this.updatePetals(),this.waterUniforms.uTime.value=o,++this.shadowAge>12&&(e.shadowMap.needsUpdate=!0,this.shadowAge=0),this.mirror.update(this.camera),this.water.visible=!1,e.setRenderTarget(this.mirror.target),e.clear(),e.render(this.scene,this.mirror.camera),e.setRenderTarget(null),this.water.visible=!0,e.render(this.scene,this.camera),this.cpuMs=D(this.cpuMs,performance.now()-s,.1)}loop=t=>{this.raf=requestAnimationFrame(this.loop);const s=this.last?t-this.last:16.7;this.last=t,this.frame(Math.min(s,100)/1e3),this.adapt(s)};adapt(t){this.manual||(this.frames++,this.frameMs=D(this.frameMs,t,.08),!(this.frames<45||t>250)&&(this.slowFrames=this.frameMs>24?this.slowFrames+1:Math.max(0,this.slowFrames-2),!(this.slowFrames<50||this.quality>=3)&&(this.slowFrames=0,this.frames=0,this.quality++,this.quality===1&&(this.reflectionScale=.25),this.quality===2&&(this.sim.density=.5),this.quality===3&&(this.pixelScale=.75),this.setSize(this.width,this.height),this.onQuality?.(this.qualityState()))))}qualityState(){return{level:this.quality,reflectionScale:this.reflectionScale,density:this.sim.density,pixelRatio:this.renderer.getPixelRatio()}}setSize(t,s){this.width=Math.max(1,t),this.height=Math.max(1,s);const e=Math.min(typeof devicePixelRatio=="number"?devicePixelRatio:1,this.dprCap)*this.pixelScale;this.renderer.setPixelRatio(e),this.renderer.setSize(this.width,this.height,!1);const n=this.width/this.height;this.camera.aspect=n,this.camera.fov=n<1?2*Math.atan(Math.tan(15*Math.PI/180)/n)*180/Math.PI:30,this.camera.updateProjectionMatrix(),this.mirror.setSize(this.width*e*this.reflectionScale,this.height*e*this.reflectionScale),(!this.running||this.manual)&&this.render()}setRunning(t){this.manual||t!==this.running&&(this.running=t,cancelAnimationFrame(this.raf),t&&(this.last=0,this.raf=requestAnimationFrame(this.loop)))}render(){this.frame(0)}setManual(t){this.manual=t,cancelAnimationFrame(this.raf),this.running=!1,t||this.setRunning(!0)}advance(t){this.frame(t)}setScreen(t){if(Xt(t,this.screenState))return;const s=t.kind!==this.screenState.kind;this.screenState=t,s?this.screenSince=this.time:this.screenSince=Math.min(this.screenSince,this.time-.33),t.kind==="error"&&s&&(this.shake=this.time),this.screenBusy=!0}keystroke(t){this.sim.queueRelease(1),this.kickSpeed+=.05;const s=t?.length===1?we[t]??t.toLowerCase():t;let e=this.keys.findIndex(n=>n.char===s);e<0&&(e=Math.abs(Math.floor(Math.sin(this.time*97.3)*1e4))%this.keys.length),this.keys[e].at=this.time}celebrate(){this.sim.burst(40),this.kickSpeed+=.55,this.cheer=this.time;const{stone:t}=L;for(let s=0;s<4;s++){const e=s/4*$+.4;this.ripple(t.x+Math.cos(e)*.15,t.z+Math.sin(e)*.12,2.2)}}pointer(t,s,e,n,o){if(this.manual&&(o=this.time-this.pointerTime),this.pointerTime=this.time,this.pointerAt.set(t,s),Math.abs(e)+Math.abs(n)<1e-5)return;const a=this.camera,{vp:r,right:p,up:h}=this.tmp;r.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),p.setFromMatrixColumn(a.matrixWorld,0),h.setFromMatrixColumn(a.matrixWorld,1),this.sim.stir({x:t,y:s,dx:e,dy:n,dt:o,viewProjection:r.elements,eye:a.position,right:p,up:h,tanHalfFov:Math.tan(a.fov*Math.PI/360),aspect:a.aspect,radius:.26})}stats(){const t=this.renderer.info.render;return{drawCalls:t.calls,triangles:t.triangles,petals:this.sim.active,frameMs:Math.round(this.frameMs*10)/10,cpuMs:Math.round(this.cpuMs*100)/100,...this.qualityState()}}dispose(){cancelAnimationFrame(this.raf),this.running=!1,this.scene.traverse(t=>{t.geometry&&t.geometry.dispose();const s=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const e of s){for(const n of Object.values(e))n&&n.isTexture&&n.dispose();e.dispose()}}),this.screenTexture.dispose(),this.badgeTexture.dispose(),this.mirror.dispose(),this.sunLight.shadow.map?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss()}}export{St as PetalScene};
