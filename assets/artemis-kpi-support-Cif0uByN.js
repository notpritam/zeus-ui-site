import{j as n}from"./index-BzVEzr_h.js";import{r as d}from"./recipe-XmTC6iRi.js";import{a as Q,A as X}from"./artemis-scope-B57b514-.js";import{m as Z}from"./Specimen-Dwv1_deW.js";import{b as P}from"./ease-C4QO8bHK.js";import{E as tt}from"./ellipsis-vertical-B-h076f0.js";import{u as M}from"./use-motion-value-D63zOccf.js";import{a as O}from"./index-DP0EJGUa.js";import{A as et}from"./rolling-number-TqEAiyh8.js";import{I as rt}from"./inbox-D01q_3PO.js";import{C as at}from"./check-check-D9NM4Hot.js";import{C as nt}from"./clock-3-BXVkQoW9.js";import{T as ot}from"./thumbs-up--un4hS0l.js";import"./home-dashboard-CvAIhi0d.js";import"./index-BrK7HEVb.js";import"./createLucideIcon-DrzzRXIv.js";import"./use-in-view-wtA4iNJg.js";import"./index-D9KOfL3g.js";import"./Modal-CaK_RuY2.js";import"./contributions-card-hda37rCc.js";import"./chart-cell-pOqUKV9F.js";import"./tooltip-Z3_CANVh.js";import"./chart-bar-track-C-GcagGx.js";import"./stat-cards-ByluDPdq.js";import"./data-table-BbeSlnVo.js";import"./table-pw6L5OvJ.js";import"./Checkbox-BD932hty.js";import"./useToggle-BOXU8FyZ.js";import"./useSlot-CDX3ll0i.js";import"./TreeDropTargetDelegate-BJRqp2u-.js";import"./useUpdateEffect-CUhRim2H.js";import"./avatar-CHqAj6NM.js";import"./status-dot-Dp2g7fUd.js";import"./checkbox-NKuZwYPt.js";import"./dropdown-vd_ogYVf.js";import"./pagination-DN2cuOXq.js";import"./recent-hires-card-vr0I5ubF.js";import"./template-shell-CxljgLl5.js";import"./close-button-B0yUHWd5.js";import"./NumberFormatter-H2sZ7Z8O.js";import"./switch-D27IKOax.js";import"./shared-BcJ_7OYz.js";import"./date-picker-C5Fm8q1l.js";import"./file-upload-bPRIj8KZ.js";import"./badge-DF3neig7.js";import"./kbd-DbHQ1_iU.js";import"./breadcrumb-D8lpI3C_.js";const it=`
  @keyframes artemis-cb96d19-artemis-dropdown-panel-enter {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes artemis-cb96d19-artemis-dropdown-panel-exit {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.96);
    }
  }

  @keyframes artemis-cb96d19-artemis-dropdown-clip-enter {
    from {
      clip-path: var(--artemis-dropdown-hidden-clip);
    }
    to {
      clip-path: inset(0% 0% 0% 0% round 12px);
    }
  }

  @keyframes artemis-cb96d19-artemis-dropdown-clip-exit {
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
      artemis-cb96d19-artemis-dropdown-panel-enter 360ms cubic-bezier(0.2, 0.8, 0.2, 1) both,
      artemis-cb96d19-artemis-dropdown-clip-enter 320ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .art\\:artemis-animated-dropdown[data-state="closed"],
  .art\\:artemis-animated-dropdown-sub[data-state="closed"] {
    pointer-events: none;
    animation:
      artemis-cb96d19-artemis-dropdown-panel-exit 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both,
      artemis-cb96d19-artemis-dropdown-clip-exit 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
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
`,st=`
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
`,U=8,dt=12,lt="art:hover:bg-muted art:outline-none art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:data-[artemis-pointer-focus]:focus-visible:shadow-none art:data-[artemis-pointer-focus]:focus-visible:ring-0 art:data-[artemis-pointer-focus]:focus-visible:ring-offset-0 art:-mr-2 art:inline-flex art:size-9 art:shrink-0 art:items-center art:justify-center art:rounded-full art:text-muted-foreground art:transition-colors art:hover:text-foreground art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring",ct="art:artemis-animated-dropdown art:relative art:isolate art:z-[120] art:max-h-[var(--radix-dropdown-menu-content-available-height)] art:overflow-y-auto art:rounded-xl art:border art:border-border art:bg-background art:p-1.5 art:text-foreground art:outline-none art:min-w-44",mt="art:group art:relative art:z-10 art:flex art:min-h-10 art:cursor-default art:select-none art:items-center art:gap-2.5 art:rounded-lg art:px-2.5 art:py-2 art:text-sm art:text-foreground art:outline-none art:data-[highlighted]:text-foreground art:data-[disabled]:pointer-events-none art:data-[disabled]:opacity-45",ut="art:pointer-events-none art:absolute art:top-0 art:left-0 art:z-0 art:rounded-lg art:bg-muted art:data-[destructive=true]:bg-destructive/10";function pt(t,m){const r=t.getBoundingClientRect(),l=m.getBoundingClientRect(),p=document.documentElement,u=p.clientWidth,s=p.clientHeight,f=dt,E=r.bottom+U,w=r.top-U-l.height;let x="bottom",b=E;const y=E+l.height-(s-f);if(y>0){const S=f-w;(S<=0||S<y)&&(x="top",b=w)}const h=Math.max(f,Math.min(r.right-l.width,u-f-l.width)),I=Math.max(r.left-l.width,Math.min(h,r.right)),L=Math.min(x==="bottom"?s-f-b:b+l.height-f,s-2*f),v=window.devicePixelRatio||1;return{x:Math.round(I*v)/v,y:Math.round(b*v)/v,side:x,availableWidth:u-2*f,availableHeight:L,anchorWidth:r.width,anchorHeight:r.height,floatingHeight:l.height}}let N=0,C=null;function ft(){return N+=1,N===1&&(C=document.createElement("style"),C.type="text/css",C.appendChild(document.createTextNode(st)),document.head.appendChild(C)),document.body.setAttribute("data-scroll-locked",String(N)),()=>{N-=1,N<=0?(N=0,document.body.removeAttribute("data-scroll-locked"),C?.remove(),C=null):document.body.setAttribute("data-scroll-locked",String(N))}}let F=0;function $(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}function ht(){const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??$()),document.body.insertAdjacentElement("beforeend",t[1]??$()),F+=1,()=>{F===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(m=>m.remove()),F-=1}}function gt(t){const m=[];for(const r of Array.from(document.body.children)){if(r===t||r.contains(t)||r.tagName==="SCRIPT")continue;const l=r.getAttribute("aria-hidden");l!==null&&l!=="false"||(r.setAttribute("data-aria-hidden","true"),r.setAttribute("aria-hidden","true"),m.push(r))}return()=>{for(const r of m)r.removeAttribute("aria-hidden"),r.removeAttribute("data-aria-hidden")}}function xt({open:t,triggerId:m,contentId:r,trigger:l,actions:p,keyboardOpen:u,onPlacement:s,onClose:f,onExited:E}){const w=d.useRef(null),x=d.useRef(null),b=d.useRef([]),y=d.useRef(!1),[h,I]=d.useState(null),[L,v]=d.useState(null),S=M(0),R=M(0),D=M(0),c=M(0),T=M(0),j=d.useCallback(()=>{const e=w.current;if(!e)return;const i=pt(l,e);I(i),s(i)},[l,s]);d.useLayoutEffect(()=>{j()},[j]),d.useEffect(()=>{const e=w.current;window.addEventListener("resize",j),window.addEventListener("scroll",j,!0);let i=!0;const a=new ResizeObserver(()=>{if(i){i=!1;return}j()});return a.observe(l),e&&a.observe(e),()=>{window.removeEventListener("resize",j),window.removeEventListener("scroll",j,!0),a.disconnect()}},[j,l]),d.useEffect(()=>{const e=w.current;if(!e)return;const i=ht(),a=gt(e),o=ft(),g=A=>{const z=A.target;z instanceof Node&&x.current?.contains(z)||A.preventDefault()};return document.addEventListener("wheel",g,{passive:!1}),document.addEventListener("touchmove",g,{passive:!1}),()=>{document.removeEventListener("wheel",g),document.removeEventListener("touchmove",g),o(),a(),i()}},[]),d.useEffect(()=>{if(!t)return;const e=document.body,i=e.style.pointerEvents;return e.style.pointerEvents="none",()=>{e.style.pointerEvents=i}},[t]),d.useEffect(()=>{if(!t)return;const e=o=>{o.key==="Escape"&&(o.preventDefault(),f(!1))},i=o=>{const g=o.target;g instanceof Node&&w.current?.contains(g)||f(!1)};document.addEventListener("keydown",e,!0);const a=window.setTimeout(()=>document.addEventListener("pointerdown",i),0);return()=>{document.removeEventListener("keydown",e,!0),window.clearTimeout(a),document.removeEventListener("pointerdown",i)}},[t,f]),d.useEffect(()=>{const e=x.current;e&&(u?b.current[0]?.focus({preventScroll:!0}):e.focus({preventScroll:!0}))},[u]);const B=e=>{const i=x.current;if(!i)return;const a=i.getBoundingClientRect(),o=e.getBoundingClientRect(),g=o.left-a.left,A=o.top-a.top;if(T.get()===0){S.jump(g),R.jump(A),D.jump(o.width),c.jump(o.height),T.jump(1);return}O(S,g,P),O(R,A,P),O(D,o.width,P),O(c,o.height,P)},k=e=>{const i=p.length;if(!i)return;const a=Math.max(0,Math.min(i-1,e));b.current[a]?.focus({preventScroll:!0})},V=e=>{const i=document.activeElement,a=b.current.findIndex(g=>g===i),o=e.key;if(o==="Tab"){e.preventDefault();return}if(a===-1){if(e.target!==x.current)return;o==="ArrowDown"||o==="PageUp"||o==="Home"?(e.preventDefault(),k(0)):(o==="ArrowUp"||o==="PageDown"||o==="End")&&(e.preventDefault(),k(p.length-1))}else if(o==="ArrowDown")e.preventDefault(),k(a+1);else if(o==="ArrowUp")e.preventDefault(),k(a-1);else if(o==="Home"||o==="PageUp")e.preventDefault(),k(0);else if(o==="End"||o==="PageDown")e.preventDefault(),k(p.length-1);else if(o==="Enter"||o===" "){e.preventDefault(),b.current[a]?.click();return}if(o.length===1&&o!==" "&&!e.ctrlKey&&!e.metaKey&&!e.altKey){const g=o.toLowerCase(),A=a===-1?0:a+1,K=[...p.keys()].map(H=>(A+H)%p.length).find(H=>p[H]?.label.toLowerCase().startsWith(g));K!==void 0&&k(K)}},q=e=>{!t&&e.target===e.currentTarget&&E()},_=h?.side??"bottom",Y=h?{position:"fixed",left:"0px",top:"0px",transform:`translate(${h.x}px, ${h.y}px)`,minWidth:"max-content","--radix-popper-transform-origin":_==="bottom"?"100% 0px":`100% ${h.floatingHeight}px`,zIndex:120,"--radix-popper-available-width":`${h.availableWidth}px`,"--radix-popper-available-height":`${h.availableHeight}px`,"--radix-popper-anchor-width":`${h.anchorWidth}px`,"--radix-popper-anchor-height":`${h.anchorHeight}px`}:{position:"fixed",left:"0px",top:"0px",transform:"translate(0px, -200%)",minWidth:"max-content","--radix-popper-transform-origin":"100% 0px",zIndex:120},J={outline:"none","--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)",...t?{pointerEvents:"auto"}:{},...h?{}:{animation:"none"}};return n.jsx("div",{ref:w,"data-radix-popper-content-wrapper":"",dir:"ltr",style:Y,children:n.jsxs("div",{ref:x,"data-side":_,"data-align":"end",role:"menu","aria-orientation":"vertical","data-state":t?"open":"closed","data-radix-menu-content":"",dir:"ltr",id:r,"aria-labelledby":m,className:ct,tabIndex:-1,"data-orientation":"vertical",style:J,onKeyDown:V,onAnimationEnd:q,children:[n.jsx("style",{children:it}),n.jsx(Z.span,{"aria-hidden":"true","data-artemis-dropdown-highlight":"",className:ut,style:{height:c,opacity:T,width:D,x:S,y:R}}),p.map((e,i)=>n.jsx("div",{ref:a=>{b.current[i]=a},role:"menuitem","data-artemis-dropdown-item":"",className:mt,tabIndex:-1,"data-orientation":"vertical","data-highlighted":L===i?"":void 0,"data-radix-collection-item":"","data-artemis-dropdown-index":i,onFocus:a=>{v(i),B(a.currentTarget)},onBlur:()=>v(a=>a===i?null:a),onPointerMove:a=>{a.pointerType!=="mouse"||!t||document.activeElement!==a.currentTarget&&a.currentTarget.focus({preventScroll:!0})},onPointerLeave:a=>{a.pointerType!=="mouse"||!t||x.current?.focus({preventScroll:!0})},onPointerDown:()=>{y.current=!0},onPointerUp:a=>{y.current||a.currentTarget.click()},onClick:a=>{y.current=!1,t&&(e.onSelect(),f(a.detail>0))},children:e.label},e.id))]})})}function bt({label:t,actions:m}){const r=d.useId(),l=`radix-${r}`,p=`radix-${r}H1`,u=d.useRef(null),[s,f]=d.useState(!1),[E,w]=d.useState(!1),[x,b]=d.useState(!1),[y,h]=d.useState(null),[I,L]=d.useState(0),v=c=>{E||L(T=>T+1),b(c),f(!0),w(!0)},S=d.useCallback(c=>{c&&u.current?.setAttribute("data-artemis-pointer-focus",""),f(!1)},[]),R=d.useCallback(()=>{w(!1),h(null),window.setTimeout(()=>u.current?.focus(),0)},[]),D=()=>u.current?.removeAttribute("data-artemis-pointer-focus");return n.jsxs(n.Fragment,{children:[n.jsx("button",{ref:u,type:"button",id:l,"aria-haspopup":"menu","aria-expanded":s,"data-state":s?"open":"closed",className:lt,"aria-label":t,"aria-controls":s?p:void 0,"data-radix-popper-side":E&&y?y.side:void 0,"data-radix-popper-align":E&&y?"end":void 0,onPointerDown:c=>{c.button!==0||c.ctrlKey||(s?S(!1):(c.preventDefault(),v(!1)))},onKeyDown:c=>{D(),c.key==="Enter"||c.key===" "?s?S(!1):v(!0):c.key==="ArrowDown"&&v(!0),(c.key==="Enter"||c.key===" "||c.key==="ArrowDown")&&c.preventDefault()},onBlur:D,children:n.jsx(tt,{})}),E&&u.current?Q(n.jsx(xt,{open:s,triggerId:l,contentId:p,trigger:u.current,actions:m,keyboardOpen:x,onPlacement:h,onClose:S,onExited:R},I),document.body):null]})}function G({text:t,className:m,duration:r=.6,stagger:l=.02,prefix:p,suffix:u,label:s}){return n.jsx(et,{text:t,className:m,duration:r,stagger:l,prefix:p,suffix:u,label:s,activation:"in-view",amount:.35})}const W=[{id:"tickets",label:"Inbox volume",icon:n.jsx(rt,{}),value:2186,change:5.4},{id:"resolution",label:"Resolved today",icon:n.jsx(at,{}),value:312,change:8.6},{id:"sla",label:"On-time replies",icon:n.jsx(nt,{}),value:94,format:{style:"percent"},change:-.7},{id:"csat",label:"Helpfulness",icon:n.jsx(ot,{}),value:4.7,format:{decimals:1},unit:"/ 5",change:1.2}],wt="month over month";function vt(t){const m=t.format?.decimals??0,r={minimumFractionDigits:m,maximumFractionDigits:m};return t.format?.style==="percent"?new Intl.NumberFormat("en-US",{...r,style:"percent"}).format(t.value/100):new Intl.NumberFormat("en-US",r).format(t.value)}function yt(t){return new Intl.NumberFormat("en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(t)}function St(t){return t.id==="sla"?Math.min(100,t.value+1):t.id==="csat"?Math.min(5,t.value+.1):t.value+12}function Et(){const[t,m]=d.useState(W);return n.jsx("div",{className:"art:w-full art:max-w-screen-2xl",children:n.jsx("section",{"aria-label":"Key performance indicators",className:"art:@container art:w-full art:min-w-0",children:n.jsx("section",{"aria-label":"Metric cards",tabIndex:0,className:"art:overflow-x-auto art:rounded-2xl art:border art:border-border art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-inset art:focus-visible:ring-ring",children:n.jsx("dl",{className:"art:flex art:flex-col art:gap-px art:bg-border art:@lg:w-max art:@lg:min-w-full art:@lg:flex-row",children:t.map((r,l)=>{const p=r.change>=0;return n.jsxs("div",{className:"art:@container/metric art:flex art:min-w-0 art:flex-col art:justify-between art:bg-background art:p-4 art:@lg:flex-1 art:gap-8 art:@lg:min-w-80 art:@lg:p-5",children:[n.jsxs("div",{className:"art:flex art:items-center art:gap-2",children:[n.jsx("span",{"aria-hidden":"true",className:"art:grid art:size-9 art:shrink-0 art:place-items-center art:rounded-full art:border art:border-border art:bg-muted art:text-muted-foreground art:[&>svg]:size-4",children:r.icon}),n.jsx("dt",{className:"art:min-w-0 art:flex-1 art:whitespace-nowrap art:font-mono art:uppercase art:tracking-tight art:text-muted-foreground art:text-xl art:font-medium",children:r.label}),n.jsx(bt,{label:`Actions for ${r.label}`,actions:[{id:"refresh",label:"Update metric",onSelect:()=>m(u=>u.map(s=>s.id===r.id?{...s,value:St(s)}:s))},{id:"reset",label:"Restore metric",onSelect:()=>m(u=>u.map(s=>s.id===r.id?W[l]??s:s))}]})]}),n.jsxs("dd",{className:"art:flex art:flex-col art:items-start art:gap-x-4 art:gap-y-2 art:@sm/metric:flex-row art:@sm/metric:flex-wrap art:@sm/metric:items-center art:@sm/metric:justify-between",children:[n.jsxs("div",{className:"art:flex art:min-h-9 art:items-center art:gap-2",children:[n.jsx(G,{text:vt(r),className:"art:inline-flex art:items-baseline art:whitespace-nowrap art:text-3xl art:font-medium art:tabular-nums art:tracking-tight"}),r.unit?n.jsx("span",{className:"art:font-mono art:text-base art:text-muted-foreground",children:r.unit}):null]}),n.jsxs("p",{className:"art:flex art:flex-wrap art:items-center art:gap-x-2 art:text-sm art:text-muted-foreground",children:[n.jsx("span",{className:`art:font-mono art:font-medium art:tabular-nums ${p?"art:text-success-foreground":"art:text-destructive"}`,children:n.jsx(G,{text:yt(r.change),prefix:r.change>0?"+":void 0,suffix:"%",className:"art:inline-flex art:items-baseline art:tabular-nums art:whitespace-nowrap"})}),n.jsx("span",{children:wt})]})]})]},r.id)})})})})})}function jt({className:t}){return n.jsx(X,{className:t,children:n.jsx("div",{className:"art:flex art:w-full art:min-w-0 art:flex-col art:items-center",children:n.jsx(Et,{})})})}function be({variant:t}){return n.jsx(jt,{})}export{be as default};
