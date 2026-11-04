import{j as e}from"./index-ClTtcMc3.js";import{aW as E}from"./index-BFdzQsqP.js";import{r as S}from"./recipe-Bq68FSMI.js";import{E as C}from"./app-shell-KDIa8wjB.js";import{E as y}from"./glyphs-AB_phf-v.js";import{m as R,f as v,u as T,c as M,a as A,i as I}from"./theme-BGMSwUzH.js";import{E as O}from"./segmented-control-QumsKn32.js";const w={title:"Routines",subline:"Run the work you repeat",installed:"Installed",discover:"Discover",running:[{id:"morning-brief",title:"Morning brief",text:"Calendar, inbox and weather in one note at 7:00.",apps:["calendar","mail","notes"],schedule:"Every day at 7:00",href:"#morning-brief"},{id:"invoice-nudge",title:"Invoice nudge",text:"Chases unpaid invoices kindly after 14 days.",apps:["books","mail"],schedule:"Daily, once an invoice is 14 days late",href:"#invoice-nudge"},{id:"standup-digest",title:"Standup digest",text:"Yesterday's updates in one post.",apps:["chat","docs","tasks"],schedule:"Weekdays at 9:30",href:"#standup-digest"}],recommended:{heading:"Recommended",title:"Weekly cash summary",text:"Adds up last week's paid invoices every Monday and posts the total in #finance.",by:"Coffer",app:"books",href:"#cash-summary"},more:"New routines",fresh:[{id:"lead-scout",title:"Lead scout",text:"New leads in your niche, added to your sheet.",apps:["mail","sheet"],maker:"Pinecrest",href:"#lead-scout"},{id:"release-notes",title:"Release notes",text:"Merged changes turned into a changelog draft.",apps:["tasks","docs"],maker:"Kettle",href:"#release-notes"}]},W=`
.eos-routines{box-sizing:border-box;width:100%;max-width:820px;margin:0 auto;padding:clamp(28px,6vw,64px) clamp(18px,5vw,40px) 56px;color:var(--eos-text)}
.eos-routines-title{margin:0;font-size:clamp(26px,4vw,32px);font-weight:550;letter-spacing:-.02em;color:var(--eos-text)}
.eos-routines-sub{margin:8px 0 26px;font-size:17px;color:var(--eos-text-secondary)}
.eos-routines-h{margin:44px 0 14px;font-size:17px;font-weight:500;color:var(--eos-text-secondary)}
.eos-rlist{display:grid;gap:14px;margin:0;padding:0;list-style:none}
.eos-rcard{position:relative;display:grid;gap:10px;padding:20px 22px;border-radius:20px;border:1px solid var(--eos-hairline);background:var(--eos-card);-webkit-backdrop-filter:blur(var(--eos-card-blur));backdrop-filter:blur(var(--eos-card-blur));transition:transform var(--eos-dur-hover) var(--eos-ease)}
.eos-rcard::before,.eos-rcard::after{content:"";position:absolute;inset:-1px;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity var(--eos-dur-hover) var(--eos-ease)}
.eos-rcard::before{box-shadow:var(--eos-lift-shadow)}
.eos-rcard::after{z-index:2;border:1px solid var(--eos-hairline-strong)}
@media (hover:hover){
  .eos-rcard[data-open=true]:hover{transform:translateY(var(--eos-lift-sm))}
  .eos-rcard[data-open=true]:hover::before,.eos-rcard[data-open=true]:hover::after{opacity:1}
  .eos-rcard[data-open=true]:hover:active{transform:translateY(var(--eos-lift-sm)) scale(var(--eos-press))}
}
.eos-rcard[data-open=true]:active{transform:scale(var(--eos-press));transition-duration:var(--eos-dur-press)}
.eos-rcard:has(.eos-rcard-link:focus-visible){outline:2px solid var(--eos-focus);outline-offset:3px}
.eos-rcard-top{display:flex;align-items:center;gap:12px}
.eos-rcard-glyphs{display:inline-flex;gap:4px;flex:none}
.eos-rcard-title{margin:0;font-size:17px;font-weight:500;color:var(--eos-text)}
.eos-rcard-link{color:inherit;text-decoration:none;-webkit-tap-highlight-color:transparent}
.eos-rcard-link::after{content:"";position:absolute;inset:0;z-index:1;border-radius:inherit}
.eos-rcard-link:focus-visible{outline:none}
.eos-rcard-text{margin:0;font-size:15.5px;line-height:1.55;color:var(--eos-text-secondary)}
.eos-rcard-by{display:flex;align-items:center;gap:8px;margin:6px 0 0;font-size:15px;color:var(--eos-text-tertiary)}
.eos-rcard-by b{font-weight:450;color:var(--eos-text)}
.eos-rcard-when{margin-left:auto;font-size:14px;color:var(--eos-text-tertiary);white-space:nowrap}
@media (max-width:520px){.eos-rcard-top{flex-wrap:wrap}.eos-rcard-when{margin-left:0;width:100%}}
[data-eos-look=editorial] .eos-routines{max-width:760px;padding-top:clamp(36px,7vw,88px)}
[data-eos-look=editorial] .eos-routines-title{font-family:var(--eos-font-display);font-weight:var(--eos-display-weight);font-size:clamp(40px,6vw,64px);line-height:1;letter-spacing:var(--eos-display-tracking)}
[data-eos-look=editorial] .eos-routines-sub{margin:14px 0 34px;font-size:18px}
[data-eos-look=editorial] .eos-routines-h{margin:60px 0 4px;padding-bottom:14px;border-bottom:1px solid var(--eos-hairline);font-family:var(--eos-font-display);font-size:24px;font-weight:400;letter-spacing:-.01em;color:var(--eos-text)}
[data-eos-look=editorial] .eos-rlist{gap:0}
[data-eos-look=editorial] .eos-rcard{padding:22px 4px;border-width:0 0 1px;border-radius:0;background:none;-webkit-backdrop-filter:none;backdrop-filter:none}
[data-eos-look=editorial] .eos-rcard::before{inset:0 -14px;border-radius:14px;box-shadow:none;background:var(--eos-hover)}
[data-eos-look=editorial] .eos-rcard::after{display:none}
[data-eos-look=editorial] .eos-rcard[data-open=true]:hover{transform:none}
[data-eos-look=editorial] .eos-rcard[data-open=true]:hover:active,[data-eos-look=editorial] .eos-rcard[data-open=true]:active{transform:scale(var(--eos-press))}
[data-eos-look=editorial] .eos-rcard-title{font-size:19px}
[data-eos-look=bold] .eos-routines-title{font-family:var(--eos-font-display);font-weight:var(--eos-display-weight);font-size:clamp(34px,5vw,54px);line-height:.96;letter-spacing:var(--eos-display-tracking)}
[data-eos-look=bold] .eos-routines-h{font-weight:650;color:var(--eos-text)}
[data-eos-look=bold] .eos-rcard{border-radius:var(--eos-radius-card)}
[data-eos-look=bold] .eos-rcard[data-pick=true]{isolation:isolate;min-height:180px;align-content:end;border-color:transparent;background:var(--eos-gradient-orchid);color:var(--eos-ink-orchid)}
:is([data-eos-look=bold],[data-eos-look=night]) .eos-rcard[data-pick=true]>.eos-rcard-grain{position:absolute;inset:0;z-index:-1;border-radius:inherit;pointer-events:none;background-image:var(--eos-grain);background-size:200px 200px;mix-blend-mode:overlay;opacity:var(--eos-grain-opacity)}
[data-eos-look=bold] .eos-rcard[data-pick=true] .eos-rcard-title{font-family:var(--eos-font-display);font-size:26px;font-weight:700;letter-spacing:-.02em;color:inherit}
[data-eos-look=bold] .eos-rcard[data-pick=true] .eos-rcard-text,[data-eos-look=bold] .eos-rcard[data-pick=true] .eos-rcard-by,[data-eos-look=bold] .eos-rcard[data-pick=true] .eos-rcard-by b{color:var(--eos-ink-soft-orchid)}
[data-eos-look=night] .eos-rcard-glyphs{gap:6px}
[data-eos-look=night] .eos-rcard-glyphs>svg{box-sizing:content-box;padding:6px;border-radius:10px;background:var(--eos-frost);box-shadow:inset 0 0 0 1px var(--eos-frost-rim)}
[data-eos-look=night] .eos-rcard[data-pick=true]{isolation:isolate;border-color:transparent;background:var(--eos-gradient-dawn);color:var(--eos-ink-dawn)}
[data-eos-look=night] .eos-rcard[data-pick=true] .eos-rcard-title{color:inherit}
[data-eos-look=night] .eos-rcard[data-pick=true] .eos-rcard-text,[data-eos-look=night] .eos-rcard[data-pick=true] .eos-rcard-by,[data-eos-look=night] .eos-rcard[data-pick=true] .eos-rcard-by b{color:var(--eos-ink-soft-dawn)}
.eos-rcard-grain{display:none}
:is([data-eos-look=bold],[data-eos-look=night]) .eos-rcard[data-pick=true]>.eos-rcard-grain{display:block}
.eos-rapp{box-sizing:border-box;height:var(--eos-rapp-h,100vh);overflow:hidden}
.eos-rapp-window{width:100%}
@media (min-width:900px){
  .eos-rapp[data-eos-look=glass]{padding:clamp(16px,2.6vw,36px)}
  .eos-rapp[data-eos-look=glass] .eos-rapp-window{border-radius:22px;border:1px solid rgba(255,255,255,.14);box-shadow:0 40px 90px -40px rgba(20,14,70,.65)}
}
`;function Y({apps:s}){return s?.length?e.jsx("span",{className:"eos-rcard-glyphs","aria-hidden":!0,children:s.slice(0,2).map(r=>e.jsx(y,{app:r,size:20},r))}):null}function k({text:s,href:r}){return e.jsx("p",{className:"eos-rcard-title",children:r?e.jsx("a",{className:"eos-rcard-link",href:r,children:s}):s})}function $({content:s,segment:r,defaultSegment:d="discover",onSegmentChange:p,headingLevel:n=2,className:h,style:t}){const a={...w,...s},[l,x]=T(r,d,p),[u,m]=S.useState(!1),j=M(A()?.look),z=`h${n}`,g=`h${Math.min(n+1,4)}`,c=(o,f)=>({className:v(f,"eos-rise"),style:I(o,j)});let N=u?0:3;const i=o=>c(N++,o),b=(o,f)=>e.jsxs("li",{...i("eos-rcard"),"data-open":!!o.href,children:[e.jsxs("div",{className:"eos-rcard-top",children:[e.jsx(Y,{apps:o.apps}),e.jsx(k,{text:o.title,href:o.href}),o.schedule&&e.jsx("span",{className:"eos-rcard-when",children:o.schedule})]}),e.jsx("p",{className:"eos-rcard-text",children:o.text}),f]},o.id);return e.jsxs("div",{className:v("eos-routines",h),style:t,children:[e.jsx("style",{children:W}),e.jsx(z,{...c(0,"eos-routines-title"),children:a.title}),e.jsx("p",{...c(1,"eos-routines-sub"),children:a.subline}),e.jsx("div",{...c(2),children:e.jsx(O,{segments:[{value:"installed",label:a.installed},{value:"discover",label:a.discover}],value:l,onChange:o=>{m(!0),x(o==="installed"?"installed":"discover")},label:a.title})}),l==="installed"?e.jsxs("div",{children:[e.jsx(g,{...i("eos-routines-h"),children:a.installed}),e.jsx("ul",{className:"eos-rlist",children:a.running.map(o=>b(o))})]},"installed"):e.jsxs("div",{children:[e.jsx(g,{...i("eos-routines-h"),children:a.recommended.heading}),e.jsx("ul",{className:"eos-rlist",children:e.jsxs("li",{...i("eos-rcard"),"data-open":!!a.recommended.href,"data-pick":!0,children:[e.jsx("span",{className:"eos-rcard-grain","aria-hidden":!0}),e.jsxs("div",{className:"eos-rcard-top",children:[e.jsx(E,{size:20,"aria-hidden":!0}),e.jsx(k,{text:a.recommended.title,href:a.recommended.href})]}),e.jsx("p",{className:"eos-rcard-text",children:a.recommended.text}),e.jsxs("p",{className:"eos-rcard-by",children:["by ",e.jsx(y,{app:a.recommended.app,size:18})," ",e.jsx("b",{children:a.recommended.by})]})]})}),e.jsx(g,{...i("eos-routines-h"),children:a.more}),e.jsx("ul",{className:"eos-rlist",children:a.fresh.map(o=>b(o,o.maker?e.jsxs("p",{className:"eos-rcard-by",children:["by ",e.jsx("b",{children:o.maker})]}):null))})]},"discover")]})}function V({look:s="pastel",mode:r="dark",content:d,segment:p,defaultSegment:n,onSegmentChange:h,height:t="100vh",defaultActive:a="routines",className:l,style:x,...u}){const m=d?.title??w.title;return e.jsx(R,{look:s,mode:r,className:v("eos-rapp",l),style:{"--eos-rapp-h":typeof t=="number"?`${t}px`:t,...x},children:e.jsx(C,{...u,defaultActive:a,className:"eos-rapp-window",mode:r,height:"100%",title:m,children:e.jsx($,{content:d,segment:p,defaultSegment:n,onSegmentChange:h})})})}export{V as E,$ as a};
