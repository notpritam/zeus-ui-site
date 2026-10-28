import{r as F}from"./recipe-Begt-rGp.js";import{d as k,s as B,r as j,f as q,g as t,S as $,a as A,b as M}from"./shader-mount-DifCK8JS.js";import{c as P}from"./color-props-are-equal-DHMcFMy6.js";import{j as X}from"./index-DxXZJYbM.js";const r={maxColorCount:10},Y=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${r.maxColorCount}];
uniform float u_colorsCount;
uniform float u_bandCount;
uniform float u_twist;
uniform float u_center;
uniform float u_proportion;
uniform float u_softness;
uniform float u_noise;
uniform float u_noiseFrequency;

in vec2 v_objectUV;

out vec4 fragColor;

${k}
${B}
${j}

void main() {
  vec2 shape_uv = v_objectUV;

  float l = length(shape_uv);
  l = max(1e-4, l);

  float t = u_time;

  float angle = ceil(u_bandCount) * atan(shape_uv.y, shape_uv.x) + t;
  float angle_norm = angle / TWO_PI;

  float twist = 3. * clamp(u_twist, 0., 1.);
  float offset = pow(l, -twist) + angle_norm;

  float shape = fract(offset);
  shape = 1. - abs(2. * shape - 1.);
  if (u_noise > 0.) {
    shape += u_noise * snoise(15. * pow(u_noiseFrequency, 2.) * shape_uv);
  }

  float mid = smoothstep(.2, .2 + .8 * u_center, pow(l, twist));
  shape = mix(0., shape, mid);

  float proportion = clamp(u_proportion, 0., 1.);
  float exponent = mix(.25, 1., proportion * 2.);
  exponent = mix(exponent, 10., max(0., proportion * 2. - 1.));
  shape = pow(shape, exponent);

  float mixer = shape * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;

  float outerShape = 0.;
  for (int i = 1; i < ${r.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;

    float m = clamp(mixer - float(i - 1), 0., 1.);
    float aa = fwidth(m);
    m = smoothstep(.5 - .5 * u_softness - aa, .5 + .5 * u_softness + aa, m);

    if (i == 1) {
      outerShape = m;
    }

    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  float midAA = .1 * fwidth(pow(l, -twist));
  float outerMid = smoothstep(.2, .2 + midAA, pow(l, twist));
  outerShape = mix(0., outerShape, outerMid);

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  ${q}

  fragColor = vec4(color, opacity);
}
`,o={params:{...A,speed:.32,frame:0,colorBack:"#330000",colors:["#ffd1d1","#ff8a8a","#660000"],bandCount:4,twist:.1,center:.2,proportion:.5,softness:0,noiseFrequency:.4,noise:.2}},U=F.memo(function({speed:e=o.params.speed,frame:s=o.params.frame,colorBack:i=o.params.colorBack,colors:a=o.params.colors,bandCount:n=o.params.bandCount,twist:u=o.params.twist,center:p=o.params.center,proportion:l=o.params.proportion,softness:m=o.params.softness,noiseFrequency:f=o.params.noiseFrequency,noise:c=o.params.noise,fit:_=o.params.fit,rotation:d=o.params.rotation,scale:h=o.params.scale,originX:g=o.params.originX,originY:w=o.params.originY,offsetX:x=o.params.offsetX,offsetY:C=o.params.offsetY,worldWidth:v=o.params.worldWidth,worldHeight:b=o.params.worldHeight,...S}){const y={u_colorBack:t(i),u_colors:a.map(t),u_colorsCount:a.length,u_bandCount:n,u_twist:u,u_center:p,u_proportion:l,u_softness:m,u_noiseFrequency:f,u_noise:c,u_fit:M[_],u_scale:h,u_rotation:d,u_offsetX:x,u_offsetY:C,u_originX:g,u_originY:w,u_worldWidth:v,u_worldHeight:b};return X.jsx($,{...S,speed:e,frame:s,fragmentShader:Y,uniforms:y})},P);export{U as S};
