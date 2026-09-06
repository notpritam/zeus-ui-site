(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41337,e=>{"use strict";var r=e.i(38935),t=e.i(83543);e.s(["default",0,function(){return(0,r.jsx)("div",{className:"w-full overflow-hidden rounded-2xl",children:(0,r.jsx)(t.MultiLevelDrawerMenu,{logo:"Kinetic Athletics",exploreHref:"/components/",sublists:{running:[{label:"Shoes",href:"/components/scale-slider/"},{label:"Collection",href:"/components/curtain-slider/"}],cycling:[{label:"Gear",href:"/components/image-fly-in/"}],tennis:[{label:"Court issue",href:"/components/feature-dialog/"}],track:[{label:"Membership",href:"/components/animated-pricing/"}]}})})}])},40639,function(e){e.n(e.i(41337))},48937,e=>{"use strict";var r=e.i(46585),t=e.i(32919);let a="u">typeof document?r.useLayoutEffect:r.useEffect,l=e=>e&&!Array.isArray(e)&&"object"==typeof e,n=[],i={},o=t.default,s=(e,t=n)=>{let s=i;l(e)?(s=e,e=null,t="dependencies"in s?s.dependencies:n):l(t)&&(t="dependencies"in(s=t)?s.dependencies:n),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");let{scope:m,revertOnUpdate:d}=s,c=(0,r.useRef)(!1),u=(0,r.useRef)(o.context(()=>{},m)),p=(0,r.useRef)(e=>u.current.add(null,e)),g=t&&t.length&&!d;return g&&a(()=>(c.current=!0,()=>u.current.revert()),n),a(()=>{if(e&&u.current.add(e,m),!g||!c.current)return()=>u.current.revert()},t),{context:u.current,contextSafe:p.current}};s.register=e=>{o=e},s.headless=!0,e.s(["useGSAP",0,s])},83543,e=>{"use strict";var r=e.i(38935),t=e.i(46585),a=e.i(32919),l=e.i(48937);a.gsap.registerPlugin(l.useGSAP);let n="back.out",i="inset(0% 100% 0% 0% round 8px)",o="inset(0% 0% 0% 0% round 8px)",s="#0a0a0a",m="#ffffff",d=[{id:"running",label:"Running"},{id:"cycling",label:"Cycling"},{id:"tennis",label:"Tennis"},{id:"track",label:"Track"}],c={running:["Shoes","Shorts","Shirts","Tank tops","Fueling"],cycling:["Bikes","Helmets","Jerseys","Bib shorts","Accessories"],tennis:["Racquets","Shoes","Apparel","Balls","Bags"],track:["Spikes","Singlets","Shorts","Recovery","Training"]},u=[{label:"About",href:"#"},{label:"Our Philosophy",href:"#"}],p=[{src:"/assets/annnimate/running-hero-female-1.avif",alt:"",label:"Events"},{src:"/assets/annnimate/street-running-earbuds-3.avif",alt:"",label:"Merch"}];function g({className:e="",exploreHref:f="#",onOpenChange:h,onNavigate:_,duration:b=.9,ease:x="expo.out",stagger:v=.06,panelBg:y="#ececec",logo:w="Kinetic Athletics",primaries:k=d,sublists:j=c,secondaryLinks:N=u,cards:R=p,heroEyebrow:C="Spring Collection / 03",heroHeading:z="The shape of distance.",heroSub:E="Apparel and footwear for the long way home.",heroImage:A="/assets/annnimate/street-running-hero-4.avif"}){let S=(0,t.useId)(),P=(0,t.useRef)(null),D=(0,t.useRef)(null),M=(0,t.useRef)(null),T=(0,t.useRef)(null),L=(0,t.useRef)(null),B=(0,t.useRef)(null),O=(0,t.useRef)(null),F=(0,t.useRef)(null),G=(0,t.useRef)(null),H=(0,t.useRef)(null),K=(0,t.useRef)(null),I=(0,t.useRef)(null),U=(0,t.useRef)(null),W=(0,t.useRef)([]),X=(0,t.useRef)([]),$=(0,t.useRef)([]),q=(0,t.useRef)({}),J=(0,t.useRef)({}),Q=(0,t.useRef)({}),V=(0,t.useRef)(null),Y=(0,t.useRef)([]),Z=(0,t.useRef)([]),ee=(0,t.useRef)(null),er=(0,t.useRef)(null),et=(0,t.useRef)(null),ea=(0,t.useRef)(!1),el=(0,t.useRef)(!1),en=(0,t.useRef)(null),ei=(0,t.useRef)(null),[eo,es]=(0,t.useState)(!1),em=(0,t.useCallback)(()=>window.matchMedia("(max-width: 767px)").matches,[]),ed=(0,t.useCallback)(()=>{let e=L.current;e&&(em()?a.gsap.set(e,{clipPath:o,xPercent:0,x:"100vw"}):a.gsap.set(e,{clipPath:i,xPercent:0,x:0}))},[em]),ec=(0,t.useCallback)(e=>{k.forEach(r=>{let t=q.current[r.id];if(!t)return;let a=r.id===e;t.classList.toggle("mldm_sublist_active",a),t.setAttribute("aria-hidden",String(!a)),t.style.visibility=a?"visible":"hidden",t.style.pointerEvents=a?"auto":"none"}),en.current=e,W.current.forEach((r,t)=>{r&&r.setAttribute("aria-expanded",String(k[t]?.id===e))})},[k]),eu=(0,t.useCallback)(e=>{let r=J.current[e]||[],t=Q.current[e]||[];r.forEach(e=>{e&&a.gsap.set(e,{x:0,opacity:0})}),t.forEach(e=>{e&&a.gsap.set(e,{scale:0})})},[]),ep=(0,t.useCallback)(()=>{ei.current&&(clearTimeout(ei.current),ei.current=null)},[]),{contextSafe:eg}=(0,l.useGSAP)(()=>{let e=T.current,r=L.current,t=D.current,l=M.current,n=O.current,o=I.current,m=F.current,d=H.current,c=K.current;if(e&&t&&n)return e&&(e.style.backgroundColor=y),r&&(r.style.backgroundColor=y),t.setAttribute("inert",""),t.setAttribute("aria-hidden","true"),a.gsap.set(e,{clipPath:i}),ed(),a.gsap.set(l,{opacity:0}),a.gsap.set(n,{color:s}),o&&a.gsap.set(o,{color:s}),m&&a.gsap.set(m,{y:0}),d&&a.gsap.set(d,{y:-3,rotation:0}),c&&a.gsap.set(c,{y:3,rotation:0}),k.forEach(e=>{let r=q.current[e.id];r&&(r.classList.remove("mldm_sublist_active"),r.setAttribute("aria-hidden","true"),r.style.visibility="hidden",r.style.pointerEvents="none")}),et.current=a.gsap.matchMedia(),et.current.add("(prefers-reduced-motion: reduce)",()=>{}),()=>{ee.current&&ee.current.kill(),er.current&&er.current.kill(),et.current&&et.current.revert(),ep()}},{scope:P,dependencies:[y]}),ef=eg(()=>{let e=T.current;L.current;let r=D.current,t=M.current,l=O.current,n=I.current,d=F.current,c=G.current,u=H.current,p=K.current;if(!e||!r||!l)return;ee.current&&ee.current.kill(),er.current&&er.current.kill();let g=$.current.filter(Boolean),f=[];V.current&&f.push(V.current),Y.current.forEach(e=>{e&&f.push(e)}),Z.current.forEach(e=>{e&&f.push(e)});let h=[...g,...f],_=c?c.offsetHeight:16;ee.current=a.gsap.timeline({paused:!0,defaults:{ease:x,easeReverse:!0,force3D:!0},onStart:()=>{r.removeAttribute("inert"),r.setAttribute("aria-hidden","false"),P.current?.dispatchEvent(new CustomEvent("anm-mldm-open",{bubbles:!0,detail:{container:P.current}}))}});let y=ee.current;window.matchMedia("(prefers-reduced-motion: reduce)").matches&&y.timeScale(1e3),y.set(e,{clipPath:i}),y.set(t,{opacity:0}),y.set(l,{color:s}),n&&y.set(n,{color:s}),y.set(d,{y:0}),y.set(u,{y:-3,rotation:0}),y.set(p,{y:3,rotation:0}),X.current.forEach(e=>{e&&y.set(e,{scale:0})}),y.set(h,{opacity:0,x:-16}),y.to(t,{opacity:1,duration:.75*b},0),y.to(e,{clipPath:o,duration:b},.05),y.to(l,{color:m,duration:.6*b},.2*b),n&&y.to(n,{color:m,duration:.6*b},.2*b),y.to(d,{y:-(_+2),duration:.55*b},.2*b),y.to(u,{y:0,rotation:45,duration:.6*b},.2*b),y.to(p,{y:0,rotation:-45,duration:.6*b},.2*b),y.to(g,{opacity:1,x:0,duration:.55,stagger:v},.35*b),f.length&&y.to(f,{opacity:1,x:0,duration:.55,stagger:.7*v},.45*b);let w=.55*b;er.current=a.gsap.timeline({paused:!0,defaults:{ease:"expo.out",force3D:!0},onComplete:()=>{r.setAttribute("inert",""),r.setAttribute("aria-hidden","true"),P.current?.dispatchEvent(new CustomEvent("anm-mldm-close",{bubbles:!0,detail:{container:P.current}}))}});let k=er.current;window.matchMedia("(prefers-reduced-motion: reduce)").matches&&k.timeScale(1e3),k.to(h,{opacity:0,duration:.15,stagger:.3*v},0),k.to(e,{clipPath:i,duration:w},.05),k.to(t,{opacity:0,duration:.8*w},.1),k.to(l,{color:s,duration:.6*w},.05),n&&k.to(n,{color:s,duration:.6*w},.05),k.to(d,{y:0,duration:.55*w},.05),k.to(u,{y:-3,rotation:0,duration:.6*w},.05),k.to(p,{y:3,rotation:0,duration:.6*w},.05)}),eh=eg(e=>{if(ep(),!(j[e]&&j[e].length))return void e_();if(el.current&&en.current===e)return;if(el.current&&en.current!==e)return void eb(e);el.current=!0,ec(e),eu(e);let r=L.current;if(!r)return;em()?a.gsap.to(r,{x:0,duration:.5,ease:"expo.out",easeReverse:!0,force3D:!0,overwrite:"auto"}):a.gsap.to(r,{clipPath:o,duration:.6,ease:"expo.out",easeReverse:!0,force3D:!0,overwrite:"auto"});let t=J.current[e]||[];t.length&&a.gsap.fromTo(t,{opacity:0,x:-16},{opacity:1,x:0,duration:.5,stagger:v,ease:"expo.out",easeReverse:!0,force3D:!0,overwrite:"auto",delay:.1})}),e_=eg(()=>{if(ep(),!el.current)return;el.current=!1;let e=L.current;e&&(em()?a.gsap.to(e,{x:"100vw",duration:.4,ease:"expo.out",force3D:!0,overwrite:"auto"}):a.gsap.to(e,{clipPath:i,duration:.45,ease:"expo.out",force3D:!0,overwrite:"auto"}))}),eb=eg(e=>{let r=en.current,t=J.current[r]||[],l=J.current[e]||[];function n(){ec(e),eu(e),l.length&&a.gsap.fromTo(l,{opacity:0,x:-16},{opacity:1,x:0,duration:.45,ease:"expo.out",easeReverse:!0,stagger:v,force3D:!0,overwrite:"auto"})}t.length?a.gsap.to(t,{opacity:0,x:-8,duration:.18,ease:"expo.out",stagger:.3*v,overwrite:"auto",onComplete:n}):n()}),ex=(0,t.useCallback)(()=>{ep(),ei.current=setTimeout(()=>{ei.current=null,e_()},200)},[ep,e_]),ev=eg(()=>{ea.current||(ea.current=!0,es(!0),h?.(!0),O.current?.setAttribute("aria-expanded","true"),O.current?.setAttribute("aria-label","Close navigation menu"),el.current=!1,en.current=null,ed(),ef(),er.current&&er.current.pause(0),ee.current?.restart())}),ey=eg(()=>{ea.current&&(ea.current=!1,es(!1),h?.(!1),e_(),O.current?.setAttribute("aria-expanded","false"),O.current?.setAttribute("aria-label","Open navigation menu"),O.current?.focus(),ee.current&&ee.current.pause(),er.current&&er.current.restart())}),ew=(0,t.useCallback)(()=>{ea.current?ey():ev()},[ev,ey]),ek=eg(e=>{if(!ea.current||em())return;ep();let r=k[e]?.id;r&&j[r]?.length?eh(r):ex();let t=X.current[e],l=$.current[e];if(!t||!l)return;let i=t.offsetWidth+12;a.gsap.to(t,{scale:1,duration:.4,ease:n,overwrite:"auto",force3D:!0}),a.gsap.to(l,{x:i,duration:.4,ease:n,overwrite:"auto",force3D:!0})}),ej=eg(e=>{let r=X.current[e],t=$.current[e];r&&t&&(a.gsap.to(r,{scale:0,duration:.4,ease:n,overwrite:"auto",force3D:!0}),a.gsap.to(t,{x:0,duration:.4,ease:n,overwrite:"auto",force3D:!0}))}),eN=eg(e=>{if(!ea.current)return;ep();let r=k[e]?.id;r&&j[r]?.length?eh(r):e_()}),eR=(0,t.useCallback)(e=>{if(!ea.current||em())return;let r=L.current;r&&r.contains(e.relatedTarget)||ex()},[em,ex]),eC=(0,t.useCallback)(()=>{em()||ep()},[em,ep]),ez=(0,t.useCallback)(e=>{if(!ea.current||em())return;let r=B.current;r&&r.contains(e.relatedTarget)||ex()},[em,ex]),eE=eg((e,r)=>{let t=(Q.current[e]||[])[r],l=(J.current[e]||[])[r];if(!t||!l)return;let i=t.offsetWidth+10;a.gsap.to(t,{scale:1,duration:.4,ease:n,overwrite:"auto",force3D:!0}),a.gsap.to(l,{x:i,duration:.4,ease:n,overwrite:"auto",force3D:!0})}),eA=eg((e,r)=>{let t=(Q.current[e]||[])[r],l=(J.current[e]||[])[r];t&&l&&(a.gsap.to(t,{scale:0,duration:.4,ease:n,overwrite:"auto",force3D:!0}),a.gsap.to(l,{x:0,duration:.4,ease:n,overwrite:"auto",force3D:!0}))});return(0,t.useEffect)(()=>{let e=e=>{"Escape"===e.key&&ea.current&&ey()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[ey]),(0,t.useEffect)(()=>{let e,r=()=>{clearTimeout(e),e=setTimeout(()=>{ed()},150)};return window.addEventListener("resize",r),()=>{clearTimeout(e),window.removeEventListener("resize",r)}},[ed]),(0,r.jsxs)("div",{ref:P,onClick:e=>{let r=e.target.closest("a");r&&_?.(r.getAttribute("href"))},className:`mldm_wrap${e?" "+e:""}`,"data-anm-multi-level-drawer-menu":!0,children:[(0,r.jsx)("div",{className:"mldm_page","data-anm-mldm-page":!0,children:(0,r.jsx)("section",{className:"mldm_page_hero",children:(0,r.jsxs)("div",{className:"mldm_page_inner",children:[(0,r.jsxs)("div",{className:"mldm_page_text",children:[(0,r.jsx)("p",{className:"mldm_page_eyebrow",children:C}),(0,r.jsx)("h1",{className:"mldm_page_heading",children:z}),(0,r.jsx)("p",{className:"mldm_page_sub",children:E})]}),(0,r.jsx)("div",{className:"mldm_page_poster",children:(0,r.jsx)("img",{className:"mldm_page_poster_img",src:A,alt:""})})]})})}),(0,r.jsx)("span",{ref:I,className:"mldm_logo","data-anm-mldm-logo":!0,children:w}),(0,r.jsxs)("button",{ref:O,className:"mldm_toggle","data-anm-mldm-toggle":!0,"aria-expanded":eo,"aria-controls":S,"aria-label":"Open navigation menu",onClick:ew,children:[(0,r.jsx)("span",{className:"mldm_toggle_label_wrap",children:(0,r.jsxs)("span",{ref:F,className:"mldm_toggle_label_track","data-anm-mldm-label-track":!0,children:[(0,r.jsx)("span",{ref:G,className:"mldm_toggle_label mldm_toggle_label_open","data-anm-mldm-label-open":!0,children:"Menu"}),(0,r.jsx)("span",{className:"mldm_toggle_label mldm_toggle_label_close",children:"Close"})]})}),(0,r.jsxs)("span",{className:"mldm_toggle_icon","aria-hidden":"true",children:[(0,r.jsx)("span",{ref:H,className:"mldm_toggle_line mldm_toggle_line_top","data-anm-mldm-icon-top":!0}),(0,r.jsx)("span",{ref:K,className:"mldm_toggle_line mldm_toggle_line_bottom","data-anm-mldm-icon-bottom":!0})]})]}),(0,r.jsxs)("div",{ref:D,className:"mldm_overlay",id:S,"data-anm-mldm-overlay":!0,role:"dialog","aria-modal":"true","aria-label":"Navigation","aria-hidden":"true",inert:!0,children:[(0,r.jsx)("button",{ref:M,className:"mldm_scrim","data-anm-mldm-scrim":!0,"aria-label":"Close menu",tabIndex:-1,onClick:ey}),(0,r.jsx)("aside",{ref:T,className:"mldm_panel mldm_panel_primary","data-anm-mldm-panel":!0,"data-anm-mldm-panel-level":"1",children:(0,r.jsxs)("div",{className:"mldm_panel_inner",children:[(0,r.jsxs)("nav",{ref:B,className:"mldm_primary_nav","aria-label":"Primary categories",onMouseLeave:eR,children:[(0,r.jsx)("ul",{className:"mldm_list",children:k.map((e,t)=>(0,r.jsx)("li",{className:"mldm_item",children:(0,r.jsxs)("button",{ref:e=>{W.current[t]=e},className:"mldm_primary","data-anm-mldm-primary":!0,"data-anm-mldm-target":e.id,"aria-expanded":"false",onMouseEnter:()=>ek(t),onMouseLeave:()=>ej(t),onClick:()=>eN(t),children:[(0,r.jsx)("span",{ref:e=>{X.current[t]=e},className:"mldm_primary_dot","aria-hidden":"true"}),(0,r.jsx)("span",{ref:e=>{$.current[t]=e},className:"mldm_primary_label",children:e.label})]})},e.id))}),(0,r.jsx)("a",{ref:V,className:"mldm_explore","data-anm-mldm-secondary":!0,href:f,children:"Explore all"})]}),(0,r.jsx)("div",{className:"mldm_cards",children:R.map((e,t)=>(0,r.jsxs)("a",{ref:e=>{Y.current[t]=e},className:"mldm_card","data-anm-mldm-secondary":!0,href:e.href||f,children:[(0,r.jsx)("span",{className:"mldm_card_media",children:(0,r.jsx)("img",{className:"mldm_card_img",src:e.src,alt:e.alt||""})}),(0,r.jsx)("span",{className:"mldm_card_label",children:e.label})]},e.label))}),(0,r.jsx)("nav",{className:"mldm_footer_nav","aria-label":"Secondary",children:N.map((e,t)=>(0,r.jsx)("a",{ref:e=>{Z.current[t]=e},className:"mldm_footer_link","data-anm-mldm-secondary":!0,href:e.href,children:e.label},e.label))})]})}),(0,r.jsxs)("aside",{ref:L,className:"mldm_panel mldm_panel_secondary","data-anm-mldm-panel":!0,"data-anm-mldm-panel-level":"2",onMouseEnter:eC,onMouseLeave:ez,children:[(0,r.jsxs)("button",{ref:U,className:"mldm_back","data-anm-mldm-back":!0,"aria-label":"Back to primary categories",onClick:e_,children:[(0,r.jsx)("span",{className:"mldm_back_icon","aria-hidden":"true"}),(0,r.jsx)("span",{className:"mldm_back_label",children:"Back"})]}),(0,r.jsxs)("div",{className:"mldm_panel_inner",children:[(0,r.jsx)("div",{className:"mldm_sublist_stack","data-anm-mldm-sublist-stack":!0,children:k.map(e=>{let t=j[e.id]||[];return J.current[e.id]||(J.current[e.id]=[]),Q.current[e.id]||(Q.current[e.id]=[]),(0,r.jsx)("div",{ref:r=>{q.current[e.id]=r},className:`mldm_sublist${e.id===k[0]?.id?" mldm_sublist_active":""}`,"data-anm-mldm-sublist":!0,"data-anm-mldm-sublist-for":e.id,"aria-hidden":e.id!==k[0]?.id,children:(0,r.jsx)("ul",{className:"mldm_list",children:t.map((t,a)=>(0,r.jsx)("li",{className:"mldm_item",children:(0,r.jsxs)("a",{href:"string"==typeof t?f:t.href,onClick:ey,className:"mldm_sublink","data-anm-mldm-secondary-link":!0,onMouseEnter:()=>eE(e.id,a),onMouseLeave:()=>eA(e.id,a),children:[(0,r.jsx)("span",{ref:r=>{Q.current[e.id][a]=r},className:"mldm_sublink_dot","aria-hidden":"true"}),(0,r.jsx)("span",{ref:r=>{J.current[e.id][a]=r},className:"mldm_sublink_label",children:"string"==typeof t?t:t.label})]})},"string"==typeof t?t:t.href))})},e.id)})}),(0,r.jsx)("a",{className:"mldm_sub_explore","data-anm-mldm-secondary":!0,href:f,children:"Explore all"})]})]})]})]})}let f=`.mldm_wrap {
  position: relative;
  width: 100%;
  height: var(--zeus-animation-height, 640px);
  overflow: hidden;
  background-color: #efece4;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  color: #0a0a0a;
}

.mldm_page {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: #efece4;
  overflow: hidden;
}

.mldm_page_hero {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 7rem 4rem 4rem 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
}

.mldm_page_inner {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 3rem;
  width: 100%;
  align-items: end;
}

.mldm_page_text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 640px;
}

.mldm_page_eyebrow {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #888888;
}

.mldm_page_heading {
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.98;
  color: #0a0a0a;
}

.mldm_page_sub {
  margin: 0;
  font-size: 1rem;
  letter-spacing: -0.01em;
  color: #555555;
  max-width: 36ch;
  line-height: 1.5;
}

.mldm_page_poster {
  position: relative;
  align-self: end;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  background-color: #d8ddd1;
}

.mldm_page_poster_img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.mldm_logo {
  position: absolute;
  top: 1.75rem;
  left: 2.25rem;
  z-index: 50;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1;
  color: #0a0a0a;
  white-space: nowrap;
  pointer-events: none;
  will-change: color;
}

.mldm_toggle {
  position: absolute;
  top: 1.75rem;
  right: 2.25rem;
  z-index: 200;
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #0a0a0a;
  will-change: color;
}

.mldm_toggle_label_wrap {
  position: relative;
  display: block;
  width: 3em;
  height: 1em;
  font-size: 1rem;
  line-height: 1;
  overflow: hidden;
  text-align: left;
}

.mldm_toggle_label_track {
  display: flex;
  flex-direction: column;
  gap: 2px;
  will-change: transform;
}

.mldm_toggle_label {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1;
  height: 1em;
  white-space: nowrap;
  user-select: none;
  color: inherit;
}

.mldm_toggle_icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
}

.mldm_toggle_line {
  position: absolute;
  display: block;
  width: 1rem;
  height: 1.5px;
  background-color: currentColor;
  border-radius: 2px;
  transform-origin: center;
  will-change: transform, background-color;
}

.mldm_overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: transparent;
  pointer-events: none;
}

.mldm_overlay[aria-hidden="false"] {
  pointer-events: auto;
}

/* Dim - darkens the page underneath; sits below trigger + panels. Click closes. */
.mldm_scrim {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: rgba(10, 10, 10, 0.55);
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  opacity: 0;
  will-change: opacity;
}

.mldm_panel {
  position: absolute;
  z-index: 3;
  top: 1rem;
  bottom: 1rem;
  background-color: #ececec;
  border-radius: 8px;
  overflow: hidden;
  clip-path: inset(0% 100% 0% 0% round 8px);
  will-change: clip-path;
}

.mldm_panel_inner {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.mldm_panel_primary {
  left: 1rem;
  width: 420px;
}

.mldm_panel_secondary {
  left: calc(1rem + 420px + 0.5rem);
  width: 280px;
}

.mldm_back {
  display: none;
  position: absolute;
  top: 1.5rem;
  left: 2.5rem;
  z-index: 5;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;
  font-family: inherit;
  color: #0a0a0a;
}

.mldm_back_icon {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-top: 1.25px solid currentColor;
  border-left: 1.25px solid currentColor;
  transform: rotate(-45deg);
  flex-shrink: 0;
  margin-right: 0.25rem;
}

.mldm_back_label {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1;
}

.mldm_list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.mldm_item {
  display: block;
}

.mldm_primary_nav {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.mldm_primary_nav .mldm_list {
  gap: 1.5rem;
}

.mldm_primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #888888;
  text-align: left;
  font-family: inherit;
}

.mldm_primary_dot {
  position: absolute;
  left: 0;
  top: 50%;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #0a0a0a;
  transform: translate(0, -50%) scale(0);
  transform-origin: center;
  will-change: transform;
  pointer-events: none;
}

.mldm_primary_label {
  display: inline-block;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: inherit;
  will-change: transform, color;
}

.mldm_primary:hover {
  color: #0a0a0a;
}

.mldm_explore {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #555555;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.mldm_explore:hover {
  color: #0a0a0a;
}

.mldm_cards {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  margin-bottom: auto;
}

.mldm_card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-decoration: none;
  color: #0a0a0a;
}

.mldm_card_media {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 6px;
  background-color: #d8ddd1;
}

.mldm_card_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  will-change: transform;
}

.mldm_card_label {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: #0a0a0a;
}

.mldm_footer_nav {
  display: flex;
  gap: 1.25rem;
}

.mldm_footer_link {
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #888888;
  text-decoration: none;
}

.mldm_footer_link:hover {
  color: #0a0a0a;
}

.mldm_sublist_stack {
  position: relative;
  width: 100%;
  flex: 1;
}

.mldm_sublist {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: hidden;
  pointer-events: none;
}

.mldm_sublist_active {
  visibility: visible;
  pointer-events: auto;
  position: relative;
}

.mldm_sublist .mldm_list {
  gap: 0.5rem;
}

.mldm_sublink {
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;
  color: #888888;
  text-align: left;
  font-family: inherit;
  width: 100%;
}

.mldm_sublink_dot {
  position: absolute;
  left: 0;
  top: 50%;
  display: inline-block;
  width: 0.4375rem;
  height: 0.4375rem;
  border-radius: 50%;
  background-color: #0a0a0a;
  transform: translate(0, -50%) scale(0);
  transform-origin: center;
  will-change: transform;
  pointer-events: none;
}

.mldm_sublink_label {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: inherit;
  will-change: transform, color;
}

.mldm_sublink:hover {
  color: #0a0a0a;
}

.mldm_sub_explore {
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #555555;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.mldm_sub_explore:hover {
  color: #0a0a0a;
}

@media (prefers-reduced-motion: reduce) {
  .mldm_card_img {
    transition: none;
  }
}

@media (max-width: 1023px) {
  .mldm_panel_primary {
    width: 360px;
  }

  .mldm_panel_secondary {
    left: calc(1rem + 360px + 0.5rem);
    width: 240px;
  }

  .mldm_primary_label {
    font-size: 1.625rem;
  }

  .mldm_sublink_label {
    font-size: 1.125rem;
  }

  .mldm_page_hero {
    padding: 6rem 2rem 2rem 2rem;
  }

  .mldm_page_inner {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 767px) {
  /* Push panels below the fixed header so the logo + trigger don't overlap */
  .mldm_panel {
    top: 5rem;
  }

  /* Both panels share the exact same left/right/width on mobile.
     Panel 2 sits on top of panel 1 (higher z-index) as a drill-down overlay. */
  .mldm_panel_primary {
    left: 1rem;
    right: 1rem;
    width: auto;
    max-width: none;
    z-index: 3;
  }

  .mldm_panel_secondary {
    left: 1rem;
    right: 1rem;
    width: auto;
    /* slide-in initial state - shift by full viewport width so panel 2 is
       guaranteed fully off-screen regardless of viewport size (translateX 100%
       alone would leave a 1rem sliver visible due to the left offset) */
    clip-path: inset(0% 0% 0% 0% round 8px);
    transform: translateX(100vw);
    z-index: 20;
  }

  .mldm_panel_secondary .mldm_panel_inner {
    padding-top: 4.5rem;
  }

  .mldm_back {
    display: inline-flex;
  }

  .mldm_page_hero {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }

  .mldm_page_inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .mldm_logo {
    top: 1.25rem;
    left: 1.5rem;
  }

  .mldm_toggle {
    top: 1.25rem;
    right: 1.5rem;
  }
}
`;e.s(["MultiLevelDrawerMenu",0,function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:f}),(0,r.jsx)(g,{...e})]})}],83543)}]);