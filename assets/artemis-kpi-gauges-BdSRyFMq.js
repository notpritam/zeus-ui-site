import{j as r}from"./index-DxXZJYbM.js";import{r as c}from"./recipe-Begt-rGp.js";import{a as rt,A as nt}from"./artemis-scope-Cs5DFgNV.js";import{m as V}from"./react-Z9-7Ek2x.js";import{b as M,A as at}from"./ease-C4QO8bHK.js";import{u as D}from"./use-motion-value-D2gef8kc.js";import{a as P}from"./index-00wT2gjg.js";import{A as ot}from"./rolling-number-CD-CEUxQ.js";import"./Specimen-Bg2CkhJF.js";import"./home-dashboard-BaUy5wJk.js";import"./use-in-view-Bsup3jR1.js";import"./index-C74vfL_u.js";import"./index-BB0vx-gr.js";import"./Modal-Cs-wKA3U.js";import"./contributions-card-DD3kbf9b.js";import"./chart-cell-BTW7nevu.js";import"./tooltip-r4MR4cP2.js";import"./chart-bar-track-D9bXXv94.js";import"./Bar-BUaFpKuX.js";import"./data-table-Cbv7Jwhg.js";import"./table-CE4G0eWr.js";import"./Checkbox-CDulugMU.js";import"./useToggle-C64zbPgF.js";import"./useSlot-NAvCFbxv.js";import"./TreeDropTargetDelegate-B39hsyz5.js";import"./useUpdateEffect-B19-nbz8.js";import"./useHasTabbableChild-CXmoMCRp.js";import"./avatar-CdNsQ5pm.js";import"./status-dot-BfJIcvAy.js";import"./checkbox-B6eGjyqq.js";import"./dropdown-B2Wyb6uI.js";import"./pagination-CQ5kWAwr.js";import"./stat-cards-xNbEU8zD.js";import"./recent-hires-card-O-_2q22E.js";import"./template-shell-PcZKF7S2.js";import"./close-button-CGmBRTkz.js";import"./NumberFormatter-H2sZ7Z8O.js";import"./switch-2ESfT0Fj.js";import"./shared-BbhVNhA7.js";import"./date-picker-BOEiWnH4.js";import"./file-upload-i6SVVPe9.js";import"./badge-Dnr5Py-b.js";import"./kbd-BMBtUgNn.js";import"./breadcrumb-D0CfNlxv.js";const it=`
  @keyframes artemis-9827167-artemis-dropdown-panel-enter {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes artemis-9827167-artemis-dropdown-panel-exit {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.96);
    }
  }

  @keyframes artemis-9827167-artemis-dropdown-clip-enter {
    from {
      clip-path: var(--artemis-dropdown-hidden-clip);
    }
    to {
      clip-path: inset(0% 0% 0% 0% round 12px);
    }
  }

  @keyframes artemis-9827167-artemis-dropdown-clip-exit {
    from {
      clip-path: inset(0% 0% 0% 0% round 12px);
    }
    to {
      clip-path: var(--artemis-dropdown-hidden-clip);
    }
  }

  .art\\:artemis-animated-dropdown,
  .art\\:artemis-animated-dropdown-sub {
    --artemis-dropdown-hidden-clip: inset(0% 92% 92% 0% round 12px);
    -ms-overflow-style: none;
    scrollbar-width: none;
    transform-origin: var(--radix-dropdown-menu-content-transform-origin);
    will-change: clip-path, opacity, transform;
  }

  .art\\:artemis-animated-dropdown-sub {
    translate: var(--artemis-dropdown-sub-shift-x, 0px) 0;
  }

  .art\\:artemis-animated-dropdown[data-align="end"],
  .art\\:artemis-animated-dropdown-sub[data-align="end"] {
    --artemis-dropdown-hidden-clip: inset(0% 0% 92% 92% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-align="center"],
  .art\\:artemis-animated-dropdown-sub[data-align="center"] {
    --artemis-dropdown-hidden-clip: inset(0% 46% 92% 46% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-side="top"],
  .art\\:artemis-animated-dropdown-sub[data-side="top"] {
    --artemis-dropdown-hidden-clip: inset(92% 92% 0% 0% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-side="top"][data-align="end"],
  .art\\:artemis-animated-dropdown-sub[data-side="top"][data-align="end"] {
    --artemis-dropdown-hidden-clip: inset(92% 0% 0% 92% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-side="top"][data-align="center"],
  .art\\:artemis-animated-dropdown-sub[data-side="top"][data-align="center"] {
    --artemis-dropdown-hidden-clip: inset(92% 46% 0% 46% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-side="right"],
  .art\\:artemis-animated-dropdown-sub[data-side="right"] {
    --artemis-dropdown-hidden-clip: inset(0% 92% 92% 0% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-side="right"][data-align="end"],
  .art\\:artemis-animated-dropdown-sub[data-side="right"][data-align="end"] {
    --artemis-dropdown-hidden-clip: inset(92% 92% 0% 0% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-side="right"][data-align="center"],
  .art\\:artemis-animated-dropdown-sub[data-side="right"][data-align="center"] {
    --artemis-dropdown-hidden-clip: inset(46% 92% 46% 0% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-side="left"],
  .art\\:artemis-animated-dropdown-sub[data-side="left"] {
    --artemis-dropdown-hidden-clip: inset(0% 0% 92% 92% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-side="left"][data-align="end"],
  .art\\:artemis-animated-dropdown-sub[data-side="left"][data-align="end"] {
    --artemis-dropdown-hidden-clip: inset(92% 0% 0% 92% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-side="left"][data-align="center"],
  .art\\:artemis-animated-dropdown-sub[data-side="left"][data-align="center"] {
    --artemis-dropdown-hidden-clip: inset(46% 0% 46% 92% round 12px);
  }

  .art\\:artemis-animated-dropdown[data-state="open"],
  .art\\:artemis-animated-dropdown-sub[data-state="open"] {
    animation:
      artemis-9827167-artemis-dropdown-panel-enter 360ms cubic-bezier(0.2, 0.8, 0.2, 1) both,
      artemis-9827167-artemis-dropdown-clip-enter 320ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .art\\:artemis-animated-dropdown[data-state="closed"],
  .art\\:artemis-animated-dropdown-sub[data-state="closed"] {
    pointer-events: none;
    animation:
      artemis-9827167-artemis-dropdown-panel-exit 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both,
      artemis-9827167-artemis-dropdown-clip-exit 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .art\\:artemis-animated-dropdown::-webkit-scrollbar,
  .art\\:artemis-animated-dropdown-sub::-webkit-scrollbar {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .art\\:artemis-animated-dropdown[data-state],
    .art\\:artemis-animated-dropdown-sub[data-state] {
      animation-duration: 1ms;
      clip-path: none;
      transform: none;
    }
  }
`,$=8,st=12,dt="art:hover:bg-muted art:outline-none art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:data-[artemis-pointer-focus]:focus-visible:shadow-none art:data-[artemis-pointer-focus]:focus-visible:ring-0 art:data-[artemis-pointer-focus]:focus-visible:ring-offset-0 art:-mr-2 art:inline-flex art:size-9 art:shrink-0 art:items-center art:justify-center art:rounded-full art:text-muted-foreground art:transition-colors art:hover:text-foreground art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring",ct="art:artemis-animated-dropdown art:relative art:isolate art:z-[120] art:max-h-[var(--radix-dropdown-menu-content-available-height)] art:overflow-y-auto art:rounded-xl art:border art:border-border art:bg-background art:p-1.5 art:text-foreground art:outline-none art:min-w-44",lt="art:group art:relative art:z-10 art:flex art:min-h-10 art:cursor-default art:select-none art:items-center art:gap-2.5 art:rounded-lg art:px-2.5 art:py-2 art:text-sm art:text-foreground art:outline-none art:data-[highlighted]:text-foreground art:data-[disabled]:pointer-events-none art:data-[disabled]:opacity-45",ut="art:pointer-events-none art:absolute art:top-0 art:left-0 art:z-0 art:rounded-lg art:bg-muted art:data-[destructive=true]:bg-destructive/10",pt={outline:"none","--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"},mt=`
  .with-scroll-bars-hidden {
   overflow: hidden !important;
   padding-right: 0px !important;
  }
  body[data-scroll-locked] {
    overflow: hidden !important;
    overscroll-behavior: contain;
    position: relative !important;
    padding-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    margin-left:0;
    margin-top:0;
    margin-right: 0px !important;

  }

  .right-scroll-bar-position {
    right: 0px !important;
  }

  .width-before-scroll-bar {
    margin-right: 0px !important;
  }

  .right-scroll-bar-position .right-scroll-bar-position {
    right: 0 !important;
  }

  .width-before-scroll-bar .width-before-scroll-bar {
    margin-right: 0 !important;
  }

  body[data-scroll-locked] {
    --removed-body-scroll-bar-size: 0px;
  }
`;let z=!1,H=0;const U=()=>{z=!0},_=()=>{z=!1};function ft(){c.useEffect(()=>(H===0&&(document.addEventListener("keydown",U,!0),document.addEventListener("pointerdown",_,!0),document.addEventListener("pointermove",_,!0)),H+=1,()=>{H-=1,H===0&&(document.removeEventListener("keydown",U,!0),document.removeEventListener("pointerdown",_,!0),document.removeEventListener("pointermove",_,!0))}),[])}let O=0;function B(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}function ht(){const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??B()),document.body.insertAdjacentElement("beforeend",e[1]??B()),O+=1,()=>{if(O===1)for(const a of document.querySelectorAll("[data-radix-focus-guard]"))a.remove();O-=1}}let C=0,A=null;function xt(){return C+=1,A||(A=document.createElement("style"),A.setAttribute("type","text/css"),A.textContent=mt,document.head.appendChild(A)),document.body.setAttribute("data-scroll-locked",String(C)),()=>{if(C-=1,C>0){document.body.setAttribute("data-scroll-locked",String(C));return}document.body.removeAttribute("data-scroll-locked"),A?.remove(),A=null}}const wt=new Set(["SCRIPT","STYLE","LINK","META","TEMPLATE","NOSCRIPT"]);function gt(e){const a=[];for(const n of Array.from(document.body.children)){if(n.contains(e)||wt.has(n.tagName))continue;const d=n.getAttribute("aria-hidden");d!==null&&d!=="false"||(n.setAttribute("aria-hidden","true"),n.setAttribute("data-aria-hidden","true"),a.push(n))}return()=>{for(const n of a)n.removeAttribute("aria-hidden"),n.removeAttribute("data-aria-hidden")}}function bt(e,a){const n=e.getBoundingClientRect(),d=a.offsetWidth,o=a.offsetHeight,p=document.documentElement.clientWidth,u=document.documentElement.clientHeight,f=st;let g=n.right-d;const k=Math.min(Math.max(g,f),p-f-d);g=Math.min(Math.max(k,n.left-d),n.right);const y=n.bottom+$,w=n.top-$-o,v=y+o-(u-f),m=f-w;let S="bottom";v>0&&(m<=0||m<v)&&(S="top");const b=S==="bottom"?y:w,L=f-g,N=g+d-(p-f),s=d-L-N,j=S==="bottom"?u-f-b:b+o-f;return{x:g,y:b,side:S,availableWidth:s,availableHeight:j,anchorWidth:n.width,anchorHeight:n.height,floatingHeight:o}}function yt({label:e,actions:a}){const n=`radix-${c.useId()}`,d=`radix-${c.useId()}`,o=c.useRef(null),[p,u]=c.useState(!1),[f,g]=c.useState(!1),[k,y]=c.useState(null),[w,v]=c.useState(!1),m=c.useRef(!1);ft();const S={x:D(0),y:D(0),width:D(0),height:D(0),opacity:D(0),shown:c.useRef(!1)},b=s=>{s&&(m.current=z,g(!0)),u(s)};c.useEffect(()=>{if(!w)return;const s=()=>v(!1),j=o.current;return document.addEventListener("keydown",s,!0),j?.addEventListener("blur",s),()=>{document.removeEventListener("keydown",s,!0),j?.removeEventListener("blur",s)}},[w]);const L=s=>{s.button!==0||s.ctrlKey||(z=!1,b(!p),p||s.preventDefault())},N=s=>{(s.key==="Enter"||s.key===" ")&&b(!p),s.key==="ArrowDown"&&b(!0),(s.key==="Enter"||s.key===" "||s.key==="ArrowDown")&&s.preventDefault()};return r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",id:n,"aria-haspopup":"menu","aria-expanded":p,"data-state":p?"open":"closed","data-radix-popper-side":f&&k?k:void 0,"data-radix-popper-align":f&&k?"end":void 0,"data-artemis-pointer-focus":w?"":void 0,className:dt,"aria-label":e,"aria-controls":p?d:void 0,ref:o,onPointerDown:L,onKeyDown:N,children:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-ellipsis-vertical art:size-4","aria-hidden":"true",children:[r.jsx("circle",{cx:"12",cy:"12",r:"1"}),r.jsx("circle",{cx:"12",cy:"5",r:"1"}),r.jsx("circle",{cx:"12",cy:"19",r:"1"})]})}),f?rt(r.jsx(Et,{open:p,triggerRef:o,triggerId:n,contentId:d,actions:a,keyboard:m.current,highlight:S,onPlaced:y,onClose:s=>{s&&v(!0),u(!1)},onExited:()=>{g(!1),y(null)}}),document.body):null]})}const vt=c.memo(function({x:a,y:n,width:d,height:o,opacity:p}){return r.jsx(V.span,{"aria-hidden":"true","data-artemis-dropdown-highlight":"",className:ut,style:{height:o,opacity:p,width:d,x:a,y:n}})});function Et({open:e,triggerRef:a,triggerId:n,contentId:d,actions:o,keyboard:p,highlight:u,onPlaced:f,onClose:g,onExited:k}){const y=c.useRef(null),w=c.useRef(null),v=c.useRef([]),[m,S]=c.useState(null),[b,L]=c.useState(null),N=c.useRef({search:"",timer:0}),s=c.useRef({onClose:g,onExited:k,onPlaced:f});c.useLayoutEffect(()=>{s.current={onClose:g,onExited:k,onPlaced:f}}),c.useLayoutEffect(()=>{const t=()=>{const l=a.current,i=y.current;if(!l||!i)return;const x=bt(l,i);S(x),s.current.onPlaced(x.side)};return t(),window.addEventListener("resize",t),window.addEventListener("scroll",t,!0),()=>{window.removeEventListener("resize",t),window.removeEventListener("scroll",t,!0)}},[a]);const j=c.useRef(0);c.useEffect(()=>{window.clearTimeout(j.current);const t=y.current,l=ht(),i=xt(),x=t?gt(t):()=>{},h=a.current;return()=>{x(),i(),l(),j.current=window.setTimeout(()=>h?.focus(),0)}},[a]),c.useEffect(()=>{const t=w.current;t&&(t.focus({preventScroll:!0}),p&&v.current[0]?.focus({preventScroll:!0}))},[p]),c.useEffect(()=>{if(!e)return;const t=document.body,l=t.style.pointerEvents;t.style.pointerEvents="none";const i=E=>{E.key==="Escape"&&(E.preventDefault(),s.current.onClose(!1))},x=E=>{const I=E.target;I instanceof Node&&y.current?.contains(I)||s.current.onClose(!1)};document.addEventListener("keydown",i,!0);const h=window.setTimeout(()=>document.addEventListener("pointerdown",x),0);return()=>{t.style.pointerEvents=l,document.removeEventListener("keydown",i,!0),window.clearTimeout(h),document.removeEventListener("pointerdown",x)}},[e]);const Q=c.useCallback(t=>{const l=w.current;if(!l)return;const i=t.offsetLeft+l.clientLeft,x=t.offsetTop+l.clientTop,h=t.offsetWidth,E=t.offsetHeight;if(!u.shown.current){u.x.jump(i),u.y.jump(x),u.width.jump(h),u.height.jump(E),u.opacity.jump(1),u.shown.current=!0;return}P(u.x,i,M),P(u.y,x,M),P(u.width,h,M),P(u.height,E,M)},[u]),K=t=>{const l=o.length;l!==0&&v.current[(t%l+l)%l]?.focus({preventScroll:!0})},T=t=>{window.setTimeout(()=>K(t),0)},J=t=>{const l=w.current;if(!l)return;if(t.key==="Tab"&&t.preventDefault(),t.key.length===1&&!t.ctrlKey&&!t.altKey&&!t.metaKey){const h=N.current;h.search+=t.key.toLowerCase(),window.clearTimeout(h.timer),h.timer=window.setTimeout(()=>{h.search=""},1e3);const E=b??-1,I=o.map((R,et)=>(E+1+et)%o.length),tt=h.search.split("").every(R=>R===h.search[0])?h.search[0]:h.search,G=I.find(R=>o[R].label.toLowerCase().startsWith(tt));G!==void 0&&T(G);return}const x=b;if(t.target===l){["ArrowDown","PageUp","Home"].includes(t.key)?(t.preventDefault(),K(0)):["ArrowUp","PageDown","End"].includes(t.key)&&(t.preventDefault(),K(o.length-1));return}x!==null&&(t.key==="ArrowDown"?(t.preventDefault(),T(x+1)):t.key==="ArrowUp"?(t.preventDefault(),T(x-1)):t.key==="Home"||t.key==="PageUp"?(t.preventDefault(),T(0)):(t.key==="End"||t.key==="PageDown")&&(t.preventDefault(),T(o.length-1)))},X=(t,l)=>{t.onSelect(),s.current.onClose(l.detail>0)},Z=m?{position:"fixed",left:"0px",top:"0px",transform:`translate(${Math.round(m.x)}px, ${Math.round(m.y)}px)`,minWidth:"max-content","--radix-popper-transform-origin":`100% ${m.side==="bottom"?0:m.floatingHeight}px`,zIndex:120,"--radix-popper-available-width":`${m.availableWidth}px`,"--radix-popper-available-height":`${m.availableHeight}px`,"--radix-popper-anchor-width":`${m.anchorWidth}px`,"--radix-popper-anchor-height":`${m.anchorHeight}px`}:{position:"fixed",left:"0px",top:"0px",transform:"translate(0, -200%)",minWidth:"max-content","--radix-popper-transform-origin":"100% 0px",zIndex:120,"--radix-popper-available-width":"0px","--radix-popper-available-height":"0px","--radix-popper-anchor-width":"0px","--radix-popper-anchor-height":"0px"};return r.jsx("div",{"data-radix-popper-content-wrapper":"",dir:"ltr",ref:y,style:Z,children:r.jsxs("div",{"data-side":m?.side??"bottom","data-align":"end",role:"menu","aria-orientation":"vertical","data-state":e?"open":"closed","data-radix-menu-content":"",dir:"ltr",id:d,"aria-labelledby":n,className:ct,tabIndex:-1,"data-orientation":"vertical",style:{...pt,pointerEvents:e?"auto":void 0},ref:w,onKeyDown:J,onAnimationEnd:t=>{t.target===t.currentTarget&&!e&&t.animationName.startsWith("artemis-dropdown-")&&s.current.onExited()},children:[r.jsx("style",{children:it}),r.jsx(vt,{height:u.height,opacity:u.opacity,width:u.width,x:u.x,y:u.y}),o.map((t,l)=>r.jsx("div",{role:"menuitem","data-artemis-dropdown-item":"",className:lt,tabIndex:-1,"data-orientation":"vertical","data-radix-collection-item":"","data-artemis-dropdown-index":l,"data-highlighted":b===l?"":void 0,ref:i=>{v.current[l]=i},onPointerMove:i=>{i.pointerType==="mouse"&&document.activeElement!==i.currentTarget&&i.currentTarget.focus({preventScroll:!0})},onPointerLeave:i=>{i.pointerType==="mouse"&&w.current?.focus({preventScroll:!0})},onFocus:i=>{L(l),Q(i.currentTarget)},onBlur:()=>L(i=>i===l?null:i),onClick:i=>X(t,i),onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.currentTarget.click(),i.preventDefault())},children:t.label},t.id))]})})}const Y=[{id:"jobs",label:"Processed jobs",value:864,unit:"per day",note:"Daily target: 1,200",gauge:{value:72,label:"Daily processing target",tone:"success"}},{id:"seats",label:"Active seats",value:38,unit:"of 50",note:"Plan capacity",gauge:{value:76,label:"Seat utilization",tone:"primary"}},{id:"automation",label:"Automation rate",value:84.2,format:{style:"percent",decimals:1},note:"Quarterly target: 90%",gauge:{value:94,label:"Automation target attainment",tone:"accent"}}];function kt(e){const a=e.id==="jobs"?1200:e.id==="seats"?50:90,n=e.id==="jobs"?24:e.id==="seats"?1:.2,d=Math.min(a,e.value+n);return{...e,value:d,gauge:{...e.gauge,value:d/a*100}}}function St(e,a){if(a?.style==="percent"){const n=a.decimals;return`${new Intl.NumberFormat("en-US",{minimumFractionDigits:n,maximumFractionDigits:n}).format(e)}%`}return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(e)}function q({text:e,className:a,duration:n=.6,stagger:d=.02,prefix:o,suffix:p,label:u}){return r.jsx(ot,{text:e,className:a,duration:n,stagger:d,prefix:o,suffix:p,label:u,activation:"in-view",amount:.6})}const jt={success:"art:text-success-foreground",primary:"art:text-primary",accent:"art:text-accent"},F=36,W=2*Math.PI*F;function At({value:e,label:a,tone:n}){const d=Math.min(100,Math.max(0,e)),o=Math.round(d);return r.jsxs("div",{className:`art:relative art:grid art:shrink-0 art:place-items-center art:size-16 ${jt[n]}`,children:[r.jsx("meter",{"aria-label":a,min:0,max:100,value:e,className:"art:sr-only",children:`${o}%`}),r.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 80 80",className:"art:absolute art:inset-0 art:size-full art:-rotate-90",children:[r.jsx("circle",{cx:"40",cy:"40",r:F,fill:"none",stroke:"currentColor",strokeWidth:"3",className:"art:opacity-10"}),r.jsx(V.circle,{cx:"40",cy:"40",r:F,fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeDasharray:W,initial:{strokeDashoffset:W,opacity:0},animate:{strokeDashoffset:W*(1-d/100),opacity:1},transition:{duration:.7,ease:at}})]}),r.jsx("span",{"aria-hidden":"true",className:"art:grid art:place-items-center art:rounded-full art:bg-current/5 art:size-12",children:r.jsx(q,{text:String(o),suffix:"%",className:"art:inline-flex art:items-baseline art:whitespace-nowrap art:font-medium art:tabular-nums art:text-foreground art:text-sm"})})]})}function Lt({metric:e,actions:a}){return r.jsxs("div",{className:"art:min-w-0 art:rounded-2xl art:border art:border-border art:bg-background art:p-5",children:[r.jsxs("div",{className:"art:flex art:min-h-9 art:items-center art:justify-between art:gap-3",children:[r.jsx("dt",{className:"art:font-medium art:text-xl",children:e.label}),r.jsx(yt,{label:`Actions for ${e.label}`,actions:a})]}),r.jsxs("dd",{className:"art:mt-4 art:flex art:justify-between art:gap-4 art:items-end",children:[r.jsxs("div",{className:"art:min-w-0",children:[r.jsxs("div",{className:"art:flex art:flex-wrap art:items-center art:gap-x-2 art:gap-y-1",children:[r.jsx(q,{text:St(e.value,e.format),className:"art:inline-flex art:items-baseline art:whitespace-nowrap art:font-medium art:tabular-nums art:tracking-tight art:text-4xl"}),e.unit?r.jsx("span",{className:"art:text-muted-foreground art:text-base",children:e.unit}):null]}),r.jsx("p",{className:"art:mt-2 art:text-muted-foreground art:text-sm",children:e.note})]}),r.jsx(At,{value:e.gauge.value,label:e.gauge.label,tone:e.gauge.tone})]})]})}function Nt(){const[e,a]=c.useState(Y);return r.jsx("div",{className:"art:w-full art:max-w-6xl",children:r.jsx("section",{"aria-label":"Key performance indicators",className:"art:@container art:w-full art:min-w-0",children:r.jsx("dl",{className:"art:grid art:gap-4 art:@lg:grid-cols-2 art:@5xl:grid-cols-3",children:e.map(n=>r.jsx(Lt,{metric:n,actions:[{id:"refresh",label:"Update metric",onSelect:()=>a(d=>d.map(o=>o.id===n.id?kt(o):o))},{id:"reset",label:"Restore metric",onSelect:()=>a(d=>d.map((o,p)=>o.id===n.id?Y[p]??o:o))}]},n.id))})})})}function Tt({className:e}){return r.jsx(nt,{className:e,children:r.jsx("div",{className:"art:flex art:w-full art:min-w-0 art:flex-col art:items-center",children:r.jsx(Nt,{})})})}function ve({variant:e}){return r.jsx(Tt,{})}export{ve as default};
