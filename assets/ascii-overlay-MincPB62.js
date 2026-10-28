import{j as le}from"./index-DxXZJYbM.js";import{r as ct}from"./recipe-Begt-rGp.js";import{g as ae}from"./index-xgxdCp6f.js";import{S as Ut}from"./ScrollTrigger-Bxhi_YIO.js";import{W as It,g as Ft,S as ht,V as de,h as dt,O as ft,M as mt,C as Pt,i as be,j as Dt,k as Et,l as pt,L as Ce,m as vt,o as Ot}from"./template-shell-PcZKF7S2.js";typeof window<"u"&&ae.registerPlugin(Ut.ScrollTrigger);const gt=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,jt=`
    precision mediump float;

    uniform sampler2D uSourceTex;
    uniform float     uContainerAspect;
    uniform float     uImageAspect;
    uniform vec2      uCells;
    uniform float     uFullFrame;

    varying vec2 vUv;

    // uFullFrame = 1 skips the cover crop: the subject-analysis pass reads
    // the WHOLE photo so detection never depends on the visitor's viewport.
    vec2 coverUv(vec2 uv) {
      if (uFullFrame > 0.5) return uv;
      float ratio = uContainerAspect / uImageAspect;
      vec2  scale = ratio > 1.0 ? vec2(1.0, 1.0 / ratio) : vec2(ratio, 1.0);
      return clamp((uv - 0.5) * scale + 0.5, 0.0, 1.0);
    }

    float lum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

    void main() {
      // rgb = the cell's box average (the GPU picks a high mip here because
      // this pass renders into a target the size of the cell grid).
      vec4 avg = texture2D(uSourceTex, coverUv(vUv));

      // alpha = how DETAILED this cell is. Backgrounds are smooth, subjects
      // are not - that is the property brightness misses, and it is what
      // decides where glyphs are allowed to land.
      //
      // Four sharp taps (negative LOD bias) at the cell quadrants, compared
      // against THEIR OWN mean - not against avg above.
      //
      // Comparing against avg was wrong and it is what produced an oversized
      // clear margin above the subject. avg comes from a GPU-chosen mip that
      // blurs far wider than one cell, so beside a dark object it drags dark
      // pixels into a cell sitting in open background; the sharp taps still
      // read bright, the mismatch reads as "detail", and the gate rejects
      // empty space. Measured on the reference photo, this cost ~3.5 cells of
      // clear margin around the subject; taps-against-taps costs ~2.1.
      // (It does NOT explain a top-vs-bottom asymmetry - measurement showed
      // the old margin was equal on all four sides.)
      //
      // Measuring the taps against each other keeps the footprint inside the
      // cell. A smooth gradient reads near zero wherever it sits; knit
      // fabric, fur, grass and foliage still read high.
      vec2 q = 0.25 / uCells;
      float l0 = lum(texture2D(uSourceTex, coverUv(vUv + vec2( q.x,  q.y)), -3.0).rgb);
      float l1 = lum(texture2D(uSourceTex, coverUv(vUv + vec2(-q.x,  q.y)), -3.0).rgb);
      float l2 = lum(texture2D(uSourceTex, coverUv(vUv + vec2( q.x, -q.y)), -3.0).rgb);
      float l3 = lum(texture2D(uSourceTex, coverUv(vUv + vec2(-q.x, -q.y)), -3.0).rgb);
      float m  = (l0 + l1 + l2 + l3) * 0.25;
      float detail = (abs(l0 - m) + abs(l1 - m) + abs(l2 - m) + abs(l3 - m)) * 0.25;

      // Weber contrast: variance RELATIVE to local brightness, not absolute.
      // Absolute variance goes blind in the dark - laces on a near-black shoe
      // deviate by ~0.03 around a mean of ~0.08, which absolute measurement
      // reads as smooth, so the background walk climbed straight onto the
      // shoe (its colour matches the shadowed floor it stands on). Relative
      // to its own brightness that same texture reads ~0.4, unmistakably
      // busy, while a smooth dark floor stays ~0.03.
      gl_FragColor = vec4(avg.rgb, clamp(detail / (m + 0.05), 0.0, 1.0));
    }
  `,Wt=`
    // highp, not mediump: the cell grid is derived from vUv * uResolution,
    // which runs past 3000 on a retina canvas. mediump loses integer
    // precision up there and floor() lands on the wrong cell, which shows
    // up as uneven, jittering cell boundaries on some GPUs.
    precision highp float;

    uniform sampler2D uSourceTex;
    uniform sampler2D uDownsampledTex;
    uniform sampler2D uPresenceTex;
    uniform sampler2D uAtlasTex;
    uniform vec2      uResolution;
    uniform vec2      uCellPx;
    uniform vec2      uCells;
    uniform float     uGlyphCount;
    uniform float     uThreshLow;
    uniform float     uThreshHigh;
    uniform float     uLumMin;
    uniform float     uLumMax;
    uniform float     uWhitening;
    uniform float     uOpacity;
    uniform float     uJitter;
    uniform float     uTime;
    uniform float     uReshuffleRate;
    uniform float     uChurn;
    uniform vec2      uWaveCenter;
    uniform float     uWaveMaxDist;
    uniform vec2      uClickCenter;
    uniform float     uClickStart;
    uniform float     uRippleSpeed;
    uniform float     uContainerAspect;
    uniform float     uImageAspect;
    uniform float     uGlyphFrac;
    uniform float     uShadeMix;
    uniform float     uDarkOpacity;
    uniform bool      uLoaded;

    varying vec2 vUv;

    vec2 coverUv(vec2 uv) {
      float ratio = uContainerAspect / uImageAspect;
      vec2  scale = ratio > 1.0 ? vec2(1.0, 1.0 / ratio) : vec2(ratio, 1.0);
      return clamp((uv - 0.5) * scale + 0.5, 0.0, 1.0);
    }

    // Hash without sine (Hoskins). The obvious fract(p.x * p.y) hash tiles
    // visibly at these cell counts - it printed a repeating motif across the
    // whole backdrop instead of noise.
    float hash21(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      if (!uLoaded) {
        gl_FragColor = vec4(0.0);
        return;
      }

      // Untouched full-res pixel - the photo itself, never blurred.
      vec4 fullRes = texture2D(uSourceTex, coverUv(vUv));

      // One box-averaged texel per cell - luminance only, prevents boil.
      vec2 pixel  = vUv * uResolution;
      vec2 cellId = floor(pixel / uCellPx);
      vec2 cellUv = (cellId + 0.5) / uCells;
      vec4 cellAvg = texture2D(uDownsampledTex, cellUv);

      float lum     = dot(cellAvg.rgb, vec3(0.2126, 0.7152, 0.0722));
      float normLum = clamp((lum - uLumMin) / max(uLumMax - uLumMin, 0.0001), 0.0, 1.0);

      // presence - a finished per-cell decision from the presence pass:
      // smooth enough, right colour, and not an isolated speckle.
      float presence = texture2D(uPresenceTex, cellUv).r;

      // Click: a typewriter front radiating from the pointer. Each cell has
      // a jittered arrival time (the frontier is ragged, not a clean ring);
      // on arrival it scrambles through glyphs at ~18Hz for a beat before
      // settling on its new character - the decode/typing feel - and its
      // opacity lifts slightly, decaying back after the front moves on.
      float band = 0.0;
      float clickOffset = 0.0;
      if (uClickStart >= 0.0) {
        float ct     = uTime - uClickStart;
        float cdist  = distance((cellId + 0.5) * uCellPx, uClickCenter * uCellPx);
        float arrive = cdist / uRippleSpeed + hash21(cellId * 1.7) * 0.14;
        float since  = ct - arrive;
        if (since > 0.0) {
          clickOffset = mod(floor(uClickStart * 97.0), 1024.0) + 11.0 + floor(min(since, 0.22) * 18.0);
          band = 0.35 * (1.0 - smoothstep(0.0, 0.6, since));
        }
      }

      // Density is UNIFORM by default: every background cell gets a glyph
      // drawn at random from the whole set, so a dark area is as dense as a
      // light one. Brightness moves to opacity instead (below). uShadeMix
      // dials back toward the old behaviour, where tone picked the glyph and
      // dark areas thinned out to dots.
      float shade = smoothstep(uThreshLow, uThreshHigh, normLum);

      // Slow reshuffle as a WAVE: each front starts at the subject's centre
      // and sweeps outward, one full frame-crossing per 1/rate seconds,
      // faster while scrolling (uChurn). A cell re-rolls its glyph the
      // moment a front passes it, so the churn reads as radiating from the
      // subject instead of random static.
      float dPx  = distance((cellId + 0.5) * uCellPx, uWaveCenter * uCellPx);
      float slot = floor(uTime * uReshuffleRate * (1.0 + uChurn * 3.0) - dPx / max(uWaveMaxDist, 1.0)) + clickOffset;
      float n    = hash21(cellId + slot * 17.0);
      float n2   = hash21(cellId.yx + slot * 31.0 + 7.0);

      float byTone = clamp(shade + (n - 0.5) * uJitter, 0.0, 0.999);
      float pick   = mix(n2, byTone, uShadeMix);
      float idx    = floor(clamp(pick, 0.0, 0.999) * uGlyphCount);

      // The glyph occupies the middle uGlyphFrac of its cell; the remainder is
      // the gap between characters.
      vec2 localUv = fract(pixel / uCellPx);
      vec2 lu = (localUv - 0.5) / max(uGlyphFrac, 0.001) + 0.5;
      float inside = step(0.0, lu.x) * step(lu.x, 1.0) * step(0.0, lu.y) * step(lu.y, 1.0);
      float eps = 0.004;
      lu = clamp(lu, eps, 1.0 - eps);
      vec2 atlasUv = vec2((idx + lu.x) / uGlyphCount, lu.y);
      float ink = texture2D(uAtlasTex, atlasUv).a * inside;

      // Brightness lands here instead of on glyph choice: same density
      // everywhere, dark areas simply sit at lower opacity. The click
      // front's decaying band adds a slight lift as cells get retyped.
      float toneAlpha = min(1.0, mix(uDarkOpacity, 1.0, shade) + band);

      // Contrast guard: whitened glyphs vanish on near-blown highlights
      // (white on white). Proven live via the debug mask - the gap between a
      // figure's legs was correctly marked background and rendered, but sat
      // on the backdrop's hottest zone and was invisible. On cells above
      // ~0.8 brightness the glyph flips to a darkened tone of the same hue.
      // Judged on the CELL average, not the pixel, so one glyph never
      // splits half-white half-dark across a gradient.
      float hot = smoothstep(0.78, 0.92, lum);
      vec3 glyphColor = mix(mix(fullRes.rgb, vec3(1.0), uWhitening), fullRes.rgb * 0.55, hot);
      vec3 finalRgb   = mix(fullRes.rgb, glyphColor, ink * presence * uOpacity * toneAlpha);

      gl_FragColor = vec4(finalRgb, fullRes.a);
    }
  `,xt='"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace',_t=["1","x","0","X","*","#","@"],Te=94,_e=.78,He=.97,Ht=2500,Gt=.1,zt=900;function yt(f,g){const b=document.createElement("canvas").getContext("2d"),S="600 "+Te+"px "+g;b.font=S;const _=Math.max(1,Math.round(b.measureText("0").width)),q=document.createElement("canvas");q.width=_*f.length,q.height=Te;const B=q.getContext("2d");B.clearRect(0,0,q.width,q.height),B.fillStyle="#ffffff",B.textAlign="center",B.textBaseline="middle",B.font=S;for(let N=0;N<f.length;N++){const Z=f[N];Z&&B.fillText(Z,_*N+_/2,Te*.54)}return{canvas:q,cellW:_,aspect:_/Te}}function wt(f){const g=Math.min(f[0],f[1],f[2]),b=[f[0]-g,f[1]-g,f[2]-g],S=Math.max(b[0],b[1],b[2]);return S<=.001?[0,0,0]:[b[0]/S,b[1]/S,b[2]/S]}function qt(f,g,b,S){const _=document.createElement("canvas");_.width=g,_.height=b;const q=_.getContext("2d"),B=f.width/f.height,N=S/B,Z=N>1?f.width:f.width*N,ue=N>1?f.height/N:f.height;q.drawImage(f,(f.width-Z)/2,(f.height-ue)/2,Z,ue,0,0,g,b);const pe=q.getImageData(0,0,g,b).data,fe=new Uint8Array(g*b);for(let ie=0;ie<b;ie++)for(let re=0;re<g;re++)fe[(b-1-ie)*g+re]=pe[(ie*g+re)*4]>127?1:0;return fe}function Nt(f){const g=String(f).replace("#","").trim(),b=g.length===3?g[0]+g[0]+g[1]+g[1]+g[2]+g[2]:g,S=parseInt(b,16);return isNaN(S)||b.length!==6?null:[(S>>16&255)/255,(S>>8&255)/255,(S&255)/255]}function Vt(f){return f?f.split(",").map(function(g){return g.trim()}).filter(function(g){return g.length>0}):_t.slice()}function Bt({className:f="",alt:g="",image:b="",video:S="",mask:_="",cellSize:q=8,scroll:B=!0,glyphs:N="1,x,0,X,*,#,@",threshLow:Z=.32,threshHigh:ue=.7,whitening:pe=.7,opacity:fe=.9,jitter:ie=.35,reshuffleRate:re=.6,charGap:Me=.3,shadeMix:Ge=0,darkOpacity:ze=.2,detailThresh:qe=.1,detailStrength:Ne=1,keyColor:ve="",keyTolerance:Ve=.25,colorStep:ke=.03,minRegion:Be=10,edgeFade:Je=1.2,edgePush:Xe=.02,debug:Ae=!1}){const Re=ct.useRef(null);return ct.useEffect(()=>{if(typeof window>"u"||!Re.current)return;const ee=Re.current;let ge=!1;const Se=Math.max(4,q),bt=B!==!1,Le=Vt(N),Ye=ve.length>0,Ct=ve.toLowerCase()==="auto",Tt=Ye&&!Ct?Nt(ve):null,te=document.createElement("canvas");ee.appendChild(te);const Mt=window.matchMedia("(pointer: coarse)").matches;let U;try{U=new It({canvas:te,antialias:!0,alpha:!0})}catch{te.remove();return}U.setPixelRatio(Mt?1:Math.min(window.devicePixelRatio,2));const Ue=new Ft(2,2),J={uSourceTex:{value:null},uContainerAspect:{value:1},uImageAspect:{value:1},uCells:{value:new de(1,1)},uFullFrame:{value:0}},$e=new ht({uniforms:J,vertexShader:gt,fragmentShader:jt}),xe=new dt,Ie=new ft(-1,1,1,-1,0,1);xe.add(new mt(Ue,$e));let F=null,V=null,$=null,Fe=null,me=null,ce=yt(Le,xt),Qe=ce.aspect;const se=new Pt(ce.canvas);se.minFilter=be,se.magFilter=be,se.generateMipmaps=!1;const s={uSourceTex:{value:null},uDownsampledTex:{value:null},uPresenceTex:{value:null},uAtlasTex:{value:se},uResolution:{value:new de(1,1)},uCellPx:{value:new de(Se,Se/ce.aspect)},uCells:{value:new de(1,1)},uGlyphCount:{value:Le.length},uThreshLow:{value:_e},uThreshHigh:{value:He},uLumMin:{value:0},uLumMax:{value:1},uWhitening:{value:pe},uOpacity:{value:fe},uJitter:{value:ie},uTime:{value:0},uReshuffleRate:{value:re},uChurn:{value:0},uWaveCenter:{value:new de(.5,.5)},uWaveMaxDist:{value:1},uClickCenter:{value:new de(0,0)},uClickStart:{value:-1},uRippleSpeed:{value:900},uContainerAspect:{value:1},uImageAspect:{value:1},uGlyphFrac:{value:1/(1+Me)},uShadeMix:{value:Ge},uDarkOpacity:{value:ze},uLoaded:{value:!1}},Ke=new ht({uniforms:s,vertexShader:gt,fragmentShader:Wt}),Ze=new dt,kt=new ft(-1,1,1,-1,0,1);Ze.add(new mt(Ue,Ke));function At(e,t){F&&F.width===e&&F.height===t||(F&&(F.texture.dispose(),F.dispose()),F=new pt(e,t,{minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),s.uDownsampledTex.value=F.texture)}function ye(){const e=ee.offsetWidth||1,t=ee.offsetHeight||1;U.setSize(e,t);const i=te.width||1,m=te.height||1,p=U.getPixelRatio(),x=Se*(1+Me)*p,u=x/Qe,T=Math.max(1,Math.ceil(i/x)),c=Math.max(1,Math.ceil(m/u));s.uResolution.value.set(i,m),s.uCellPx.value.set(x,u),s.uRippleSpeed.value=zt*p,s.uCells.value.set(T,c),s.uContainerAspect.value=e/t,J.uContainerAspect.value=e/t,J.uCells.value.set(T,c),At(T,c),we()}let Pe=null;function Rt(){clearTimeout(Pe),Pe=setTimeout(ye,150)}const et=new ResizeObserver(Rt);et.observe(ee),ye();function tt(e,t,i,m){const p=t*i;let x=1,u=0,T=0;for(let r=0;r<p;r++){if(!e[r])continue;const d=r*4,I=(.2126*m[d]+.7152*m[d+1]+.0722*m[d+2])/255;I<x&&(x=I),I>u&&(u=I),T++}T<p*.02&&(x=0,u=1),u-x<.05&&(x=Math.max(0,x-.1),u=Math.min(1,u+.1)),s.uLumMin.value=x,s.uLumMax.value=u;const c=new Int32Array(p).fill(-1),y=[];for(let r=0;r<p;r++)e[r]||(c[r]=0,y.push(r));for(let r=0;r<y.length;r++){const d=y[r],I=d%t,z=(d-I)/t,K=c[d]+1;I>0&&c[d-1]===-1&&(c[d-1]=K,y.push(d-1)),I<t-1&&c[d+1]===-1&&(c[d+1]=K,y.push(d+1)),z>0&&c[d-t]===-1&&(c[d-t]=K,y.push(d-t)),z<i-1&&c[d+t]===-1&&(c[d+t]=K,y.push(d+t))}let L=0,Q=0,w=0;for(let r=0;r<p;r++)e[r]||(L+=r%t,Q+=r/t|0,w++);const D=w?L/w+.5:t/2,E=w?Q/w+.5:i/2;s.uWaveCenter.value.set(D,E);const O=s.uCellPx.value.x,A=s.uCellPx.value.y,l=Math.max(D,t-D)*O,k=Math.max(E,i-E)*A;s.uWaveMaxDist.value=Math.max(1,Math.hypot(l,k));const o=new Uint8Array(p*4),h=y.length===0||c[0]===-1;for(let r=0;r<p;r++){let d=0;if(e[r]){const I=h?1e9:c[r];d=Math.max(0,Math.min(1,I/Math.max(Je,.001)-Xe))}o[r*4]=Math.round(d*255),o[r*4+3]=255}$&&$.dispose(),$=new Ot(o,t,i),$.minFilter=be,$.magFilter=be,$.generateMipmaps=!1,$.needsUpdate=!0,s.uPresenceTex.value=$}function we(){if(!J.uSourceTex.value||!F)return;const e=F.width,t=F.height,i=e*t;U.setRenderTarget(F),U.render(xe,Ie),U.setRenderTarget(null);const m=new Uint8Array(i*4);if(U.readRenderTargetPixels(F,0,0,e,t,m),Fe&&(me=qt(Fe,e,t,s.uContainerAspect.value)),me&&me.length===i){if(tt(me,e,t,m),Ae){const O=Math.max(1,Math.ceil(e/110)),A=[];for(let l=t-1;l>=0;l-=O){let k="";for(let o=0;o<e;o+=O)k+=me[l*e+o]?"@":".";A.push(k)}console.log("[ascii-overlay] SUPPLIED mask active "+e+"x"+t+` (@ bg | . subject)
`+A.join(`
`))}return}const p=s.uImageAspect.value||1,x=s.uCellPx.value.y/Math.max(s.uCellPx.value.x,.001),u=Math.max(16,Math.min(240,Math.round(Math.sqrt(i*p*x)))),T=Math.max(8,Math.round(u/(p*x)));(!V||V.width!==u||V.height!==T)&&(V&&(V.texture.dispose(),V.dispose()),V=new pt(u,T,{minFilter:Ce,magFilter:Ce,generateMipmaps:!1}));const c=J.uCells.value.clone();J.uFullFrame.value=1,J.uCells.value.set(u,T),U.setRenderTarget(V),U.render(xe,Ie),U.setRenderTarget(null),J.uFullFrame.value=0,J.uCells.value.copy(c);const y=new Uint8Array(u*T*4);U.readRenderTargetPixels(V,0,0,u,T,y);const L=St(y,u,T),Q=new Uint8Array(i),w=s.uContainerAspect.value/p,D=w>1?1:w,E=w>1?1/w:1;for(let O=0;O<t;O++)for(let A=0;A<e;A++){const l=Math.min(Math.max(((A+.5)/e-.5)*D+.5,0),.9999),k=Math.min(Math.max(((O+.5)/t-.5)*E+.5,0),.9999);Q[O*e+A]=L.reach[Math.floor(k*T)*u+Math.floor(l*u)]}tt(Q,e,t,m),Ae&&(console.log("[ascii-overlay] border runs ["+L.runLen.join(",")+"] minRun="+L.minRun+(L.anyQualified?"":" (no corner-anchored long run - fallback: all border seeds)")),Lt(u,T,y,L.smooth,L.reach,L.okc,L.medLum,L.palette,L.minRegion))}function St(e,t,i){const m=t*i,p=qe*255,x=new Uint8Array(m);for(let n=0;n<m;n++)x[n]=Ne>0&&e[n*4+3]>p?0:1;let u=null;if(Ye){let n=0,a=0,v=0,C=0;for(let M=0;M<i;M++)for(let R=0;R<t;R++){if(R!==0&&M!==0&&R!==t-1&&M!==i-1)continue;const W=(M*t+R)*4;n+=e[W],a+=e[W+1],v+=e[W+2],C++}u=wt(Tt||[n/C/255,a/C/255,v/C/255])}const T=ke*255*(ke*255),c=[];for(let n=0;n<t;n++)c.push(n);for(let n=1;n<i;n++)c.push(n*t+t-1);for(let n=t-2;n>=0;n--)c.push((i-1)*t+n);for(let n=i-2;n>=1;n--)c.push(n*t);const y=c.length,L=new Uint8Array(y);for(let n=0;n<y;n++){const a=c[n];if(x[a]){if(u){const v=wt([e[a*4]/255,e[a*4+1]/255,e[a*4+2]/255]);if(Math.hypot(v[0]-u[0],v[1]-u[1],v[2]-u[2])>Ve)continue}L[n]=1}}const Q=[0,t-1,t+i-2,2*t+i-3];let w=0;for(;w<y&&L[w];)w++;const D=new Int32Array(y).fill(-1),E=[],O=[];let A=-1;for(let n=0;n<y;n++){const a=(w+n)%y;if(!L[a]){A=-1;continue}if(A>=0){const v=c[(w+n-1)%y]*4,C=c[a]*4,M=e[C]-e[v],R=e[C+1]-e[v+1],W=e[C+2]-e[v+2];M*M+R*R+W*W>T&&(A=-1)}A<0&&(A=E.length,E.push(0),O.push(!1)),D[a]=A,E[A]++,Q.indexOf(a)!==-1&&(O[A]=!0)}const l=Math.max(Math.round(y*Gt),8),k=E.some(function(n,a){return n>=l&&O[a]}),o=new Uint8Array(m),h=[];for(let n=0;n<y;n++){if(!L[n]||k&&(E[D[n]]<l||!O[D[n]]))continue;const a=c[n];o[a]||(o[a]=1,h.push(a))}for(;h.length;){const n=h.pop(),a=n%t,v=(n-a)/t,C=n*4;for(let M=0;M<4;M++){const R=a+(M===0?-1:M===1?1:0),W=v+(M===2?-1:M===3?1:0);if(R<0||W<0||R>=t||W>=i)continue;const Y=W*t+R;if(o[Y]||!x[Y])continue;const ne=Y*4,st=e[ne]-e[C],lt=e[ne+1]-e[C+1],ut=e[ne+2]-e[C+2];st*st+lt*lt+ut*ut>T||(o[Y]=1,h.push(Y))}}const r=Math.max(Be,Math.round(m*.0015)),d=[];for(let n=0;n<m;n+=2)o[n]&&d.push(.2126*e[n*4]+.7152*e[n*4+1]+.0722*e[n*4+2]);d.sort(function(n,a){return n-a});const I=d.length?d[d.length>>1]:0,z=[];for(let n=0;n<m;n+=2){if(!o[n])continue;const a=n*4;.2126*e[a]+.7152*e[a+1]+.0722*e[a+2]>=I&&z.push(e[a],e[a+1],e[a+2])}const K=.045*255*(.045*255),X=new Uint8Array(m);for(let n=0;n<m;n++){if(o[n]||!x[n])continue;const a=n*4,v=e[a],C=e[a+1],M=e[a+2];for(let R=0;R<z.length;R+=3){const W=z[R]-v,Y=z[R+1]-C,ne=z[R+2]-M;if(W*W+Y*Y+ne*ne<=K){X[n]=1;break}}}const H=[],G=new Uint8Array(m);for(let n=0;n<m;n++)if(!(!X[n]||G[n])){for(H.length=0,G[n]=1,h.push(n);h.length;){const a=h.pop();H.push(a);const v=a%t,C=(a-v)/t;v>0&&X[a-1]&&!G[a-1]&&(G[a-1]=1,h.push(a-1)),v<t-1&&X[a+1]&&!G[a+1]&&(G[a+1]=1,h.push(a+1)),C>0&&X[a-t]&&!G[a-t]&&(G[a-t]=1,h.push(a-t)),C<i-1&&X[a+t]&&!G[a+t]&&(G[a+t]=1,h.push(a+t))}if(H.length>=r)for(let a=0;a<H.length;a++)o[H[a]]=1}const j=new Uint8Array(m);for(let n=0;n<m;n++)if(!(o[n]||j[n])){for(H.length=0,j[n]=1,h.push(n);h.length;){const a=h.pop();H.push(a);const v=a%t,C=(a-v)/t;v>0&&!o[a-1]&&!j[a-1]&&(j[a-1]=1,h.push(a-1)),v<t-1&&!o[a+1]&&!j[a+1]&&(j[a+1]=1,h.push(a+1)),C>0&&!o[a-t]&&!j[a-t]&&(j[a-t]=1,h.push(a-t)),C<i-1&&!o[a+t]&&!j[a+t]&&(j[a+t]=1,h.push(a+t))}if(H.length<r)for(let a=0;a<H.length;a++)o[H[a]]=1}return{reach:o,smooth:x,okc:X,medLum:I,palette:z,minRegion:r,runLen:E,minRun:l,anyQualified:k}}function Lt(e,t,i,m,p,x,u,T,c){const y=e*t,L=.045*255*(.045*255);let Q=0;for(let l=0;l<y;l++)Q+=p[l];console.log("[ascii-overlay] grid "+e+"x"+t+" cells="+y+" reached="+(100*Q/y).toFixed(1)+"% minRegion="+c+" medLum="+u.toFixed(1)+" palette="+T.length/3+" colours");const w=new Uint8Array(y),D=[],E=[];for(let l=0;l<y;l++){if(p[l]||w[l])continue;const k=[];for(w[l]=1,D.push(l);D.length;){const o=D.pop();k.push(o);const h=o%e,r=(o-h)/e;h>0&&!p[o-1]&&!w[o-1]&&(w[o-1]=1,D.push(o-1)),h<e-1&&!p[o+1]&&!w[o+1]&&(w[o+1]=1,D.push(o+1)),r>0&&!p[o-e]&&!w[o-e]&&(w[o-e]=1,D.push(o-e)),r<t-1&&!p[o+e]&&!w[o+e]&&(w[o+e]=1,D.push(o+e))}E.push(k)}E.sort(function(l,k){return k.length-l.length});for(let l=0;l<Math.min(6,E.length);l++){const k=E[l];let o=0,h=0,r=0,d=0,I=1e9,z=e,K=0,X=t,H=0;for(let G=0;G<k.length;G++){const j=k[G],n=j%e,a=(j-n)/e;n<z&&(z=n),n>K&&(K=n),a<X&&(X=a),a>H&&(H=a);const v=j*4;if(d+=.2126*i[v]+.7152*i[v+1]+.0722*i[v+2],!m[j]){o++;continue}if(x[j]){r++;continue}let C=1e9;for(let M=0;M<T.length;M+=3){const R=T[M]-i[v],W=T[M+1]-i[v+1],Y=T[M+2]-i[v+2],ne=R*R+W*W+Y*Y;ne<C&&(C=ne)}C>L&&h++,C<I&&(I=C)}console.log("[ascii-overlay] region#"+l+" size="+k.length+" bbox=["+z+"-"+K+","+X+"-"+H+"] meanLum="+(d/k.length).toFixed(1)+" busy="+o+" palette-fail="+h+" matched="+r+" closestPaletteDist="+(I<1e9?Math.sqrt(I).toFixed(1):"n/a")+"  (matched cells form openings only if their own component >= "+c+")")}const O=Math.max(1,Math.ceil(e/110)),A=[];for(let l=t-1;l>=0;l-=O){let k="";for(let o=0;o<e;o+=O){const h=l*e+o;k+=p[h]?"@":m[h]?x[h]?"o":".":"#"}A.push(k)}console.log(`[ascii-overlay] mask (@ bg | . subject-smooth | # subject-busy | o palette-matched but unclaimed)
`+A.join(`
`))}let De=null,P=null,Ee=null;function nt(e,t){if(ge){e.dispose();return}De=e,e.wrapS=vt,e.wrapT=vt,J.uSourceTex.value=e,s.uSourceTex.value=e,s.uImageAspect.value=t,J.uImageAspect.value=t,s.uLoaded.value=!0,ye(),we(),oe()}if(S)P=document.createElement("video"),P.src=S,P.muted=!0,P.loop=!0,P.playsInline=!0,P.crossOrigin="anonymous",P.autoplay=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,P.addEventListener("loadeddata",function(){const e=new Dt(P);nt(e,P.videoWidth/P.videoHeight),Ee=window.setInterval(we,2e3)}),P.autoplay&&P.play().catch(function(){});else if(b){const e=new Et;e.crossOrigin="anonymous",e.load(b,function(t){nt(t,t.image.width/t.image.height)},void 0,function(t){console.error("[ascii-overlay] Failed to load image:",b,t)})}if(_){const e=new Image;e.crossOrigin="anonymous",e.onload=function(){ge||(Fe=e,we(),oe())},e.onerror=function(){console.error("[ascii-overlay] Failed to load mask:",_)},e.src=_}let Oe=0,je=0;function oe(){je*=.95,Oe+=(je-Oe)*.15,s.uChurn.value=Oe,s.uTime.value=ae.ticker.time,s.uLoaded.value&&(U.setRenderTarget(F),U.render(xe,Ie),U.setRenderTarget(null)),U.render(Ze,kt)}ae.ticker.add(oe);let at=!0;const ot=window.matchMedia("(prefers-reduced-motion: reduce)");function We(){document.hidden||!at||ot.matches?ae.ticker.remove(oe):ae.ticker.add(oe)}const it=new IntersectionObserver(([e])=>{at=e.isIntersecting,We()});it.observe(ee),document.addEventListener("visibilitychange",We);function rt(e){const t=te.getBoundingClientRect(),i=U.getPixelRatio(),m=(e.clientX-t.left)*i,p=(t.height-(e.clientY-t.top))*i;s.uClickCenter.value.set(m/s.uCellPx.value.x,p/s.uCellPx.value.y),s.uClickStart.value=ae.ticker.time}ee.addEventListener("pointerdown",rt);let he=null;if(bt&&!ot.matches){const e=ee.closest(".shader-scroll-wrapper"),t=e||ee,i=e?"top top":"top bottom",m=e?"bottom bottom":"bottom top",p={t:0};he=ae.to(p,{t:1,ease:"none",onUpdate:function(){const x=p.t;s.uThreshLow.value=_e+(Z-_e)*x,s.uThreshHigh.value=He+(ue-He)*x},scrollTrigger:{trigger:t,start:i,end:m,scrub:1,onUpdate:function(x){const u=Math.abs(x.getVelocity())/Ht;je=Math.min(1,u)}}})}else s.uThreshLow.value=Z,s.uThreshHigh.value=ue;return document.fonts&&document.fonts.ready&&document.fonts.ready.then(function(){ge||(ce=yt(Le,xt),Qe=ce.aspect,se.image=ce.canvas,se.needsUpdate=!0,ye())}),window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(ae.ticker.remove(oe),oe()),function(){ge=!0,ae.ticker.remove(oe),document.removeEventListener("visibilitychange",We),ee.removeEventListener("pointerdown",rt),clearTimeout(Pe),he&&he.scrollTrigger&&he.scrollTrigger.kill(),he&&he.kill(),et.disconnect(),it.disconnect(),Ue.dispose(),$e.dispose(),Ke.dispose(),De&&De.dispose(),se.dispose(),F&&(F.texture.dispose(),F.dispose()),V&&(V.texture.dispose(),V.dispose()),$&&$.dispose(),Ee&&clearInterval(Ee),P&&(P.pause(),P.removeAttribute("src"),P.load()),U.forceContextLoss(),U.dispose(),te.parentNode&&te.parentNode.removeChild(te)}},[b,S,_,q,B,N,Z,ue,pe,fe,ie,re,Me,Ge,ze,qe,Ne,ve,Ve,ke,Be,Je,Xe,Ae]),le.jsxs("div",{ref:Re,className:`asov_container${f?` ${f}`:""}`,"data-anm-ascii-overlay":!0,role:"img","aria-label":g||"ASCII image effect",children:[b&&le.jsx("img",{src:b,alt:"",className:"z-ascii-fallback"}),S&&le.jsx("video",{src:S,muted:!0,playsInline:!0,preload:"metadata",className:"z-ascii-fallback"})]})}const Jt=`.asov_container {
  position: relative;
  width: 100%;
  height: var(--zeus-animation-height, 600px);
  inset: 0;
  overflow: hidden;
  background: #0a0a0a;
  /* The sandbox's shader-scroll overlay is pointer-events: none; the click
     ripple needs the container hit-testable again. */
  pointer-events: auto;
}

.asov_container canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.asov_container canvas,.z-ascii-fallback{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
`;function Zt(f){return le.jsxs(le.Fragment,{children:[le.jsx("style",{children:Jt}),le.jsx(Bt,{...f})]})}export{Zt as A};
