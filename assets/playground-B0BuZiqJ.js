import{G as I}from"./playground-galleries-CySG2pL4.js";import{S as _}from"./playground-scroll-CDwZ5a6c.js";import{S as z}from"./playground-sections-DPouRW83.js";import{T as j}from"./playground-typography-YeypSfIN.js";import{C as F}from"./playground-control-examples-CYOuMrh5.js";import{T as G,A as B}from"./playground-core-examples-Ce9bZ4we.js";import{G as H}from"./playground-gallery-examples-CCOmDMm-.js";import{M as U}from"./playground-menu-examples-LLLxHgJl.js";import{P as O}from"./playground-pointer-examples-BUtVNxTQ.js";import{S as J}from"./playground-section-examples-CkObLj9m.js";import{n as Y}from"./playground-settings-BLEjM6Ov.js";import{d as Se}from"./playground-settings-BLEjM6Ov.js";const c=(e,o,t,r,n,l,a)=>({key:e,label:o,kind:"range",default:t,min:r,max:n,step:l,unit:a}),P=(e,o,t)=>({key:e,label:o,kind:"text",default:t}),k=(e,o,t)=>({key:e,label:o,kind:"color",default:t}),R=(e,o,t,r)=>({key:e,label:o,kind:"select",default:t,options:r}),T=(e,o,t)=>({key:e,label:o,kind:"toggle",default:t}),S=(e,o,t="#ff885e",r="#ff4200",n="#0a0a0a")=>[P("children","Label",e),c("duration","Duration",o,0,2,.05,"s"),k("background","Background",t),k("fill","Fill",r),k("color","Text color",n),k("hoverColor","Active text color",n),c("radius","Border radius",9999,0,9999,1,"px"),T("disabled","Disabled",!1)],W=[{slug:"background-fill-button",title:"Background Fill Button",component:"BackgroundFillButton",hint:"Hover or focus to watch the rounded fill rise from below.",controls:[...S("Contact Us",.8),c("startScale","Fill start scale",.5,.1,1,.05),c("hoverScale","Button hover scale",.95,.8,1,.01),R("exitDirection","Exit direction","bottom",["bottom","top"])]},{slug:"circle-fill-button",title:"Circle Fill Button",component:"CircleFillButton",hint:"Enter from different points. Each circle reaches the farthest corner in the same time.",controls:[...S("Explore Performance Collection",.8),c("delay","Entry delay",0,0,.5,.01,"s")]},{slug:"curve-fill-button",title:"Curve Fill Button",component:"CurveFillButton",hint:"Enter from each side to change the direction of the curved wave.",controls:[...S("Discover Our New Collection",.8),c("curvature","Curve depth",5,0,40,1,"%"),R("direction","Entry direction","auto",["auto","left","right","top","bottom"])]},{slug:"animated-icon-button",title:"Animated Icon Button",component:"AnimatedIconButton",hint:"Hover or focus. The icon cycles diagonally as its circle fills the capsule.",controls:[...S("Shop Now",.5),c("iconSize","Icon size",20,12,32,1,"px")]},{slug:"magnetic-button",title:"Magnetic Button",component:"MagneticButton",hint:"Move around the button to pull its surface and label. Leave to spring back.",controls:[...S("Shop Now",1.6,"#ff5722","#e64a19"),c("strength","Button pull",.16,0,.5,.01),c("textStrength","Label pull",.22,0,.5,.01),c("returnDuration","Return duration",1.6,0,2,.05,"s")]},{slug:"rainbow-button",title:"Rainbow Button",component:"RainbowButton",hint:"The rainbow flows around the dark face. Hover or focus to expand its glow.",controls:[...S("Get Started",.4,"#0a0a0a","#ff4200","#ffffff").filter(e=>e.key!=="fill"),c("cycleDuration","Color cycle",2,.2,6,.1,"s"),c("glow","Glow blur",12.8,0,30,.2,"px"),T("animateAtRest","Animate at rest",!0)]},{slug:"text-underline",title:"Text Underline",component:"TextUnderline",hint:"The line draws from the left, then leaves toward the right.",controls:[P("children","Label","Shop Performance Collection"),c("duration","Duration",.5,0,2,.05,"s"),k("color","Text color","#0a0a0a"),k("underlineColor","Underline color","#0a0a0a"),c("thickness","Line thickness",1,1,6,.5,"px"),c("offset","Line offset",4,0,16,1,"px"),T("disabled","Disabled",!1)]}],w=(e=.65)=>({key:"duration",label:"Duration",kind:"range",default:e,min:0,max:2,step:.05,unit:"s"}),L=(e,o,t)=>({key:e,label:o,kind:"color",default:t}),g=(e,o,t)=>({key:e,label:o,kind:"text",default:t}),f=(e,o,t,r,n,l=1)=>({key:e,label:o,kind:"range",default:t,min:r,max:n,step:l}),C=(e,o,t)=>({key:e,label:o,kind:"toggle",default:t}),$=()=>[w(),L("background","Surface","#111111"),L("color","Text","#eeece8")],q=[{slug:"gooey-filter-chips",title:"Gooey Filter Chips",component:"GooeyFilterChips",hint:"Select several chips, then remove them from the result tray.",controls:[...$(),f("goo","Liquid connection",18,8,30),f("gap","Chip gap",12,4,24),g("resultLabel","Result label","results")]},{slug:"morphing-island",title:"Morphing Island",component:"MorphingIsland",hint:"Open Sections, choose a summary, then scroll to its section.",demoAssets:!0,controls:[w(),g("label","Navigation label","Sections"),g("actionLabel","Jump label","Scroll to section")]},{slug:"multi-step-form",title:"Multi-Step Form",component:"MultiStepForm",hint:"Complete each step. The final submit reports a local completion state.",controls:[w(.5),g("nextLabel","Next label","Next"),g("submitLabel","Submit label","Send message"),g("successTitle","Success title","Message sent")]},{slug:"morphing-tabs",title:"Morphing Tabs",component:"MorphingTabs",hint:"Select tabs or use arrow keys to move the connected surface.",demoAssets:!0,controls:[...$(),f("gap","Tab gap",4,0,20),f("fillet","Corner fillet",22,0,36)]},{slug:"morphing-accordion",title:"Morphing Accordion",component:"MorphingAccordion",hint:"Open and close questions while the liquid answer panels separate.",controls:[...$(),f("goo","Liquid connection",18,8,30),C("multiple","Allow multiple answers",!1),C("showNumbers","Show numbers",!0)]},{slug:"morphing-select",title:"Morphing Select",component:"MorphingSelect",hint:"Open the select and choose an option, or use the keyboard.",controls:[...$(),f("gap","Panel gap",12,4,24),C("disabled","Disabled",!1),C("hideLabel","Hide label",!0)]},{slug:"detail-drawer",title:"Detail Drawer",component:"DetailDrawer",hint:"Open the hero to reveal details, then close or press Escape.",demoAssets:!0,controls:[w(1),g("title","Title","Tempo Runner II"),g("subtitle","Subtitle","Move faster. Feel stronger.")]},{slug:"animated-tooltip",title:"Animated Tooltip",component:"AnimatedTooltip",hint:"Hover, focus, or tap a control. Try pointer following and edge placement.",controls:[w(.25),g("content","Caption","Browse running shoes collection"),C("followPointer","Follow pointer",!1),f("delay","Show delay",.2,0,1,.05),f("hideDelay","Hide delay",.06,0,.5,.01),f("offset","Offset",12,4,32),{key:"placement",label:"Placement",kind:"select",default:"top",options:["top","bottom","left","right"]}]},{slug:"morphing-dialog",title:"Morphing Dialog",component:"MorphingDialog",hint:"Expand the card and follow its image and title into the dialog.",demoAssets:!0,controls:[w(),g("title","Product title","Carbon Tempo Trainer"),g("price","Price","$164"),g("badge","Badge","NEW")]}],m=(e,o,t,r,n,l)=>({key:e,label:o,default:t,kind:"range",min:r,max:n,step:l}),K=[{slug:"morphing-pill-menu",title:"Morphing Pill Menu",component:"MorphingPillMenu",demoAssets:!0,hint:"Open the pill, hover or focus its rolling links, then press Escape to close.",controls:[m("duration","Duration",.65,.1,1.5,.05),m("stagger","Link stagger",.018,0,.1,.002),{key:"background",label:"Panel color",kind:"color",default:"#292929"},{key:"color",label:"Text color",kind:"color",default:"#f4f2ec"}]},{slug:"gooey-menu",title:"Gooey Menu",component:"GooeyMenu",hint:"Open the action control and choose an action. Change the arrangement to compare the liquid connections.",controls:[{key:"arrangement",label:"Arrangement",kind:"select",options:["arc","radial","row","grid"],default:"arc"},m("radius","Radius",78,65,140,1),m("arcAngle","Arc angle",160,90,220,10),m("gridColumns","Grid columns",3,2,5,1),m("blur","Liquid blur",7,2,12,1),m("duration","Duration",.55,.1,1.5,.05),{key:"color",label:"Surface color",kind:"color",default:"#ff572b"}]},{slug:"mega-menu",title:"Mega Menu",component:"MegaMenu",demoAssets:!0,hint:"Move between navigation groups. On mobile, open the menu and expand a group.",controls:[m("duration","Resize duration",.45,.1,1.5,.05),m("stagger","Link stagger",.035,0,.12,.005),m("openDelay","Open delay",100,0,500,10),m("closeDelay","Close delay",180,0,800,10)]},{slug:"fullscreen-slide-menu",title:"Fullscreen Slide Menu",component:"FullscreenSlideMenu",demoAssets:!0,hint:"Open navigation to turn the page away. Hover or focus a link to change its image.",controls:[m("duration","Duration",.9,.15,2,.05),{key:"background",label:"Panel color",kind:"color",default:"#111111"},{key:"color",label:"Text color",kind:"color",default:"#f0f0ed"}]}],u=(e,o,t,r,n,l)=>({key:e,label:o,default:t,kind:"range",min:r,max:n,step:l}),V=[{slug:"image-trail",title:"Image Trail",component:"ImageTrail",demoAssets:!0,hint:"Move across the scene to leave image instances behind. Touch and reduced motion keep the content static.",controls:[u("threshold","Movement threshold",50,10,180,5),u("delay","Minimum interval",40,0,200,10),u("imageWidth","Image width",180,60,320,10),u("imageHeight","Image height",240,80,400,10),u("entranceDuration","Entrance duration",.35,.1,1,.05),u("exitDuration","Exit duration",.7,.1,2,.05),u("exitDelay","Hold duration",.55,0,2,.05),u("rotation","Rotation",10,0,40,1)]},{slug:"custom-cursor",title:"Custom Cursor",component:"CustomCursor",demoAssets:!0,hint:"Move across the cards to see the cursor change labels. Links remain usable by keyboard and touch.",controls:[u("size","Dot size",12,4,40,1),u("duration","Follow duration",.18,.01,.6,.01),{key:"color",label:"Cursor color",kind:"color",default:"#111111"},{key:"textColor",label:"Text color",kind:"color",default:"#ffffff"}]},{slug:"3d-card-flip",title:"3D Card Flip",component:"CardFlip3D",demoAssets:!0,hint:"Move around the card to change its perspective, glare and shadow.",controls:[u("maxTilt","Maximum tilt",20,0,45,1),u("perspective","Perspective",1e3,300,2e3,50),u("scale","Hover scale",1.03,1,1.15,.01),u("duration","Follow duration",.6,.1,1.5,.05),...["glare","shadow","inverse"].map(e=>({key:e,label:e[0].toUpperCase()+e.slice(1),kind:"toggle",default:e!=="inverse"}))]}],s=(e,o,t,r,n,l)=>({key:e,label:o,default:t,kind:"range",min:r,max:n,step:l}),x=(e,o,t)=>({key:e,label:o,default:t,kind:"color"}),D=(e="/assets/zeus/hero_profile_02.jpg")=>({key:"image",label:"Image URL",kind:"text",default:e}),X=[{slug:"mesh-gradient",title:"Mesh Gradient",component:"MeshGradient",hint:"Move across the color field to disturb its flow.",controls:[s("speed","Speed",1,0,4,.1),s("scale","Scale",1,.3,3,.1),s("intensity","Distortion",1,0,3,.1),s("mouseStrength","Pointer strength",1,0,3,.1)]},{slug:"dithering",title:"Dithering",component:"Dithering",hint:"Move over the image to reveal its original colors through the lens.",demoAssets:!0,controls:[D(),s("dotSize","Dot size",3,1,12,.5),s("lensRadius","Lens radius",130,20,300,5),x("darkColor","Dark color","#101010"),x("lightColor","Light color","#f2f1eb")]},{slug:"image-glitch",title:"Image Glitch",component:"ImageGlitch",hint:"Hover over the image to break the signal; move away to let it recover.",demoAssets:!0,controls:[D("/assets/zeus/action_cyclist-climb_02.jpg"),{key:"variant",label:"Glitch style",kind:"select",default:"analog",options:["analog","digital"]},s("intensity","Intensity",1,0,3,.1),s("speed","Speed",1,0,3,.1),s("scale","Distortion scale",3,.5,10,.5),s("duration","Recovery duration",.5,.1,2,.1)]},{slug:"gooey-hover-reveal",title:"Gooey Hover Reveal",component:"GooeyHoverReveal",hint:"Draw across the surface. Keyboard focus, touch and reduced motion show the content directly.",demoAssets:!0,controls:[D("/assets/zeus/hero_run_02.jpg"),x("coverColor","Cover color","#f0f0f0"),s("radius","Brush radius",80,20,180,5),s("duration","Trail duration",1.6,.2,4,.1),s("intensity","Liquid strength",1,.3,3,.1),{key:"revealed",label:"Reveal all",kind:"toggle",default:!1}]},{slug:"dither-cursor-trail",title:"Dither Cursor Trail",component:"DitherCursorTrail",hint:"Move across the surface to leave a trail of fading dots.",controls:[s("dotSize","Dot size",5,2,14,.5),s("radius","Trail radius",65,10,180,5),s("duration","Fade duration",2,.2,5,.1),s("intensity","Intensity",1,.2,4,.1),x("color","Dot color","#161616"),x("background","Background","#f2f1eb")]},{slug:"image-dissolve-scroll",title:"Image Dissolve Scroll",component:"ImageDissolveScroll",hint:"Scroll down through the pinned image to dissolve it, then scroll back to restore it.",demoAssets:!0,controls:[D("/assets/zeus/action_leap_01.jpg"),s("noiseScale","Noise scale",4,1,12,.5),x("edgeColor","Dissolve edge","#ff9a43"),s("edgeWidth","Edge width",1,.1,3,.1),x("background","Background","#101010")]}];function Z(e,o){const t=J[e.slug];if(!t)return;const r={...t,...o},n=Object.entries(r).map(([l,a])=>`      ${l}={${JSON.stringify(a,null,2).replaceAll(`
`,`
      `)}}`).join(`
`);return`"use client";

import { ${e.component} } from "@zeus/ui/application";

export default function Example() {
  return (
    <${e.component}
${n}
    />
  );
}
`}function Q(e,o){const t=U[e.slug];if(!t)return;const r=Object.entries({...t,...o}).map(([l,a])=>`      ${l}={${JSON.stringify(a,null,2).replaceAll(`
`,`
      `)}}`).join(`
`),n=e.slug==="fullscreen-slide-menu"?'<section style={{ minHeight: "100vh", padding: 48, background: "#333", color: "white" }}><h1>Move with intention.</h1></section>':"";return`"use client";
import { ${e.component} } from "@zeus/ui/application";

export default function Example() {
  return (
    <${e.component}
${r}
    ${n?`>
      ${n}
    </${e.component}>`:"/>"}
  );
}
`}const ee=[["/assets/zeus/hero_run_02.jpg","Runner in motion"],["/assets/zeus/action_cyclist-climb_02.jpg","Cyclist climbing a hill"],["/assets/zeus/action_leap_01.jpg","Athlete in midair"],["/assets/zeus/hero_profile_02.jpg","Athlete portrait"],["/assets/zeus/hero_profile_03.jpg","Training portrait"],["/assets/zeus/running-hero-female-1.avif","Runner on the track"]];function te(e,o){if(!_.some(b=>b.slug===e.slug))return;const t=e.slug,r=e.component,n=new Set(["speed","firstColor","middleColor","lastColor"]),l=Object.entries(o).filter(([b])=>!n.has(b)).map(([b,N])=>`${b}={${JSON.stringify(N)}}`);let a="",d="";const p='<img src="/assets/zeus/hero_run_02.jpg" alt="Runner in motion" style={imageStyle} />';if(e.demoAssets&&(a+=`// Install the component assets or replace these image URLs with your own.
const imageStyle = { width: "100%", height: "100%", objectFit: "cover", display: "block" } as const;
`),["multi-flip","random-rotate","animated-grid","element-reveal"].includes(t)){const b=t==="multi-flip"?4:t==="animated-grid"?6:3;a+=`const photos = ${JSON.stringify(ee.slice(0,b),null,2)};
const items = photos.map(([src, alt], index) => ({ id: String(index), content: <img src={src} alt={alt} style={imageStyle} /> }));
`,t==="animated-grid"?l.push("items={Array.from({length: 15}, (_, i) => ({...items[i % items.length], id: `grid-${i}`}))}"):t==="element-reveal"?(d='{items.map(item => <div key={item.id} style={{aspectRatio: .7, overflow: "hidden", borderRadius: 8}}>{item.content}</div>)}',l.push('style={{display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "3%", padding: "18% 7%"}}')):l.push("items={items}")}t==="scatter-cluster"&&(a+=`const picture = (name: string, alt: string) => <img src={"/assets/zeus/" + name} alt={alt} style={imageStyle} />;
const items = [
 {id: "runner", x:15, y:46, width:22, height:35, content:picture("hero_run_02.jpg", "Runner in motion")},
 {id: "races", x:38, y:17, width:19, height:22, content:<div style={{background:"#19191b",color:"#ecebe7",padding:"12%",height:"100%"}}>Race days<strong style={{display:"block",fontSize:48}}>128</strong><small>across four disciplines</small></div>},
 {id: "rackets", x:63, y:17, width:20, height:25, content:picture("scatter_ball-rackets_01.jpg", "Tennis rackets")},
 {id: "ball", x:86, y:50, width:17, height:27, content:picture("product_ball_05.jpg", "Match ball")},
 {id: "court", x:18, y:83, width:25, height:23, content:picture("product_tennis-net_01.jpg", "Tennis court net")},
 {id: "profile", x:51, y:85, width:25, height:20, content:picture("hero_profile_02.jpg", "Athlete profile")},
 {id: "season", x:81, y:83, width:21, height:18, content:<div style={{background:"#19191b",color:"#ecebe7",padding:"10%",height:"100%"}}><small>Season load</small><svg viewBox="0 0 180 65"><path d="M 3 59 L 31 48 L 59 50 L 82 29 L 110 34 L 142 12 L 175 4" stroke="currentColor" fill="none" strokeWidth="2"/></svg></div>},
];
`,l.push("items={items}"),d='<h2 style={{fontSize:"clamp(24px,4.9vw,66px)",fontWeight:400,letterSpacing:"-.065em",lineHeight:1.06,margin:0}}>One label.<br />Every discipline.</h2><p>Court, track, road and snow. Gear cut for the work, told the same way everywhere it competes.</p>'),["velocity-clip","mask-reveal","flip-zone"].includes(t)&&(d=p),t==="svg-draw-path"&&l.push('path="M 65 340 C 15 220 95 80 220 105 C 410 140 305 440 475 390 C 625 350 495 105 695 95 L 650 65 M 695 95 L 670 142"','stroke="#ff582c"'),t==="parallax"&&(a+=`const speed = ${JSON.stringify(o.speed??1)};
const layers = [
 {id:"far",speed:-.3*speed,content:<img src="/assets/zeus/action_cyclist-climb_02.jpg" alt="Cyclist climbing a hill" style={imageStyle}/>,style:{inset:"-12% 0",opacity:.28}},
 {id:"type",speed:.7*speed,content:<h2 style={{fontSize:"clamp(50px,12vw,160px)",fontWeight:700,letterSpacing:"-.08em",lineHeight:.9,textAlign:"center",margin:0}}>EVERY<br/>MILE.</h2>,style:{inset:"30% 5% auto"}},
 {id:"near",speed:1.6*speed,content:<img src="/assets/zeus/hero_run_02.jpg" alt="Foreground runner" style={imageStyle}/>,style:{inset:"20% 10% 10% 63%",borderRadius:8,overflow:"hidden"}},
];
`,l.push("layers={layers}")),t==="hide-header"&&(l.push('position="absolute"','style={{padding:"20px 6%",background:"#f0efeb",display:"flex",justifyContent:"space-between",gap:15}}'),d='<a href="#training">KINETIC.</a><nav aria-label="Navigation"><a href="#training">Training</a> <a href="#about">About</a></nav>'),t==="flip-zone"&&l.push("frames={[{x:35,y:12,width:30,height:68,rotation:-5,radius:10},{x:5,y:25,width:33,height:60,rotation:2,radius:18},{x:53,y:10,width:42,height:78,rotation:0,radius:4}]}",'background={<div style={{fontSize:"clamp(55px,12vw,165px)",fontWeight:700,color:"#d0d0ce",padding:"15% 6%"}}>EVERY MILE.<br/>BUILT FOR<br/>SPEED.</div>}'),t==="background-color"&&(l.push(`stops={${JSON.stringify([{at:0,background:o.firstColor??"#eeece6",color:"#202020"},{at:.5,background:o.middleColor??"#f35b35",color:"#251f1b"},{at:1,background:o.lastColor??"#232d25",color:"#eef0e3"}])}}`),d='<div style={{display:"grid",placeContent:"center",height:"100%",textAlign:"center"}}><h2 style={{fontSize:"clamp(50px,10vw,145px)",lineHeight:.95,letterSpacing:"-.075em"}}>Change<br/>your pace.</h2></div>'),t==="counter"&&l.push('style={{fontSize:"clamp(52px,13vw,180px)",fontWeight:500,letterSpacing:"-.06em"}}');const h=`<${r}
          scrollContainer={scrollContainer}
          ${l.join(`
          `)}${d?`
        >${d}</${r}>`:`
        />`}`;return`"use client";
import {useRef} from "react";
import {${r}} from "@zeus/ui/application";

${a}
export default function Example(){
 const scrollContainer=useRef<HTMLDivElement>(null);
 return <div ref={scrollContainer} tabIndex={0} role="region" aria-label="Scroll demonstration" style={{height:600,overflowY:"auto",overscrollBehavior:"contain",background:"#efefed",color:"#151515"}}>
  <div style={{height:"320%",position:"relative"}}>
   <div style={{position:"sticky",top:0,height:600,overflow:"hidden"${["progress","counter"].includes(t)?',display:"grid",placeItems:"center"':""}}}>
        ${h}
   </div>
  </div>
 </div>;
}
`}function oe(e,o){const t=F[e.slug];if(!t)return;const r={...t,...o},{children:n,...l}=r,a=Object.entries(l).map(([p,h])=>`      ${p}={${JSON.stringify(h,null,2).replaceAll(`
`,`
      `)}}`).join(`
`),d=e.slug==="animated-tooltip"?'<button type="button">Running</button>':n!=null?`{${JSON.stringify(n)}}`:"";return`"use client";

import { ${e.component} } from "@zeus/ui/application";

export default function Example() {
  return (
    <${e.component}
${a}
    ${d?`>
      ${d}
    </${e.component}>`:"/>"}
  );
}
`}function ne(e,o){const t=H[e.slug];if(!t)return;const r={...t,...o},n=Object.entries(r).map(([l,a])=>`      ${l}={${JSON.stringify(a,null,2).replaceAll(`
`,`
      `)}}`).join(`
`);return`"use client";

import { ${e.component} } from "@zeus/ui/application";

export default function Example() {
  return (
    <${e.component}
${n}
    />
  );
}
`}function ie(e,o){if(!["image-trail","custom-cursor","3d-card-flip"].includes(e.slug))return;const t=Object.entries(o).map(([l,a])=>`      ${l}={${JSON.stringify(a)}}`).join(`
`);let r="",n="";return e.slug==="image-trail"&&(n=`      images={${JSON.stringify(O)}}
`,r='<h1 style={{ textAlign: "center", padding: "120px 24px" }}>Follow your own direction.</h1>'),e.slug==="custom-cursor"&&(r=`<a href="/collection" data-cursor-label="Explore" style={{ display: "block", padding: 40 }}>
        <img src="${O[0]}" alt="Runner in motion" style={{ maxWidth: "100%", height: 320, objectFit: "cover" }} />
        Explore the collection
      </a>`),e.slug==="3d-card-flip"&&(n=`      image="${O[2]}"
      alt="Cyclist climbing a hill"
`),`"use client";
import { ${e.component} } from "@zeus/ui/application";

export default function Example() {
  return (
    <${e.component}
${n}${t}
    ${r?`>
      ${r}
    </${e.component}>`:"/>"}
  );
}
`}function ye(e,o){const t=Y(e,o),r=Z(e,t)??Q(e,t)??te(e,t)??oe(e,t)??ne(e,t)??ie(e,t);if(r)return r;const n=Object.entries(t).filter(([p])=>p!=="children").map(([p,h])=>`      ${p}={${JSON.stringify(h)}}`);let l=`import { ${e.component} } from "@zeus/ui/application";`,a="";if(e.demoAssets&&(a=`
// This example uses Zeus demo images. Install the component's assets
// or pass your own image URLs. Setup: https://myzeusui.com/components/${e.slug}/#installation
`),e.slug==="morphing-tooltip"){l+=`
import { RiAddLine, RiSearchLine, RiShareForwardLine } from "@remixicon/react";`;const p={add:"RiAddLine",search:"RiSearchLine",share:"RiShareForwardLine"};a=`
const items = [
${G.map(h=>`  { ...${JSON.stringify(h)}${p[h.id]?`, icon: <${p[h.id]} />`:""} },`).join(`
`)}
];
`,n.unshift("      items={items}")}if(e.slug==="animated-accordion"&&(a=`
const items = ${JSON.stringify(B,null,2)};
`,n.unshift("      items={items}")),e.slug==="text-reveal"&&n.push('      className="max-w-2xl text-4xl leading-tight tracking-tight sm:text-6xl"'),e.slug==="dual-scramble"&&n.push('      className="text-4xl font-medium tracking-tight sm:text-6xl"'),e.slug==="text-split-zoom"&&n.push('      image="/assets/zeus/action_cyclist-climb_02.jpg"','      alt="Cyclist climbing a hill"'),e.slug==="text-morph"){const p=n.filter(h=>!h.trimStart().startsWith("text="));return`"use client";
import { useState } from "react";
${l}

export default function Example() {
  const [text, setText] = useState(${JSON.stringify(t.text)});
  return <>
    <input aria-label="Morph text" value={text} onChange={event => setText(event.target.value)} />
    <TextMorph text={text}
${p.join(`
`)}
    />
  </>;
}
`}e.slug==="ascii-overlay"&&n.push('      image="/assets/zeus/hero_profile_02.jpg"','      alt="Athlete profile with a colored ASCII overlay"',"      scroll={false}",'      keyColor="auto"');const d=t.children!==void 0?`>
      {${JSON.stringify(t.children)}}
    </${e.component}>`:"/>";return`"use client";

${l}
${a}
export default function Example() {
  return (
    <${e.component}
${n.join(`
`)}
    ${d}
  );
}
`}const i=(e,o,t,r,n,l,a)=>({key:e,label:o,kind:"range",default:t,min:r,max:n,step:l,unit:a}),v=(e,o,t,r)=>({key:e,label:o,kind:"select",default:t,options:r}),A=(e,o,t)=>({key:e,label:o,kind:"toggle",default:t}),y=(e,o,t)=>({key:e,label:o,kind:"text",default:t}),M=(e,o,t)=>({key:e,label:o,kind:"color",default:t}),E=(e="expo.out")=>v("ease","Easing",e,["expo.out","expo.inOut","power3.out","sine.inOut"]),re=[...W,...z,...K,..._,...V,...I,...X,...q,...j,{slug:"morphing-tooltip",title:"Morphing Tooltip",component:"MorphingTooltip",interaction:"tooltip",hint:"Hover or focus the buttons. The same tooltip follows you.",controls:[i("duration","Duration",.45,.1,2,.05,"s"),i("travelDuration","Travel duration",.32,.1,1.5,.01,"s"),i("grace","Dismiss delay",120,0,800,20,"ms"),v("placement","Placement","top",["top","bottom"]),i("maxWidth","Maximum width",160,80,320,10,"px"),i("blur","Blur",6,0,12,1,"px"),i("goo","Goo strength",10,1,20,1),i("gap","Gap",12,4,36,2,"px")]},{slug:"text-reveal",title:"Text Reveal",component:"TextReveal",hint:"Watch the text arrive. Replay to compare your settings.",controls:[y("children","Text","Great things happen one word at a time."),v("type","Split by","words",["lines","words","chars"]),i("duration","Duration",.8,.1,2,.05,"s"),i("stagger","Stagger",.08,0,.3,.01,"s"),i("yPercent","Travel distance",110,0,180,5,"%"),E()]},{slug:"animated-accordion",title:"Animated Accordion",component:"AnimatedAccordion",interaction:"accordion",hint:"Open a question to see the panel and text move together.",controls:[i("duration","Duration",.8,.1,2,.05,"s"),E("expo.inOut"),A("allowMultiple","Allow multiple open",!1),A("enableStagger","Stagger text",!0),v("iconMode","Icon animation","both",["rotate","fade","both"]),i("iconRotation","Icon rotation",-180,-360,360,45,"°"),i("staggerDelay","Text delay",.15,0,.5,.05,"s")]},{slug:"dual-scramble",title:"Dual Scramble",component:"DualScramble",interaction:"scramble",hint:"Choose a trigger, then hover, click or replay the text.",controls:[y("text","Text","Built for speed."),v("trigger","Trigger","load",["load","hover","click"]),i("duration","Duration",.8,.1,2,.05,"s"),M("accentColor","Accent color","#ff5c35"),M("finalColor","Text color","#fffaf2")]},{slug:"multi-level-drawer-menu",demoAssets:!0,title:"Multi-Level Drawer Menu",component:"MultiLevelDrawerMenu",interaction:"drawer",hint:"Open the menu and explore its nested navigation.",controls:[i("duration","Duration",.9,.2,2,.05,"s"),i("stagger","Stagger",.06,0,.2,.01,"s"),M("panelBg","Panel color","#171717"),y("heroHeading","Heading","Move with purpose.")]},{slug:"image-fly-in",demoAssets:!0,title:"Image Fly-In",component:"ImageFlyIn",hint:"Move your pointer over the scene to shift the image field.",controls:[y("headline","Heading","Everything else is noise."),i("duration","Cycle duration",10,3,20,1,"s"),i("depth","Depth",2e3,500,3500,100),i("speed","Speed",1,.2,2,.1),i("pan","Pointer movement",40,0,100,5)]},{slug:"scale-slider",demoAssets:!0,title:"Scale Slider",component:"ScaleSlider",hint:"Drag the images or let the slider move on its own.",controls:[v("direction","Direction","rtl",["rtl","ltr"]),i("autoplay","Autoplay speed",.0016,0,.005,2e-4),i("minScale","Smallest image",.3,.1,.8,.05),i("radius","Corner radius",0,0,48,2,"px"),i("parallax","Parallax",0,0,1,.05),i("focusY","Focus position",.22,0,1,.02)]},{slug:"curtain-slider",demoAssets:!0,title:"Curtain Slider",component:"CurtainSlider",interaction:"curtain",hint:"Drag across the image or use the next and previous controls.",controls:[i("duration","Duration",1.1,.2,2.5,.05,"s"),i("columns","Curtain columns",12,2,24,1),i("stagger","Column stagger",.0125,0,.08,.0025,"s"),A("drag","Drag to navigate",!0),i("auto","Autoplay interval",0,0,8,1,"s")]},{slug:"feature-dialog",demoAssets:!0,title:"Feature Dialog",component:"FeatureDialog",interaction:"dialog",hint:"Open the feature card to explore the expanding detail sheet.",controls:[i("duration","Duration",.55,.15,1.5,.05,"s"),y("label","Label","Courtissue, 01"),y("title","Title","Game leather"),y("actionLabel","Action label","Explore the collection")]},{slug:"ascii-overlay",demoAssets:!0,title:"ASCII Overlay",component:"AsciiOverlay",hint:"Move over the portrait to explore its live character texture.",controls:[i("cellSize","Character size",8,4,20,1,"px"),i("opacity","Opacity",.9,0,1,.05),i("jitter","Jitter",.35,0,1,.05),i("reshuffleRate","Reshuffle rate",.6,0,2,.1),i("whitening","Whitening",.7,0,1,.05),y("glyphs","Characters","1,x,0,X,*,#,@")]},{slug:"animated-pricing",demoAssets:!0,title:"Animated Pricing",component:"AnimatedPricing",interaction:"pricing",hint:"Switch the billing period to watch the prices roll into place.",controls:[y("title","Title","Membership"),i("rollDuration","Price duration",.6,.1,2,.05,"s"),i("digitStagger","Digit stagger",.04,0,.15,.01,"s"),i("toggleDuration","Toggle duration",.4,.1,1.2,.05,"s"),v("defaultPeriod","Initial period","monthly",["monthly","yearly"]),A("showSavingsChip","Show savings",!0)]}],be=e=>re.find(o=>o.slug===e);export{B as ACCORDION_ITEMS,re as PLAYGROUNDS,G as TOOLTIP_ITEMS,Se as defaultsFor,Y as normalizeSettings,be as playgroundBySlug,ye as playgroundCode};
