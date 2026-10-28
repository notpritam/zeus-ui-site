import{j as c}from"./index-71TEZrX3.js";import{r as u}from"./recipe-27bqSAJH.js";import{g as s}from"./index-xgxdCp6f.js";import{u as Se}from"./index-13213eFH.js";import{S as L}from"./ScrollTrigger-Bxhi_YIO.js";import{S as B}from"./SplitText-CMYmZbnP.js";import{C as ye}from"./CustomEase-C73R1l_9.js";typeof window<"u"&&(s.registerPlugin(Se,L.ScrollTrigger,B.SplitText,ye.CustomEase),ye.CustomEase.create("zeusMotion","M0,0 C0.3,0.9 0.1,1 1,1"));const Ce=[{src:"/assets/zeus/product_tennis-racket_02.jpg",alt:"Tennis racket detail",aspect:"portrait_lg"},{src:"/assets/zeus/product_tennis-racket_05.jpg",alt:"Tennis racket detail",aspect:"portrait_md"},{src:"/assets/zeus/product_football-boot_01.jpg",alt:"Football boot",aspect:"portrait_sm"},{src:"/assets/zeus/product_half-zip_01.jpg",alt:"Half-zip top",aspect:"portrait_lg",hideMobile:!0},{src:"/assets/zeus/product_shoe_01.jpg",alt:"Running shoe",aspect:"portrait_md"},{src:"/assets/zeus/product_ball_02.jpg",alt:"Ball detail",aspect:"portrait_sm",hideMobile:!0},{src:"/assets/zeus/product_tennis-net_01.jpg",alt:"Tennis net",aspect:"portrait_lg",hideMobile:!0},{src:"/assets/zeus/product_football-boot_06.jpg",alt:"Football boot, side view",aspect:"landscape_lg"},{src:"/assets/zeus/product_shoe_06.jpg",alt:"Sneaker, side view",aspect:"landscape_sm",hideMobile:!0},{src:"/assets/zeus/texture_tennis-macro_01.jpg",alt:"Tennis ball macro texture",aspect:"square_lg"},{src:"/assets/zeus/scatter_ball-rackets_01.jpg",alt:"Ball and rackets",aspect:"square_sm",hideMobile:!0},{src:"/assets/zeus/texture_fabric-macro_01.jpg",alt:"Fabric macro texture",aspect:"square_sm"}],J=400,be=-200,Z=-80,Ie=.42,qe=.35,Ae=80,Ye=.06,He=60,ke=1.2,De=.8;function $(n){return n*n*(3-2*n)}function G(n){return n<0?0:n>1?1:n}function Ne({className:n="",images:Q=Ce,headline:K="Everything else is noise.",support:C="Focus is what remains when the season strips away everything you do not need.",duration:ee=10,depth:h=2e3,speed:te=1,scrollBoost:I=3.5,pan:M=40,holeBuffer:q=120}){const A=u.useRef(null),ie=u.useRef(null),re=u.useRef(null),se=u.useRef(null),ae=u.useRef(null),Y=u.useRef([]);Y.current=[];const[ne,Ee]=u.useState(!1);u.useEffect(()=>{(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(()=>Ee(!0))},[]);const Te=u.useCallback(i=>{i&&!Y.current.includes(i)&&Y.current.push(i)},[]);return Se(()=>{const i=A.current,d=ie.current,P=re.current,oe=se.current,ce=ae.current,m=Array.from(d?.querySelectorAll("[data-anm-ifi-card]")||[]);if(!i||!d||!m.length)return;const Fe=window.matchMedia("(prefers-reduced-motion: reduce)"),Me=window.matchMedia("(pointer: coarse)").matches;let x=Fe.matches,g=i.clientWidth,_=i.clientHeight,y=1,le=window.scrollY||window.pageYOffset||0,j=!1;const v=[],w=[];let b=0,k=0;const de=parseFloat(getComputedStyle(i).perspective)||1200,H=[],D=[];function pe(){if(b=0,k=0,!P)return;const e=P.getBoundingClientRect();!e.width||!e.height||(b=Math.min(e.width/2+q,g*Ie),k=Math.min(e.height/2+q,_*qe))}function fe(){m.forEach((e,t)=>{H[t]=e.offsetWidth/2,D[t]=e.offsetHeight/2})}function Pe(e,t){let r,a,p=0;do r=Math.random()-.5,a=Math.random()-.5,p+=1;while(Math.abs(r)*g<b+e&&Math.abs(a)*_<k+t&&p<12);return{xFrac:r,yFrac:a}}function ue(e,t,r){const a=Pe(H[r]||0,D[r]||0);e.xFrac=a.xFrac,e.yFrac=a.yFrac,e.progress=t||0}function je(e,t,r,a){if(!b&&!k)return 1;const p=de/(de-t),o=v[e],f=(o.xFrac*g+r)*p,F=(o.yFrac*_+a)*p,V=Math.abs(f)-(b+(H[e]||0)*p),Le=Math.abs(F)-(k+(D[e]||0)*p);return $(G(Math.max(V,Le)/Ae))}function Re(e){if(e<=-h)return 0;if(e<be){const t=(e+h)/(be+h);return $(G(t))}if(e<=Z)return 1;if(e<J){const t=(e-Z)/(J-Z);return 1-$(G(t))}return 0}function ze(){v.length=0,w.length=0,m.forEach((e,t)=>{const r={xFrac:0,yFrac:0,progress:t/m.length};v.push(r),ue(r,t/m.length,t),w.push({x:s.quickSetter(e,"x","px"),y:s.quickSetter(e,"y","px"),z:s.quickSetter(e,"z","px"),opacity:s.quickSetter(e,"opacity")})})}function me(){if(!j)return;const e=s.ticker.deltaRatio(60)/60,t=te*y/ee;y+=(1-y)*Ye;const r=J- -h,a=S&&Number(s.getProperty(d,"x"))||0,p=E&&Number(s.getProperty(d,"y"))||0;for(let o=0;o<v.length;o++){const f=v[o];f.progress+=t*e,f.progress>=1&&ue(f,f.progress-1,o);const F=-h+f.progress*r,V=Re(F)*je(o,F,a,p);w[o].x(f.xFrac*g),w[o].y(f.yFrac*_),w[o].z(F),w[o].opacity(V)}}function N(){j||(j=!0,s.ticker.add(me))}function O(){j=!1,s.ticker.remove(me)}let S,E;function he(e){const t=i.getBoundingClientRect(),r=(e.clientX-t.left)/t.width*2-1,a=(e.clientY-t.top)/t.height*2-1;S(r*M),E(a*M*De)}function ge(){S(0),E(0)}!Me&&!x&&M>0&&(S=s.quickTo(d,"x",{duration:ke,ease:"power3.out"}),E=s.quickTo(d,"y",{duration:ke,ease:"power3.out"}),i.addEventListener("pointermove",he),i.addEventListener("pointerleave",ge));function _e(){const e=window.scrollY||window.pageYOffset||0,t=Math.abs(e-le);if(le=e,I>0){const r=1+Math.min(t/He,1)*(I-1);y=Math.max(y,r)}}window.addEventListener("scroll",_e,{passive:!0});let X;function ve(){clearTimeout(X),X=setTimeout(()=>{g=i.clientWidth,_=i.clientHeight,pe(),fe(),L.ScrollTrigger.refresh()},150)}window.addEventListener("resize",ve);let W=!0,R=null;"IntersectionObserver"in window&&(R=new IntersectionObserver(e=>{e.forEach(t=>{W=t.isIntersecting,W&&!document.hidden&&!x?N():O()})},{threshold:0}),R.observe(i));function we(){document.hidden?O():W&&!x&&N()}document.addEventListener("visibilitychange",we);let z=null,T=null,l=null,U=null,xe=0;if(ne&&oe){let e=function(){const a=i.getBoundingClientRect();return a.top<i.clientHeight&&a.bottom>0};z=B.SplitText.create(oe,{type:"lines",mask:"lines",linesClass:"ifi_headline_line"}),ce&&(T=B.SplitText.create(ce,{type:"lines",mask:"lines",linesClass:"ifi_support_line"}));const t=z.lines,r=T?T.lines:[];s.set(t,{yPercent:110,y:0}),r.length&&s.set(r,{yPercent:110,y:0}),l=s.timeline({paused:!0,defaults:{ease:"zeusMotion",force3D:!0}}),l.fromTo(t,{yPercent:110,y:0},{yPercent:0,y:0,duration:1.1,stagger:.08}),r.length&&l.fromTo(r,{yPercent:110,y:0},{yPercent:0,y:0,duration:.9,stagger:.05},"-=0.6"),xe=requestAnimationFrame(()=>{e()?x?l.progress(1):l.restart():U=L.ScrollTrigger.create({trigger:i,start:"top 80%",once:!0,onEnter:()=>l.restart()}),L.ScrollTrigger.refresh()})}return s.set(m,{xPercent:-50,yPercent:-50,force3D:!0,willChange:"transform, opacity"}),s.set(d,{force3D:!0}),P&&s.set(P,{force3D:!0}),pe(),fe(),ze(),x?(m.forEach((e,t)=>{const r=v[t];s.set(e,{x:r.xFrac*g,y:r.yFrac*_,z:-200,opacity:.9})}),l&&l.progress(1)):N(),()=>{O(),cancelAnimationFrame(xe),clearTimeout(X),S?.tween?.kill(),E?.tween?.kill(),window.removeEventListener("scroll",_e),window.removeEventListener("resize",ve),i.removeEventListener("pointermove",he),i.removeEventListener("pointerleave",ge),document.removeEventListener("visibilitychange",we),R&&R.disconnect(),l&&l.kill(),U&&U.kill(),z&&z.revert(),T&&T.revert()}},{scope:A,revertOnUpdate:!0,dependencies:[ne,Q,K,C,ee,h,te,I,M,q]}),c.jsxs("section",{ref:A,className:`ifi_section${n?" "+n:""}`,"data-anm-image-fly-in":!0,children:[c.jsx("div",{ref:ie,className:"ifi_stage","data-anm-ifi-stage":!0,children:Q.map((i,d)=>c.jsx("div",{ref:Te,className:`ifi_card ifi_card_${i.aspect}${i.hideMobile?" ifi_card_hide_mobile":""}`,"data-anm-ifi-card":!0,children:c.jsx("img",{className:"ifi_card_img",src:i.src,alt:i.alt||""})},i.src+d))}),c.jsxs("div",{ref:re,className:"ifi_content","data-anm-ifi-content":!0,children:[c.jsx("h2",{ref:se,className:"ifi_headline","data-anm-ifi-headline":!0,children:K}),C?c.jsx("p",{ref:ae,className:"ifi_support","data-anm-ifi-support":!0,children:C}):null]})]})}const Oe=`/* Image Fly-In
   Dark full-viewport 3D depth field. Imagery flies in from deep inside the
   page toward the viewer around a central content hole, with cursor-bend
   parallax on the whole 3D stage. No Webflow - CSS variables and @font-face
   allowed. */



/* ---- Tokens ---- */
.ifi_section {
  --ifi-bg:      #0d0908;
  --ifi-ink:     #ffffff;
  --ifi-muted:   rgba(255, 255, 255, 0.55);
  --ifi-radius:  10px;
  --ifi-sans:    var(--font-inter, Inter), -apple-system, BlinkMacSystemFont, sans-serif;
  --ifi-perspective: 1200px;
}

/* ---- Root ---- */
.ifi_section {
  position: relative;
  width: 100%;
  min-height: var(--zeus-animation-height, 640px);
  box-sizing: border-box;
  background: var(--ifi-bg);
  color: var(--ifi-ink);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: var(--ifi-perspective);
  font-family: var(--ifi-sans);
  -webkit-font-smoothing: antialiased;
}

/* The 3D stage: preserves 3D for all card children, bent toward the cursor by
   JS (rotationX/rotationY via quickTo). Fills the section. */
.ifi_stage {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  will-change: transform;
}

/* ---- Manifesto headline block ----
   Sits outside the rotating stage (own layer) so it stays readable; carries
   only a small counter-tilt set directly by JS. */
.ifi_content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
  transform-style: preserve-3d;
  will-change: transform;
  pointer-events: none;
}

.ifi_headline {
  font-family: var(--ifi-sans);
  font-weight: 400;
  font-size: clamp(32px, 4.2vw, 58px);
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--ifi-ink);
  margin: 0;
  overflow-x: visible;
  overflow-y: visible;
}

/* SplitText mask: "lines" wraps each line in its own clip box; the padding
   grows the line box so the mask clips below descenders at tight leading. */
.ifi_headline_line {
  padding-bottom: 0.18em;
}

.ifi_support {
  font-family: var(--ifi-sans);
  font-weight: 380;
  font-size: 15px;
  line-height: 1.6;
  color: var(--ifi-muted);
  margin: 8px auto 0;
  max-width: 380px;
}

.ifi_support_line {
  padding-bottom: 0.18em;
}

/* ---- Image cards ----
   Positioned at the stage centre; JS drives x/y/z/opacity per-card via
   quickSetters. transform-origin centre so depth scaling reads naturally
   through the perspective. Native aspect ratio per card - set inline via a
   per-card modifier class matched to its own image's w/h so nothing crops. */
.ifi_card {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: var(--ifi-radius);
  overflow: hidden;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  will-change: transform, opacity;
  opacity: 0;
  backface-visibility: hidden;
}

.ifi_card_img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Card size registers, matched to each image's native aspect so cover never
   mismatch-crops. Widths scale between mobile and desktop via clamp. */
.ifi_card_portrait_sm {
  width: clamp(90px, 8vw, 140px);
  aspect-ratio: 3072 / 3840;
}

.ifi_card_portrait_md {
  width: clamp(130px, 11vw, 190px);
  aspect-ratio: 2888 / 3840;
}

.ifi_card_portrait_lg {
  width: clamp(170px, 14vw, 260px);
  aspect-ratio: 3072 / 3840;
}

.ifi_card_landscape_sm {
  width: clamp(140px, 12vw, 210px);
  aspect-ratio: 3840 / 2568;
}

.ifi_card_landscape_lg {
  width: clamp(190px, 16vw, 260px);
  aspect-ratio: 3840 / 2568;
}

.ifi_card_square_sm {
  width: clamp(100px, 9vw, 150px);
  aspect-ratio: 1 / 1;
}

.ifi_card_square_lg {
  width: clamp(150px, 13vw, 220px);
  aspect-ratio: 1 / 1;
}

/* ---- Responsive: deliberate mobile field, not a squashed desktop ----
   Fewer cards, smaller scale range, no cursor parallax (handled in JS via
   pointer:coarse guard), headline already scales via clamp. */
@media (max-width: 767px), (pointer: coarse) {
  .ifi_card_hide_mobile {
    display: none;
  }

  .ifi_card_portrait_sm,
  .ifi_card_square_sm {
    width: clamp(70px, 20vw, 100px);
  }

  .ifi_card_portrait_md {
    width: clamp(90px, 24vw, 120px);
  }

  .ifi_card_portrait_lg,
  .ifi_card_landscape_lg,
  .ifi_card_square_lg {
    width: clamp(110px, 30vw, 160px);
  }

  .ifi_card_landscape_sm {
    width: clamp(100px, 26vw, 140px);
  }

  .ifi_content {
    padding: 0 20px;
  }

  .ifi_support {
    max-width: 280px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ifi_card,
  .ifi_stage,
  .ifi_content {
    will-change: auto;
  }
}
`;function Ge(n){return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:Oe}),c.jsx(Ne,{...n})]})}export{Ge as I};
