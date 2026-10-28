import{r as f}from"./recipe-BQt8iA4T.js";import{j as T}from"./index-DrKwywIQ.js";const V=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,E=1920*1080*4;let P=class{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=L();uniformCache={};textureUnitMap=new Map;ownerDocument;constructor(e,i,r,a,n=0,s=0,o=2,c=E,u=[]){if(e?.nodeType===1)this.parentElement=e;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector("style[data-paper-shader]")){const m=this.ownerDocument.createElement("style");m.innerHTML=M,m.setAttribute("data-paper-shader",""),this.ownerDocument.head.prepend(m)}const l=this.ownerDocument.createElement("canvas");this.canvasElement=l,this.parentElement.prepend(l),this.fragmentShader=i,this.providedUniforms=r,this.mipmaps=u,this.currentFrame=s,this.minPixelRatio=o,this.maxPixelCount=c;const h=l.getContext("webgl2",a);if(!h)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=h,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setupIntersectionObserver(),this.setSpeed(n),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{const e=I(this.gl,V,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{const e=this.gl.getAttribLocation(this.program,"a_position"),i=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i);const r=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{const e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([i,r])=>{if(e[i]=this.gl.getUniformLocation(this.program,i),r instanceof HTMLImageElement){const a=`${i}AspectRatio`;e[a]=this.gl.getUniformLocation(this.program,a)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;intersectionObserver=null;isInViewport=!0;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){const i=e.devicePixelContentBoxSize?.[0];i!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=i.inlineSize,this.parentDevicePixelHeight=i.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};setupIntersectionObserver=()=>{const e=this.ownerDocument.defaultView;e?.IntersectionObserver&&(this.intersectionObserver=new e.IntersectionObserver(([i])=>{this.isInViewport=i?.isIntersecting??!0,this.updateCurrentSpeed()}),this.intersectionObserver.observe(this.parentElement))};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,i=0;const r=Math.max(1,window.devicePixelRatio),a=visualViewport?.scale??1;if(this.devicePixelsSupported){const l=Math.max(1,this.minPixelRatio/r);e=this.parentDevicePixelWidth*l*a,i=this.parentDevicePixelHeight*l*a}else{let l=Math.max(r,this.minPixelRatio)*a;if(this.isSafari){const h=O(this.ownerDocument);l*=Math.max(1,h)}e=Math.round(this.parentWidth)*l,i=Math.round(this.parentHeight)*l}const n=Math.sqrt(this.maxPixelCount)/Math.sqrt(e*i),s=Math.min(1,n),o=Math.round(e*s),c=Math.round(i*s),u=o/Math.round(this.parentWidth);(this.canvasElement.width!==o||this.canvasElement.height!==c||this.renderScale!==u)&&(this.renderScale=u,this.canvasElement.width=o,this.canvasElement.height=c,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const i=e-this.lastRenderTime;this.lastRenderTime=e,this.currentSpeed!==0&&(this.currentFrame+=i*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null};requestRender=()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,i)=>{if(!i.complete||i.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);const r=this.textures.get(e);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);const a=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+a);const n=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,n),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,i),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const s=this.gl.getError();if(s!==this.gl.NO_ERROR||n===null){console.error("Paper Shaders: WebGL error when uploading texture:",s);return}this.textures.set(e,n);const o=this.uniformLocations[e];if(o){this.gl.uniform1i(o,a);const c=`${e}AspectRatio`,u=this.uniformLocations[c];if(u){const l=i.naturalWidth/i.naturalHeight;this.gl.uniform1f(u,l)}}};areUniformValuesEqual=(e,i)=>e===i?!0:Array.isArray(e)&&Array.isArray(i)&&e.length===i.length?e.every((r,a)=>this.areUniformValuesEqual(r,i[a])):!1;setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([i,r])=>{let a=r;if(r instanceof HTMLImageElement&&(a=`${r.src.slice(0,200)}|${r.naturalWidth}x${r.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[i],a))return;this.uniformCache[i]=a;const n=this.uniformLocations[i];if(!n){console.warn(`Uniform location for ${i} not found`);return}if(r instanceof HTMLImageElement)this.setTextureUniform(i,r);else if(Array.isArray(r)){let s=null,o=null;if(r[0]!==void 0&&Array.isArray(r[0])){const c=r[0].length;if(r.every(u=>u.length===c))s=r.flat(),o=c;else{console.warn(`All child arrays must be the same length for ${i}`);return}}else s=r,o=s.length;switch(o){case 2:this.gl.uniform2fv(n,s);break;case 3:this.gl.uniform3fv(n,s);break;case 4:this.gl.uniform4fv(n,s);break;case 9:this.gl.uniformMatrix3fv(n,!1,s);break;case 16:this.gl.uniformMatrix4fv(n,!1,s);break;default:console.warn(`Unsupported uniform array length: ${o}`)}}else typeof r=="number"?this.gl.uniform1f(n,r):typeof r=="boolean"?this.gl.uniform1i(n,r?1:0):console.warn(`Unsupported uniform type for ${i}: ${typeof r}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.updateCurrentSpeed()};updateCurrentSpeed=()=>{this.setCurrentSpeed(this.ownerDocument.hidden||!this.isInViewport?0:this.speed)};setCurrentSpeed=e=>{this.currentSpeed=e,this.rafId===null&&e!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&e===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=E)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.updateCurrentSpeed()};dispose=()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),this.ownerDocument.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}};function U(t,e,i){const r=t.createShader(e);return r?(t.shaderSource(r,i),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error("An error occurred compiling the shaders: "+t.getShaderInfoLog(r)),t.deleteShader(r),null)):null}function I(t,e,i){const r=t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT),a=r?r.precision:null;a&&a<23&&(e=e.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),i=i.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const n=U(t,t.VERTEX_SHADER,e),s=U(t,t.FRAGMENT_SHADER,i);if(!n||!s)return null;const o=t.createProgram();return o?(t.attachShader(o,n),t.attachShader(o,s),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)?(t.detachShader(o,n),t.detachShader(o,s),t.deleteShader(n),t.deleteShader(s),o):(console.error("Unable to initialize the shader program: "+t.getProgramInfoLog(o)),t.deleteProgram(o),t.deleteShader(n),t.deleteShader(s),null)):null}const M=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function L(){const t=navigator.userAgent.toLowerCase();return t.includes("safari")&&!t.includes("chrome")&&!t.includes("android")}function O(t){const e=visualViewport?.scale??1,i=visualViewport?.width??window.innerWidth,r=window.innerWidth-t.documentElement.clientWidth,a=e*i+r,n=outerWidth/a,s=Math.round(100*n);return s%5===0?s/100:s===33?1/3:s===67?2/3:s===133?4/3:n}const Y={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},q={fit:"none",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},k={none:0,contain:1,cover:2},K=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,Z=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,Q=`
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`,J=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,ee=`
  float randomR(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).r;
  }
`,te=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,ie=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;function re(t){if(Array.isArray(t))return t.length===4?t:t.length===3?[...t,1]:x;if(typeof t!="string")return x;let e,i,r,a=1;if(t.startsWith("#"))[e,i,r,a]=D(t);else if(t.startsWith("rgb")){const n=C(t);if(n===null)return x;[e,i,r,a]=n}else if(t.startsWith("hsl")){const n=F(t);if(n===null)return x;[e,i,r,a]=W(n)}else return console.error("Unsupported color format",t),x;return[R(e,0,1),R(i,0,1),R(r,0,1),R(a,0,1)]}function D(t){if(t=t.replace(/^#/,""),(t.length===3||t.length===4)&&(t=t.split("").map(n=>n+n).join("")),t.length===6&&(t=t+"ff"),!/^[0-9a-f]{8}$/i.test(t))return console.warn("Invalid hex color"),x;const e=parseInt(t.slice(0,2),16)/255,i=parseInt(t.slice(2,4),16)/255,r=parseInt(t.slice(4,6),16)/255,a=parseInt(t.slice(6,8),16)/255;return[e,i,r,a]}function C(t){const e=t.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return e?[parseInt(e[1]??"0")/255,parseInt(e[2]??"0")/255,parseInt(e[3]??"0")/255,e[4]===void 0?1:parseFloat(e[4])]:null}function F(t){const e=t.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return e?[parseInt(e[1]??"0"),parseInt(e[2]??"0"),parseInt(e[3]??"0"),e[4]===void 0?1:parseFloat(e[4])]:null}function W(t){const[e,i,r,a]=t,n=e/360,s=i/100,o=r/100;let c,u,l;if(i===0)c=u=l=o;else{const h=(d,_,p)=>(p<0&&(p+=1),p>1&&(p-=1),p<.16666666666666666?d+(_-d)*6*p:p<.5?_:p<.6666666666666666?d+(_-d)*(.6666666666666666-p)*6:d),m=o<.5?o*(1+s):o+s-o*s,v=2*o-m;c=h(v,m,n+1/3),u=h(v,m,n),l=h(v,m,n-1/3)}return[c,u,l,a]}const R=(t,e,i)=>Math.min(Math.max(t,e),i),x=[.5,.5,.5,1],H="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function G(t){const e=f.useRef(void 0),i=f.useCallback(r=>{const a=t.map(n=>{if(n!=null){if(typeof n=="function"){const s=n,o=s(r);return typeof o=="function"?o:()=>{s(null)}}return n.current=r,()=>{n.current=null}}});return()=>{a.forEach(n=>n?.())}},t);return f.useMemo(()=>t.every(r=>r==null)?null:r=>{e.current&&(e.current(),e.current=void 0),r!=null&&(e.current=i(r))},t)}function w(t){if(t.naturalWidth<1024&&t.naturalHeight<1024){if(t.naturalWidth<1||t.naturalHeight<1)return;const e=t.naturalWidth/t.naturalHeight;t.width=Math.round(e>1?1024*e:1024),t.height=Math.round(e>1?1024:1024/e)}}async function A(t){const e={},i=[],r=n=>{try{return n.startsWith("/")||new URL(n),!0}catch{return!1}},a=n=>{try{return n.startsWith("/")?!1:new URL(n,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(t).forEach(([n,s])=>{if(typeof s=="string"){const o=s||H;if(!r(o)){console.warn(`Uniform "${n}" has invalid URL "${o}". Skipping image loading.`);return}const c=new Promise((u,l)=>{const h=new Image;a(o)&&(h.crossOrigin="anonymous"),h.onload=()=>{w(h),e[n]=h,u()},h.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${o}`),l()},h.src=o});i.push(c)}else if(s instanceof HTMLImageElement){const o=s.decode().then(()=>{w(s),e[n]=s});i.push(o)}else e[n]=s}),await Promise.all(i),e}const X=f.forwardRef(function({fragmentShader:e,uniforms:i,webGlContextAttributes:r,speed:a=0,frame:n=0,width:s,height:o,minPixelRatio:c,maxPixelCount:u,mipmaps:l,style:h,...m},v){const[d,_]=f.useState(!1),p=f.useRef(null),g=f.useRef(null),B=f.useRef(r);f.useEffect(()=>((async()=>{const S=await A(i);p.current&&!g.current&&(g.current=new P(p.current,e,S,B.current,a,n,c,u,l),_(!0))})(),()=>{g.current?.dispose(),g.current=null}),[e]),f.useEffect(()=>{let b=!1;return(async()=>{const y=await A(i);b||g.current?.setUniforms(y)})(),()=>{b=!0}},[i,d]),f.useEffect(()=>{g.current?.setSpeed(a)},[a,d]),f.useEffect(()=>{g.current?.setMaxPixelCount(u)},[u,d]),f.useEffect(()=>{g.current?.setMinPixelRatio(c)},[c,d]),f.useEffect(()=>{g.current?.setFrame(n)},[n,d]);const z=G([p,v]);return T.jsx("div",{ref:z,style:s!==void 0||o!==void 0?{width:typeof s=="string"&&isNaN(+s)===!1?+s:s,height:typeof o=="string"&&isNaN(+o)===!1?+o:o,...h}:h,...m})});X.displayName="ShaderMount";export{X as S,Y as a,k as b,J as c,K as d,q as e,te as f,re as g,Q as p,Z as r,ie as s,ee as t};
