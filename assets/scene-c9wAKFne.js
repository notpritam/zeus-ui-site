import{x as L,m as Te,R as Pe,y as I,z as Ue,B as M,W as Be,E as Le,F as _e,V as X,i as We,G as Ce,H as x,M as R,I as Ge,S as H,J as He,K as fe,h as Z,Q as le,U as ve,X as Ie,Y as se,Z as B,j as ge,L as Ae,_ as qe,a0 as oe,a1 as q,a2 as ae,a3 as Ne,a4 as we,a5 as ye,a6 as xe,a7 as ke,a8 as Ve,o as $e,a9 as je,aa as Xe,ab as te,ac as _,ad as Ye,ae as Ze,af as be,q as Oe,ag as Ke,ah as Qe,ai as Je}from"./template-shell-CDYDSQF_.js";import{P as et,a as E,b as V,s as ce,c as tt,d as re,e as it,f as ie,N as me}from"./zephyr-petal-signup-CnLNeaoq.js";import"./index-DhitjEVL.js";import"./index-DmVofmeD.js";import"./recipe-BsJKGzY2.js";import"./react-CaL5BcHr.js";import"./index-CXHAiFMv.js";import"./icon-button-B8oMnMQg.js";import"./Specimen-BNULXo3T.js";import"./theme-D6tMfgSk.js";import"./index-AnBm5AMO.js";import"./close-button-CIslG_Dk.js";import"./number-BJRdc-Co.js";import"./useLoadMoreSentinel-CjT8xNQo.js";import"./I18nProvider-YUxZCjTA.js";import"./useButton-C6ZDfbql.js";import"./usePress-DBe4mfQR.js";import"./textSelection-CA4_1qyq.js";import"./inertValue-Em4j0lMe.js";import"./NumberFormatter-H2sZ7Z8O.js";import"./dropdown-CBYVebS7.js";import"./Dialog-B9nEeL1J.js";import"./useOverlayTriggerState-CQROrWAk.js";import"./FocusScope-fB5ng0Gn.js";import"./VisuallyHidden-Be-1aYa_.js";import"./animation-AXCiDyj0.js";import"./menu-styles-BqNUlDsC.js";import"./use-dismiss-on-outside-press-Ch3A3lx2.js";import"./select-CM0OA9ll.js";import"./useCollection-DVl1aIxF.js";import"./useDescription-CPULwRhF.js";import"./useCollator-D_4OtJMa.js";import"./SelectionIndicator-DQDo5tvJ.js";import"./SharedElementTransition-CUfy1aBo.js";import"./useSelectableList-C-wbT3o7.js";import"./useListState-B1z_yeyF.js";import"./chevrons-B6FqBBjn.js";import"./switch-D81sXkSs.js";import"./useToggle-C2t7zxh3.js";import"./useSlot-aJP229by.js";import"./useToggleState-CL0J9qzY.js";import"./shared-CuBwcW9x.js";import"./useUpdateEffect-BRZYmbVd.js";import"./date-picker-BRCjLT1r.js";import"./chip-BDYk8a6h.js";import"./checkbox-B0pvx0Kg.js";import"./Checkbox-wRkGuvoI.js";import"./file-upload-ZGOXtaT7.js";import"./pagination-DmRmOFYm.js";import"./tooltip-Bn21_LVf.js";import"./badge-zEPxuyB9.js";import"./kbd-8MIBxGK_.js";import"./avatar-BDH2Ld35.js";import"./breadcrumb-CoJns8LY.js";import"./segmented-control-B_t3ewXc.js";import"./use-selection-bounds-PaROVM8t.js";import"./artemis-scope-DNeU3Lkt.js";import"./home-dashboard-nlrKn7F5.js";import"./Modal-DbYO2nnm.js";import"./contributions-card-saaIxJVf.js";import"./chart-cell-C1-XDR9g.js";import"./pro-chart-BAmpnxBW.js";import"./use-count-up-hpscIsDl.js";import"./use-reduced-motion-CX3pnyKS.js";import"./chart-bar-track-DkaRSW6d.js";import"./stat-cards-w2SrpCEH.js";import"./data-table-ZiKUpu_t.js";import"./table-DQcmS3Rq.js";import"./TreeDropTargetDelegate-BsLn_Yve.js";import"./useHasTabbableChild-ClsOtZ5N.js";import"./status-dot-C8pHRdUa.js";import"./Bar-C3y54XZ4.js";import"./graphicalItemSelectors-rpZfeQ90.js";import"./chart-active-dot-lKuopE7m.js";import"./Dot-D6XIK9yL.js";import"./Area-DYLSHHi3.js";import"./recent-hires-card-RdJ2daUL.js";const st=`
varying vec3 vBarkPosition;
varying vec3 vBarkNormal;
varying mat3 vBarkNormalMatrix;
vec3 barkWeights(vec3 n) {
  vec3 w=pow(abs(n),vec3(4.)); return w / max(dot(w,vec3(1.)),.0001);
}
vec4 barkSample(sampler2D tex, vec3 p, vec3 n, vec3 w) {
  return texture2D(tex,vec2(-p.z*sign(n.x),p.y))*w.x
    +texture2D(tex,vec2(p.x,-p.z*sign(n.y)))*w.y
    +texture2D(tex,vec2(p.x*sign(n.z),p.y))*w.z;
}
float barkNoise(vec3 p) {
  return .5+.22*sin(p.x*11.+sin(p.y*9.))*sin(p.z*13.-p.y*5.)
    +.13*sin(p.x*43.+p.y*31.)*sin(p.z*37.+p.y*17.);
}
`;function ot({path:s,tint:e,isDisposed:i,onLoad:t,loader:o=new Te}){const a=new L({color:"#4d3931",roughness:.95});a.userData.barkReady=!1;const l=[];let n=0;const d=()=>{++n!==3||i()||(a.map=l[0],a.normalMap=l[1],a.roughnessMap=a.aoMap=l[2],a.aoMapIntensity=.75,a.color.set(e).lerp(new M("#ffffff"),.88),a.userData.barkReady=!0,a.needsUpdate=!0,t())},h=(s||"https://myzeusui.com/assets/zephyr/bark/").replace(/\/?$/,"/");for(const[r,c]of["color.webp","normal.webp","arm.webp"].entries()){const u=o.load(h+c,m=>{if(i()){m.dispose();return}d()},void 0,()=>{});u.wrapS=u.wrapT=Pe,u.anisotropy=4,u.colorSpace=r===0?I:Ue,l.push(u)}return a.addEventListener("dispose",()=>l.forEach(r=>r.dispose())),a.onBeforeCompile=r=>{r.vertexShader=`varying vec3 vBarkPosition; varying vec3 vBarkNormal;
      varying mat3 vBarkNormalMatrix;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      vBarkPosition=position+vec3(1.52,.27,-.38);
      vBarkNormal=normal;
      vBarkNormalMatrix=normalMatrix;
    `),r.fragmentShader=st+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`
      vec3 barkN=normalize(vBarkNormal), barkW=barkWeights(barkN);
      vec3 barkP=vBarkPosition/1.6;
      float barkGrowth=(1.-smoothstep(.23,.67,vBarkPosition.y))
        *smoothstep(.35,.69,barkNoise(vBarkPosition*2.3));
      // Damp, occluded bark continues over the root flares. Their sun-facing
      // facets should not read as a separate cream-coloured stump.
      float barkFoot=1.-smoothstep(.28,.72,vBarkPosition.y);
      float barkRoot=barkFoot*(1.-smoothstep(1.63,1.79,vBarkPosition.x));
      float barkJoin=exp(-length(vBarkPosition-vec3(1.43,.99,-.32))*16.)
        +exp(-length(vBarkPosition-vec3(1.12,1.47,-.18))*20.);
      #ifdef USE_MAP
        diffuseColor *= barkSample(map,barkP,barkN,barkW);
      #endif
      vec3 barkSurface=vec3(1.,.95,0.);
      #ifdef USE_ROUGHNESSMAP
        barkSurface=barkSample(roughnessMap,barkP,barkN,barkW).rgb;
      #endif
      diffuseColor.rgb*=mix(.78,1.,barkSurface.r);
      // A low, irregular moss mask is part of the bark, never a decal.
      diffuseColor.rgb *= mix(vec3(1.),vec3(.48,.65,.27),barkGrowth*.72);
      diffuseColor.rgb *= mix(vec3(1.),vec3(.55,.47,.39),barkFoot);
      diffuseColor.rgb *= mix(1.,.3,barkRoot);
      diffuseColor.rgb *= mix(vec3(.85,.74,.69),vec3(1.06,1.06,1.02),barkNoise(vBarkPosition*1.7))
        * (1.-min(.35,barkJoin*.4))
        * mix(.64,1.,smoothstep(.12,.43,vBarkPosition.y));
    `),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
      float roughnessFactor=roughness;
      #ifdef USE_ROUGHNESSMAP
        roughnessFactor*=clamp(barkSurface.g,.56,1.);
      #endif
      roughnessFactor=mix(roughnessFactor,.98,barkGrowth);
      roughnessFactor=mix(roughnessFactor,1.,barkFoot);
    `),r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_maps>",`
      #ifdef USE_NORMALMAP
        vec3 nx=texture2D(normalMap,vec2(-barkP.z*sign(barkN.x),barkP.y)).xyz*2.-1.;
        vec3 ny=texture2D(normalMap,vec2(barkP.x,-barkP.z*sign(barkN.y))).xyz*2.-1.;
        vec3 nz=texture2D(normalMap,vec2(barkP.x*sign(barkN.z),barkP.y)).xyz*2.-1.;
        nx.xy*=1.6; ny.xy*=1.6; nz.xy*=1.6;
        // Whiteout blends preserve the tube's curved normal with a neutral map.
        vec3 tx=vec3(barkN.x*nx.z,barkN.y+nx.y,barkN.z-nx.x*sign(barkN.x));
        vec3 ty=vec3(barkN.x+ny.x,barkN.y*ny.z,barkN.z-ny.y*sign(barkN.y));
        vec3 tz=vec3(barkN.x+nz.x*sign(barkN.z),barkN.y+nz.y,barkN.z*nz.z);
        normal=normalize(vBarkNormalMatrix*normalize(tx*barkW.x+ty*barkW.y+tz*barkW.z));
      #endif
    `),r.fragmentShader=r.fragmentShader.replace("#include <aomap_fragment>",`
      #ifdef USE_AOMAP
        float ambientOcclusion=mix(1.,barkSurface.r,aoMapIntensity);
        reflectedLight.indirectDiffuse*=ambientOcclusion;
        reflectedLight.indirectSpecular*=ambientOcclusion;
      #endif
    `)},a.customProgramCacheKey=()=>"zephyr-sakura-bark-2",a}const he={width:512,height:384},J=Math.PI*2,ue=s=>Math.min(1,Math.max(0,s)),Me=s=>1-(1-ue(s))**3;function $(s,e,i,t,o){s.font=i(t);const a=s.measureText(e).width;a>o&&(s.font=i(Math.max(10,Math.floor(t*o/a))))}function Y(s,e,i,t,o,a,l=.7){const n=i+t*.62,d=Math.max(2,t*.16);s.save(),s.beginPath(),s.rect(e-t*3,i-t*4,t*6,t*4+t*.62-d),s.clip(),s.fillStyle=o,s.beginPath(),s.arc(e,i+(1-l)*t*.9,t,0,J),s.fill(),s.restore(),s.fillStyle=a;const h=Math.max(2,t*.15);s.beginPath(),s.roundRect(e-t*1.55,n-h/2,t*3.1,h,h/2),s.fill()}function at(s,e,i){const t=[];let o="";for(const a of e.split(/\s+/).filter(Boolean)){const l=o?`${o} ${a}`:a;s.measureText(l).width>i&&o?(t.push(o),o=a):o=l}return o&&t.push(o),t.slice(0,3)}function ne(s,e,i,t,o,a){const l=s.createRadialGradient(e,i,0,e,i,t);l.addColorStop(0,o),l.addColorStop(1,"transparent"),s.globalAlpha=a,s.fillStyle=l,s.fillRect(e-t,i-t,t*2,t*2),s.globalAlpha=1}function rt(s,e,i,t,o,a,l){const{width:n,height:d}=he;s.save(),s.fillStyle=a.background,s.fillRect(0,0,n,d),s.textAlign="center",s.textBaseline="alphabetic";const h=i<.6||Math.floor(t*1.8)%2===0,r=54,c=n-54;switch(e.kind){case"logo":{const u=.62+.08*Math.sin(t*.5);ne(s,n/2,150,150,a.accent,.16),Y(s,n/2,148,44,a.accent,a.text,u),s.fillStyle=a.text,$(s,o.brand,m=>`600 ${m}px ${l.sans}`,48,c-r),s.fillText(o.brand,n/2,270),s.fillStyle=a.dim,$(s,o.tagline,m=>`400 ${m}px ${l.sans}`,24,c-r),s.fillText(o.tagline,n/2,310);break}case"email":case"password":{s.textAlign="left",s.fillStyle=a.dim,s.font=`500 23px ${l.mono}`,s.fillText(e.kind==="email"?o.email:o.password,r,124),Y(s,c-20,104,15,a.accent,a.dim,.7),s.fillStyle=a.text;const u=214;let m=r;if(e.kind==="email"){s.font=`500 46px ${l.mono}`;const p=e.text,f=s.measureText(p).width,w=c-r-30;s.save(),s.beginPath(),s.rect(r-2,u-56,c-r+4,76),s.clip();const k=Math.max(0,f-w);s.fillText(p,r-k,u),s.restore(),m=r+Math.min(f,w)+5}else{const p=Math.min(e.length,12);for(let f=0;f<p;f++)s.beginPath(),s.arc(r+13+f*32,u-15,10.5,0,J),s.fill();m=r+p*32+6}h&&(s.fillStyle=a.accent,s.fillRect(m,u-40,19,50)),s.fillStyle=a.dim,s.fillRect(r,u+30,c-r,3);break}case"pending":{const u=.5+.5*Math.sin(t*4);ne(s,n/2,132,120,a.accent,.1+.08*u),Y(s,n/2,130,30,a.accent,a.text,.55+.25*u),s.fillStyle=a.text,$(s,o.pending,P=>`500 ${P}px ${l.sans}`,34,c-r),s.fillText(o.pending,n/2,240);const m=280,p=n/2-m/2;s.fillStyle=a.dim,s.globalAlpha=.45,s.beginPath(),s.roundRect(p,272,m,8,4),s.fill(),s.globalAlpha=1;const f=i*.9%1.4,w=p+m*ue(f-.4),k=p+m*ue(f);s.fillStyle=a.accent,k-w>1&&(s.beginPath(),s.roundRect(w,272,k-w,8,4),s.fill());break}case"error":{s.strokeStyle=a.error,s.lineWidth=4,s.beginPath(),s.arc(n/2,112,26,0,J),s.stroke(),s.fillStyle=a.error,s.fillRect(n/2-2.5,98,5,18),s.beginPath(),s.arc(n/2,125,3.2,0,J),s.fill(),s.font=`500 34px ${l.sans}`,at(s,e.message,c-r).forEach((m,p)=>s.fillText(m,n/2,204+p*44));break}case"welcome":{const u=Me(i/1.6),m=Me((i-.45)/.9);ne(s,n/2,150,120+90*u,a.accent,.14+.22*u),Y(s,n/2,150,46,a.accent,a.text,.15+.95*u),s.globalAlpha=m,s.fillStyle=a.text,$(s,o.welcome,p=>`600 ${p}px ${l.sans}`,44,c-r+30),s.fillText(o.welcome,n/2,272+(1-m)*14),s.globalAlpha=m*.9,s.fillStyle=a.dim,$(s,o.tagline,p=>`400 ${p}px ${l.sans}`,24,c-r),s.fillText(o.tagline,n/2,314+(1-m)*14),s.globalAlpha=1;break}}if(e.kind==="error"&&i<.5){const u=1-i/.5,m=Math.floor(i*40);for(let p=0;p<6;p++){const f=Math.sin((m+1)*12.9898+p*78.233)*43758.5453,w=f-Math.floor(f),k=Math.floor(w*d),P=10+Math.floor(w*26),v=(w-.5)*46*u;s.drawImage(s.canvas,0,k,n,P,v,k,n,P)}}if(i<.32){const u=i/.32*(d+60)-30,m=s.createLinearGradient(0,u-30,0,u+30);m.addColorStop(0,"transparent"),m.addColorStop(.5,"rgba(255,255,255,0.22)"),m.addColorStop(1,"transparent"),s.fillStyle=m,s.fillRect(0,u-30,n,60)}s.restore()}const nt=(s,e)=>s.kind==="pending"||s.kind==="logo"||e<2||s.kind==="email"||s.kind==="password",U=Math.PI*2,pe=24,lt=.035,ee=(s,e,i)=>s+(e-s)*i,O=new x(.55,.85,2.85),K=new x(.95,.75,-.2),ct=new x;function Re(s=6,e=4){const i=[],t=[],o=[];for(let n=0;n<=s;n++){const d=n/s,h=.33*Math.sin(Math.PI*d**.65*.9)+.025*(1-d);for(let r=0;r<=e;r++){const c=r/e*2-1,u=c*h,m=d-.13*d**5*(1-c*c)-.5,p=.12*c*c*Math.sin(Math.PI*d)-.09*d*d;i.push(u,m,p),t.push(r/e,d)}}const a=e+1;for(let n=0;n<s;n++)for(let d=0;d<e;d++){const h=n*a+d;o.push(h,h+1,h+a,h+1,h+a+1,h+a)}const l=new te;return l.setAttribute("position",new _(i,3)),l.setAttribute("uv",new _(t,2)),l.setIndex(o),l.computeVertexNormals(),l}function Fe(s){const e=s.map(o=>o.index?o.toNonIndexed():o),i=(o,a)=>{const l=e.reduce((h,r)=>h+r.attributes.position.count,0),n=new Float32Array(l*a);let d=0;for(const h of e){const r=h.attributes[o];r&&n.set(r.array.subarray(0,h.attributes.position.count*a),d),d+=h.attributes.position.count*a}return new Je(n,a)},t=new te;t.setAttribute("position",i("position",3)),t.setAttribute("normal",i("normal",3)),t.setAttribute("uv",i("uv",2));for(const o of e)o.dispose();for(const o of s)o.dispose();return t}function ht(){const s=[];for(let t=0;t<5;t++){const o=Re(3,1);o.scale(.5,.5,.5),o.translate(0,.25,0),o.rotateX(.42),o.rotateZ(t/5*U+.3),s.push(o)}const e=new Ze(.075,6);e.translate(0,0,.02);const i=e.attributes.uv;for(let t=0;t<i.count;t++)i.setXY(t,.5,0);return s.push(e),Fe(s)}function ut(s,e,i){const t=new Qe,o=-s/2,a=-e/2;return t.moveTo(o+i,a),t.lineTo(o+s-i,a),t.quadraticCurveTo(o+s,a,o+s,a+i),t.lineTo(o+s,a+e-i),t.quadraticCurveTo(o+s,a+e,o+s-i,a+e),t.lineTo(o+i,a+e),t.quadraticCurveTo(o,a+e,o,a+e-i),t.lineTo(o,a+i),t.quadraticCurveTo(o,a,o+i,a),t}function j(s,e,i,t,o=.008){const a=new Ye(ut(s-2*o,e-2*o,Math.max(.002,t-o)),{depth:i-2*o,bevelEnabled:!0,bevelThickness:o,bevelSize:o,bevelSegments:2,curveSegments:5});return a.translate(0,0,-(i-2*o)/2),a}function Q(s,e,i,t,o=8,a=!1){const l=new Ne(s,e,1,o,!1),n=l.attributes.position,d=new x,h=new x,r=o+1;for(let c=0;c<=e;c++){const u=c/e;s.getPointAt(u,d);const m=Math.min(1,u/.12),p=ee(i,t,u**.8)*(a?m*m*(3-2*m):1);for(let f=0;f<r;f++){const w=c*r+f,k=i>.04?1+.16*Math.sin(f/o*U*5+u*13)+.09*Math.cos(f/o*U*9-u*23)+.07*Math.sin(u*47+f*3):1;h.fromBufferAttribute(n,w).sub(d).multiplyScalar(p*k).add(d),n.setXYZ(w,h.x,h.y,h.z)}}return l.computeVertexNormals(),l}function pt(s){const{stone:e}=E,i=[];for(let y=1;y<=44;y++)i.push(Math.sin(y/44*(Math.PI/2)));i.push(1,1.06,1.16);const t=112,o=[0,0,0],a=[],l=[0,0],n=new me(ie(356382)),d=new M(s.stone),h=d.clone().multiplyScalar(.2),r=d.clone().lerp(new M("#a49a7e"),.18),c=new M,u=(y,T,g)=>{const b=.5+.5*n.at(y*6.5,T*6.5,g*6.5),z=1-be.smoothstep(T,.012,.11);c.copy(d).lerp(r,b*.7).lerp(h,z),c.multiplyScalar(.9+.2*n.at(y*19,3.1,g*19)),a.push(c.r,c.g,c.b)},m=Math.cos(e.yaw),p=Math.sin(e.yaw),f=ce(e.x,e.z);o[0]=e.x,o[1]=f,o[2]=e.z,u(e.x,f,e.z);for(const y of i)for(let T=0;T<t;T++){const g=T/t*U,b=1+.07*Math.sin(g*3+.7)+.045*Math.sin(g*5+2.1)+.022*Math.sin(g*11),z=Math.cos(g)*e.radiusX*y*b,N=Math.sin(g)*e.radiusZ*y*b,D=e.x+z*m+N*p,G=e.z-z*p+N*m,F=Math.max(-.08,ce(D,G)),Ee=be.smoothstep(y,.65,1),de=n.at(D*15,F*24,G*15)*.075*Ee;o.push(D+Math.cos(g)*de,F,G+Math.sin(g)*de),l.push(z*2.4,N*2.4),u(D,F,G)}const w=[];for(let y=0;y<t;y++)w.push(0,1+(y+1)%t,1+y);for(let y=0;y<i.length-1;y++)for(let T=0;T<t;T++){const g=1+y*t+T,b=1+y*t+(T+1)%t,z=g+t,N=b+t;w.push(g,b,z,b,N,z)}const k=new te;k.setAttribute("position",new _(o,3)),k.setAttribute("color",new _(a,3)),k.setAttribute("uv",new _(l,2)),k.setIndex(w),k.computeVertexNormals();const P=k.toNonIndexed();k.dispose();const v=P.attributes.position,S=P.attributes.uv,A=new x,C=new x,W=new x;for(let y=0;y<v.count;y+=3){A.fromBufferAttribute(v,y),C.fromBufferAttribute(v,y+1).sub(A),W.fromBufferAttribute(v,y+2).sub(A),C.cross(W).normalize();const T=Math.abs(C.y)>Math.max(Math.abs(C.x),Math.abs(C.z)),g=Math.abs(C.x)>Math.abs(C.z);for(let b=y;b<y+3;b++){const z=T||!g?v.getX(b):v.getZ(b),N=T?-v.getZ(b):v.getY(b);S.setXY(b,z*2.3,N*2.3)}}return P}function mt(){const e=new me(ie(108695934)),i=new Float32Array(512*512),t=new Uint8Array(512*512*4),o=new Uint8Array(512*512*4),a=new Uint8Array(512*512*4),l=(h,r,c,u)=>{const m=h/512*U,p=r/512*U,f=c/U;return e.at((3+Math.cos(p))*Math.cos(m)*f,(3+Math.cos(p))*Math.sin(m)*f,Math.sin(p)*f+u)};for(let h=0;h<512;h++)for(let r=0;r<512;r++){const c=h*512+r,u=c*4,m=l(r,h,8,3),p=l(r,h,100,7),f=l(r,h,230,11),w=Math.pow(Math.max(0,1-Math.abs(l(r,h,11,19)+m*.35)*30),3),k=Math.max(0,p-.08)*1.2,P=Math.max(0,-p-.12);i[c]=m*.42+p*.13+f*.045-w*.2;const v=Math.max(.12,.68+m*.3+f*.25+P*.85-k*.9-w*.28);t[u]=Math.min(255,v*255),t[u+1]=Math.min(255,v*242),t[u+2]=Math.min(255,v*221),t[u+3]=255;const S=Math.min(255,Math.max(90,215+p*60-P*120));a[u]=a[u+1]=a[u+2]=S,a[u+3]=255}const n=(h,r)=>i[(r+512)%512*512+(h+512)%512];for(let h=0;h<512;h++)for(let r=0;r<512;r++){const c=(n(r-1,h)-n(r+1,h))*5.5,u=(n(r,h-1)-n(r,h+1))*5.5,m=Math.hypot(c,u,1),p=(h*512+r)*4;o[p]=(c/m*.5+.5)*255,o[p+1]=(u/m*.5+.5)*255,o[p+2]=(1/m*.5+.5)*255,o[p+3]=255}const d=(h,r=!1)=>{const c=new Oe(h,512,512);return c.wrapS=c.wrapT=Pe,c.magFilter=Ae,c.minFilter=Ke,c.generateMipmaps=!0,c.anisotropy=4,r&&(c.colorSpace=I),c.needsUpdate=!0,c};return{map:d(t,!0),normalMap:d(o),roughnessMap:d(a)}}function dt(s,e,i,t){const o=new me(ie(t)),a=200,l=[],n=[];for(let r=0;r<=a;r++){const c=ee(-110,110,r/a);let u=0,m=.55,p=i;for(let w=0;w<4;w++)u+=m*(1-Math.abs(o.at(c*p,t%17,w*3.7))),m*=.48,p*=2.2;const f=e*(u-.45)*1.25;l.push(c,Math.max(.15,f),s,c,-3,s),n.push(1,0)}const d=[];for(let r=0;r<a;r++){const c=r*2;d.push(c,c+1,c+2,c+2,c+1,c+3)}const h=new te;return h.setAttribute("position",new _(l,3)),h.setAttribute("aTop",new _(n,1)),h.setIndex(d),h}const Se=`
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
}`,ze=`
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
}`,ft=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,vt=`
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
}`,gt=`
attribute float aTop;
varying float vTop;
varying vec3 vWorld;
void main() {
  vTop = aTop;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,wt=`
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
}`,yt=`
uniform mat4 uMirror;
varying vec4 vMirror;
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vMirror = uMirror * w;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,xt=`
#define RIPPLES ${pe}
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
}`,kt=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,bt=`
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
}`;class Mt{constructor(){this.target=new $e(2,2,{type:je,samples:4}),this.texel=new X(.5,.5),this.camera=new Ce,this.matrix=new q,this.normal=new x(0,1,0),this.origin=new x(0,0,0),this.plane=new Xe,this.clip=new le,this.q=new le,this.eye=new x,this.view=new x,this.look=new x,this.aim=new x,this.rotation=new q}setSize(e,i){const t=Math.max(2,Math.round(e)),o=Math.max(2,Math.round(i));this.target.setSize(t,o),this.texel.set(1/t,1/o)}update(e){const{normal:i,origin:t,eye:o,view:a,look:l,aim:n,rotation:d}=this;o.setFromMatrixPosition(e.matrixWorld),d.extractRotation(e.matrixWorld),a.subVectors(t,o).reflect(i).negate().add(t),l.set(0,0,-1).applyMatrix4(d).add(o),n.subVectors(t,l).reflect(i).negate().add(t);const h=this.camera;h.position.copy(a),h.up.set(0,1,0).applyMatrix4(d).reflect(i),h.lookAt(n),h.near=e.near,h.far=e.far,h.updateMatrixWorld(),h.projectionMatrix.copy(e.projectionMatrix),this.matrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.matrix.multiply(h.projectionMatrix).multiply(h.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(i,t).applyMatrix4(h.matrixWorldInverse);const r=this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant),c=h.projectionMatrix.elements,u=this.q;u.x=(Math.sign(r.x)+c[8])/c[0],u.y=(Math.sign(r.y)+c[9])/c[5],u.z=-1,u.w=(1+c[10])/c[14],r.multiplyScalar(2/r.dot(u)),c[2]=r.x,c[6]=r.y,c[10]=r.z+1-.002,c[14]=r.w,h.projectionMatrixInverse.copy(h.projectionMatrix).invert()}dispose(){this.target.dispose()}}const St=["1234567890-=","qwertyuiop[]","asdfghjkl;'","zxcvbnm,./"],zt={"!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/"};class De{static create(e,i){let t;try{t=new Be({canvas:e,antialias:!i.phone,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}return t.getContext()?new De(t,i):(t.dispose(),null)}constructor(e,i){this.renderer=e,this.options=i,this.palette=i.palette,this.fonts=i.fonts,this.screenCopy=i.screenCopy,this.onQuality=i.onQuality,e.outputColorSpace=I,e.toneMapping=Le,e.info.autoReset=!1,e.shadowMap.enabled=!0,e.shadowMap.type=_e,e.shadowMap.autoUpdate=!1,e.setClearColor(new M(this.palette.horizon),1),this.time=0,this.acc=0,this.width=1,this.height=1,this.dprCap=i.phone?1.5:2,this.quality=0,this.reflectionScale=.5,this.pixelScale=1,this.frameMs=16.7,this.cpuMs=0,this.slowFrames=0,this.frames=0,this.running=!1,this.manual=!1,this.raf=0,this.last=0,this.shadowAge=99,this.pointerAt=new X,this.pointerTime=0,this.parallax=new X,this.kick=0,this.kickSpeed=0,this.shake=-10,this.cheer=-10,this.screenState={kind:"logo"},this.screenSince=0,this.screenDrawn=-1,this.screenBusy=!0;const t=new We;if(this.scene=t,this.camera=new Ce(40,1,.05,260),this.camera.position.copy(O),this.camera.lookAt(K),this.mirror=new Mt,this.colors={sky:new M(this.palette.sky),horizon:new M(this.palette.horizon),glow:new M(this.palette.glow),sun:new M(this.palette.sun),white:new M("#fff6ea")},this.sunDir=new x(0,.1,-1).normalize(),this.sunColor=this.colors.sun.clone(),this.skyNow=this.colors.sky.clone(),this.groundColor=new M(this.palette.water).lerp(new M(this.palette.horizon),.3),this.buildSky(),this.buildHills(),this.buildBackdrop(),this.buildWater(),this.buildLights(),this.buildStone(),this.buildComputer(),this.buildBranch(),this.updateBranch(0,0),this.sim=new et({seed:i.seed,count:i.phone?Math.min(i.petalCount,280):i.petalCount,wind:i.wind,blossoms:this.blossomWorld}),this.buildPetals(this.sim.capacity),this.updateBranch(0,0),this.updateLight(0),typeof document<"u"&&document.fonts){const o=[`600 38px ${this.fonts.sans}`,`500 34px ${this.fonts.mono}`].map(a=>document.fonts.load(a).catch(()=>[]));Promise.all(o).then(()=>this.screenBusy=!0)}}buildSky(){this.skyUniforms={uZenith:{value:new M},uHorizon:{value:new M(this.palette.horizon)},uGlow:{value:new M(this.palette.glow)},uSun:{value:new M(this.palette.sun)},uSunDir:{value:this.sunDir}};const e=new R(new Ge(180,48,24),new H({uniforms:this.skyUniforms,vertexShader:ft,fragmentShader:vt,side:He,depthWrite:!1}));e.renderOrder=-10,e.frustumCulled=!1,this.sky=e,this.scene.add(e)}buildHills(){const e=[{z:-78,height:9.5,frequency:.03,seed:11,far:.62,color:this.palette.hills[0]},{z:-50,height:5.2,frequency:.055,seed:23,far:.42,color:this.palette.hills[1]},{z:-30,height:1.9,frequency:.11,seed:37,far:.24,color:this.palette.hills[2]}];this.hills=[],this.hillUniforms=[];for(const i of e){const t={uColor:{value:new M(i.color)},uHaze:{value:new M(this.palette.horizon)},uSun:{value:this.sunColor},uSunDir:{value:this.sunDir},uFar:{value:i.far}};this.hillUniforms.push(t);const o=new R(dt(i.z,i.height,i.frequency,i.seed),new H({uniforms:t,vertexShader:gt,fragmentShader:wt}));o.frustumCulled=!1,this.hills.push(o),this.scene.add(o)}}buildBackdrop(){if(!this.options.backdropUrl)return;const e=36,i=e*16/9,t=new fe({color:this.options.backdropTint??"#ffffff",toneMapped:!1}),o=new Z(i*3,e*4),a=o.getAttribute("uv");for(let n=0;n<a.count;n++)a.setXY(n,(a.getX(n)-.5)*3+.5,(a.getY(n)-.5)*4+.5);t.onBeforeCompile=n=>{n.uniforms.uPlateZenith={value:new M("#7f95a6")},n.fragmentShader=`uniform vec3 uPlateZenith;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`
        #include <map_fragment>
        #ifdef USE_MAP
          float skyExtension = 1. - exp(-max(0., vMapUv.y - 1.) * 3.);
          diffuseColor.rgb = mix(diffuseColor.rgb, uPlateZenith, skyExtension);
        #endif
      `)};const l=new R(o,t);l.position.set(5.5,e*(.5-.335),-50),l.visible=!1,l.name="Distant sky, mountains and far shore (image plate)",this.backdrop=l,this.scene.add(l),new Te().load(this.options.backdropUrl,n=>{if(this.disposed){n.dispose();return}n.colorSpace=I,n.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),t.map=n,this.screenUniforms&&(this.screenUniforms.uBackdrop.value=n),t.needsUpdate=!0,l.visible=!0,this.hills.forEach(d=>d.visible=!1),this.render()},void 0,()=>{})}buildWater(){this.ripples=Array.from({length:pe},()=>new le(0,0,-100,0)),this.rippleNext=0;const e=new M(this.palette.water);this.waterUniforms={uReflection:{value:this.mirror.target.texture},uTexel:{value:this.mirror.texel},uMirror:{value:this.mirror.matrix},uRipples:{value:this.ripples},uTime:{value:0},uDeep:{value:e},uShallow:{value:e.clone().multiplyScalar(.65)},uHaze:{value:new M(this.palette.horizon)},uSun:{value:this.sunColor},uSunDir:{value:this.sunDir}};const i=new R(new Z(320,320,1,1),new H({uniforms:this.waterUniforms,vertexShader:yt,fragmentShader:xt}));i.rotation.x=-Math.PI/2,i.position.set(0,0,-80),i.frustumCulled=!1,this.water=i,this.scene.add(i)}buildLights(){this.sunLight=new ve(this.sunColor,2.4),this.sunLight.castShadow=!0;const e=this.sunLight.shadow,i=this.options.phone?1024:2048;e.mapSize.set(i,i),e.camera.left=-2.4,e.camera.right=2.4,e.camera.top=2.4,e.camera.bottom=-2.4,e.camera.near=.5,e.camera.far=14,e.bias=-6e-4,e.normalBias=.012,e.radius=3,this.sunLight.target.position.set(E.computer.x,.3,E.computer.z),this.scene.add(this.sunLight,this.sunLight.target),this.hemi=new Ie(new M(this.palette.sky),this.groundColor,1.25),this.scene.add(this.hemi);const t=new ve("#dce8f5",.9);t.position.set(-2,3,5),this.scene.add(t)}buildStone(){const e=new R(pt(this.palette),new L({...mt(),vertexColors:!0,roughness:1,normalScale:new X(.9,.9),metalness:0}));e.material.onBeforeCompile=t=>{t.vertexShader=`varying vec3 vRock;
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
      `)};const i=e.material.onBeforeCompile;e.material.onBeforeCompile=t=>{i(t),t.fragmentShader=t.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor=mix(roughnessFactor,.98,growth.x*.65);
        roughnessFactor=mix(roughnessFactor,.9,growth.y*.45);
        roughnessFactor*=mix(.36,1.,smoothstep(.02,.12,vRock.y));`)},this.stone=e,e.name="Granite ledge above the waterline",e.receiveShadow=!0,e.castShadow=!0,this.scene.add(e)}buildComputer(){const e=this.palette,i=new se;i.position.set(E.computer.x,V.base,E.computer.z),i.rotation.y=E.computer.yaw;const t=E.computer.scale;i.scale.setScalar(t);const o=new L({color:e.computer,roughness:.48,metalness:0}),a=new L({color:e.keys,roughness:.6,metalness:0}),l=new L({color:"#1d2123",roughness:.55,metalness:0}),n=(g,b,z,N,D,G=!0)=>{const F=new R(g,b);return F.position.set(z,N,D),F.castShadow=G,F.receiveShadow=!0,i.add(F),F},d=V.base;n(j(.58,.1,.5,.02,.01),o,0,.05,0),n(new B(.15,.011,.01),l,-.13,.058,.25),n(new B(.15,.011,.01),l,.07,.058,.25),n(new B(.03,.006,.006),a,.21,.058,.252),n(new B(.56,.004,.004),a,0,.022,.251,!1);const h=(V.monitor.top-d)/t,r=.43,c=h-r/2;n(j(.51,r,.455,.045,.014),o,0,c,-.0225),n(j(.36,.34,.24,.06,.02),o,0,c-.02,-.33);for(let g=0;g<6;g++)n(new B(.2,.004,.012),l,0,h-.001,-.21+g*.026,!1);const u=.205,m=c+.025;n(j(.43,.33,.012,.035,.004),l,0,m,u);const p=new Z(.38,.285,18,14),f=p.attributes.position;for(let g=0;g<f.count;g++){const b=f.getX(g)/.19,z=f.getY(g)/.1425;f.setZ(g,.011*(1-b*b*.8)*(1-z*z*.8))}p.computeVertexNormals(),this.screenCanvas=typeof document<"u"?document.createElement("canvas"):null,this.screenCanvas&&(this.screenCanvas.width=he.width,this.screenCanvas.height=he.height),this.screenContext=this.screenCanvas?.getContext("2d")??null,this.screenTexture=new ge(this.screenCanvas??void 0),this.screenTexture.colorSpace=I,this.screenTexture.generateMipmaps=!1,this.screenTexture.minFilter=Ae,this.screenTexture.anisotropy=4,this.screenUniforms={uMap:{value:this.screenTexture},uBackdrop:{value:this.screenTexture},uIdle:{value:0},uTime:{value:0},uPower:{value:1.15},uGlass:{value:new M(e.sky).multiplyScalar(.6)}};const w=new R(p,new H({uniforms:this.screenUniforms,vertexShader:kt,fragmentShader:bt}));w.position.set(0,m,u+.0075),i.add(w);const k=typeof document<"u"?document.createElement("canvas"):null;if(k){k.width=64,k.height=64;const g=k.getContext("2d");g&&Y(g,32,30,15,"#7d7a72","#7d7a72",.7)}this.badgeTexture=new ge(k??void 0),this.badgeTexture.colorSpace=I;const P=new R(new Z(.034,.034),new L({map:this.badgeTexture,transparent:!0,roughness:.5}));P.position.set(-.17,m-.182,u+5e-4),i.add(P),this.led=new R(new B(.012,.006,.004),new fe({color:"#8fe3a6"})),this.led.position.set(.185,m-.183,u+.002),i.add(this.led),this.screenLight=new qe(new M(e.screenAccent),.5,1.6,2),this.screenLight.position.set(0,m,u+.18),i.add(this.screenLight);const v=new se;v.position.set(0,(V.keyboardBase-d)/t,.42),v.rotation.x=.06,i.add(v);const S=new R(j(.47,.022,.16,.012,.006),o);S.position.y=.011,S.castShadow=!0,S.receiveShadow=!0,v.add(S),this.keys=[];const A=.031;St.forEach((g,b)=>{for(let z=0;z<g.length;z++)this.keys.push({char:g[z],x:-.2+z*A+b*.008,z:-.054+b*.03,w:1,at:-10})}),this.keys.push({char:" ",x:0,z:.066,w:6.2,at:-10}),this.keys.push({char:"Backspace",x:.19,z:-.054,w:1.7,at:-10}),this.keys.push({char:"Enter",x:.19,z:.006,w:1.7,at:-10});const C=new L({color:"#ffffff",roughness:.55});this.keyMesh=new oe(new B(.026,.012,.026),C,this.keys.length),this.keyMesh.castShadow=!0,this.keyMesh.receiveShadow=!0;const W=new M(e.keys),y=new M(e.petalDeep).lerp(new M(e.keys),.35);this.keys.forEach((g,b)=>this.keyMesh.setColorAt(b,g.char==="Enter"?y:W)),this.keyMatrix=new q,this.keys.forEach((g,b)=>this.placeKey(b,0)),v.add(this.keyMesh);const T=new ae([new x(-.2,(V.keyboardBase-d)/t+.012,.34),new x(-.27,.006,.33),new x(-.34,.005,.27),new x(-.33,.006,.2),new x(-.29,.03,.16)]);n(new Ne(T,32,.0055,6,!1),l,0,0,0),this.computer=i,this.scene.add(i)}placeKey(e,i){const t=this.keys[e];this.keyMatrix.makeScale(t.w,1,1),this.keyMatrix.setPosition(t.x,.028-i*.006,t.z),this.keyMesh.setMatrixAt(e,this.keyMatrix)}buildBranch(){const e=this.palette,i=ie(725077),t=new se,o=new x(1.52,.27,-.38);t.position.copy(o);const a=(v,S,A)=>new x(v,S-.13,A).sub(o),l=v=>new ae(v.map(S=>a(...S))),n=l([[1.85,.37,-.38],[1.85,.72,-.4],[1.58,1.12,-.32],[1.12,1.6,-.18],[1.02,2.04,-.28]]),d=[l([[1.43,1.12,-.32],[1.14,1.42,-.15],[.66,1.57,.05],[.1,1.61,.12],[-.56,1.52,.16],[-1.05,1.7,.04]]),l([[1.12,1.6,-.18],[.72,1.78,-.26],[.1,1.93,-.22],[-.48,1.84,-.1],[-.91,2.02,.05]]),l([[1.43,1.12,-.32],[1.69,1.43,-.25],[1.96,1.68,-.1],[2.22,1.96,-.2]]),l([[1.14,1.42,-.15],[1.16,1.57,.3],[.81,1.75,.48],[.25,1.78,.45],[-.35,1.8,.52]]),l([[1.12,1.6,-.18],[1.45,1.85,-.6],[1.7,2.07,-.8]])],h=ot({path:this.options.barkTexturePath,tint:e.bark,isDisposed:()=>this.disposed,onLoad:()=>{(!this.running||this.manual)&&this.render()}}),r=[Q(n,100,.26,.065,24)];d.forEach((v,S)=>r.push(Q(v,44,S===0?.115:.073,.005,8,!0)));for(let v=0;v<6;v++){const S=v*1.05,A=1.85+Math.cos(S)*.43,C=-.38+Math.sin(S)*.38;r.push(Q(l([[1.85,.48,-.38],[1.85+Math.cos(S)*.2,.43,-.38+Math.sin(S)*.2],[A,Math.max(.025,ce(A,C))+.136,C]]),16,.09,.006,7))}const c=[];for(const v of d)for(let S=1;S<=24;S++){const A=.15+S/24*.8,C=v.getPointAt(A),W=S%2?1:-1,y=C.clone().add(new x(-.12-i()*.18,(i()-.35)*.32,W*(.16+i()*.36))),T=new ae([C,C.clone().lerp(y,.5).add(new x(0,.04,0)),y]);r.push(Q(T,10,.008,.0015,5));for(let g=0;g<7;g++){const b=T.getPointAt(.16+g*.13);for(let z=0;z<(this.options.phone?6:8);z++){const N=new x((i()-.5)*.21,(i()-.45)*.18,(i()-.5)*.18),D=new x((i()-.5)*1.8,(i()-.4)*1.7,.3+i()).normalize();c.push({at:b.clone().add(N),facing:D,size:.055+i()*.04,tint:i()})}}}const u=new R(Fe(r),h);u.castShadow=!0,u.receiveShadow=!0,t.add(u);const m=new Float32Array(c.length*4),p=ht();p.setAttribute("aData",new we(m,4)),this.flowerUniforms=this.petalUniforms(e.petalDeep,e.blossom);const f=new oe(p,new H({uniforms:this.flowerUniforms,vertexShader:Se,fragmentShader:ze,side:ye}),c.length),w=new q,k=new xe,P=new x(0,0,1);c.forEach((v,S)=>{k.setFromUnitVectors(P,v.facing),w.compose(v.at,k,new x(v.size,v.size,v.size)),f.setMatrixAt(S,w),m[S*4]=1,m[S*4+1]=v.tint,m[S*4+3]=i()*.65}),f.name=`Full bloom — ${c.length.toLocaleString()} instanced cherry blossoms`,t.add(f),this.blossomLocal=c.map(v=>v.at),this.blossomWorld=new Float32Array(c.length*3),this.branch=t,this.scene.add(t)}petalUniforms(e,i){return{uBase:{value:new M(e)},uTip:{value:new M(i)},uSunDir:{value:this.sunDir},uSun:{value:this.sunColor},uSky:{value:this.skyNow},uGround:{value:this.groundColor},uHaze:{value:new M(this.palette.horizon)},uFog:{value:new X(9,60)}}}buildPetals(e){const i=Re();this.petalData=new we(new Float32Array(e*4),4),this.petalData.setUsage(ke),i.setAttribute("aData",this.petalData),this.petalUniformValues=this.petalUniforms(this.palette.petalDeep,this.palette.petal),this.petals=new oe(i,new H({uniforms:this.petalUniformValues,vertexShader:Se,fragmentShader:ze,side:ye,transparent:!0,depthWrite:!1}),e),this.petals.instanceMatrix.setUsage(ke),this.petals.frustumCulled=!1,this.petals.count=0,this.order=new Uint16Array(e),this.depth=new Float32Array(e),this.tmp={m:new q,q:new xe,e:new Ve,p:new x,s:new x,v:new x,vp:new q,right:new x,up:new x},this.scene.add(this.petals)}updateLight(e){const i=.08+Math.sin(e*.04)*.015;this.sunDir.set(-.2,.24,-1).normalize(),this.sunColor.copy(this.colors.sun).lerp(this.colors.white,i*.55),this.skyNow.copy(this.colors.sky).lerp(this.colors.white,i*.08),this.skyUniforms.uZenith.value.copy(this.skyNow),this.skyUniforms.uSun.value.copy(this.sunColor),this.skyUniforms.uGlow.value.copy(this.colors.glow).lerp(this.colors.horizon,i*.35),this.sunLight.color.copy(this.sunColor),this.sunLight.intensity=2.6,this.sunLight.position.copy(this.sunLight.target.position).addScaledVector(this.sunDir,7),this.hemi.color.copy(this.skyNow)}updateCamera(e,i){const t=1-Math.exp(-e*2.5);this.parallax.x+=(this.pointerAt.x-this.parallax.x)*t,this.parallax.y+=(this.pointerAt.y-this.parallax.y)*t;const o=this.camera;o.position.set(O.x+Math.sin(i*.071)*.05+this.parallax.x*.09,O.y+Math.sin(i*.053)*.014+this.parallax.y*.03,O.z),o.lookAt(K.x+this.parallax.x*.03,K.y,K.z),o.updateMatrixWorld(),this.sky.position.copy(o.position)}updateBranch(e,i){this.kickSpeed+=(-this.kick*38-this.kickSpeed*5.5)*e,this.kick+=this.kickSpeed*e;const t=this.sim?this.sim.gust:0,o=this.branch;o.rotation.z=.003*Math.sin(i*.8)+.002*Math.sin(i*1.9+1)+this.kick*.25+t*.008*Math.sin(i*6.5),o.rotation.x=.002*Math.sin(i*.6+.4)+this.kick*.1,o.updateMatrixWorld(!0);const a=ct;this.blossomLocal.forEach((l,n)=>{a.copy(l).applyMatrix4(o.matrixWorld),this.blossomWorld[n*3]=a.x,this.blossomWorld[n*3+1]=a.y,this.blossomWorld[n*3+2]=a.z}),this.sim&&this.sim.setBlossoms(this.blossomWorld)}updateKeys(e){let i=!1;this.keys.forEach((t,o)=>{const a=e-t.at;if(a<0||a>.3){t.down&&(t.down=!1,this.placeKey(o,0),i=!0);return}t.down=!0;const l=a<.05?a/.05:Math.max(0,1-(a-.05)/.22);this.placeKey(o,l),i=!0}),i&&(this.keyMesh.instanceMatrix.needsUpdate=!0)}updateScreen(e){const i=e-this.screenSince,t=this.screenState,o=e-this.shake<.5;this.screenUniforms.uTime.value=e,this.screenUniforms.uIdle.value=t.kind==="logo"&&this.backdrop?.visible?1:0,this.screenUniforms.uPower.value=(t.kind==="welcome"?1.25:1.12)*(o?.85+.15*Math.sin(e*90):1);const a={pending:Math.sin(e*9)>0?"#ffcf7a":"#6b5a3a",error:"#ff7b66",welcome:"#fff4dc"};this.led.material.color.set(a[t.kind]??"#8fe3a6");const l=Math.max(0,1-(e-this.cheer)/2.5);if(this.screenLight.intensity=.45+(t.kind==="welcome"?.35:0)+l*.6,this.screenLight.color.set(t.kind==="error"?this.palette.screenError:this.palette.screenAccent),!this.screenContext)return;const n=Math.floor(e*30);!this.screenBusy&&(n===this.screenDrawn||!nt(t,i))||(this.screenDrawn=n,this.screenBusy=!1,rt(this.screenContext,t,i,e,this.screenCopy,{background:this.palette.screen,text:this.palette.screenText,dim:this.palette.screenDim,accent:this.palette.screenAccent,error:this.palette.screenError},this.fonts),this.screenTexture.needsUpdate=!0)}updatePetals(){const e=this.sim,{m:i,q:t,e:o,p:a,s:l}=this.tmp,n=this.camera.position,d=this.order,h=this.depth;let r=0;for(let p=0;p<e.capacity;p++){if(e.mode[p]===tt.IDLE||e.alpha[p]<=.004)continue;const f=e.x[p]-n.x,w=e.y[p]-n.y,k=e.z[p]-n.z;h[p]=f*f+w*w+k*k,d[r++]=p}const c=d.subarray(0,r).sort((p,f)=>h[f]-h[p]),u=this.petals.instanceMatrix.array,m=this.petalData.array;for(let p=0;p<r;p++){const f=c[p];o.set(e.rx[f],e.ry[f],e.rz[f]),t.setFromEuler(o),a.set(e.x[f],e.y[f],e.z[f]);const w=e.size[f]*lt;l.set(w,w,w),i.compose(a,t,l),i.toArray(u,p*16),m[p*4]=e.alpha[f],m[p*4+1]=e.tint[f],m[p*4+2]=e.wet[f],m[p*4+3]=0}this.petals.count=r,this.petals.instanceMatrix.needsUpdate=!0,this.petalData.needsUpdate=!0}ripple(e,i,t){this.ripples[this.rippleNext].set(e,i,this.time,t),this.rippleNext=(this.rippleNext+1)%pe}frame(e){const i=performance.now(),t=this.renderer;t.info.reset(),this.acc+=e;let o=0;for(;this.acc>=re-1e-6&&o<5;)this.sim.step(re),this.acc-=re,o++;o===5&&(this.acc=0),this.time+=e;const a=this.time;this.sim.drainLandings((l,n,d)=>this.ripple(l,n,d)),this.updateLight(a),this.updateCamera(e,a),this.updateBranch(e,a),this.updateKeys(a),this.updateScreen(a),this.updatePetals(),this.waterUniforms.uTime.value=a,++this.shadowAge>12&&(t.shadowMap.needsUpdate=!0,this.shadowAge=0),this.mirror.update(this.camera),this.water.visible=!1,t.setRenderTarget(this.mirror.target),t.clear(),t.render(this.scene,this.mirror.camera),t.setRenderTarget(null),this.water.visible=!0,t.render(this.scene,this.camera),this.cpuMs=ee(this.cpuMs,performance.now()-i,.1)}loop=e=>{this.raf=requestAnimationFrame(this.loop);const i=this.last?e-this.last:16.7;this.last=e,this.frame(Math.min(i,100)/1e3),this.adapt(i)};adapt(e){this.manual||(this.frames++,this.frameMs=ee(this.frameMs,e,.08),!(this.frames<45||e>250)&&(this.slowFrames=this.frameMs>24?this.slowFrames+1:Math.max(0,this.slowFrames-2),!(this.slowFrames<50||this.quality>=3)&&(this.slowFrames=0,this.frames=0,this.quality++,this.quality===1&&(this.reflectionScale=.25),this.quality===2&&(this.sim.density=.5),this.quality===3&&(this.pixelScale=.75),this.setSize(this.width,this.height),this.onQuality?.(this.qualityState()))))}qualityState(){return{level:this.quality,reflectionScale:this.reflectionScale,density:this.sim.density,pixelRatio:this.renderer.getPixelRatio()}}setSize(e,i){this.width=Math.max(1,e),this.height=Math.max(1,i);const t=Math.min(typeof devicePixelRatio=="number"?devicePixelRatio:1,this.dprCap)*this.pixelScale;this.renderer.setPixelRatio(t),this.renderer.setSize(this.width,this.height,!1);const o=this.width/this.height;this.camera.aspect=o,this.camera.fov=o<1?2*Math.atan(Math.tan(20*Math.PI/180)/o)*180/Math.PI:40,this.camera.updateProjectionMatrix(),this.mirror.setSize(this.width*t*this.reflectionScale,this.height*t*this.reflectionScale),(!this.running||this.manual)&&this.render()}setRunning(e){this.manual||e!==this.running&&(this.running=e,cancelAnimationFrame(this.raf),e&&(this.last=0,this.raf=requestAnimationFrame(this.loop)))}render(){this.frame(0)}setManual(e){this.manual=e,cancelAnimationFrame(this.raf),this.running=!1,e||this.setRunning(!0)}advance(e){this.frame(e)}setScreen(e){if(it(e,this.screenState))return;const i=e.kind!==this.screenState.kind;this.screenState=e,i?this.screenSince=this.time:this.screenSince=Math.min(this.screenSince,this.time-.33),e.kind==="error"&&i&&(this.shake=this.time),this.screenBusy=!0}keystroke(e){this.sim.queueRelease(1),this.kickSpeed+=.05;const i=e?.length===1?zt[e]??e.toLowerCase():e;let t=this.keys.findIndex(o=>o.char===i);t<0&&(t=Math.abs(Math.floor(Math.sin(this.time*97.3)*1e4))%this.keys.length),this.keys[t].at=this.time}celebrate(){this.sim.burst(40),this.kickSpeed+=.55,this.cheer=this.time;const{stone:e}=E;for(let i=0;i<4;i++){const t=i/4*U+.4;this.ripple(e.x+Math.cos(t)*.15,e.z+Math.sin(t)*.12,2.2)}}pointer(e,i,t,o,a){if(this.manual&&(a=this.time-this.pointerTime),this.pointerTime=this.time,this.pointerAt.set(e,i),Math.abs(t)+Math.abs(o)<1e-5)return;const l=this.camera,{vp:n,right:d,up:h}=this.tmp;n.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),d.setFromMatrixColumn(l.matrixWorld,0),h.setFromMatrixColumn(l.matrixWorld,1),this.sim.stir({x:e,y:i,dx:t,dy:o,dt:a,viewProjection:n.elements,eye:l.position,right:d,up:h,tanHalfFov:Math.tan(l.fov*Math.PI/360),aspect:l.aspect,radius:.48})}stats(){const e=this.renderer.info.render;return{drawCalls:e.calls,triangles:e.triangles,petals:this.sim.active,frameMs:Math.round(this.frameMs*10)/10,cpuMs:Math.round(this.cpuMs*100)/100,...this.qualityState()}}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.running=!1,this.scene.traverse(e=>{e.geometry&&e.geometry.dispose();const i=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(const t of i){for(const o of Object.values(t))o&&o.isTexture&&o.dispose();t.dispose()}}),this.screenTexture.dispose(),this.badgeTexture.dispose(),this.mirror.dispose(),this.sunLight.shadow.map?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss()}}export{De as PetalScene,pt as stoneGeometry};
