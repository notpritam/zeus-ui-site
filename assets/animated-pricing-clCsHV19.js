import{j as a}from"./index-BzVEzr_h.js";import{r as l}from"./recipe-XmTC6iRi.js";import{g as p}from"./index-xgxdCp6f.js";import{u as pe}from"./index-DglL9Jij.js";import{C as U}from"./CustomEase-C73R1l_9.js";typeof window<"u"&&(p.registerPlugin(pe,U.CustomEase),U.CustomEase.create("zeusMotion","M0,0 C0.3,0.9 0.1,1 1,1"),U.CustomEase.create("zeusMotionInOut","M0,0 C0.7,0 0.16,1 1,1"));const Ne=[{name:"Club",nameClass:"prc_name_silver",monthly:20,yearly:199,popular:!1,features:["Weekly training plans","Community runs","Member pricing on kit","Monthly journal"],ctaLabel:"Join Club"},{name:"Pro",nameClass:"prc_name_champagne",monthly:55,yearly:549,popular:!0,features:["Everything in Club","Coach check-ins","Race-day crew","Recovery sessions","Early access to drops"],ctaLabel:"Join Pro"},{name:"Elite",nameClass:"prc_name_ice",monthly:119,yearly:1199,popular:!1,features:["Everything in Pro","Weekly 1:1 coaching","Physio and nutrition plan","Training camp invites","Private locker"],ctaLabel:"Join Elite"}],je="/assets/zeus/northline-logo-light.svg",Ae={mobile:"(max-width: 479px)",landscape:"(orientation: landscape) and (max-width: 767px)",tablet:"(max-width: 991px)",desktop:"(min-width: 992px)"},Pe=l.forwardRef(function({className:S="",onSelectPlan:T,onPeriodChange:ue,title:me="Membership",logoSrc:$=je,logoAlt:ge="Northline",plans:E=Ne,rollDuration:C=.6,digitStagger:D=.04,toggleDuration:R=.4,shimmerDuration:F=2.4,savingsLabel:K="Save 17%",defaultPeriod:f="monthly",currency:N="EUR",showSavingsChip:j=!0,ease:W="zeusMotionInOut",disable:X=""},fe){const z=l.useRef(null),b=l.useRef(null),x=l.useRef(null),m=l.useRef(null),L=l.useRef(null),Y=l.useRef([]),q=l.useRef([]),G=l.useRef([]),J=l.useRef([]),V=l.useRef([]),_=l.useRef([]),k=l.useRef(null);pe((c,y)=>{if(!b.current||!x.current||!E.length||(X||"").split(",").map(e=>e.trim()).filter(Boolean).some(e=>{const r=Ae[e];return r&&window.matchMedia(r).matches}))return;const Z=R*.35,he=R*.45,be=1.18,ee=.28,xe="0.6em",_e=.4,O=f==="yearly"?"yearly":"monthly";let h=O,M=!1,v=null,re;function te(e){return String(Math.round(e)).split("")}function ae(e){const r=document.createElement("span");r.className="prc_digit_col";const i=document.createElement("span");i.className="prc_digit_roller";for(let n=0;n<=9;n++){const t=document.createElement("span");t.className="prc_digit_face",t.textContent=String(n),i.appendChild(t)}return r.appendChild(i),p.set(i,{y:-parseInt(e,10)+"em"}),r}function ye(e){Array.prototype.slice.call(e.querySelectorAll("[data-dropping]")).forEach(r=>r.remove()),p.set(e.children,{clearProps:"width"})}function ne(e,r){e.innerHTML="",te(r).forEach(i=>e.appendChild(ae(i)))}function ve(e,r,i,n,t){const o=te(i),s=Array.prototype.slice.call(r.children),u=o.length-s.length;if(u>0)for(let g=0;g<u;g++){const w=ae("0");p.set(w,{width:0}),r.insertBefore(w,r.firstChild),e.to(w,{width:xe,duration:C,ease:"expo.out",overwrite:!0,data:{label:t+" gains a digit"}},n)}else if(u<0)for(let g=0;g<-u;g++){const w=s[g];w.dataset.dropping="1",e.to(w,{width:0,duration:C*.7,ease:"expo.inOut",overwrite:!0,data:{label:t+" drops a digit"},onComplete:()=>{w.remove()}},n)}const B=u<0?s.slice(-u):Array.prototype.slice.call(r.children),P=o,Re=B.map(g=>g.querySelector(".prc_digit_roller"));e.to(Re,{y:g=>-parseInt(P[g],10)+"em",duration:C,ease:"expo.out",stagger:{each:D,from:"end"},force3D:!0,overwrite:!0,data:{label:t+" rolls to the new value"}},n)}function we(e,r,i,n){e.innerHTML="";const t=document.createElement("span");t.className="prc_swap";const o=document.createElement("span");o.className="prc_swap_face",o.textContent=r;const s=document.createElement("span");s.className="prc_swap_face prc_swap_face_next",s.textContent=i,t.appendChild(o),t.appendChild(s),e.appendChild(t);const u={mask:t,a:o,b:s};return p.set(t,{yPercent:n?-100:0}),I(u,n),u}function I(e,r){e.a.setAttribute("aria-hidden",r?"true":"false"),e.b.setAttribute("aria-hidden",r?"false":"true")}function ie(e,r){if(!e.srEl)return;const i=r?e.yearly:e.monthly;e.srEl.textContent=N+" "+i+" per "+(r?"year":"month")}function ke(e,r){if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return null;const i=p.fromTo(e,{backgroundPosition:"100% 0%"},{backgroundPosition:"0% 0%",duration:F,ease:"none",repeat:-1,data:{label:"Plan name shimmer loop"}});return i.progress(r/3%1),i}function Ee(e){const r=Y.current[e],i=q.current[e],n=G.current[e],t=J.current[e],o=V.current[e],s=E[e];if(!r||!i)return null;r.setAttribute("aria-hidden","true"),i.setAttribute("aria-hidden","true"),n&&(n.textContent=N);const u=h==="yearly",B=we(i,"/mo","/yr",u);ne(r,u?s.yearly:s.monthly);const P={monthly:s.monthly,yearly:s.yearly,priceEl:r,nameEl:o,periodSwap:B,srEl:t};return ie(P,u),P}function Ce(e){if(e===h)return null;v&&(v.kill(),v=null,_.current.forEach(t=>ye(t.priceEl)));const r=e==="yearly";if(h=e,ue?.(e),b.current.setAttribute("aria-checked",String(r)),_.current.forEach(t=>ie(t,r)),M){const t=r?"left":"right";if(p.set(x.current,{transformOrigin:t+" center",x:r?"100%":"0%",scaleX:1}),_.current.forEach(o=>{ne(o.priceEl,r?o.yearly:o.monthly),p.set(o.periodSwap.mask,{yPercent:r?-100:0}),I(o.periodSwap,r)}),m.current){const o=j&&r;p.set(m.current,{scale:o?1:0,autoAlpha:o?1:0})}return null}const i=r?"left":"right";p.set(x.current,{transformOrigin:i+" center"});const n=p.timeline({defaults:{force3D:!0},onComplete:()=>{v=null}});return v=n,n.to(x.current,{x:r?"100%":"0%",duration:R,ease:W,data:{label:"Toggle knob travels to the new position"}},0),n.to(x.current,{scaleX:be,duration:Z,ease:"power2.out",data:{label:"Toggle knob stretches along the travel axis"}},0),n.to(x.current,{scaleX:1,duration:he,ease:"power2.inOut",data:{label:"Toggle knob snaps back to shape"}},Z),m.current&&(r&&j?(p.set(m.current,{autoAlpha:1}),n.to(m.current,{scale:1,duration:ee,ease:"back.out(1.7)",data:{label:"Savings chip pops in"}},.05)):n.to(m.current,{scale:0,duration:ee*.8,ease:"power3.out",data:{label:"Savings chip shrinks out"},onComplete:()=>{p.set(m.current,{autoAlpha:0})}},0)),_.current.forEach((t,o)=>{const s="Card "+(o+1)+" price";ve(n,t.priceEl,r?t.yearly:t.monthly,0,s),I(t.periodSwap,r),n.to(t.periodSwap.mask,{yPercent:r?-100:0,duration:_e,ease:"zeusMotion",data:{label:s+" period label rolls"}},.05)}),n}const A=y(Ce);if(_.current=E.map((e,r)=>Ee(r)).filter(Boolean),!_.current.length)return;function ce(){A(h==="monthly"?"yearly":"monthly")}b.current.addEventListener("click",ce),z.current.setAttribute("role","region"),b.current.setAttribute("role","switch"),b.current.setAttribute("aria-checked",String(h==="yearly")),b.current.setAttribute("aria-label","Billing period");const H=h==="yearly";if(p.set(x.current,{transformOrigin:(H?"left":"right")+" center",x:H?"100%":"0%",scaleX:1}),m.current){L.current&&(L.current.textContent=K);const e=j&&H;p.set(m.current,{transformOrigin:"center center",yPercent:-50,scale:e?1:0,autoAlpha:e?1:0})}const oe=p.matchMedia();oe.add("(prefers-reduced-motion: reduce)",()=>(M=!0,()=>{M=!1}));const se=_.current.map((e,r)=>ke(e.nameEl,r)).filter(Boolean);function le(){se.forEach(e=>e.paused(document.hidden))}return document.addEventListener("visibilitychange",le),k.current={getPeriod:()=>h,setPeriod:e=>A(e==="yearly"?"yearly":"monthly"),demo:()=>{const r=A(h==="monthly"?"yearly":"monthly");return re=setTimeout(()=>{h!==O&&A(O)},(R+C)*1e3+500),r}},()=>{clearTimeout(re),oe.revert(),document.removeEventListener("visibilitychange",le),b.current?.removeEventListener("click",ce),se.forEach(e=>e.kill()),v&&v.kill(),k.current=null}},{scope:z,revertOnUpdate:!0,dependencies:[E,C,D,R,F,K,f,N,j,W,X]});const Q=l.useCallback(()=>k.current?.getPeriod?.()??f,[f]);return l.useImperativeHandle(fe,()=>({refresh:()=>{},setPeriod:c=>k.current?.setPeriod?.(c),demo:()=>k.current?.demo?.()??null,getPeriod:Q}),[Q]),a.jsxs("section",{ref:z,className:`prc_wrap ${S}`.trim(),"data-anm-pricing":!0,children:[a.jsxs("div",{className:"prc_head",children:[$&&a.jsx("img",{className:"prc_logo",src:$,alt:ge}),a.jsx("h2",{className:"prc_title",children:me})]}),a.jsxs("div",{className:"prc_toggle_row",children:[a.jsxs("button",{type:"button",className:"prc_toggle",ref:b,"data-anm-prc-toggle":!0,children:[a.jsx("span",{className:"prc_toggle_knob",ref:x,"data-anm-prc-knob":!0,"aria-hidden":"true"}),a.jsx("span",{className:"prc_toggle_label",children:"Monthly"}),a.jsx("span",{className:"prc_toggle_label",children:"Yearly"})]}),a.jsx("span",{className:"prc_chip",ref:m,"data-anm-prc-chip":!0,children:a.jsx("span",{ref:L,"data-anm-prc-chip-inner":!0})})]}),a.jsx("div",{className:"prc_cards",children:E.map((c,y)=>a.jsxs("div",{className:`prc_card${c.popular?" prc_card_popular":""}`,"data-anm-prc-card":!0,"data-anm-monthly":c.monthly,"data-anm-yearly":c.yearly,...c.popular?{"data-anm-popular":!0}:{},children:[c.popular&&a.jsx("span",{className:"prc_card_badge",children:"Popular"}),a.jsx("div",{className:`prc_card_name ${c.nameClass||""}`.trim(),"data-anm-prc-name":!0,ref:d=>{V.current[y]=d},children:c.name}),a.jsxs("div",{className:"prc_card_price",children:[a.jsx("span",{className:"prc_price_currency","data-anm-prc-currency":!0,ref:d=>{G.current[y]=d},children:N}),a.jsx("span",{className:"prc_price_value","data-anm-prc-price":!0,ref:d=>{Y.current[y]=d},children:f==="yearly"?c.yearly:c.monthly}),a.jsx("span",{className:"prc_price_period","data-anm-prc-period":!0,ref:d=>{q.current[y]=d},children:f==="yearly"?"/ year":"/ month"}),a.jsxs("span",{className:"prc_price_sr","data-anm-prc-sr":!0,ref:d=>{J.current[y]=d},children:[`${c.name}: ${N} ${f==="yearly"?c.yearly:c.monthly} per ${f==="yearly"?"year":"month"}`," "]})]}),a.jsx("ul",{className:"prc_features",children:c.features.map(d=>a.jsx("li",{className:"prc_feature","data-anm-prc-feature":!0,children:d},d))}),a.jsx("button",{type:"button",onClick:()=>T?.(c,k.current?.getPeriod()||f),className:`prc_cta${c.popular?" prc_cta_popular":""}`,children:c.ctaLabel})]},c.name))})]})}),Se=`

.prc_wrap {
  --prc-bg: #0a0a0a;
  --prc-card-bg: rgba(255, 255, 255, 0.03);
  --prc-card-bg-popular: rgba(255, 255, 255, 0.05);
  --prc-border: rgba(255, 255, 255, 0.12);
  --prc-border-popular: rgba(255, 255, 255, 0.22);
  --prc-fg: rgba(255, 250, 242, 0.92);
  --prc-fg-soft: rgba(255, 255, 255, 0.72);
  --prc-fg-dim: rgba(255, 255, 255, 0.5);
  --prc-line: rgba(255, 255, 255, 0.1);
  --prc-margin: 40px;
  --prc-sans: var(--font-inter, Inter), -apple-system, BlinkMacSystemFont, sans-serif;
}

.prc_wrap {
  position: relative;
  width: 100%;
  min-height: var(--zeus-animation-height, 640px);
  min-height: var(--zeus-animation-height, 640px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  padding: var(--prc-margin);
  background: var(--prc-bg);
  font-family: var(--prc-sans);
  -webkit-font-smoothing: antialiased;
}

/* ---- Head ---- */
.prc_head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.prc_logo {
  height: 16px;
  width: auto;
  opacity: 0.92;
}

.prc_title {
  margin: 0;
  font-size: 48px;
  font-weight: 300;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: var(--prc-fg);
}

/* ---- Toggle row ---- */
.prc_toggle_row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prc_toggle {
  position: relative;
  display: flex;
  width: 208px;
  flex: 0 0 auto;
  padding: 4px;
  border: 1px solid var(--prc-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.prc_toggle:focus {
  outline: none;
}

.prc_toggle:focus-visible {
  outline: 2px solid #fd551d;
  outline-offset: 2px;
}

.prc_toggle_knob {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  right: 50%;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.18);
  will-change: transform;
}

.prc_toggle_label {
  position: relative;
  z-index: 1;
  flex: 1 1 50%;
  text-align: center;
  padding: 9px 4px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--prc-fg-soft);
  pointer-events: none;
}

/* ---- Savings chip ---- */
.prc_chip {
  position: absolute;
  left: calc(100% + 12px);
  top: 50%;
  display: inline-block;
  transform-origin: center center;
  padding: 6px 12px;
  border: 1px solid var(--prc-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--prc-fg);
  white-space: nowrap;
  pointer-events: none;
}

/* ---- Cards ---- */
.prc_cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 260px));
  justify-content: center;
  gap: 12px;
  max-width: 804px;
  width: 100%;
}

.prc_card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 28px 24px;
  border: 1px solid var(--prc-border);
  border-radius: 16px;
  background: var(--prc-card-bg);
}

.prc_card_popular {
  border-color: var(--prc-border-popular);
  background: var(--prc-card-bg-popular);
}

.prc_card_badge {
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 12px;
  font-weight: 500;
  color: var(--prc-fg);
}

.prc_card_name {
  --prc-grad-b: #a9a9a9;
  --prc-grad-hi: #f5f2ec;
  width: fit-content;
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: transparent;
  background-image: linear-gradient(90deg,
    var(--prc-grad-b) 0%,
    var(--prc-grad-hi) 25%,
    var(--prc-grad-b) 50%,
    var(--prc-grad-hi) 75%,
    var(--prc-grad-b) 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
}

/* Per-plan tints: silver, champagne, ice. */
.prc_name_silver {
  --prc-grad-b: #a9a9a9;
  --prc-grad-hi: #f5f2ec;
}

.prc_name_champagne {
  --prc-grad-b: #c9a468;
  --prc-grad-hi: #f8ead0;
}

.prc_name_ice {
  --prc-grad-b: #9db4cc;
  --prc-grad-hi: #ecf3fb;
}

.prc_card_price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 24px;
}

.prc_price_currency {
  font-size: 14px;
  font-weight: 380;
  color: var(--prc-fg-dim);
}

.prc_price_value {
  display: inline-flex;
  align-items: baseline;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -0.02em;
  color: var(--prc-fg);
}

.prc_digit_col {
  position: relative;
  display: inline-block;
  overflow: clip;
  height: 1em;
  width: 0.6em;
  line-height: 1;
  vertical-align: baseline;
}

.prc_digit_col::before {
  content: "0";
  visibility: hidden;
}

.prc_digit_roller {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
}

.prc_digit_face {
  display: block;
  height: 1em;
  line-height: 1;
}

.prc_price_period {
  font-size: 14px;
  font-weight: 380;
  color: var(--prc-fg-dim);
}

/* ---- Two-face masked roll for the period label. ---- */
.prc_swap {
  position: relative;
  display: inline-block;
  overflow: clip;
  height: 1em;
  line-height: 1;
  vertical-align: baseline;
}

.prc_swap_face {
  display: block;
}

.prc_swap_face_next {
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(100%);
}

.prc_price_sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ---- Features ---- */
.prc_features {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  flex: 1 1 auto;
}

.prc_feature {
  padding: 10px 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--prc-fg-soft);
}

.prc_feature + .prc_feature {
  border-top: 1px solid var(--prc-line);
}

/* ---- CTA ---- */
.prc_cta {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: 380;
  color: var(--prc-fg);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.prc_cta:hover {
  background: rgba(255, 255, 255, 0.08);
}

.prc_cta:focus {
  outline: none;
}

.prc_cta:focus-visible {
  outline: 2px solid #fd551d;
  outline-offset: 2px;
}

.prc_cta_popular {
  background: rgba(255, 250, 242, 0.92);
  border-color: rgba(255, 250, 242, 0.92);
  color: #0a0a0a;
}

.prc_cta_popular:hover {
  background: #ffffff;
}

/* ---- Mobile ---- */
@media (max-width: 767px) {
  .prc_wrap {
    --prc-margin: 20px;
    gap: 32px;
  }

  .prc_cards {
    grid-template-columns: 1fr;
    max-width: 320px;
  }

  .prc_chip {
    left: auto;
    right: 0;
    top: calc(100% + 12px);
  }
}
`,He=l.forwardRef(function(S,T){return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Se}),a.jsx(Pe,{...S,ref:T})]})});export{He as A};
