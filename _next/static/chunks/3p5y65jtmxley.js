(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59915,e=>{"use strict";var t=e.i(38935),i=e.i(25447);e.s(["default",0,function(){return(0,t.jsx)("div",{className:"w-full overflow-hidden rounded-2xl",children:(0,t.jsx)(i.ImageFlyIn,{headline:"Everything else is noise.",support:"Focus is what remains when the season strips away everything you do not need."})})}])},97528,function(e){e.n(e.i(59915))},48937,e=>{"use strict";var t=e.i(46585),i=e.i(32919);let n="u">typeof document?t.useLayoutEffect:t.useEffect,r=e=>e&&!Array.isArray(e)&&"object"==typeof e,a=[],s={},o=i.default,l=(e,i=a)=>{let l=s;r(e)?(l=e,e=null,i="dependencies"in l?l.dependencies:a):r(i)&&(i="dependencies"in(l=i)?l.dependencies:a),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");let{scope:c,revertOnUpdate:d}=l,h=(0,t.useRef)(!1),p=(0,t.useRef)(o.context(()=>{},c)),u=(0,t.useRef)(e=>p.current.add(null,e)),f=i&&i.length&&!d;return f&&n(()=>(h.current=!0,()=>p.current.revert()),a),n(()=>{if(e&&p.current.add(e,c),!f||!h.current)return()=>p.current.revert()},i),{context:p.current,contextSafe:u.current}};l.register=e=>{o=e},l.headless=!0,e.s(["useGSAP",0,l])},35274,(e,t,i)=>{e.e,function(e){"use strict";var t,i,n=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,r=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,a=Math.PI/180,s=Math.sin,o=Math.cos,l=Math.abs,c=Math.sqrt,d=function(e){return Math.round(1e5*e)/1e5||0},h=function(e){return e.closed=.001>Math.abs(e[0]-e[e.length-2])&&.001>Math.abs(e[1]-e[e.length-1])},p=function(){return t||"u">typeof window&&(t=window.gsap)&&t.registerPlugin&&t},u=function(){(t=p())?(t.registerEase("_CE",w.create),i=1):console.warn("Please gsap.registerPlugin(CustomEase)")},f=function(e){return~~(1e3*e+(e<0?-.5:.5))/1e3},g=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,m=/[cLlsSaAhHvVtTqQ]/g,x=function(e){var t,i=e.length,n=1e20;for(t=1;t<i;t+=6)+e[t]<n&&(n=+e[t]);return n},v=function(e,t,i){i||0===i||(i=Math.max(+e[e.length-1],+e[1]));var n,r=-1*e[0],a=-i,s=e.length,o=1/(+e[s-2]+r),l=-t||(Math.abs(e[s-1]-e[1])<.01*(e[s-2]-e[0])?x(e)+a:+e[s-1]+a);for(l=l?1/l:-o,n=0;n<s;n+=2)e[n]=(+e[n]+r)*o,e[n+1]=(+e[n+1]+a)*l},y=function e(t,i,n,r,a,s,o,l,c,d,h){var p,u=(t+n)/2,f=(i+r)/2,g=(n+a)/2,m=(r+s)/2,x=(a+o)/2,v=(s+l)/2,y=(u+g)/2,w=(f+m)/2,_=(g+x)/2,b=(m+v)/2,E=(y+_)/2,S=(w+b)/2,M=o-t,C=l-i,k=Math.abs((n-o)*C-(r-l)*M),T=Math.abs((a-o)*C-(s-l)*M);return d||(d=[{x:t,y:i},{x:o,y:l}],h=1),d.splice(h||d.length-1,0,{x:E,y:S}),(k+T)*(k+T)>c*(M*M+C*C)&&(p=d.length,e(t,i,u,f,y,w,E,S,c,d,h),e(E,S,_,b,x,v,o,l,c,d,h+1+(d.length-p))),d},w=function(){function e(e,t,n){i||u(),this.id=e,this.setData(t,n)}var p=e.prototype;return p.setData=function(e,i){i=i||{};var d,p,u,f,x,w,_,b,E,S=(e=e||"0,0,1,1").match(g),M=1,C=[],k=[],T=i.precision||1,N=T<=1;if(this.data=e,(m.test(e)||~e.indexOf("M")&&0>e.indexOf("C"))&&(S=function(e){var t,i,d,p,u,f,g,m,x,v,y,w,_,b,E,S=(e+"").replace(r,function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t}).match(n)||[],M=[],C=0,k=0,T=2/3,N=S.length,j=0,A="ERROR: malformed path: "+e,F=function(e,t,i,n){v=(i-e)/3,y=(n-t)/3,g.push(e+v,t+y,i-v,n-y,i,n)};if(!e||!isNaN(S[0])||isNaN(S[1]))return console.log(A),M;for(t=0;t<N;t++)if(_=u,isNaN(S[t])?f=(u=S[t].toUpperCase())!==S[t]:t--,d=+S[t+1],p=+S[t+2],f&&(d+=C,p+=k),t||(m=d,x=p),"M"===u)g&&(g.length<8?M.length-=1:j+=g.length,h(g)),C=m=d,k=x=p,g=[d,p],M.push(g),t+=2,u="L";else if("C"===u)g||(g=[0,0]),f||(C=k=0),g.push(d,p,C+ +S[t+3],k+ +S[t+4],C+=+S[t+5],k+=+S[t+6]),t+=6;else if("S"===u)v=C,y=k,("C"===_||"S"===_)&&(v+=C-g[g.length-4],y+=k-g[g.length-3]),f||(C=k=0),g.push(v,y,d,p,C+=+S[t+3],k+=+S[t+4]),t+=4;else if("Q"===u)v=C+(d-C)*T,y=k+(p-k)*T,f||(C=k=0),C+=+S[t+3],k+=+S[t+4],g.push(v,y,C+(d-C)*T,k+(p-k)*T,C,k),t+=4;else if("T"===u)v=C-g[g.length-4],y=k-g[g.length-3],g.push(C+v,k+y,d+(C+1.5*v-d)*T,p+(k+1.5*y-p)*T,C=d,k=p),t+=2;else if("H"===u)F(C,k,C=d,k),t+=1;else if("V"===u)F(C,k,C,k=d+(f?k-C:0)),t+=1;else if("L"===u||"Z"===u)"Z"===u&&(d=m,p=x,g.closed=!0),("L"===u||l(C-d)>.5||l(k-p)>.5)&&(F(C,k,d,p),"L"===u&&(t+=2)),C=d,k=p;else if("A"===u){if(b=S[t+4],E=S[t+5],v=S[t+6],y=S[t+7],i=7,b.length>1&&(b.length<3?(y=v,v=E,i--):(y=E,v=b.substr(2),i-=2),E=b.charAt(1),b=b.charAt(0)),w=function(e,t,i,n,r,d,h,p,u){if(e!==p||t!==u){i=l(i),n=l(n);var f=r%360*a,g=o(f),m=s(f),x=Math.PI,v=2*x,y=(e-p)/2,w=(t-u)/2,_=g*y+m*w,b=-m*y+g*w,E=_*_,S=b*b,M=E/(i*i)+S/(n*n);M>1&&(i=c(M)*i,n=c(M)*n);var C=i*i,k=n*n,T=(C*k-C*S-k*E)/(C*S+k*E);T<0&&(T=0);var N=(d===h?-1:1)*c(T),j=i*b/n*N,A=-(n*_/i*N),F=(e+p)/2+(g*j-m*A),R=(t+u)/2+(m*j+g*A),P=(_-j)/i,z=(b-A)/n,q=(-_-j)/i,L=(-b-A)/n,O=P*P+z*z,I=(z<0?-1:1)*Math.acos(P/c(O)),B=(P*L-z*q<0?-1:1)*Math.acos((P*q+z*L)/c(O*(q*q+L*L)));isNaN(B)&&(B=x),!h&&B>0?B-=v:h&&B<0&&(B+=v),I%=v;var D,W=Math.ceil(l(B%=v)/(v/4)),H=[],Y=B/W,G=4/3*s(Y/2)/(1+o(Y/2)),V=g*i,J=m*i,U=-(m*n),$=g*n;for(D=0;D<W;D++)_=o(r=I+D*Y),b=s(r),P=o(r+=Y),z=s(r),H.push(_-G*b,b+G*_,P+G*z,z-G*P,P,z);for(D=0;D<H.length;D+=2)_=H[D],b=H[D+1],H[D]=_*V+b*U+F,H[D+1]=_*J+b*$+R;return H[D-2]=p,H[D-1]=u,H}}(C,k,+S[t+1],+S[t+2],+S[t+3],+b,+E,(f?C:0)+ +v,(f?k:0)+ +y),t+=i,w)for(i=0;i<w.length;i++)g.push(w[i]);C=g[g.length-2],k=g[g.length-1]}else console.log(A);return(t=g.length)<6?(M.pop(),t=0):h(g),M.totalPoints=j+t,M}(e)[0]),4===(d=S.length))S.unshift(0,0),S.push(1,1),d=8;else if((d-2)%6)throw"Invalid CustomEase";for((0!=+S[0]||1!=+S[d-2])&&v(S,i.height,i.originY),this.segment=S,f=2;f<d;f+=6)p={x:+S[f-2],y:+S[f-1]},u={x:+S[f+4],y:+S[f+5]},C.push(p,u),y(p.x,p.y,+S[f],+S[f+1],+S[f+2],+S[f+3],u.x,u.y,1/(2e5*T),C,C.length-1);for(d=C.length,f=0;f<d;f++)_=C[f],b=C[f-1]||_,(_.x>b.x||b.y!==_.y&&b.x===_.x||_===b)&&_.x<=1?(b.cx=_.x-b.x,b.cy=_.y-b.y,b.n=_,b.nx=_.x,N&&f>1&&Math.abs(b.cy/b.cx-C[f-2].cy/C[f-2].cx)>2&&(N=0),b.cx<M&&(b.cx?M=b.cx:(b.cx=.001,f===d-1&&(b.x-=.001,M=Math.min(M,.001),N=0)))):(C.splice(f--,1),d--);if(x=1/(d=1/M+1|0),w=0,_=C[0],N){for(f=0;f<d;f++)E=f*x,_.nx<E&&(_=C[++w]),p=_.y+(E-_.x)/_.cx*_.cy,k[f]={x:E,cx:x,y:p,cy:0,nx:9},f&&(k[f-1].cy=p-k[f-1].y);w=C[C.length-1],k[d-1].cy=w.y-p,k[d-1].cx=w.x-k[k.length-1].x}else{for(f=0;f<d;f++)_.nx<f*x&&(_=C[++w]),k[f]=_;w<C.length-1&&(k[f-1]=C[C.length-2])}return this.ease=function(e){var t=k[e*d|0]||k[d-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},this.ease.custom=this,this.id&&t&&t.registerEase(this.id,this.ease),this},p.getSVGData=function(t){return e.getSVGData(this,t)},e.create=function(t,i,n){return new e(t,i,n).ease},e.register=function(e){t=e,u()},e.get=function(e){return t.parseEase(e)},e.getSVGData=function(i,n){var r,a,s,o,l,c,h,p,u,g,m=(n=n||{}).width||100,x=n.height||100,v=n.x||0,y=(n.y||0)+x,w=t.utils.toArray(n.path)[0];if(n.invert&&(x=-x,y=0),"string"==typeof i&&(i=t.parseEase(i)),i.custom&&(i=i.custom),i instanceof e)r=function(e){"number"==typeof e[0]&&(e=[e]);var t,i,n,r,a="",s=e.length;for(i=0;i<s;i++){for(a+="M"+d((r=e[i])[0])+","+d(r[1])+" C",t=r.length,n=2;n<t;n++)a+=d(r[n++])+","+d(r[n++])+" "+d(r[n++])+","+d(r[n++])+" "+d(r[n++])+","+d(r[n])+" ";r.closed&&(a+="z")}return a}(function(e,t,i,n,r){for(var a,s,o,l,c,d=e.length;--d>-1;)for(s=(a=e[d]).length,o=0;o<s;o+=2)l=a[o],c=a[o+1],a[o]=l*t+0*c+n,a[o+1]=0*l+c*i+r;return e._dirty=1,e}([i.segment.slice(0)],m,-x,v,y));else{for(r=[v,y],o=1/(h=Math.max(5,200*(n.precision||1))),h+=2,p=5/h,u=f(v+o*m),a=((g=f(y+-(i(o)*x)))-y)/(u-v),s=2;s<h;s++)l=f(v+s*o*m),(Math.abs(((c=f(y+-(i(s*o)*x)))-g)/(l-u)-a)>p||s===h-1)&&(r.push(u,g),a=(c-g)/(l-u)),u=l,g=c;r="M"+r.join(",")}return w&&w.setAttribute("d",r),r},e}();w.version="3.15.0",w.headless=!0,p()&&t.registerPlugin(w),e.CustomEase=w,e.default=w,Object.defineProperty(e,"__esModule",{value:!0})}(i)},99867,(e,t,i)=>{e.e,function(e){"use strict";let t,i,n="function"==typeof Symbol?Symbol():"_split",r,a="u">typeof Intl&&"Segmenter"in Intl?new Intl.Segmenter:0,s=e=>e?"string"==typeof e?s(document.querySelectorAll(e)):"length"in e?Array.from(e).reduce((e,t)=>("string"==typeof t?e.push(...s(t)):e.push(t),e),[]):[e]:[],o=e=>s(e).filter(e=>e&&1===e.nodeType),l=[],c=function(){},d={add:e=>e()},h=/\s+/g,p=RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),u={left:0,top:0,width:0,height:0},f=(e,t)=>{for(;++t<e.length&&e[t]===u;);return e[t]||u},g=({element:e,html:t,ariaL:i,ariaH:n})=>{e.innerHTML=t,i?e.setAttribute("aria-label",i):e.removeAttribute("aria-label"),n?e.setAttribute("aria-hidden",n):e.removeAttribute("aria-hidden")},m=(e,t)=>{if(t){let i=new Set(e.join("").match(t)||l),n=e.length,r,a,s,o;if(i.size){for(;--n>-1;)for(s of(a=e[n],i))if(s.startsWith(a)&&s.length>a.length){for(r=0,o=a;s.startsWith(o+=e[n+ ++r])&&o.length<s.length;);if(r&&o.length===s.length){e[n]=s,e.splice(n+1,r);break}}}}return e},x=e=>"inline"===window.getComputedStyle(e).display&&(e.style.display="inline-block"),v=(e,t,i)=>t.insertBefore("string"==typeof e?document.createTextNode(e):e,i),y=(e,t,i)=>{let n=t[e+"sClass"]||"",{tag:r="div",aria:a="auto",propIndex:s=!1}=t,o="line"===e?"block":"inline-block",l=n.indexOf("++")>-1,c=t=>{let c=document.createElement(r),d=i.length+1;return n&&(c.className=n+(l?" "+n+d:"")),s&&c.style.setProperty("--"+e,d+""),"none"!==a&&c.setAttribute("aria-hidden","true"),"span"!==r&&(c.style.position="relative",c.style.display=o),c.textContent=t,i.push(c),c};return l&&(n=n.replace("++","")),c.collection=i,c},w=(e,t,i,n,r,s,o,c,d,p)=>{var u;let f=Array.from(e.childNodes),g=0,{wordDelimiter:y,reduceWhiteSpace:_=!0,prepareText:b}=t,E=e.getBoundingClientRect(),S=E,M=!_&&"pre"===window.getComputedStyle(e).whiteSpace.substring(0,3),C=0,k=i.collection,T,N,j,A,F,R,P,z,q,L,O,I,B,D,W,H,Y,G;for("object"==typeof y?(j=y.delimiter||y,N=y.replaceWith||""):N=""===y?"":y||" ",T=" "!==N;g<f.length;g++)if(3===(A=f[g]).nodeType){for(W=A.textContent||"",_?W=W.replace(h," "):M&&(W=W.replace(/\n/g,N+"\n")),b&&(W=b(W,e)),A.textContent=W,Y=(F=N||j?W.split(j||N):W.match(c)||l)[F.length-1],z=T?" "===Y.slice(-1):!Y,Y||F.pop(),S=E,(P=T?" "===F[0].charAt(0):!F[0])&&v(" ",e,A),F[0]||F.shift(),m(F,d),s&&p||(A.textContent=""),q=1;q<=F.length;q++)if(H=F[q-1],!_&&M&&"\n"===H.charAt(0)&&(null==(u=A.previousSibling)||u.remove(),v(document.createElement("br"),e,A),H=H.slice(1)),_||""!==H)if(" "===H)e.insertBefore(document.createTextNode(" "),A);else{if(T&&" "===H.charAt(0)&&v(" ",e,A),C&&1===q&&!P&&k.indexOf(C.parentNode)>-1?(R=k[k.length-1]).appendChild(document.createTextNode(n?"":H)):(v(R=i(n?"":H),e,A),C&&1===q&&!P&&R.insertBefore(C,R.firstChild)),n)for(O=a?m([...a.segment(H)].map(e=>e.segment),d):H.match(c)||l,G=0;G<O.length;G++)R.appendChild(" "===O[G]?document.createTextNode(" "):n(O[G]));if(s&&p){if(W=A.textContent=W.substring(H.length+1,W.length),(L=R.getBoundingClientRect()).top>S.top&&L.left<=S.left){for(I=e.cloneNode(),B=e.childNodes[0];B&&B!==R;)D=B,B=B.nextSibling,I.appendChild(D);e.parentNode.insertBefore(I,e),r&&x(I)}S=L}(q<F.length||z)&&v(q>=F.length?" ":T&&" "===H.slice(-1)?" "+N:N,e,A)}else v(N,e,A);e.removeChild(A),C=0}else 1===A.nodeType&&(o&&o.indexOf(A)>-1?(k.indexOf(A.previousSibling)>-1&&k[k.length-1].appendChild(A),C=A):(w(A,t,i,n,r,s,o,c,d,!0),C=0),r&&x(A))},_=class e{constructor(e,t){this.isSplit=!1,r||b.register(window.gsap),this.elements=o(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(e=>{var i;!1!==t.overwrite&&(null==(i=e[n])||i._data.orig.filter(({element:t})=>t===e).forEach(g)),e[n]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],a,s=()=>{let e=i.length,t;for(;e--;){let n=(t=i[e]).element.offsetWidth;if(n!==t.width){t.width=n,this._split();return}}};this._data={orig:i,obs:"u">typeof ResizeObserver&&new ResizeObserver(()=>{clearTimeout(a),a=setTimeout(s,200)})},c(this),this.split(t)}split(e){return(this._ctx||d).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:r=!0,smartWrap:a,onSplit:l,autoSplit:c=!1,specialChars:d,mask:h}=this.vars,g=t.indexOf("lines")>-1,m=t.indexOf("chars")>-1,x=t.indexOf("words")>-1,v=m&&!x&&!g,_=d&&("push"in d?RegExp("(?:"+d.join("|")+")","gu"):d),b=_?RegExp(_.source+"|"+p.source,"gu"):p,E=!!e.ignore&&o(e.ignore),{orig:S,animTime:M,obs:C}=this._data,k;(m||x||g)&&(this.elements.forEach((t,i)=>{S[i]={element:t,html:t.innerHTML,ariaL:t.getAttribute("aria-label"),ariaH:t.getAttribute("aria-hidden")},"auto"===n?t.setAttribute("aria-label",(t.textContent||"").trim()):"hidden"===n&&t.setAttribute("aria-hidden","true");let o=[],l=[],c=[],d=m?y("char",e,o):null,h=y("word",e,l),p,M,C,k;if(w(t,e,h,d,v,r&&(g||v),E,b,_,!1),g){let i,n,r=s(t.childNodes),a=(i=y("line",e,c),n=window.getComputedStyle(t).textAlign||"left",(e,a)=>{let s=i("");for(s.style.textAlign=n,t.insertBefore(s,r[e]);e<a;e++)s.appendChild(r[e]);s.normalize()}),o,l=[],d=0,h=r.map(e=>1===e.nodeType?e.getBoundingClientRect():u),g=u,m;for(p=0;p<r.length;p++)1===(o=r[p]).nodeType&&("BR"===o.nodeName?(p&&"BR"===r[p-1].nodeName||(l.push(o),a(d,p+1)),d=p+1,g=f(h,p)):(m=h[p],p&&m.top>g.top&&m.left<g.left+g.width-1&&(a(d,p),d=p),g=m));d<p&&a(d,p),l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})}if(!x){for(p=0;p<l.length;p++)if(M=l[p],m||!M.nextSibling||3!==M.nextSibling.nodeType)if(a&&!g){for((C=document.createElement("span")).style.whiteSpace="nowrap";M.firstChild;)C.appendChild(M.firstChild);M.replaceWith(C)}else M.replaceWith(...M.childNodes);else(k=M.nextSibling)&&3===k.nodeType&&(k.textContent=(M.textContent||"")+(k.textContent||""),M.remove());l.length=0,t.normalize()}this.lines.push(...c),this.words.push(...l),this.chars.push(...o)}),h&&this[h]&&this.masks.push(...this[h].map(e=>{let t=e.cloneNode();return e.replaceWith(t),t.appendChild(e),e.className&&(t.className=e.className.trim().split(" ").map(e=>e+"-mask").join(" ")),t.style.overflow="clip",t}))),this.isSplit=!0,i&&g&&c&&i.addEventListener("loadingdone",this._split),(k=l&&l(this))&&k.totalTime&&(this._data.anim=M?k.totalTime(M):k),g&&c&&this.elements.forEach((e,t)=>{S[t].width=e.offsetWidth,C&&C.observe(e)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),null==i||i.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(g),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),null==(t=(e=this.vars).onRevert)||t.call(e,this)}return this}static create(t,i){return new e(t,i)}static register(e){(t=t||e||window.gsap)&&(s=t.utils.toArray,c=t.core.context||c),!r&&window.innerWidth>0&&(i=document.fonts,r=!0)}};_.version="3.15.0";let b=_;e.SplitText=b,e.default=b,Object.defineProperty(e,"__esModule",{value:!0})}(i)},25447,e=>{"use strict";var t=e.i(38935),i=e.i(46585),n=e.i(32919),r=e.i(48937),a=e.i(51904),s=e.i(99867),o=e.i(35274);n.gsap.registerPlugin(r.useGSAP,a.ScrollTrigger,s.SplitText,o.CustomEase),o.CustomEase.create("zeusAnnimate","M0,0 C0.3,0.9 0.1,1 1,1");let l=[{src:"/assets/annnimate/product_tennis-racket_02.jpg",alt:"Tennis racket detail",aspect:"portrait_lg"},{src:"/assets/annnimate/product_tennis-racket_05.jpg",alt:"Tennis racket detail",aspect:"portrait_md"},{src:"/assets/annnimate/product_football-boot_01.jpg",alt:"Football boot",aspect:"portrait_sm"},{src:"/assets/annnimate/product_half-zip_01.jpg",alt:"Half-zip top",aspect:"portrait_lg",hideMobile:!0},{src:"/assets/annnimate/product_shoe_01.jpg",alt:"Running shoe",aspect:"portrait_md"},{src:"/assets/annnimate/product_ball_02.jpg",alt:"Ball detail",aspect:"portrait_sm",hideMobile:!0},{src:"/assets/annnimate/product_tennis-net_01.jpg",alt:"Tennis net",aspect:"portrait_lg",hideMobile:!0},{src:"/assets/annnimate/product_football-boot_06.jpg",alt:"Football boot, side view",aspect:"landscape_lg"},{src:"/assets/annnimate/product_shoe_06.jpg",alt:"Sneaker, side view",aspect:"landscape_sm",hideMobile:!0},{src:"/assets/annnimate/texture_tennis-macro_01.jpg",alt:"Tennis ball macro texture",aspect:"square_lg"},{src:"/assets/annnimate/scatter_ball-rackets_01.jpg",alt:"Ball and rackets",aspect:"square_sm",hideMobile:!0},{src:"/assets/annnimate/texture_fabric-macro_01.jpg",alt:"Fabric macro texture",aspect:"square_sm"}];function c(e){return e*e*(3-2*e)}function d(e){return e<0?0:e>1?1:e}function h({className:e="",images:o=l,headline:p="Everything else is noise.",support:u="Focus is what remains when the season strips away everything you do not need.",duration:f=10,depth:g=2e3,speed:m=1,scrollBoost:x=3.5,pan:v=40,holeBuffer:y=120}){let w=(0,i.useRef)(null),_=(0,i.useRef)(null),b=(0,i.useRef)(null),E=(0,i.useRef)(null),S=(0,i.useRef)(null),M=(0,i.useRef)([]);M.current=[];let[C,k]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(()=>k(!0))},[]);let T=(0,i.useCallback)(e=>{e&&!M.current.includes(e)&&M.current.push(e)},[]);return(0,r.useGSAP)(()=>{let e,t,i,r=w.current,o=_.current,l=b.current,h=E.current,p=S.current,u=Array.from(o?.querySelectorAll("[data-anm-ifi-card]")||[]);if(!r||!o||!u.length)return;let M=window.matchMedia("(prefers-reduced-motion: reduce)"),k=window.matchMedia("(pointer: coarse)").matches,T=M.matches,N=r.clientWidth,j=r.clientHeight,A=1,F=window.scrollY||window.pageYOffset||0,R=!1,P=[],z=[],q=0,L=0,O=parseFloat(getComputedStyle(r).perspective)||1200,I=[],B=[];function D(){if(q=0,L=0,!l)return;let e=l.getBoundingClientRect();e.width&&e.height&&(q=Math.min(e.width/2+y,.42*N),L=Math.min(e.height/2+y,.35*j))}function W(){u.forEach((e,t)=>{I[t]=e.offsetWidth/2,B[t]=e.offsetHeight/2})}function H(e,t,i){let n=function(e,t){let i,n,r=0;do i=Math.random()-.5,n=Math.random()-.5,r+=1;while(Math.abs(i)*N<q+e&&Math.abs(n)*j<L+t&&r<12)return{xFrac:i,yFrac:n}}(I[i]||0,B[i]||0);e.xFrac=n.xFrac,e.yFrac=n.yFrac,e.progress=t||0}function Y(){if(!R)return;let i=n.gsap.ticker.deltaRatio(60)/60,r=m*A/f;A+=(1-A)*.06;let a=400- -g,s=e&&Number(n.gsap.getProperty(o,"x"))||0,l=t&&Number(n.gsap.getProperty(o,"y"))||0;for(let e=0;e<P.length;e++){let t=P[e];t.progress+=r*i,t.progress>=1&&H(t,t.progress-1,e);let n=-g+t.progress*a,o=(n<=-g?0:n<-200?c(d((n+g)/(-200+g))):n<=-80?1:n<400?1-c(d((n- -80)/480)):0)*function(e,t,i,n){if(!q&&!L)return 1;let r=O/(O-t),a=P[e],s=(a.xFrac*N+i)*r,o=(a.yFrac*j+n)*r;return c(d(Math.max(Math.abs(s)-(q+(I[e]||0)*r),Math.abs(o)-(L+(B[e]||0)*r))/80))}(e,n,s,l);z[e].x(t.xFrac*N),z[e].y(t.yFrac*j),z[e].z(n),z[e].opacity(o)}}function G(){R||(R=!0,n.gsap.ticker.add(Y))}function V(){R=!1,n.gsap.ticker.remove(Y)}function J(i){let n=r.getBoundingClientRect(),a=(i.clientX-n.left)/n.width*2-1,s=(i.clientY-n.top)/n.height*2-1;e(a*v),t(s*v*.8)}function U(){e(0),t(0)}function $(){let e=window.scrollY||window.pageYOffset||0,t=Math.abs(e-F);F=e,x>0&&(A=Math.max(A,1+Math.min(t/60,1)*(x-1)))}function K(){clearTimeout(i),i=setTimeout(()=>{N=r.clientWidth,j=r.clientHeight,D(),W(),a.ScrollTrigger.refresh()},150)}k||T||!(v>0)||(e=n.gsap.quickTo(o,"x",{duration:1.2,ease:"power3.out"}),t=n.gsap.quickTo(o,"y",{duration:1.2,ease:"power3.out"}),r.addEventListener("pointermove",J),r.addEventListener("pointerleave",U)),window.addEventListener("scroll",$,{passive:!0}),window.addEventListener("resize",K);let Q=!0,X=null;function Z(){document.hidden?V():Q&&!T&&G()}"IntersectionObserver"in window&&(X=new IntersectionObserver(e=>{e.forEach(e=>{(Q=e.isIntersecting)&&!document.hidden&&!T?G():V()})},{threshold:0})).observe(r),document.addEventListener("visibilitychange",Z);let ee=null,et=null,ei=null,en=null,er=0;if(C&&h){ee=s.SplitText.create(h,{type:"lines",mask:"lines",linesClass:"ifi_headline_line"}),p&&(et=s.SplitText.create(p,{type:"lines",mask:"lines",linesClass:"ifi_support_line"}));let e=ee.lines,t=et?et.lines:[];n.gsap.set(e,{yPercent:110,y:0}),t.length&&n.gsap.set(t,{yPercent:110,y:0}),(ei=n.gsap.timeline({paused:!0,defaults:{ease:"zeusAnnimate",force3D:!0}})).fromTo(e,{yPercent:110,y:0},{yPercent:0,y:0,duration:1.1,stagger:.08}),t.length&&ei.fromTo(t,{yPercent:110,y:0},{yPercent:0,y:0,duration:.9,stagger:.05},"-=0.6"),er=requestAnimationFrame(()=>{let e;(e=r.getBoundingClientRect()).top<r.clientHeight&&e.bottom>0?T?ei.progress(1):ei.restart():en=a.ScrollTrigger.create({trigger:r,start:"top 80%",once:!0,onEnter:()=>ei.restart()}),a.ScrollTrigger.refresh()})}return n.gsap.set(u,{xPercent:-50,yPercent:-50,force3D:!0,willChange:"transform, opacity"}),n.gsap.set(o,{force3D:!0}),l&&n.gsap.set(l,{force3D:!0}),D(),W(),P.length=0,z.length=0,u.forEach((e,t)=>{let i={xFrac:0,yFrac:0,progress:t/u.length};P.push(i),H(i,t/u.length,t),z.push({x:n.gsap.quickSetter(e,"x","px"),y:n.gsap.quickSetter(e,"y","px"),z:n.gsap.quickSetter(e,"z","px"),opacity:n.gsap.quickSetter(e,"opacity")})}),T?(u.forEach((e,t)=>{let i=P[t];n.gsap.set(e,{x:i.xFrac*N,y:i.yFrac*j,z:-200,opacity:.9})}),ei&&ei.progress(1)):G(),()=>{V(),cancelAnimationFrame(er),clearTimeout(i),e?.tween?.kill(),t?.tween?.kill(),window.removeEventListener("scroll",$),window.removeEventListener("resize",K),r.removeEventListener("pointermove",J),r.removeEventListener("pointerleave",U),document.removeEventListener("visibilitychange",Z),X&&X.disconnect(),ei&&ei.kill(),en&&en.kill(),ee&&ee.revert(),et&&et.revert()}},{scope:w,revertOnUpdate:!0,dependencies:[C,o,p,u,f,g,m,x,v,y]}),(0,t.jsxs)("section",{ref:w,className:`ifi_section${e?" "+e:""}`,"data-anm-image-fly-in":!0,children:[(0,t.jsx)("div",{ref:_,className:"ifi_stage","data-anm-ifi-stage":!0,children:o.map((e,i)=>(0,t.jsx)("div",{ref:T,className:`ifi_card ifi_card_${e.aspect}${e.hideMobile?" ifi_card_hide_mobile":""}`,"data-anm-ifi-card":!0,children:(0,t.jsx)("img",{className:"ifi_card_img",src:e.src,alt:e.alt||""})},e.src+i))}),(0,t.jsxs)("div",{ref:b,className:"ifi_content","data-anm-ifi-content":!0,children:[(0,t.jsx)("h2",{ref:E,className:"ifi_headline","data-anm-ifi-headline":!0,children:p}),u?(0,t.jsx)("p",{ref:S,className:"ifi_support","data-anm-ifi-support":!0,children:u}):null]})]})}let p=`/* Image Fly-In
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
`;e.s(["ImageFlyIn",0,function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:p}),(0,t.jsx)(h,{...e})]})}],25447)}]);