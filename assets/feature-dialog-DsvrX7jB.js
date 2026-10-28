import{j as t}from"./index-BsFhL6Lx.js";import{r as a}from"./recipe-DcPI5VbQ.js";import{g as i}from"./index-xgxdCp6f.js";import{u as R}from"./index-BE3wWpXZ.js";import{C as E}from"./CustomEase-C73R1l_9.js";typeof window<"u"&&(i.registerPlugin(R,E.CustomEase),E.CustomEase.create("zeusMotion","M0,0 C0.3,0.9 0.1,1 1,1"),E.CustomEase.create("zeusMotionInOut","M0,0 C0.7,0 0.16,1 1,1"));const de="rgba(10, 10, 10, 0.2)",P="rgba(10, 10, 10, 0)",ce="6px",V=128,ge=64,ue={mobile:"(max-width: 479px)",landscape:"(orientation: landscape) and (max-width: 767px)",tablet:"(max-width: 991px)",desktop:"(min-width: 992px)"},fe=["Full-grain pebble, tacked for grip","Holds pressure through cold courts","Indoor pace, outdoor wear"],pe=[{src:"/assets/zeus/action_leap_01.jpg",alt:"Athlete captured mid-leap against a dark studio ground"},{src:"/assets/zeus/roster_cap-silhouette_03.jpg",alt:"Silhouetted athlete in a cap with a glowing brim on a green field"}],he=[{num:"620 g",label:"Regulation weight"},{num:"75.5 cm",label:"Circumference, size 7"},{num:"0.6 bar",label:"Playing pressure"}];function me({className:w="",onAction:G,onOpenChange:K,duration:s=.55,ease:A="zeusMotion",disable:b="",label:U="Court issue, 01",title:W="Game leather",tileImage:T={src:"/assets/zeus/product_ball_05.jpg",alt:"Basketball floating in a shaft of light in a dark locker room"},sheetTitle:L="Broken in by hand",sheetText:H="A game ball built to be played - full-grain leather with a deep pebble, worked in before it ships so the first grip feels like the hundredth.",actionLabel:Y="Explore the story",listItems:M=fe,mediaImages:$=pe,stats:q=he,sheetImage:S={src:"/assets/zeus/hero_profile_03.jpg",alt:"Silhouetted athlete profile against a deep orange field"},outro:J="Built for the court you actually play on - the cracked one behind the gym, in January, with cold hands."}){const f=a.useRef(null),_=a.useRef(null),p=a.useRef(null),h=a.useRef(null),k=a.useRef(null),m=a.useRef(null),c=a.useRef(null),o=a.useRef(null),l=a.useRef(null),D=a.useRef(null),X=a.useRef(null),d=a.useRef(!1),v=a.useRef(!1),I=a.useRef(""),n=a.useRef(null),Q=(L||"details").trim()||"details",O=a.useCallback(()=>b?b.split(",").some(e=>{const r=ue[e.trim()];return r&&window.matchMedia(r).matches}):!1,[b]),Z=a.useCallback(()=>{v.current||(v.current=!0,I.current=document.body.style.overflow,document.body.style.overflow="hidden")},[]),j=a.useCallback(()=>{v.current&&(v.current=!1,document.body.style.overflow=I.current)},[]),N=a.useCallback(e=>{K?.(e),k.current?.setAttribute("aria-expanded",e?"true":"false");const r=l.current;r&&(r.setAttribute("aria-hidden",e?"false":"true"),e?r.removeAttribute("inert"):r.setAttribute("inert",""))},[]),{contextSafe:x}=R({scope:f}),F=x(()=>{n.current&&(n.current.kill(),n.current=null),i.killTweensOf([m.current,c.current,o.current].filter(Boolean))}),ee=a.useCallback(()=>{n.current=null,document.hasFocus()&&D.current?.focus()},[]),te=a.useCallback(()=>{n.current=null,j(),f.current?.classList.remove("is-open"),i.set(c.current,{y:V}),o.current&&i.set(o.current,{yPercent:30}),document.hasFocus()&&k.current?.focus()},[j]),g=x(()=>{if(O()||d.current)return n.current;d.current=!0,F(),f.current?.classList.add("is-open"),N(!0),Z(),l.current&&(l.current.scrollTop=0);const e=i.timeline({defaults:{ease:A,force3D:!0},onComplete:ee});return e.to(m.current,{"--fdg-blur":ce,backgroundColor:de,duration:s*.6,data:{label:"Page dims and blurs behind"}},0),e.to(c.current,{y:0,duration:s,data:{label:"Dialog rises into place"}},0),e.to(c.current,{autoAlpha:1,duration:s*.45,data:{label:"Dialog fades in fast"}},0),o.current&&e.to(o.current,{yPercent:0,autoAlpha:1,duration:s*.9,data:{label:"Gradient band drifts up and fades in"}},.1),n.current=e,window.matchMedia("(prefers-reduced-motion: reduce)").matches&&e.timeScale(1e3),e}),u=x(()=>{if(!d.current)return n.current;d.current=!1,F(),N(!1);const e=i.timeline({defaults:{ease:"zeusMotionInOut",force3D:!0},onComplete:te});return e.to(c.current,{y:ge,duration:s*.4,data:{label:"Dialog drops away"}},0),e.to(c.current,{autoAlpha:0,duration:s*.32,data:{label:"Dialog fades out"}},0),e.to(m.current,{"--fdg-blur":"0px",backgroundColor:P,duration:s*.4,data:{label:"Page sharpens again"}},0),o.current&&e.to(o.current,{yPercent:30,autoAlpha:0,duration:s*.35,data:{label:"Gradient band sinks out"}},0),n.current=e,window.matchMedia("(prefers-reduced-motion: reduce)").matches&&e.timeScale(1e3),e}),ae=a.useCallback(()=>{d.current||g()},[g]),re=x(()=>{!p.current||!h.current||(i.to(p.current,{x:1.75,y:-1.75,duration:.4,ease:"zeusMotionInOut",overwrite:"auto"}),i.to(h.current,{x:-1.75,y:1.75,duration:.4,ease:"zeusMotionInOut",overwrite:"auto"}))}),ie=x(()=>{!p.current||!h.current||i.to([p.current,h.current],{x:0,y:0,duration:.4,ease:"zeusMotionInOut",overwrite:"auto"})}),ne=a.useCallback(e=>{d.current||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),g())},[g]),oe=a.useCallback(e=>{e.stopPropagation(),g()},[g]),se=a.useCallback(()=>{u()},[u]),le=a.useCallback(e=>{d.current&&l.current&&!l.current.contains(e.target)&&u()},[u]);return R(()=>{if(O())return;_.current?.setAttribute("role","button"),_.current?.setAttribute("tabindex","0"),_.current?.setAttribute("aria-haspopup","dialog"),l.current?.setAttribute("role","dialog"),l.current?.setAttribute("aria-modal","true"),N(!1),i.set(m.current,{"--fdg-blur":"0px",backgroundColor:P}),i.set(c.current,{y:V,autoAlpha:0}),o.current&&i.set(o.current,{yPercent:30,autoAlpha:0});const e=i.matchMedia();return e.add("(prefers-reduced-motion: reduce)",()=>{}),()=>{j(),e.revert(),n.current&&n.current.kill()}},{scope:f,dependencies:[]}),a.useEffect(()=>{const e=r=>{if(r.key==="Escape"&&d.current&&u(),r.key==="Tab"&&d.current){const C=l.current;if(!C)return;const y=C.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(!y.length)return;const z=y[0],B=y[y.length-1];r.shiftKey&&document.activeElement===z?(r.preventDefault(),B.focus()):!r.shiftKey&&document.activeElement===B?(r.preventDefault(),z.focus()):C.contains(document.activeElement)||(r.preventDefault(),z.focus())}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[u]),a.useEffect(()=>{const e=()=>{n.current?.paused(document.hidden)};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]),t.jsxs("div",{ref:f,className:`fdg_stage ${w}`.trim(),"data-anm-feature-dialog":!0,"data-anm-duration":s,"data-anm-ease":A,"data-anm-disable":b||void 0,children:[t.jsxs("div",{ref:_,className:"fdg_tile","data-anm-fdg-tile":!0,role:"button",tabIndex:0,"aria-haspopup":"dialog",onClick:ae,onKeyDown:ne,onMouseEnter:re,onMouseLeave:ie,children:[t.jsx("div",{className:"fdg_gradient fdg_tile_gradient"}),t.jsxs("div",{className:"fdg_tile_copy",children:[t.jsx("div",{className:"fdg_tile_label",children:U}),t.jsx("h3",{className:"fdg_tile_title",children:W})]}),t.jsx("div",{className:"fdg_tile_media","data-anm-fdg-tile-media":!0,children:t.jsx("img",{className:"fdg_tile_img",src:T.src,alt:T.alt,loading:"eager",decoding:"async"})}),t.jsx("button",{ref:k,type:"button",className:"fdg_toggle","data-anm-fdg-toggle":!0,"aria-expanded":"false",onClick:oe,children:t.jsxs("svg",{className:"fdg_glyph",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[t.jsx("path",{ref:p,className:"fdg_glyph_tr",d:"M10 2H14V6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{ref:h,className:"fdg_glyph_bl",d:"M6 14H2V10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),t.jsx("div",{ref:m,className:"fdg_overlay","data-anm-fdg-overlay":!0}),t.jsxs("div",{ref:c,className:"fdg_modal","data-anm-fdg-modal":!0,onClick:le,children:[t.jsx("div",{ref:o,className:"fdg_gradient fdg_panel_gradient","data-anm-fdg-gradient":!0}),t.jsx("div",{className:"fdg_panel",children:t.jsxs("section",{ref:l,className:"fdg_sheet","data-anm-fdg-sheet":!0,"aria-label":Q,"aria-hidden":"true",inert:!0,children:[t.jsx("button",{ref:D,type:"button",className:"fdg_close","data-anm-fdg-close":!0,"aria-label":"Close dialog",onClick:se,children:t.jsx("svg",{className:"fdg_glyph",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}),t.jsxs("div",{className:"fdg_sheet_inner",children:[t.jsxs("div",{className:"fdg_sheet_grid",children:[t.jsxs("div",{className:"fdg_sheet_main",children:[t.jsx("div",{className:"fdg_title_mask",children:t.jsx("h2",{ref:X,className:"fdg_sheet_title","data-anm-fdg-title":!0,children:L})}),t.jsx("p",{className:"fdg_sheet_text",children:H}),t.jsx("div",{className:"fdg_actions",children:t.jsx("button",{type:"button",className:"fdg_btn fdg_btn_primary",onClick:G,children:Y})})]}),t.jsx("ul",{className:"fdg_list",children:M.map((e,r)=>t.jsx("li",{className:`fdg_list_item${r===M.length-1?" fdg_list_item_last":""}`,children:e},e))})]}),t.jsx("div",{className:"fdg_media_row",children:$.map(e=>t.jsx("div",{className:"fdg_media_cell",children:t.jsx("img",{className:"fdg_sheet_img",src:e.src,alt:e.alt,loading:"lazy",decoding:"async"})},e.src))}),t.jsx("div",{className:"fdg_stats",children:q.map(e=>t.jsxs("div",{className:"fdg_stat",children:[t.jsx("div",{className:"fdg_stat_num",children:e.num}),t.jsx("div",{className:"fdg_stat_label",children:e.label})]},e.label))}),t.jsx("div",{className:"fdg_sheet_media",children:t.jsx("img",{className:"fdg_sheet_img",src:S.src,alt:S.alt,loading:"lazy",decoding:"async"})}),t.jsx("p",{className:"fdg_outro",children:J})]})]})})]})]})}const xe=`

.fdg_stage {
  --margin: 40px;
  --fdg-sans: var(--font-inter, Inter), -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  width: 100%;
  min-height: var(--zeus-animation-height, 640px);
  min-height: var(--zeus-animation-height, 640px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebebe9;
  padding: 80px 24px;
  font-family: var(--fdg-sans);
  -webkit-font-smoothing: antialiased;
}

/* The gradient family - bottom-anchored aurora in the brand palette.
   Irregularity comes from pools of deliberately UNEVEN heights melted
   together by a static blur: the edge undulates but no individual wave
   shape is readable. */
.fdg_gradient {
  background-image:
    radial-gradient(16% 88% at 22% 100%, rgba(253, 85, 29, 0.7) 0%, rgba(253, 85, 29, 0) 100%),
    radial-gradient(30% 52% at 34% 100%, rgba(255, 138, 92, 0.75) 0%, rgba(255, 138, 92, 0) 100%),
    radial-gradient(14% 70% at 58% 100%, rgba(255, 107, 61, 0.8) 0%, rgba(255, 107, 61, 0) 100%),
    radial-gradient(24% 96% at 74% 100%, rgba(253, 85, 29, 0.8) 0%, rgba(253, 85, 29, 0) 100%),
    radial-gradient(58% 44% at 10% 100%, rgba(255, 179, 138, 0.85) 0%, rgba(255, 179, 138, 0) 100%),
    radial-gradient(40% 60% at 90% 100%, rgba(255, 107, 61, 0.85) 0%, rgba(255, 107, 61, 0) 100%),
    radial-gradient(82% 78% at 50% 100%, #fd551d 0%, rgba(253, 85, 29, 0) 100%);
  filter: blur(22px);
}

.fdg_tile {
  position: relative;
  display: flex;
  align-items: stretch;
  width: min(720px, 100%);
  min-height: 340px;
  border: 1px solid rgba(16, 16, 16, 0.12);
  border-radius: 14px;
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
  outline: none;
}

.fdg_tile:focus-visible {
  outline: 2px solid #fd551d;
  outline-offset: 4px;
}

/* Tile variant: a wedge that rises toward the right - the left 10% stays
   clean, the pools grow taller rightward. Oversized past the tile edges so
   the noise displacement never reveals a gap at the borders. */
.fdg_tile_gradient {
  position: absolute;
  left: -12px;
  right: -12px;
  bottom: -12px;
  height: calc(60% + 12px);
  background-image:
    radial-gradient(35% 38% at 34% 100%, rgba(255, 179, 138, 0.8) 0%, rgba(255, 179, 138, 0) 100%),
    radial-gradient(12% 58% at 48% 100%, rgba(255, 138, 92, 0.75) 0%, rgba(255, 138, 92, 0) 100%),
    radial-gradient(40% 64% at 62% 100%, rgba(255, 107, 61, 0.85) 0%, rgba(255, 107, 61, 0) 100%),
    radial-gradient(14% 84% at 78% 100%, rgba(253, 85, 29, 0.8) 0%, rgba(253, 85, 29, 0) 100%),
    radial-gradient(55% 96% at 92% 100%, #fd551d 0%, rgba(253, 85, 29, 0) 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 10%, #000000 28%);
  mask-image: linear-gradient(to right, transparent 0%, transparent 10%, #000000 28%);
  pointer-events: none;
}

.fdg_tile_copy {
  position: relative;
  flex: 1 1 55%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  padding: 28px;
  z-index: 1;
}

.fdg_tile_label {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: rgba(16, 16, 16, 0.55);
}

.fdg_tile_title {
  margin: 0;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: #101010;
}

.fdg_tile_media {
  position: relative;
  flex: 0 0 40%;
  /* top/right clear the 54px expand-button zone so icon and image never overlap */
  margin: 60px 60px 32px 24px;
  border-radius: 12px;
  overflow: hidden;
  z-index: 1;
}

.fdg_tile_img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.fdg_toggle {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefed;
  color: #101010;
  cursor: pointer;
  z-index: 2;
}

.fdg_toggle:hover {
  background-color: #e5e5e2;
}

.fdg_toggle:focus-visible {
  outline: 2px solid #fd551d;
  outline-offset: 3px;
}

.fdg_glyph {
  width: 16px;
  height: 16px;
}

/* Dark scrim: opacity stays 1 - the tint alpha and the blur radius are the
   animated values (animating element opacity under backdrop-filter lets the
   sharp page bleed through and the blur reads as nothing). */
.fdg_overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(10, 10, 10, 0);
  backdrop-filter: blur(var(--fdg-blur, 0px));
  -webkit-backdrop-filter: blur(var(--fdg-blur, 0px));
  pointer-events: none;
  z-index: 40;
}

.fdg_modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 48px 24px 0;
  pointer-events: none;
  z-index: 50;
}

.fdg_stage.is-open .fdg_modal {
  pointer-events: auto;
}

.fdg_panel {
  position: relative;
  width: min(880px, 100%);
}

/* Full-width aurora band at the viewport bottom, behind the sheet.
   Oversized past the viewport edges so the noise displacement never
   reveals a gap at the borders. */
.fdg_panel_gradient {
  position: absolute;
  left: -30px;
  right: -30px;
  bottom: -30px;
  height: calc(20% + 30px);
  z-index: 0;
  pointer-events: none;
}

.fdg_sheet {
  position: relative;
  z-index: 1;
  border-radius: 16px 16px 0 0;
  background-color: #ffffff;
  max-height: calc(var(--zeus-animation-height, 640px) - 64px);
  overflow-y: auto;
  overflow-x: hidden;
}

.fdg_close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(16, 16, 16, 0.05);
  color: #101010;
  cursor: pointer;
  z-index: 2;
}

.fdg_close:hover {
  background-color: rgba(16, 16, 16, 0.09);
}

.fdg_close:focus-visible {
  outline: 2px solid #fd551d;
  outline-offset: 3px;
}

.fdg_sheet_inner {
  padding: clamp(28px, 4vw, 48px);
}

.fdg_sheet_grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: clamp(24px, 3vw, 48px);
  align-items: start;
}

.fdg_title_mask {
  /* y-only clip: negative tracking overhangs the box and an all-axis clip chops glyph edges */
  overflow-x: visible;
  overflow-y: clip;
  padding-bottom: 0.16em;
  margin-bottom: -0.16em;
}

.fdg_sheet_title {
  margin: 0;
  font-size: clamp(30px, 3.6vw, 44px);
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #101010;
}

.fdg_sheet_text {
  margin: 16px 0 0;
  max-width: 440px;
  font-size: 15px;
  font-weight: 380;
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: rgba(16, 16, 16, 0.75);
}

.fdg_actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.fdg_btn {
  padding: 12px 20px;
  border-radius: 6px;
  font-family: var(--fdg-sans);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  cursor: pointer;
}

.fdg_btn_primary {
  border: 1px solid #101010;
  background-color: #101010;
  color: #fffaf2;
}

.fdg_btn:focus-visible {
  outline: 2px solid #fd551d;
  outline-offset: 3px;
}

.fdg_list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}

.fdg_list_item {
  position: relative;
  padding: 12px 0 12px 22px;
  border-bottom: 1px solid rgba(16, 16, 16, 0.1);
  font-size: 14px;
  font-weight: 420;
  letter-spacing: -0.01em;
  line-height: 1.4;
  color: rgba(16, 16, 16, 0.85);
}

.fdg_list_item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 18px;
  width: 7px;
  height: 7px;
  background-color: #101010;
}

/* explicit class, not :last-child - structural pseudo-classes are banned */
.fdg_list_item_last {
  border-bottom: none;
}

.fdg_media_row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: clamp(24px, 3vw, 40px);
}

.fdg_media_cell {
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
}

.fdg_sheet_media {
  margin-top: clamp(24px, 3vw, 40px);
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
}

.fdg_sheet_img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.fdg_stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(20px, 3vw, 40px);
  margin-top: clamp(32px, 4vw, 56px);
  padding-top: clamp(24px, 3vw, 40px);
  border-top: 1px solid rgba(16, 16, 16, 0.1);
}

.fdg_stat_num {
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #101010;
}

.fdg_stat_label {
  margin-top: 8px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: rgba(16, 16, 16, 0.55);
}

.fdg_outro {
  margin: clamp(32px, 4vw, 56px) auto 12px;
  max-width: 520px;
  text-align: center;
  font-size: 15px;
  font-weight: 380;
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: rgba(16, 16, 16, 0.75);
}

@media (max-width: 767px) {
  .fdg_stage {
    --margin: 20px;
    padding: 48px 16px;
  }

  .fdg_tile {
    flex-direction: column-reverse;
    min-height: 0;
  }

  .fdg_tile_media {
    height: 200px;
    margin: 64px 16px 0;
  }

  .fdg_modal {
    padding: 24px 10px 0;
  }

  .fdg_panel_gradient {
    left: -10px;
    right: -10px;
    top: -10px;
    border-radius: 18px 18px 0 0;
  }

  .fdg_sheet {
    max-height: calc(var(--zeus-animation-height, 640px) - 40px);
  }

  .fdg_sheet_grid {
    grid-template-columns: 1fr;
  }

  .fdg_sheet_media {
    height: 220px;
  }

  .fdg_media_row {
    grid-template-columns: 1fr;
  }

  .fdg_media_cell {
    height: 220px;
  }

  .fdg_stats {
    grid-template-columns: 1fr;
  }
}
`;function ke(w){return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:xe}),t.jsx(me,{...w})]})}export{ke as F};
