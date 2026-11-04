import{j as e}from"./index-ClTtcMc3.js";import{r as d}from"./recipe-Bq68FSMI.js";import{E as J}from"./connect-link-XJKOT6vF.js";import{E as Q}from"./gradient-banner-BKVjieg9.js";import{a as V,n as X,x as Z,g as ee,E as T,h as ae,f as u,r as te}from"./theme-BGMSwUzH.js";const F=`
.eos-action{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;padding:0 22px;border-radius:var(--eos-radius-pill);border:0;background:var(--eos-pill-active);color:var(--eos-pill-active-text);font:inherit;font-size:15.5px;font-weight:500;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform var(--eos-dur-hover) var(--eos-ease)}
.eos-action::before{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:var(--eos-lift-shadow-sm);opacity:0;pointer-events:none;transition:opacity var(--eos-dur-hover) var(--eos-ease)}
@media (hover:hover){
  .eos-action:hover{transform:translateY(var(--eos-lift-sm))}
  .eos-action:hover::before{opacity:1}
  .eos-action:hover:active{transform:translateY(var(--eos-lift-sm)) scale(var(--eos-press))}
}
.eos-action:active{transform:scale(var(--eos-press));transition-duration:var(--eos-dur-press)}
.eos-action:focus-visible{outline:2px solid var(--eos-focus);outline-offset:3px}
`,oe=`
.eos-detail{position:relative;box-sizing:border-box;min-width:0;color:var(--eos-text);font-family:var(--eos-font-body)}
.eos-detail-head{display:grid;justify-items:center;gap:10px;min-width:0;text-align:center}
.eos-detail-title{margin:0;font-family:var(--eos-font-display);font-weight:var(--eos-display-weight);font-size:clamp(34px,6vw,var(--eos-display-size));line-height:1.04;letter-spacing:var(--eos-display-tracking);color:inherit;text-wrap:balance}
.eos-detail-sub{margin:0;font-size:clamp(16px,2.2vw,19px);line-height:1.4;color:var(--eos-detail-soft,var(--eos-text-secondary))}
.eos-detail-stage{display:grid;grid-template-columns:minmax(0,1fr);min-width:0}
.eos-detail-about{display:grid;min-width:0}
.eos-detail-stage[hidden],.eos-detail-about[hidden]{display:none}
.eos-detail[data-layout=card]{display:flex;flex-direction:column;padding:var(--eos-banner-inset);border-radius:var(--eos-radius-card);background:var(--eos-card);border:1px solid var(--eos-hairline);box-shadow:var(--eos-card-shadow);-webkit-backdrop-filter:blur(var(--eos-card-blur));backdrop-filter:blur(var(--eos-card-blur))}
.eos-detail[data-layout=card] .eos-detail-stage{order:-1}
.eos-detail[data-layout=card] .eos-detail-head{padding:clamp(28px,5vw,44px) 20px clamp(24px,4vw,36px)}
.eos-detail[data-layout=card] .eos-detail-about{margin:0 clamp(0px,4vw,40px) clamp(10px,3vw,34px)}
.eos-detail[data-layout=tabs]{display:flex;flex-direction:column;color:var(--eos-page-text);--eos-detail-soft:var(--eos-page-text-soft)}
.eos-detail[data-layout=tabs] .eos-detail-head{justify-items:start;gap:22px;text-align:left}
.eos-detail[data-layout=tabs] .eos-detail-title{max-width:11ch;font-size:clamp(46px,7vw,var(--eos-display-size));line-height:.98}
.eos-detail[data-layout=tabs] .eos-detail-sub{font-size:clamp(17px,1.6vw,20px)}
.eos-detail-tabs{position:relative;display:flex;gap:32px;margin:48px 0 28px;border-bottom:1px solid var(--eos-hairline)}
.eos-detail-tabs>.eos-ind{--eos-ind-fill:var(--eos-text)}
.eos-detail-tab{position:relative;padding:0 0 14px;border:0;background:none;color:var(--eos-text-secondary);font:inherit;font-size:16.5px;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform var(--eos-dur-press) var(--eos-ease)}
.eos-detail-tab:active{transform:scale(var(--eos-press))}
.eos-detail-tab-t{position:relative}
.eos-detail-tab-t::after{content:attr(data-text);content:attr(data-text) / "";position:absolute;left:0;top:0;color:var(--eos-text);opacity:0;pointer-events:none;white-space:nowrap;transition:opacity var(--eos-dur-indicator) var(--eos-ease)}
.eos-detail-tab[aria-selected=true] .eos-detail-tab-t::after{opacity:1}
@media (hover:hover){.eos-detail-tab:hover .eos-detail-tab-t::after{opacity:1;transition-duration:var(--eos-dur-hover)}}
.eos-detail-tab-line{position:absolute;left:0;right:0;bottom:-1px;height:2px;border-radius:2px;background:var(--eos-text);opacity:0;pointer-events:none}
.eos-detail-tabs:not([data-eos-ind=on]) .eos-detail-tab[aria-selected=true] .eos-detail-tab-line{opacity:1}
.eos-detail-tab:focus-visible{outline:2px solid var(--eos-focus);outline-offset:2px}
.eos-detail[data-layout=tabs] .eos-detail-stage{gap:clamp(56px,7vw,96px)}
.eos-detail[data-layout=tabs] .eos-detail-media{background:var(--eos-well);border:1px solid var(--eos-hairline)}
.eos-detail[data-layout=tabs] .eos-detail-media::before{content:"";position:absolute;z-index:1;left:24px;right:24px;top:22px;height:5px;border-radius:999px;background:var(--eos-detail-band)}
.eos-detail-quote{margin:0;max-width:38ch}
.eos-detail-quote blockquote{margin:0}
.eos-detail-quote p{margin:0;font-family:var(--eos-font-display);font-weight:400;font-size:clamp(28px,3.4vw,46px);line-height:1.18;letter-spacing:-.018em;color:var(--eos-page-text)}
.eos-detail-quote figcaption{margin-top:22px;font-size:16px;color:var(--eos-page-text-soft)}
.eos-detail[data-layout=hero]{display:flex;flex-direction:column;align-items:center;gap:clamp(32px,4vw,56px);color:var(--eos-page-text);--eos-detail-soft:var(--eos-page-text-soft)}
.eos-detail[data-layout=hero] .eos-detail-stage{order:-1}
.eos-detail[data-layout=hero] .eos-detail-media{background:none;overflow:visible}
.eos-detail[data-layout=hero] .eos-detail-head{gap:22px;margin-top:calc(-1 * clamp(8px,2vw,24px))}
.eos-detail[data-layout=hero] .eos-detail-title{font-size:clamp(46px,7.4vw,var(--eos-display-size));line-height:1}
.eos-detail[data-layout=hero] .eos-detail-sub{max-width:40ch;font-size:clamp(17px,1.8vw,21px);line-height:1.5}
.eos-detail[data-layout=hero] .eos-detail-cta{margin-top:10px;height:50px;padding:0 26px;font-size:16px;box-shadow:0 14px 30px -14px rgba(20,16,60,.5)}
.eos-detail[data-layout=hero] .eos-detail-about{width:100%;max-width:760px}
.eos-detail[data-layout=hero] .eos-about{-webkit-backdrop-filter:blur(var(--eos-card-blur)) saturate(1.4);backdrop-filter:blur(var(--eos-card-blur)) saturate(1.4);box-shadow:0 30px 60px -36px rgba(30,20,90,.45)}
.eos-detail[data-layout=bento]{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:var(--eos-grid-gap)}
.eos-detail[data-layout=bento] .eos-detail-stage,.eos-detail[data-layout=bento] .eos-detail-head{grid-column:1/span 8;grid-row:1}
.eos-detail[data-layout=bento] .eos-detail-media{min-height:500px;place-items:start;align-content:start;padding:clamp(22px,3vw,40px)}
.eos-detail[data-layout=bento] .eos-detail-media>.eos-banner-body{padding:0;justify-content:flex-start}
.eos-detail[data-layout=bento] .eos-detail-head{position:relative;z-index:3;align-self:end;grid-template-columns:minmax(0,1fr) auto;justify-items:start;align-items:end;gap:12px 20px;padding:clamp(22px,3vw,40px);text-align:left;color:var(--eos-detail-ink);--eos-detail-soft:var(--eos-detail-ink-soft)}
.eos-detail[data-layout=bento] .eos-detail-title{grid-column:1;font-size:clamp(40px,5.4vw,76px);line-height:.95}
.eos-detail[data-layout=bento] .eos-detail-sub{grid-column:1;font-size:clamp(17px,1.6vw,20px)}
.eos-detail[data-layout=bento] .eos-detail-cta{grid-column:2;grid-row:1/span 2;align-self:end;height:50px;padding:0 24px;background:#FFFFFF;color:#16161A;font-size:16px;font-weight:600}
.eos-detail[data-layout=bento] .eos-detail-about{grid-column:9/span 4;grid-row:1}
.eos-detail[data-layout=bento] .eos-about{border-radius:var(--eos-radius-card);align-content:start}
@media (max-width:1100px){
  .eos-detail[data-layout=bento] .eos-detail-stage,.eos-detail[data-layout=bento] .eos-detail-head{grid-column:1/-1}
  .eos-detail[data-layout=bento] .eos-detail-about{grid-column:1/-1;grid-row:2}
  .eos-detail[data-layout=bento] .eos-detail-media{min-height:440px}
}
@media (max-width:700px){
  .eos-detail[data-layout=bento] .eos-detail-head{grid-template-columns:minmax(0,1fr)}
  .eos-detail[data-layout=bento] .eos-detail-cta{grid-column:1;grid-row:auto}
  .eos-detail[data-layout=bento] .eos-detail-media{min-height:400px}
}
`,se=`
.eos-about{box-sizing:border-box;margin:0;padding:clamp(20px,3.4vw,30px);border-radius:var(--eos-radius-inner);background:var(--eos-inner);border:1px solid var(--eos-hairline);display:grid;gap:22px;text-align:left;color:var(--eos-text)}
.eos-about-name{margin:0;font-size:17px;font-weight:550;color:var(--eos-text)}
.eos-about-by{margin:4px 0 0;font-size:16px;color:var(--eos-text-secondary)}
.eos-about-h{margin:0 0 6px;font-size:16px;font-weight:550;color:var(--eos-text)}
.eos-about-text{margin:0;max-width:62ch;font-size:16px;line-height:1.6;color:var(--eos-text-secondary)}
.eos-about-lists{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px 28px}
.eos-about-list{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.eos-about-list li{display:flex;gap:10px;align-items:flex-start;font-size:15.5px;line-height:1.45;color:var(--eos-text-secondary)}
.eos-about-list svg{flex:none;margin-top:2px}
.eos-about-foot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid var(--eos-hairline);padding-top:20px}
.eos-about-note{font-size:14.5px;color:var(--eos-text-tertiary)}
`;function L({ok:a}){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":!0,children:[e.jsx("circle",{cx:"9",cy:"9",r:"8.25",fill:"none",stroke:"currentColor",strokeOpacity:".35"}),a?e.jsx("path",{d:"m5.6 9.2 2.3 2.3 4.6-4.9",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}):e.jsx("path",{d:"M6 9h6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}function O({action:a,className:r}){return a.href?e.jsx("a",{className:u("eos-action",r),href:a.href,onClick:a.onClick,children:a.label}):e.jsx("button",{type:"button",className:u("eos-action",r),onClick:a.onClick,children:a.label})}const _={name:"Coffer",by:"by Tallyhouse",about:"Link your Coffer books so routines can read invoices, send reminders and post totals.",can:["Read invoices and customers","Send email from your Coffer address"],cannot:["Move money"]},ie=["Overview","Details"],re={card:240,tabs:"clamp(240px, 30vw, 380px)",hero:"auto",bento:"auto"},le={card:"inset",tabs:"card",hero:"square",bento:"card"};function he({gradient:a="dawn",from:r={label:"Morrow"},to:c={label:"Coffer",app:"books"},tileTone:h,tileSize:b,bannerHeight:m,title:x="Connect Coffer",subline:l="Powered by Morrow",about:f=_,action:g={label:"Connect Coffer"},note:D="You can disconnect at any time.",quote:v,tabs:j=ie,layout:R,headingLevel:k=2,children:q,className:B,style:M,...H}){const z=V(),s=R??X[z?.look??"pastel"].layout.detail,K=Z("(max-width: 640px)"),n=d.useId(),[p,N]=d.useState(0),C=d.useRef([]),E=d.useRef([]),S=d.useRef(null),$=d.useRef(null),P=`h${k}`,y=s==="tabs"&&f!==null;ee({host:S,indicator:$,target:()=>E.current[p],choice:p,opaque:!0,look:z?.look});const w=s==="hero"||s==="bento",I=s==="card"||s==="bento",U=h??(s==="tabs"?"white":"frosted"),Y=b??(w&&!K?"xl":"lg"),A=t=>y?{role:"tabpanel",id:`${n}-panel-${t}`,"aria-labelledby":`${n}-tab-${t}`,hidden:p!==t}:{},G=(t,o)=>{const i=te(t.key,o,j.length);i<0||(t.preventDefault(),N(i),C.current[i]?.focus())},W={"--eos-detail-ink":`var(--eos-ink-${a})`,"--eos-detail-ink-soft":`var(--eos-ink-soft-${a})`,"--eos-detail-band":`var(--eos-gradient-${a})`};return e.jsxs(T,{children:[e.jsx("style",{children:oe}),e.jsx("style",{children:F}),e.jsxs("section",{...H,className:u("eos-detail",B),"data-layout":s,"aria-labelledby":`${n}-title`,style:{...W,...M},children:[e.jsxs("div",{className:"eos-detail-head",children:[e.jsx(P,{id:`${n}-title`,className:"eos-detail-title",children:x}),l&&e.jsx("p",{className:"eos-detail-sub",children:l}),w&&g&&e.jsx(O,{action:g,className:"eos-detail-cta"})]}),y&&e.jsxs("div",{ref:S,className:"eos-detail-tabs",role:"tablist","aria-label":x,children:[e.jsx(ae,{ref:$}),j.map((t,o)=>e.jsxs("button",{ref:i=>{C.current[o]=i},type:"button",role:"tab",id:`${n}-tab-${o}`,"aria-selected":p===o,"aria-controls":`${n}-panel-${o}`,tabIndex:p===o?0:-1,className:"eos-detail-tab",onClick:()=>N(o),onKeyDown:i=>G(i,o),children:[e.jsx("span",{className:"eos-detail-tab-t","data-text":t,children:t}),e.jsx("span",{className:"eos-detail-tab-line",ref:i=>{E.current[o]=i},"aria-hidden":!0})]},t))]}),e.jsxs("div",{className:"eos-detail-stage",...A(0),children:[e.jsx(Q,{className:"eos-detail-media",gradient:a,height:m??re[s],shape:le[s],petals:I,grain:I,children:e.jsx(J,{from:r,to:c,tone:U,size:Y})}),y&&v&&e.jsxs("figure",{className:"eos-detail-quote",children:[e.jsx("blockquote",{children:e.jsx("p",{children:v.text})}),e.jsx("figcaption",{children:v.by})]})]}),f&&e.jsx("div",{className:"eos-detail-about",...A(1),children:e.jsx(ne,{about:f,action:w?null:g,note:D,headingLevel:Math.min(k+1,4)})}),q]})]})}function ne({about:a=_,action:r={label:"Connect Coffer"},note:c,headingLevel:h=3,className:b,style:m}){const x=`h${h}`;return e.jsxs(T,{children:[e.jsx("style",{children:se}),e.jsx("style",{children:F}),e.jsxs("div",{className:u("eos-about",b),style:m,children:[e.jsxs("div",{children:[e.jsx(x,{className:"eos-about-name",children:a.name}),a.by&&e.jsx("p",{className:"eos-about-by",children:a.by})]}),a.about&&e.jsxs("div",{children:[e.jsx("p",{className:"eos-about-h",children:"About"}),e.jsx("p",{className:"eos-about-text",children:a.about})]}),!!(a.can?.length||a.cannot?.length)&&e.jsxs("div",{className:"eos-about-lists",children:[a.can&&a.can.length>0&&e.jsxs("div",{children:[e.jsx("p",{className:"eos-about-h",children:"It can"}),e.jsx("ul",{className:"eos-about-list",children:a.can.map(l=>e.jsxs("li",{children:[e.jsx(L,{ok:!0}),l]},l))})]}),a.cannot&&a.cannot.length>0&&e.jsxs("div",{children:[e.jsx("p",{className:"eos-about-h",children:"It can't"}),e.jsx("ul",{className:"eos-about-list",children:a.cannot.map(l=>e.jsxs("li",{children:[e.jsx(L,{ok:!1}),l]},l))})]})]}),(r||c)&&e.jsxs("div",{className:"eos-about-foot",children:[c&&e.jsx("span",{className:"eos-about-note",children:c}),r&&e.jsx(O,{action:r})]})]})]})}export{he as E};
