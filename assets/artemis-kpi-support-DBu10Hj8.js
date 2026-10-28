import{j as n}from"./index-BsFhL6Lx.js";import{a as Q,A as X}from"./artemis-scope-BzopUa0r.js";import{r as d}from"./recipe-DcPI5VbQ.js";import{m as Z}from"./react-DEM7o9kY.js";import{b as P}from"./ease-C4QO8bHK.js";import{E as tt}from"./ellipsis-vertical-HuV03OVM.js";import{u as M}from"./use-motion-value-gTU3t7T9.js";import{a as O}from"./index-CSlKnS0j.js";import{A as et}from"./rolling-number-BRVj_h0A.js";import{I as rt}from"./inbox-CUxC9l0m.js";import{C as at}from"./check-check-BXG5nDvo.js";import{C as nt}from"./clock-3-SoKEntse.js";import{T as ot}from"./thumbs-up-2hx__RJq.js";import"./home-dashboard-BJhT8CGu.js";import"./index-_rRNS9Sa.js";import"./index-CXHAiFMv.js";import"./createLucideIcon-eCkiuFHW.js";import"./use-in-view-if97vqpQ.js";import"./index-DCHUPANh.js";import"./use-reduced-motion-BT7x0Cn0.js";import"./index-Ly7Fj3vP.js";import"./Dialog-DUzmnOim.js";import"./useLoadMoreSentinel-DBoBraM8.js";import"./I18nProvider-DTxaUQ6i.js";import"./Specimen-CW_7GZoF.js";import"./useButton-Bz7oDAMZ.js";import"./usePress-DSgXYlSr.js";import"./textSelection-CrrDeMzB.js";import"./inertValue-BFUTePdZ.js";import"./useOverlayTriggerState-DC80TlLQ.js";import"./number-BJRdc-Co.js";import"./FocusScope-VJJV233E.js";import"./VisuallyHidden-CaSuseK7.js";import"./animation-DiAplalu.js";import"./Modal-DZ-SDu5O.js";import"./contributions-card-RGOZDSwm.js";import"./chart-cell-C-7gfeUG.js";import"./tooltip-BDOsy534.js";import"./pro-chart-byLPwh8C.js";import"./icon-button-DSTVyudy.js";import"./chevrons-CoazPAPI.js";import"./chip-BUeyh4nA.js";import"./segmented-control-BBscaHTA.js";import"./SelectionIndicator-BIyZUCkE.js";import"./SharedElementTransition-DsJfdKkO.js";import"./useToggleState-B0YToPtd.js";import"./use-selection-bounds-1sne1HKg.js";import"./select-CppfsRfI.js";import"./useCollection-4Frl9oeL.js";import"./useDescription-DQIJq24y.js";import"./useCollator-i4wtdUI2.js";import"./useSelectableList-CYKzXp_4.js";import"./useListState--l2sjjzL.js";import"./use-dismiss-on-outside-press-DNiYAPBi.js";import"./menu-styles-BqNUlDsC.js";import"./use-count-up-COAVAEVK.js";import"./template-shell-CFSHV6Pj.js";import"./close-button-CVoDqL78.js";import"./NumberFormatter-H2sZ7Z8O.js";import"./dropdown-5NVK6glU.js";import"./switch-Iz3ZniAU.js";import"./useToggle-Pu5meeSj.js";import"./useSlot-lD9iemtQ.js";import"./shared-DwKz76cR.js";import"./useUpdateEffect-CQ1V1zBv.js";import"./date-picker-BZ5ibxB1.js";import"./checkbox-BtrFxtTD.js";import"./Checkbox-CLluc93u.js";import"./file-upload-CrHEf7vx.js";import"./pagination-3Koe7ZUi.js";import"./badge-BseThhQD.js";import"./kbd-DaVT9--4.js";import"./avatar-k0WewAYM.js";import"./breadcrumb-Cgi0ORB8.js";import"./chart-bar-track-C5Unclbw.js";import"./stat-cards-Bxzgl1zX.js";import"./data-table-CdNH66rl.js";import"./table-CYTjmugU.js";import"./TreeDropTargetDelegate-5sNW0Dxk.js";import"./useHasTabbableChild-CfUrtCQ3.js";import"./status-dot-DNhPbKEH.js";import"./Bar-C2q02VfV.js";import"./graphicalItemSelectors-B9Hsxle4.js";import"./chart-active-dot-D4Os0d74.js";import"./Dot-BLKflo1T.js";import"./Area-IyPRO5nn.js";import"./recent-hires-card-CWXmJHxT.js";const it=`
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
`,U=8,dt=12,lt="art:hover:bg-muted art:outline-none art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:data-[artemis-pointer-focus]:focus-visible:shadow-none art:data-[artemis-pointer-focus]:focus-visible:ring-0 art:data-[artemis-pointer-focus]:focus-visible:ring-offset-0 art:-mr-2 art:inline-flex art:size-9 art:shrink-0 art:items-center art:justify-center art:rounded-full art:text-muted-foreground art:transition-colors art:hover:text-foreground art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring",ct="art:artemis-animated-dropdown art:relative art:isolate art:z-[120] art:max-h-[var(--radix-dropdown-menu-content-available-height)] art:overflow-y-auto art:rounded-xl art:border art:border-border art:bg-background art:p-1.5 art:text-foreground art:outline-none art:min-w-44",mt="art:group art:relative art:z-10 art:flex art:min-h-10 art:cursor-default art:select-none art:items-center art:gap-2.5 art:rounded-lg art:px-2.5 art:py-2 art:text-sm art:text-foreground art:outline-none art:data-[highlighted]:text-foreground art:data-[disabled]:pointer-events-none art:data-[disabled]:opacity-45",pt="art:pointer-events-none art:absolute art:top-0 art:left-0 art:z-0 art:rounded-lg art:bg-muted art:data-[destructive=true]:bg-destructive/10";function ut(t,m){const r=t.getBoundingClientRect(),l=m.getBoundingClientRect(),u=document.documentElement,p=u.clientWidth,s=u.clientHeight,f=dt,E=r.bottom+U,w=r.top-U-l.height;let x="bottom",b=E;const y=E+l.height-(s-f);if(y>0){const S=f-w;(S<=0||S<y)&&(x="top",b=w)}const h=Math.max(f,Math.min(r.right-l.width,p-f-l.width)),I=Math.max(r.left-l.width,Math.min(h,r.right)),L=Math.min(x==="bottom"?s-f-b:b+l.height-f,s-2*f),v=window.devicePixelRatio||1;return{x:Math.round(I*v)/v,y:Math.round(b*v)/v,side:x,availableWidth:p-2*f,availableHeight:L,anchorWidth:r.width,anchorHeight:r.height,floatingHeight:l.height}}let N=0,C=null;function ft(){return N+=1,N===1&&(C=document.createElement("style"),C.type="text/css",C.appendChild(document.createTextNode(st)),document.head.appendChild(C)),document.body.setAttribute("data-scroll-locked",String(N)),()=>{N-=1,N<=0?(N=0,document.body.removeAttribute("data-scroll-locked"),C?.remove(),C=null):document.body.setAttribute("data-scroll-locked",String(N))}}let F=0;function $(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}function ht(){const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??$()),document.body.insertAdjacentElement("beforeend",t[1]??$()),F+=1,()=>{F===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(m=>m.remove()),F-=1}}function gt(t){const m=[];for(const r of Array.from(document.body.children)){if(r===t||r.contains(t)||r.tagName==="SCRIPT")continue;const l=r.getAttribute("aria-hidden");l!==null&&l!=="false"||(r.setAttribute("data-aria-hidden","true"),r.setAttribute("aria-hidden","true"),m.push(r))}return()=>{for(const r of m)r.removeAttribute("aria-hidden"),r.removeAttribute("data-aria-hidden")}}function xt({open:t,triggerId:m,contentId:r,trigger:l,actions:u,keyboardOpen:p,onPlacement:s,onClose:f,onExited:E}){const w=d.useRef(null),x=d.useRef(null),b=d.useRef([]),y=d.useRef(!1),[h,I]=d.useState(null),[L,v]=d.useState(null),S=M(0),R=M(0),D=M(0),c=M(0),T=M(0),j=d.useCallback(()=>{const e=w.current;if(!e)return;const i=ut(l,e);I(i),s(i)},[l,s]);d.useLayoutEffect(()=>{j()},[j]),d.useEffect(()=>{const e=w.current;window.addEventListener("resize",j),window.addEventListener("scroll",j,!0);let i=!0;const a=new ResizeObserver(()=>{if(i){i=!1;return}j()});return a.observe(l),e&&a.observe(e),()=>{window.removeEventListener("resize",j),window.removeEventListener("scroll",j,!0),a.disconnect()}},[j,l]),d.useEffect(()=>{const e=w.current;if(!e)return;const i=ht(),a=gt(e),o=ft(),g=A=>{const z=A.target;z instanceof Node&&x.current?.contains(z)||A.preventDefault()};return document.addEventListener("wheel",g,{passive:!1}),document.addEventListener("touchmove",g,{passive:!1}),()=>{document.removeEventListener("wheel",g),document.removeEventListener("touchmove",g),o(),a(),i()}},[]),d.useEffect(()=>{if(!t)return;const e=document.body,i=e.style.pointerEvents;return e.style.pointerEvents="none",()=>{e.style.pointerEvents=i}},[t]),d.useEffect(()=>{if(!t)return;const e=o=>{o.key==="Escape"&&(o.preventDefault(),f(!1))},i=o=>{const g=o.target;g instanceof Node&&w.current?.contains(g)||f(!1)};document.addEventListener("keydown",e,!0);const a=window.setTimeout(()=>document.addEventListener("pointerdown",i),0);return()=>{document.removeEventListener("keydown",e,!0),window.clearTimeout(a),document.removeEventListener("pointerdown",i)}},[t,f]),d.useEffect(()=>{const e=x.current;e&&(p?b.current[0]?.focus({preventScroll:!0}):e.focus({preventScroll:!0}))},[p]);const B=e=>{const i=x.current;if(!i)return;const a=i.getBoundingClientRect(),o=e.getBoundingClientRect(),g=o.left-a.left,A=o.top-a.top;if(T.get()===0){S.jump(g),R.jump(A),D.jump(o.width),c.jump(o.height),T.jump(1);return}O(S,g,P),O(R,A,P),O(D,o.width,P),O(c,o.height,P)},k=e=>{const i=u.length;if(!i)return;const a=Math.max(0,Math.min(i-1,e));b.current[a]?.focus({preventScroll:!0})},V=e=>{const i=document.activeElement,a=b.current.findIndex(g=>g===i),o=e.key;if(o==="Tab"){e.preventDefault();return}if(a===-1){if(e.target!==x.current)return;o==="ArrowDown"||o==="PageUp"||o==="Home"?(e.preventDefault(),k(0)):(o==="ArrowUp"||o==="PageDown"||o==="End")&&(e.preventDefault(),k(u.length-1))}else if(o==="ArrowDown")e.preventDefault(),k(a+1);else if(o==="ArrowUp")e.preventDefault(),k(a-1);else if(o==="Home"||o==="PageUp")e.preventDefault(),k(0);else if(o==="End"||o==="PageDown")e.preventDefault(),k(u.length-1);else if(o==="Enter"||o===" "){e.preventDefault(),b.current[a]?.click();return}if(o.length===1&&o!==" "&&!e.ctrlKey&&!e.metaKey&&!e.altKey){const g=o.toLowerCase(),A=a===-1?0:a+1,K=[...u.keys()].map(H=>(A+H)%u.length).find(H=>u[H]?.label.toLowerCase().startsWith(g));K!==void 0&&k(K)}},q=e=>{!t&&e.target===e.currentTarget&&E()},_=h?.side??"bottom",Y=h?{position:"fixed",left:"0px",top:"0px",transform:`translate(${h.x}px, ${h.y}px)`,minWidth:"max-content","--radix-popper-transform-origin":_==="bottom"?"100% 0px":`100% ${h.floatingHeight}px`,zIndex:120,"--radix-popper-available-width":`${h.availableWidth}px`,"--radix-popper-available-height":`${h.availableHeight}px`,"--radix-popper-anchor-width":`${h.anchorWidth}px`,"--radix-popper-anchor-height":`${h.anchorHeight}px`}:{position:"fixed",left:"0px",top:"0px",transform:"translate(0px, -200%)",minWidth:"max-content","--radix-popper-transform-origin":"100% 0px",zIndex:120},J={outline:"none","--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)",...t?{pointerEvents:"auto"}:{},...h?{}:{animation:"none"}};return n.jsx("div",{ref:w,"data-radix-popper-content-wrapper":"",dir:"ltr",style:Y,children:n.jsxs("div",{ref:x,"data-side":_,"data-align":"end",role:"menu","aria-orientation":"vertical","data-state":t?"open":"closed","data-radix-menu-content":"",dir:"ltr",id:r,"aria-labelledby":m,className:ct,tabIndex:-1,"data-orientation":"vertical",style:J,onKeyDown:V,onAnimationEnd:q,children:[n.jsx("style",{children:it}),n.jsx(Z.span,{"aria-hidden":"true","data-artemis-dropdown-highlight":"",className:pt,style:{height:c,opacity:T,width:D,x:S,y:R}}),u.map((e,i)=>n.jsx("div",{ref:a=>{b.current[i]=a},role:"menuitem","data-artemis-dropdown-item":"",className:mt,tabIndex:-1,"data-orientation":"vertical","data-highlighted":L===i?"":void 0,"data-radix-collection-item":"","data-artemis-dropdown-index":i,onFocus:a=>{v(i),B(a.currentTarget)},onBlur:()=>v(a=>a===i?null:a),onPointerMove:a=>{a.pointerType!=="mouse"||!t||document.activeElement!==a.currentTarget&&a.currentTarget.focus({preventScroll:!0})},onPointerLeave:a=>{a.pointerType!=="mouse"||!t||x.current?.focus({preventScroll:!0})},onPointerDown:()=>{y.current=!0},onPointerUp:a=>{y.current||a.currentTarget.click()},onClick:a=>{y.current=!1,t&&(e.onSelect(),f(a.detail>0))},children:e.label},e.id))]})})}function bt({label:t,actions:m}){const r=d.useId(),l=`radix-${r}`,u=`radix-${r}H1`,p=d.useRef(null),[s,f]=d.useState(!1),[E,w]=d.useState(!1),[x,b]=d.useState(!1),[y,h]=d.useState(null),[I,L]=d.useState(0),v=c=>{E||L(T=>T+1),b(c),f(!0),w(!0)},S=d.useCallback(c=>{c&&p.current?.setAttribute("data-artemis-pointer-focus",""),f(!1)},[]),R=d.useCallback(()=>{w(!1),h(null),window.setTimeout(()=>p.current?.focus(),0)},[]),D=()=>p.current?.removeAttribute("data-artemis-pointer-focus");return n.jsxs(n.Fragment,{children:[n.jsx("button",{ref:p,type:"button",id:l,"aria-haspopup":"menu","aria-expanded":s,"data-state":s?"open":"closed",className:lt,"aria-label":t,"aria-controls":s?u:void 0,"data-radix-popper-side":E&&y?y.side:void 0,"data-radix-popper-align":E&&y?"end":void 0,onPointerDown:c=>{c.button!==0||c.ctrlKey||(s?S(!1):(c.preventDefault(),v(!1)))},onKeyDown:c=>{D(),c.key==="Enter"||c.key===" "?s?S(!1):v(!0):c.key==="ArrowDown"&&v(!0),(c.key==="Enter"||c.key===" "||c.key==="ArrowDown")&&c.preventDefault()},onBlur:D,children:n.jsx(tt,{})}),E&&p.current?Q(n.jsx(xt,{open:s,triggerId:l,contentId:u,trigger:p.current,actions:m,keyboardOpen:x,onPlacement:h,onClose:S,onExited:R},I),document.body):null]})}function G({text:t,className:m,duration:r=.6,stagger:l=.02,prefix:u,suffix:p,label:s}){return n.jsx(et,{text:t,className:m,duration:r,stagger:l,prefix:u,suffix:p,label:s,activation:"in-view",amount:.35})}const W=[{id:"tickets",label:"Inbox volume",icon:n.jsx(rt,{}),value:2186,change:5.4},{id:"resolution",label:"Resolved today",icon:n.jsx(at,{}),value:312,change:8.6},{id:"sla",label:"On-time replies",icon:n.jsx(nt,{}),value:94,format:{style:"percent"},change:-.7},{id:"csat",label:"Helpfulness",icon:n.jsx(ot,{}),value:4.7,format:{decimals:1},unit:"/ 5",change:1.2}],wt="month over month";function vt(t){const m=t.format?.decimals??0,r={minimumFractionDigits:m,maximumFractionDigits:m};return t.format?.style==="percent"?new Intl.NumberFormat("en-US",{...r,style:"percent"}).format(t.value/100):new Intl.NumberFormat("en-US",r).format(t.value)}function yt(t){return new Intl.NumberFormat("en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(t)}function St(t){return t.id==="sla"?Math.min(100,t.value+1):t.id==="csat"?Math.min(5,t.value+.1):t.value+12}function Et(){const[t,m]=d.useState(W);return n.jsx("div",{className:"art:w-full art:max-w-screen-2xl",children:n.jsx("section",{"aria-label":"Key performance indicators",className:"art:@container art:w-full art:min-w-0",children:n.jsx("section",{"aria-label":"Metric cards",tabIndex:0,className:"art:overflow-x-auto art:rounded-2xl art:border art:border-border art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-inset art:focus-visible:ring-ring",children:n.jsx("dl",{className:"art:flex art:flex-col art:gap-px art:bg-border art:@lg:w-max art:@lg:min-w-full art:@lg:flex-row",children:t.map((r,l)=>{const u=r.change>=0;return n.jsxs("div",{className:"art:@container/metric art:flex art:min-w-0 art:flex-col art:justify-between art:bg-background art:p-4 art:@lg:flex-1 art:gap-8 art:@lg:min-w-80 art:@lg:p-5",children:[n.jsxs("div",{className:"art:flex art:items-center art:gap-2",children:[n.jsx("span",{"aria-hidden":"true",className:"art:grid art:size-9 art:shrink-0 art:place-items-center art:rounded-full art:border art:border-border art:bg-muted art:text-muted-foreground art:[&>svg]:size-4",children:r.icon}),n.jsx("dt",{className:"art:min-w-0 art:flex-1 art:whitespace-nowrap art:font-mono art:uppercase art:tracking-tight art:text-muted-foreground art:text-xl art:font-medium",children:r.label}),n.jsx(bt,{label:`Actions for ${r.label}`,actions:[{id:"refresh",label:"Update metric",onSelect:()=>m(p=>p.map(s=>s.id===r.id?{...s,value:St(s)}:s))},{id:"reset",label:"Restore metric",onSelect:()=>m(p=>p.map(s=>s.id===r.id?W[l]??s:s))}]})]}),n.jsxs("dd",{className:"art:flex art:flex-col art:items-start art:gap-x-4 art:gap-y-2 art:@sm/metric:flex-row art:@sm/metric:flex-wrap art:@sm/metric:items-center art:@sm/metric:justify-between",children:[n.jsxs("div",{className:"art:flex art:min-h-9 art:items-center art:gap-2",children:[n.jsx(G,{text:vt(r),className:"art:inline-flex art:items-baseline art:whitespace-nowrap art:text-3xl art:font-medium art:tabular-nums art:tracking-tight"}),r.unit?n.jsx("span",{className:"art:font-mono art:text-base art:text-muted-foreground",children:r.unit}):null]}),n.jsxs("p",{className:"art:flex art:flex-wrap art:items-center art:gap-x-2 art:text-sm art:text-muted-foreground",children:[n.jsx("span",{className:`art:font-mono art:font-medium art:tabular-nums ${u?"art:text-success-foreground":"art:text-destructive"}`,children:n.jsx(G,{text:yt(r.change),prefix:r.change>0?"+":void 0,suffix:"%",className:"art:inline-flex art:items-baseline art:tabular-nums art:whitespace-nowrap"})}),n.jsx("span",{children:wt})]})]})]},r.id)})})})})})}function jt({className:t}){return n.jsx(X,{className:t,children:n.jsx("div",{className:"art:flex art:w-full art:min-w-0 art:flex-col art:items-center",children:n.jsx(Et,{})})})}function nr({variant:t}){return n.jsx(jt,{})}export{nr as default};
