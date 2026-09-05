(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83938,e=>{"use strict";var t=e.i(38935),a=e.i(63162),r=e.i(46585);e.s(["default",0,function(){let[e,n]=(0,r.useState)("");return(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)(a.FeatureDialog,{onAction:()=>n("Story selected")}),e&&(0,t.jsx)("p",{role:"status",className:"mt-3 text-sm",children:e})]})}])},35992,function(e){e.n(e.i(83938))},48937,e=>{"use strict";var t=e.i(46585),a=e.i(32919);let r="u">typeof document?t.useLayoutEffect:t.useEffect,n=e=>e&&!Array.isArray(e)&&"object"==typeof e,i=[],s={},l=a.default,o=(e,a=i)=>{let o=s;n(e)?(o=e,e=null,a="dependencies"in o?o.dependencies:i):n(a)&&(a="dependencies"in(o=a)?o.dependencies:i),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");let{scope:d,revertOnUpdate:c}=o,g=(0,t.useRef)(!1),u=(0,t.useRef)(l.context(()=>{},d)),p=(0,t.useRef)(e=>u.current.add(null,e)),f=a&&a.length&&!c;return f&&r(()=>(g.current=!0,()=>u.current.revert()),i),r(()=>{if(e&&u.current.add(e,d),!f||!g.current)return()=>u.current.revert()},a),{context:u.current,contextSafe:p.current}};o.register=e=>{l=e},o.headless=!0,e.s(["useGSAP",0,o])},35274,(e,t,a)=>{e.e,function(e){"use strict";var t,a,r=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,n=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,i=Math.PI/180,s=Math.sin,l=Math.cos,o=Math.abs,d=Math.sqrt,c=function(e){return Math.round(1e5*e)/1e5||0},g=function(e){return e.closed=.001>Math.abs(e[0]-e[e.length-2])&&.001>Math.abs(e[1]-e[e.length-1])},u=function(){return t||"u">typeof window&&(t=window.gsap)&&t.registerPlugin&&t},p=function(){(t=u())?(t.registerEase("_CE",v.create),a=1):console.warn("Please gsap.registerPlugin(CustomEase)")},f=function(e){return~~(1e3*e+(e<0?-.5:.5))/1e3},h=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,m=/[cLlsSaAhHvVtTqQ]/g,x=function(e){var t,a=e.length,r=1e20;for(t=1;t<a;t+=6)+e[t]<r&&(r=+e[t]);return r},b=function(e,t,a){a||0===a||(a=Math.max(+e[e.length-1],+e[1]));var r,n=-1*e[0],i=-a,s=e.length,l=1/(+e[s-2]+n),o=-t||(Math.abs(e[s-1]-e[1])<.01*(e[s-2]-e[0])?x(e)+i:+e[s-1]+i);for(o=o?1/o:-l,r=0;r<s;r+=2)e[r]=(+e[r]+n)*l,e[r+1]=(+e[r+1]+i)*o},_=function e(t,a,r,n,i,s,l,o,d,c,g){var u,p=(t+r)/2,f=(a+n)/2,h=(r+i)/2,m=(n+s)/2,x=(i+l)/2,b=(s+o)/2,_=(p+h)/2,v=(f+m)/2,y=(h+x)/2,w=(m+b)/2,k=(_+y)/2,j=(v+w)/2,N=l-t,C=o-a,A=Math.abs((r-l)*C-(n-o)*N),M=Math.abs((i-l)*C-(s-o)*N);return c||(c=[{x:t,y:a},{x:l,y:o}],g=1),c.splice(g||c.length-1,0,{x:k,y:j}),(A+M)*(A+M)>d*(N*N+C*C)&&(u=c.length,e(t,a,p,f,_,v,k,j,d,c,g),e(k,j,y,w,x,b,l,o,d,c,g+1+(c.length-u))),c},v=function(){function e(e,t,r){a||p(),this.id=e,this.setData(t,r)}var u=e.prototype;return u.setData=function(e,a){a=a||{};var c,u,p,f,x,v,y,w,k,j=(e=e||"0,0,1,1").match(h),N=1,C=[],A=[],M=a.precision||1,z=M<=1;if(this.data=e,(m.test(e)||~e.indexOf("M")&&0>e.indexOf("C"))&&(j=function(e){var t,a,c,u,p,f,h,m,x,b,_,v,y,w,k,j=(e+"").replace(n,function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t}).match(r)||[],N=[],C=0,A=0,M=2/3,z=j.length,E=0,R="ERROR: malformed path: "+e,P=function(e,t,a,r){b=(a-e)/3,_=(r-t)/3,h.push(e+b,t+_,a-b,r-_,a,r)};if(!e||!isNaN(j[0])||isNaN(j[1]))return console.log(R),N;for(t=0;t<z;t++)if(y=p,isNaN(j[t])?f=(p=j[t].toUpperCase())!==j[t]:t--,c=+j[t+1],u=+j[t+2],f&&(c+=C,u+=A),t||(m=c,x=u),"M"===p)h&&(h.length<8?N.length-=1:E+=h.length,g(h)),C=m=c,A=x=u,h=[c,u],N.push(h),t+=2,p="L";else if("C"===p)h||(h=[0,0]),f||(C=A=0),h.push(c,u,C+ +j[t+3],A+ +j[t+4],C+=+j[t+5],A+=+j[t+6]),t+=6;else if("S"===p)b=C,_=A,("C"===y||"S"===y)&&(b+=C-h[h.length-4],_+=A-h[h.length-3]),f||(C=A=0),h.push(b,_,c,u,C+=+j[t+3],A+=+j[t+4]),t+=4;else if("Q"===p)b=C+(c-C)*M,_=A+(u-A)*M,f||(C=A=0),C+=+j[t+3],A+=+j[t+4],h.push(b,_,C+(c-C)*M,A+(u-A)*M,C,A),t+=4;else if("T"===p)b=C-h[h.length-4],_=A-h[h.length-3],h.push(C+b,A+_,c+(C+1.5*b-c)*M,u+(A+1.5*_-u)*M,C=c,A=u),t+=2;else if("H"===p)P(C,A,C=c,A),t+=1;else if("V"===p)P(C,A,C,A=c+(f?A-C:0)),t+=1;else if("L"===p||"Z"===p)"Z"===p&&(c=m,u=x,h.closed=!0),("L"===p||o(C-c)>.5||o(A-u)>.5)&&(P(C,A,c,u),"L"===p&&(t+=2)),C=c,A=u;else if("A"===p){if(w=j[t+4],k=j[t+5],b=j[t+6],_=j[t+7],a=7,w.length>1&&(w.length<3?(_=b,b=k,a--):(_=k,b=w.substr(2),a-=2),k=w.charAt(1),w=w.charAt(0)),v=function(e,t,a,r,n,c,g,u,p){if(e!==u||t!==p){a=o(a),r=o(r);var f=n%360*i,h=l(f),m=s(f),x=Math.PI,b=2*x,_=(e-u)/2,v=(t-p)/2,y=h*_+m*v,w=-m*_+h*v,k=y*y,j=w*w,N=k/(a*a)+j/(r*r);N>1&&(a=d(N)*a,r=d(N)*r);var C=a*a,A=r*r,M=(C*A-C*j-A*k)/(C*j+A*k);M<0&&(M=0);var z=(c===g?-1:1)*d(M),E=a*w/r*z,R=-(r*y/a*z),P=(e+u)/2+(h*E-m*R),L=(t+p)/2+(m*E+h*R),S=(y-E)/a,D=(w-R)/r,O=(-y-E)/a,I=(-w-R)/r,T=S*S+D*D,G=(D<0?-1:1)*Math.acos(S/d(T)),B=(S*I-D*O<0?-1:1)*Math.acos((S*O+D*I)/d(T*(O*O+I*I)));isNaN(B)&&(B=x),!g&&B>0?B-=b:g&&B<0&&(B+=b),G%=b;var F,V=Math.ceil(o(B%=b)/(b/4)),H=[],K=B/V,q=4/3*s(K/2)/(1+l(K/2)),U=h*a,W=m*a,Q=-(m*r),Z=h*r;for(F=0;F<V;F++)y=l(n=G+F*K),w=s(n),S=l(n+=K),D=s(n),H.push(y-q*w,w+q*y,S+q*D,D-q*S,S,D);for(F=0;F<H.length;F+=2)y=H[F],w=H[F+1],H[F]=y*U+w*Q+P,H[F+1]=y*W+w*Z+L;return H[F-2]=u,H[F-1]=p,H}}(C,A,+j[t+1],+j[t+2],+j[t+3],+w,+k,(f?C:0)+ +b,(f?A:0)+ +_),t+=a,v)for(a=0;a<v.length;a++)h.push(v[a]);C=h[h.length-2],A=h[h.length-1]}else console.log(R);return(t=h.length)<6?(N.pop(),t=0):g(h),N.totalPoints=E+t,N}(e)[0]),4===(c=j.length))j.unshift(0,0),j.push(1,1),c=8;else if((c-2)%6)throw"Invalid CustomEase";for((0!=+j[0]||1!=+j[c-2])&&b(j,a.height,a.originY),this.segment=j,f=2;f<c;f+=6)u={x:+j[f-2],y:+j[f-1]},p={x:+j[f+4],y:+j[f+5]},C.push(u,p),_(u.x,u.y,+j[f],+j[f+1],+j[f+2],+j[f+3],p.x,p.y,1/(2e5*M),C,C.length-1);for(c=C.length,f=0;f<c;f++)y=C[f],w=C[f-1]||y,(y.x>w.x||w.y!==y.y&&w.x===y.x||y===w)&&y.x<=1?(w.cx=y.x-w.x,w.cy=y.y-w.y,w.n=y,w.nx=y.x,z&&f>1&&Math.abs(w.cy/w.cx-C[f-2].cy/C[f-2].cx)>2&&(z=0),w.cx<N&&(w.cx?N=w.cx:(w.cx=.001,f===c-1&&(w.x-=.001,N=Math.min(N,.001),z=0)))):(C.splice(f--,1),c--);if(x=1/(c=1/N+1|0),v=0,y=C[0],z){for(f=0;f<c;f++)k=f*x,y.nx<k&&(y=C[++v]),u=y.y+(k-y.x)/y.cx*y.cy,A[f]={x:k,cx:x,y:u,cy:0,nx:9},f&&(A[f-1].cy=u-A[f-1].y);v=C[C.length-1],A[c-1].cy=v.y-u,A[c-1].cx=v.x-A[A.length-1].x}else{for(f=0;f<c;f++)y.nx<f*x&&(y=C[++v]),A[f]=y;v<C.length-1&&(A[f-1]=C[C.length-2])}return this.ease=function(e){var t=A[e*c|0]||A[c-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},this.ease.custom=this,this.id&&t&&t.registerEase(this.id,this.ease),this},u.getSVGData=function(t){return e.getSVGData(this,t)},e.create=function(t,a,r){return new e(t,a,r).ease},e.register=function(e){t=e,p()},e.get=function(e){return t.parseEase(e)},e.getSVGData=function(a,r){var n,i,s,l,o,d,g,u,p,h,m=(r=r||{}).width||100,x=r.height||100,b=r.x||0,_=(r.y||0)+x,v=t.utils.toArray(r.path)[0];if(r.invert&&(x=-x,_=0),"string"==typeof a&&(a=t.parseEase(a)),a.custom&&(a=a.custom),a instanceof e)n=function(e){"number"==typeof e[0]&&(e=[e]);var t,a,r,n,i="",s=e.length;for(a=0;a<s;a++){for(i+="M"+c((n=e[a])[0])+","+c(n[1])+" C",t=n.length,r=2;r<t;r++)i+=c(n[r++])+","+c(n[r++])+" "+c(n[r++])+","+c(n[r++])+" "+c(n[r++])+","+c(n[r])+" ";n.closed&&(i+="z")}return i}(function(e,t,a,r,n){for(var i,s,l,o,d,c=e.length;--c>-1;)for(s=(i=e[c]).length,l=0;l<s;l+=2)o=i[l],d=i[l+1],i[l]=o*t+0*d+r,i[l+1]=0*o+d*a+n;return e._dirty=1,e}([a.segment.slice(0)],m,-x,b,_));else{for(n=[b,_],l=1/(g=Math.max(5,200*(r.precision||1))),g+=2,u=5/g,p=f(b+l*m),i=((h=f(_+-(a(l)*x)))-_)/(p-b),s=2;s<g;s++)o=f(b+s*l*m),(Math.abs(((d=f(_+-(a(s*l)*x)))-h)/(o-p)-i)>u||s===g-1)&&(n.push(p,h),i=(d-h)/(o-p)),p=o,h=d;n="M"+n.join(",")}return v&&v.setAttribute("d",n),n},e}();v.version="3.15.0",v.headless=!0,u()&&t.registerPlugin(v),e.CustomEase=v,e.default=v,Object.defineProperty(e,"__esModule",{value:!0})}(a)},63162,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),n=e.i(48937),i=e.i(35274);r.gsap.registerPlugin(n.useGSAP,i.CustomEase),i.CustomEase.create("zeusAnnimate","M0,0 C0.3,0.9 0.1,1 1,1"),i.CustomEase.create("zeusAnnimateInOut","M0,0 C0.7,0 0.16,1 1,1");let s="rgba(10, 10, 10, 0)",l={mobile:"(max-width: 479px)",landscape:"(orientation: landscape) and (max-width: 767px)",tablet:"(max-width: 991px)",desktop:"(min-width: 992px)"},o=["Full-grain pebble, tacked for grip","Holds pressure through cold courts","Indoor pace, outdoor wear"],d=[{src:"/assets/annnimate/action_leap_01.jpg",alt:"Athlete captured mid-leap against a dark studio ground"},{src:"/assets/annnimate/roster_cap-silhouette_03.jpg",alt:"Silhouetted athlete in a cap with a glowing brim on a green field"}],c=[{num:"620 g",label:"Regulation weight"},{num:"75.5 cm",label:"Circumference, size 7"},{num:"0.6 bar",label:"Playing pressure"}];function g({className:e="",onAction:i,onOpenChange:u,duration:p=.55,ease:f="zeusAnnimate",disable:h="",label:m="Court issue, 01",title:x="Game leather",tileImage:b={src:"/assets/annnimate/product_ball_05.jpg",alt:"Basketball floating in a shaft of light in a dark locker room"},sheetTitle:_="Broken in by hand",sheetText:v="A game ball built to be played - full-grain leather with a deep pebble, worked in before it ships so the first grip feels like the hundredth.",actionLabel:y="Explore the story",listItems:w=o,mediaImages:k=d,stats:j=c,sheetImage:N={src:"/assets/annnimate/hero_profile_03.jpg",alt:"Silhouetted athlete profile against a deep orange field"},outro:C="Built for the court you actually play on - the cracked one behind the gym, in January, with cold hands."}){let A=(0,a.useRef)(null),M=(0,a.useRef)(null),z=(0,a.useRef)(null),E=(0,a.useRef)(null),R=(0,a.useRef)(null),P=(0,a.useRef)(null),L=(0,a.useRef)(null),S=(0,a.useRef)(null),D=(0,a.useRef)(null),O=(0,a.useRef)(null),I=(0,a.useRef)(null),T=(0,a.useRef)(!1),G=(0,a.useRef)(!1),B=(0,a.useRef)(""),F=(0,a.useRef)(null),V=(_||"details").trim()||"details",H=(0,a.useCallback)(()=>!!h&&h.split(",").some(e=>{let t=l[e.trim()];return t&&window.matchMedia(t).matches}),[h]),K=(0,a.useCallback)(()=>{G.current||(G.current=!0,B.current=document.body.style.overflow,document.body.style.overflow="hidden")},[]),q=(0,a.useCallback)(()=>{G.current&&(G.current=!1,document.body.style.overflow=B.current)},[]),U=(0,a.useCallback)(e=>{u?.(e),R.current?.setAttribute("aria-expanded",e?"true":"false");let t=D.current;t&&(t.setAttribute("aria-hidden",e?"false":"true"),e?t.removeAttribute("inert"):t.setAttribute("inert",""))},[]),{contextSafe:W}=(0,n.useGSAP)({scope:A}),Q=W(()=>{F.current&&(F.current.kill(),F.current=null),r.gsap.killTweensOf([P.current,L.current,S.current].filter(Boolean))}),Z=(0,a.useCallback)(()=>{F.current=null,document.hasFocus()&&O.current?.focus()},[]),$=(0,a.useCallback)(()=>{F.current=null,q(),A.current?.classList.remove("is-open"),r.gsap.set(L.current,{y:128}),S.current&&r.gsap.set(S.current,{yPercent:30}),document.hasFocus()&&R.current?.focus()},[q]),J=W(()=>{if(H()||T.current)return F.current;T.current=!0,Q(),A.current?.classList.add("is-open"),U(!0),K(),D.current&&(D.current.scrollTop=0);let e=r.gsap.timeline({defaults:{ease:f,force3D:!0},onComplete:Z});return e.to(P.current,{"--fdg-blur":"6px",backgroundColor:"rgba(10, 10, 10, 0.2)",duration:.6*p,data:{label:"Page dims and blurs behind"}},0),e.to(L.current,{y:0,duration:p,data:{label:"Dialog rises into place"}},0),e.to(L.current,{autoAlpha:1,duration:.45*p,data:{label:"Dialog fades in fast"}},0),S.current&&e.to(S.current,{yPercent:0,autoAlpha:1,duration:.9*p,data:{label:"Gradient band drifts up and fades in"}},.1),F.current=e,window.matchMedia("(prefers-reduced-motion: reduce)").matches&&e.timeScale(1e3),e}),Y=W(()=>{if(!T.current)return F.current;T.current=!1,Q(),U(!1);let e=r.gsap.timeline({defaults:{ease:"zeusAnnimateInOut",force3D:!0},onComplete:$});return e.to(L.current,{y:64,duration:.4*p,data:{label:"Dialog drops away"}},0),e.to(L.current,{autoAlpha:0,duration:.32*p,data:{label:"Dialog fades out"}},0),e.to(P.current,{"--fdg-blur":"0px",backgroundColor:s,duration:.4*p,data:{label:"Page sharpens again"}},0),S.current&&e.to(S.current,{yPercent:30,autoAlpha:0,duration:.35*p,data:{label:"Gradient band sinks out"}},0),F.current=e,window.matchMedia("(prefers-reduced-motion: reduce)").matches&&e.timeScale(1e3),e}),X=(0,a.useCallback)(()=>{T.current||J()},[J]),ee=W(()=>{z.current&&E.current&&(r.gsap.to(z.current,{x:1.75,y:-1.75,duration:.4,ease:"zeusAnnimateInOut",overwrite:"auto"}),r.gsap.to(E.current,{x:-1.75,y:1.75,duration:.4,ease:"zeusAnnimateInOut",overwrite:"auto"}))}),et=W(()=>{z.current&&E.current&&r.gsap.to([z.current,E.current],{x:0,y:0,duration:.4,ease:"zeusAnnimateInOut",overwrite:"auto"})}),ea=(0,a.useCallback)(e=>{T.current||("Enter"===e.key||" "===e.key)&&(e.preventDefault(),J())},[J]),er=(0,a.useCallback)(e=>{e.stopPropagation(),J()},[J]),en=(0,a.useCallback)(()=>{Y()},[Y]),ei=(0,a.useCallback)(e=>{T.current&&D.current&&!D.current.contains(e.target)&&Y()},[Y]);return(0,n.useGSAP)(()=>{if(H())return;M.current?.setAttribute("role","button"),M.current?.setAttribute("tabindex","0"),M.current?.setAttribute("aria-haspopup","dialog"),D.current?.setAttribute("role","dialog"),D.current?.setAttribute("aria-modal","true"),U(!1),r.gsap.set(P.current,{"--fdg-blur":"0px",backgroundColor:s}),r.gsap.set(L.current,{y:128,autoAlpha:0}),S.current&&r.gsap.set(S.current,{yPercent:30,autoAlpha:0});let e=r.gsap.matchMedia();return e.add("(prefers-reduced-motion: reduce)",()=>{}),()=>{q(),e.revert(),F.current&&F.current.kill()}},{scope:A,dependencies:[]}),(0,a.useEffect)(()=>{let e=e=>{if("Escape"===e.key&&T.current&&Y(),"Tab"===e.key&&T.current){let t=D.current;if(!t)return;let a=t.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(!a.length)return;let r=a[0],n=a[a.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),n.focus()):(e.shiftKey||document.activeElement!==n)&&t.contains(document.activeElement)||(e.preventDefault(),r.focus())}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[Y]),(0,a.useEffect)(()=>{let e=()=>{F.current?.paused(document.hidden)};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]),(0,t.jsxs)("div",{ref:A,className:`fdg_stage ${e}`.trim(),"data-anm-feature-dialog":!0,"data-anm-duration":p,"data-anm-ease":f,"data-anm-disable":h||void 0,children:[(0,t.jsxs)("div",{ref:M,className:"fdg_tile","data-anm-fdg-tile":!0,role:"button",tabIndex:0,"aria-haspopup":"dialog",onClick:X,onKeyDown:ea,onMouseEnter:ee,onMouseLeave:et,children:[(0,t.jsx)("div",{className:"fdg_gradient fdg_tile_gradient"}),(0,t.jsxs)("div",{className:"fdg_tile_copy",children:[(0,t.jsx)("div",{className:"fdg_tile_label",children:m}),(0,t.jsx)("h3",{className:"fdg_tile_title",children:x})]}),(0,t.jsx)("div",{className:"fdg_tile_media","data-anm-fdg-tile-media":!0,children:(0,t.jsx)("img",{className:"fdg_tile_img",src:b.src,alt:b.alt,loading:"eager",decoding:"async"})}),(0,t.jsx)("button",{ref:R,type:"button",className:"fdg_toggle","data-anm-fdg-toggle":!0,"aria-expanded":"false",onClick:er,children:(0,t.jsxs)("svg",{className:"fdg_glyph",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[(0,t.jsx)("path",{ref:z,className:"fdg_glyph_tr",d:"M10 2H14V6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{ref:E,className:"fdg_glyph_bl",d:"M6 14H2V10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),(0,t.jsx)("div",{ref:P,className:"fdg_overlay","data-anm-fdg-overlay":!0}),(0,t.jsxs)("div",{ref:L,className:"fdg_modal","data-anm-fdg-modal":!0,onClick:ei,children:[(0,t.jsx)("div",{ref:S,className:"fdg_gradient fdg_panel_gradient","data-anm-fdg-gradient":!0}),(0,t.jsx)("div",{className:"fdg_panel",children:(0,t.jsxs)("section",{ref:D,className:"fdg_sheet","data-anm-fdg-sheet":!0,"aria-label":V,"aria-hidden":"true",inert:!0,children:[(0,t.jsx)("button",{ref:O,type:"button",className:"fdg_close","data-anm-fdg-close":!0,"aria-label":"Close dialog",onClick:en,children:(0,t.jsx)("svg",{className:"fdg_glyph",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}),(0,t.jsxs)("div",{className:"fdg_sheet_inner",children:[(0,t.jsxs)("div",{className:"fdg_sheet_grid",children:[(0,t.jsxs)("div",{className:"fdg_sheet_main",children:[(0,t.jsx)("div",{className:"fdg_title_mask",children:(0,t.jsx)("h2",{ref:I,className:"fdg_sheet_title","data-anm-fdg-title":!0,children:_})}),(0,t.jsx)("p",{className:"fdg_sheet_text",children:v}),(0,t.jsx)("div",{className:"fdg_actions",children:(0,t.jsx)("button",{type:"button",className:"fdg_btn fdg_btn_primary",onClick:i,children:y})})]}),(0,t.jsx)("ul",{className:"fdg_list",children:w.map((e,a)=>(0,t.jsx)("li",{className:`fdg_list_item${a===w.length-1?" fdg_list_item_last":""}`,children:e},e))})]}),(0,t.jsx)("div",{className:"fdg_media_row",children:k.map(e=>(0,t.jsx)("div",{className:"fdg_media_cell",children:(0,t.jsx)("img",{className:"fdg_sheet_img",src:e.src,alt:e.alt,loading:"lazy",decoding:"async"})},e.src))}),(0,t.jsx)("div",{className:"fdg_stats",children:j.map(e=>(0,t.jsxs)("div",{className:"fdg_stat",children:[(0,t.jsx)("div",{className:"fdg_stat_num",children:e.num}),(0,t.jsx)("div",{className:"fdg_stat_label",children:e.label})]},e.label))}),(0,t.jsx)("div",{className:"fdg_sheet_media",children:(0,t.jsx)("img",{className:"fdg_sheet_img",src:N.src,alt:N.alt,loading:"lazy",decoding:"async"})}),(0,t.jsx)("p",{className:"fdg_outro",children:C})]})]})})]})]})}let u=`

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
`;e.s(["FeatureDialog",0,function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:u}),(0,t.jsx)(g,{...e})]})}],63162)}]);