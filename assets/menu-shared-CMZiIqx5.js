import{j as s}from"./index-CC_3CpvJ.js";import{r as m}from"./recipe-BnGuh8v_.js";function c(t,n,i){const[a,e]=m.useState(n);return[t??a,r=>{t===void 0&&e(r),i?.(r)}]}function u(t,n,i,a){const e=m.useRef(n);e.current=n,m.useEffect(()=>{if(!t)return;const r=o=>{i.current?.contains(o.target)||e.current(!1)},l=o=>{o.key==="Escape"&&(o.preventDefault(),e.current(!1),a?.current?.focus())};return document.addEventListener("pointerdown",r),document.addEventListener("keydown",l),()=>{document.removeEventListener("pointerdown",r),document.removeEventListener("keydown",l)}},[t,i,a])}function f(){return s.jsx("style",{children:`
    .z-am-reset{font:inherit;color:inherit;border:0;background:none;text-decoration:none;cursor:pointer}
    .z-am-reset:focus-visible{outline:2px solid currentColor;outline-offset:5px}
    .z-am-roll{display:inline-flex;overflow:hidden;line-height:1.2}
    .z-am-roll>span{display:inline-block;position:relative;transition:transform .4s cubic-bezier(.2,.8,.2,1)}
    .z-am-roll>span:after{content:attr(data-letter);position:absolute;top:100%;left:0}
    a:hover .z-am-roll>span,a:focus-visible .z-am-roll>span{transform:translateY(-100%)}
    @keyframes z-am-character{from{transform:translateY(105%);opacity:0}to{transform:translateY(0);opacity:1}}
    [data-pill-open=true] .z-am-letter-entry{display:inline-block;animation:z-am-character var(--z-am-duration,.6s) cubic-bezier(.2,.8,.2,1) both}
    .z-am-pill-grid{display:grid;grid-template-columns:minmax(0,.75fr) minmax(0,1.25fr);gap:32px;padding:4px 32px 28px}
    .z-am-pill-image{width:100%;height:200px;object-fit:cover;border-radius:16px}
    .z-am-fs-layout{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:8vw;padding:100px 5vw 60px;min-height:100%;box-sizing:border-box}
    .z-am-fs-picture{width:100%;height:min(62vh,620px);object-fit:cover}
    .z-am-mega-mobile{display:none}
    .z-am-mega-groups{display:flex;gap:12px;align-items:center}
    .z-am-mega-columns{display:grid;grid-template-columns:repeat(var(--z-am-columns,3),minmax(0,1fr));gap:40px;padding:36px}
    @media(max-width:640px){.z-am-pill-grid{gap:20px;padding:0 20px 24px;grid-template-columns:minmax(0,.6fr) minmax(0,1fr)}.z-am-pill-image{height:180px}.z-am-fs-layout{grid-template-columns:1fr;gap:24px;padding-top:100px}.z-am-fs-picture{height:24vh}.z-am-mega-groups{display:none}.z-am-mega-mobile{display:block}.z-am-mega-columns{display:block;padding:20px}.z-am-mega-columns>div{margin-bottom:24px}}
    @media(prefers-reduced-motion:reduce){.z-am-animated,.z-am-animated *{animation-duration:.001ms!important;animation-delay:0s!important;transition-duration:.001ms!important;transition-delay:0s!important}}
  `})}function g({text:t,stagger:n=.018,delay:i=0}){return s.jsx("span",{className:"z-am-roll","aria-hidden":!0,children:Array.from(t).map((a,e)=>s.jsx("span",{"data-letter":a===" "?" ":a,style:{transitionDelay:`${e*.012}s`},children:s.jsx("span",{className:"z-am-letter-entry",style:{animationDelay:`${i+e*n}s`},children:a===" "?" ":a})},`${e}-${a}`))})}export{f as M,u as a,g as b,c as u};
