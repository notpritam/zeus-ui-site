(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,642262,e=>{"use strict";var r=e.i(538935),t=e.i(333905),a=e.i(646585);e.s(["default",0,function(){let[e,n]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(t.AnimatedPricing,{onSelectPlan:(e,r)=>n(`${e.name} \xb7 ${r} selected`)}),e&&(0,r.jsx)("p",{role:"status",className:"mt-3 text-center text-sm",children:e})]})}])},977782,function(e){e.n(e.i(642262))},848937,e=>{"use strict";var r=e.i(646585),t=e.i(732919);let a="u">typeof document?r.useLayoutEffect:r.useEffect,n=e=>e&&!Array.isArray(e)&&"object"==typeof e,i=[],c={},l=t.default,o=(e,t=i)=>{let o=c;n(e)?(o=e,e=null,t="dependencies"in o?o.dependencies:i):n(t)&&(t="dependencies"in(o=t)?o.dependencies:i),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");let{scope:s,revertOnUpdate:p}=o,d=(0,r.useRef)(!1),u=(0,r.useRef)(l.context(()=>{},s)),g=(0,r.useRef)(e=>u.current.add(null,e)),h=t&&t.length&&!p;return h&&a(()=>(d.current=!0,()=>u.current.revert()),i),a(()=>{if(e&&u.current.add(e,s),!h||!d.current)return()=>u.current.revert()},t),{context:u.current,contextSafe:g.current}};o.register=e=>{l=e},o.headless=!0,e.s(["useGSAP",0,o])},735274,(e,r,t)=>{e.e,function(e){"use strict";var r,t,a=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,n=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,i=Math.PI/180,c=Math.sin,l=Math.cos,o=Math.abs,s=Math.sqrt,p=function(e){return Math.round(1e5*e)/1e5||0},d=function(e){return e.closed=.001>Math.abs(e[0]-e[e.length-2])&&.001>Math.abs(e[1]-e[e.length-1])},u=function(){return r||"u">typeof window&&(r=window.gsap)&&r.registerPlugin&&r},g=function(){(r=u())?(r.registerEase("_CE",_.create),t=1):console.warn("Please gsap.registerPlugin(CustomEase)")},h=function(e){return~~(1e3*e+(e<0?-.5:.5))/1e3},f=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,m=/[cLlsSaAhHvVtTqQ]/g,x=function(e){var r,t=e.length,a=1e20;for(r=1;r<t;r+=6)+e[r]<a&&(a=+e[r]);return a},y=function(e,r,t){t||0===t||(t=Math.max(+e[e.length-1],+e[1]));var a,n=-1*e[0],i=-t,c=e.length,l=1/(+e[c-2]+n),o=-r||(Math.abs(e[c-1]-e[1])<.01*(e[c-2]-e[0])?x(e)+i:+e[c-1]+i);for(o=o?1/o:-l,a=0;a<c;a+=2)e[a]=(+e[a]+n)*l,e[a+1]=(+e[a+1]+i)*o},b=function e(r,t,a,n,i,c,l,o,s,p,d){var u,g=(r+a)/2,h=(t+n)/2,f=(a+i)/2,m=(n+c)/2,x=(i+l)/2,y=(c+o)/2,b=(g+f)/2,_=(h+m)/2,v=(f+x)/2,w=(m+y)/2,k=(b+v)/2,C=(_+w)/2,E=l-r,M=o-t,j=Math.abs((a-l)*M-(n-o)*E),N=Math.abs((i-l)*M-(c-o)*E);return p||(p=[{x:r,y:t},{x:l,y:o}],d=1),p.splice(d||p.length-1,0,{x:k,y:C}),(j+N)*(j+N)>s*(E*E+M*M)&&(u=p.length,e(r,t,g,h,b,_,k,C,s,p,d),e(k,C,v,w,x,y,l,o,s,p,d+1+(p.length-u))),p},_=function(){function e(e,r,a){t||g(),this.id=e,this.setData(r,a)}var u=e.prototype;return u.setData=function(e,t){t=t||{};var p,u,g,h,x,_,v,w,k,C=(e=e||"0,0,1,1").match(f),E=1,M=[],j=[],N=t.precision||1,P=N<=1;if(this.data=e,(m.test(e)||~e.indexOf("M")&&0>e.indexOf("C"))&&(C=function(e){var r,t,p,u,g,h,f,m,x,y,b,_,v,w,k,C=(e+"").replace(n,function(e){var r=+e;return r<1e-4&&r>-1e-4?0:r}).match(a)||[],E=[],M=0,j=0,N=2/3,P=C.length,A=0,S="ERROR: malformed path: "+e,R=function(e,r,t,a){y=(t-e)/3,b=(a-r)/3,f.push(e+y,r+b,t-y,a-b,t,a)};if(!e||!isNaN(C[0])||isNaN(C[1]))return console.log(S),E;for(r=0;r<P;r++)if(v=g,isNaN(C[r])?h=(g=C[r].toUpperCase())!==C[r]:r--,p=+C[r+1],u=+C[r+2],h&&(p+=M,u+=j),r||(m=p,x=u),"M"===g)f&&(f.length<8?E.length-=1:A+=f.length,d(f)),M=m=p,j=x=u,f=[p,u],E.push(f),r+=2,g="L";else if("C"===g)f||(f=[0,0]),h||(M=j=0),f.push(p,u,M+ +C[r+3],j+ +C[r+4],M+=+C[r+5],j+=+C[r+6]),r+=6;else if("S"===g)y=M,b=j,("C"===v||"S"===v)&&(y+=M-f[f.length-4],b+=j-f[f.length-3]),h||(M=j=0),f.push(y,b,p,u,M+=+C[r+3],j+=+C[r+4]),r+=4;else if("Q"===g)y=M+(p-M)*N,b=j+(u-j)*N,h||(M=j=0),M+=+C[r+3],j+=+C[r+4],f.push(y,b,M+(p-M)*N,j+(u-j)*N,M,j),r+=4;else if("T"===g)y=M-f[f.length-4],b=j-f[f.length-3],f.push(M+y,j+b,p+(M+1.5*y-p)*N,u+(j+1.5*b-u)*N,M=p,j=u),r+=2;else if("H"===g)R(M,j,M=p,j),r+=1;else if("V"===g)R(M,j,M,j=p+(h?j-M:0)),r+=1;else if("L"===g||"Z"===g)"Z"===g&&(p=m,u=x,f.closed=!0),("L"===g||o(M-p)>.5||o(j-u)>.5)&&(R(M,j,p,u),"L"===g&&(r+=2)),M=p,j=u;else if("A"===g){if(w=C[r+4],k=C[r+5],y=C[r+6],b=C[r+7],t=7,w.length>1&&(w.length<3?(b=y,y=k,t--):(b=k,y=w.substr(2),t-=2),k=w.charAt(1),w=w.charAt(0)),_=function(e,r,t,a,n,p,d,u,g){if(e!==u||r!==g){t=o(t),a=o(a);var h=n%360*i,f=l(h),m=c(h),x=Math.PI,y=2*x,b=(e-u)/2,_=(r-g)/2,v=f*b+m*_,w=-m*b+f*_,k=v*v,C=w*w,E=k/(t*t)+C/(a*a);E>1&&(t=s(E)*t,a=s(E)*a);var M=t*t,j=a*a,N=(M*j-M*C-j*k)/(M*C+j*k);N<0&&(N=0);var P=(p===d?-1:1)*s(N),A=t*w/a*P,S=-(a*v/t*P),R=(e+u)/2+(f*A-m*S),z=(r+g)/2+(m*A+f*S),T=(v-A)/t,L=(w-S)/a,O=(-v-A)/t,$=(-w-S)/a,I=T*T+L*L,B=(L<0?-1:1)*Math.acos(T/s(I)),D=(T*$-L*O<0?-1:1)*Math.acos((T*O+L*$)/s(I*(O*O+$*$)));isNaN(D)&&(D=x),!d&&D>0?D-=y:d&&D<0&&(D+=y),B%=y;var G,H=Math.ceil(o(D%=y)/(y/4)),V=[],q=D/H,U=4/3*c(q/2)/(1+l(q/2)),F=f*t,X=m*t,J=-(m*a),Y=f*a;for(G=0;G<H;G++)v=l(n=B+G*q),w=c(n),T=l(n+=q),L=c(n),V.push(v-U*w,w+U*v,T+U*L,L-U*T,T,L);for(G=0;G<V.length;G+=2)v=V[G],w=V[G+1],V[G]=v*F+w*J+R,V[G+1]=v*X+w*Y+z;return V[G-2]=u,V[G-1]=g,V}}(M,j,+C[r+1],+C[r+2],+C[r+3],+w,+k,(h?M:0)+ +y,(h?j:0)+ +b),r+=t,_)for(t=0;t<_.length;t++)f.push(_[t]);M=f[f.length-2],j=f[f.length-1]}else console.log(S);return(r=f.length)<6?(E.pop(),r=0):d(f),E.totalPoints=A+r,E}(e)[0]),4===(p=C.length))C.unshift(0,0),C.push(1,1),p=8;else if((p-2)%6)throw"Invalid CustomEase";for((0!=+C[0]||1!=+C[p-2])&&y(C,t.height,t.originY),this.segment=C,h=2;h<p;h+=6)u={x:+C[h-2],y:+C[h-1]},g={x:+C[h+4],y:+C[h+5]},M.push(u,g),b(u.x,u.y,+C[h],+C[h+1],+C[h+2],+C[h+3],g.x,g.y,1/(2e5*N),M,M.length-1);for(p=M.length,h=0;h<p;h++)v=M[h],w=M[h-1]||v,(v.x>w.x||w.y!==v.y&&w.x===v.x||v===w)&&v.x<=1?(w.cx=v.x-w.x,w.cy=v.y-w.y,w.n=v,w.nx=v.x,P&&h>1&&Math.abs(w.cy/w.cx-M[h-2].cy/M[h-2].cx)>2&&(P=0),w.cx<E&&(w.cx?E=w.cx:(w.cx=.001,h===p-1&&(w.x-=.001,E=Math.min(E,.001),P=0)))):(M.splice(h--,1),p--);if(x=1/(p=1/E+1|0),_=0,v=M[0],P){for(h=0;h<p;h++)k=h*x,v.nx<k&&(v=M[++_]),u=v.y+(k-v.x)/v.cx*v.cy,j[h]={x:k,cx:x,y:u,cy:0,nx:9},h&&(j[h-1].cy=u-j[h-1].y);_=M[M.length-1],j[p-1].cy=_.y-u,j[p-1].cx=_.x-j[j.length-1].x}else{for(h=0;h<p;h++)v.nx<h*x&&(v=M[++_]),j[h]=v;_<M.length-1&&(j[h-1]=M[M.length-2])}return this.ease=function(e){var r=j[e*p|0]||j[p-1];return r.nx<e&&(r=r.n),r.y+(e-r.x)/r.cx*r.cy},this.ease.custom=this,this.id&&r&&r.registerEase(this.id,this.ease),this},u.getSVGData=function(r){return e.getSVGData(this,r)},e.create=function(r,t,a){return new e(r,t,a).ease},e.register=function(e){r=e,g()},e.get=function(e){return r.parseEase(e)},e.getSVGData=function(t,a){var n,i,c,l,o,s,d,u,g,f,m=(a=a||{}).width||100,x=a.height||100,y=a.x||0,b=(a.y||0)+x,_=r.utils.toArray(a.path)[0];if(a.invert&&(x=-x,b=0),"string"==typeof t&&(t=r.parseEase(t)),t.custom&&(t=t.custom),t instanceof e)n=function(e){"number"==typeof e[0]&&(e=[e]);var r,t,a,n,i="",c=e.length;for(t=0;t<c;t++){for(i+="M"+p((n=e[t])[0])+","+p(n[1])+" C",r=n.length,a=2;a<r;a++)i+=p(n[a++])+","+p(n[a++])+" "+p(n[a++])+","+p(n[a++])+" "+p(n[a++])+","+p(n[a])+" ";n.closed&&(i+="z")}return i}(function(e,r,t,a,n){for(var i,c,l,o,s,p=e.length;--p>-1;)for(c=(i=e[p]).length,l=0;l<c;l+=2)o=i[l],s=i[l+1],i[l]=o*r+0*s+a,i[l+1]=0*o+s*t+n;return e._dirty=1,e}([t.segment.slice(0)],m,-x,y,b));else{for(n=[y,b],l=1/(d=Math.max(5,200*(a.precision||1))),d+=2,u=5/d,g=h(y+l*m),i=((f=h(b+-(t(l)*x)))-b)/(g-y),c=2;c<d;c++)o=h(y+c*l*m),(Math.abs(((s=h(b+-(t(c*l)*x)))-f)/(o-g)-i)>u||c===d-1)&&(n.push(g,f),i=(s-f)/(o-g)),g=o,f=s;n="M"+n.join(",")}return _&&_.setAttribute("d",n),n},e}();_.version="3.15.0",_.headless=!0,u()&&r.registerPlugin(_),e.CustomEase=_,e.default=_,Object.defineProperty(e,"__esModule",{value:!0})}(t)},333905,e=>{"use strict";var r=e.i(538935),t=e.i(646585),a=e.i(732919),n=e.i(848937),i=e.i(735274);a.gsap.registerPlugin(n.useGSAP,i.CustomEase),i.CustomEase.create("zeusAnnimate","M0,0 C0.3,0.9 0.1,1 1,1"),i.CustomEase.create("zeusAnnimateInOut","M0,0 C0.7,0 0.16,1 1,1");let c=[{name:"Club",nameClass:"prc_name_silver",monthly:20,yearly:199,popular:!1,features:["Weekly training plans","Community runs","Member pricing on kit","Monthly journal"],ctaLabel:"Join Club"},{name:"Pro",nameClass:"prc_name_champagne",monthly:55,yearly:549,popular:!0,features:["Everything in Club","Coach check-ins","Race-day crew","Recovery sessions","Early access to drops"],ctaLabel:"Join Pro"},{name:"Elite",nameClass:"prc_name_ice",monthly:119,yearly:1199,popular:!1,features:["Everything in Pro","Weekly 1:1 coaching","Physio and nutrition plan","Training camp invites","Private locker"],ctaLabel:"Join Elite"}],l={mobile:"(max-width: 479px)",landscape:"(orientation: landscape) and (max-width: 767px)",tablet:"(max-width: 991px)",desktop:"(min-width: 992px)"},o=(0,t.forwardRef)(function({className:e="",onSelectPlan:i,onPeriodChange:o,title:s="Membership",logoSrc:p="/assets/annnimate/vanta-logo-light.svg",logoAlt:d="Vanta",plans:u=c,rollDuration:g=.6,digitStagger:h=.04,toggleDuration:f=.4,shimmerDuration:m=2.4,savingsLabel:x="Save 17%",defaultPeriod:y="monthly",currency:b="EUR",showSavingsChip:_=!0,ease:v="zeusAnnimateInOut",disable:w=""},k){let C=(0,t.useRef)(null),E=(0,t.useRef)(null),M=(0,t.useRef)(null),j=(0,t.useRef)(null),N=(0,t.useRef)(null),P=(0,t.useRef)([]),A=(0,t.useRef)([]),S=(0,t.useRef)([]),R=(0,t.useRef)([]),z=(0,t.useRef)([]),T=(0,t.useRef)([]),L=(0,t.useRef)(null);(0,n.useGSAP)((e,r)=>{let t;if(!E.current||!M.current||!u.length||(w||"").split(",").map(e=>e.trim()).filter(Boolean).some(e=>{let r=l[e];return r&&window.matchMedia(r).matches}))return;let n=.35*f,i=.45*f,c="yearly"===y?"yearly":"monthly",s=c,p=!1,d=null;function k(e){return String(Math.round(e)).split("")}function O(e){let r=document.createElement("span");r.className="prc_digit_col";let t=document.createElement("span");t.className="prc_digit_roller";for(let e=0;e<=9;e++){let r=document.createElement("span");r.className="prc_digit_face",r.textContent=String(e),t.appendChild(r)}return r.appendChild(t),a.gsap.set(t,{y:-parseInt(e,10)+"em"}),r}function $(e,r){e.innerHTML="",k(r).forEach(r=>e.appendChild(O(r)))}function I(e,r){e.a.setAttribute("aria-hidden",r?"true":"false"),e.b.setAttribute("aria-hidden",r?"false":"true")}function B(e,r){if(!e.srEl)return;let t=r?e.yearly:e.monthly;e.srEl.textContent=b+" "+t+" per "+(r?"year":"month")}let D=r(function(e){if(e===s)return null;d&&(d.kill(),d=null,T.current.forEach(e=>{var r;return r=e.priceEl,void(Array.prototype.slice.call(r.querySelectorAll("[data-dropping]")).forEach(e=>e.remove()),a.gsap.set(r.children,{clearProps:"width"}))}));let r="yearly"===e;if(s=e,o?.(e),E.current.setAttribute("aria-checked",String(r)),T.current.forEach(e=>B(e,r)),p){let e=r?"left":"right";if(a.gsap.set(M.current,{transformOrigin:e+" center",x:r?"100%":"0%",scaleX:1}),T.current.forEach(e=>{$(e.priceEl,r?e.yearly:e.monthly),a.gsap.set(e.periodSwap.mask,{yPercent:r?-100:0}),I(e.periodSwap,r)}),j.current){let e=_&&r;a.gsap.set(j.current,{scale:+!!e,autoAlpha:+!!e})}return null}let t=r?"left":"right";a.gsap.set(M.current,{transformOrigin:t+" center"});let c=a.gsap.timeline({defaults:{force3D:!0},onComplete:()=>{d=null}});return d=c,c.to(M.current,{x:r?"100%":"0%",duration:f,ease:v,data:{label:"Toggle knob travels to the new position"}},0),c.to(M.current,{scaleX:1.18,duration:n,ease:"power2.out",data:{label:"Toggle knob stretches along the travel axis"}},0),c.to(M.current,{scaleX:1,duration:i,ease:"power2.inOut",data:{label:"Toggle knob snaps back to shape"}},n),j.current&&(r&&_?(a.gsap.set(j.current,{autoAlpha:1}),c.to(j.current,{scale:1,duration:.28,ease:"back.out(1.7)",data:{label:"Savings chip pops in"}},.05)):c.to(j.current,{scale:0,duration:.22400000000000003,ease:"power3.out",data:{label:"Savings chip shrinks out"},onComplete:()=>{a.gsap.set(j.current,{autoAlpha:0})}},0)),T.current.forEach((e,t)=>{let n="Card "+(t+1)+" price";!function(e,r,t,n){let i=k(t),c=Array.prototype.slice.call(r.children),l=i.length-c.length;if(l>0)for(let t=0;t<l;t++){let t=O("0");a.gsap.set(t,{width:0}),r.insertBefore(t,r.firstChild),e.to(t,{width:"0.6em",duration:g,ease:"expo.out",overwrite:!0,data:{label:n+" gains a digit"}},0)}else if(l<0)for(let r=0;r<-l;r++){let t=c[r];t.dataset.dropping="1",e.to(t,{width:0,duration:.7*g,ease:"expo.inOut",overwrite:!0,data:{label:n+" drops a digit"},onComplete:()=>{t.remove()}},0)}let o=(l<0?c.slice(-l):Array.prototype.slice.call(r.children)).map(e=>e.querySelector(".prc_digit_roller"));e.to(o,{y:e=>-parseInt(i[e],10)+"em",duration:g,ease:"expo.out",stagger:{each:h,from:"end"},force3D:!0,overwrite:!0,data:{label:n+" rolls to the new value"}},0)}(c,e.priceEl,r?e.yearly:e.monthly,n),I(e.periodSwap,r),c.to(e.periodSwap.mask,{yPercent:r?-100:0,duration:.4,ease:"zeusAnnimate",data:{label:n+" period label rolls"}},.05)}),c});if(T.current=u.map((e,r)=>(function(e){let r,t,n,i,c=P.current[e],l=A.current[e],o=S.current[e],p=R.current[e],d=z.current[e],g=u[e];if(!c||!l)return null;c.setAttribute("aria-hidden","true"),l.setAttribute("aria-hidden","true"),o&&(o.textContent=b);let h="yearly"===s,f=(l.innerHTML="",(r=document.createElement("span")).className="prc_swap",(t=document.createElement("span")).className="prc_swap_face",t.textContent="/mo",(n=document.createElement("span")).className="prc_swap_face prc_swap_face_next",n.textContent="/yr",r.appendChild(t),r.appendChild(n),l.appendChild(r),i={mask:r,a:t,b:n},a.gsap.set(r,{yPercent:h?-100:0}),I(i,h),i);$(c,h?g.yearly:g.monthly);let m={monthly:g.monthly,yearly:g.yearly,priceEl:c,nameEl:d,periodSwap:f,srEl:p};return B(m,h),m})(r)).filter(Boolean),!T.current.length)return;function G(){D("monthly"===s?"yearly":"monthly")}E.current.addEventListener("click",G),C.current.setAttribute("role","region"),E.current.setAttribute("role","switch"),E.current.setAttribute("aria-checked",String("yearly"===s)),E.current.setAttribute("aria-label","Billing period");let H="yearly"===s;if(a.gsap.set(M.current,{transformOrigin:(H?"left":"right")+" center",x:H?"100%":"0%",scaleX:1}),j.current){N.current&&(N.current.textContent=x);let e=_&&H;a.gsap.set(j.current,{transformOrigin:"center center",yPercent:-50,scale:+!!e,autoAlpha:+!!e})}let V=a.gsap.matchMedia();V.add("(prefers-reduced-motion: reduce)",()=>(p=!0,()=>{p=!1}));let q=T.current.map((e,r)=>(function(e,r){if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return null;let t=a.gsap.fromTo(e,{backgroundPosition:"100% 0%"},{backgroundPosition:"0% 0%",duration:m,ease:"none",repeat:-1,data:{label:"Plan name shimmer loop"}});return t.progress(r/3%1),t})(e.nameEl,r)).filter(Boolean);function U(){q.forEach(e=>e.paused(document.hidden))}return document.addEventListener("visibilitychange",U),L.current={getPeriod:()=>s,setPeriod:e=>D("yearly"===e?"yearly":"monthly"),demo:()=>{let e=D("monthly"===s?"yearly":"monthly");return t=setTimeout(()=>{s!==c&&D(c)},(f+g)*1e3+500),e}},()=>{clearTimeout(t),V.revert(),document.removeEventListener("visibilitychange",U),E.current?.removeEventListener("click",G),q.forEach(e=>e.kill()),d&&d.kill(),L.current=null}},{scope:C,revertOnUpdate:!0,dependencies:[u,g,h,f,m,x,y,b,_,v,w]});let O=(0,t.useCallback)(()=>L.current?.getPeriod?.()??y,[y]);return(0,t.useImperativeHandle)(k,()=>({refresh:()=>{},setPeriod:e=>L.current?.setPeriod?.(e),demo:()=>L.current?.demo?.()??null,getPeriod:O}),[O]),(0,r.jsxs)("section",{ref:C,className:`prc_wrap ${e}`.trim(),"data-anm-pricing":!0,children:[(0,r.jsxs)("div",{className:"prc_head",children:[p&&(0,r.jsx)("img",{className:"prc_logo",src:p,alt:d}),(0,r.jsx)("h2",{className:"prc_title",children:s})]}),(0,r.jsxs)("div",{className:"prc_toggle_row",children:[(0,r.jsxs)("button",{type:"button",className:"prc_toggle",ref:E,"data-anm-prc-toggle":!0,children:[(0,r.jsx)("span",{className:"prc_toggle_knob",ref:M,"data-anm-prc-knob":!0,"aria-hidden":"true"}),(0,r.jsx)("span",{className:"prc_toggle_label",children:"Monthly"}),(0,r.jsx)("span",{className:"prc_toggle_label",children:"Yearly"})]}),(0,r.jsx)("span",{className:"prc_chip",ref:j,"data-anm-prc-chip":!0,children:(0,r.jsx)("span",{ref:N,"data-anm-prc-chip-inner":!0})})]}),(0,r.jsx)("div",{className:"prc_cards",children:u.map((e,t)=>(0,r.jsxs)("div",{className:`prc_card${e.popular?" prc_card_popular":""}`,"data-anm-prc-card":!0,"data-anm-monthly":e.monthly,"data-anm-yearly":e.yearly,...e.popular?{"data-anm-popular":!0}:{},children:[e.popular&&(0,r.jsx)("span",{className:"prc_card_badge",children:"Popular"}),(0,r.jsx)("div",{className:`prc_card_name ${e.nameClass||""}`.trim(),"data-anm-prc-name":!0,ref:e=>{z.current[t]=e},children:e.name}),(0,r.jsxs)("div",{className:"prc_card_price",children:[(0,r.jsx)("span",{className:"prc_price_currency","data-anm-prc-currency":!0,ref:e=>{S.current[t]=e},children:b}),(0,r.jsx)("span",{className:"prc_price_value","data-anm-prc-price":!0,ref:e=>{P.current[t]=e},children:"yearly"===y?e.yearly:e.monthly}),(0,r.jsx)("span",{className:"prc_price_period","data-anm-prc-period":!0,ref:e=>{A.current[t]=e},children:"yearly"===y?"/ year":"/ month"}),(0,r.jsxs)("span",{className:"prc_price_sr","data-anm-prc-sr":!0,ref:e=>{R.current[t]=e},children:[`${e.name}: ${b} ${"yearly"===y?e.yearly:e.monthly} per ${"yearly"===y?"year":"month"}`," "]})]}),(0,r.jsx)("ul",{className:"prc_features",children:e.features.map(e=>(0,r.jsx)("li",{className:"prc_feature","data-anm-prc-feature":!0,children:e},e))}),(0,r.jsx)("button",{type:"button",onClick:()=>i?.(e,L.current?.getPeriod()||y),className:`prc_cta${e.popular?" prc_cta_popular":""}`,children:e.ctaLabel})]},e.name))})]})}),s=`

.prc_wrap {
  --prc-bg: #0a0a0a;
  --prc-card-bg: rgba(255, 255, 255, 0.03);
  --prc-card-bg-popular: rgba(255, 255, 255, 0.05);
  --prc-border: rgba(255, 255, 255, 0.12);
  --prc-border-popular: rgba(255, 255, 255, 0.22);
  --prc-fg: rgba(255, 250, 242, 0.92);
  --prc-fg-soft: rgba(255, 255, 255, 0.72);
  --prc-fg-dim: rgba(255, 255, 255, 0.5);
  --prc-line: rgba(255, 255, 255, 0.1);
  --prc-margin: 40px;
  --prc-sans: var(--font-inter, Inter), -apple-system, BlinkMacSystemFont, sans-serif;
}

.prc_wrap {
  position: relative;
  width: 100%;
  min-height: var(--zeus-animation-height, 640px);
  min-height: var(--zeus-animation-height, 640px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  padding: var(--prc-margin);
  background: var(--prc-bg);
  font-family: var(--prc-sans);
  -webkit-font-smoothing: antialiased;
}

/* ---- Head ---- */
.prc_head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.prc_logo {
  height: 16px;
  width: auto;
  opacity: 0.92;
}

.prc_title {
  margin: 0;
  font-size: 48px;
  font-weight: 300;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: var(--prc-fg);
}

/* ---- Toggle row ---- */
.prc_toggle_row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prc_toggle {
  position: relative;
  display: flex;
  width: 208px;
  flex: 0 0 auto;
  padding: 4px;
  border: 1px solid var(--prc-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.prc_toggle:focus {
  outline: none;
}

.prc_toggle:focus-visible {
  outline: 2px solid #fd551d;
  outline-offset: 2px;
}

.prc_toggle_knob {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  right: 50%;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.18);
  will-change: transform;
}

.prc_toggle_label {
  position: relative;
  z-index: 1;
  flex: 1 1 50%;
  text-align: center;
  padding: 9px 4px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--prc-fg-soft);
  pointer-events: none;
}

/* ---- Savings chip ---- */
.prc_chip {
  position: absolute;
  left: calc(100% + 12px);
  top: 50%;
  display: inline-block;
  transform-origin: center center;
  padding: 6px 12px;
  border: 1px solid var(--prc-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--prc-fg);
  white-space: nowrap;
  pointer-events: none;
}

/* ---- Cards ---- */
.prc_cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 260px));
  justify-content: center;
  gap: 12px;
  max-width: 804px;
  width: 100%;
}

.prc_card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 28px 24px;
  border: 1px solid var(--prc-border);
  border-radius: 16px;
  background: var(--prc-card-bg);
}

.prc_card_popular {
  border-color: var(--prc-border-popular);
  background: var(--prc-card-bg-popular);
}

.prc_card_badge {
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 12px;
  font-weight: 500;
  color: var(--prc-fg);
}

.prc_card_name {
  --prc-grad-b: #a9a9a9;
  --prc-grad-hi: #f5f2ec;
  width: fit-content;
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: transparent;
  background-image: linear-gradient(90deg,
    var(--prc-grad-b) 0%,
    var(--prc-grad-hi) 25%,
    var(--prc-grad-b) 50%,
    var(--prc-grad-hi) 75%,
    var(--prc-grad-b) 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
}

/* Per-plan tints: silver, champagne, ice. */
.prc_name_silver {
  --prc-grad-b: #a9a9a9;
  --prc-grad-hi: #f5f2ec;
}

.prc_name_champagne {
  --prc-grad-b: #c9a468;
  --prc-grad-hi: #f8ead0;
}

.prc_name_ice {
  --prc-grad-b: #9db4cc;
  --prc-grad-hi: #ecf3fb;
}

.prc_card_price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 24px;
}

.prc_price_currency {
  font-size: 14px;
  font-weight: 380;
  color: var(--prc-fg-dim);
}

.prc_price_value {
  display: inline-flex;
  align-items: baseline;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -0.02em;
  color: var(--prc-fg);
}

.prc_digit_col {
  position: relative;
  display: inline-block;
  overflow: clip;
  height: 1em;
  width: 0.6em;
  line-height: 1;
  vertical-align: baseline;
}

.prc_digit_col::before {
  content: "0";
  visibility: hidden;
}

.prc_digit_roller {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
}

.prc_digit_face {
  display: block;
  height: 1em;
  line-height: 1;
}

.prc_price_period {
  font-size: 14px;
  font-weight: 380;
  color: var(--prc-fg-dim);
}

/* ---- Two-face masked roll for the period label. ---- */
.prc_swap {
  position: relative;
  display: inline-block;
  overflow: clip;
  height: 1em;
  line-height: 1;
  vertical-align: baseline;
}

.prc_swap_face {
  display: block;
}

.prc_swap_face_next {
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(100%);
}

.prc_price_sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ---- Features ---- */
.prc_features {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  flex: 1 1 auto;
}

.prc_feature {
  padding: 10px 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--prc-fg-soft);
}

.prc_feature + .prc_feature {
  border-top: 1px solid var(--prc-line);
}

/* ---- CTA ---- */
.prc_cta {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: 380;
  color: var(--prc-fg);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.prc_cta:hover {
  background: rgba(255, 255, 255, 0.08);
}

.prc_cta:focus {
  outline: none;
}

.prc_cta:focus-visible {
  outline: 2px solid #fd551d;
  outline-offset: 2px;
}

.prc_cta_popular {
  background: rgba(255, 250, 242, 0.92);
  border-color: rgba(255, 250, 242, 0.92);
  color: #0a0a0a;
}

.prc_cta_popular:hover {
  background: #ffffff;
}

/* ---- Mobile ---- */
@media (max-width: 767px) {
  .prc_wrap {
    --prc-margin: 20px;
    gap: 32px;
  }

  .prc_cards {
    grid-template-columns: 1fr;
    max-width: 320px;
  }

  .prc_chip {
    left: auto;
    right: 0;
    top: calc(100% + 12px);
  }
}
`,p=(0,t.forwardRef)(function(e,t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsx)(o,{...e,ref:t})]})});e.s(["AnimatedPricing",0,p],333905)}]);