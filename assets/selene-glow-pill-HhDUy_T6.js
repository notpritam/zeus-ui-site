import{j as g}from"./index-DxXZJYbM.js";import{r as b}from"./recipe-Begt-rGp.js";import"./artemis-scope-Cs5DFgNV.js";import"./Specimen-Bg2CkhJF.js";import"./home-dashboard-BaUy5wJk.js";import"./index-BB0vx-gr.js";import"./Modal-Cs-wKA3U.js";import"./contributions-card-DD3kbf9b.js";import"./chart-cell-BTW7nevu.js";import"./tooltip-r4MR4cP2.js";import"./chart-bar-track-D9bXXv94.js";import"./Bar-BUaFpKuX.js";import"./data-table-Cbv7Jwhg.js";import"./table-CE4G0eWr.js";import"./Checkbox-CDulugMU.js";import"./useToggle-C64zbPgF.js";import"./useSlot-NAvCFbxv.js";import"./TreeDropTargetDelegate-B39hsyz5.js";import"./useUpdateEffect-B19-nbz8.js";import"./useHasTabbableChild-CXmoMCRp.js";import"./avatar-CdNsQ5pm.js";import"./status-dot-BfJIcvAy.js";import"./checkbox-B6eGjyqq.js";import"./dropdown-B2Wyb6uI.js";import"./pagination-CQ5kWAwr.js";import"./stat-cards-xNbEU8zD.js";import"./recent-hires-card-O-_2q22E.js";import"./template-shell-PcZKF7S2.js";import"./react-Z9-7Ek2x.js";import"./close-button-CGmBRTkz.js";import"./NumberFormatter-H2sZ7Z8O.js";import"./switch-2ESfT0Fj.js";import"./shared-BbhVNhA7.js";import"./date-picker-BOEiWnH4.js";import"./file-upload-i6SVVPe9.js";import"./badge-Dnr5Py-b.js";import"./kbd-BMBtUgNn.js";import"./breadcrumb-D0CfNlxv.js";const q={aurora:{warm:"#8f5f50",core:"#ffffff",mid:"#5f7a6c",cool:"#4a5a96"},ember:{warm:"#b4532a",core:"#fff2e2",mid:"#9a4a3c",cool:"#6c3358"},ice:{warm:"#5a86a8",core:"#f3fbff",mid:"#4f8f96",cool:"#3c4f9c"}},Y={startDelay:600,typeSpeed:53,hold:744},ie=`
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,se=`
precision highp float;
uniform vec2 uRes;
uniform float uPad;
uniform float uTime;
uniform float uSurge;
uniform float uFront;
uniform float uGlow;
uniform float uButton;
uniform vec3 uWarm;
uniform vec3 uCore;
uniform vec3 uMid;
uniform vec3 uCool;
uniform sampler2D uText;
varying vec2 vUv;

float stadium(vec2 p, float aspect) {
  return length(vec2(max(abs(p.x) - 0.5 * (aspect - 1.0), 0.0), p.y)) - 0.5;
}

float rand(float n) { return fract(sin(n * 91.345) * 47453.13); }

/* Warm on the left, the mid tone softened by the core, cool on the right. */
vec3 tone(float x) {
  vec3 mid = mix(uMid, uCore, 0.3);
  vec3 c = mix(uWarm, mid, smoothstep(-1.2, 0.0, x));
  return mix(c, uCool, smoothstep(0.05, 1.25, x));
}

void main() {
  vec2 frag = vUv * uRes;
  float h = uRes.y - 2.0 * uPad;
  float aspect = (uRes.x - 2.0 * uPad) / h;
  float px = 1.0 / h;
  vec2 p = (frag - 0.5 * uRes) / h;
  float t = uTime;
  float btn = uButton;

  float d = stadium(p, aspect);
  float inside = 1.0 - smoothstep(-1.5 * px, 0.0, d);
  vec2 edge = vec2(max(abs(p.x) - 0.5 * (aspect - 1.0), 0.0) * sign(p.x), p.y);
  vec2 normal = edge / max(length(edge), 1e-4);

  /* Light is laid out for a 2.9:1 pill; wider shapes spread it sideways. */
  float x = p.x / max(aspect / 2.9, 0.55);
  float y = p.y + 0.5;

  /* The pool's surface rolls slowly, like liquid under the glass. */
  float swell = 0.02 * sin(x * 2.4 + t * 0.9) + 0.012 * sin(x * 4.1 - t * 1.3 + 2.0) + 0.007 * sin(x * 7.0 + t * 1.9);
  float yy = max(y - swell * (1.0 + 0.6 * uSurge), 0.0);

  vec3 light = vec3(0.0);
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    float a = rand(fi + 1.0), b = rand(fi + 11.0), c = rand(fi + 23.0);
    float home = -1.25 + fi * 0.417 + 0.1 * (a - 0.5);
    float lx = home + 0.12 * sin(t * (0.3 + 0.25 * a) + 6.2832 * b);
    float w = (0.24 + 0.14 * c) * (0.9 + 0.15 * sin(t * (0.45 + 0.3 * b) + fi));
    float lift = 0.75 + 0.45 * (0.5 + 0.5 * sin(t * (0.5 + 0.4 * c) + 6.2832 * a));
    float flare = pow(0.5 + 0.5 * sin(t * (0.6 + 0.35 * b) + fi * 2.1), 12.0);
    float tall = ((0.12 + 0.07 * a) * lift + 0.15 * flare) * mix(1.0, 1.5, btn);
    float dx = (x - lx) / (w * mix(1.0, 1.3, btn));
    vec3 col = tone(home + 0.4 * (b - 0.5)) * (0.8 + 0.4 * c);
    col = max(mix(vec3(dot(col, vec3(0.3333))), col, 1.0 + 0.5 * btn), 0.0);
    light += 0.32 * mix(1.0, 1.4, btn) * col * exp(-dx * dx) * exp(-pow(yy / tall, 1.5));
  }

  /* The sun: a bright core under the middle of the edge, breathing. */
  float sx = 0.03 * sin(t * 0.6) + 0.02 * sin(t * 1.1 + 2.0);
  float breath = 0.88 + 0.12 * sin(t * 1.05 + 1.4);
  float calm = (1.0 - 0.6 * uSurge) * breath;
  float lobe = (x - sx) / (0.32 + 0.03 * sin(t * 0.85));
  float halo = 0.95 * exp(-lobe * lobe);
  light += uCore * halo * calm * mix(1.35, 1.1, btn) * exp(-yy / (mix(0.1, 0.13, btn) * calm));
  light += uCore * halo * 0.08 * (1.0 - btn) * exp(-y / 0.8);

  /* Its horizon is crisp, and splits into a faint spectrum at the rim. */
  vec2 r = vec2(0.33 + 0.04 * breath, mix(0.075, 0.13, btn) * calm);
  float shift = mix(0.016, 0.032, btn);
  vec2 q = vec2(x - sx, y + 0.03);
  vec3 dome = vec3(
    smoothstep(1.0, 0.88, length((q - vec2(shift, 0.0)) / r)),
    smoothstep(1.0, 0.88, length(q / r)),
    smoothstep(1.0, 0.88, length((q + vec2(shift, 0.0)) / r)));
  light += uCore * dome;

  /* Surge: a wave of colour climbs from the core and washes the walls. */
  float reach = length(vec2(x / 2.2, y)) + 0.03 * sin(x * 3.0 - t * 2.4);
  float behind = uFront - reach;
  float band = exp(-pow(max(behind, 0.0) / 0.5, 2.0)) * smoothstep(-0.15, 0.05, behind);
  float wall = exp(d / 0.15);
  light += tone(x + 0.1 * sin(t * 1.2)) * (band * (0.6 + 0.4 * wall) + 0.1 * wall) * uSurge;

  light *= uGlow;

  /* Glass: a hairline rim, brightest along the top, catching the pool. */
  float line = exp(-pow(d / (1.2 * px + 0.0035), 2.0));
  float top = pow(max(normal.y, 0.0), 2.2);
  vec3 rim = vec3(mix(0.16 + 0.64 * top, 0.1 + 0.36 * top, btn)) + light * mix(0.35, 0.2, btn);
  float under = pow(max(-normal.y, 0.0), 1.5);
  rim += under * btn * (tone(x) * 0.9 + uCore * 0.5 * exp(-pow((x - sx) / 0.35, 2.0))) * uGlow;
  vec3 col = light + vec3(0.05 * top * exp(min(d, 0.0) / 0.022));

  /* Text sits behind the glass: pulled in at the edge, split by the surge. */
  vec2 tp = p / (1.0 + 0.04 * uSurge);
  tp += vec2(0.01 * sin(p.y * 9.0 + t * 7.0), 0.016 * sin(p.x * 4.5 - t * 6.0)) * uSurge;
  float lens = exp(min(d, 0.0) / 0.11);
  tp -= normal * lens * (0.012 + 0.05 * uSurge);
  float split = 0.007 * uSurge + 0.0012 * lens;
  vec2 o = vec2(split, 0.3 * split);
  vec4 tr = texture2D(uText, (tp + o) * h / uRes + 0.5);
  vec4 tg = texture2D(uText, tp * h / uRes + 0.5);
  vec4 tb = texture2D(uText, (tp - o) * h / uRes + 0.5);
  float ta = (tr.a + tg.a + tb.a) / 3.0;
  col = col * (1.0 - ta) + vec3(tr.r, tg.g, tb.b);

  col = clamp(col, 0.0, 1.0) * inside;
  col = clamp(col + clamp(rim, 0.0, 1.0) * line * 0.75, 0.0, 1.0);

  /* Buttons spill a soft bloom onto the page below them. */
  float border = min(min(frag.x, uRes.x - frag.x), min(frag.y, uRes.y - frag.y));
  vec3 bloom = (tone(x) * 0.55 + uCore * 0.6 * exp(-pow((x - sx) / 0.4, 2.0)))
    * exp(-max(d, 0.0) / 0.11) * smoothstep(0.15, -0.55, p.y) * smoothstep(0.0, 0.85 * max(uPad, 1.0), border)
    * (1.0 - inside) * btn * uGlow * (0.45 + 0.35 * uSurge);
  col = clamp(col + bloom, 0.0, 1.0);
  gl_FragColor = vec4(col, max(max(inside, line), max(bloom.r, max(bloom.g, bloom.b))));
}
`;function N(t){let i=t.trim().replace(/^#/,"");i.length===3&&(i=i.replace(/./g,f=>f+f));const o=parseInt(i.slice(0,6),16);return i.length<6||!Number.isFinite(o)?[1,1,1]:[(o>>16&255)/255,(o>>8&255)/255,(o&255)/255]}const Q=()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches===!0;function ee(t,i,o,f){const e=i.getContext("webgl",{premultipliedAlpha:!0,antialias:!1,alpha:!0});if(!e)return null;const x=(s,v)=>{const m=e.createShader(s);return m?(e.shaderSource(m,v),e.compileShader(m),e.getShaderParameter(m,e.COMPILE_STATUS)?m:(e.deleteShader(m),null)):null},p=x(e.VERTEX_SHADER,ie),c=x(e.FRAGMENT_SHADER,se),l=e.createProgram();if(!p||!c||!l||(e.attachShader(l,p),e.attachShader(l,c),e.linkProgram(l),!e.getProgramParameter(l,e.LINK_STATUS)))return null;e.useProgram(l);const a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const h=e.getAttribLocation(l,"aPos");e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0);const u=s=>e.getUniformLocation(l,s),d={res:u("uRes"),pad:u("uPad"),time:u("uTime"),surge:u("uSurge"),front:u("uFront"),glow:u("uGlow"),button:u("uButton"),warm:u("uWarm"),core:u("uCore"),mid:u("uMid"),cool:u("uCool")},S=e.createTexture();e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,S),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.uniform1i(u("uText"),0);const G=()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4));G();let y=0,R=0,T=0;const A=()=>{const s=t.getBoundingClientRect(),v=Math.min(window.devicePixelRatio||1,2),m=Math.max(1,Math.round((s.width+2*o)*v)),n=Math.max(1,Math.round((s.height+2*o)*v));m===y&&n===R||(y=m,R=n,T=o*v,i.width=m,i.height=n,e.viewport(0,0,m,n),f())};A();const P=new ResizeObserver(A);return P.observe(t),{size:()=>({width:y,height:R,pad:T}),setText:s=>s?e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,s):G(),draw:s=>{e.uniform2f(d.res,y,R),e.uniform1f(d.pad,T),e.uniform1f(d.time,s.time),e.uniform1f(d.surge,s.surge),e.uniform1f(d.front,s.front),e.uniform1f(d.glow,s.glow),e.uniform1f(d.button,s.button?1:0),e.uniform3fv(d.warm,N(s.colors.warm)),e.uniform3fv(d.core,N(s.colors.core)),e.uniform3fv(d.mid,N(s.colors.mid)),e.uniform3fv(d.cool,N(s.colors.cool)),e.drawArrays(e.TRIANGLE_STRIP,0,4)},dispose:()=>{P.disconnect(),e.deleteTexture(S),e.deleteBuffer(a),e.deleteProgram(l),i.width=i.height=1}}}function te(t,i){let o=!0,f=!1,e=0,x=performance.now();const p=a=>{e=0;const h=Math.min(a-x,100);x=a,i(h),c()};function c(){f||e||!o||document.hidden||(x=performance.now(),e=requestAnimationFrame(p))}const l=new IntersectionObserver(([a])=>{o=a.isIntersecting,c()});return l.observe(t),document.addEventListener("visibilitychange",c),c(),()=>{f=!0,cancelAnimationFrame(e),l.disconnect(),document.removeEventListener("visibilitychange",c)}}function oe(t){if(t<0||t>640)return{surge:0,front:0};const i=t*.0032;return t<=280?{surge:Math.pow(t/280,1.8),front:i}:{surge:Math.pow(1-(t-280)/360,1.25),front:i}}function ae(t,i,o,f){const e=o.startDelay+o.hold;if(t.length<2||i<e)return{index:0,chars:t[0]?.length??0,swappedAt:-1/0};const p=t.slice(1).map(a=>a.length*o.typeSpeed+o.hold).reduce((a,h)=>a+h,0)+(f?o.typeSpeed*(t[0].length||1)+o.hold:0);let c=i-e;if(f&&p>0)c%=p;else if(c>=p)return{index:t.length-1,chars:t[t.length-1].length,swappedAt:-1/0};const l=f?[...t.slice(1),t[0]]:t.slice(1);for(let a=0;a<l.length;a++){const h=l[a].length*o.typeSpeed+o.hold;if(c<h||a===l.length-1)return{index:(a+1)%t.length,chars:Math.min(l[a].length,Math.floor(c/o.typeSpeed)+1),swappedAt:i-c};c-=h}return{index:0,chars:t[0].length,swappedAt:-1/0}}const K={position:"absolute",inset:0,width:"100%",height:"100%",borderRadius:9999,pointerEvents:"none"},re={...K,background:"radial-gradient(42% 62% at 50% 106%, rgba(255,255,255,0.85), rgba(255,255,255,0) 70%), #000",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.38), inset 0 0 0 1px rgba(255,255,255,0.12)"},$=t=>typeof t=="string"?q[t]??q.aurora:{...q.aurora,...t},le='"Inter Variable", Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif';function Z({phrases:t=["Ask anything.","More personal.","More powerful."],width:i=320,palette:o="aurora",glow:f=1,surge:e=1,speed:x=1,still:p=!1,typeSpeed:c=Y.typeSpeed,hold:l=Y.hold,startDelay:a=Y.startDelay,loop:h=!0,paused:u=!1,fontFamily:d=le,fontWeight:S=500,className:G,style:y,"aria-label":R}){const T=b.useRef(null),A=b.useRef(null),[P,s]=b.useState(!1),v=b.useRef({phrases:t,glow:f,surge:e,speed:x,still:p,timing:{typeSpeed:c,hold:l,startDelay:a},loop:h,paused:u,colors:$(o),font:`${S} {size}px ${d}`,dirty:!0});b.useEffect(()=>{Object.assign(v.current,{phrases:t,glow:f,surge:e,speed:x,still:p,timing:{typeSpeed:c,hold:l,startDelay:a},loop:h,paused:u,colors:$(o),font:`${S} {size}px ${d}`,dirty:!0})});const m=t.join("\0");return b.useEffect(()=>{const n=T.current,_=A.current;if(!n||!_)return;const r=v.current,E=ee(n,_,0,()=>r.dirty=!0),I=document.createElement("canvas"),w=I.getContext("2d");if(!E||!w){s(!0);return}const U=Q();let C=0,j=0,M="",D="",B=!1;const ne=te(n,V=>{r.paused||(C+=V,j+=V*r.speed);const O=U?{index:0,chars:r.phrases[0]?.length??0,swappedAt:-1/0}:ae(r.phrases,C,r.timing,r.loop),X=(r.phrases[O.index]??"").slice(0,O.chars),{width:L,height:k}=E.size(),J=X!==M||D!==`${L}x${k}`||r.dirty;J&&(M=X,D=`${L}x${k}`,I.width=L,I.height=k,w.clearRect(0,0,L,k),w.fillStyle="#fff",w.textAlign="center",w.textBaseline="middle",w.font=r.font.replace("{size}",String(Math.round(k*.31))),w.fillText(X,L/2,k/2+k*.01,L*.84),E.setText(I));const F=U?{surge:0,front:0}:oe(C-O.swappedAt),W=U||r.still;W&&!J&&F.surge===0&&B||(B=W&&F.surge===0,E.draw({time:W?2.4:j/1e3,surge:F.surge*r.surge,front:F.front,glow:r.glow,button:!1,colors:r.colors}),r.dirty=!1)});return()=>{ne(),E.dispose()}},[m]),g.jsxs("div",{ref:T,role:"img","aria-label":R??t.join(" "),className:G,style:{position:"relative",width:i,maxWidth:"100%",aspectRatio:"2.92",borderRadius:9999,background:"#000",isolation:"isolate",...y},children:[g.jsx("canvas",{ref:A,"aria-hidden":"true",style:{...K,display:P?"none":"block"}}),P?g.jsx("span",{"aria-hidden":"true",style:{...re,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontFamily:d,fontWeight:S,containerType:"size"},children:g.jsx("span",{style:{fontSize:"31cqh"},children:t[0]})}):null]})}const ce={md:{height:36,paddingInline:16,fontSize:13},sm:{height:32,paddingInline:12,fontSize:13}},z=14;function ue({size:t="md",palette:i="aurora",glow:o=1,surge:f=1,surgeOn:e="hover",speed:x=1,still:p=!1,type:c="button",style:l,children:a,onPointerEnter:h,onPointerDown:u,onFocus:d,onBlur:S,...G}){const y=b.useRef(null),R=b.useRef(null),[T,A]=b.useState(!1),[P,s]=b.useState(!1),v=b.useRef({glow:o,surge:f,speed:x,still:p,colors:$(i),clock:0,surgedAt:-1/0});b.useEffect(()=>{Object.assign(v.current,{glow:o,surge:f,speed:x,still:p,colors:$(i)})});const m=()=>{const n=v.current;n.clock-n.surgedAt>280&&(n.surgedAt=n.clock)};return b.useEffect(()=>{const n=y.current,_=R.current;if(!n||!_)return;const r=v.current,E=ee(n,_,z,()=>{});if(!E){A(!0);return}const I=Q();let w=0,U="";const C=te(n,j=>{r.clock+=j,w+=j*r.speed;const M=I?{surge:0,front:0}:oe(r.clock-r.surgedAt-240),D=I||r.still,B=`${r.glow}|${r.surge}|${JSON.stringify(r.colors)}|${_.width}x${_.height}`;D&&M.surge===0&&B===U||(U=D&&M.surge===0?B:"",E.draw({time:D?2.4:w/1e3,surge:M.surge*r.surge,front:M.front,glow:r.glow,button:!0,colors:r.colors}))});return()=>{C(),E.dispose()}},[]),g.jsxs("button",{ref:y,type:c,...G,onPointerEnter:n=>{e==="hover"&&m(),h?.(n)},onPointerDown:n=>{e!=="never"&&m(),u?.(n)},onFocus:n=>{s(n.currentTarget.matches(":focus-visible")),d?.(n)},onBlur:n=>{s(!1),S?.(n)},style:{position:"relative",isolation:"isolate",display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",border:0,margin:0,borderRadius:9999,background:"#000",color:"#fff",fontFamily:"inherit",fontWeight:500,letterSpacing:"-0.01em",lineHeight:1,whiteSpace:"nowrap",cursor:"pointer",outline:P?"2px solid rgba(255,255,255,0.55)":"none",outlineOffset:2,...ce[t],...l},children:[g.jsx("canvas",{ref:R,"aria-hidden":"true",style:{...K,inset:-z,width:`calc(100% + ${2*z}px)`,height:`calc(100% + ${2*z}px)`,borderRadius:0,zIndex:-1,display:T?"none":"block"}}),T?g.jsx("span",{"aria-hidden":"true",style:{...re,zIndex:-1}}):null,a]})}const H={display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",minHeight:320,padding:32,background:"#000"};function Ke({variant:t="prompt"}){return t==="badge"?g.jsx("div",{style:H,children:g.jsx(Z,{phrases:["Now live."],width:240})}):t==="button"?g.jsxs("div",{style:H,children:[g.jsx(ue,{children:"Ask the assistant"}),g.jsx("button",{type:"button",style:{height:36,padding:"0 16px",border:0,borderRadius:9999,background:"#1c1c1e",color:"#d4d4d8",font:"inherit",fontSize:13,fontWeight:500,cursor:"pointer"},children:"Later"})]}):g.jsx("div",{style:H,children:g.jsx(Z,{phrases:["Ask anything.","More personal.","More powerful."],width:300})})}export{Ke as default};
