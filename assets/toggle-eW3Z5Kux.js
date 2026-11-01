import{j as i}from"./index-nXBh-1Hs.js";import{r as g}from"./recipe-DaAV5BFP.js";import{b}from"./theme-S8eGc76R.js";const _=`
.clio-switch{all:unset;position:relative;flex:none;display:inline-flex;align-items:center;width:40px;height:24px;border-radius:999px;cursor:pointer;background:var(--clio-hairline-strong);box-shadow:inset 0 1px 2px rgb(0 0 0 / .12);transition:background-color 260ms var(--clio-mode-ease);-webkit-tap-highlight-color:transparent}
.clio-switch[aria-checked="true"]{background:var(--clio-accent)}
.clio-switch:hover{background:var(--clio-ink-tertiary)}
.clio-switch[aria-checked="true"]:hover{background:var(--clio-accent-hover)}
.clio-switch:active .clio-switch__thumb{width:23px}
.clio-switch[aria-checked="true"]:active .clio-switch__thumb{transform:translate3d(13px,0,0)}
.clio-switch:focus-visible{outline:2px solid var(--clio-accent);outline-offset:2px}
.clio-switch__thumb{position:absolute;left:3px;top:3px;width:18px;height:18px;border-radius:999px;background:#fff;box-shadow:0 1px 2px rgb(0 0 0 / .22),0 2px 6px -2px rgb(0 0 0 / .25);transition:transform 300ms cubic-bezier(.34,1.3,.64,1),width 160ms var(--clio-press-ease)}
.clio-switch[aria-checked="true"] .clio-switch__thumb{transform:translate3d(16px,0,0)}
.clio-switch[data-size="sm"]{width:34px;height:20px}
.clio-switch[data-size="sm"] .clio-switch__thumb{width:14px;height:14px}
.clio-switch[data-size="sm"][aria-checked="true"] .clio-switch__thumb{transform:translate3d(14px,0,0)}
@media (prefers-reduced-motion:reduce){.clio-switch__thumb{transition:none}}
`,v=`
.clio-toggle__body{margin-top:auto;display:flex;flex-direction:column;gap:8px;padding-top:12px}
.clio-toggle__state{position:relative;height:40px;font-size:40px;overflow:hidden}
.clio-toggle__word{display:block;animation:clio-toggle-word 520ms var(--clio-alive-ease) both}
@keyframes clio-toggle-word{from{opacity:0;transform:translate3d(0,60%,0)}to{opacity:1;transform:none}}
.clio-toggle__detail{min-height:2.8em}
@media (prefers-reduced-motion:reduce){.clio-toggle__word{animation:none}}
`;function k({checked:o,defaultChecked:a=!1,onCheckedChange:d,label:h,size:p="md",className:c,onClick:u,...s}){const[r,l]=g.useState(a),e=o??r;return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:_}),i.jsx("button",{...s,type:"button",role:"switch","aria-checked":e,"aria-label":s["aria-labelledby"]?void 0:h,"data-size":p,className:c?`clio-switch ${c}`:"clio-switch",onClick:n=>{u?.(n),!n.defaultPrevented&&(o===void 0&&l(!e),d?.(!e))},children:i.jsx("span",{className:"clio-switch__thumb","aria-hidden":"true"})})]})}function S({label:o="Quiet hours",checked:a,defaultChecked:d=!1,onCheckedChange:h,onText:p="On",offText:c="Off",detailOn:u="Nudges wait until 21:00",detailOff:s="Nudges arrive as usual",darkWhenOn:r=!0,className:l,...e}){const[n,w]=g.useState(d),t=a??n,m=g.useId(),f=x=>{a===void 0&&w(x),h?.(x)};return i.jsxs(b,{...e,label:o,meta:i.jsx(k,{checked:t,onCheckedChange:f,label:o,"aria-describedby":m}),tone:t&&r?"focus":"inherit",glow:t&&r,className:l?`clio-toggle ${l}`:"clio-toggle","data-on":t?"":void 0,children:[i.jsx("style",{children:v}),i.jsxs("div",{className:"clio-toggle__body",children:[i.jsx("p",{className:"clio-numeral clio-toggle__state","aria-hidden":"true",children:i.jsx("span",{className:"clio-toggle__word",children:t?p:c},t?"on":"off")}),i.jsx("p",{id:m,className:"clio-caption clio-toggle__detail",children:t?u:s})]})]})}export{k as C,S as a};
