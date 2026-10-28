import{j as p}from"./index-BzVEzr_h.js";import{r as n}from"./recipe-XmTC6iRi.js";import{g as s}from"./index-xgxdCp6f.js";import{C as H}from"./CustomEase-C73R1l_9.js";import{u as Ee}from"./index-DglL9Jij.js";typeof window<"u"&&(s.registerPlugin(Ee,H.CustomEase),H.CustomEase.get("zeusMotion")||H.CustomEase.create("zeusMotion","M0,0 C0.3,0.9 0.1,1 1,1"),H.CustomEase.get("zeusMotionInOut")||H.CustomEase.create("zeusMotionInOut","M0,0 C0.7,0 0.16,1 1,1"));const Me=.62,ze=.18,Le=.3,Ne=1.3,je=.55,Ie=.95,ve=.5,Ue=.7,Fe=.15,we=.35,Z=.15,He=4,qe={mobile:"(max-width: 479px)",tablet:"(max-width: 991px)",landscape:"(orientation: landscape) and (max-width: 767px)",desktop:"(min-width: 992px)"},We=[{src:"/assets/zeus/hero_run_02.jpg",alt:"Runner silhouetted mid-stride against a bright wall",title:"Drive",label:"Chapter 01"},{src:"/assets/zeus/action_cyclist-climb_02.jpg",alt:"Cyclist climbing in motion blur against a warm backdrop",title:"Endurance",label:"Chapter 02"},{src:"/assets/zeus/hero_profile_02.jpg",alt:"Athlete in profile against a bright orange field",title:"Focus",label:"Chapter 03"}];function ee(r){return String(r+1).padStart(2,"0")}function Be(r){return r?(Array.isArray(r)?r:String(r).split(",")).some(o=>{const i=qe[String(o).trim()];return i&&window.matchMedia(i).matches}):!1}function Ce(r,t,o){const i=document.createElement("span");return i.className=t,r.split("").forEach(a=>{const c=document.createElement("span");c.className=o,c.textContent=a===" "?" ":a,i.appendChild(c)}),i}function xe(r,t,o,i){r.innerHTML="";const a=Ce(t,o,i);return r.appendChild(a),Array.from(a.querySelectorAll("."+i))}function ye(r,t,o,i,a,c){const u=r.querySelector("."+o+":not(.cs_line_out)");if(u){u.classList.add("cs_line_out");const A=u.querySelectorAll("."+i);s.to(A,Object.assign({onComplete:()=>{u.remove()}},a))}const w=Ce(t,o,i);r.appendChild(w);const R=Array.from(w.querySelectorAll("."+i));return s.set(R,c.from),s.to(R,c.to),R}function Ge(r){const t=document.createElement("span");t.className="cs_digit_wrap";const o=document.createElement("span");o.className="cs_digit_roller";for(let i=0;i<=9;i++){const a=document.createElement("span");a.textContent=String(i),o.appendChild(a)}return t.appendChild(o),t._digit=parseInt(r,10),t._roller=o,t}function Xe(r,t,o){r.innerHTML="",t.split("").forEach(c=>{const u=Ge(c);s.set(u._roller,{y:-u._digit+"em"}),r.appendChild(u)});const i=document.createElement("span");i.className="cs_index_divider",i.textContent="/",r.appendChild(i);const a=document.createElement("span");a.className="cs_index_total",a.textContent=ee(o-1),r.appendChild(a)}function Ve(r,t){const o=Array.from(r.querySelectorAll(".cs_digit_wrap"));t.split("").forEach((i,a)=>{const c=o[a];if(!c)return;const u=parseInt(i,10);c._digit=u,s.to(c._roller,{y:-u+"em",duration:Ue,ease:"expo.inOut",force3D:!0,overwrite:!0})})}function Re(r,t,o){const i=r.clientWidth||1,a=[];for(let c=0;c<=o;c++)a.push(Math.round(c*i/o));t.forEach(c=>{for(let u=0;u<o;u++){const w=c.strips[u],R=c.inners[u],A=u<o-1?1:0;w.style.left=a[u]+"px",w.style.width=a[u+1]-a[u]+A+"px",R.style.left=-a[u]+"px",R.style.width=i+"px"}})}function $(r,t){r.style.visibility=t?"":"hidden"}function ke(r){for(let t=0;t<r.strips.length;t++)r.strips[t].style.clipPath="none",r.strips[t].style.removeProperty("--csc")}function Ke({className:r="",images:t=We,duration:o=1.1,ease:i="zeusMotion",columns:a=12,auto:c=0,drag:u=!0,stagger:w=.0125,disable:R,onChange:A}){const J=n.useRef(null),N=n.useRef(null),te=n.useRef(null),re=n.useRef(null),ne=n.useRef(null),q=n.useRef(null),se=n.useRef(null),ie=n.useRef(null),oe=n.useRef(null),O=Math.max(2,Math.min(24,parseInt(a,10)||12)),F=i==="zeusMotion"||i==="zeusMotionInOut"?i:i||"expo.out",le=o*.8,h=n.useRef(0),j=n.useRef(null),Q=n.useRef(0),ce=n.useRef(0),m=n.useRef(null),ae=n.useRef(0),ue=n.useRef(0),W=n.useRef(!1),de=n.useRef(1),B=n.useRef(null),Y=n.useRef(null),I=n.useRef(!1),G=n.useCallback(()=>{const e=j.current;e&&(e.liveRegion.textContent="Slide "+(h.current+1)+" of "+t.length+": "+t[h.current].title)},[t]),pe=n.useCallback(()=>{const e=j.current;if(!e)return;const l=t[h.current],d=xe(e.titleEl,l.title||"","cs_title_line","cs_title_char");s.set(d,{yPercent:0,y:0});const _=xe(e.labelEl,l.label||"","cs_label_line","cs_title_char");s.set(_,{yPercent:0,y:0}),Xe(e.indexEl,ee(h.current),t.length),s.set(e.progressFill,{scaleX:(h.current+1)/t.length,transformOrigin:"left center"}),G()},[t,G]),y=n.useCallback(()=>{B.current&&(clearInterval(B.current),B.current=null)},[]),D=n.useCallback(()=>{y(),c>0&&!I.current&&(B.current=setInterval(()=>{fe.current()},c*1e3))},[c,y]),P=n.useCallback(()=>{c<=0||(y(),clearTimeout(Y.current),Y.current=setTimeout(D,He*1e3))},[c,y,D]),X=n.useCallback((e,l)=>{const d=j.current;if(!d||e===h.current)return;const _=performance.now();if(!I.current&&_-ae.current<150)return;ae.current=_,m.current&&e===m.current.outIndex&&(m.current.tl.progress(1),m.current=null);const U=h.current;h.current=e;const S=t[e];if(I.current){m.current?.tl.kill(),m.current=null,d.layers.forEach((f,x)=>{s.killTweensOf(f),$(f,x===e),s.set(f,{scale:1})}),pe(),A?.({index:e,direction:l,slide:S});return}const V=++ce.current,g=s.timeline({onComplete:()=>{m.current&&m.current.tl===g&&(m.current=null)}});m.current={tl:g,outIndex:U},I.current&&g.timeScale(1e3);const T=d.layers[U],v=d.layers[e],b=d.layerParts[U],k=d.layerParts[e];Q.current+=2,T.style.zIndex=String(t.length+Q.current+1),v.style.zIndex=String(t.length+Q.current),$(T,!0),$(v,!0),s.killTweensOf(k.strips),s.killTweensOf(v),s.killTweensOf(k.shades),ke(k),s.set(v,{scale:Ne,transformOrigin:"50% 50%",force3D:!0}),s.set(k.shades,{opacity:ze});const E=o*Me,C=(o-E)/Math.max(1,O-1);s.killTweensOf(b.strips);for(let f=0;f<b.strips.length;f++)b.strips[f].style.clipPath=l>0?"inset(0% 0% 0% var(--csc, 0%))":"inset(0% var(--csc, 0%) 0% 0%)";s.set(b.strips,{"--csc":"0%"}),g.to(b.strips,{"--csc":"105%",duration:E,ease:F,stagger:l>0?C:-C,overwrite:!0},0),s.killTweensOf(b.shades),g.to(b.shades,{opacity:Le,duration:E*.8,ease:"power1.in",stagger:l>0?C:-C,overwrite:"auto"},0),g.to(v,{scale:1,duration:o*1.05,ease:F,force3D:!0},0),g.to(k.shades,{opacity:0,duration:o*1.05,ease:F},0),g.call(()=>{V===ce.current&&d.layers.forEach((f,x)=>{const K=d.layerParts[x];s.killTweensOf(K.strips),s.killTweensOf(f),s.killTweensOf(K.shades),ke(K),s.set(f,{scale:1}),s.set(K.shades,{opacity:0}),$(f,x===e),f.style.zIndex=String(x===e?t.length:x)})},null,o),ye(d.titleEl,S.title||"","cs_title_line","cs_title_char",{yPercent:l>0?-120:120,y:0,duration:je,ease:"zeusMotionInOut",stagger:l>0?w:-w,force3D:!0,overwrite:!0},{from:{yPercent:l>0?120:-120,y:0},to:{yPercent:0,y:0,duration:Ie,ease:"zeusMotionInOut",stagger:l>0?w:-w,force3D:!0,overwrite:!0}}),ye(d.labelEl,S.label||"","cs_label_line","cs_title_char",{yPercent:l>0?-110:110,y:0,duration:ve*.7,ease:"zeusMotionInOut",force3D:!0,overwrite:!0},{from:{yPercent:l>0?110:-110,y:0},to:{yPercent:0,y:0,duration:ve,ease:"zeusMotionInOut",force3D:!0,overwrite:!0}}),Ve(d.indexEl,ee(e)),s.set(d.progressFill,{transformOrigin:"left center"}),g.to(d.progressFill,{scaleX:(e+1)/t.length,duration:le,ease:F,force3D:!0,overwrite:"auto"},0),G(),A?.({index:e,direction:l,slide:S})},[t,o,O,F,w,le,G,A]),M=n.useCallback(()=>{const e=(h.current+1)%t.length;X(e,1)},[t.length,X]),z=n.useCallback(()=>{const e=(h.current-1+t.length)%t.length;X(e,-1)},[t.length,X]),fe=n.useRef(M),Se=n.useRef(z);fe.current=M,Se.current=z;const{contextSafe:L}=Ee(()=>{if(Be(R))return;const e=N.current,l=J.current;if(!e||!l||!t.length)return;h.current=Math.min(h.current,t.length-1),e.innerHTML="";const d=document.createElement("div");d.className="cs_layers";const _=[],U=t.map((g,T)=>{const v=document.createElement("div");v.className="cs_layer",v.style.zIndex=String(T),v.style.visibility=T===h.current?"":"hidden";const b={strips:[],inners:[],imgs:[],shades:[]};for(let k=0;k<O;k++){const E=document.createElement("div");E.className="cs_strip";const C=document.createElement("div");C.className="cs_strip_inner";const f=document.createElement("img");f.className="cs_layer_img",f.src=g.src,f.alt=k===0&&g.alt||"",f.loading="eager";const x=document.createElement("div");x.className="cs_shade",x.setAttribute("aria-hidden","true"),C.appendChild(f),E.appendChild(C),E.appendChild(x),v.appendChild(E),b.strips.push(E),b.inners.push(C),b.imgs.push(f),b.shades.push(x)}return _.push(b),d.appendChild(v),v}),S=document.createElement("div");S.className="cs_scrim",S.setAttribute("aria-hidden","true"),e.appendChild(d),e.appendChild(S),j.current={layers:U,layerParts:_,labelEl:te.current,titleEl:re.current,indexEl:ne.current,progressFill:q.current,prevBtn:se.current,nextBtn:ie.current,liveRegion:oe.current},Re(e,_,O),pe(),l.setAttribute("role","region"),l.setAttribute("aria-roledescription","carousel"),l.setAttribute("aria-label",t[h.current].title||""),l.setAttribute("tabindex",l.getAttribute("tabindex")||"0");const V=s.matchMedia();return V.add("(prefers-reduced-motion: reduce)",()=>(I.current=!0,y(),m.current?.tl.progress(1),()=>{I.current=!1})),D(),()=>{V.revert(),y(),clearTimeout(Y.current),m.current&&m.current.tl.kill(),U.forEach((g,T)=>{s.killTweensOf(_[T].strips),s.killTweensOf(_[T].imgs)}),q.current&&s.killTweensOf(q.current)}},{scope:J,dependencies:[t,O,R]}),Te=L(()=>{z(),P()}),Ae=L(()=>{M(),P()}),he=L((e,l)=>{const d=e.currentTarget.querySelector(".cs_arrow_icon");s.to(d,{x:l*3,duration:we,ease:"back.out(2)",overwrite:"auto",force3D:!0})}),me=L(e=>{const l=e.currentTarget.querySelector(".cs_arrow_icon");s.to(l,{x:0,duration:we,ease:"expo.out",overwrite:"auto",force3D:!0})}),ge=L(e=>{s.to(e.currentTarget,{scale:.92,duration:Z,ease:"power2.out",overwrite:"auto",force3D:!0})}),be=L(e=>{s.to(e.currentTarget,{scale:1,duration:Z,ease:"back.out(2.5)",overwrite:"auto",force3D:!0})}),_e=L(e=>{s.to(e.currentTarget,{scale:1,duration:Z,ease:"power2.out",overwrite:"auto",force3D:!0})}),Oe=n.useCallback(e=>{e.key==="ArrowRight"||e.key==="ArrowDown"?(M(),P()):(e.key==="ArrowLeft"||e.key==="ArrowUp")&&(z(),P())},[M,z,P]),De=n.useCallback(e=>{if(u){if(e.target.closest(".cs_pill")){W.current=!1;return}W.current=!0,ue.current=e.clientX,de.current=N.current?N.current.clientWidth:1}},[u]),Pe=n.useCallback(e=>{if(!W.current)return;W.current=!1;const d=e.clientX-ue.current,_=de.current*Fe;Math.abs(d)<_||(d<0?M():z(),P())},[M,z,P]);return n.useEffect(()=>{let e=null;function l(){clearTimeout(e),e=setTimeout(()=>{!j.current||!N.current||Re(N.current,j.current.layerParts,O)},150)}return window.addEventListener("resize",l),()=>{clearTimeout(e),window.removeEventListener("resize",l)}},[O]),n.useEffect(()=>{function e(){document.hidden?y():D()}return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[y,D]),p.jsxs("div",{ref:J,className:`cs_wrap${r?" "+r:""}`,"data-anm-curtain-slider":!0,onKeyDown:Oe,onPointerDown:De,onPointerUp:Pe,onMouseEnter:y,onMouseLeave:D,onFocus:y,onBlur:D,children:[p.jsx("div",{className:"cs_stage",ref:N,"data-anm-cs-stage":!0,children:t[0]&&p.jsx("img",{className:"cs_layer_img",src:t[0].src,alt:t[0].alt||""})}),p.jsx("div",{className:"cs_label",ref:te,children:t[0]?.label}),p.jsx("h2",{className:"cs_title",ref:re,children:t[0]?.title}),p.jsx("div",{className:"cs_index",ref:ne,"aria-hidden":"true"}),p.jsx("div",{className:"cs_progress","aria-hidden":"true",children:p.jsx("div",{className:"cs_progress_fill",ref:q})}),p.jsxs("div",{className:"cs_pill",role:"group","aria-label":"Slide controls",children:[p.jsx("button",{ref:se,type:"button",className:"cs_arrow","aria-label":"Previous slide",onClick:Te,onMouseEnter:e=>he(e,-1),onMouseLeave:me,onPointerDown:ge,onPointerUp:be,onPointerLeave:_e,children:p.jsx("svg",{className:"cs_arrow_icon",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:p.jsx("path",{d:"M10 3L5 8L10 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),p.jsx("button",{ref:ie,type:"button",className:"cs_arrow","aria-label":"Next slide",onClick:Ae,onMouseEnter:e=>he(e,1),onMouseLeave:me,onPointerDown:ge,onPointerUp:be,onPointerLeave:_e,children:p.jsx("svg",{className:"cs_arrow_icon",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:p.jsx("path",{d:"M6 3L11 8L6 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),p.jsx("div",{className:"cs_live","aria-live":"polite",ref:oe})]})}const $e=`/* Curtain Slider - full-bleed drop-in image slider. Advancing runs a
   direction-aware clip-path curtain wipe on the incoming layer paired with a
   slide-in, while the outgoing layer counter-drifts and darkens. No Webflow -
   CSS variables + @font-face allowed. */



.cs_wrap {
  --cs-bg:      #101010;
  --cs-fg:      rgba(255, 250, 242, 0.92);
  --cs-fg-soft: rgba(255, 255, 255, 0.85);
  --cs-fg-dim:  rgba(255, 255, 255, 0.75);
  --cs-line:    rgba(255, 255, 255, 0.25);
  --cs-line-on: rgba(255, 255, 255, 0.9);
  --cs-pill-bg: rgba(255, 255, 255, 0.1);
  --cs-circle:  rgba(255, 255, 255, 0.1);
  --cs-circle-hover: rgba(255, 255, 255, 0.22);
  --cs-margin:  40px;
  --cs-sans:    var(--font-inter, Inter), -apple-system, BlinkMacSystemFont, sans-serif;
}

.cs_wrap {
  position: relative;
  width: 100%;
  height: var(--zeus-animation-height, 640px);
  overflow: hidden;
  background: var(--cs-bg);
  font-family: var(--cs-sans);
  -webkit-font-smoothing: antialiased;
  touch-action: pan-y;
  outline: none;
}

.cs_slides {
  display: none;
}

.cs_stage {
  position: relative;
  width: 100%;
  height: 100%;
}

/* ---- Image layers: each layer is N column strips. A strip is an
   overflow-hidden mask; its inner is the full stage rect offset left so
   the strips reassemble one seamless cover-fit photo. Strip left/width
   and inner left/width are integer-snapped px, set by JS. ---- */
.cs_layers {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.cs_layer {
  position: absolute;
  inset: 0;
}

/* No will-change here on purpose: promoting all strips to their own
   compositor layers caused tile-rasterization churn on 120Hz retina
   fullscreen (flashing rectangles during the wipe). The shipped
   wipe-slider/step-wipe clip wipes run clean with zero will-change. */
.cs_strip {
  position: absolute;
  top: 0;
  height: 100%;
  overflow: hidden;
}

.cs_strip_inner {
  position: absolute;
  top: 0;
  height: 100%;
}

.cs_layer_img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform-origin: 50% 50%;
}

/* Per-strip darkening overlay - dimming tweens THIS element's opacity
   (GPU-composited) instead of filter: brightness on the image (animated
   filters repaint per frame and flicker at fullscreen retina). */
.cs_shade {
  position: absolute;
  inset: 0;
  background: #0a0a0a;
  opacity: 0;
  pointer-events: none;
}

/* ---- Scrim for text legibility ---- */
.cs_scrim {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(to top, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.05) 45%, rgba(10, 10, 10, 0.3) 100%);
  pointer-events: none;
}

/* ---- Label, top-left ---- */
.cs_label {
  position: absolute;
  left: var(--cs-margin);
  top: var(--cs-margin);
  z-index: 4;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--cs-fg-soft);
  pointer-events: none;
}

.cs_label_line {
  position: relative;
  display: block;
  white-space: nowrap;
  width: max-content;
  overflow: hidden;
}

/* ---- Display title, bottom-left ---- */
.cs_title {
  position: absolute;
  left: var(--cs-margin);
  bottom: var(--cs-margin);
  z-index: 4;
  margin: 0;
  font-size: clamp(48px, 8vw, 120px);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 0.95;
  color: var(--cs-fg);
  width: max-content;
  max-width: calc(100% - var(--cs-margin) * 2);
  pointer-events: none;
}

.cs_title_line {
  position: relative;
  display: block;
  white-space: nowrap;
  width: max-content;
  overflow-x: visible;
  overflow-y: hidden;
  padding-bottom: 0.18em;
  margin-bottom: -0.18em;
}

.cs_title_char {
  position: relative;
  display: inline-block;
}

/* ---- Index roller, bottom-right ---- */
.cs_index {
  position: absolute;
  right: var(--cs-margin);
  bottom: var(--cs-margin);
  z-index: 4;
  display: flex;
  /* center, not baseline: an overflow-hidden digit box's flex baseline is
     its BOTTOM edge, which rides the rollers up relative to the divider */
  align-items: center;
  line-height: 1;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--cs-fg-dim);
  pointer-events: none;
}

.cs_digit_wrap {
  position: relative;
  display: inline-block;
  overflow-x: visible;
  overflow-y: hidden;
  height: 1em;
  width: 0.62em;
  vertical-align: top;
}

.cs_digit_roller {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
}

.cs_digit_roller span {
  display: block;
  height: 1em;
  line-height: 1;
}

.cs_index_divider {
  display: inline-block;
  margin: 0 0.25em;
  color: var(--cs-line);
  line-height: 1;
}

.cs_index_total {
  display: inline-block;
  line-height: 1;
}

/* ---- Progress hairline, top edge ---- */
.cs_progress {
  position: absolute;
  left: var(--cs-margin);
  right: var(--cs-margin);
  top: 24px;
  z-index: 4;
  height: 1px;
  background: var(--cs-line);
  overflow: hidden;
}

.cs_progress_fill {
  position: absolute;
  inset: 0;
  background: var(--cs-line-on);
  transform: scaleX(0);
}

/* ---- Control pill, bottom center ---- */
.cs_pill {
  position: absolute;
  left: 50%;
  bottom: 40px;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px;
  border-radius: 999px;
  background: var(--cs-pill-bg);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  transform: translateX(-50%);
}

.cs_arrow {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  border-radius: 999px;
  border: none;
  background: var(--cs-circle);
  color: var(--cs-fg);
  cursor: pointer;
}

.cs_arrow:hover {
  background: var(--cs-circle-hover);
}

.cs_arrow:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
}

.cs_arrow_icon {
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
}

/* ---- Screen-reader-only live region ---- */
.cs_live {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* Outgoing text lines get lifted onto an absolute overlay inside the same
   element so the exit tween keeps running while the new line animates in.
   Declared LAST: it must win the cascade against the *_line rules above
   (equal specificity - source order decides). */
.cs_line_out {
  position: absolute;
  top: 0;
  left: 0;
  width: max-content;
  min-width: 100%;
}

/* ---- Mobile ---- */
@media (max-width: 767px) {
  .cs_wrap {
    --cs-margin: 20px;
  }

  .cs_title {
    font-size: clamp(36px, 12vw, 64px);
    max-width: calc(100% - var(--cs-margin) * 2 - 60px);
  }

  .cs_index {
    display: none;
  }

  .cs_progress {
    top: 16px;
  }

  .cs_pill {
    bottom: 28px;
  }
}
`;function tt(r){return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:$e}),p.jsx(Ke,{...r})]})}export{tt as C};
