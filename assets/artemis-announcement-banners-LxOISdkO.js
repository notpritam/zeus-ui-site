import{j as e}from"./index-BzVEzr_h.js";import{r}from"./recipe-XmTC6iRi.js";import{A as M}from"./artemis-scope-B57b514-.js";import{u as w,A as b,m as o}from"./Specimen-Dwv1_deW.js";import{A as v,a as g,d as z,e as y,b as C}from"./ease-C4QO8bHK.js";import{u as q}from"./use-dark-kS-2G3lf.js";import{G as B}from"./grain-gradient-Bt-O5BN3.js";import{u as L}from"./use-in-view-wtA4iNJg.js";import{a as A}from"./index-DP0EJGUa.js";import"./home-dashboard-CvAIhi0d.js";import"./index-BrK7HEVb.js";import"./shader-mount-BPXIB0oU.js";import"./index-D9KOfL3g.js";import"./Modal-CaK_RuY2.js";import"./contributions-card-hda37rCc.js";import"./chart-cell-pOqUKV9F.js";import"./tooltip-Z3_CANVh.js";import"./chart-bar-track-C-GcagGx.js";import"./stat-cards-ByluDPdq.js";import"./data-table-BbeSlnVo.js";import"./table-pw6L5OvJ.js";import"./Checkbox-BD932hty.js";import"./useToggle-BOXU8FyZ.js";import"./useSlot-CDX3ll0i.js";import"./TreeDropTargetDelegate-BJRqp2u-.js";import"./useUpdateEffect-CUhRim2H.js";import"./avatar-CHqAj6NM.js";import"./status-dot-Dp2g7fUd.js";import"./checkbox-NKuZwYPt.js";import"./dropdown-vd_ogYVf.js";import"./pagination-DN2cuOXq.js";import"./recent-hires-card-vr0I5ubF.js";import"./template-shell-CxljgLl5.js";import"./close-button-B0yUHWd5.js";import"./NumberFormatter-H2sZ7Z8O.js";import"./switch-D27IKOax.js";import"./shared-BcJ_7OYz.js";import"./date-picker-C5Fm8q1l.js";import"./file-upload-bPRIj8KZ.js";import"./badge-DF3neig7.js";import"./kbd-DbHQ1_iU.js";import"./breadcrumb-D8lpI3C_.js";const E=`
@property --beam-angle-c5-gradient-marquee {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-c5-gradient-marquee {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="c5-gradient-marquee"] {
  position: relative;
  border-radius: 0px;
  overflow: hidden;
}

[data-beam="c5-gradient-marquee"][data-active] {
  animation:
    artemis-f522ac0-beam-spin-c5-gradient-marquee 3.8s linear infinite,
    artemis-f522ac0-beam-fade-in-c5-gradient-marquee 0.6s ease forwards;
}

[data-beam="c5-gradient-marquee"][data-fading] {
  animation:
    artemis-f522ac0-beam-spin-c5-gradient-marquee 3.8s linear infinite,
    artemis-f522ac0-beam-fade-out-c5-gradient-marquee 0.5s ease forwards;
}

[data-beam="c5-gradient-marquee"][data-active]::after,
[data-beam="c5-gradient-marquee"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0px;
  padding: 1px;
  clip-path: inset(0 round 0px);
  background: conic-gradient(
        from var(--beam-angle-c5-gradient-marquee),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      ),radial-gradient(ellipse 70px 40px at 33% -7.4%, rgb(255, 50, 100), transparent),
    radial-gradient(ellipse 60px 35px at 12% -5%, rgb(40, 140, 255), transparent),
    radial-gradient(ellipse 40px 70px at 2.1% 68.3%, rgb(50, 200, 80), transparent),
    radial-gradient(ellipse 20px 35px at 2.1% 68.3%, rgb(30, 185, 170), transparent),
    radial-gradient(ellipse 180px 32px at 74.4% 100%, rgb(100, 70, 255), transparent),
    radial-gradient(ellipse 85px 26px at 55% 100%, rgb(40, 140, 255), transparent),
    radial-gradient(ellipse 74px 32px at 93.9% 0%, rgb(255, 120, 40), transparent),
    radial-gradient(ellipse 26px 42px at 100% 27.1%, rgb(240, 50, 180), transparent),
    radial-gradient(ellipse 52px 48px at 100% 27.1%, rgb(180, 40, 240), transparent);
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-c5-gradient-marquee),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-c5-gradient-marquee),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-c5-gradient-marquee) * 0.26 * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  animation: artemis-f522ac0-beam-hue-shift-c5-gradient-marquee 12s ease-in-out infinite;
}

[data-beam="c5-gradient-marquee"][data-active]::before,
[data-beam="c5-gradient-marquee"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0px;
  background: radial-gradient(ellipse 63px 36px at 33% -7.4%, rgba(255, 50, 100, 0.45), transparent),
    radial-gradient(ellipse 54px 32px at 12% -5%, rgba(40, 140, 255, 0.45), transparent),
    radial-gradient(ellipse 36px 63px at 2.1% 68.3%, rgba(50, 200, 80, 0.45), transparent),
    radial-gradient(ellipse 18px 32px at 2.1% 68.3%, rgba(30, 185, 170, 0.45), transparent),
    radial-gradient(ellipse 162px 29px at 74.4% 100%, rgba(100, 70, 255, 0.45), transparent),
    radial-gradient(ellipse 77px 23px at 55% 100%, rgba(40, 140, 255, 0.45), transparent),
    radial-gradient(ellipse 67px 29px at 93.9% 0%, rgba(255, 120, 40, 0.45), transparent),
    radial-gradient(ellipse 23px 38px at 100% 27.1%, rgba(240, 50, 180, 0.45), transparent),
    radial-gradient(ellipse 47px 43px at 100% 27.1%, rgba(180, 40, 240, 0.45), transparent);
  box-shadow: inset 0 0 9px 1px rgba(255, 255, 255, 0.27);
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-c5-gradient-marquee),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-c5-gradient-marquee),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-c5-gradient-marquee) * 0.42 * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round 0px);
  animation: artemis-f522ac0-beam-hue-shift-c5-gradient-marquee 12s ease-in-out infinite;
}

[data-beam="c5-gradient-marquee"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: 0px;
  clip-path: inset(0 round 0px);
  background: conic-gradient(
        from var(--beam-angle-c5-gradient-marquee),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: 1px;
  filter: blur(8px) brightness(1.30) saturate(1.00);
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="c5-gradient-marquee"][data-active] [data-beam-bloom],
[data-beam="c5-gradient-marquee"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-c5-gradient-marquee) * 0.24 * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes artemis-f522ac0-beam-spin-c5-gradient-marquee {
  to { --beam-angle-c5-gradient-marquee: 360deg; }
}

@keyframes artemis-f522ac0-beam-fade-in-c5-gradient-marquee {
  to { --beam-opacity-c5-gradient-marquee: 1; }
}

@keyframes artemis-f522ac0-beam-fade-out-c5-gradient-marquee {
  from { --beam-opacity-c5-gradient-marquee: 1; }
  to { --beam-opacity-c5-gradient-marquee: 0; }
}

@keyframes artemis-f522ac0-beam-hue-shift-c5-gradient-marquee {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - 30deg)) brightness(1.30) saturate(1.00); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + 30deg)) brightness(1.30) saturate(1.00); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - 30deg)) brightness(1.30) saturate(1.00); }
}

[data-beam="c5-gradient-marquee"][data-paused],
[data-beam="c5-gradient-marquee"][data-paused]::after,
[data-beam="c5-gradient-marquee"][data-paused]::before,
[data-beam="c5-gradient-marquee"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}
`,I=`
@property --beam-angle-c5-gradient-marquee {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-c5-gradient-marquee {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="c5-gradient-marquee"] {
  position: relative;
  border-radius: 0px;
  overflow: hidden;
}

[data-beam="c5-gradient-marquee"][data-active] {
  animation:
    artemis-f522ac0-beam-spin-c5-gradient-marquee 3.8s linear infinite,
    artemis-f522ac0-beam-fade-in-c5-gradient-marquee 0.6s ease forwards;
}

[data-beam="c5-gradient-marquee"][data-fading] {
  animation:
    artemis-f522ac0-beam-spin-c5-gradient-marquee 3.8s linear infinite,
    artemis-f522ac0-beam-fade-out-c5-gradient-marquee 0.5s ease forwards;
}

[data-beam="c5-gradient-marquee"][data-active]::after,
[data-beam="c5-gradient-marquee"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0px;
  padding: 1px;
  clip-path: inset(0 round 0px);
  background: conic-gradient(
        from var(--beam-angle-c5-gradient-marquee),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      ),radial-gradient(ellipse 70px 40px at 33% -7.4%, rgb(255, 50, 100), transparent),
    radial-gradient(ellipse 60px 35px at 12% -5%, rgb(40, 140, 255), transparent),
    radial-gradient(ellipse 40px 70px at 2.1% 68.3%, rgb(50, 200, 80), transparent),
    radial-gradient(ellipse 20px 35px at 2.1% 68.3%, rgb(30, 185, 170), transparent),
    radial-gradient(ellipse 180px 32px at 74.4% 100%, rgb(100, 70, 255), transparent),
    radial-gradient(ellipse 85px 26px at 55% 100%, rgb(40, 140, 255), transparent),
    radial-gradient(ellipse 74px 32px at 93.9% 0%, rgb(255, 120, 40), transparent),
    radial-gradient(ellipse 26px 42px at 100% 27.1%, rgb(240, 50, 180), transparent),
    radial-gradient(ellipse 52px 48px at 100% 27.1%, rgb(180, 40, 240), transparent);
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-c5-gradient-marquee),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-c5-gradient-marquee),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-c5-gradient-marquee) * 0.12 * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  animation: artemis-f522ac0-beam-hue-shift-c5-gradient-marquee 12s ease-in-out infinite;
}

[data-beam="c5-gradient-marquee"][data-active]::before,
[data-beam="c5-gradient-marquee"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0px;
  background: radial-gradient(ellipse 63px 36px at 33% -7.4%, rgba(255, 50, 100, 0.45), transparent),
    radial-gradient(ellipse 54px 32px at 12% -5%, rgba(40, 140, 255, 0.45), transparent),
    radial-gradient(ellipse 36px 63px at 2.1% 68.3%, rgba(50, 200, 80, 0.45), transparent),
    radial-gradient(ellipse 18px 32px at 2.1% 68.3%, rgba(30, 185, 170, 0.45), transparent),
    radial-gradient(ellipse 162px 29px at 74.4% 100%, rgba(100, 70, 255, 0.45), transparent),
    radial-gradient(ellipse 77px 23px at 55% 100%, rgba(40, 140, 255, 0.45), transparent),
    radial-gradient(ellipse 67px 29px at 93.9% 0%, rgba(255, 120, 40, 0.45), transparent),
    radial-gradient(ellipse 23px 38px at 100% 27.1%, rgba(240, 50, 180, 0.45), transparent),
    radial-gradient(ellipse 47px 43px at 100% 27.1%, rgba(180, 40, 240, 0.45), transparent);
  box-shadow: inset 0 0 9px 1px rgba(0, 0, 0, 0.14);
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-c5-gradient-marquee),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-c5-gradient-marquee),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-c5-gradient-marquee) * 0.26 * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round 0px);
  animation: artemis-f522ac0-beam-hue-shift-c5-gradient-marquee 12s ease-in-out infinite;
}

[data-beam="c5-gradient-marquee"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: 0px;
  clip-path: inset(0 round 0px);
  background: conic-gradient(
        from var(--beam-angle-c5-gradient-marquee),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: 1px;
  filter: blur(8px) brightness(1.30) saturate(1.00);
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="c5-gradient-marquee"][data-active] [data-beam-bloom],
[data-beam="c5-gradient-marquee"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-c5-gradient-marquee) * 0.34 * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes artemis-f522ac0-beam-spin-c5-gradient-marquee {
  to { --beam-angle-c5-gradient-marquee: 360deg; }
}

@keyframes artemis-f522ac0-beam-fade-in-c5-gradient-marquee {
  to { --beam-opacity-c5-gradient-marquee: 1; }
}

@keyframes artemis-f522ac0-beam-fade-out-c5-gradient-marquee {
  from { --beam-opacity-c5-gradient-marquee: 1; }
  to { --beam-opacity-c5-gradient-marquee: 0; }
}

@keyframes artemis-f522ac0-beam-hue-shift-c5-gradient-marquee {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - 30deg)) brightness(1.30) saturate(1.00); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + 30deg)) brightness(1.30) saturate(1.00); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - 30deg)) brightness(1.30) saturate(1.00); }
}

[data-beam="c5-gradient-marquee"][data-paused],
[data-beam="c5-gradient-marquee"][data-paused]::after,
[data-beam="c5-gradient-marquee"][data-paused]::before,
[data-beam="c5-gradient-marquee"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}
`;function S({children:t}){const n=q(),a=w(),p=r.useRef(null),[m,l]=r.useState(!1),[h,i]=r.useState(!1);return r.useLayoutEffect(()=>{i(!!(a&&p.current?.closest("[data-variant-index], [role=dialog]")))},[a]),r.useEffect(()=>{const c=p.current;if(!c)return;const f=new IntersectionObserver(([u])=>l(!u.isIntersecting),{rootMargin:"256px",threshold:0});return f.observe(c),()=>f.disconnect()},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:n?E:I}),e.jsxs("div",{ref:p,"data-beam":"c5-gradient-marquee","data-active":!a||n&&!h?"":void 0,"data-paused":!a&&m?"":void 0,className:"art:w-full",style:{"--beam-strength":.68},children:[t,e.jsx("div",{"data-beam-bloom":"true"})]})]})}function W(){const[t,n]=r.useState(!0),a=w();return e.jsx(e.Fragment,{children:e.jsx(b,{initial:!1,children:t?e.jsx(o.aside,{"aria-label":"Announcement",className:"art:relative art:isolate art:w-full art:overflow-hidden",initial:{height:"auto",opacity:1},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:a?0:.4,ease:v},children:e.jsx(S,{children:e.jsxs("div",{className:"art:relative art:flex art:min-h-14 art:items-center art:gap-3 art:bg-background art:px-3 art:@min-[640px]/artemis:px-4",children:[e.jsxs("div",{className:"art:group/marquee art:relative art:flex art:overflow-hidden art:flex-row art:[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] art:min-w-0 art:flex-1",style:{"--marquee-gap":"1.5rem",gap:"1.5rem"},children:[e.jsx("style",{children:`
        @keyframes artemis-0b25384-artemis-marquee-x {
          to { transform: translateX(calc(-100% - var(--marquee-gap))); }
        }
        @keyframes artemis-0b25384-artemis-marquee-y {
          to { transform: translateY(calc(-100% - var(--marquee-gap))); }
        }
      `}),e.jsxs("div",{"aria-hidden":"false",style:{animationDuration:"24s",animationDirection:"normal",gap:"1.5rem"},className:"art:flex art:shrink-0 art:items-center art:will-change-transform art:motion-reduce:[animation-play-state:paused] art:flex-row art:[animation:artemis-marquee-x_30s_linear_infinite]",children:[e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"false",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Meet the August collection",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"false",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["New blocks for brighter launches",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"false",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Every release is ready to explore",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Meet the August collection",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["New blocks for brighter launches",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Every release is ready to explore",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Meet the August collection",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["New blocks for brighter launches",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Every release is ready to explore",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})})]}),e.jsxs("div",{"aria-hidden":"true",style:{animationDuration:"24s",animationDirection:"normal",gap:"1.5rem"},className:"art:flex art:shrink-0 art:items-center art:will-change-transform art:motion-reduce:[animation-play-state:paused] art:flex-row art:[animation:artemis-marquee-x_30s_linear_infinite]",children:[e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"false",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Meet the August collection",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"false",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["New blocks for brighter launches",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"false",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Every release is ready to explore",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Meet the August collection",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["New blocks for brighter launches",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Every release is ready to explore",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Meet the August collection",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["New blocks for brighter launches",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})}),e.jsx("div",{className:"art:shrink-0",children:e.jsxs("span",{"aria-hidden":"true",className:"art:flex art:items-center art:gap-2.5 art:whitespace-nowrap art:font-medium art:text-xs art:text-foreground art:tracking-[-0.01em] art:@min-[640px]/artemis:text-sm",children:["Every release is ready to explore",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4 art:text-foreground/55","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})})]})]}),e.jsxs(o.a,{whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,className:"art:inline-flex art:items-center art:justify-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:border art:text-foreground art:hover:border-border art:gap-1.5 art:text-xs art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:shrink-0 art:border-border/60 art:bg-secondary art:px-3 art:h-9 art:rounded-full",href:"#",tabIndex:0,children:["View the collection",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-3.5","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),e.jsx(o.button,{onClick:()=>n(!1),whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,type:"button",className:"art:inline-flex art:items-center art:justify-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:text-muted-foreground art:hover:bg-primary/5 art:hover:text-foreground art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:size-9 art:shrink-0 art:h-9 art:rounded-full","aria-label":"Dismiss announcement",tabIndex:0,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-x art:size-4","aria-hidden":"true",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]})})]})})}):null})})}const R=["#f8e2c9","#efb089","#d88772","#b8d5ce"];function T({reduced:t,active:n}){return e.jsx(B,{className:"art:h-full art:w-full",colorBack:"#efd6bc",colors:R,softness:.84,intensity:.5,noise:.25,shape:"corners",speed:t||!n?0:.12})}function _(){const[t,n]=r.useState(!0),a=w(),p=q(),m=!1,[l,h]=r.useState(!1),i=r.useRef(null),c=L(i,{margin:"120px"}),[f,u]=r.useState(!0);r.useEffect(()=>{const d=()=>{u(!document.hidden),document.hidden&&h(!0)};return d(),document.addEventListener("visibilitychange",d),()=>document.removeEventListener("visibilitychange",d)},[]),r.useEffect(()=>{if(!a||!t||!i.current)return;const d=i.current.getBoundingClientRect();(d.bottom<-120||d.top>innerHeight+120)&&h(!0);const x=new IntersectionObserver(k=>{k.some(j=>!j.isIntersecting)&&h(!0)},{rootMargin:"120px"});return x.observe(i.current),()=>x.disconnect()},[a,t]),r.useEffect(()=>{!a||!l||queueMicrotask(()=>{i.current?.querySelectorAll(".art\\:h-28").forEach((d,x)=>{d.style.transform=`translateX(${x===0?-70:70}px) translateY(10px) rotate(${x===0?-8:8}deg)`})})},[a,l,p,m]);const s=c&&f&&!a;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"art:w-full",children:e.jsx(b,{children:t?e.jsxs(o.aside,{ref:i,"aria-label":"Featured announcement",className:"art:relative art:mx-auto art:w-full art:max-w-lg art:overflow-hidden art:rounded-3xl art:border art:border-border/70 art:bg-background",animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.97},transition:a?{duration:0}:z,children:[e.jsxs("div",{className:"art:relative art:h-64 art:overflow-hidden art:border-border/60 art:border-b art:@min-[640px]/artemis:h-72",children:[e.jsxs("div",{"aria-hidden":"true",className:"art:pointer-events-none art:absolute art:inset-0",children:[e.jsx(T,{reduced:a,active:s}),e.jsx("div",{className:"art:absolute art:inset-0 art:bg-background/10 art:dark:bg-background/58"})]}),e.jsx("span",{className:"art:absolute art:top-5 art:left-5 art:z-10 art:inline-flex art:rounded-full art:border art:border-border/55 art:bg-background/58 art:px-3 art:py-1.5 art:font-medium art:text-foreground art:text-xs art:backdrop-blur-xl",style:{opacity:"1",filter:"blur(0px)",transform:"none"},children:"The new collection"}),e.jsxs("div",{"aria-hidden":"true",className:"art:pointer-events-none art:absolute art:inset-x-0 art:top-16 art:bottom-3",children:[e.jsx("div",{className:"art:absolute art:top-1/2 art:left-1/2 art:-translate-x-1/2 art:-translate-y-1/2",children:e.jsxs(o.div,{className:"art:flex art:h-28 art:w-36 art:flex-col art:justify-end art:gap-2 art:rounded-3xl art:border art:border-border/55 art:bg-background/46 art:p-4 art:backdrop-blur-xl",initial:{opacity:1,x:-70,y:10,rotate:a?0:-8},animate:{opacity:1,x:-70,y:s?[10,5,10]:10,...a&&!l?{rotate:-8}:{rotate:s?[-8,-6.24,-8]:-8}},transition:s?{duration:5.6,ease:y,repeat:1/0,delay:0}:{duration:0},children:[e.jsx("span",{className:"art:h-2 art:w-3/5 art:rounded-full art:bg-foreground/22"}),e.jsx("span",{className:"art:h-2 art:w-full art:rounded-full art:bg-foreground/12"}),e.jsx("span",{className:"art:h-2 art:w-4/5 art:rounded-full art:bg-foreground/12"})]},void 0)}),e.jsx("div",{className:"art:absolute art:top-1/2 art:left-1/2 art:-translate-x-1/2 art:-translate-y-1/2",children:e.jsxs(o.div,{className:"art:flex art:h-28 art:w-36 art:flex-col art:justify-end art:gap-2 art:rounded-3xl art:border art:border-border/55 art:bg-background/46 art:p-4 art:backdrop-blur-xl",initial:{opacity:1,x:70,y:10,rotate:a?0:8},animate:{opacity:1,x:70,y:s?[10,5,10]:10,...a&&!l?{rotate:8}:{rotate:s?[8,6.24,8]:8}},transition:s?{duration:5.6,ease:y,repeat:1/0,delay:.08}:{duration:0},children:[e.jsx("span",{className:"art:h-2 art:w-3/5 art:rounded-full art:bg-foreground/22"}),e.jsx("span",{className:"art:h-2 art:w-full art:rounded-full art:bg-foreground/12"}),e.jsx("span",{className:"art:h-2 art:w-4/5 art:rounded-full art:bg-foreground/12"})]},void 0)}),e.jsx("div",{className:"art:absolute art:top-1/2 art:left-1/2 art:-translate-x-1/2 art:-translate-y-1/2",children:e.jsx(o.div,{className:"art:grid art:size-24 art:place-items-center art:border art:border-border/60 art:bg-background/72 art:text-foreground art:backdrop-blur-xl art:rounded-full",initial:{opacity:1,scale:1,rotate:0},animate:{opacity:1,scale:s?[1,1.035,1,1.035,1]:1,rotate:s?[0,2,0,-2,0]:0},transition:s?{duration:6,ease:y,repeat:1/0}:{duration:0},children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.55",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-sparkles art:size-8","aria-hidden":"true",children:[e.jsx("path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}),e.jsx("path",{d:"M20 2v4"}),e.jsx("path",{d:"M22 4h-4"}),e.jsx("circle",{cx:"4",cy:"20",r:"2"})]})})})]}),e.jsx(o.button,{onClick:()=>n(!1),whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,type:"button",className:"art:inline-flex art:items-center art:justify-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:text-muted-foreground art:hover:bg-primary/5 art:hover:text-foreground art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:absolute art:top-4 art:right-4 art:z-10 art:size-9 art:border art:border-border/55 art:bg-background/58 art:backdrop-blur-xl art:h-9 art:rounded-full","aria-label":"Dismiss announcement",tabIndex:0,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-x art:size-4","aria-hidden":"true",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]})})]}),e.jsxs("div",{className:"art:p-6 art:@min-[640px]/artemis:p-8",children:[e.jsx("h2",{className:"art:text-balance art:leading-[1.02] art:tracking-[-0.045em] art:text-4xl art:font-medium",children:e.jsxs("span",{className:"art:inline-flex art:items-baseline art:max-w-full",children:[e.jsxs("span",{className:"art:whitespace-nowrap",children:["Made to"," "]}),e.jsxs("span",{className:"art:relative art:inline-grid",children:[e.jsx("span",{"aria-hidden":"true",className:"art:invisible art:col-start-1 art:row-start-1 art:whitespace-nowrap",children:"connect."}),e.jsx("span",{"aria-hidden":"true",className:"art:invisible art:col-start-1 art:row-start-1 art:whitespace-nowrap",children:"create."}),e.jsx("span",{"aria-hidden":"true",className:"art:invisible art:col-start-1 art:row-start-1 art:whitespace-nowrap",children:"launch."}),e.jsx("span",{"aria-hidden":"true",className:"art:absolute art:start-0 art:top-0 art:whitespace-nowrap art:bg-clip-text art:text-transparent art:[background-image:var(--chromatic-gradient)] art:[contain:paint]",style:{"--chromatic-sweep":"114%","--chromatic-gradient":"linear-gradient(90deg, var(--artemis-foreground) 0%, var(--artemis-foreground) calc(var(--chromatic-sweep) - 14%), #60a5fa calc(var(--chromatic-sweep) - 14%), #818cf8 calc(var(--chromatic-sweep) - 7%), #c084fc calc(var(--chromatic-sweep) + 0%), #fb7185 calc(var(--chromatic-sweep) + 7%), #fbbf24 calc(var(--chromatic-sweep) + 14%), transparent calc(var(--chromatic-sweep) + 14%), transparent 100%)",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",opacity:"1",filter:"blur(0px)",transform:"translateY(0px)"},children:"connect."}),e.jsx("span",{className:"art:sr-only",children:"connect."})]})]})}),e.jsx("p",{className:"art:mt-4 art:max-w-lg art:text-pretty art:text-muted-foreground art:text-sm art:leading-6",style:{opacity:"1",filter:"blur(0px)",transform:"none"},children:"Meet a considered collection shaped for teams who want the work to feel clearer, calmer, and more distinctly their own."}),e.jsxs("div",{className:"art:mt-7 art:flex art:flex-col art:gap-2.5 art:@min-[640px]/artemis:flex-row",style:{opacity:"1",transform:"none"},children:[e.jsxs(o.a,{whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,className:"art:inline-flex art:items-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:bg-primary art:text-primary-foreground art:hover:bg-primary/90 art:gap-2 art:px-5 art:text-sm art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:justify-center art:@min-[640px]/artemis:flex-1 art:h-9 art:rounded-full",href:"#",tabIndex:0,children:["Explore the release",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),e.jsxs(o.a,{whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,className:"art:inline-flex art:items-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:border art:border-border art:bg-transparent art:text-foreground art:hover:bg-primary/5 art:gap-2 art:px-5 art:text-sm art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:justify-center art:@min-[640px]/artemis:flex-1 art:h-9 art:rounded-full",href:"#",tabIndex:0,children:["Read the story",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-up-right art:size-4","aria-hidden":"true",children:[e.jsx("path",{d:"M7 7h10v10"}),e.jsx("path",{d:"M7 17 17 7"})]})]})]})]})]}):null})})})}const N=[{badge:"New release",message:"The summer collection is ready to explore",action:"See what is new"},{badge:"Early access",message:"Join the first group shaping our next chapter",action:"Request an invite"},{badge:"Live session",message:"A practical conversation about calmer product work",action:"Save your place"}];function V(){const t=w(),n=r.useRef(null),a=r.useRef(null),p=r.useRef(!1),m=L(n,{margin:"100px"}),[l,h]=r.useState(!0),[i,c]=r.useState(!0),[f,u]=r.useState(0);r.useEffect(()=>{const d=()=>c(!document.hidden);return d(),document.addEventListener("visibilitychange",d),()=>document.removeEventListener("visibilitychange",d)},[]),r.useEffect(()=>{if(t||!l||!i||!m)return;const d=window.setInterval(()=>u(x=>(x+1)%N.length),5200);return()=>window.clearInterval(d)},[t,l,i,m]),r.useEffect(()=>{if(t||!l||!i||!m)return;if(!p.current){p.current=!0;return}const d=a.current;if(!d)return;let x=!0;const k=A("translate3d(-140%, 0px, 0px)","translate3d(280%, 0px, 0px)",{duration:6,ease:"linear",repeat:1/0,repeatDelay:1.5,onUpdate:j=>{x&&(d.style.transform=j)}});return()=>{x=!1,k.stop()}},[t,l,i,m]);const s=N[f];return e.jsx(e.Fragment,{children:e.jsx("div",{ref:n,className:"art:w-full art:bg-background",children:(!t||l)&&e.jsx(b,{initial:!1,children:l&&e.jsxs(o.aside,{initial:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:t?0:.45,ease:v},"aria-label":"Announcements",className:"art:relative art:overflow-hidden art:bg-foreground art:text-background",children:[e.jsx("span",{ref:a,"aria-hidden":"true",className:"art:pointer-events-none art:absolute art:inset-y-0 art:left-0 art:w-1/3 art:bg-background/8 art:blur-2xl"}),e.jsxs("div",{className:"art:relative art:mx-auto art:flex art:min-h-16 art:w-full art:max-w-7xl art:items-center art:gap-3 art:px-4 art:py-3 art:pr-14 art:@min-[640px]/artemis:px-6 art:@min-[640px]/artemis:pr-16 art:@min-[1024px]/artemis:px-8",children:[e.jsx("div",{"aria-live":"polite",className:"art:flex art:min-w-0 art:flex-1 art:items-center art:justify-center art:gap-3",children:e.jsx(b,{initial:!1,mode:"wait",children:e.jsxs(o.div,{initial:{opacity:t?1:0,filter:t?"blur(0px)":"blur(6px)",y:t?0:8},animate:{opacity:1,filter:"blur(0px)",y:0},exit:{opacity:0,filter:"blur(6px)",y:-8},transition:{duration:t?0:.38,ease:v},className:"art:flex art:min-w-0 art:flex-col art:items-center art:gap-2 art:text-center art:@min-[640px]/artemis:flex-row art:@min-[640px]/artemis:text-left",children:[e.jsx("span",{className:"art:shrink-0 art:rounded-full art:bg-background/12 art:px-2.5 art:py-1 art:font-medium art:text-xs",children:s.badge}),e.jsx("p",{className:"art:text-pretty art:font-medium art:text-sm art:leading-5",children:s.message}),e.jsxs(o.a,{whileHover:t?void 0:{scale:1.01},whileTap:t?void 0:{scale:.99},transition:g,className:"art:inline-flex art:items-center art:justify-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:border art:gap-1.5 art:text-xs art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:shrink-0 art:border-background/20 art:bg-background/10 art:px-2.5 art:text-background art:hover:bg-background/15 art:h-9 art:rounded-full",href:"#",tabIndex:0,children:[s.action,e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-3.5","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]},f)})}),e.jsx(o.button,{onClick:()=>h(!1),whileHover:t?void 0:{scale:1.01},whileTap:t?void 0:{scale:.99},transition:g,type:"button",className:"art:inline-flex art:items-center art:justify-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:absolute art:right-3 art:size-9 art:text-background/65 art:hover:bg-background/10 art:hover:text-background art:@min-[640px]/artemis:right-5 art:h-9 art:rounded-full","aria-label":"Dismiss announcements",tabIndex:0,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-x art:size-4","aria-hidden":"true",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]})})]})]})})})})}const H=[{title:"A new collection for the way your team works now",label:"Just launched",description:"Explore a thoughtful set of releases shaped around clearer decisions and calmer collaboration.",action:"Explore the collection",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-sparkles art:size-4.5","aria-hidden":"true",children:[e.jsx("path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}),e.jsx("path",{d:"M20 2v4"}),e.jsx("path",{d:"M22 4h-4"}),e.jsx("circle",{cx:"4",cy:"20",r:"2"})]})},{title:"An evening for people building with care",label:"Community gathering",description:"Join a small live conversation about the choices that make digital products feel considered.",action:"Reserve a seat",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-calendar-days art:size-4.5","aria-hidden":"true",children:[e.jsx("path",{d:"M8 2v3"}),e.jsx("path",{d:"M16 2v3"}),e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18"}),e.jsx("path",{d:"M8 13h.01"}),e.jsx("path",{d:"M12 13h.01"}),e.jsx("path",{d:"M16 13h.01"}),e.jsx("path",{d:"M8 17h.01"}),e.jsx("path",{d:"M12 17h.01"}),e.jsx("path",{d:"M16 17h.01"})]})},{title:"Something special for our earliest supporters",label:"A thank-you gift",description:"A limited collection is waiting for the people who helped make the first chapter possible.",action:"Open your gift",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-gift art:size-4.5","aria-hidden":"true",children:[e.jsx("path",{d:"M12 7v14"}),e.jsx("path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}),e.jsx("path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"}),e.jsx("rect",{x:"3",y:"7",width:"18",height:"4",rx:"1"})]})}];function D({index:t,rank:n,reduced:a,onShow:p,onPrevious:m,onNext:l,onDismiss:h}){const i=H[t],c=n===0;return e.jsxs(o.article,{className:"art:absolute art:inset-x-0 art:top-0 art:min-h-[17.5rem] art:origin-top art:overflow-hidden art:rounded-3xl art:border art:border-border/70 art:bg-background art:p-5 art:@min-[640px]/artemis:min-h-[12rem] art:@min-[640px]/artemis:p-6"+(c?"":" art:has-[:focus-visible]:ring-2 art:has-[:focus-visible]:ring-ring art:has-[:focus-visible]:ring-inset"),initial:!1,style:{zIndex:30-n},animate:a?{opacity:c?1:.55}:{x:n*5,y:n*13,scale:1-n*.04,opacity:1-n*.2},transition:a?{duration:0}:C,children:[!c&&e.jsx(o.button,{whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,type:"button",className:"art:items-center art:justify-center art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:gap-2 art:text-sm art:focus-visible:outline-none art:focus-visible:ring-ring art:focus-visible:ring-offset-background art:inline-block art:h-auto art:p-0 art:font-normal art:text-inherit art:hover:bg-transparent art:hover:text-inherit art:absolute art:inset-0 art:cursor-pointer art:outline-none art:focus-visible:ring-0 art:focus-visible:ring-offset-0 art:rounded-full","aria-label":`Show announcement: ${i.title}`,onClick:p,tabIndex:0}),e.jsxs("div",{"aria-hidden":!c,className:"art:relative art:flex art:min-h-[13.5rem] art:flex-col art:@min-[640px]/artemis:min-h-[9rem]","aria-live":c?"polite":void 0,children:[e.jsxs("div",{className:"art:flex art:items-center art:gap-3 art:pr-12",children:[e.jsx("span",{className:"art:grid art:size-10 art:shrink-0 art:place-items-center art:rounded-full art:bg-foreground/[0.07] art:text-foreground/65 art:dark:bg-foreground/10",children:i.icon}),e.jsx("p",{className:"art:font-medium art:text-muted-foreground art:text-xs",children:i.label}),e.jsxs("p",{className:"art:ml-auto art:font-medium art:text-muted-foreground art:text-xs art:tabular-nums",children:[t+1," of ","3"]})]}),e.jsxs("div",{className:"art:mt-5 art:min-w-0 art:flex-1 art:@min-[640px]/artemis:grid art:@min-[640px]/artemis:grid-cols-[1fr_auto] art:@min-[640px]/artemis:items-end art:@min-[640px]/artemis:gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"art:max-w-xl art:text-balance art:leading-[1.05] art:tracking-[-0.04em] art:text-xl art:font-medium",children:i.title}),e.jsx("p",{className:"art:mt-3 art:max-w-2xl art:text-pretty art:text-muted-foreground art:text-sm art:leading-6",children:i.description})]}),c&&e.jsxs("div",{className:"art:mt-5 art:flex art:shrink-0 art:items-center art:gap-2 art:@min-[640px]/artemis:mt-0",children:[e.jsxs(o.a,{whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,className:"art:inline-flex art:items-center art:justify-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:border art:border-border art:bg-card art:text-foreground art:hover:border-border art:gap-2 art:px-5 art:text-sm art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:h-9 art:rounded-full",href:"#",tabIndex:0,children:[i.action,e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-up-right art:size-4","aria-hidden":"true",children:[e.jsx("path",{d:"M7 7h10v10"}),e.jsx("path",{d:"M7 17 17 7"})]})]}),e.jsxs("div",{className:"art:flex art:items-center art:gap-1",children:[e.jsx(o.button,{whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,type:"button",className:"art:inline-flex art:items-center art:justify-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:text-muted-foreground art:hover:bg-primary/5 art:hover:text-foreground art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:size-9 art:h-9 art:rounded-full",onClick:m,"aria-label":"Show previous announcement",tabIndex:0,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-left art:size-4","aria-hidden":"true",children:[e.jsx("path",{d:"m12 19-7-7 7-7"}),e.jsx("path",{d:"M19 12H5"})]})}),e.jsx(o.button,{whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,type:"button",className:"art:inline-flex art:items-center art:justify-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:text-muted-foreground art:hover:bg-primary/5 art:hover:text-foreground art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:size-9 art:h-9 art:rounded-full",onClick:l,"aria-label":"Show next announcement",tabIndex:0,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-arrow-right art:size-4","aria-hidden":"true",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})})]})]})]})]}),c&&e.jsx(o.button,{onClick:h,whileHover:a?void 0:{scale:1.01},whileTap:a?void 0:{scale:.99},transition:g,type:"button",className:"art:inline-flex art:items-center art:justify-center art:font-medium art:select-none art:transition-colors art:disabled:pointer-events-none art:disabled:opacity-50 art:text-muted-foreground art:hover:bg-primary/5 art:hover:text-foreground art:focus-visible:outline-none art:focus-visible:ring-2 art:focus-visible:ring-ring art:focus-visible:ring-offset-2 art:focus-visible:ring-offset-background art:absolute art:top-3 art:right-3 art:size-9 art:@min-[640px]/artemis:top-4 art:@min-[640px]/artemis:right-4 art:h-9 art:rounded-full","aria-label":"Dismiss announcements",tabIndex:0,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"art:lucide art:lucide-x art:size-4","aria-hidden":"true",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]})})]})}function P(){const t=!!w(),[n,a]=r.useState(!0),[p,m]=r.useState(0),[l,h]=r.useState(!0),i=r.useRef(null),[c,f]=r.useState(!1);return r.useLayoutEffect(()=>{t&&i.current?.closest("[data-variant-index]")&&f(!0)},[t]),r.useEffect(()=>{const u=i.current;if(!u)return;const s=new IntersectionObserver(([d])=>h(d.isIntersecting));return s.observe(u),()=>s.disconnect()},[]),r.useEffect(()=>{if(t||!n||!l)return;const u=window.setInterval(()=>m(s=>(s+1)%3),4600);return()=>window.clearInterval(u)},[t,n,l]),e.jsx("div",{ref:i,className:"art:w-full",children:(!t||n)&&e.jsx(b,{initial:!1,children:n&&e.jsx(o.aside,{"aria-label":"Announcements",className:"art:mx-auto art:w-full art:max-w-4xl art:overflow-hidden",initial:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:t?0:.45,ease:v},children:e.jsx("div",{className:"art:relative art:h-[20rem] art:@min-[640px]/artemis:h-[15rem]",children:[0,1,2].map(u=>e.jsx(D,{index:u,rank:(u-p+3)%3,reduced:t,onShow:()=>m(u),onPrevious:()=>m(s=>(s+2)%3),onNext:()=>m(s=>(s+1)%3),onDismiss:()=>a(!1)},`${c?"client":"initial"}-${u}`))})})})})}const O={"gradient-marquee":W,"shader-launch":_,"rotating-ribbon":V,"stacked-cards":P};function G({className:t,variant:n="gradient-marquee"}){const a=O[n];return e.jsx(M,{className:`art:[&>*]:mx-auto ${t??""}`,children:e.jsx(a,{})})}function Ie({variant:t}){return e.jsx(G,{variant:["gradient-marquee","shader-launch","rotating-ribbon","stacked-cards"].includes(t??"")?t:void 0})}export{Ie as default};
