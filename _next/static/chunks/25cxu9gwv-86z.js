(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,232937,e=>{"use strict";var t=e.i(538935),r=e.i(576380);e.s(["default",0,function({settings:e}){return(0,t.jsx)(r.CurtainSlider,{...e})}])},582653,function(e){e.n(e.i(232937))},848937,e=>{"use strict";var t=e.i(646585),r=e.i(732919);let n="u">typeof document?t.useLayoutEffect:t.useEffect,i=e=>e&&!Array.isArray(e)&&"object"==typeof e,s=[],a={},l=r.default,o=(e,r=s)=>{let o=a;i(e)?(o=e,e=null,r="dependencies"in o?o.dependencies:s):i(r)&&(r="dependencies"in(o=r)?o.dependencies:s),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");let{scope:c,revertOnUpdate:u}=o,d=(0,t.useRef)(!1),p=(0,t.useRef)(l.context(()=>{},c)),h=(0,t.useRef)(e=>p.current.add(null,e)),g=r&&r.length&&!u;return g&&n(()=>(d.current=!0,()=>p.current.revert()),s),n(()=>{if(e&&p.current.add(e,c),!g||!d.current)return()=>p.current.revert()},r),{context:p.current,contextSafe:h.current}};o.register=e=>{l=e},o.headless=!0,e.s(["useGSAP",0,o])},735274,(e,t,r)=>{e.e,function(e){"use strict";var t,r,n=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,i=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,s=Math.PI/180,a=Math.sin,l=Math.cos,o=Math.abs,c=Math.sqrt,u=function(e){return Math.round(1e5*e)/1e5||0},d=function(e){return e.closed=.001>Math.abs(e[0]-e[e.length-2])&&.001>Math.abs(e[1]-e[e.length-1])},p=function(){return t||"u">typeof window&&(t=window.gsap)&&t.registerPlugin&&t},h=function(){(t=p())?(t.registerEase("_CE",y.create),r=1):console.warn("Please gsap.registerPlugin(CustomEase)")},g=function(e){return~~(1e3*e+(e<0?-.5:.5))/1e3},f=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,m=/[cLlsSaAhHvVtTqQ]/g,x=function(e){var t,r=e.length,n=1e20;for(t=1;t<r;t+=6)+e[t]<n&&(n=+e[t]);return n},b=function(e,t,r){r||0===r||(r=Math.max(+e[e.length-1],+e[1]));var n,i=-1*e[0],s=-r,a=e.length,l=1/(+e[a-2]+i),o=-t||(Math.abs(e[a-1]-e[1])<.01*(e[a-2]-e[0])?x(e)+s:+e[a-1]+s);for(o=o?1/o:-l,n=0;n<a;n+=2)e[n]=(+e[n]+i)*l,e[n+1]=(+e[n+1]+s)*o},v=function e(t,r,n,i,s,a,l,o,c,u,d){var p,h=(t+n)/2,g=(r+i)/2,f=(n+s)/2,m=(i+a)/2,x=(s+l)/2,b=(a+o)/2,v=(h+f)/2,y=(g+m)/2,w=(f+x)/2,_=(m+b)/2,k=(v+w)/2,C=(y+_)/2,E=l-t,M=o-r,A=Math.abs((n-l)*M-(i-o)*E),S=Math.abs((s-l)*M-(a-o)*E);return u||(u=[{x:t,y:r},{x:l,y:o}],d=1),u.splice(d||u.length-1,0,{x:k,y:C}),(A+S)*(A+S)>c*(E*E+M*M)&&(p=u.length,e(t,r,h,g,v,y,k,C,c,u,d),e(k,C,w,_,x,b,l,o,c,u,d+1+(u.length-p))),u},y=function(){function e(e,t,n){r||h(),this.id=e,this.setData(t,n)}var p=e.prototype;return p.setData=function(e,r){r=r||{};var u,p,h,g,x,y,w,_,k,C=(e=e||"0,0,1,1").match(f),E=1,M=[],A=[],S=r.precision||1,P=S<=1;if(this.data=e,(m.test(e)||~e.indexOf("M")&&0>e.indexOf("C"))&&(C=function(e){var t,r,u,p,h,g,f,m,x,b,v,y,w,_,k,C=(e+"").replace(i,function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t}).match(n)||[],E=[],M=0,A=0,S=2/3,P=C.length,N=0,T="ERROR: malformed path: "+e,R=function(e,t,r,n){b=(r-e)/3,v=(n-t)/3,f.push(e+b,t+v,r-b,n-v,r,n)};if(!e||!isNaN(C[0])||isNaN(C[1]))return console.log(T),E;for(t=0;t<P;t++)if(w=h,isNaN(C[t])?g=(h=C[t].toUpperCase())!==C[t]:t--,u=+C[t+1],p=+C[t+2],g&&(u+=M,p+=A),t||(m=u,x=p),"M"===h)f&&(f.length<8?E.length-=1:N+=f.length,d(f)),M=m=u,A=x=p,f=[u,p],E.push(f),t+=2,h="L";else if("C"===h)f||(f=[0,0]),g||(M=A=0),f.push(u,p,M+ +C[t+3],A+ +C[t+4],M+=+C[t+5],A+=+C[t+6]),t+=6;else if("S"===h)b=M,v=A,("C"===w||"S"===w)&&(b+=M-f[f.length-4],v+=A-f[f.length-3]),g||(M=A=0),f.push(b,v,u,p,M+=+C[t+3],A+=+C[t+4]),t+=4;else if("Q"===h)b=M+(u-M)*S,v=A+(p-A)*S,g||(M=A=0),M+=+C[t+3],A+=+C[t+4],f.push(b,v,M+(u-M)*S,A+(p-A)*S,M,A),t+=4;else if("T"===h)b=M-f[f.length-4],v=A-f[f.length-3],f.push(M+b,A+v,u+(M+1.5*b-u)*S,p+(A+1.5*v-p)*S,M=u,A=p),t+=2;else if("H"===h)R(M,A,M=u,A),t+=1;else if("V"===h)R(M,A,M,A=u+(g?A-M:0)),t+=1;else if("L"===h||"Z"===h)"Z"===h&&(u=m,p=x,f.closed=!0),("L"===h||o(M-u)>.5||o(A-p)>.5)&&(R(M,A,u,p),"L"===h&&(t+=2)),M=u,A=p;else if("A"===h){if(_=C[t+4],k=C[t+5],b=C[t+6],v=C[t+7],r=7,_.length>1&&(_.length<3?(v=b,b=k,r--):(v=k,b=_.substr(2),r-=2),k=_.charAt(1),_=_.charAt(0)),y=function(e,t,r,n,i,u,d,p,h){if(e!==p||t!==h){r=o(r),n=o(n);var g=i%360*s,f=l(g),m=a(g),x=Math.PI,b=2*x,v=(e-p)/2,y=(t-h)/2,w=f*v+m*y,_=-m*v+f*y,k=w*w,C=_*_,E=k/(r*r)+C/(n*n);E>1&&(r=c(E)*r,n=c(E)*n);var M=r*r,A=n*n,S=(M*A-M*C-A*k)/(M*C+A*k);S<0&&(S=0);var P=(u===d?-1:1)*c(S),N=r*_/n*P,T=-(n*w/r*P),R=(e+p)/2+(f*N-m*T),j=(t+h)/2+(m*N+f*T),z=(w-N)/r,O=(_-T)/n,L=(-w-N)/r,D=(-_-T)/n,I=z*z+O*O,q=(O<0?-1:1)*Math.acos(z/c(I)),B=(z*D-O*L<0?-1:1)*Math.acos((z*L+O*D)/c(I*(L*L+D*D)));isNaN(B)&&(B=x),!d&&B>0?B-=b:d&&B<0&&(B+=b),q%=b;var F,U=Math.ceil(o(B%=b)/(b/4)),G=[],H=B/U,X=4/3*a(H/2)/(1+l(H/2)),V=f*r,W=m*r,K=-(m*n),Q=f*n;for(F=0;F<U;F++)w=l(i=q+F*H),_=a(i),z=l(i+=H),O=a(i),G.push(w-X*_,_+X*w,z+X*O,O-X*z,z,O);for(F=0;F<G.length;F+=2)w=G[F],_=G[F+1],G[F]=w*V+_*K+R,G[F+1]=w*W+_*Q+j;return G[F-2]=p,G[F-1]=h,G}}(M,A,+C[t+1],+C[t+2],+C[t+3],+_,+k,(g?M:0)+ +b,(g?A:0)+ +v),t+=r,y)for(r=0;r<y.length;r++)f.push(y[r]);M=f[f.length-2],A=f[f.length-1]}else console.log(T);return(t=f.length)<6?(E.pop(),t=0):d(f),E.totalPoints=N+t,E}(e)[0]),4===(u=C.length))C.unshift(0,0),C.push(1,1),u=8;else if((u-2)%6)throw"Invalid CustomEase";for((0!=+C[0]||1!=+C[u-2])&&b(C,r.height,r.originY),this.segment=C,g=2;g<u;g+=6)p={x:+C[g-2],y:+C[g-1]},h={x:+C[g+4],y:+C[g+5]},M.push(p,h),v(p.x,p.y,+C[g],+C[g+1],+C[g+2],+C[g+3],h.x,h.y,1/(2e5*S),M,M.length-1);for(u=M.length,g=0;g<u;g++)w=M[g],_=M[g-1]||w,(w.x>_.x||_.y!==w.y&&_.x===w.x||w===_)&&w.x<=1?(_.cx=w.x-_.x,_.cy=w.y-_.y,_.n=w,_.nx=w.x,P&&g>1&&Math.abs(_.cy/_.cx-M[g-2].cy/M[g-2].cx)>2&&(P=0),_.cx<E&&(_.cx?E=_.cx:(_.cx=.001,g===u-1&&(_.x-=.001,E=Math.min(E,.001),P=0)))):(M.splice(g--,1),u--);if(x=1/(u=1/E+1|0),y=0,w=M[0],P){for(g=0;g<u;g++)k=g*x,w.nx<k&&(w=M[++y]),p=w.y+(k-w.x)/w.cx*w.cy,A[g]={x:k,cx:x,y:p,cy:0,nx:9},g&&(A[g-1].cy=p-A[g-1].y);y=M[M.length-1],A[u-1].cy=y.y-p,A[u-1].cx=y.x-A[A.length-1].x}else{for(g=0;g<u;g++)w.nx<g*x&&(w=M[++y]),A[g]=w;y<M.length-1&&(A[g-1]=M[M.length-2])}return this.ease=function(e){var t=A[e*u|0]||A[u-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},this.ease.custom=this,this.id&&t&&t.registerEase(this.id,this.ease),this},p.getSVGData=function(t){return e.getSVGData(this,t)},e.create=function(t,r,n){return new e(t,r,n).ease},e.register=function(e){t=e,h()},e.get=function(e){return t.parseEase(e)},e.getSVGData=function(r,n){var i,s,a,l,o,c,d,p,h,f,m=(n=n||{}).width||100,x=n.height||100,b=n.x||0,v=(n.y||0)+x,y=t.utils.toArray(n.path)[0];if(n.invert&&(x=-x,v=0),"string"==typeof r&&(r=t.parseEase(r)),r.custom&&(r=r.custom),r instanceof e)i=function(e){"number"==typeof e[0]&&(e=[e]);var t,r,n,i,s="",a=e.length;for(r=0;r<a;r++){for(s+="M"+u((i=e[r])[0])+","+u(i[1])+" C",t=i.length,n=2;n<t;n++)s+=u(i[n++])+","+u(i[n++])+" "+u(i[n++])+","+u(i[n++])+" "+u(i[n++])+","+u(i[n])+" ";i.closed&&(s+="z")}return s}(function(e,t,r,n,i){for(var s,a,l,o,c,u=e.length;--u>-1;)for(a=(s=e[u]).length,l=0;l<a;l+=2)o=s[l],c=s[l+1],s[l]=o*t+0*c+n,s[l+1]=0*o+c*r+i;return e._dirty=1,e}([r.segment.slice(0)],m,-x,b,v));else{for(i=[b,v],l=1/(d=Math.max(5,200*(n.precision||1))),d+=2,p=5/d,h=g(b+l*m),s=((f=g(v+-(r(l)*x)))-v)/(h-b),a=2;a<d;a++)o=g(b+a*l*m),(Math.abs(((c=g(v+-(r(a*l)*x)))-f)/(o-h)-s)>p||a===d-1)&&(i.push(h,f),s=(c-f)/(o-h)),h=o,f=c;i="M"+i.join(",")}return y&&y.setAttribute("d",i),i},e}();y.version="3.15.0",y.headless=!0,p()&&t.registerPlugin(y),e.CustomEase=y,e.default=y,Object.defineProperty(e,"__esModule",{value:!0})}(r)},576380,e=>{"use strict";var t=e.i(538935),r=e.i(646585),n=e.i(732919),i=e.i(735274),s=e.i(848937);n.gsap.registerPlugin(s.useGSAP,i.CustomEase),i.CustomEase.get("zeusAnnimate")||i.CustomEase.create("zeusAnnimate","M0,0 C0.3,0.9 0.1,1 1,1"),i.CustomEase.get("zeusAnnimateInOut")||i.CustomEase.create("zeusAnnimateInOut","M0,0 C0.7,0 0.16,1 1,1");let a={mobile:"(max-width: 479px)",tablet:"(max-width: 991px)",landscape:"(orientation: landscape) and (max-width: 767px)",desktop:"(min-width: 992px)"},l=[{src:"/assets/annnimate/hero_run_02.jpg",alt:"Runner silhouetted mid-stride against a bright wall",title:"Drive",label:"Chapter 01"},{src:"/assets/annnimate/action_cyclist-climb_02.jpg",alt:"Cyclist climbing in motion blur against a warm backdrop",title:"Endurance",label:"Chapter 02"},{src:"/assets/annnimate/hero_profile_02.jpg",alt:"Athlete in profile against a bright orange field",title:"Focus",label:"Chapter 03"}];function o(e){return String(e+1).padStart(2,"0")}function c(e,t,r){let n=document.createElement("span");return n.className=t,e.split("").forEach(e=>{let t=document.createElement("span");t.className=r,t.textContent=" "===e?" ":e,n.appendChild(t)}),n}function u(e,t,r,n){e.innerHTML="";let i=c(t,r,n);return e.appendChild(i),Array.from(i.querySelectorAll("."+n))}function d(e,t,r,i,s,a){let l=e.querySelector("."+r+":not(.cs_line_out)");if(l){l.classList.add("cs_line_out");let e=l.querySelectorAll("."+i);n.gsap.to(e,Object.assign({onComplete:()=>{l.remove()}},s))}let o=c(t,r,i);e.appendChild(o);let u=Array.from(o.querySelectorAll("."+i));return n.gsap.set(u,a.from),n.gsap.to(u,a.to),u}function p(e,t,r){let n=e.clientWidth||1,i=[];for(let e=0;e<=r;e++)i.push(Math.round(e*n/r));t.forEach(e=>{for(let t=0;t<r;t++){let s=e.strips[t],a=e.inners[t],l=+(t<r-1);s.style.left=i[t]+"px",s.style.width=i[t+1]-i[t]+l+"px",a.style.left=-i[t]+"px",a.style.width=n+"px"}})}function h(e,t){e.style.visibility=t?"":"hidden"}function g(e){for(let t=0;t<e.strips.length;t++)e.strips[t].style.clipPath="none",e.strips[t].style.removeProperty("--csc")}function f({className:e="",images:i=l,duration:c=1.1,ease:m="zeusAnnimate",columns:x=12,auto:b=0,drag:v=!0,stagger:y=.0125,disable:w,onChange:_}){let k=(0,r.useRef)(null),C=(0,r.useRef)(null),E=(0,r.useRef)(null),M=(0,r.useRef)(null),A=(0,r.useRef)(null),S=(0,r.useRef)(null),P=(0,r.useRef)(null),N=(0,r.useRef)(null),T=(0,r.useRef)(null),R=Math.max(2,Math.min(24,parseInt(x,10)||12)),j="zeusAnnimate"===m||"zeusAnnimateInOut"===m?m:m||"expo.out",z=.8*c,O=(0,r.useRef)(0),L=(0,r.useRef)(null),D=(0,r.useRef)(0),I=(0,r.useRef)(0),q=(0,r.useRef)(null),B=(0,r.useRef)(0),F=(0,r.useRef)(0),U=(0,r.useRef)(!1),G=(0,r.useRef)(1),H=(0,r.useRef)(null),X=(0,r.useRef)(null),V=(0,r.useRef)(!1),W=(0,r.useCallback)(()=>{let e=L.current;e&&(e.liveRegion.textContent="Slide "+(O.current+1)+" of "+i.length+": "+i[O.current].title)},[i]),K=(0,r.useCallback)(()=>{var e,t,r;let s,a,l=L.current;if(!l)return;let c=i[O.current],d=u(l.titleEl,c.title||"","cs_title_line","cs_title_char");n.gsap.set(d,{yPercent:0,y:0});let p=u(l.labelEl,c.label||"","cs_label_line","cs_title_char");n.gsap.set(p,{yPercent:0,y:0}),e=l.indexEl,t=o(O.current),r=i.length,e.innerHTML="",t.split("").forEach(t=>{let r=function(e){let t=document.createElement("span");t.className="cs_digit_wrap";let r=document.createElement("span");r.className="cs_digit_roller";for(let e=0;e<=9;e++){let t=document.createElement("span");t.textContent=String(e),r.appendChild(t)}return t.appendChild(r),t._digit=parseInt(e,10),t._roller=r,t}(t);n.gsap.set(r._roller,{y:-r._digit+"em"}),e.appendChild(r)}),(s=document.createElement("span")).className="cs_index_divider",s.textContent="/",e.appendChild(s),(a=document.createElement("span")).className="cs_index_total",a.textContent=o(r-1),e.appendChild(a),n.gsap.set(l.progressFill,{scaleX:(O.current+1)/i.length,transformOrigin:"left center"}),W()},[i,W]),Q=(0,r.useCallback)(()=>{H.current&&(clearInterval(H.current),H.current=null)},[]),Z=(0,r.useCallback)(()=>{Q(),b>0&&!V.current&&(H.current=setInterval(()=>{et.current()},1e3*b))},[b,Q]),J=(0,r.useCallback)(()=>{b<=0||(Q(),clearTimeout(X.current),X.current=setTimeout(Z,4e3))},[b,Q,Z]),Y=(0,r.useCallback)((e,t)=>{var r,s;let a,l=L.current;if(!l||e===O.current)return;let u=performance.now();if(!V.current&&u-B.current<150)return;B.current=u,q.current&&e===q.current.outIndex&&(q.current.tl.progress(1),q.current=null);let p=O.current;O.current=e;let f=i[e];if(V.current){q.current?.tl.kill(),q.current=null,l.layers.forEach((t,r)=>{n.gsap.killTweensOf(t),h(t,r===e),n.gsap.set(t,{scale:1})}),K(),_?.({index:e,direction:t,slide:f});return}let m=++I.current,x=n.gsap.timeline({onComplete:()=>{q.current&&q.current.tl===x&&(q.current=null)}});q.current={tl:x,outIndex:p},V.current&&x.timeScale(1e3);let b=l.layers[p],v=l.layers[e],w=l.layerParts[p],k=l.layerParts[e];D.current+=2,b.style.zIndex=String(i.length+D.current+1),v.style.zIndex=String(i.length+D.current),h(b,!0),h(v,!0),n.gsap.killTweensOf(k.strips),n.gsap.killTweensOf(v),n.gsap.killTweensOf(k.shades),g(k),n.gsap.set(v,{scale:1.3,transformOrigin:"50% 50%",force3D:!0}),n.gsap.set(k.shades,{opacity:.18});let C=.62*c,E=(c-C)/Math.max(1,R-1);n.gsap.killTweensOf(w.strips);for(let e=0;e<w.strips.length;e++)w.strips[e].style.clipPath=t>0?"inset(0% 0% 0% var(--csc, 0%))":"inset(0% var(--csc, 0%) 0% 0%)";n.gsap.set(w.strips,{"--csc":"0%"}),x.to(w.strips,{"--csc":"105%",duration:C,ease:j,stagger:t>0?E:-E,overwrite:!0},0),n.gsap.killTweensOf(w.shades),x.to(w.shades,{opacity:.3,duration:.8*C,ease:"power1.in",stagger:t>0?E:-E,overwrite:"auto"},0),x.to(v,{scale:1,duration:1.05*c,ease:j,force3D:!0},0),x.to(k.shades,{opacity:0,duration:1.05*c,ease:j},0),x.call(()=>{m===I.current&&l.layers.forEach((t,r)=>{let s=l.layerParts[r];n.gsap.killTweensOf(s.strips),n.gsap.killTweensOf(t),n.gsap.killTweensOf(s.shades),g(s),n.gsap.set(t,{scale:1}),n.gsap.set(s.shades,{opacity:0}),h(t,r===e),t.style.zIndex=r===e?String(i.length):String(r)})},null,c),d(l.titleEl,f.title||"","cs_title_line","cs_title_char",{yPercent:t>0?-120:120,y:0,duration:.55,ease:"zeusAnnimateInOut",stagger:t>0?y:-y,force3D:!0,overwrite:!0},{from:{yPercent:t>0?120:-120,y:0},to:{yPercent:0,y:0,duration:.95,ease:"zeusAnnimateInOut",stagger:t>0?y:-y,force3D:!0,overwrite:!0}}),d(l.labelEl,f.label||"","cs_label_line","cs_title_char",{yPercent:t>0?-110:110,y:0,duration:.35,ease:"zeusAnnimateInOut",force3D:!0,overwrite:!0},{from:{yPercent:t>0?110:-110,y:0},to:{yPercent:0,y:0,duration:.5,ease:"zeusAnnimateInOut",force3D:!0,overwrite:!0}}),r=l.indexEl,s=o(e),a=Array.from(r.querySelectorAll(".cs_digit_wrap")),s.split("").forEach((e,t)=>{let r=a[t];if(!r)return;let i=parseInt(e,10);r._digit=i,n.gsap.to(r._roller,{y:-i+"em",duration:.7,ease:"expo.inOut",force3D:!0,overwrite:!0})}),n.gsap.set(l.progressFill,{transformOrigin:"left center"}),x.to(l.progressFill,{scaleX:(e+1)/i.length,duration:z,ease:j,force3D:!0,overwrite:"auto"},0),W(),_?.({index:e,direction:t,slide:f})},[i,c,R,j,y,z,W,_]),$=(0,r.useCallback)(()=>{Y((O.current+1)%i.length,1)},[i.length,Y]),ee=(0,r.useCallback)(()=>{Y((O.current-1+i.length)%i.length,-1)},[i.length,Y]),et=(0,r.useRef)($),er=(0,r.useRef)(ee);et.current=$,er.current=ee;let{contextSafe:en}=(0,s.useGSAP)(()=>{if(w&&(Array.isArray(w)?w:String(w).split(",")).some(e=>{let t=a[String(e).trim()];return t&&window.matchMedia(t).matches}))return;let e=C.current,t=k.current;if(!e||!t||!i.length)return;O.current=Math.min(O.current,i.length-1),e.innerHTML="";let r=document.createElement("div");r.className="cs_layers";let s=[],l=i.map((e,t)=>{let n=document.createElement("div");n.className="cs_layer",n.style.zIndex=String(t),n.style.visibility=t===O.current?"":"hidden";let i={strips:[],inners:[],imgs:[],shades:[]};for(let t=0;t<R;t++){let r=document.createElement("div");r.className="cs_strip";let s=document.createElement("div");s.className="cs_strip_inner";let a=document.createElement("img");a.className="cs_layer_img",a.src=e.src,a.alt=0===t&&e.alt||"",a.loading="eager";let l=document.createElement("div");l.className="cs_shade",l.setAttribute("aria-hidden","true"),s.appendChild(a),r.appendChild(s),r.appendChild(l),n.appendChild(r),i.strips.push(r),i.inners.push(s),i.imgs.push(a),i.shades.push(l)}return s.push(i),r.appendChild(n),n}),o=document.createElement("div");o.className="cs_scrim",o.setAttribute("aria-hidden","true"),e.appendChild(r),e.appendChild(o),L.current={layers:l,layerParts:s,labelEl:E.current,titleEl:M.current,indexEl:A.current,progressFill:S.current,prevBtn:P.current,nextBtn:N.current,liveRegion:T.current},p(e,s,R),K(),t.setAttribute("role","region"),t.setAttribute("aria-roledescription","carousel"),t.setAttribute("aria-label",i[O.current].title||""),t.setAttribute("tabindex",t.getAttribute("tabindex")||"0");let c=n.gsap.matchMedia();return c.add("(prefers-reduced-motion: reduce)",()=>(V.current=!0,Q(),q.current?.tl.progress(1),()=>{V.current=!1})),Z(),()=>{c.revert(),Q(),clearTimeout(X.current),q.current&&q.current.tl.kill(),l.forEach((e,t)=>{n.gsap.killTweensOf(s[t].strips),n.gsap.killTweensOf(s[t].imgs)}),S.current&&n.gsap.killTweensOf(S.current)}},{scope:k,dependencies:[i,R,w]}),ei=en(()=>{ee(),J()}),es=en(()=>{$(),J()}),ea=en((e,t)=>{let r=e.currentTarget.querySelector(".cs_arrow_icon");n.gsap.to(r,{x:3*t,duration:.35,ease:"back.out(2)",overwrite:"auto",force3D:!0})}),el=en(e=>{let t=e.currentTarget.querySelector(".cs_arrow_icon");n.gsap.to(t,{x:0,duration:.35,ease:"expo.out",overwrite:"auto",force3D:!0})}),eo=en(e=>{n.gsap.to(e.currentTarget,{scale:.92,duration:.15,ease:"power2.out",overwrite:"auto",force3D:!0})}),ec=en(e=>{n.gsap.to(e.currentTarget,{scale:1,duration:.15,ease:"back.out(2.5)",overwrite:"auto",force3D:!0})}),eu=en(e=>{n.gsap.to(e.currentTarget,{scale:1,duration:.15,ease:"power2.out",overwrite:"auto",force3D:!0})}),ed=(0,r.useCallback)(e=>{"ArrowRight"===e.key||"ArrowDown"===e.key?($(),J()):("ArrowLeft"===e.key||"ArrowUp"===e.key)&&(ee(),J())},[$,ee,J]),ep=(0,r.useCallback)(e=>{if(v){if(e.target.closest(".cs_pill")){U.current=!1;return}U.current=!0,F.current=e.clientX,G.current=C.current?C.current.clientWidth:1}},[v]),eh=(0,r.useCallback)(e=>{if(!U.current)return;U.current=!1;let t=e.clientX-F.current;Math.abs(t)<.15*G.current||(t<0?$():ee(),J())},[$,ee,J]);return(0,r.useEffect)(()=>{let e=null;function t(){clearTimeout(e),e=setTimeout(()=>{L.current&&C.current&&p(C.current,L.current.layerParts,R)},150)}return window.addEventListener("resize",t),()=>{clearTimeout(e),window.removeEventListener("resize",t)}},[R]),(0,r.useEffect)(()=>{function e(){document.hidden?Q():Z()}return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[Q,Z]),(0,t.jsxs)("div",{ref:k,className:`cs_wrap${e?" "+e:""}`,"data-anm-curtain-slider":!0,onKeyDown:ed,onPointerDown:ep,onPointerUp:eh,onMouseEnter:Q,onMouseLeave:Z,onFocus:Q,onBlur:Z,children:[(0,t.jsx)("div",{className:"cs_stage",ref:C,"data-anm-cs-stage":!0,children:i[0]&&(0,t.jsx)("img",{className:"cs_layer_img",src:i[0].src,alt:i[0].alt||""})}),(0,t.jsx)("div",{className:"cs_label",ref:E,children:i[0]?.label}),(0,t.jsx)("h2",{className:"cs_title",ref:M,children:i[0]?.title}),(0,t.jsx)("div",{className:"cs_index",ref:A,"aria-hidden":"true"}),(0,t.jsx)("div",{className:"cs_progress","aria-hidden":"true",children:(0,t.jsx)("div",{className:"cs_progress_fill",ref:S})}),(0,t.jsxs)("div",{className:"cs_pill",role:"group","aria-label":"Slide controls",children:[(0,t.jsx)("button",{ref:P,type:"button",className:"cs_arrow","aria-label":"Previous slide",onClick:ei,onMouseEnter:e=>ea(e,-1),onMouseLeave:el,onPointerDown:eo,onPointerUp:ec,onPointerLeave:eu,children:(0,t.jsx)("svg",{className:"cs_arrow_icon",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M10 3L5 8L10 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,t.jsx)("button",{ref:N,type:"button",className:"cs_arrow","aria-label":"Next slide",onClick:es,onMouseEnter:e=>ea(e,1),onMouseLeave:el,onPointerDown:eo,onPointerUp:ec,onPointerLeave:eu,children:(0,t.jsx)("svg",{className:"cs_arrow_icon",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M6 3L11 8L6 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,t.jsx)("div",{className:"cs_live","aria-live":"polite",ref:T})]})}let m=`/* Curtain Slider - full-bleed drop-in image slider. Advancing runs a
   direction-aware clip-path curtain wipe on the incoming layer paired with a
   slide-in, while the outgoing layer counter-drifts and darkens. No Webflow -
   CSS variables + @font-face allowed. */



.cs_wrap {
  --cs-bg:      #101010;
  --cs-fg:      rgba(255, 250, 242, 0.92);
  --cs-fg-soft: rgba(255, 255, 255, 0.85);
  --cs-fg-dim:  rgba(255, 255, 255, 0.75);
  --cs-line:    rgba(255, 255, 255, 0.25);
  --cs-line-on: rgba(255, 255, 255, 0.9);
  --cs-pill-bg: rgba(255, 255, 255, 0.1);
  --cs-circle:  rgba(255, 255, 255, 0.1);
  --cs-circle-hover: rgba(255, 255, 255, 0.22);
  --cs-margin:  40px;
  --cs-sans:    var(--font-inter, Inter), -apple-system, BlinkMacSystemFont, sans-serif;
}

.cs_wrap {
  position: relative;
  width: 100%;
  height: var(--zeus-animation-height, 640px);
  overflow: hidden;
  background: var(--cs-bg);
  font-family: var(--cs-sans);
  -webkit-font-smoothing: antialiased;
  touch-action: pan-y;
  outline: none;
}

.cs_slides {
  display: none;
}

.cs_stage {
  position: relative;
  width: 100%;
  height: 100%;
}

/* ---- Image layers: each layer is N column strips. A strip is an
   overflow-hidden mask; its inner is the full stage rect offset left so
   the strips reassemble one seamless cover-fit photo. Strip left/width
   and inner left/width are integer-snapped px, set by JS. ---- */
.cs_layers {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.cs_layer {
  position: absolute;
  inset: 0;
}

/* No will-change here on purpose: promoting all strips to their own
   compositor layers caused tile-rasterization churn on 120Hz retina
   fullscreen (flashing rectangles during the wipe). The shipped
   wipe-slider/step-wipe clip wipes run clean with zero will-change. */
.cs_strip {
  position: absolute;
  top: 0;
  height: 100%;
  overflow: hidden;
}

.cs_strip_inner {
  position: absolute;
  top: 0;
  height: 100%;
}

.cs_layer_img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform-origin: 50% 50%;
}

/* Per-strip darkening overlay - dimming tweens THIS element's opacity
   (GPU-composited) instead of filter: brightness on the image (animated
   filters repaint per frame and flicker at fullscreen retina). */
.cs_shade {
  position: absolute;
  inset: 0;
  background: #0a0a0a;
  opacity: 0;
  pointer-events: none;
}

/* ---- Scrim for text legibility ---- */
.cs_scrim {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(to top, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.05) 45%, rgba(10, 10, 10, 0.3) 100%);
  pointer-events: none;
}

/* ---- Label, top-left ---- */
.cs_label {
  position: absolute;
  left: var(--cs-margin);
  top: var(--cs-margin);
  z-index: 4;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--cs-fg-soft);
  pointer-events: none;
}

.cs_label_line {
  position: relative;
  display: block;
  white-space: nowrap;
  width: max-content;
  overflow: hidden;
}

/* ---- Display title, bottom-left ---- */
.cs_title {
  position: absolute;
  left: var(--cs-margin);
  bottom: var(--cs-margin);
  z-index: 4;
  margin: 0;
  font-size: clamp(48px, 8vw, 120px);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 0.95;
  color: var(--cs-fg);
  width: max-content;
  max-width: calc(100% - var(--cs-margin) * 2);
  pointer-events: none;
}

.cs_title_line {
  position: relative;
  display: block;
  white-space: nowrap;
  width: max-content;
  overflow-x: visible;
  overflow-y: hidden;
  padding-bottom: 0.18em;
  margin-bottom: -0.18em;
}

.cs_title_char {
  position: relative;
  display: inline-block;
}

/* ---- Index roller, bottom-right ---- */
.cs_index {
  position: absolute;
  right: var(--cs-margin);
  bottom: var(--cs-margin);
  z-index: 4;
  display: flex;
  /* center, not baseline: an overflow-hidden digit box's flex baseline is
     its BOTTOM edge, which rides the rollers up relative to the divider */
  align-items: center;
  line-height: 1;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--cs-fg-dim);
  pointer-events: none;
}

.cs_digit_wrap {
  position: relative;
  display: inline-block;
  overflow-x: visible;
  overflow-y: hidden;
  height: 1em;
  width: 0.62em;
  vertical-align: top;
}

.cs_digit_roller {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
}

.cs_digit_roller span {
  display: block;
  height: 1em;
  line-height: 1;
}

.cs_index_divider {
  display: inline-block;
  margin: 0 0.25em;
  color: var(--cs-line);
  line-height: 1;
}

.cs_index_total {
  display: inline-block;
  line-height: 1;
}

/* ---- Progress hairline, top edge ---- */
.cs_progress {
  position: absolute;
  left: var(--cs-margin);
  right: var(--cs-margin);
  top: 24px;
  z-index: 4;
  height: 1px;
  background: var(--cs-line);
  overflow: hidden;
}

.cs_progress_fill {
  position: absolute;
  inset: 0;
  background: var(--cs-line-on);
  transform: scaleX(0);
}

/* ---- Control pill, bottom center ---- */
.cs_pill {
  position: absolute;
  left: 50%;
  bottom: 40px;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px;
  border-radius: 999px;
  background: var(--cs-pill-bg);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  transform: translateX(-50%);
}

.cs_arrow {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  border-radius: 999px;
  border: none;
  background: var(--cs-circle);
  color: var(--cs-fg);
  cursor: pointer;
}

.cs_arrow:hover {
  background: var(--cs-circle-hover);
}

.cs_arrow:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
}

.cs_arrow_icon {
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
}

/* ---- Screen-reader-only live region ---- */
.cs_live {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* Outgoing text lines get lifted onto an absolute overlay inside the same
   element so the exit tween keeps running while the new line animates in.
   Declared LAST: it must win the cascade against the *_line rules above
   (equal specificity - source order decides). */
.cs_line_out {
  position: absolute;
  top: 0;
  left: 0;
  width: max-content;
  min-width: 100%;
}

/* ---- Mobile ---- */
@media (max-width: 767px) {
  .cs_wrap {
    --cs-margin: 20px;
  }

  .cs_title {
    font-size: clamp(36px, 12vw, 64px);
    max-width: calc(100% - var(--cs-margin) * 2 - 60px);
  }

  .cs_index {
    display: none;
  }

  .cs_progress {
    top: 16px;
  }

  .cs_pill {
    bottom: 28px;
  }
}
`;e.s(["CurtainSlider",0,function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:m}),(0,t.jsx)(f,{...e})]})}],576380)}]);