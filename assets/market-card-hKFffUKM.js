import{j as e}from"./index-ClTtcMc3.js";import{a as z,E as S}from"./gradient-banner-BKVjieg9.js";import{a as C}from"./glyphs-AB_phf-v.js";import{n as $,a as M,E as Y,S as _,f as I}from"./theme-BGMSwUzH.js";const O=`
.eos-mcard{position:relative;display:flex;flex-direction:column;min-width:0;box-sizing:border-box;padding:var(--eos-banner-inset);border-radius:var(--eos-radius-card);background:var(--eos-card);border:1px solid var(--eos-hairline);box-shadow:var(--eos-card-shadow);-webkit-backdrop-filter:blur(var(--eos-card-blur));backdrop-filter:blur(var(--eos-card-blur));color:var(--eos-text);font-family:var(--eos-font-body);transition:transform var(--eos-dur-hover) var(--eos-ease)}
.eos-mcard::before,.eos-mcard::after{content:"";position:absolute;inset:-1px;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity var(--eos-dur-hover) var(--eos-ease)}
.eos-mcard::before{box-shadow:var(--eos-lift-shadow)}
.eos-mcard::after{z-index:4;border:1px solid var(--eos-hairline-strong)}
@media (hover:hover){
  .eos-mcard:hover{transform:translateY(var(--eos-lift))}
  .eos-mcard:hover::before,.eos-mcard:hover::after{opacity:1}
  .eos-mcard:hover .eos-tile{transform:translateY(var(--eos-lift-sm))}
  .eos-mcard:hover .eos-tile::after{opacity:1}
  .eos-mcard:hover:active{transform:translateY(var(--eos-lift)) scale(var(--eos-press))}
}
.eos-mcard:active{transform:scale(var(--eos-press));transition-duration:var(--eos-dur-press)}
.eos-mcard-body{display:flex;flex-direction:column;gap:6px;padding:18px 18px 16px}
.eos-mcard-title{margin:0;font-size:19px;line-height:1.3;font-weight:500;letter-spacing:-.012em;color:var(--eos-text)}
.eos-mcard-sub{margin:0;font-size:15.5px;line-height:1.45;color:var(--eos-text-tertiary)}
.eos-meta{display:flex;align-items:center;gap:8px;min-width:0;margin:12px 0 0;font-size:14.5px;line-height:1;color:var(--eos-text-secondary)}
.eos-meta svg{flex:none}
.eos-meta-count{display:inline-flex;align-items:center;gap:7px;font-variant-numeric:tabular-nums}
.eos-meta-sep,.eos-meta-by{color:var(--eos-text-tertiary)}
.eos-meta-maker{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.eos-mcard-link{color:inherit;text-decoration:none;font:inherit;letter-spacing:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer;text-align:inherit}
.eos-mcard-link::after{content:"";position:absolute;inset:0;z-index:3;border-radius:var(--eos-radius-card)}
.eos-mcard-link:focus-visible{outline:none}
.eos-mcard:has(.eos-mcard-link:focus-visible){outline:2px solid var(--eos-focus);outline-offset:3px}
.eos-mcard[data-media=frame]{padding:0;background:transparent;border:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}
.eos-mcard[data-media=frame]::before,.eos-mcard[data-media=frame]::after{display:none}
.eos-mcard[data-media=frame] .eos-mcard-body{display:contents}
.eos-mcard[data-media=frame] .eos-mcard-title{order:-2;margin:0 4px 8px;font-family:var(--eos-font-display);font-weight:var(--eos-display-weight);font-size:var(--eos-mcard-title,32px);line-height:1.08;letter-spacing:var(--eos-display-tracking)}
.eos-mcard[data-media=frame] .eos-mcard-sub{order:-1;margin:0 4px 18px}
.eos-mcard[data-media=frame] .eos-meta{margin:16px 4px 0}
.eos-mcard-frame{position:relative;display:flex;align-items:center;justify-content:center;gap:12px;box-sizing:border-box;border-radius:var(--eos-radius-card);background:var(--eos-well);border:1px solid var(--eos-hairline)}
.eos-mcard-frame::before,.eos-mcard-frame::after{content:"";position:absolute;inset:-1px;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity var(--eos-dur-hover) var(--eos-ease)}
.eos-mcard-frame::before{box-shadow:var(--eos-lift-shadow)}
.eos-mcard-frame::after{border:1px solid var(--eos-hairline-strong)}
@media (hover:hover){.eos-mcard[data-media=frame]:hover .eos-mcard-frame::before,.eos-mcard[data-media=frame]:hover .eos-mcard-frame::after{opacity:1}}
.eos-mcard-band{position:absolute;left:20px;right:20px;top:18px;height:5px;border-radius:999px}
${_}
`;function T(){return e.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 18 18","aria-hidden":!0,children:[e.jsx("rect",{x:"1.5",y:"1.5",width:"11",height:"11",rx:"3",fill:"currentColor",opacity:".45"}),e.jsx("rect",{x:"5.5",y:"5.5",width:"11",height:"11",rx:"3",fill:"currentColor"})]})}function K({title:a="Morning brief",subline:r="Calendar, inbox and weather in one note at 7:00.",apps:o=["calendar","mail","notes"],gradient:s="dawn",tileTone:x,tileSize:t="md",installs:f="12.4k",maker:h="Morrow",makerMark:v="sun",href:i,onOpen:n,media:b,mediaHeight:d,flip:u,headingLevel:g=3,className:y,style:w,...j}){const c=$[M()?.look??"pastel"].layout,l=b??c.cards,k=`h${g}`,N=i?e.jsx("a",{className:"eos-mcard-link",href:i,children:a}):n?e.jsx("button",{type:"button",className:"eos-mcard-link",onClick:n,children:a}):a,E=e.jsxs("p",{className:"eos-meta",children:[e.jsxs("span",{className:"eos-meta-count",children:[e.jsx(T,{}),f,e.jsx("span",{className:"eos-sr",children:" installs"})]}),e.jsx("span",{className:"eos-meta-sep","aria-hidden":!0,children:"·"}),e.jsx("span",{className:"eos-meta-by",children:"by"}),e.jsx(C,{kind:v,size:18}),e.jsx("span",{className:"eos-meta-maker",children:h})]});return e.jsxs(Y,{children:[e.jsx("style",{children:O}),e.jsxs("article",{...j,className:I("eos-mcard",y),"data-media":l,style:w,children:[l==="frame"?e.jsxs("div",{className:"eos-mcard-frame",style:{height:d??"var(--eos-frame-height, 220px)"},children:[e.jsx("span",{className:"eos-mcard-band",style:{background:`var(--eos-gradient-${s})`},"aria-hidden":!0}),o.map((m,p)=>e.jsx(z,{app:m,tone:"white",size:t,style:{"--eos-tile-i":p}},`${m}-${p}`))]},"frame"):e.jsx(S,{gradient:s,apps:o,tileTone:x??c.tiles,tileSize:t,height:d??"var(--eos-media-height, 196px)",flip:u},"banner"),e.jsxs("div",{className:"eos-mcard-body",children:[e.jsx(k,{className:"eos-mcard-title",children:N}),r&&e.jsx("p",{className:"eos-mcard-sub",children:r}),E]})]})]})}export{K as E};
