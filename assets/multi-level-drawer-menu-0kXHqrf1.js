import{j as n}from"./index-BzVEzr_h.js";import{r as l}from"./recipe-XmTC6iRi.js";import{g as o}from"./index-xgxdCp6f.js";import{u as ye}from"./index-DglL9Jij.js";typeof window<"u"&&o.registerPlugin(ye);const w=.4,k="back.out",Ve=12,Ye=10,P=3,we=8,We=200,G=`inset(0% 100% 0% 0% round ${we}px)`,oe=`inset(0% 0% 0% 0% round ${we}px)`,M="#0a0a0a",ve="#ffffff",Xe=[{id:"running",label:"Running"},{id:"cycling",label:"Cycling"},{id:"tennis",label:"Tennis"},{id:"track",label:"Track"}],qe={running:["Shoes","Shorts","Shirts","Tank tops","Fueling"],cycling:["Bikes","Helmets","Jerseys","Bib shorts","Accessories"],tennis:["Racquets","Shoes","Apparel","Balls","Bags"],track:["Spikes","Singlets","Shorts","Recovery","Training"]},Je=[{label:"About",href:"#"},{label:"Our Philosophy",href:"#"}],Qe=[{src:"/assets/zeus/running-hero-female-1.avif",alt:"",label:"Events"},{src:"/assets/zeus/street-running-earbuds-3.avif",alt:"",label:"Merch"}];function Ze({className:H="",exploreHref:$="#",onOpenChange:ie,onNavigate:ke,duration:c=.9,ease:Re="expo.out",stagger:j=.06,panelBg:q="#ececec",logo:Ne="Kinetic Athletics",primaries:f=Xe,sublists:O=qe,secondaryLinks:je=Je,cards:Ee=Qe,heroEyebrow:Se="Spring Collection / 03",heroHeading:Ce="The shape of distance.",heroSub:Le="Apparel and footwear for the long way home.",heroImage:Ae="/assets/zeus/street-running-hero-4.avif"}){const se=l.useId(),E=l.useRef(null),J=l.useRef(null),Q=l.useRef(null),Z=l.useRef(null),R=l.useRef(null),ce=l.useRef(null),v=l.useRef(null),ee=l.useRef(null),me=l.useRef(null),te=l.useRef(null),re=l.useRef(null),ne=l.useRef(null),Te=l.useRef(null),de=l.useRef([]),K=l.useRef([]),V=l.useRef([]),le=l.useRef({}),g=l.useRef({}),S=l.useRef({}),ae=l.useRef(null),ue=l.useRef([]),fe=l.useRef([]),_=l.useRef(null),p=l.useRef(null),Y=l.useRef(null),h=l.useRef(!1),C=l.useRef(!1),B=l.useRef(null),I=l.useRef(null),[De,pe]=l.useState(!1),d=l.useCallback(()=>window.matchMedia("(max-width: 767px)").matches,[]),W=l.useCallback(()=>{const e=R.current;e&&(d()?o.set(e,{clipPath:oe,xPercent:0,x:"100vw"}):o.set(e,{clipPath:G,xPercent:0,x:0}))},[d]),he=l.useCallback(e=>{f.forEach(t=>{const r=le.current[t.id];if(!r)return;const a=t.id===e;r.classList.toggle("mldm_sublist_active",a),r.setAttribute("aria-hidden",String(!a)),r.style.visibility=a?"visible":"hidden",r.style.pointerEvents=a?"auto":"none"}),B.current=e,de.current.forEach((t,r)=>{t&&t.setAttribute("aria-expanded",String(f[r]?.id===e))})},[f]),ge=l.useCallback(e=>{const t=g.current[e]||[],r=S.current[e]||[];t.forEach(a=>{a&&o.set(a,{x:0,opacity:0})}),r.forEach(a=>{a&&o.set(a,{scale:0})})},[]),b=l.useCallback(()=>{I.current&&(clearTimeout(I.current),I.current=null)},[]),{contextSafe:u}=ye(()=>{const e=Z.current,t=R.current,r=J.current,a=Q.current,i=v.current,T=ne.current,F=ee.current,D=te.current,z=re.current;if(!(!e||!r||!i))return e&&(e.style.backgroundColor=q),t&&(t.style.backgroundColor=q),r.setAttribute("inert",""),r.setAttribute("aria-hidden","true"),o.set(e,{clipPath:G}),W(),o.set(a,{opacity:0}),o.set(i,{color:M}),T&&o.set(T,{color:M}),F&&o.set(F,{y:0}),D&&o.set(D,{y:-P,rotation:0}),z&&o.set(z,{y:P,rotation:0}),f.forEach(X=>{const m=le.current[X.id];m&&(m.classList.remove("mldm_sublist_active"),m.setAttribute("aria-hidden","true"),m.style.visibility="hidden",m.style.pointerEvents="none")}),Y.current=o.matchMedia(),Y.current.add("(prefers-reduced-motion: reduce)",()=>{}),()=>{_.current&&_.current.kill(),p.current&&p.current.kill(),Y.current&&Y.current.revert(),b()}},{scope:E,dependencies:[q]}),ze=u(()=>{const e=Z.current;R.current;const t=J.current,r=Q.current,a=v.current,i=ne.current,T=ee.current,F=me.current,D=te.current,z=re.current;if(!e||!t||!a)return;_.current&&_.current.kill(),p.current&&p.current.kill();const X=V.current.filter(Boolean),m=[];ae.current&&m.push(ae.current),ue.current.forEach(y=>{y&&m.push(y)}),fe.current.forEach(y=>{y&&m.push(y)});const xe=[...X,...m],Ke=-((F?F.offsetHeight:16)+2);_.current=o.timeline({paused:!0,defaults:{ease:Re,easeReverse:!0,force3D:!0},onStart:()=>{t.removeAttribute("inert"),t.setAttribute("aria-hidden","false"),E.current?.dispatchEvent(new CustomEvent("anm-mldm-open",{bubbles:!0,detail:{container:E.current}}))}});const s=_.current;window.matchMedia("(prefers-reduced-motion: reduce)").matches&&s.timeScale(1e3),s.set(e,{clipPath:G}),s.set(r,{opacity:0}),s.set(a,{color:M}),i&&s.set(i,{color:M}),s.set(T,{y:0}),s.set(D,{y:-P,rotation:0}),s.set(z,{y:P,rotation:0}),K.current.forEach(y=>{y&&s.set(y,{scale:0})}),s.set(xe,{opacity:0,x:-16}),s.to(r,{opacity:1,duration:c*.75},0),s.to(e,{clipPath:oe,duration:c},.05),s.to(a,{color:ve,duration:c*.6},c*.2),i&&s.to(i,{color:ve,duration:c*.6},c*.2),s.to(T,{y:Ke,duration:c*.55},c*.2),s.to(D,{y:0,rotation:45,duration:c*.6},c*.2),s.to(z,{y:0,rotation:-45,duration:c*.6},c*.2),s.to(X,{opacity:1,x:0,duration:.55,stagger:j},c*.35),m.length&&s.to(m,{opacity:1,x:0,duration:.55,stagger:j*.7},c*.45);const N=c*.55;p.current=o.timeline({paused:!0,defaults:{ease:"expo.out",force3D:!0},onComplete:()=>{t.setAttribute("inert",""),t.setAttribute("aria-hidden","true"),E.current?.dispatchEvent(new CustomEvent("anm-mldm-close",{bubbles:!0,detail:{container:E.current}}))}});const x=p.current;window.matchMedia("(prefers-reduced-motion: reduce)").matches&&x.timeScale(1e3),x.to(xe,{opacity:0,duration:.15,stagger:j*.3},0),x.to(e,{clipPath:G,duration:N},.05),x.to(r,{opacity:0,duration:N*.8},.1),x.to(a,{color:M,duration:N*.6},.05),i&&x.to(i,{color:M,duration:N*.6},.05),x.to(T,{y:0,duration:N*.55},.05),x.to(D,{y:-P,rotation:0,duration:N*.6},.05),x.to(z,{y:P,rotation:0,duration:N*.6},.05)}),_e=u(e=>{if(b(),!!!(O[e]&&O[e].length)){L();return}if(C.current&&B.current===e)return;if(C.current&&B.current!==e){Pe(e);return}C.current=!0,he(e),ge(e);const r=R.current;if(!r)return;d()?o.to(r,{x:0,duration:.5,ease:"expo.out",easeReverse:!0,force3D:!0,overwrite:"auto"}):o.to(r,{clipPath:oe,duration:.6,ease:"expo.out",easeReverse:!0,force3D:!0,overwrite:"auto"});const a=g.current[e]||[];a.length&&o.fromTo(a,{opacity:0,x:-16},{opacity:1,x:0,duration:.5,stagger:j,ease:"expo.out",easeReverse:!0,force3D:!0,overwrite:"auto",delay:.1})}),L=u(()=>{if(b(),!C.current)return;C.current=!1;const e=R.current;e&&(d()?o.to(e,{x:"100vw",duration:.4,ease:"expo.out",force3D:!0,overwrite:"auto"}):o.to(e,{clipPath:G,duration:.45,ease:"expo.out",force3D:!0,overwrite:"auto"}))}),Pe=u(e=>{const t=B.current,r=g.current[t]||[],a=g.current[e]||[];function i(){he(e),ge(e),a.length&&o.fromTo(a,{opacity:0,x:-16},{opacity:1,x:0,duration:.45,ease:"expo.out",easeReverse:!0,stagger:j,force3D:!0,overwrite:"auto"})}r.length?o.to(r,{opacity:0,x:-8,duration:.18,ease:"expo.out",stagger:j*.3,overwrite:"auto",onComplete:i}):i()}),U=l.useCallback(()=>{b(),I.current=setTimeout(()=>{I.current=null,L()},We)},[b,L]),be=u(()=>{h.current||(h.current=!0,pe(!0),ie?.(!0),v.current?.setAttribute("aria-expanded","true"),v.current?.setAttribute("aria-label","Close navigation menu"),C.current=!1,B.current=null,W(),ze(),p.current&&p.current.pause(0),_.current?.restart())}),A=u(()=>{h.current&&(h.current=!1,pe(!1),ie?.(!1),L(),v.current?.setAttribute("aria-expanded","false"),v.current?.setAttribute("aria-label","Open navigation menu"),v.current?.focus(),_.current&&_.current.pause(),p.current&&p.current.restart())}),Me=l.useCallback(()=>{h.current?A():be()},[be,A]),Oe=u(e=>{if(!h.current||d())return;b();const t=f[e]?.id;t&&O[t]?.length?_e(t):U();const r=K.current[e],a=V.current[e];if(!r||!a)return;const i=r.offsetWidth+Ve;o.to(r,{scale:1,duration:w,ease:k,overwrite:"auto",force3D:!0}),o.to(a,{x:i,duration:w,ease:k,overwrite:"auto",force3D:!0})}),Be=u(e=>{const t=K.current[e],r=V.current[e];!t||!r||(o.to(t,{scale:0,duration:w,ease:k,overwrite:"auto",force3D:!0}),o.to(r,{x:0,duration:w,ease:k,overwrite:"auto",force3D:!0}))}),Ie=u(e=>{if(!h.current)return;b();const t=f[e]?.id;t&&O[t]?.length?_e(t):L()}),Ue=l.useCallback(e=>{if(!h.current||d())return;const t=R.current;t&&t.contains(e.relatedTarget)||U()},[d,U]),Fe=l.useCallback(()=>{d()||b()},[d,b]),Ge=l.useCallback(e=>{if(!h.current||d())return;const t=ce.current;t&&t.contains(e.relatedTarget)||U()},[d,U]),He=u((e,t)=>{const r=(S.current[e]||[])[t],a=(g.current[e]||[])[t];if(!r||!a)return;const i=r.offsetWidth+Ye;o.to(r,{scale:1,duration:w,ease:k,overwrite:"auto",force3D:!0}),o.to(a,{x:i,duration:w,ease:k,overwrite:"auto",force3D:!0})}),$e=u((e,t)=>{const r=(S.current[e]||[])[t],a=(g.current[e]||[])[t];!r||!a||(o.to(r,{scale:0,duration:w,ease:k,overwrite:"auto",force3D:!0}),o.to(a,{x:0,duration:w,ease:k,overwrite:"auto",force3D:!0}))});return l.useEffect(()=>{const e=t=>{t.key==="Escape"&&h.current&&A()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[A]),l.useEffect(()=>{let e;const t=()=>{clearTimeout(e),e=setTimeout(()=>{W()},150)};return window.addEventListener("resize",t),()=>{clearTimeout(e),window.removeEventListener("resize",t)}},[W]),n.jsxs("div",{ref:E,onClick:e=>{const t=e.target.closest("a");t&&ke?.(t.getAttribute("href"))},className:`mldm_wrap${H?" "+H:""}`,"data-anm-multi-level-drawer-menu":!0,children:[n.jsx("div",{className:"mldm_page","data-anm-mldm-page":!0,children:n.jsx("section",{className:"mldm_page_hero",children:n.jsxs("div",{className:"mldm_page_inner",children:[n.jsxs("div",{className:"mldm_page_text",children:[n.jsx("p",{className:"mldm_page_eyebrow",children:Se}),n.jsx("h1",{className:"mldm_page_heading",children:Ce}),n.jsx("p",{className:"mldm_page_sub",children:Le})]}),n.jsx("div",{className:"mldm_page_poster",children:n.jsx("img",{className:"mldm_page_poster_img",src:Ae,alt:""})})]})})}),n.jsx("span",{ref:ne,className:"mldm_logo","data-anm-mldm-logo":!0,children:Ne}),n.jsxs("button",{ref:v,className:"mldm_toggle","data-anm-mldm-toggle":!0,"aria-expanded":De,"aria-controls":se,"aria-label":"Open navigation menu",onClick:Me,children:[n.jsx("span",{className:"mldm_toggle_label_wrap",children:n.jsxs("span",{ref:ee,className:"mldm_toggle_label_track","data-anm-mldm-label-track":!0,children:[n.jsx("span",{ref:me,className:"mldm_toggle_label mldm_toggle_label_open","data-anm-mldm-label-open":!0,children:"Menu"}),n.jsx("span",{className:"mldm_toggle_label mldm_toggle_label_close",children:"Close"})]})}),n.jsxs("span",{className:"mldm_toggle_icon","aria-hidden":"true",children:[n.jsx("span",{ref:te,className:"mldm_toggle_line mldm_toggle_line_top","data-anm-mldm-icon-top":!0}),n.jsx("span",{ref:re,className:"mldm_toggle_line mldm_toggle_line_bottom","data-anm-mldm-icon-bottom":!0})]})]}),n.jsxs("div",{ref:J,className:"mldm_overlay",id:se,"data-anm-mldm-overlay":!0,role:"dialog","aria-modal":"true","aria-label":"Navigation","aria-hidden":"true",inert:!0,children:[n.jsx("button",{ref:Q,className:"mldm_scrim","data-anm-mldm-scrim":!0,"aria-label":"Close menu",tabIndex:-1,onClick:A}),n.jsx("aside",{ref:Z,className:"mldm_panel mldm_panel_primary","data-anm-mldm-panel":!0,"data-anm-mldm-panel-level":"1",children:n.jsxs("div",{className:"mldm_panel_inner",children:[n.jsxs("nav",{ref:ce,className:"mldm_primary_nav","aria-label":"Primary categories",onMouseLeave:Ue,children:[n.jsx("ul",{className:"mldm_list",children:f.map((e,t)=>n.jsx("li",{className:"mldm_item",children:n.jsxs("button",{ref:r=>{de.current[t]=r},className:"mldm_primary","data-anm-mldm-primary":!0,"data-anm-mldm-target":e.id,"aria-expanded":"false",onMouseEnter:()=>Oe(t),onMouseLeave:()=>Be(t),onClick:()=>Ie(t),children:[n.jsx("span",{ref:r=>{K.current[t]=r},className:"mldm_primary_dot","aria-hidden":"true"}),n.jsx("span",{ref:r=>{V.current[t]=r},className:"mldm_primary_label",children:e.label})]})},e.id))}),n.jsx("a",{ref:ae,className:"mldm_explore","data-anm-mldm-secondary":!0,href:$,children:"Explore all"})]}),n.jsx("div",{className:"mldm_cards",children:Ee.map((e,t)=>n.jsxs("a",{ref:r=>{ue.current[t]=r},className:"mldm_card","data-anm-mldm-secondary":!0,href:e.href||$,children:[n.jsx("span",{className:"mldm_card_media",children:n.jsx("img",{className:"mldm_card_img",src:e.src,alt:e.alt||""})}),n.jsx("span",{className:"mldm_card_label",children:e.label})]},e.label))}),n.jsx("nav",{className:"mldm_footer_nav","aria-label":"Secondary",children:je.map((e,t)=>n.jsx("a",{ref:r=>{fe.current[t]=r},className:"mldm_footer_link","data-anm-mldm-secondary":!0,href:e.href,children:e.label},e.label))})]})}),n.jsxs("aside",{ref:R,className:"mldm_panel mldm_panel_secondary","data-anm-mldm-panel":!0,"data-anm-mldm-panel-level":"2",onMouseEnter:Fe,onMouseLeave:Ge,children:[n.jsxs("button",{ref:Te,className:"mldm_back","data-anm-mldm-back":!0,"aria-label":"Back to primary categories",onClick:L,children:[n.jsx("span",{className:"mldm_back_icon","aria-hidden":"true"}),n.jsx("span",{className:"mldm_back_label",children:"Back"})]}),n.jsxs("div",{className:"mldm_panel_inner",children:[n.jsx("div",{className:"mldm_sublist_stack","data-anm-mldm-sublist-stack":!0,children:f.map(e=>{const t=O[e.id]||[];return g.current[e.id]||(g.current[e.id]=[]),S.current[e.id]||(S.current[e.id]=[]),n.jsx("div",{ref:r=>{le.current[e.id]=r},className:`mldm_sublist${e.id===f[0]?.id?" mldm_sublist_active":""}`,"data-anm-mldm-sublist":!0,"data-anm-mldm-sublist-for":e.id,"aria-hidden":e.id!==f[0]?.id,children:n.jsx("ul",{className:"mldm_list",children:t.map((r,a)=>n.jsx("li",{className:"mldm_item",children:n.jsxs("a",{href:typeof r=="string"?$:r.href,onClick:A,className:"mldm_sublink","data-anm-mldm-secondary-link":!0,onMouseEnter:()=>He(e.id,a),onMouseLeave:()=>$e(e.id,a),children:[n.jsx("span",{ref:i=>{S.current[e.id][a]=i},className:"mldm_sublink_dot","aria-hidden":"true"}),n.jsx("span",{ref:i=>{g.current[e.id][a]=i},className:"mldm_sublink_label",children:typeof r=="string"?r:r.label})]})},typeof r=="string"?r:r.href))})},e.id)})}),n.jsx("a",{className:"mldm_sub_explore","data-anm-mldm-secondary":!0,href:$,children:"Explore all"})]})]})]})]})}const et=`.mldm_wrap {
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
`;function ot(H){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:et}),n.jsx(Ze,{...H})]})}export{ot as M};
