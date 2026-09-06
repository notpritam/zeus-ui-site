(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48937,e=>{"use strict";var t=e.i(46585),a=e.i(32919);let r="u">typeof document?t.useLayoutEffect:t.useEffect,i=e=>e&&!Array.isArray(e)&&"object"==typeof e,n=[],l={},s=a.default,o=(e,a=n)=>{let o=l;i(e)?(o=e,e=null,a="dependencies"in o?o.dependencies:n):i(a)&&(a="dependencies"in(o=a)?o.dependencies:n),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");let{scope:c,revertOnUpdate:d}=o,u=(0,t.useRef)(!1),m=(0,t.useRef)(s.context(()=>{},c)),p=(0,t.useRef)(e=>m.current.add(null,e)),h=a&&a.length&&!d;return h&&r(()=>(u.current=!0,()=>m.current.revert()),n),r(()=>{if(e&&m.current.add(e,c),!h||!u.current)return()=>m.current.revert()},a),{context:m.current,contextSafe:p.current}};o.register=e=>{s=e},o.headless=!0,e.s(["useGSAP",0,o])},35274,(e,t,a)=>{e.e,function(e){"use strict";var t,a,r=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,i=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,n=Math.PI/180,l=Math.sin,s=Math.cos,o=Math.abs,c=Math.sqrt,d=function(e){return Math.round(1e5*e)/1e5||0},u=function(e){return e.closed=.001>Math.abs(e[0]-e[e.length-2])&&.001>Math.abs(e[1]-e[e.length-1])},m=function(){return t||"u">typeof window&&(t=window.gsap)&&t.registerPlugin&&t},p=function(){(t=m())?(t.registerEase("_CE",y.create),a=1):console.warn("Please gsap.registerPlugin(CustomEase)")},h=function(e){return~~(1e3*e+(e<0?-.5:.5))/1e3},g=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,x=/[cLlsSaAhHvVtTqQ]/g,f=function(e){var t,a=e.length,r=1e20;for(t=1;t<a;t+=6)+e[t]<r&&(r=+e[t]);return r},b=function(e,t,a){a||0===a||(a=Math.max(+e[e.length-1],+e[1]));var r,i=-1*e[0],n=-a,l=e.length,s=1/(+e[l-2]+i),o=-t||(Math.abs(e[l-1]-e[1])<.01*(e[l-2]-e[0])?f(e)+n:+e[l-1]+n);for(o=o?1/o:-s,r=0;r<l;r+=2)e[r]=(+e[r]+i)*s,e[r+1]=(+e[r+1]+n)*o},v=function e(t,a,r,i,n,l,s,o,c,d,u){var m,p=(t+r)/2,h=(a+i)/2,g=(r+n)/2,x=(i+l)/2,f=(n+s)/2,b=(l+o)/2,v=(p+g)/2,y=(h+x)/2,D=(g+f)/2,w=(x+b)/2,j=(v+D)/2,C=(y+w)/2,_=s-t,k=o-a,N=Math.abs((r-s)*k-(i-o)*_),E=Math.abs((n-s)*k-(l-o)*_);return d||(d=[{x:t,y:a},{x:s,y:o}],u=1),d.splice(u||d.length-1,0,{x:j,y:C}),(N+E)*(N+E)>c*(_*_+k*k)&&(m=d.length,e(t,a,p,h,v,y,j,C,c,d,u),e(j,C,D,w,f,b,s,o,c,d,u+1+(d.length-m))),d},y=function(){function e(e,t,r){a||p(),this.id=e,this.setData(t,r)}var m=e.prototype;return m.setData=function(e,a){a=a||{};var d,m,p,h,f,y,D,w,j,C=(e=e||"0,0,1,1").match(g),_=1,k=[],N=[],E=a.precision||1,A=E<=1;if(this.data=e,(x.test(e)||~e.indexOf("M")&&0>e.indexOf("C"))&&(C=function(e){var t,a,d,m,p,h,g,x,f,b,v,y,D,w,j,C=(e+"").replace(i,function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t}).match(r)||[],_=[],k=0,N=0,E=2/3,A=C.length,S=0,R="ERROR: malformed path: "+e,F=function(e,t,a,r){b=(a-e)/3,v=(r-t)/3,g.push(e+b,t+v,a-b,r-v,a,r)};if(!e||!isNaN(C[0])||isNaN(C[1]))return console.log(R),_;for(t=0;t<A;t++)if(D=p,isNaN(C[t])?h=(p=C[t].toUpperCase())!==C[t]:t--,d=+C[t+1],m=+C[t+2],h&&(d+=k,m+=N),t||(x=d,f=m),"M"===p)g&&(g.length<8?_.length-=1:S+=g.length,u(g)),k=x=d,N=f=m,g=[d,m],_.push(g),t+=2,p="L";else if("C"===p)g||(g=[0,0]),h||(k=N=0),g.push(d,m,k+ +C[t+3],N+ +C[t+4],k+=+C[t+5],N+=+C[t+6]),t+=6;else if("S"===p)b=k,v=N,("C"===D||"S"===D)&&(b+=k-g[g.length-4],v+=N-g[g.length-3]),h||(k=N=0),g.push(b,v,d,m,k+=+C[t+3],N+=+C[t+4]),t+=4;else if("Q"===p)b=k+(d-k)*E,v=N+(m-N)*E,h||(k=N=0),k+=+C[t+3],N+=+C[t+4],g.push(b,v,k+(d-k)*E,N+(m-N)*E,k,N),t+=4;else if("T"===p)b=k-g[g.length-4],v=N-g[g.length-3],g.push(k+b,N+v,d+(k+1.5*b-d)*E,m+(N+1.5*v-m)*E,k=d,N=m),t+=2;else if("H"===p)F(k,N,k=d,N),t+=1;else if("V"===p)F(k,N,k,N=d+(h?N-k:0)),t+=1;else if("L"===p||"Z"===p)"Z"===p&&(d=x,m=f,g.closed=!0),("L"===p||o(k-d)>.5||o(N-m)>.5)&&(F(k,N,d,m),"L"===p&&(t+=2)),k=d,N=m;else if("A"===p){if(w=C[t+4],j=C[t+5],b=C[t+6],v=C[t+7],a=7,w.length>1&&(w.length<3?(v=b,b=j,a--):(v=j,b=w.substr(2),a-=2),j=w.charAt(1),w=w.charAt(0)),y=function(e,t,a,r,i,d,u,m,p){if(e!==m||t!==p){a=o(a),r=o(r);var h=i%360*n,g=s(h),x=l(h),f=Math.PI,b=2*f,v=(e-m)/2,y=(t-p)/2,D=g*v+x*y,w=-x*v+g*y,j=D*D,C=w*w,_=j/(a*a)+C/(r*r);_>1&&(a=c(_)*a,r=c(_)*r);var k=a*a,N=r*r,E=(k*N-k*C-N*j)/(k*C+N*j);E<0&&(E=0);var A=(d===u?-1:1)*c(E),S=a*w/r*A,R=-(r*D/a*A),F=(e+m)/2+(g*S-x*R),T=(t+p)/2+(x*S+g*R),M=(D-S)/a,L=(w-R)/r,z=(-D-S)/a,B=(-w-R)/r,P=M*M+L*L,I=(L<0?-1:1)*Math.acos(M/c(P)),O=(M*B-L*z<0?-1:1)*Math.acos((M*z+L*B)/c(P*(z*z+B*B)));isNaN(O)&&(O=f),!u&&O>0?O-=b:u&&O<0&&(O+=b),I%=b;var $,G=Math.ceil(o(O%=b)/(b/4)),H=[],U=O/G,W=4/3*l(U/2)/(1+s(U/2)),J=g*a,q=x*a,Y=-(x*r),V=g*r;for($=0;$<G;$++)D=s(i=I+$*U),w=l(i),M=s(i+=U),L=l(i),H.push(D-W*w,w+W*D,M+W*L,L-W*M,M,L);for($=0;$<H.length;$+=2)D=H[$],w=H[$+1],H[$]=D*J+w*Y+F,H[$+1]=D*q+w*V+T;return H[$-2]=m,H[$-1]=p,H}}(k,N,+C[t+1],+C[t+2],+C[t+3],+w,+j,(h?k:0)+ +b,(h?N:0)+ +v),t+=a,y)for(a=0;a<y.length;a++)g.push(y[a]);k=g[g.length-2],N=g[g.length-1]}else console.log(R);return(t=g.length)<6?(_.pop(),t=0):u(g),_.totalPoints=S+t,_}(e)[0]),4===(d=C.length))C.unshift(0,0),C.push(1,1),d=8;else if((d-2)%6)throw"Invalid CustomEase";for((0!=+C[0]||1!=+C[d-2])&&b(C,a.height,a.originY),this.segment=C,h=2;h<d;h+=6)m={x:+C[h-2],y:+C[h-1]},p={x:+C[h+4],y:+C[h+5]},k.push(m,p),v(m.x,m.y,+C[h],+C[h+1],+C[h+2],+C[h+3],p.x,p.y,1/(2e5*E),k,k.length-1);for(d=k.length,h=0;h<d;h++)D=k[h],w=k[h-1]||D,(D.x>w.x||w.y!==D.y&&w.x===D.x||D===w)&&D.x<=1?(w.cx=D.x-w.x,w.cy=D.y-w.y,w.n=D,w.nx=D.x,A&&h>1&&Math.abs(w.cy/w.cx-k[h-2].cy/k[h-2].cx)>2&&(A=0),w.cx<_&&(w.cx?_=w.cx:(w.cx=.001,h===d-1&&(w.x-=.001,_=Math.min(_,.001),A=0)))):(k.splice(h--,1),d--);if(f=1/(d=1/_+1|0),y=0,D=k[0],A){for(h=0;h<d;h++)j=h*f,D.nx<j&&(D=k[++y]),m=D.y+(j-D.x)/D.cx*D.cy,N[h]={x:j,cx:f,y:m,cy:0,nx:9},h&&(N[h-1].cy=m-N[h-1].y);y=k[k.length-1],N[d-1].cy=y.y-m,N[d-1].cx=y.x-N[N.length-1].x}else{for(h=0;h<d;h++)D.nx<h*f&&(D=k[++y]),N[h]=D;y<k.length-1&&(N[h-1]=k[k.length-2])}return this.ease=function(e){var t=N[e*d|0]||N[d-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},this.ease.custom=this,this.id&&t&&t.registerEase(this.id,this.ease),this},m.getSVGData=function(t){return e.getSVGData(this,t)},e.create=function(t,a,r){return new e(t,a,r).ease},e.register=function(e){t=e,p()},e.get=function(e){return t.parseEase(e)},e.getSVGData=function(a,r){var i,n,l,s,o,c,u,m,p,g,x=(r=r||{}).width||100,f=r.height||100,b=r.x||0,v=(r.y||0)+f,y=t.utils.toArray(r.path)[0];if(r.invert&&(f=-f,v=0),"string"==typeof a&&(a=t.parseEase(a)),a.custom&&(a=a.custom),a instanceof e)i=function(e){"number"==typeof e[0]&&(e=[e]);var t,a,r,i,n="",l=e.length;for(a=0;a<l;a++){for(n+="M"+d((i=e[a])[0])+","+d(i[1])+" C",t=i.length,r=2;r<t;r++)n+=d(i[r++])+","+d(i[r++])+" "+d(i[r++])+","+d(i[r++])+" "+d(i[r++])+","+d(i[r])+" ";i.closed&&(n+="z")}return n}(function(e,t,a,r,i){for(var n,l,s,o,c,d=e.length;--d>-1;)for(l=(n=e[d]).length,s=0;s<l;s+=2)o=n[s],c=n[s+1],n[s]=o*t+0*c+r,n[s+1]=0*o+c*a+i;return e._dirty=1,e}([a.segment.slice(0)],x,-f,b,v));else{for(i=[b,v],s=1/(u=Math.max(5,200*(r.precision||1))),u+=2,m=5/u,p=h(b+s*x),n=((g=h(v+-(a(s)*f)))-v)/(p-b),l=2;l<u;l++)o=h(b+l*s*x),(Math.abs(((c=h(v+-(a(l*s)*f)))-g)/(o-p)-n)>m||l===u-1)&&(i.push(p,g),n=(c-g)/(o-p)),p=o,g=c;i="M"+i.join(",")}return y&&y.setAttribute("d",i),i},e}();y.version="3.15.0",y.headless=!0,m()&&t.registerPlugin(y),e.CustomEase=y,e.default=y,Object.defineProperty(e,"__esModule",{value:!0})}(a)},907,(e,t,a)=>{e.e,function(e){"use strict";var t=/(?:^\s+|\s+$)/g,a=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function r(e){var t=e.nodeType,a="";if(1===t||9===t||11===t)if("string"==typeof e.textContent)return e.textContent;else for(e=e.firstChild;e;e=e.nextSibling)a+=r(e);else if(3===t||4===t)return e.nodeValue;return a}function i(e,r,i,n,l){if(e+="",i&&(e=e.trim?e.trim():e.replace(t,"")),r&&""!==r)return e.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(r);for(var s,o,c=[],d=e.length,u=0;u<d;u++)((o=e.charAt(u)).charCodeAt(0)>=55296&&56319>=o.charCodeAt(0)||e.charCodeAt(u+1)>=65024&&65039>=e.charCodeAt(u+1))&&(s=((e.substr(u,12).split(a)||[])[1]||"").length||2,o=e.substr(u,s),c.emoji=1,u+=s-1),c.push(l?o:">"===o?"&gt;":"<"===o?"&lt;":n&&" "===o&&(" "===e.charAt(u-1)||" "===e.charAt(u+1))?"&nbsp;":o);return c}var n,l,s=function(){function e(e){this.chars=i(e),this.sets=[],this.length=50;for(var t=0;t<20;t++)this.sets[t]=d(80,this.chars)}return e.prototype.grow=function(e){for(var t=0;t<20;t++)this.sets[t]+=d(e-this.length,this.chars);this.length=e},e}(),o=function(){return n||"u">typeof window&&(n=window.gsap)&&n.registerPlugin&&n},c=/\s+/g,d=function(e,t){for(var a=t.length,r="";--e>-1;)r+=t[~~(Math.random()*a)];return r},u="ABCDEFGHIJKLMNOPQRSTUVWXYZ",m=u.toLowerCase(),p={upperCase:new s(u),lowerCase:new s(m),upperAndLowerCase:new s(u+m)},h=function(){l=n=o()},g={version:"3.15.0",name:"scrambleText",register:function(e,t,a){n=e,h()},init:function(e,t,a,n,o){if(l||h(),this.prop="innerHTML"in e?"innerHTML":"textContent"in e?"textContent":0,this.prop){this.target=e,"object"!=typeof t&&(t={text:t});var d,u,m,g,x=t.text||t.value||"",f=!1!==t.trim;return this.delimiter=d=t.delimiter||"",this.original=i(r(e).replace(c," ").split("&nbsp;").join(""),d,f),("{original}"===x||!0===x||null==x)&&(x=this.original.join(d)),this.text=i((x||"").replace(c," "),d,f),this.hasClass=!!(t.newClass||t.oldClass),this.newClass=t.newClass,this.oldClass=t.oldClass,g=""===d,this.textHasEmoji=g&&!!this.text.emoji,this.charsHaveEmoji=!!t.chars&&!!i(t.chars).emoji,this.length=g?this.original.length:this.original.join(d).length,this.lengthDif=(g?this.text.length:this.text.join(d).length)-this.length,this.fillChar=t.fillChar||t.chars&&~t.chars.indexOf(" ")?"&nbsp;":"",this.charSet=m=p[t.chars||"upperCase"]||new s(t.chars),this.speed=.05/(t.speed||1),this.prevScrambleTime=0,this.setIndex=20*Math.random()|0,(u=this.length+Math.max(this.lengthDif,0))>m.length&&m.grow(u),this.chars=m.sets[this.setIndex],this.revealDelay=t.revealDelay||0,this.tweenLength=!1!==t.tweenLength,this.tween=a,this.rightToLeft=!!t.rightToLeft,this._props.push("scrambleText","text"),1}},render:function(e,t){var a,r,n,l,s,o,c,d,u,m,p,h=t.target,g=t.prop,x=t.text,f=t.delimiter,b=t.tween,v=t.prevScrambleTime,y=t.revealDelay,D=t.setIndex,w=t.chars,j=t.charSet,C=t.length,_=t.textHasEmoji,k=t.charsHaveEmoji,N=t.lengthDif,E=t.tweenLength,A=t.oldClass,S=t.newClass,R=t.rightToLeft,F=t.fillChar,T=t.speed,M=t.original,L=t.hasClass,z=x.length,B=b._time,P=B-v;y&&(b._from&&(B=b._dur-B),e=0===B?0:B<y?1e-6:B===b._dur?1:b._ease((B-y)/(b._dur-y))),e<0?e=0:e>1&&(e=1),R&&(e=1-e),a=~~(e*z+.5),e?((P>T||P<-T)&&(t.setIndex=D=(D+(19*Math.random()|0))%20,t.chars=j.sets[D],t.prevScrambleTime+=P),l=w):l=M.join(f),p=b._from?e:1-e,m=C+(E?b._from?p*p*p:1-p*p*p:1)*N,R?1===e&&(b._from||"isFromStart"===b.data)?(n="",l=M.join(f)):(c=x.slice(a).join(f),n=k?i(l).slice(0,m-(_?i(c):c).length+.5|0).join(""):l.substr(0,m-(_?i(c):c).length+.5|0),l=c):(n=x.slice(0,a).join(f),r=(_?i(n):n).length,l=k?i(l).slice(r,m+.5|0).join(""):l.substr(r,m-r+.5|0)),L?(d=R?A:S,u=R?S:A,c=((s=d&&0!==a)?"<span class='"+d+"'>":"")+n+(s?"</span>":"")+((o=u&&a!==z)?"<span class='"+u+"'>":"")+f+l+(o?"</span>":"")):c=n+f+l,h[g]="&nbsp;"===F&&~c.indexOf("  ")?c.split("  ").join("&nbsp;&nbsp;"):c}};g.emojiSafeSplit=i,g.getText=r,o()&&n.registerPlugin(g),e.ScrambleTextPlugin=g,e.default=g,Object.defineProperty(e,"__esModule",{value:!0})}(a)},82152,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),i=e.i(48937),n=e.i(51904),l=e.i(907);r.gsap.registerPlugin(i.useGSAP,n.ScrollTrigger,l.ScrambleTextPlugin),e.s(["DualScramble",0,function({text:e,className:l="",trigger:s="scroll",duration:o=.6,chars:c="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&",accentColor:d="#a4fb81",finalColor:u="currentColor",start:m="top 80%",onClick:p}){let h=(0,a.useRef)(null),g=(0,a.useRef)(null);(0,i.useGSAP)((t,a)=>{let i,l=h.current,d=g.current;if(!l||!d)return;let u=window.matchMedia("(prefers-reduced-motion: reduce)"),p=a(()=>{if(i?.kill(),d.textContent=e,u.matches||!c.length)return;let t=Array.from(e,e=>/\s/.test(e)?e:c[Math.floor(Math.random()*c.length)]??e).join("");i=r.gsap.timeline().to(d,{duration:o,scrambleText:{text:t,chars:c,speed:1,revealDelay:.1,oldClass:"z-scramble-final",newClass:"z-scramble-accent"},ease:"none"}).to(d,{duration:o,scrambleText:{text:e,chars:c,speed:1,revealDelay:.1,oldClass:"z-scramble-accent",newClass:"z-scramble-final"},ease:"none"},o/Math.max(1,e.replace(/\s/g,"").length))});"load"===s&&p();let x="scroll"===s?n.ScrollTrigger.create({trigger:l,start:m,once:!0,onEnter:p}):void 0,f="hover"===s?["pointerenter","focus"]:"click"===s?["click"]:[];return f.forEach(e=>l.addEventListener(e,p)),()=>{i?.kill(),x?.kill(),f.forEach(e=>l.removeEventListener(e,p)),d.textContent=e}},{scope:h,dependencies:[e,s,o,c,m],revertOnUpdate:!0});let x="hover"===s||"click"===s?"button":"span";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:".z-scramble{position:relative;display:inline-grid;max-width:100%;border:0;background:none;padding:0;color:inherit;font:inherit;text-align:inherit;white-space:pre-wrap;overflow-wrap:anywhere}.z-scramble>span{grid-area:1/1}.z-scramble-spacer{visibility:hidden}.z-scramble-accent{color:var(--z-scramble-accent,#a4fb81)}.z-scramble-final{color:var(--z-scramble-final,currentColor)}button.z-scramble{cursor:pointer}button.z-scramble:focus-visible{outline:2px solid currentColor;outline-offset:5px}"}),(0,t.jsxs)(x,{ref:h,type:"button"===x?"button":void 0,"aria-label":e,onClick:p,className:`z-scramble ${l}`,style:{"--z-scramble-accent":d,"--z-scramble-final":u},children:[(0,t.jsx)("span",{className:"z-scramble-spacer","aria-hidden":"true",children:e}),(0,t.jsx)("span",{ref:g,"aria-hidden":"true",children:e})]})]})}])},84677,(e,t,a)=>{e.e,function(e){"use strict";let t,a,r="function"==typeof Symbol?Symbol():"_split",i,n="u">typeof Intl&&"Segmenter"in Intl?new Intl.Segmenter:0,l=e=>e?"string"==typeof e?l(document.querySelectorAll(e)):"length"in e?Array.from(e).reduce((e,t)=>("string"==typeof t?e.push(...l(t)):e.push(t),e),[]):[e]:[],s=e=>l(e).filter(e=>e&&1===e.nodeType),o=[],c=function(){},d={add:e=>e()},u=/\s+/g,m=RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),p={left:0,top:0,width:0,height:0},h=(e,t)=>{for(;++t<e.length&&e[t]===p;);return e[t]||p},g=({element:e,html:t,ariaL:a,ariaH:r})=>{e.innerHTML=t,a?e.setAttribute("aria-label",a):e.removeAttribute("aria-label"),r?e.setAttribute("aria-hidden",r):e.removeAttribute("aria-hidden")},x=(e,t)=>{if(t){let a=new Set(e.join("").match(t)||o),r=e.length,i,n,l,s;if(a.size){for(;--r>-1;)for(l of(n=e[r],a))if(l.startsWith(n)&&l.length>n.length){for(i=0,s=n;l.startsWith(s+=e[r+ ++i])&&s.length<l.length;);if(i&&s.length===l.length){e[r]=l,e.splice(r+1,i);break}}}}return e},f=e=>"inline"===window.getComputedStyle(e).display&&(e.style.display="inline-block"),b=(e,t,a)=>t.insertBefore("string"==typeof e?document.createTextNode(e):e,a),v=(e,t,a)=>{let r=t[e+"sClass"]||"",{tag:i="div",aria:n="auto",propIndex:l=!1}=t,s="line"===e?"block":"inline-block",o=r.indexOf("++")>-1,c=t=>{let c=document.createElement(i),d=a.length+1;return r&&(c.className=r+(o?" "+r+d:"")),l&&c.style.setProperty("--"+e,d+""),"none"!==n&&c.setAttribute("aria-hidden","true"),"span"!==i&&(c.style.position="relative",c.style.display=s),c.textContent=t,a.push(c),c};return o&&(r=r.replace("++","")),c.collection=a,c},y=(e,t,a,r,i,l,s,c,d,m)=>{var p;let h=Array.from(e.childNodes),g=0,{wordDelimiter:v,reduceWhiteSpace:D=!0,prepareText:w}=t,j=e.getBoundingClientRect(),C=j,_=!D&&"pre"===window.getComputedStyle(e).whiteSpace.substring(0,3),k=0,N=a.collection,E,A,S,R,F,T,M,L,z,B,P,I,O,$,G,H,U,W;for("object"==typeof v?(S=v.delimiter||v,A=v.replaceWith||""):A=""===v?"":v||" ",E=" "!==A;g<h.length;g++)if(3===(R=h[g]).nodeType){for(G=R.textContent||"",D?G=G.replace(u," "):_&&(G=G.replace(/\n/g,A+"\n")),w&&(G=w(G,e)),R.textContent=G,U=(F=A||S?G.split(S||A):G.match(c)||o)[F.length-1],L=E?" "===U.slice(-1):!U,U||F.pop(),C=j,(M=E?" "===F[0].charAt(0):!F[0])&&b(" ",e,R),F[0]||F.shift(),x(F,d),l&&m||(R.textContent=""),z=1;z<=F.length;z++)if(H=F[z-1],!D&&_&&"\n"===H.charAt(0)&&(null==(p=R.previousSibling)||p.remove(),b(document.createElement("br"),e,R),H=H.slice(1)),D||""!==H)if(" "===H)e.insertBefore(document.createTextNode(" "),R);else{if(E&&" "===H.charAt(0)&&b(" ",e,R),k&&1===z&&!M&&N.indexOf(k.parentNode)>-1?(T=N[N.length-1]).appendChild(document.createTextNode(r?"":H)):(b(T=a(r?"":H),e,R),k&&1===z&&!M&&T.insertBefore(k,T.firstChild)),r)for(P=n?x([...n.segment(H)].map(e=>e.segment),d):H.match(c)||o,W=0;W<P.length;W++)T.appendChild(" "===P[W]?document.createTextNode(" "):r(P[W]));if(l&&m){if(G=R.textContent=G.substring(H.length+1,G.length),(B=T.getBoundingClientRect()).top>C.top&&B.left<=C.left){for(I=e.cloneNode(),O=e.childNodes[0];O&&O!==T;)$=O,O=O.nextSibling,I.appendChild($);e.parentNode.insertBefore(I,e),i&&f(I)}C=B}(z<F.length||L)&&b(z>=F.length?" ":E&&" "===H.slice(-1)?" "+A:A,e,R)}else b(A,e,R);e.removeChild(R),k=0}else 1===R.nodeType&&(s&&s.indexOf(R)>-1?(N.indexOf(R.previousSibling)>-1&&N[N.length-1].appendChild(R),k=R):(y(R,t,a,r,i,l,s,c,d,!0),k=0),i&&f(R))},D=class e{constructor(e,t){this.isSplit=!1,i||w.register(window.gsap),this.elements=s(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(e=>{var a;!1!==t.overwrite&&(null==(a=e[r])||a._data.orig.filter(({element:t})=>t===e).forEach(g)),e[r]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let a=[],n,l=()=>{let e=a.length,t;for(;e--;){let r=(t=a[e]).element.offsetWidth;if(r!==t.width){t.width=r,this._split();return}}};this._data={orig:a,obs:"u">typeof ResizeObserver&&new ResizeObserver(()=>{clearTimeout(n),n=setTimeout(l,200)})},c(this),this.split(t)}split(e){return(this._ctx||d).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:r="auto",deepSlice:i=!0,smartWrap:n,onSplit:o,autoSplit:c=!1,specialChars:d,mask:u}=this.vars,g=t.indexOf("lines")>-1,x=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,b=x&&!f&&!g,D=d&&("push"in d?RegExp("(?:"+d.join("|")+")","gu"):d),w=D?RegExp(D.source+"|"+m.source,"gu"):m,j=!!e.ignore&&s(e.ignore),{orig:C,animTime:_,obs:k}=this._data,N;(x||f||g)&&(this.elements.forEach((t,a)=>{C[a]={element:t,html:t.innerHTML,ariaL:t.getAttribute("aria-label"),ariaH:t.getAttribute("aria-hidden")},"auto"===r?t.setAttribute("aria-label",(t.textContent||"").trim()):"hidden"===r&&t.setAttribute("aria-hidden","true");let s=[],o=[],c=[],d=x?v("char",e,s):null,u=v("word",e,o),m,_,k,N;if(y(t,e,u,d,b,i&&(g||b),j,w,D,!1),g){let a,r,i=l(t.childNodes),n=(a=v("line",e,c),r=window.getComputedStyle(t).textAlign||"left",(e,n)=>{let l=a("");for(l.style.textAlign=r,t.insertBefore(l,i[e]);e<n;e++)l.appendChild(i[e]);l.normalize()}),s,o=[],d=0,u=i.map(e=>1===e.nodeType?e.getBoundingClientRect():p),g=p,x;for(m=0;m<i.length;m++)1===(s=i[m]).nodeType&&("BR"===s.nodeName?(m&&"BR"===i[m-1].nodeName||(o.push(s),n(d,m+1)),d=m+1,g=h(u,m)):(x=u[m],m&&x.top>g.top&&x.left<g.left+g.width-1&&(n(d,m),d=m),g=x));d<m&&n(d,m),o.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})}if(!f){for(m=0;m<o.length;m++)if(_=o[m],x||!_.nextSibling||3!==_.nextSibling.nodeType)if(n&&!g){for((k=document.createElement("span")).style.whiteSpace="nowrap";_.firstChild;)k.appendChild(_.firstChild);_.replaceWith(k)}else _.replaceWith(..._.childNodes);else(N=_.nextSibling)&&3===N.nodeType&&(N.textContent=(_.textContent||"")+(N.textContent||""),_.remove());o.length=0,t.normalize()}this.lines.push(...c),this.words.push(...o),this.chars.push(...s)}),u&&this[u]&&this.masks.push(...this[u].map(e=>{let t=e.cloneNode();return e.replaceWith(t),t.appendChild(e),e.className&&(t.className=e.className.trim().split(" ").map(e=>e+"-mask").join(" ")),t.style.overflow="clip",t}))),this.isSplit=!0,a&&g&&c&&a.addEventListener("loadingdone",this._split),(N=o&&o(this))&&N.totalTime&&(this._data.anim=_?N.totalTime(_):N),g&&c&&this.elements.forEach((e,t)=>{C[t].width=e.offsetWidth,k&&k.observe(e)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),null==a||a.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:a,anim:r}=this._data;this.kill(),a.forEach(g),this.chars.length=this.words.length=this.lines.length=a.length=this.masks.length=0,this.isSplit=!1,r&&(this._data.animTime=r.totalTime(),r.revert()),null==(t=(e=this.vars).onRevert)||t.call(e,this)}return this}static create(t,a){return new e(t,a)}static register(e){(t=t||e||window.gsap)&&(l=t.utils.toArray,c=t.core.context||c),!i&&window.innerWidth>0&&(a=document.fonts,i=!0)}};D.version="3.15.0";let w=D;e.SplitText=w,e.default=w,Object.defineProperty(e,"__esModule",{value:!0})}(a)},3464,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(6632),i=e.i(48545),n=e.i(52410),l=e.i(46585),s=e.i(79571);function o(e){let t=Math.abs(e);return t>=1e6?String(Math.round(e/1e6*10)/10)+"M":t>=1e3?String(Math.round(e/1e3*10)/10)+"k":String(e)}let c=(e,t)=>t>0?e/t*100:0,d=e=>Math.min(Math.max(e,0),1),u=(e,t)=>String(Math.round(1e6*d(t>0?e/t:0))/1e4)+"%",m=[6,5,3,8,7,4,1,2,9],p=(e,t)=>e.color??(e.deferred?"var(--color-chart-cursor)":"var(--color-chart-"+m[t%m.length]+")"),h=[.22,1,.36,1];function g({group:e,open:n,onToggle:c,reducedMotion:d}){let u=(0,l.useId)();return(0,t.jsxs)("li",{className:"flex flex-col",children:[(0,t.jsxs)("button",{type:"button","aria-expanded":n,"aria-controls":n?u:void 0,onClick:c,className:"-mx-2 flex cursor-pointer items-center gap-1.5 rounded-2lg px-2 py-[7px] text-left outline-none transition-colors duration-150 hover:bg-background-secondary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring motion-reduce:transition-none",children:[(0,t.jsx)(a.RiArrowRightSLine,{"aria-hidden":!0,className:(0,s.cx)("size-4 shrink-0 text-text-tertiary transition-transform duration-200 ease-out motion-reduce:transition-none",n&&"rotate-90")}),(0,t.jsx)("span",{className:"min-w-0 flex-1 truncate text-body-regular text-text-secondary",children:e.label}),(0,t.jsx)("span",{className:"text-body-regular text-text-tertiary tabular-nums",children:o(e.tokens)}),(0,t.jsx)("span",{className:"w-14 text-right text-body-regular text-text-tertiary tabular-nums",children:e.items.length})]}),(0,t.jsx)(r.AnimatePresence,{initial:!1,children:n&&(0,t.jsx)(i.motion.div,{id:u,initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.26*!d,ease:h},className:"overflow-hidden",children:(0,t.jsx)("ul",{className:"flex flex-col pb-1 pl-[22px]",children:e.items.map(e=>(0,t.jsxs)("li",{className:"flex items-center gap-2 py-1",children:[(0,t.jsx)("span",{className:"min-w-0 flex-1 truncate text-body-2-regular text-text-secondary",children:e.label}),(0,t.jsx)("span",{className:"text-body-2-regular text-text-tertiary tabular-nums",children:o(e.tokens)}),(0,t.jsx)("span",{className:"w-14","aria-hidden":!0})]},e.label))})})})]})}e.s(["AgentLimitsCard",0,function({context:e,plan:m,planHref:x,limits:f=[],defaultExpanded:b=!1,expanded:v,onExpandedChange:y,className:D}){let[w,j]=(0,l.useState)(b),[C,_]=(0,l.useState)({}),k=v??w,N=!0===(0,n.useReducedMotion)(),E=(0,l.useId)(),A=e.segments.map((e,t)=>({segment:e,index:t})).filter(({segment:e})=>!e.deferred),S=A.reduce((e,{segment:t})=>e+t.tokens,0),R=Math.max(e.max-S,0);return(0,t.jsxs)("section",{className:(0,s.cx)("flex w-full min-w-0 flex-col rounded-2xl bg-background-secondary-default px-4 pt-2.5 pb-4",D),children:[(0,t.jsxs)("button",{type:"button","aria-expanded":k,"aria-controls":k?E:void 0,onClick:function(){void 0===v&&j(!k),y?.(!k)},className:"group -mx-2 flex cursor-pointer items-center justify-between gap-3 rounded-2lg px-2 py-1 text-left outline-none transition-colors duration-150 hover:bg-background-secondary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring motion-reduce:transition-none",children:[(0,t.jsx)("span",{className:"text-body-medium text-text-secondary",children:"Context window"}),(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsxs)("span",{className:"text-body-medium whitespace-nowrap text-text-secondary tabular-nums",children:[o(S)," / ",o(e.max)," ",(0,t.jsxs)("span",{className:"text-text-primary",children:["(",Math.round(c(S,e.max)),"%)"]})]}),(0,t.jsx)(a.RiArrowDownSLine,{"aria-hidden":!0,className:(0,s.cx)("size-4 shrink-0 text-text-tertiary transition-transform duration-200 ease-out group-hover:text-text-secondary motion-reduce:transition-none",k&&"rotate-180")})]})]}),(0,t.jsx)("div",{role:"progressbar","aria-label":"Context window usage","aria-valuenow":Math.round(100*d(e.max>0?S/e.max:0)),"aria-valuemin":0,"aria-valuemax":100,className:"mt-1.5 flex h-1.5 w-full gap-px overflow-hidden rounded-full bg-chart-track",children:A.map(({segment:a,index:r})=>(0,t.jsx)("div",{className:"h-full shrink-0 transition-[width] duration-500 ease-out motion-reduce:transition-none",style:{width:u(a.tokens,e.max),backgroundColor:p(a,r)},title:a.label+" · "+o(a.tokens)},a.label))}),(0,t.jsx)(r.AnimatePresence,{initial:!1,children:k&&(0,t.jsx)(i.motion.div,{id:E,initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.32*!N,ease:h},className:"-mx-2 overflow-hidden px-2",children:(0,t.jsxs)("div",{className:"flex flex-col pt-3",children:[(0,t.jsxs)("ul",{className:"flex flex-col",children:[e.segments.map((a,r)=>(0,t.jsxs)("li",{className:"flex items-center gap-2 py-[5px]",children:[(0,t.jsx)("span",{"aria-hidden":!0,className:"size-2.5 shrink-0 rounded-[3px]",style:{backgroundColor:p(a,r)}}),(0,t.jsx)("span",{className:"min-w-0 flex-1 truncate text-body-regular text-text-primary",children:a.label}),(0,t.jsx)("span",{className:"text-body-regular text-text-tertiary tabular-nums",children:o(a.tokens)}),(0,t.jsx)("span",{className:"w-14 text-right text-body-medium text-text-primary tabular-nums",children:a.deferred?"—":c(a.tokens,e.max).toFixed(1)+"%"})]},a.label)),(0,t.jsxs)("li",{className:"flex items-center gap-2 py-[5px]",children:[(0,t.jsx)("span",{"aria-hidden":!0,className:"size-2.5 shrink-0 rounded-[3px] bg-chart-track"}),(0,t.jsx)("span",{className:"min-w-0 flex-1 truncate text-body-regular text-text-primary",children:"Free space"}),(0,t.jsx)("span",{className:"text-body-regular text-text-tertiary tabular-nums",children:o(R)}),(0,t.jsxs)("span",{className:"w-14 text-right text-body-medium text-text-primary tabular-nums",children:[c(R,e.max).toFixed(1),"%"]})]})]}),e.groups&&e.groups.length>0&&(0,t.jsx)("ul",{className:"mt-1.5 flex flex-col",children:e.groups.map(e=>(0,t.jsx)(g,{group:e,open:!0===C[e.label],onToggle:()=>_(t=>({...t,[e.label]:!t[e.label]})),reducedMotion:N},e.label))})]})})}),f.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"my-3 h-px w-full bg-separator-border-strong"}),(0,t.jsxs)("div",{className:"flex items-center justify-between gap-3 py-1",children:[(0,t.jsxs)("span",{className:"text-body-medium text-text-secondary",children:["Plan usage limits",m?" · "+m:""]}),x&&(0,t.jsx)("a",{href:x,"aria-label":"Manage plan",className:"flex size-6 items-center justify-center rounded-md text-text-tertiary outline-none transition-colors duration-150 hover:bg-background-secondary-hover hover:text-text-secondary focus-visible:ring-2 focus-visible:ring-border-focus-ring motion-reduce:transition-none",children:(0,t.jsx)(a.RiArrowRightLine,{"aria-hidden":!0,className:"size-4"})})]}),(0,t.jsx)("ul",{className:"flex flex-col gap-3 pt-1",children:f.map(e=>{let a=Math.round(100*d(e.used));return(0,t.jsxs)("li",{className:"flex flex-col gap-1.5",children:[(0,t.jsxs)("div",{className:"flex items-baseline justify-between gap-3",children:[(0,t.jsx)("span",{className:"min-w-0 truncate text-body-medium text-text-primary",children:e.label}),(0,t.jsxs)("span",{className:"flex shrink-0 items-baseline gap-2",children:[(0,t.jsx)("span",{className:"text-body-regular text-text-tertiary",children:e.resets}),(0,t.jsxs)("span",{className:"w-9 text-right text-body-medium text-text-primary tabular-nums",children:[a,"%"]})]})]}),(0,t.jsx)("div",{role:"progressbar","aria-label":e.label,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,className:"flex h-1.5 w-full gap-px overflow-hidden rounded-full bg-chart-track",children:(0,t.jsx)("div",{className:"h-full rounded-full transition-[width] duration-500 ease-out motion-reduce:transition-none",style:{width:u(e.used,1),backgroundColor:"var(--color-chart-6)"}})})]},e.label)})})]})]})},"formatTokens",0,o])},33813,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),i=e.i(48937),n=e.i(84677);function l({item:e,open:s,toggle:o,duration:c=.8,ease:d="expo.inOut",iconMode:u="both",iconRotation:m=-180,enableStagger:p=!1,staggerDuration:h=.6,staggerDelay:g=.15}){let x=(0,a.useId)(),f=(0,a.useRef)(null),b=(0,a.useRef)(null),v=(0,a.useRef)(null),y=(0,a.useRef)(null),D=(0,a.useRef)(!1);return(0,i.useGSAP)(()=>{let e,t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=!D.current||t?0:Math.max(0,c);return D.current=!0,r.gsap.to(f.current,{height:s?"auto":0,duration:a,ease:d,overwrite:!0}),r.gsap.to(b.current,{rotation:s&&"fade"!==u?m:0,duration:a,ease:d,overwrite:!0}),r.gsap.to(v.current,{opacity:s&&"rotate"!==u?0:1,duration:.5*a,overwrite:!0}),s&&p&&!t&&y.current&&(e=n.SplitText.create(y.current,{type:"lines",mask:"lines"}),r.gsap.from(e.lines,{yPercent:110,duration:h,stagger:g,ease:"expo.out"})),()=>e?.revert()},{scope:f,dependencies:[s,c,d,u,m,p,h,g],revertOnUpdate:!0}),(0,t.jsxs)("div",{className:"z-aa-item",children:[(0,t.jsxs)("button",{className:"z-aa-trigger",type:"button",id:`${x}-trigger`,"aria-controls":`${x}-panel`,"aria-expanded":s,disabled:e.disabled,onClick:o,children:[e.title,(0,t.jsxs)("svg",{ref:b,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M2 8h12",stroke:"currentColor",strokeWidth:"1.5"}),(0,t.jsx)("path",{ref:v,d:"M8 2v12",stroke:"currentColor",strokeWidth:"1.5"})]})]}),(0,t.jsx)("div",{ref:f,className:"z-aa-panel",id:`${x}-panel`,role:"region","aria-labelledby":`${x}-trigger`,"aria-hidden":!s,inert:!s,style:{height:s?"auto":0},children:(0,t.jsx)("div",{ref:y,className:"z-aa-text",children:e.content})})]})}r.gsap.registerPlugin(i.useGSAP,n.SplitText),e.s(["AnimatedAccordion",0,function({items:e,allowMultiple:r=!1,defaultOpenIds:i=[],openIds:n,onOpenChange:s,className:o="",...c}){let[d,u]=(0,a.useState)(()=>r?i:i.slice(0,1)),m=n??d;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:".z-aa{width:100%;color:var(--color-text-primary,#0c0c0c)}.z-aa-item{border-bottom:1px solid var(--color-border-secondary,#e6e6e6)}.z-aa-item:last-child{border-bottom:0}.z-aa-trigger{display:flex;width:100%;padding:20px 0;justify-content:space-between;gap:24px;align-items:center;border:0;background:none;text-align:left;color:inherit;cursor:pointer;font:500 16px/1.4 inherit;font-size:16px;font-weight:500}.z-aa-trigger:disabled{opacity:.4;cursor:default}.z-aa-trigger:focus-visible{outline:2px solid #a4fb81;outline-offset:4px}.z-aa-trigger svg{width:16px;height:16px;flex-shrink:0}.z-aa-panel{overflow:hidden}.z-aa-text{padding:0 0 20px;font-size:14px;line-height:1.6;color:var(--color-text-secondary,#737373)}"}),(0,t.jsx)("div",{className:`z-aa ${o}`,children:e.map(t=>(0,a.createElement)(l,{...c,items:e,key:t.id,item:t,open:m.includes(t.id),toggle:()=>{var e;let a;return e=t.id,a=m.includes(e)?m.filter(t=>t!==e):r?[...m,e]:[e],void(void 0===n&&u(a),s?.(a))}}))})]})}])},33905,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),i=e.i(48937),n=e.i(35274);r.gsap.registerPlugin(i.useGSAP,n.CustomEase),n.CustomEase.create("zeusAnnimate","M0,0 C0.3,0.9 0.1,1 1,1"),n.CustomEase.create("zeusAnnimateInOut","M0,0 C0.7,0 0.16,1 1,1");let l=[{name:"Club",nameClass:"prc_name_silver",monthly:20,yearly:199,popular:!1,features:["Weekly training plans","Community runs","Member pricing on kit","Monthly journal"],ctaLabel:"Join Club"},{name:"Pro",nameClass:"prc_name_champagne",monthly:55,yearly:549,popular:!0,features:["Everything in Club","Coach check-ins","Race-day crew","Recovery sessions","Early access to drops"],ctaLabel:"Join Pro"},{name:"Elite",nameClass:"prc_name_ice",monthly:119,yearly:1199,popular:!1,features:["Everything in Pro","Weekly 1:1 coaching","Physio and nutrition plan","Training camp invites","Private locker"],ctaLabel:"Join Elite"}],s={mobile:"(max-width: 479px)",landscape:"(orientation: landscape) and (max-width: 767px)",tablet:"(max-width: 991px)",desktop:"(min-width: 992px)"},o=(0,a.forwardRef)(function({className:e="",onSelectPlan:n,onPeriodChange:o,title:c="Membership",logoSrc:d="/assets/annnimate/vanta-logo-light.svg",logoAlt:u="Vanta",plans:m=l,rollDuration:p=.6,digitStagger:h=.04,toggleDuration:g=.4,shimmerDuration:x=2.4,savingsLabel:f="Save 17%",defaultPeriod:b="monthly",currency:v="EUR",showSavingsChip:y=!0,ease:D="zeusAnnimateInOut",disable:w=""},j){let C=(0,a.useRef)(null),_=(0,a.useRef)(null),k=(0,a.useRef)(null),N=(0,a.useRef)(null),E=(0,a.useRef)(null),A=(0,a.useRef)([]),S=(0,a.useRef)([]),R=(0,a.useRef)([]),F=(0,a.useRef)([]),T=(0,a.useRef)([]),M=(0,a.useRef)([]),L=(0,a.useRef)(null);(0,i.useGSAP)((e,t)=>{let a;if(!_.current||!k.current||!m.length||(w||"").split(",").map(e=>e.trim()).filter(Boolean).some(e=>{let t=s[e];return t&&window.matchMedia(t).matches}))return;let i=.35*g,n=.45*g,l="yearly"===b?"yearly":"monthly",c=l,d=!1,u=null;function j(e){return String(Math.round(e)).split("")}function z(e){let t=document.createElement("span");t.className="prc_digit_col";let a=document.createElement("span");a.className="prc_digit_roller";for(let e=0;e<=9;e++){let t=document.createElement("span");t.className="prc_digit_face",t.textContent=String(e),a.appendChild(t)}return t.appendChild(a),r.gsap.set(a,{y:-parseInt(e,10)+"em"}),t}function B(e,t){e.innerHTML="",j(t).forEach(t=>e.appendChild(z(t)))}function P(e,t){e.a.setAttribute("aria-hidden",t?"true":"false"),e.b.setAttribute("aria-hidden",t?"false":"true")}function I(e,t){if(!e.srEl)return;let a=t?e.yearly:e.monthly;e.srEl.textContent=v+" "+a+" per "+(t?"year":"month")}let O=t(function(e){if(e===c)return null;u&&(u.kill(),u=null,M.current.forEach(e=>{var t;return t=e.priceEl,void(Array.prototype.slice.call(t.querySelectorAll("[data-dropping]")).forEach(e=>e.remove()),r.gsap.set(t.children,{clearProps:"width"}))}));let t="yearly"===e;if(c=e,o?.(e),_.current.setAttribute("aria-checked",String(t)),M.current.forEach(e=>I(e,t)),d){let e=t?"left":"right";if(r.gsap.set(k.current,{transformOrigin:e+" center",x:t?"100%":"0%",scaleX:1}),M.current.forEach(e=>{B(e.priceEl,t?e.yearly:e.monthly),r.gsap.set(e.periodSwap.mask,{yPercent:t?-100:0}),P(e.periodSwap,t)}),N.current){let e=y&&t;r.gsap.set(N.current,{scale:+!!e,autoAlpha:+!!e})}return null}let a=t?"left":"right";r.gsap.set(k.current,{transformOrigin:a+" center"});let l=r.gsap.timeline({defaults:{force3D:!0},onComplete:()=>{u=null}});return u=l,l.to(k.current,{x:t?"100%":"0%",duration:g,ease:D,data:{label:"Toggle knob travels to the new position"}},0),l.to(k.current,{scaleX:1.18,duration:i,ease:"power2.out",data:{label:"Toggle knob stretches along the travel axis"}},0),l.to(k.current,{scaleX:1,duration:n,ease:"power2.inOut",data:{label:"Toggle knob snaps back to shape"}},i),N.current&&(t&&y?(r.gsap.set(N.current,{autoAlpha:1}),l.to(N.current,{scale:1,duration:.28,ease:"back.out(1.7)",data:{label:"Savings chip pops in"}},.05)):l.to(N.current,{scale:0,duration:.22400000000000003,ease:"power3.out",data:{label:"Savings chip shrinks out"},onComplete:()=>{r.gsap.set(N.current,{autoAlpha:0})}},0)),M.current.forEach((e,a)=>{let i="Card "+(a+1)+" price";!function(e,t,a,i){let n=j(a),l=Array.prototype.slice.call(t.children),s=n.length-l.length;if(s>0)for(let a=0;a<s;a++){let a=z("0");r.gsap.set(a,{width:0}),t.insertBefore(a,t.firstChild),e.to(a,{width:"0.6em",duration:p,ease:"expo.out",overwrite:!0,data:{label:i+" gains a digit"}},0)}else if(s<0)for(let t=0;t<-s;t++){let a=l[t];a.dataset.dropping="1",e.to(a,{width:0,duration:.7*p,ease:"expo.inOut",overwrite:!0,data:{label:i+" drops a digit"},onComplete:()=>{a.remove()}},0)}let o=(s<0?l.slice(-s):Array.prototype.slice.call(t.children)).map(e=>e.querySelector(".prc_digit_roller"));e.to(o,{y:e=>-parseInt(n[e],10)+"em",duration:p,ease:"expo.out",stagger:{each:h,from:"end"},force3D:!0,overwrite:!0,data:{label:i+" rolls to the new value"}},0)}(l,e.priceEl,t?e.yearly:e.monthly,i),P(e.periodSwap,t),l.to(e.periodSwap.mask,{yPercent:t?-100:0,duration:.4,ease:"zeusAnnimate",data:{label:i+" period label rolls"}},.05)}),l});if(M.current=m.map((e,t)=>(function(e){let t,a,i,n,l=A.current[e],s=S.current[e],o=R.current[e],d=F.current[e],u=T.current[e],p=m[e];if(!l||!s)return null;l.setAttribute("aria-hidden","true"),s.setAttribute("aria-hidden","true"),o&&(o.textContent=v);let h="yearly"===c,g=(s.innerHTML="",(t=document.createElement("span")).className="prc_swap",(a=document.createElement("span")).className="prc_swap_face",a.textContent="/mo",(i=document.createElement("span")).className="prc_swap_face prc_swap_face_next",i.textContent="/yr",t.appendChild(a),t.appendChild(i),s.appendChild(t),n={mask:t,a,b:i},r.gsap.set(t,{yPercent:h?-100:0}),P(n,h),n);B(l,h?p.yearly:p.monthly);let x={monthly:p.monthly,yearly:p.yearly,priceEl:l,nameEl:u,periodSwap:g,srEl:d};return I(x,h),x})(t)).filter(Boolean),!M.current.length)return;function $(){O("monthly"===c?"yearly":"monthly")}_.current.addEventListener("click",$),C.current.setAttribute("role","region"),_.current.setAttribute("role","switch"),_.current.setAttribute("aria-checked",String("yearly"===c)),_.current.setAttribute("aria-label","Billing period");let G="yearly"===c;if(r.gsap.set(k.current,{transformOrigin:(G?"left":"right")+" center",x:G?"100%":"0%",scaleX:1}),N.current){E.current&&(E.current.textContent=f);let e=y&&G;r.gsap.set(N.current,{transformOrigin:"center center",yPercent:-50,scale:+!!e,autoAlpha:+!!e})}let H=r.gsap.matchMedia();H.add("(prefers-reduced-motion: reduce)",()=>(d=!0,()=>{d=!1}));let U=M.current.map((e,t)=>(function(e,t){if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return null;let a=r.gsap.fromTo(e,{backgroundPosition:"100% 0%"},{backgroundPosition:"0% 0%",duration:x,ease:"none",repeat:-1,data:{label:"Plan name shimmer loop"}});return a.progress(t/3%1),a})(e.nameEl,t)).filter(Boolean);function W(){U.forEach(e=>e.paused(document.hidden))}return document.addEventListener("visibilitychange",W),L.current={getPeriod:()=>c,setPeriod:e=>O("yearly"===e?"yearly":"monthly"),demo:()=>{let e=O("monthly"===c?"yearly":"monthly");return a=setTimeout(()=>{c!==l&&O(l)},(g+p)*1e3+500),e}},()=>{clearTimeout(a),H.revert(),document.removeEventListener("visibilitychange",W),_.current?.removeEventListener("click",$),U.forEach(e=>e.kill()),u&&u.kill(),L.current=null}},{scope:C,revertOnUpdate:!0,dependencies:[m,p,h,g,x,f,b,v,y,D,w]});let z=(0,a.useCallback)(()=>L.current?.getPeriod?.()??b,[b]);return(0,a.useImperativeHandle)(j,()=>({refresh:()=>{},setPeriod:e=>L.current?.setPeriod?.(e),demo:()=>L.current?.demo?.()??null,getPeriod:z}),[z]),(0,t.jsxs)("section",{ref:C,className:`prc_wrap ${e}`.trim(),"data-anm-pricing":!0,children:[(0,t.jsxs)("div",{className:"prc_head",children:[d&&(0,t.jsx)("img",{className:"prc_logo",src:d,alt:u}),(0,t.jsx)("h2",{className:"prc_title",children:c})]}),(0,t.jsxs)("div",{className:"prc_toggle_row",children:[(0,t.jsxs)("button",{type:"button",className:"prc_toggle",ref:_,"data-anm-prc-toggle":!0,children:[(0,t.jsx)("span",{className:"prc_toggle_knob",ref:k,"data-anm-prc-knob":!0,"aria-hidden":"true"}),(0,t.jsx)("span",{className:"prc_toggle_label",children:"Monthly"}),(0,t.jsx)("span",{className:"prc_toggle_label",children:"Yearly"})]}),(0,t.jsx)("span",{className:"prc_chip",ref:N,"data-anm-prc-chip":!0,children:(0,t.jsx)("span",{ref:E,"data-anm-prc-chip-inner":!0})})]}),(0,t.jsx)("div",{className:"prc_cards",children:m.map((e,a)=>(0,t.jsxs)("div",{className:`prc_card${e.popular?" prc_card_popular":""}`,"data-anm-prc-card":!0,"data-anm-monthly":e.monthly,"data-anm-yearly":e.yearly,...e.popular?{"data-anm-popular":!0}:{},children:[e.popular&&(0,t.jsx)("span",{className:"prc_card_badge",children:"Popular"}),(0,t.jsx)("div",{className:`prc_card_name ${e.nameClass||""}`.trim(),"data-anm-prc-name":!0,ref:e=>{T.current[a]=e},children:e.name}),(0,t.jsxs)("div",{className:"prc_card_price",children:[(0,t.jsx)("span",{className:"prc_price_currency","data-anm-prc-currency":!0,ref:e=>{R.current[a]=e},children:v}),(0,t.jsx)("span",{className:"prc_price_value","data-anm-prc-price":!0,ref:e=>{A.current[a]=e},children:"yearly"===b?e.yearly:e.monthly}),(0,t.jsx)("span",{className:"prc_price_period","data-anm-prc-period":!0,ref:e=>{S.current[a]=e},children:"yearly"===b?"/ year":"/ month"}),(0,t.jsxs)("span",{className:"prc_price_sr","data-anm-prc-sr":!0,ref:e=>{F.current[a]=e},children:[`${e.name}: ${v} ${"yearly"===b?e.yearly:e.monthly} per ${"yearly"===b?"year":"month"}`," "]})]}),(0,t.jsx)("ul",{className:"prc_features",children:e.features.map(e=>(0,t.jsx)("li",{className:"prc_feature","data-anm-prc-feature":!0,children:e},e))}),(0,t.jsx)("button",{type:"button",onClick:()=>n?.(e,L.current?.getPeriod()||b),className:`prc_cta${e.popular?" prc_cta_popular":""}`,children:e.ctaLabel})]},e.name))})]})}),c=`

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
`,d=(0,a.forwardRef)(function(e,a){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:c}),(0,t.jsx)(o,{...e,ref:a})]})});e.s(["AnimatedPricing",0,d],33905)},76380,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),i=e.i(35274),n=e.i(48937);r.gsap.registerPlugin(n.useGSAP,i.CustomEase),i.CustomEase.get("zeusAnnimate")||i.CustomEase.create("zeusAnnimate","M0,0 C0.3,0.9 0.1,1 1,1"),i.CustomEase.get("zeusAnnimateInOut")||i.CustomEase.create("zeusAnnimateInOut","M0,0 C0.7,0 0.16,1 1,1");let l={mobile:"(max-width: 479px)",tablet:"(max-width: 991px)",landscape:"(orientation: landscape) and (max-width: 767px)",desktop:"(min-width: 992px)"},s=[{src:"/assets/annnimate/hero_run_02.jpg",alt:"Runner silhouetted mid-stride against a bright wall",title:"Drive",label:"Chapter 01"},{src:"/assets/annnimate/action_cyclist-climb_02.jpg",alt:"Cyclist climbing in motion blur against a warm backdrop",title:"Endurance",label:"Chapter 02"},{src:"/assets/annnimate/hero_profile_02.jpg",alt:"Athlete in profile against a bright orange field",title:"Focus",label:"Chapter 03"}];function o(e){return String(e+1).padStart(2,"0")}function c(e,t,a){let r=document.createElement("span");return r.className=t,e.split("").forEach(e=>{let t=document.createElement("span");t.className=a,t.textContent=" "===e?" ":e,r.appendChild(t)}),r}function d(e,t,a,r){e.innerHTML="";let i=c(t,a,r);return e.appendChild(i),Array.from(i.querySelectorAll("."+r))}function u(e,t,a,i,n,l){let s=e.querySelector("."+a+":not(.cs_line_out)");if(s){s.classList.add("cs_line_out");let e=s.querySelectorAll("."+i);r.gsap.to(e,Object.assign({onComplete:()=>{s.remove()}},n))}let o=c(t,a,i);e.appendChild(o);let d=Array.from(o.querySelectorAll("."+i));return r.gsap.set(d,l.from),r.gsap.to(d,l.to),d}function m(e,t,a){let r=e.clientWidth||1,i=[];for(let e=0;e<=a;e++)i.push(Math.round(e*r/a));t.forEach(e=>{for(let t=0;t<a;t++){let n=e.strips[t],l=e.inners[t],s=+(t<a-1);n.style.left=i[t]+"px",n.style.width=i[t+1]-i[t]+s+"px",l.style.left=-i[t]+"px",l.style.width=r+"px"}})}function p(e,t){e.style.visibility=t?"":"hidden"}function h(e){for(let t=0;t<e.strips.length;t++)e.strips[t].style.clipPath="none",e.strips[t].style.removeProperty("--csc")}function g({className:e="",images:i=s,duration:c=1.1,ease:x="zeusAnnimate",columns:f=12,auto:b=0,drag:v=!0,stagger:y=.0125,disable:D,onChange:w}){let j=(0,a.useRef)(null),C=(0,a.useRef)(null),_=(0,a.useRef)(null),k=(0,a.useRef)(null),N=(0,a.useRef)(null),E=(0,a.useRef)(null),A=(0,a.useRef)(null),S=(0,a.useRef)(null),R=(0,a.useRef)(null),F=Math.max(2,Math.min(24,parseInt(f,10)||12)),T="zeusAnnimate"===x||"zeusAnnimateInOut"===x?x:x||"expo.out",M=.8*c,L=(0,a.useRef)(0),z=(0,a.useRef)(null),B=(0,a.useRef)(0),P=(0,a.useRef)(0),I=(0,a.useRef)(null),O=(0,a.useRef)(0),$=(0,a.useRef)(0),G=(0,a.useRef)(!1),H=(0,a.useRef)(1),U=(0,a.useRef)(null),W=(0,a.useRef)(null),J=(0,a.useRef)(!1),q=(0,a.useCallback)(()=>{let e=z.current;e&&(e.liveRegion.textContent="Slide "+(L.current+1)+" of "+i.length+": "+i[L.current].title)},[i]),Y=(0,a.useCallback)(()=>{var e,t,a;let n,l,s=z.current;if(!s)return;let c=i[L.current],u=d(s.titleEl,c.title||"","cs_title_line","cs_title_char");r.gsap.set(u,{yPercent:0,y:0});let m=d(s.labelEl,c.label||"","cs_label_line","cs_title_char");r.gsap.set(m,{yPercent:0,y:0}),e=s.indexEl,t=o(L.current),a=i.length,e.innerHTML="",t.split("").forEach(t=>{let a=function(e){let t=document.createElement("span");t.className="cs_digit_wrap";let a=document.createElement("span");a.className="cs_digit_roller";for(let e=0;e<=9;e++){let t=document.createElement("span");t.textContent=String(e),a.appendChild(t)}return t.appendChild(a),t._digit=parseInt(e,10),t._roller=a,t}(t);r.gsap.set(a._roller,{y:-a._digit+"em"}),e.appendChild(a)}),(n=document.createElement("span")).className="cs_index_divider",n.textContent="/",e.appendChild(n),(l=document.createElement("span")).className="cs_index_total",l.textContent=o(a-1),e.appendChild(l),r.gsap.set(s.progressFill,{scaleX:(L.current+1)/i.length,transformOrigin:"left center"}),q()},[i,q]),V=(0,a.useCallback)(()=>{U.current&&(clearInterval(U.current),U.current=null)},[]),K=(0,a.useCallback)(()=>{V(),b>0&&!J.current&&(U.current=setInterval(()=>{et.current()},1e3*b))},[b,V]),X=(0,a.useCallback)(()=>{b<=0||(V(),clearTimeout(W.current),W.current=setTimeout(K,4e3))},[b,V,K]),Z=(0,a.useCallback)((e,t)=>{var a,n;let l,s=z.current;if(!s||e===L.current)return;let d=performance.now();if(!J.current&&d-O.current<150)return;O.current=d,I.current&&e===I.current.outIndex&&(I.current.tl.progress(1),I.current=null);let m=L.current;L.current=e;let g=i[e];if(J.current){I.current?.tl.kill(),I.current=null,s.layers.forEach((t,a)=>{r.gsap.killTweensOf(t),p(t,a===e),r.gsap.set(t,{scale:1})}),Y(),w?.({index:e,direction:t,slide:g});return}let x=++P.current,f=r.gsap.timeline({onComplete:()=>{I.current&&I.current.tl===f&&(I.current=null)}});I.current={tl:f,outIndex:m},J.current&&f.timeScale(1e3);let b=s.layers[m],v=s.layers[e],D=s.layerParts[m],j=s.layerParts[e];B.current+=2,b.style.zIndex=String(i.length+B.current+1),v.style.zIndex=String(i.length+B.current),p(b,!0),p(v,!0),r.gsap.killTweensOf(j.strips),r.gsap.killTweensOf(v),r.gsap.killTweensOf(j.shades),h(j),r.gsap.set(v,{scale:1.3,transformOrigin:"50% 50%",force3D:!0}),r.gsap.set(j.shades,{opacity:.18});let C=.62*c,_=(c-C)/Math.max(1,F-1);r.gsap.killTweensOf(D.strips);for(let e=0;e<D.strips.length;e++)D.strips[e].style.clipPath=t>0?"inset(0% 0% 0% var(--csc, 0%))":"inset(0% var(--csc, 0%) 0% 0%)";r.gsap.set(D.strips,{"--csc":"0%"}),f.to(D.strips,{"--csc":"105%",duration:C,ease:T,stagger:t>0?_:-_,overwrite:!0},0),r.gsap.killTweensOf(D.shades),f.to(D.shades,{opacity:.3,duration:.8*C,ease:"power1.in",stagger:t>0?_:-_,overwrite:"auto"},0),f.to(v,{scale:1,duration:1.05*c,ease:T,force3D:!0},0),f.to(j.shades,{opacity:0,duration:1.05*c,ease:T},0),f.call(()=>{x===P.current&&s.layers.forEach((t,a)=>{let n=s.layerParts[a];r.gsap.killTweensOf(n.strips),r.gsap.killTweensOf(t),r.gsap.killTweensOf(n.shades),h(n),r.gsap.set(t,{scale:1}),r.gsap.set(n.shades,{opacity:0}),p(t,a===e),t.style.zIndex=a===e?String(i.length):String(a)})},null,c),u(s.titleEl,g.title||"","cs_title_line","cs_title_char",{yPercent:t>0?-120:120,y:0,duration:.55,ease:"zeusAnnimateInOut",stagger:t>0?y:-y,force3D:!0,overwrite:!0},{from:{yPercent:t>0?120:-120,y:0},to:{yPercent:0,y:0,duration:.95,ease:"zeusAnnimateInOut",stagger:t>0?y:-y,force3D:!0,overwrite:!0}}),u(s.labelEl,g.label||"","cs_label_line","cs_title_char",{yPercent:t>0?-110:110,y:0,duration:.35,ease:"zeusAnnimateInOut",force3D:!0,overwrite:!0},{from:{yPercent:t>0?110:-110,y:0},to:{yPercent:0,y:0,duration:.5,ease:"zeusAnnimateInOut",force3D:!0,overwrite:!0}}),a=s.indexEl,n=o(e),l=Array.from(a.querySelectorAll(".cs_digit_wrap")),n.split("").forEach((e,t)=>{let a=l[t];if(!a)return;let i=parseInt(e,10);a._digit=i,r.gsap.to(a._roller,{y:-i+"em",duration:.7,ease:"expo.inOut",force3D:!0,overwrite:!0})}),r.gsap.set(s.progressFill,{transformOrigin:"left center"}),f.to(s.progressFill,{scaleX:(e+1)/i.length,duration:M,ease:T,force3D:!0,overwrite:"auto"},0),q(),w?.({index:e,direction:t,slide:g})},[i,c,F,T,y,M,q,w]),Q=(0,a.useCallback)(()=>{Z((L.current+1)%i.length,1)},[i.length,Z]),ee=(0,a.useCallback)(()=>{Z((L.current-1+i.length)%i.length,-1)},[i.length,Z]),et=(0,a.useRef)(Q),ea=(0,a.useRef)(ee);et.current=Q,ea.current=ee;let{contextSafe:er}=(0,n.useGSAP)(()=>{if(D&&(Array.isArray(D)?D:String(D).split(",")).some(e=>{let t=l[String(e).trim()];return t&&window.matchMedia(t).matches}))return;let e=C.current,t=j.current;if(!e||!t||!i.length)return;L.current=Math.min(L.current,i.length-1),e.innerHTML="";let a=document.createElement("div");a.className="cs_layers";let n=[],s=i.map((e,t)=>{let r=document.createElement("div");r.className="cs_layer",r.style.zIndex=String(t),r.style.visibility=t===L.current?"":"hidden";let i={strips:[],inners:[],imgs:[],shades:[]};for(let t=0;t<F;t++){let a=document.createElement("div");a.className="cs_strip";let n=document.createElement("div");n.className="cs_strip_inner";let l=document.createElement("img");l.className="cs_layer_img",l.src=e.src,l.alt=0===t&&e.alt||"",l.loading="eager";let s=document.createElement("div");s.className="cs_shade",s.setAttribute("aria-hidden","true"),n.appendChild(l),a.appendChild(n),a.appendChild(s),r.appendChild(a),i.strips.push(a),i.inners.push(n),i.imgs.push(l),i.shades.push(s)}return n.push(i),a.appendChild(r),r}),o=document.createElement("div");o.className="cs_scrim",o.setAttribute("aria-hidden","true"),e.appendChild(a),e.appendChild(o),z.current={layers:s,layerParts:n,labelEl:_.current,titleEl:k.current,indexEl:N.current,progressFill:E.current,prevBtn:A.current,nextBtn:S.current,liveRegion:R.current},m(e,n,F),Y(),t.setAttribute("role","region"),t.setAttribute("aria-roledescription","carousel"),t.setAttribute("aria-label",i[L.current].title||""),t.setAttribute("tabindex",t.getAttribute("tabindex")||"0");let c=r.gsap.matchMedia();return c.add("(prefers-reduced-motion: reduce)",()=>(J.current=!0,V(),I.current?.tl.progress(1),()=>{J.current=!1})),K(),()=>{c.revert(),V(),clearTimeout(W.current),I.current&&I.current.tl.kill(),s.forEach((e,t)=>{r.gsap.killTweensOf(n[t].strips),r.gsap.killTweensOf(n[t].imgs)}),E.current&&r.gsap.killTweensOf(E.current)}},{scope:j,dependencies:[i,F,D]}),ei=er(()=>{ee(),X()}),en=er(()=>{Q(),X()}),el=er((e,t)=>{let a=e.currentTarget.querySelector(".cs_arrow_icon");r.gsap.to(a,{x:3*t,duration:.35,ease:"back.out(2)",overwrite:"auto",force3D:!0})}),es=er(e=>{let t=e.currentTarget.querySelector(".cs_arrow_icon");r.gsap.to(t,{x:0,duration:.35,ease:"expo.out",overwrite:"auto",force3D:!0})}),eo=er(e=>{r.gsap.to(e.currentTarget,{scale:.92,duration:.15,ease:"power2.out",overwrite:"auto",force3D:!0})}),ec=er(e=>{r.gsap.to(e.currentTarget,{scale:1,duration:.15,ease:"back.out(2.5)",overwrite:"auto",force3D:!0})}),ed=er(e=>{r.gsap.to(e.currentTarget,{scale:1,duration:.15,ease:"power2.out",overwrite:"auto",force3D:!0})}),eu=(0,a.useCallback)(e=>{"ArrowRight"===e.key||"ArrowDown"===e.key?(Q(),X()):("ArrowLeft"===e.key||"ArrowUp"===e.key)&&(ee(),X())},[Q,ee,X]),em=(0,a.useCallback)(e=>{if(v){if(e.target.closest(".cs_pill")){G.current=!1;return}G.current=!0,$.current=e.clientX,H.current=C.current?C.current.clientWidth:1}},[v]),ep=(0,a.useCallback)(e=>{if(!G.current)return;G.current=!1;let t=e.clientX-$.current;Math.abs(t)<.15*H.current||(t<0?Q():ee(),X())},[Q,ee,X]);return(0,a.useEffect)(()=>{let e=null;function t(){clearTimeout(e),e=setTimeout(()=>{z.current&&C.current&&m(C.current,z.current.layerParts,F)},150)}return window.addEventListener("resize",t),()=>{clearTimeout(e),window.removeEventListener("resize",t)}},[F]),(0,a.useEffect)(()=>{function e(){document.hidden?V():K()}return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[V,K]),(0,t.jsxs)("div",{ref:j,className:`cs_wrap${e?" "+e:""}`,"data-anm-curtain-slider":!0,onKeyDown:eu,onPointerDown:em,onPointerUp:ep,onMouseEnter:V,onMouseLeave:K,onFocus:V,onBlur:K,children:[(0,t.jsx)("div",{className:"cs_stage",ref:C,"data-anm-cs-stage":!0,children:i[0]&&(0,t.jsx)("img",{className:"cs_layer_img",src:i[0].src,alt:i[0].alt||""})}),(0,t.jsx)("div",{className:"cs_label",ref:_,children:i[0]?.label}),(0,t.jsx)("h2",{className:"cs_title",ref:k,children:i[0]?.title}),(0,t.jsx)("div",{className:"cs_index",ref:N,"aria-hidden":"true"}),(0,t.jsx)("div",{className:"cs_progress","aria-hidden":"true",children:(0,t.jsx)("div",{className:"cs_progress_fill",ref:E})}),(0,t.jsxs)("div",{className:"cs_pill",role:"group","aria-label":"Slide controls",children:[(0,t.jsx)("button",{ref:A,type:"button",className:"cs_arrow","aria-label":"Previous slide",onClick:ei,onMouseEnter:e=>el(e,-1),onMouseLeave:es,onPointerDown:eo,onPointerUp:ec,onPointerLeave:ed,children:(0,t.jsx)("svg",{className:"cs_arrow_icon",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M10 3L5 8L10 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,t.jsx)("button",{ref:S,type:"button",className:"cs_arrow","aria-label":"Next slide",onClick:en,onMouseEnter:e=>el(e,1),onMouseLeave:es,onPointerDown:eo,onPointerUp:ec,onPointerLeave:ed,children:(0,t.jsx)("svg",{className:"cs_arrow_icon",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M6 3L11 8L6 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,t.jsx)("div",{className:"cs_live","aria-live":"polite",ref:R})]})}let x=`/* Curtain Slider - full-bleed drop-in image slider. Advancing runs a
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
`;e.s(["CurtainSlider",0,function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:x}),(0,t.jsx)(g,{...e})]})}],76380)},63162,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),i=e.i(48937),n=e.i(35274);r.gsap.registerPlugin(i.useGSAP,n.CustomEase),n.CustomEase.create("zeusAnnimate","M0,0 C0.3,0.9 0.1,1 1,1"),n.CustomEase.create("zeusAnnimateInOut","M0,0 C0.7,0 0.16,1 1,1");let l="rgba(10, 10, 10, 0)",s={mobile:"(max-width: 479px)",landscape:"(orientation: landscape) and (max-width: 767px)",tablet:"(max-width: 991px)",desktop:"(min-width: 992px)"},o=["Full-grain pebble, tacked for grip","Holds pressure through cold courts","Indoor pace, outdoor wear"],c=[{src:"/assets/annnimate/action_leap_01.jpg",alt:"Athlete captured mid-leap against a dark studio ground"},{src:"/assets/annnimate/roster_cap-silhouette_03.jpg",alt:"Silhouetted athlete in a cap with a glowing brim on a green field"}],d=[{num:"620 g",label:"Regulation weight"},{num:"75.5 cm",label:"Circumference, size 7"},{num:"0.6 bar",label:"Playing pressure"}];function u({className:e="",onAction:n,onOpenChange:m,duration:p=.55,ease:h="zeusAnnimate",disable:g="",label:x="Court issue, 01",title:f="Game leather",tileImage:b={src:"/assets/annnimate/product_ball_05.jpg",alt:"Basketball floating in a shaft of light in a dark locker room"},sheetTitle:v="Broken in by hand",sheetText:y="A game ball built to be played - full-grain leather with a deep pebble, worked in before it ships so the first grip feels like the hundredth.",actionLabel:D="Explore the story",listItems:w=o,mediaImages:j=c,stats:C=d,sheetImage:_={src:"/assets/annnimate/hero_profile_03.jpg",alt:"Silhouetted athlete profile against a deep orange field"},outro:k="Built for the court you actually play on - the cracked one behind the gym, in January, with cold hands."}){let N=(0,a.useRef)(null),E=(0,a.useRef)(null),A=(0,a.useRef)(null),S=(0,a.useRef)(null),R=(0,a.useRef)(null),F=(0,a.useRef)(null),T=(0,a.useRef)(null),M=(0,a.useRef)(null),L=(0,a.useRef)(null),z=(0,a.useRef)(null),B=(0,a.useRef)(null),P=(0,a.useRef)(!1),I=(0,a.useRef)(!1),O=(0,a.useRef)(""),$=(0,a.useRef)(null),G=(v||"details").trim()||"details",H=(0,a.useCallback)(()=>!!g&&g.split(",").some(e=>{let t=s[e.trim()];return t&&window.matchMedia(t).matches}),[g]),U=(0,a.useCallback)(()=>{I.current||(I.current=!0,O.current=document.body.style.overflow,document.body.style.overflow="hidden")},[]),W=(0,a.useCallback)(()=>{I.current&&(I.current=!1,document.body.style.overflow=O.current)},[]),J=(0,a.useCallback)(e=>{m?.(e),R.current?.setAttribute("aria-expanded",e?"true":"false");let t=L.current;t&&(t.setAttribute("aria-hidden",e?"false":"true"),e?t.removeAttribute("inert"):t.setAttribute("inert",""))},[]),{contextSafe:q}=(0,i.useGSAP)({scope:N}),Y=q(()=>{$.current&&($.current.kill(),$.current=null),r.gsap.killTweensOf([F.current,T.current,M.current].filter(Boolean))}),V=(0,a.useCallback)(()=>{$.current=null,document.hasFocus()&&z.current?.focus()},[]),K=(0,a.useCallback)(()=>{$.current=null,W(),N.current?.classList.remove("is-open"),r.gsap.set(T.current,{y:128}),M.current&&r.gsap.set(M.current,{yPercent:30}),document.hasFocus()&&R.current?.focus()},[W]),X=q(()=>{if(H()||P.current)return $.current;P.current=!0,Y(),N.current?.classList.add("is-open"),J(!0),U(),L.current&&(L.current.scrollTop=0);let e=r.gsap.timeline({defaults:{ease:h,force3D:!0},onComplete:V});return e.to(F.current,{"--fdg-blur":"6px",backgroundColor:"rgba(10, 10, 10, 0.2)",duration:.6*p,data:{label:"Page dims and blurs behind"}},0),e.to(T.current,{y:0,duration:p,data:{label:"Dialog rises into place"}},0),e.to(T.current,{autoAlpha:1,duration:.45*p,data:{label:"Dialog fades in fast"}},0),M.current&&e.to(M.current,{yPercent:0,autoAlpha:1,duration:.9*p,data:{label:"Gradient band drifts up and fades in"}},.1),$.current=e,window.matchMedia("(prefers-reduced-motion: reduce)").matches&&e.timeScale(1e3),e}),Z=q(()=>{if(!P.current)return $.current;P.current=!1,Y(),J(!1);let e=r.gsap.timeline({defaults:{ease:"zeusAnnimateInOut",force3D:!0},onComplete:K});return e.to(T.current,{y:64,duration:.4*p,data:{label:"Dialog drops away"}},0),e.to(T.current,{autoAlpha:0,duration:.32*p,data:{label:"Dialog fades out"}},0),e.to(F.current,{"--fdg-blur":"0px",backgroundColor:l,duration:.4*p,data:{label:"Page sharpens again"}},0),M.current&&e.to(M.current,{yPercent:30,autoAlpha:0,duration:.35*p,data:{label:"Gradient band sinks out"}},0),$.current=e,window.matchMedia("(prefers-reduced-motion: reduce)").matches&&e.timeScale(1e3),e}),Q=(0,a.useCallback)(()=>{P.current||X()},[X]),ee=q(()=>{A.current&&S.current&&(r.gsap.to(A.current,{x:1.75,y:-1.75,duration:.4,ease:"zeusAnnimateInOut",overwrite:"auto"}),r.gsap.to(S.current,{x:-1.75,y:1.75,duration:.4,ease:"zeusAnnimateInOut",overwrite:"auto"}))}),et=q(()=>{A.current&&S.current&&r.gsap.to([A.current,S.current],{x:0,y:0,duration:.4,ease:"zeusAnnimateInOut",overwrite:"auto"})}),ea=(0,a.useCallback)(e=>{P.current||("Enter"===e.key||" "===e.key)&&(e.preventDefault(),X())},[X]),er=(0,a.useCallback)(e=>{e.stopPropagation(),X()},[X]),ei=(0,a.useCallback)(()=>{Z()},[Z]),en=(0,a.useCallback)(e=>{P.current&&L.current&&!L.current.contains(e.target)&&Z()},[Z]);return(0,i.useGSAP)(()=>{if(H())return;E.current?.setAttribute("role","button"),E.current?.setAttribute("tabindex","0"),E.current?.setAttribute("aria-haspopup","dialog"),L.current?.setAttribute("role","dialog"),L.current?.setAttribute("aria-modal","true"),J(!1),r.gsap.set(F.current,{"--fdg-blur":"0px",backgroundColor:l}),r.gsap.set(T.current,{y:128,autoAlpha:0}),M.current&&r.gsap.set(M.current,{yPercent:30,autoAlpha:0});let e=r.gsap.matchMedia();return e.add("(prefers-reduced-motion: reduce)",()=>{}),()=>{W(),e.revert(),$.current&&$.current.kill()}},{scope:N,dependencies:[]}),(0,a.useEffect)(()=>{let e=e=>{if("Escape"===e.key&&P.current&&Z(),"Tab"===e.key&&P.current){let t=L.current;if(!t)return;let a=t.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(!a.length)return;let r=a[0],i=a[a.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):(e.shiftKey||document.activeElement!==i)&&t.contains(document.activeElement)||(e.preventDefault(),r.focus())}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[Z]),(0,a.useEffect)(()=>{let e=()=>{$.current?.paused(document.hidden)};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]),(0,t.jsxs)("div",{ref:N,className:`fdg_stage ${e}`.trim(),"data-anm-feature-dialog":!0,"data-anm-duration":p,"data-anm-ease":h,"data-anm-disable":g||void 0,children:[(0,t.jsxs)("div",{ref:E,className:"fdg_tile","data-anm-fdg-tile":!0,role:"button",tabIndex:0,"aria-haspopup":"dialog",onClick:Q,onKeyDown:ea,onMouseEnter:ee,onMouseLeave:et,children:[(0,t.jsx)("div",{className:"fdg_gradient fdg_tile_gradient"}),(0,t.jsxs)("div",{className:"fdg_tile_copy",children:[(0,t.jsx)("div",{className:"fdg_tile_label",children:x}),(0,t.jsx)("h3",{className:"fdg_tile_title",children:f})]}),(0,t.jsx)("div",{className:"fdg_tile_media","data-anm-fdg-tile-media":!0,children:(0,t.jsx)("img",{className:"fdg_tile_img",src:b.src,alt:b.alt,loading:"eager",decoding:"async"})}),(0,t.jsx)("button",{ref:R,type:"button",className:"fdg_toggle","data-anm-fdg-toggle":!0,"aria-expanded":"false",onClick:er,children:(0,t.jsxs)("svg",{className:"fdg_glyph",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[(0,t.jsx)("path",{ref:A,className:"fdg_glyph_tr",d:"M10 2H14V6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{ref:S,className:"fdg_glyph_bl",d:"M6 14H2V10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),(0,t.jsx)("div",{ref:F,className:"fdg_overlay","data-anm-fdg-overlay":!0}),(0,t.jsxs)("div",{ref:T,className:"fdg_modal","data-anm-fdg-modal":!0,onClick:en,children:[(0,t.jsx)("div",{ref:M,className:"fdg_gradient fdg_panel_gradient","data-anm-fdg-gradient":!0}),(0,t.jsx)("div",{className:"fdg_panel",children:(0,t.jsxs)("section",{ref:L,className:"fdg_sheet","data-anm-fdg-sheet":!0,"aria-label":G,"aria-hidden":"true",inert:!0,children:[(0,t.jsx)("button",{ref:z,type:"button",className:"fdg_close","data-anm-fdg-close":!0,"aria-label":"Close dialog",onClick:ei,children:(0,t.jsx)("svg",{className:"fdg_glyph",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}),(0,t.jsxs)("div",{className:"fdg_sheet_inner",children:[(0,t.jsxs)("div",{className:"fdg_sheet_grid",children:[(0,t.jsxs)("div",{className:"fdg_sheet_main",children:[(0,t.jsx)("div",{className:"fdg_title_mask",children:(0,t.jsx)("h2",{ref:B,className:"fdg_sheet_title","data-anm-fdg-title":!0,children:v})}),(0,t.jsx)("p",{className:"fdg_sheet_text",children:y}),(0,t.jsx)("div",{className:"fdg_actions",children:(0,t.jsx)("button",{type:"button",className:"fdg_btn fdg_btn_primary",onClick:n,children:D})})]}),(0,t.jsx)("ul",{className:"fdg_list",children:w.map((e,a)=>(0,t.jsx)("li",{className:`fdg_list_item${a===w.length-1?" fdg_list_item_last":""}`,children:e},e))})]}),(0,t.jsx)("div",{className:"fdg_media_row",children:j.map(e=>(0,t.jsx)("div",{className:"fdg_media_cell",children:(0,t.jsx)("img",{className:"fdg_sheet_img",src:e.src,alt:e.alt,loading:"lazy",decoding:"async"})},e.src))}),(0,t.jsx)("div",{className:"fdg_stats",children:C.map(e=>(0,t.jsxs)("div",{className:"fdg_stat",children:[(0,t.jsx)("div",{className:"fdg_stat_num",children:e.num}),(0,t.jsx)("div",{className:"fdg_stat_label",children:e.label})]},e.label))}),(0,t.jsx)("div",{className:"fdg_sheet_media",children:(0,t.jsx)("img",{className:"fdg_sheet_img",src:_.src,alt:_.alt,loading:"lazy",decoding:"async"})}),(0,t.jsx)("p",{className:"fdg_outro",children:k})]})]})})]})]})}let m=`

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
`;e.s(["FeatureDialog",0,function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:m}),(0,t.jsx)(u,{...e})]})}],63162)},25447,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),i=e.i(48937),n=e.i(51904),l=e.i(84677),s=e.i(35274);r.gsap.registerPlugin(i.useGSAP,n.ScrollTrigger,l.SplitText,s.CustomEase),s.CustomEase.create("zeusAnnimate","M0,0 C0.3,0.9 0.1,1 1,1");let o=[{src:"/assets/annnimate/product_tennis-racket_02.jpg",alt:"Tennis racket detail",aspect:"portrait_lg"},{src:"/assets/annnimate/product_tennis-racket_05.jpg",alt:"Tennis racket detail",aspect:"portrait_md"},{src:"/assets/annnimate/product_football-boot_01.jpg",alt:"Football boot",aspect:"portrait_sm"},{src:"/assets/annnimate/product_half-zip_01.jpg",alt:"Half-zip top",aspect:"portrait_lg",hideMobile:!0},{src:"/assets/annnimate/product_shoe_01.jpg",alt:"Running shoe",aspect:"portrait_md"},{src:"/assets/annnimate/product_ball_02.jpg",alt:"Ball detail",aspect:"portrait_sm",hideMobile:!0},{src:"/assets/annnimate/product_tennis-net_01.jpg",alt:"Tennis net",aspect:"portrait_lg",hideMobile:!0},{src:"/assets/annnimate/product_football-boot_06.jpg",alt:"Football boot, side view",aspect:"landscape_lg"},{src:"/assets/annnimate/product_shoe_06.jpg",alt:"Sneaker, side view",aspect:"landscape_sm",hideMobile:!0},{src:"/assets/annnimate/texture_tennis-macro_01.jpg",alt:"Tennis ball macro texture",aspect:"square_lg"},{src:"/assets/annnimate/scatter_ball-rackets_01.jpg",alt:"Ball and rackets",aspect:"square_sm",hideMobile:!0},{src:"/assets/annnimate/texture_fabric-macro_01.jpg",alt:"Fabric macro texture",aspect:"square_sm"}];function c(e){return e*e*(3-2*e)}function d(e){return e<0?0:e>1?1:e}function u({className:e="",images:s=o,headline:m="Everything else is noise.",support:p="Focus is what remains when the season strips away everything you do not need.",duration:h=10,depth:g=2e3,speed:x=1,scrollBoost:f=3.5,pan:b=40,holeBuffer:v=120}){let y=(0,a.useRef)(null),D=(0,a.useRef)(null),w=(0,a.useRef)(null),j=(0,a.useRef)(null),C=(0,a.useRef)(null),_=(0,a.useRef)([]);_.current=[];let[k,N]=(0,a.useState)(!1);(0,a.useEffect)(()=>{(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(()=>N(!0))},[]);let E=(0,a.useCallback)(e=>{e&&!_.current.includes(e)&&_.current.push(e)},[]);return(0,i.useGSAP)(()=>{let e,t,a,i=y.current,s=D.current,o=w.current,u=j.current,m=C.current,p=Array.from(s?.querySelectorAll("[data-anm-ifi-card]")||[]);if(!i||!s||!p.length)return;let _=window.matchMedia("(prefers-reduced-motion: reduce)"),N=window.matchMedia("(pointer: coarse)").matches,E=_.matches,A=i.clientWidth,S=i.clientHeight,R=1,F=window.scrollY||window.pageYOffset||0,T=!1,M=[],L=[],z=0,B=0,P=parseFloat(getComputedStyle(i).perspective)||1200,I=[],O=[];function $(){if(z=0,B=0,!o)return;let e=o.getBoundingClientRect();e.width&&e.height&&(z=Math.min(e.width/2+v,.42*A),B=Math.min(e.height/2+v,.35*S))}function G(){p.forEach((e,t)=>{I[t]=e.offsetWidth/2,O[t]=e.offsetHeight/2})}function H(e,t,a){let r=function(e,t){let a,r,i=0;do a=Math.random()-.5,r=Math.random()-.5,i+=1;while(Math.abs(a)*A<z+e&&Math.abs(r)*S<B+t&&i<12)return{xFrac:a,yFrac:r}}(I[a]||0,O[a]||0);e.xFrac=r.xFrac,e.yFrac=r.yFrac,e.progress=t||0}function U(){if(!T)return;let a=r.gsap.ticker.deltaRatio(60)/60,i=x*R/h;R+=(1-R)*.06;let n=400- -g,l=e&&Number(r.gsap.getProperty(s,"x"))||0,o=t&&Number(r.gsap.getProperty(s,"y"))||0;for(let e=0;e<M.length;e++){let t=M[e];t.progress+=i*a,t.progress>=1&&H(t,t.progress-1,e);let r=-g+t.progress*n,s=(r<=-g?0:r<-200?c(d((r+g)/(-200+g))):r<=-80?1:r<400?1-c(d((r- -80)/480)):0)*function(e,t,a,r){if(!z&&!B)return 1;let i=P/(P-t),n=M[e],l=(n.xFrac*A+a)*i,s=(n.yFrac*S+r)*i;return c(d(Math.max(Math.abs(l)-(z+(I[e]||0)*i),Math.abs(s)-(B+(O[e]||0)*i))/80))}(e,r,l,o);L[e].x(t.xFrac*A),L[e].y(t.yFrac*S),L[e].z(r),L[e].opacity(s)}}function W(){T||(T=!0,r.gsap.ticker.add(U))}function J(){T=!1,r.gsap.ticker.remove(U)}function q(a){let r=i.getBoundingClientRect(),n=(a.clientX-r.left)/r.width*2-1,l=(a.clientY-r.top)/r.height*2-1;e(n*b),t(l*b*.8)}function Y(){e(0),t(0)}function V(){let e=window.scrollY||window.pageYOffset||0,t=Math.abs(e-F);F=e,f>0&&(R=Math.max(R,1+Math.min(t/60,1)*(f-1)))}function K(){clearTimeout(a),a=setTimeout(()=>{A=i.clientWidth,S=i.clientHeight,$(),G(),n.ScrollTrigger.refresh()},150)}N||E||!(b>0)||(e=r.gsap.quickTo(s,"x",{duration:1.2,ease:"power3.out"}),t=r.gsap.quickTo(s,"y",{duration:1.2,ease:"power3.out"}),i.addEventListener("pointermove",q),i.addEventListener("pointerleave",Y)),window.addEventListener("scroll",V,{passive:!0}),window.addEventListener("resize",K);let X=!0,Z=null;function Q(){document.hidden?J():X&&!E&&W()}"IntersectionObserver"in window&&(Z=new IntersectionObserver(e=>{e.forEach(e=>{(X=e.isIntersecting)&&!document.hidden&&!E?W():J()})},{threshold:0})).observe(i),document.addEventListener("visibilitychange",Q);let ee=null,et=null,ea=null,er=null,ei=0;if(k&&u){ee=l.SplitText.create(u,{type:"lines",mask:"lines",linesClass:"ifi_headline_line"}),m&&(et=l.SplitText.create(m,{type:"lines",mask:"lines",linesClass:"ifi_support_line"}));let e=ee.lines,t=et?et.lines:[];r.gsap.set(e,{yPercent:110,y:0}),t.length&&r.gsap.set(t,{yPercent:110,y:0}),(ea=r.gsap.timeline({paused:!0,defaults:{ease:"zeusAnnimate",force3D:!0}})).fromTo(e,{yPercent:110,y:0},{yPercent:0,y:0,duration:1.1,stagger:.08}),t.length&&ea.fromTo(t,{yPercent:110,y:0},{yPercent:0,y:0,duration:.9,stagger:.05},"-=0.6"),ei=requestAnimationFrame(()=>{let e;(e=i.getBoundingClientRect()).top<i.clientHeight&&e.bottom>0?E?ea.progress(1):ea.restart():er=n.ScrollTrigger.create({trigger:i,start:"top 80%",once:!0,onEnter:()=>ea.restart()}),n.ScrollTrigger.refresh()})}return r.gsap.set(p,{xPercent:-50,yPercent:-50,force3D:!0,willChange:"transform, opacity"}),r.gsap.set(s,{force3D:!0}),o&&r.gsap.set(o,{force3D:!0}),$(),G(),M.length=0,L.length=0,p.forEach((e,t)=>{let a={xFrac:0,yFrac:0,progress:t/p.length};M.push(a),H(a,t/p.length,t),L.push({x:r.gsap.quickSetter(e,"x","px"),y:r.gsap.quickSetter(e,"y","px"),z:r.gsap.quickSetter(e,"z","px"),opacity:r.gsap.quickSetter(e,"opacity")})}),E?(p.forEach((e,t)=>{let a=M[t];r.gsap.set(e,{x:a.xFrac*A,y:a.yFrac*S,z:-200,opacity:.9})}),ea&&ea.progress(1)):W(),()=>{J(),cancelAnimationFrame(ei),clearTimeout(a),e?.tween?.kill(),t?.tween?.kill(),window.removeEventListener("scroll",V),window.removeEventListener("resize",K),i.removeEventListener("pointermove",q),i.removeEventListener("pointerleave",Y),document.removeEventListener("visibilitychange",Q),Z&&Z.disconnect(),ea&&ea.kill(),er&&er.kill(),ee&&ee.revert(),et&&et.revert()}},{scope:y,revertOnUpdate:!0,dependencies:[k,s,m,p,h,g,x,f,b,v]}),(0,t.jsxs)("section",{ref:y,className:`ifi_section${e?" "+e:""}`,"data-anm-image-fly-in":!0,children:[(0,t.jsx)("div",{ref:D,className:"ifi_stage","data-anm-ifi-stage":!0,children:s.map((e,a)=>(0,t.jsx)("div",{ref:E,className:`ifi_card ifi_card_${e.aspect}${e.hideMobile?" ifi_card_hide_mobile":""}`,"data-anm-ifi-card":!0,children:(0,t.jsx)("img",{className:"ifi_card_img",src:e.src,alt:e.alt||""})},e.src+a))}),(0,t.jsxs)("div",{ref:w,className:"ifi_content","data-anm-ifi-content":!0,children:[(0,t.jsx)("h2",{ref:j,className:"ifi_headline","data-anm-ifi-headline":!0,children:m}),p?(0,t.jsx)("p",{ref:C,className:"ifi_support","data-anm-ifi-support":!0,children:p}):null]})]})}let m=`/* Image Fly-In
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
`;e.s(["ImageFlyIn",0,function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:m}),(0,t.jsx)(u,{...e})]})}],25447)},51178,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),i=e.i(48937),n=e.i(35274);r.gsap.registerPlugin(i.useGSAP,n.CustomEase),n.CustomEase.create("zeusTooltipTravel","M0,0 C0.7,0 0.16,1 1,1"),n.CustomEase.create("zeusTooltipExit","M0,0 C0.3,0.9 0.1,1 1,1");let l=`
.z-mtt{position:relative;display:inline-flex;flex-wrap:wrap;justify-content:center;gap:8px;isolation:isolate;max-width:100%;font-family:var(--font-inter,Inter),-apple-system,BlinkMacSystemFont,sans-serif;color:rgba(255,250,242,.92)}
/* Keep glyph rasterization stable as the moving bubble gains/loses its layer. */
.z-mtt button{position:relative;z-index:3;transform:translateZ(0);border:0;border-radius:999px;height:40px;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:0 16px;background:#101010;color:inherit;font:500 13px/1.4 inherit;font-family:inherit;font-size:13px;font-weight:500;letter-spacing:-.01em;cursor:pointer;white-space:nowrap}
.z-mtt button[data-icon-only]{width:40px;padding:0}.z-mtt button:disabled{opacity:.4;cursor:default}.z-mtt button:focus-visible{outline:2px solid #7a76ff;outline-offset:4px}.z-mtt button svg{width:16px;height:16px}
.z-mtt-bubble,.z-mtt-copy{position:absolute;top:0;left:0;border-radius:10px;background:#101010;pointer-events:none}
.z-mtt-bubble{z-index:2;opacity:0;overflow:hidden;will-change:transform;box-sizing:border-box}
.z-mtt-label,.z-mtt-measure{font:400 13px/1.4 var(--font-inter,Inter),-apple-system,BlinkMacSystemFont,sans-serif;letter-spacing:-.01em;padding:8px 12px;box-sizing:border-box;overflow-wrap:anywhere;text-align:center}
.z-mtt-label{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
.z-mtt-measure{position:absolute;top:0;left:0;visibility:hidden;width:max-content;pointer-events:none}
.z-mtt-goo{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0}.z-mtt-neck{position:absolute;background:#101010;border-radius:999px}.z-mtt-plate{position:absolute;border-radius:999px;background:#101010}.z-mtt-defs{position:absolute;width:0;height:0;pointer-events:none}
`;e.s(["MorphingTooltip",0,function({items:e,duration:n=.45,travelDuration:s=.32,grace:o=120,placement:c="top",maxWidth:d=160,blur:u=6,goo:m=10,gap:p=12,className:h="",style:g,label:x="Actions",onAction:f}){let b=(0,a.useId)().replace(/:/g,""),v=(0,a.useRef)(null),y=(0,a.useRef)(null),D=(0,a.useRef)(null),w=(0,a.useRef)(null),j=(0,a.useRef)(null),C=(0,a.useRef)(null),_=(0,a.useRef)(null),k=(0,a.useRef)(null),N=JSON.stringify(e.map(({id:e,caption:t,disabled:a})=>[e,t,a]));return(0,i.useGSAP)(()=>{let e,t,a=v.current,i=y.current,l=D.current;if(!a||!i||!l)return;let h=Array.from(a.querySelectorAll("button")),g=Array.from(i.querySelectorAll(".z-mtt-label")),x=window.matchMedia("(prefers-reduced-motion: reduce)"),f=null,N=0,E=!0,A={x:0,y:0,width:40,height:40},S={x:0,y:0,width:20,height:20},R={x:0,y:0,width:36,height:36,borderRadius:18},F={blur:0,neck:0},T=()=>{C.current&&r.gsap.set(C.current,{opacity:0,filter:"none"}),k.current?.setAttribute("stdDeviation","0")},M=()=>{if(r.gsap.set(i,{x:S.x,y:S.y,width:S.width,height:S.height,force3D:!0,autoRound:!1}),C.current?.style.opacity!=="0"){r.gsap.set(w.current,{x:R.x,y:R.y,width:R.width,height:R.height,borderRadius:R.borderRadius,force3D:!0,autoRound:!1}),k.current?.setAttribute("stdDeviation",String(F.blur));let e=A.x+A.width/2,t=A.y+A.height/2,a="top"===c?S.y+S.height-4:S.y+4,i="top"===c?Math.min(t-4,a):t-4,n="top"===c?Math.max(16,t+4-i):Math.max(16,a-i);r.gsap.set(_.current,{x:e-4*F.neck,y:i,width:8*F.neck,height:n,opacity:F.neck,force3D:!0,autoRound:!1})}},L=()=>{r.gsap.set(j.current,{x:A.x+2,y:A.y+2,width:A.width-4,height:A.height-4,borderRadius:(A.height-4)/2,force3D:!0}),r.gsap.set(C.current,{opacity:+!x.matches,filter:`url(#${b}-goo)`})},z=()=>{if(clearTimeout(e),E)return;E=!0,f?.removeAttribute("aria-describedby"),i.setAttribute("aria-hidden","true"),t?.kill();let a=x.matches?0:Math.max(0,.65*n);L(),F.blur=0,F.neck=0;let l={x:A.x+A.width/2-10,y:A.y+A.height/2-10,width:20,height:20};(t=r.gsap.timeline({onUpdate:M,onComplete:()=>{r.gsap.set(i,{opacity:0}),T(),f=null}})).to(S,{...l,duration:a,ease:"zeusTooltipExit"},0),t.to(R,{x:A.x+2,y:A.y+2,width:A.width-4,height:A.height-4,borderRadius:18,duration:a,ease:"zeusTooltipExit"},0),t.to(g,{opacity:0,duration:.55*a,ease:"power2.in"},0),t.to(F,{blur:Math.max(0,m),neck:1,duration:.45*a,ease:"power3.out"},0),t.to(F,{blur:0,neck:0,duration:.3*a,ease:"zeusTooltipTravel"},.7*a)},B=()=>{clearTimeout(e),e=setTimeout(z,Math.max(0,o))},P=(o,h=!1)=>{if(o.disabled||(clearTimeout(e),f===o&&!E&&!h))return;let v=o.dataset.caption??"",y=a.getBoundingClientRect(),D=o.getBoundingClientRect();l.textContent=v,l.style.maxWidth=`${Math.max(40,Math.min(d,window.innerWidth-24))}px`;let w=l.getBoundingClientRect(),j=Math.ceil(w.width)||80,C=Math.ceil(w.height)||35,_={x:Math.max(12-y.left,Math.min(D.left-y.left+(D.width-j)/2,window.innerWidth-y.left-j-12)),y:"top"===c?D.top-y.top-C-p:D.bottom-y.top+p,width:j,height:C};A={x:D.left-y.left,y:D.top-y.top,width:D.width,height:D.height};let k=E;f?.removeAttribute("aria-describedby"),f=o,E=!1,o.setAttribute("aria-describedby",`${b}-tooltip`),i.setAttribute("aria-hidden","false"),i.setAttribute("aria-label",v),t?.kill();let z=g[N],B=g[N=1-N];if(!B)return;B.textContent=v,B.style.width=`${j}px`;let P=h||x.matches?0:Math.max(0,k?n:s);k?(Object.assign(S,{x:A.x+A.width/2-10,y:A.y+A.height/2-10,width:20,height:20}),Object.assign(R,{x:A.x+2,y:A.y+2,width:A.width-4,height:A.height-4,borderRadius:18}),F.blur=Math.max(0,m),F.neck=1,L(),r.gsap.set(g,{opacity:0,filter:"blur(0px)"}),r.gsap.set(B,{opacity:1})):T(),r.gsap.set(i,{opacity:1}),M(),(t=r.gsap.timeline({onUpdate:M,onComplete:T})).to(S,{..._,duration:P,ease:k?"back.out(1.5)":"zeusTooltipTravel"},0),k?(t.to(R,{..._,borderRadius:10,duration:P,ease:"back.out(1.5)"},0),t.to(F,{neck:0,duration:.18*P,ease:"zeusTooltipTravel"},.42*P),t.to(F,{blur:0,duration:.28*P,ease:"zeusTooltipTravel"},.6*P)):(z&&t.to(z,{opacity:0,filter:`blur(${Math.max(0,Math.min(8,u))}px)`,duration:.64*P,ease:"power2.in"},0),t.fromTo(B,{opacity:0,filter:`blur(${Math.max(0,Math.min(8,u))}px)`},{opacity:1,filter:"blur(0px)",duration:.75*P,ease:"power2.out"},.16*P))},I=h.map(e=>{let t=()=>P(e),a=t=>{"Escape"===t.key&&(t.stopPropagation(),z());let a=h.filter(e=>!e.disabled),r=a.indexOf(e);if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){t.preventDefault();let e="Home"===t.key?0:"End"===t.key?a.length-1:(r+("ArrowRight"===t.key?1:-1)+a.length)%a.length;a[e]?.focus()}};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",B),e.addEventListener("focus",t),e.addEventListener("blur",B),e.addEventListener("keydown",a),()=>{e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",B),e.removeEventListener("focus",t),e.removeEventListener("blur",B),e.removeEventListener("keydown",a),e.removeAttribute("aria-describedby")}}),O=()=>{f&&!E&&P(f,!0)},$=new ResizeObserver(O);return $.observe(a),a.addEventListener("pointerleave",B),window.addEventListener("resize",O),()=>{clearTimeout(e),t?.kill(),$.disconnect(),I.forEach(e=>e()),a.removeEventListener("pointerleave",B),window.removeEventListener("resize",O),r.gsap.set(i,{opacity:0}),i.setAttribute("aria-hidden","true"),T()}},{scope:v,dependencies:[N,n,s,o,c,d,u,m,p,b],revertOnUpdate:!0}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:l}),(0,t.jsxs)("div",{ref:v,className:`z-mtt ${h}`,style:g,role:"group","aria-label":x,children:[(0,t.jsx)("svg",{className:"z-mtt-defs","aria-hidden":"true",children:(0,t.jsx)("defs",{children:(0,t.jsxs)("filter",{id:`${b}-goo`,x:"-100%",y:"-300%",width:"300%",height:"700%",colorInterpolationFilters:"sRGB",children:[(0,t.jsx)("feGaussianBlur",{ref:k,in:"SourceGraphic",stdDeviation:"0",result:"blur"}),(0,t.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"}),(0,t.jsx)("feComposite",{in:"SourceGraphic",operator:"atop"})]})})}),(0,t.jsxs)("div",{ref:C,className:"z-mtt-goo","aria-hidden":"true",style:{filter:`url(#${b}-goo)`},children:[(0,t.jsx)("span",{ref:j,className:"z-mtt-plate"}),(0,t.jsx)("span",{ref:w,className:"z-mtt-copy"}),(0,t.jsx)("span",{ref:_,className:"z-mtt-neck"})]}),e.map(e=>(0,t.jsxs)("button",{type:"button","data-caption":e.caption,"data-icon-only":e.iconOnly||void 0,disabled:e.disabled,"aria-label":e.iconOnly?e.label:void 0,onClick:()=>{e.onPress?.(),f?.(e.id)},children:[e.icon,e.iconOnly?null:e.label]},e.id)),(0,t.jsxs)("div",{ref:y,className:"z-mtt-bubble",id:`${b}-tooltip`,role:"tooltip","aria-hidden":"true",children:[(0,t.jsx)("span",{className:"z-mtt-label"}),(0,t.jsx)("span",{className:"z-mtt-label"})]}),(0,t.jsx)("span",{ref:D,className:"z-mtt-measure","aria-hidden":"true"})]})]})}])},83543,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),i=e.i(48937);r.gsap.registerPlugin(i.useGSAP);let n="back.out",l="inset(0% 100% 0% 0% round 8px)",s="inset(0% 0% 0% 0% round 8px)",o="#0a0a0a",c="#ffffff",d=[{id:"running",label:"Running"},{id:"cycling",label:"Cycling"},{id:"tennis",label:"Tennis"},{id:"track",label:"Track"}],u={running:["Shoes","Shorts","Shirts","Tank tops","Fueling"],cycling:["Bikes","Helmets","Jerseys","Bib shorts","Accessories"],tennis:["Racquets","Shoes","Apparel","Balls","Bags"],track:["Spikes","Singlets","Shorts","Recovery","Training"]},m=[{label:"About",href:"#"},{label:"Our Philosophy",href:"#"}],p=[{src:"/assets/annnimate/running-hero-female-1.avif",alt:"",label:"Events"},{src:"/assets/annnimate/street-running-earbuds-3.avif",alt:"",label:"Merch"}];function h({className:e="",exploreHref:g="#",onOpenChange:x,onNavigate:f,duration:b=.9,ease:v="expo.out",stagger:y=.06,panelBg:D="#ececec",logo:w="Kinetic Athletics",primaries:j=d,sublists:C=u,secondaryLinks:_=m,cards:k=p,heroEyebrow:N="Spring Collection / 03",heroHeading:E="The shape of distance.",heroSub:A="Apparel and footwear for the long way home.",heroImage:S="/assets/annnimate/street-running-hero-4.avif"}){let R=(0,a.useId)(),F=(0,a.useRef)(null),T=(0,a.useRef)(null),M=(0,a.useRef)(null),L=(0,a.useRef)(null),z=(0,a.useRef)(null),B=(0,a.useRef)(null),P=(0,a.useRef)(null),I=(0,a.useRef)(null),O=(0,a.useRef)(null),$=(0,a.useRef)(null),G=(0,a.useRef)(null),H=(0,a.useRef)(null),U=(0,a.useRef)(null),W=(0,a.useRef)([]),J=(0,a.useRef)([]),q=(0,a.useRef)([]),Y=(0,a.useRef)({}),V=(0,a.useRef)({}),K=(0,a.useRef)({}),X=(0,a.useRef)(null),Z=(0,a.useRef)([]),Q=(0,a.useRef)([]),ee=(0,a.useRef)(null),et=(0,a.useRef)(null),ea=(0,a.useRef)(null),er=(0,a.useRef)(!1),ei=(0,a.useRef)(!1),en=(0,a.useRef)(null),el=(0,a.useRef)(null),[es,eo]=(0,a.useState)(!1),ec=(0,a.useCallback)(()=>window.matchMedia("(max-width: 767px)").matches,[]),ed=(0,a.useCallback)(()=>{let e=z.current;e&&(ec()?r.gsap.set(e,{clipPath:s,xPercent:0,x:"100vw"}):r.gsap.set(e,{clipPath:l,xPercent:0,x:0}))},[ec]),eu=(0,a.useCallback)(e=>{j.forEach(t=>{let a=Y.current[t.id];if(!a)return;let r=t.id===e;a.classList.toggle("mldm_sublist_active",r),a.setAttribute("aria-hidden",String(!r)),a.style.visibility=r?"visible":"hidden",a.style.pointerEvents=r?"auto":"none"}),en.current=e,W.current.forEach((t,a)=>{t&&t.setAttribute("aria-expanded",String(j[a]?.id===e))})},[j]),em=(0,a.useCallback)(e=>{let t=V.current[e]||[],a=K.current[e]||[];t.forEach(e=>{e&&r.gsap.set(e,{x:0,opacity:0})}),a.forEach(e=>{e&&r.gsap.set(e,{scale:0})})},[]),ep=(0,a.useCallback)(()=>{el.current&&(clearTimeout(el.current),el.current=null)},[]),{contextSafe:eh}=(0,i.useGSAP)(()=>{let e=L.current,t=z.current,a=T.current,i=M.current,n=P.current,s=H.current,c=I.current,d=$.current,u=G.current;if(e&&a&&n)return e&&(e.style.backgroundColor=D),t&&(t.style.backgroundColor=D),a.setAttribute("inert",""),a.setAttribute("aria-hidden","true"),r.gsap.set(e,{clipPath:l}),ed(),r.gsap.set(i,{opacity:0}),r.gsap.set(n,{color:o}),s&&r.gsap.set(s,{color:o}),c&&r.gsap.set(c,{y:0}),d&&r.gsap.set(d,{y:-3,rotation:0}),u&&r.gsap.set(u,{y:3,rotation:0}),j.forEach(e=>{let t=Y.current[e.id];t&&(t.classList.remove("mldm_sublist_active"),t.setAttribute("aria-hidden","true"),t.style.visibility="hidden",t.style.pointerEvents="none")}),ea.current=r.gsap.matchMedia(),ea.current.add("(prefers-reduced-motion: reduce)",()=>{}),()=>{ee.current&&ee.current.kill(),et.current&&et.current.kill(),ea.current&&ea.current.revert(),ep()}},{scope:F,dependencies:[D]}),eg=eh(()=>{let e=L.current;z.current;let t=T.current,a=M.current,i=P.current,n=H.current,d=I.current,u=O.current,m=$.current,p=G.current;if(!e||!t||!i)return;ee.current&&ee.current.kill(),et.current&&et.current.kill();let h=q.current.filter(Boolean),g=[];X.current&&g.push(X.current),Z.current.forEach(e=>{e&&g.push(e)}),Q.current.forEach(e=>{e&&g.push(e)});let x=[...h,...g],f=u?u.offsetHeight:16;ee.current=r.gsap.timeline({paused:!0,defaults:{ease:v,easeReverse:!0,force3D:!0},onStart:()=>{t.removeAttribute("inert"),t.setAttribute("aria-hidden","false"),F.current?.dispatchEvent(new CustomEvent("anm-mldm-open",{bubbles:!0,detail:{container:F.current}}))}});let D=ee.current;window.matchMedia("(prefers-reduced-motion: reduce)").matches&&D.timeScale(1e3),D.set(e,{clipPath:l}),D.set(a,{opacity:0}),D.set(i,{color:o}),n&&D.set(n,{color:o}),D.set(d,{y:0}),D.set(m,{y:-3,rotation:0}),D.set(p,{y:3,rotation:0}),J.current.forEach(e=>{e&&D.set(e,{scale:0})}),D.set(x,{opacity:0,x:-16}),D.to(a,{opacity:1,duration:.75*b},0),D.to(e,{clipPath:s,duration:b},.05),D.to(i,{color:c,duration:.6*b},.2*b),n&&D.to(n,{color:c,duration:.6*b},.2*b),D.to(d,{y:-(f+2),duration:.55*b},.2*b),D.to(m,{y:0,rotation:45,duration:.6*b},.2*b),D.to(p,{y:0,rotation:-45,duration:.6*b},.2*b),D.to(h,{opacity:1,x:0,duration:.55,stagger:y},.35*b),g.length&&D.to(g,{opacity:1,x:0,duration:.55,stagger:.7*y},.45*b);let w=.55*b;et.current=r.gsap.timeline({paused:!0,defaults:{ease:"expo.out",force3D:!0},onComplete:()=>{t.setAttribute("inert",""),t.setAttribute("aria-hidden","true"),F.current?.dispatchEvent(new CustomEvent("anm-mldm-close",{bubbles:!0,detail:{container:F.current}}))}});let j=et.current;window.matchMedia("(prefers-reduced-motion: reduce)").matches&&j.timeScale(1e3),j.to(x,{opacity:0,duration:.15,stagger:.3*y},0),j.to(e,{clipPath:l,duration:w},.05),j.to(a,{opacity:0,duration:.8*w},.1),j.to(i,{color:o,duration:.6*w},.05),n&&j.to(n,{color:o,duration:.6*w},.05),j.to(d,{y:0,duration:.55*w},.05),j.to(m,{y:-3,rotation:0,duration:.6*w},.05),j.to(p,{y:3,rotation:0,duration:.6*w},.05)}),ex=eh(e=>{if(ep(),!(C[e]&&C[e].length))return void ef();if(ei.current&&en.current===e)return;if(ei.current&&en.current!==e)return void eb(e);ei.current=!0,eu(e),em(e);let t=z.current;if(!t)return;ec()?r.gsap.to(t,{x:0,duration:.5,ease:"expo.out",easeReverse:!0,force3D:!0,overwrite:"auto"}):r.gsap.to(t,{clipPath:s,duration:.6,ease:"expo.out",easeReverse:!0,force3D:!0,overwrite:"auto"});let a=V.current[e]||[];a.length&&r.gsap.fromTo(a,{opacity:0,x:-16},{opacity:1,x:0,duration:.5,stagger:y,ease:"expo.out",easeReverse:!0,force3D:!0,overwrite:"auto",delay:.1})}),ef=eh(()=>{if(ep(),!ei.current)return;ei.current=!1;let e=z.current;e&&(ec()?r.gsap.to(e,{x:"100vw",duration:.4,ease:"expo.out",force3D:!0,overwrite:"auto"}):r.gsap.to(e,{clipPath:l,duration:.45,ease:"expo.out",force3D:!0,overwrite:"auto"}))}),eb=eh(e=>{let t=en.current,a=V.current[t]||[],i=V.current[e]||[];function n(){eu(e),em(e),i.length&&r.gsap.fromTo(i,{opacity:0,x:-16},{opacity:1,x:0,duration:.45,ease:"expo.out",easeReverse:!0,stagger:y,force3D:!0,overwrite:"auto"})}a.length?r.gsap.to(a,{opacity:0,x:-8,duration:.18,ease:"expo.out",stagger:.3*y,overwrite:"auto",onComplete:n}):n()}),ev=(0,a.useCallback)(()=>{ep(),el.current=setTimeout(()=>{el.current=null,ef()},200)},[ep,ef]),ey=eh(()=>{er.current||(er.current=!0,eo(!0),x?.(!0),P.current?.setAttribute("aria-expanded","true"),P.current?.setAttribute("aria-label","Close navigation menu"),ei.current=!1,en.current=null,ed(),eg(),et.current&&et.current.pause(0),ee.current?.restart())}),eD=eh(()=>{er.current&&(er.current=!1,eo(!1),x?.(!1),ef(),P.current?.setAttribute("aria-expanded","false"),P.current?.setAttribute("aria-label","Open navigation menu"),P.current?.focus(),ee.current&&ee.current.pause(),et.current&&et.current.restart())}),ew=(0,a.useCallback)(()=>{er.current?eD():ey()},[ey,eD]),ej=eh(e=>{if(!er.current||ec())return;ep();let t=j[e]?.id;t&&C[t]?.length?ex(t):ev();let a=J.current[e],i=q.current[e];if(!a||!i)return;let l=a.offsetWidth+12;r.gsap.to(a,{scale:1,duration:.4,ease:n,overwrite:"auto",force3D:!0}),r.gsap.to(i,{x:l,duration:.4,ease:n,overwrite:"auto",force3D:!0})}),eC=eh(e=>{let t=J.current[e],a=q.current[e];t&&a&&(r.gsap.to(t,{scale:0,duration:.4,ease:n,overwrite:"auto",force3D:!0}),r.gsap.to(a,{x:0,duration:.4,ease:n,overwrite:"auto",force3D:!0}))}),e_=eh(e=>{if(!er.current)return;ep();let t=j[e]?.id;t&&C[t]?.length?ex(t):ef()}),ek=(0,a.useCallback)(e=>{if(!er.current||ec())return;let t=z.current;t&&t.contains(e.relatedTarget)||ev()},[ec,ev]),eN=(0,a.useCallback)(()=>{ec()||ep()},[ec,ep]),eE=(0,a.useCallback)(e=>{if(!er.current||ec())return;let t=B.current;t&&t.contains(e.relatedTarget)||ev()},[ec,ev]),eA=eh((e,t)=>{let a=(K.current[e]||[])[t],i=(V.current[e]||[])[t];if(!a||!i)return;let l=a.offsetWidth+10;r.gsap.to(a,{scale:1,duration:.4,ease:n,overwrite:"auto",force3D:!0}),r.gsap.to(i,{x:l,duration:.4,ease:n,overwrite:"auto",force3D:!0})}),eS=eh((e,t)=>{let a=(K.current[e]||[])[t],i=(V.current[e]||[])[t];a&&i&&(r.gsap.to(a,{scale:0,duration:.4,ease:n,overwrite:"auto",force3D:!0}),r.gsap.to(i,{x:0,duration:.4,ease:n,overwrite:"auto",force3D:!0}))});return(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&er.current&&eD()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[eD]),(0,a.useEffect)(()=>{let e,t=()=>{clearTimeout(e),e=setTimeout(()=>{ed()},150)};return window.addEventListener("resize",t),()=>{clearTimeout(e),window.removeEventListener("resize",t)}},[ed]),(0,t.jsxs)("div",{ref:F,onClick:e=>{let t=e.target.closest("a");t&&f?.(t.getAttribute("href"))},className:`mldm_wrap${e?" "+e:""}`,"data-anm-multi-level-drawer-menu":!0,children:[(0,t.jsx)("div",{className:"mldm_page","data-anm-mldm-page":!0,children:(0,t.jsx)("section",{className:"mldm_page_hero",children:(0,t.jsxs)("div",{className:"mldm_page_inner",children:[(0,t.jsxs)("div",{className:"mldm_page_text",children:[(0,t.jsx)("p",{className:"mldm_page_eyebrow",children:N}),(0,t.jsx)("h1",{className:"mldm_page_heading",children:E}),(0,t.jsx)("p",{className:"mldm_page_sub",children:A})]}),(0,t.jsx)("div",{className:"mldm_page_poster",children:(0,t.jsx)("img",{className:"mldm_page_poster_img",src:S,alt:""})})]})})}),(0,t.jsx)("span",{ref:H,className:"mldm_logo","data-anm-mldm-logo":!0,children:w}),(0,t.jsxs)("button",{ref:P,className:"mldm_toggle","data-anm-mldm-toggle":!0,"aria-expanded":es,"aria-controls":R,"aria-label":"Open navigation menu",onClick:ew,children:[(0,t.jsx)("span",{className:"mldm_toggle_label_wrap",children:(0,t.jsxs)("span",{ref:I,className:"mldm_toggle_label_track","data-anm-mldm-label-track":!0,children:[(0,t.jsx)("span",{ref:O,className:"mldm_toggle_label mldm_toggle_label_open","data-anm-mldm-label-open":!0,children:"Menu"}),(0,t.jsx)("span",{className:"mldm_toggle_label mldm_toggle_label_close",children:"Close"})]})}),(0,t.jsxs)("span",{className:"mldm_toggle_icon","aria-hidden":"true",children:[(0,t.jsx)("span",{ref:$,className:"mldm_toggle_line mldm_toggle_line_top","data-anm-mldm-icon-top":!0}),(0,t.jsx)("span",{ref:G,className:"mldm_toggle_line mldm_toggle_line_bottom","data-anm-mldm-icon-bottom":!0})]})]}),(0,t.jsxs)("div",{ref:T,className:"mldm_overlay",id:R,"data-anm-mldm-overlay":!0,role:"dialog","aria-modal":"true","aria-label":"Navigation","aria-hidden":"true",inert:!0,children:[(0,t.jsx)("button",{ref:M,className:"mldm_scrim","data-anm-mldm-scrim":!0,"aria-label":"Close menu",tabIndex:-1,onClick:eD}),(0,t.jsx)("aside",{ref:L,className:"mldm_panel mldm_panel_primary","data-anm-mldm-panel":!0,"data-anm-mldm-panel-level":"1",children:(0,t.jsxs)("div",{className:"mldm_panel_inner",children:[(0,t.jsxs)("nav",{ref:B,className:"mldm_primary_nav","aria-label":"Primary categories",onMouseLeave:ek,children:[(0,t.jsx)("ul",{className:"mldm_list",children:j.map((e,a)=>(0,t.jsx)("li",{className:"mldm_item",children:(0,t.jsxs)("button",{ref:e=>{W.current[a]=e},className:"mldm_primary","data-anm-mldm-primary":!0,"data-anm-mldm-target":e.id,"aria-expanded":"false",onMouseEnter:()=>ej(a),onMouseLeave:()=>eC(a),onClick:()=>e_(a),children:[(0,t.jsx)("span",{ref:e=>{J.current[a]=e},className:"mldm_primary_dot","aria-hidden":"true"}),(0,t.jsx)("span",{ref:e=>{q.current[a]=e},className:"mldm_primary_label",children:e.label})]})},e.id))}),(0,t.jsx)("a",{ref:X,className:"mldm_explore","data-anm-mldm-secondary":!0,href:g,children:"Explore all"})]}),(0,t.jsx)("div",{className:"mldm_cards",children:k.map((e,a)=>(0,t.jsxs)("a",{ref:e=>{Z.current[a]=e},className:"mldm_card","data-anm-mldm-secondary":!0,href:e.href||g,children:[(0,t.jsx)("span",{className:"mldm_card_media",children:(0,t.jsx)("img",{className:"mldm_card_img",src:e.src,alt:e.alt||""})}),(0,t.jsx)("span",{className:"mldm_card_label",children:e.label})]},e.label))}),(0,t.jsx)("nav",{className:"mldm_footer_nav","aria-label":"Secondary",children:_.map((e,a)=>(0,t.jsx)("a",{ref:e=>{Q.current[a]=e},className:"mldm_footer_link","data-anm-mldm-secondary":!0,href:e.href,children:e.label},e.label))})]})}),(0,t.jsxs)("aside",{ref:z,className:"mldm_panel mldm_panel_secondary","data-anm-mldm-panel":!0,"data-anm-mldm-panel-level":"2",onMouseEnter:eN,onMouseLeave:eE,children:[(0,t.jsxs)("button",{ref:U,className:"mldm_back","data-anm-mldm-back":!0,"aria-label":"Back to primary categories",onClick:ef,children:[(0,t.jsx)("span",{className:"mldm_back_icon","aria-hidden":"true"}),(0,t.jsx)("span",{className:"mldm_back_label",children:"Back"})]}),(0,t.jsxs)("div",{className:"mldm_panel_inner",children:[(0,t.jsx)("div",{className:"mldm_sublist_stack","data-anm-mldm-sublist-stack":!0,children:j.map(e=>{let a=C[e.id]||[];return V.current[e.id]||(V.current[e.id]=[]),K.current[e.id]||(K.current[e.id]=[]),(0,t.jsx)("div",{ref:t=>{Y.current[e.id]=t},className:`mldm_sublist${e.id===j[0]?.id?" mldm_sublist_active":""}`,"data-anm-mldm-sublist":!0,"data-anm-mldm-sublist-for":e.id,"aria-hidden":e.id!==j[0]?.id,children:(0,t.jsx)("ul",{className:"mldm_list",children:a.map((a,r)=>(0,t.jsx)("li",{className:"mldm_item",children:(0,t.jsxs)("a",{href:"string"==typeof a?g:a.href,onClick:eD,className:"mldm_sublink","data-anm-mldm-secondary-link":!0,onMouseEnter:()=>eA(e.id,r),onMouseLeave:()=>eS(e.id,r),children:[(0,t.jsx)("span",{ref:t=>{K.current[e.id][r]=t},className:"mldm_sublink_dot","aria-hidden":"true"}),(0,t.jsx)("span",{ref:t=>{V.current[e.id][r]=t},className:"mldm_sublink_label",children:"string"==typeof a?a:a.label})]})},"string"==typeof a?a:a.href))})},e.id)})}),(0,t.jsx)("a",{className:"mldm_sub_explore","data-anm-mldm-secondary":!0,href:g,children:"Explore all"})]})]})]})]})}let g=`.mldm_wrap {
  position: relative;
  width: 100%;
  height: var(--zeus-animation-height, 640px);
  overflow: hidden;
  background-color: #efece4;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  color: #0a0a0a;
}

.mldm_page {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: #efece4;
  overflow: hidden;
}

.mldm_page_hero {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 7rem 4rem 4rem 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
}

.mldm_page_inner {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 3rem;
  width: 100%;
  align-items: end;
}

.mldm_page_text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 640px;
}

.mldm_page_eyebrow {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #888888;
}

.mldm_page_heading {
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.98;
  color: #0a0a0a;
}

.mldm_page_sub {
  margin: 0;
  font-size: 1rem;
  letter-spacing: -0.01em;
  color: #555555;
  max-width: 36ch;
  line-height: 1.5;
}

.mldm_page_poster {
  position: relative;
  align-self: end;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  background-color: #d8ddd1;
}

.mldm_page_poster_img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.mldm_logo {
  position: absolute;
  top: 1.75rem;
  left: 2.25rem;
  z-index: 50;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1;
  color: #0a0a0a;
  white-space: nowrap;
  pointer-events: none;
  will-change: color;
}

.mldm_toggle {
  position: absolute;
  top: 1.75rem;
  right: 2.25rem;
  z-index: 200;
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #0a0a0a;
  will-change: color;
}

.mldm_toggle_label_wrap {
  position: relative;
  display: block;
  width: 3em;
  height: 1em;
  font-size: 1rem;
  line-height: 1;
  overflow: hidden;
  text-align: left;
}

.mldm_toggle_label_track {
  display: flex;
  flex-direction: column;
  gap: 2px;
  will-change: transform;
}

.mldm_toggle_label {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1;
  height: 1em;
  white-space: nowrap;
  user-select: none;
  color: inherit;
}

.mldm_toggle_icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
}

.mldm_toggle_line {
  position: absolute;
  display: block;
  width: 1rem;
  height: 1.5px;
  background-color: currentColor;
  border-radius: 2px;
  transform-origin: center;
  will-change: transform, background-color;
}

.mldm_overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: transparent;
  pointer-events: none;
}

.mldm_overlay[aria-hidden="false"] {
  pointer-events: auto;
}

/* Dim - darkens the page underneath; sits below trigger + panels. Click closes. */
.mldm_scrim {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: rgba(10, 10, 10, 0.55);
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  opacity: 0;
  will-change: opacity;
}

.mldm_panel {
  position: absolute;
  z-index: 3;
  top: 1rem;
  bottom: 1rem;
  background-color: #ececec;
  border-radius: 8px;
  overflow: hidden;
  clip-path: inset(0% 100% 0% 0% round 8px);
  will-change: clip-path;
}

.mldm_panel_inner {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.mldm_panel_primary {
  left: 1rem;
  width: 420px;
}

.mldm_panel_secondary {
  left: calc(1rem + 420px + 0.5rem);
  width: 280px;
}

.mldm_back {
  display: none;
  position: absolute;
  top: 1.5rem;
  left: 2.5rem;
  z-index: 5;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;
  font-family: inherit;
  color: #0a0a0a;
}

.mldm_back_icon {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-top: 1.25px solid currentColor;
  border-left: 1.25px solid currentColor;
  transform: rotate(-45deg);
  flex-shrink: 0;
  margin-right: 0.25rem;
}

.mldm_back_label {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1;
}

.mldm_list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.mldm_item {
  display: block;
}

.mldm_primary_nav {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.mldm_primary_nav .mldm_list {
  gap: 1.5rem;
}

.mldm_primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #888888;
  text-align: left;
  font-family: inherit;
}

.mldm_primary_dot {
  position: absolute;
  left: 0;
  top: 50%;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #0a0a0a;
  transform: translate(0, -50%) scale(0);
  transform-origin: center;
  will-change: transform;
  pointer-events: none;
}

.mldm_primary_label {
  display: inline-block;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: inherit;
  will-change: transform, color;
}

.mldm_primary:hover {
  color: #0a0a0a;
}

.mldm_explore {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #555555;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.mldm_explore:hover {
  color: #0a0a0a;
}

.mldm_cards {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  margin-bottom: auto;
}

.mldm_card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-decoration: none;
  color: #0a0a0a;
}

.mldm_card_media {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 6px;
  background-color: #d8ddd1;
}

.mldm_card_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  will-change: transform;
}

.mldm_card_label {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: #0a0a0a;
}

.mldm_footer_nav {
  display: flex;
  gap: 1.25rem;
}

.mldm_footer_link {
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #888888;
  text-decoration: none;
}

.mldm_footer_link:hover {
  color: #0a0a0a;
}

.mldm_sublist_stack {
  position: relative;
  width: 100%;
  flex: 1;
}

.mldm_sublist {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: hidden;
  pointer-events: none;
}

.mldm_sublist_active {
  visibility: visible;
  pointer-events: auto;
  position: relative;
}

.mldm_sublist .mldm_list {
  gap: 0.5rem;
}

.mldm_sublink {
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;
  color: #888888;
  text-align: left;
  font-family: inherit;
  width: 100%;
}

.mldm_sublink_dot {
  position: absolute;
  left: 0;
  top: 50%;
  display: inline-block;
  width: 0.4375rem;
  height: 0.4375rem;
  border-radius: 50%;
  background-color: #0a0a0a;
  transform: translate(0, -50%) scale(0);
  transform-origin: center;
  will-change: transform;
  pointer-events: none;
}

.mldm_sublink_label {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: inherit;
  will-change: transform, color;
}

.mldm_sublink:hover {
  color: #0a0a0a;
}

.mldm_sub_explore {
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #555555;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.mldm_sub_explore:hover {
  color: #0a0a0a;
}

@media (prefers-reduced-motion: reduce) {
  .mldm_card_img {
    transition: none;
  }
}

@media (max-width: 1023px) {
  .mldm_panel_primary {
    width: 360px;
  }

  .mldm_panel_secondary {
    left: calc(1rem + 360px + 0.5rem);
    width: 240px;
  }

  .mldm_primary_label {
    font-size: 1.625rem;
  }

  .mldm_sublink_label {
    font-size: 1.125rem;
  }

  .mldm_page_hero {
    padding: 6rem 2rem 2rem 2rem;
  }

  .mldm_page_inner {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 767px) {
  /* Push panels below the fixed header so the logo + trigger don't overlap */
  .mldm_panel {
    top: 5rem;
  }

  /* Both panels share the exact same left/right/width on mobile.
     Panel 2 sits on top of panel 1 (higher z-index) as a drill-down overlay. */
  .mldm_panel_primary {
    left: 1rem;
    right: 1rem;
    width: auto;
    max-width: none;
    z-index: 3;
  }

  .mldm_panel_secondary {
    left: 1rem;
    right: 1rem;
    width: auto;
    /* slide-in initial state - shift by full viewport width so panel 2 is
       guaranteed fully off-screen regardless of viewport size (translateX 100%
       alone would leave a 1rem sliver visible due to the left offset) */
    clip-path: inset(0% 0% 0% 0% round 8px);
    transform: translateX(100vw);
    z-index: 20;
  }

  .mldm_panel_secondary .mldm_panel_inner {
    padding-top: 4.5rem;
  }

  .mldm_back {
    display: inline-flex;
  }

  .mldm_page_hero {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }

  .mldm_page_inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .mldm_logo {
    top: 1.25rem;
    left: 1.5rem;
  }

  .mldm_toggle {
    top: 1.25rem;
    right: 1.5rem;
  }
}
`;e.s(["MultiLevelDrawerMenu",0,function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:g}),(0,t.jsx)(h,{...e})]})}],83543)},96527,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(32919),i=e.i(48937),n=e.i(51904),l=e.i(84677);r.gsap.registerPlugin(i.useGSAP,n.ScrollTrigger,l.SplitText),e.s(["TextReveal",0,function({children:e,className:n,type:s="words",start:o="top 80%",end:c,scrub:d=!1,duration:u=.8,stagger:m=.08,ease:p="expo.out",yPercent:h=110,markers:g=!1,onComplete:x}){let f=(0,a.useRef)(null);return(0,i.useGSAP)((e,t)=>{let a,i,n=f.current;if(!n)return;let b=!1,v=r.gsap.matchMedia(),y=t(()=>{b||v.add("(prefers-reduced-motion: no-preference)",()=>(a=l.SplitText.create(n,{type:"lines"===s?"lines":`lines,${s}`,mask:"lines",autoSplit:!0,onSplit:e=>i=r.gsap.from(e[s],{yPercent:h,duration:u,stagger:m,ease:p,scrollTrigger:{trigger:n,start:o,end:c,scrub:d,once:!d,markers:g},onComplete:x})}),()=>{i?.scrollTrigger?.kill(),i?.kill(),a?.revert()}))});return(document.fonts?.ready??Promise.resolve()).then(y),()=>{b=!0,v.revert()}},{scope:f,dependencies:[e,s,o,c,d,u,m,p,h,g,x],revertOnUpdate:!0}),(0,t.jsx)("div",{ref:f,className:n,"data-zeus-text-reveal":!0,children:e})}])},55915,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(46585);function i(e){return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}function n(){return(0,r.useSyncExternalStore)(i,()=>window.location.pathname,()=>"")}var l=e.i(48642),s=e.i(4352),o=e.i(17185),c=e.i(60215),d=e.i(31614),u=e.i(80066),m=e.i(79571);let p="/templates/chat-starter";function h(){let e=n()??"";return e===p||e.startsWith(`${p}/`)?p:""}function g(e){return[{key:"chat",label:"Chat",icon:a.RiChatAiLine,href:`${e}/chat`},{key:"dashboard",label:"Dashboard",icon:a.RiDashboardLine,href:`${e}/dashboard`},{key:"dashboards",label:"Dashboards",icon:a.RiStackLine,href:`${e}/dashboards`},{key:"components",label:"Components and Blocks",icon:a.RiLayoutGridLine,href:`${e}/components`},{key:"login",label:"Sign in",icon:a.RiLoginBoxLine,href:`${e}/login`},{key:"signup",label:"Sign up",icon:a.RiUserAddLine,href:`${e}/signup`}]}function x(){let e=n()??"",t=h(),a=e.slice(t.length);return a.startsWith("/dashboards")?"dashboards":a.startsWith("/dashboard")?"dashboard":a.startsWith("/components")?"components":"chat"}e.s(["AppShell",0,function({title:e,heading:i=e,icon:n=a.RiDashboardLine,actions:p,children:f,className:b,columnClassName:v}){let[y,D]=(0,r.useState)(!1),w=g(h()),j=x();return(0,t.jsxs)("div",{className:(0,m.cx)("relative flex h-dvh w-full gap-4 overflow-hidden bg-background-full p-3",b),children:[(0,t.jsx)(l.DashboardSidebar,{items:w,selected:j,className:"hidden lg:flex"}),y&&(0,t.jsxs)("div",{className:"fixed inset-0 z-50 flex lg:hidden",children:[(0,t.jsx)("button",{type:"button","aria-label":"Close navigation",onClick:()=>D(!1),className:"absolute inset-0 cursor-pointer bg-black/40"}),(0,t.jsx)("div",{className:"relative flex h-full p-3",children:(0,t.jsx)(l.DashboardSidebar,{mobile:!0,items:w,selected:j,onClose:()=>D(!1),className:"flex"})})]}),(0,t.jsx)("main",{className:"relative flex min-h-0 min-w-0 flex-1 justify-center overflow-x-hidden overflow-y-auto bg-background-full sm:pt-3",children:(0,t.jsxs)("div",{className:(0,m.cx)("flex w-full max-w-[1300px] flex-col gap-2.5",v),children:[(0,t.jsxs)("header",{className:"flex w-full flex-col gap-2",children:[(0,t.jsxs)(c.Breadcrumb,{children:[(0,t.jsxs)(c.BreadcrumbItem,{href:"#",children:[(0,t.jsx)(o.Avatar,{size:"xs",color:"blue",initials:"B"}),"Board team"]}),(0,t.jsxs)(c.BreadcrumbItem,{href:"#",children:[(0,t.jsx)(o.Avatar,{size:"xs",color:"neutral",initials:"M"}),"Mertcan"]}),(0,t.jsx)(c.BreadcrumbItem,{current:!0,icon:n,children:e})]}),(0,t.jsxs)("div",{className:"flex w-full flex-wrap items-end justify-between gap-2",children:[(0,t.jsxs)("div",{className:"flex min-w-0 items-center gap-1.5",children:[(0,t.jsx)(u.IconButton,{icon:y?a.RiCloseLine:a.RiMenuLine,size:"medium","aria-label":"Open navigation",onClick:()=>D(e=>!e),className:"lg:hidden"}),(0,t.jsx)("h1",{className:"px-1 text-title-2-medium whitespace-nowrap text-text-primary",children:i})]}),(0,t.jsx)("div",{className:"flex flex-wrap items-center justify-end gap-2.5",children:void 0!==p?p:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.NotificationBell,{}),(0,t.jsx)(d.Button,{variant:"secondary",size:"medium",leadingIcon:a.RiFilter3Fill,children:"Filters"}),(0,t.jsx)(d.Button,{variant:"primary",size:"medium",leadingIcon:a.RiAddFill,children:"Create ticket"})]})})]})]}),(0,t.jsx)("div",{className:"flex w-full flex-col gap-4 pb-4",children:f})]})})]})},"STARTER_SITE_PREFIX",0,p,"starterNav",0,g,"useStarterBase",0,h,"useStarterSelected",0,x],55915)},50621,e=>{"use strict";var t=e.i(38935),a=e.i(71864),r=e.i(56966),i=e.i(6632),n=e.i(48545),l=e.i(52410),s=e.i(46585),o=e.i(22640),c=e.i(90688),d=e.i(92533),u=e.i(82122),m=e.i(87743),p=e.i(17185),h=e.i(31614),g=e.i(80066),x=e.i(38472),f=e.i(75744),b=e.i(7196),v=e.i(33224),y=e.i(79571),D=e.i(4352);let w=[{name:"Mertcan Esmergul",email:"hi@mertcan.works"},{name:"Eric Song",email:"ericsong@yahoo.com"},{name:"Olivia Brooks",email:"oliviabrooks@gmail.com"}],j=[["2026-07-28","Coffee","09:30","lime"],["2026-07-30","Payday","","lime"],["2026-08-01","Brunch","11:00","lime"],["2026-08-02","Stand-up","11:30","pink"],["2026-08-02","1:1 sync","16:30","lime"],["2026-08-05","Gym","07:00","pink"],["2026-08-08","Game night","19:00","purple"],["2026-08-11","Holidays","","emerald"],["2026-08-11","Birthday night at Bacalar’s","20:30","purple"],["2026-08-14","Retro","15:00","blue"],["2026-08-17","Planning","10:00","blue"],["2026-08-17","Haircut","16:00","emerald"],["2026-08-20","Stand-up","11:30","pink"],["2026-08-20","Team lunch","13:00","purple"],["2026-08-20","Portfolio review","14:30","blue"],["2026-08-20","1:1 sync","16:30","lime"],["2026-08-20","Walk","18:00","emerald"],["2026-08-20","Movie night","20:30","purple"],["2026-08-24","Dinner with friends","19:15","purple"],["2026-08-27","Yoga","07:30","pink"],["2026-08-29","Brunch","11:00","lime"],["2026-08-31","Payday","","lime"],["2026-09-01","Kickoff","09:00","blue"],["2026-09-02","Standup","09:00","pink"],["2026-09-04","Dentist","10:30","emerald"],["2026-06-28","Concert","20:00","purple"],["2026-06-30","Payday","","lime"],["2026-06-30","Standup","09:00","pink"],["2026-07-01","Kickoff","09:00","blue"],["2026-07-04","Holiday","","emerald"],["2026-07-08","Sync","09:30","blue"],["2026-07-10","Vet visit","10:00","emerald"],["2026-07-11","Game night","19:00","purple"],["2026-07-14","Standup","09:00","pink"],["2026-07-17","Design review","11:00","blue"],["2026-07-17","Team lunch","13:00","purple"],["2026-07-18","Brunch","11:00","lime"],["2026-07-21","Yoga","07:30","pink"],["2026-07-25","Movie night","20:00","purple"],["2026-09-08","Planning","10:00","blue"],["2026-09-10","Design review","11:00","blue"],["2026-09-10","Client call","14:00","emerald"],["2026-09-11","Gym","07:00","pink"],["2026-09-15","Haircut","16:00","emerald"],["2026-09-17","Book club","19:00","purple"],["2026-09-21","Game night","19:00","purple"],["2026-09-24","Standup","09:00","pink"],["2026-09-24","Team lunch","12:30","lime"],["2026-09-25","Retro","15:00","blue"],["2026-09-29","Coffee","09:30","lime"],["2026-09-30","Payday","","lime"],["2026-10-06","Sync","09:30","blue"]].map(([e,t,a,r],i)=>({id:`event-${i}`,date:e,title:t,start:a||void 0,color:r,duration:60,location:"Amsterdam",participants:w,reminder:"2h before",meetingUrl:0===i?"https://meet.google.com/fii-exdj-aqg":void 0})),C=[{id:"mention-notes",category:"mentions",group:"Today",title:"Livia mentioned you",description:"Can you review the new empty state before we ship the dashboard?",timestamp:"2m",unread:!0,avatar:{src:"/avatars/livia-saris.webp",alt:"Livia Saris"},actions:[{id:"reply",label:"Reply",variant:"primary"},{id:"view",label:"View thread",variant:"secondary"}]},{id:"backup-ready",category:"system",group:"Today",title:"Workspace backup is ready",description:"The July 23 backup finished successfully and is ready to download.",timestamp:"18m",unread:!0,status:"success",actions:[{id:"download",label:"Download",variant:"secondary"}]},{id:"project-invite",category:"activity",group:"Today",title:"You joined Project Sea",description:"Maria added you as an editor. You now have access to all project files.",timestamp:"1h",unread:!0,status:"information"},{id:"pull-request",category:"mentions",group:"Earlier this week",title:"Jaydon requested your review",description:"Pull request #284 updates the notification preferences flow.",timestamp:"Mon",unread:!0,avatar:{src:"/avatars/jaydon-aminoff.webp",alt:"Jaydon Aminoff"},actions:[{id:"review",label:"Review changes",variant:"secondary"}]},{id:"security-check",category:"system",group:"Earlier this week",title:"Security check completed",description:"No exposed credentials or vulnerable dependencies were found.",timestamp:"Sun",status:"success"},{id:"deploy-failed",category:"system",group:"Earlier this week",title:"Preview deployment failed",description:"The build stopped while validating the application routes.",timestamp:"Sat",unread:!0,status:"error",actions:[{id:"retry",label:"Retry",variant:"primary"},{id:"logs",label:"View logs",variant:"secondary"}]}],_=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],k=["lime","blue","pink","purple","emerald"],N={blue:"bg-calendar-event-blue-background text-calendar-event-blue-title",pink:"bg-calendar-event-pink-background text-calendar-event-pink-title",purple:"bg-calendar-event-purple-background text-calendar-event-purple-title",lime:"bg-calendar-event-lime-background text-calendar-event-lime-title",emerald:"bg-calendar-event-emerald-background text-calendar-event-emerald-title"},E={blue:"text-calendar-event-blue-time",pink:"text-calendar-event-pink-time",purple:"text-calendar-event-purple-time",lime:"text-calendar-event-lime-time",emerald:"text-calendar-event-emerald-time"};function A({direction:e}){return(0,t.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:(0,y.cx)("size-4 text-foreground-icon-primary","previous"===e?"rotate-90":"-rotate-90"),children:(0,t.jsx)("path",{d:"M4 7L7.29289 10.2929C7.68342 10.6834 8.31658 10.6834 8.70711 10.2929L12 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}let S=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function R({event:e,onEdit:a}){let i=function(e){let[t=2026,a=8,r=1]=e.split("-").map(Number);return new Date(t,a-1,r,12)}(e.date),n=e.start?.match(/^(\d{2}):(\d{2})$/),l=n&&e.duration?(60*Number(n[1])+Number(n[2])+e.duration)%1440:null,s=null===l?null:`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`,o=new Intl.DateTimeFormat("en",{timeZoneName:"shortOffset"}).formatToParts(i).find(e=>"timeZoneName"===e.type)?.value.replace(/^GMT$/,"GMT+0"),c="flex h-9 w-full shrink-0 items-center gap-2.5 rounded-2lg bg-background-secondary-default py-2 pr-1.5 pl-2",d="flex min-w-0 flex-1 items-center gap-1.5",u="shrink-0 rounded-sm bg-background-tertiary-default px-1 py-1 text-caption-1-medium text-text-secondary";return(0,t.jsxs)("div",{className:"flex w-full flex-col gap-2.5",children:[(0,t.jsxs)("div",{className:"flex w-full flex-col gap-px rounded-2lg bg-background-secondary-default px-2.5 py-2",children:[(0,t.jsx)("h3",{className:"text-headline-medium wrap-anywhere text-text-primary",children:e.title}),(0,t.jsx)("p",{className:"text-body-medium text-text-secondary",children:i.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})})]}),e.meetingUrl&&(0,t.jsxs)("div",{className:c,children:[(0,t.jsxs)("div",{className:d,children:[(0,t.jsx)("img",{src:"/brand/google_meet.png",alt:"",width:20,height:20,className:"size-5 shrink-0"}),(0,t.jsx)("span",{className:"text-body-2-medium whitespace-nowrap text-text-primary",children:"Google Meet"})]}),(0,t.jsxs)("div",{className:"flex shrink-0 items-center gap-1.5",children:[(0,t.jsx)("span",{className:u,children:e.meetingUrl.split("/").pop()}),(0,t.jsx)(h.ButtonLink,{href:e.meetingUrl,target:"_blank",rel:"noreferrer",size:"xs",variant:"primary",children:"Join"})]})]}),(0,t.jsxs)("div",{className:c,children:[(0,t.jsxs)("div",{className:d,children:[(0,t.jsx)(r.RiTimeLine,{className:"size-[18px] shrink-0 text-foreground-icon-secondary"}),(0,t.jsxs)("span",{className:"flex items-center gap-1.5 text-body-2-medium whitespace-nowrap text-text-primary",children:[(0,t.jsx)("span",{children:e.start??"All day"}),s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.RiArrowRightLine,{className:"size-5 shrink-0 text-foreground-icon-secondary"}),(0,t.jsx)("span",{children:s})]})]})]}),e.duration&&(0,t.jsx)("span",{className:u,children:e.duration>=60?`${e.duration/60}h`:`${e.duration}m`})]}),(0,t.jsxs)("div",{className:c,children:[(0,t.jsxs)("div",{className:d,children:[(0,t.jsx)(r.RiGlobalLine,{className:"size-[18px] shrink-0 text-foreground-icon-secondary"}),(0,t.jsxs)("span",{className:"flex items-center gap-1 text-body-2-medium whitespace-nowrap",children:[(0,t.jsx)("span",{className:"text-text-secondary",children:o}),e.location&&(0,t.jsx)("span",{className:"text-text-primary",children:e.location})]})]}),(0,t.jsx)(h.Button,{size:"xs",variant:"secondary",iconOnly:!0,leadingIcon:r.RiCornerDownLeftLine,"aria-label":"Edit timezone",className:"text-foreground-icon-secondary",onClick:()=>a?.(e,"timezone")})]}),e.participants?.length?(0,t.jsxs)("div",{className:"flex w-full flex-col gap-0.5 rounded-2lg bg-background-secondary-default py-2 pr-1.5 pl-2",children:[(0,t.jsxs)("div",{className:"flex w-full items-center gap-2.5",children:[(0,t.jsxs)("div",{className:d,children:[(0,t.jsx)(r.RiGlobalLine,{className:"size-[18px] shrink-0 text-foreground-icon-secondary"}),(0,t.jsx)("span",{className:"text-body-2-medium whitespace-nowrap text-text-secondary",children:"Participants"})]}),(0,t.jsx)(h.Button,{size:"xs",variant:"secondary",iconOnly:!0,leadingIcon:r.RiGroupLine,"aria-label":"Edit participants",className:"text-foreground-icon-secondary",onClick:()=>a?.(e,"participants")})]}),(0,t.jsx)("div",{className:"flex w-full flex-col",children:e.participants.map((e,a)=>(0,t.jsxs)("div",{className:"flex w-full items-center gap-2 rounded-2lg py-1.5",children:[(0,t.jsx)(p.Avatar,{size:"xs",initials:e.name.charAt(0),color:1===a?"blue":"neutral"}),(0,t.jsx)("span",{className:"truncate text-body-2-medium text-text-primary",children:e.email})]},e.email))})]}):null,e.reminder&&(0,t.jsxs)("div",{className:c,children:[(0,t.jsxs)("div",{className:d,children:[(0,t.jsx)(r.RiNotificationLine,{className:"size-[18px] shrink-0 text-foreground-icon-secondary"}),(0,t.jsxs)("span",{className:"flex items-center gap-1 text-body-2-medium whitespace-nowrap",children:[(0,t.jsx)("span",{className:"text-text-secondary",children:"Reminders"}),(0,t.jsx)("span",{className:"text-text-primary",children:e.reminder})]})]}),(0,t.jsx)(h.Button,{size:"xs",variant:"secondary",iconOnly:!0,leadingIcon:r.RiCornerDownLeftLine,"aria-label":"Edit reminders",className:"text-foreground-icon-secondary",onClick:()=>a?.(e,"reminders")})]})]})}function F({event:e,onSelect:a,onEdit:r,compact:d=!1}){let[p,h]=(0,s.useState)(!1),g=!0===(0,l.useReducedMotion)(),x=(0,s.useRef)(null),f=(0,s.useRef)(null),b=(0,s.useRef)(null);return(0,v.useDismissOnOutsidePress)(p,()=>h(!1),[x,b]),(0,t.jsxs)(c.DialogTrigger,{isOpen:p,onOpenChange:h,children:[(0,t.jsxs)(o.Button,{ref:x,onPress:()=>{f.current=x.current?.closest('[role="gridcell"]')??x.current,a?.(e)},"aria-label":`${e.title}${e.start?` ${e.start}`:""}`,className:(0,y.cx)("flex w-full min-w-0 cursor-pointer items-center justify-between gap-0.5 rounded-sm px-1 py-0.5 outline-none transition-[filter] duration-150 hover:brightness-95 focus-visible:ring-2 focus-visible:ring-border-focus-ring sm:gap-1 sm:rounded-md sm:px-1.5",N[e.color??"lime"]),children:[(0,t.jsx)("span",{className:"truncate text-[10px] leading-3 sm:text-body-2-medium",children:e.title}),e.start&&(0,t.jsx)("span",{className:(0,y.cx)("hidden shrink-0 opacity-70 sm:inline sm:text-caption-1-medium",E[e.color??"lime"]),children:e.start})]}),d&&(0,m.createPortal)((0,t.jsx)(i.AnimatePresence,{children:p&&(0,t.jsx)(n.motion.div,{"aria-hidden":"true",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3*!g,ease:"easeOut"},className:"pointer-events-none fixed inset-0 z-[99999] bg-black/10 dark:bg-transparent"})}),document.body),(0,t.jsx)(u.Popover,{ref:b,triggerRef:f,isNonModal:!0,placement:"right top",offset:6,className:"w-[302px] max-w-[calc(100vw-32px)] rounded-[20px] border border-border-button-default bg-background-primary-default p-2.5 outline-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04),0px_7px_8px_0px_rgba(0,0,0,0.04)] transition duration-150 ease-out sm:data-[entering]:scale-90 sm:data-[entering]:opacity-0 sm:data-[entering]:blur-[4px] sm:data-[exiting]:scale-90 sm:data-[exiting]:opacity-0 sm:data-[exiting]:blur-[4px] max-sm:fixed! max-sm:inset-x-0! max-sm:top-auto! max-sm:bottom-0! max-sm:m-0! max-sm:max-h-[85dvh]! max-sm:w-full max-sm:max-w-none max-sm:overflow-y-auto max-sm:rounded-[24px] max-sm:rounded-b-none max-sm:border-x-0 max-sm:border-b-0 max-sm:pb-[calc(10px+env(safe-area-inset-bottom))] max-sm:duration-300 max-sm:data-[entering]:translate-y-full max-sm:data-[exiting]:translate-y-full",children:(0,t.jsx)(c.Dialog,{"aria-label":`${e.title} details`,className:"outline-none",children:(0,t.jsx)(R,{event:e,onEdit:r})})})]})}function T({onAddAccount:e,onCalendarSelect:a}){let[i,n]=(0,s.useState)(!1);return(0,t.jsxs)(f.Dropdown,{isOpen:i,onOpenChange:n,children:[(0,t.jsx)(f.DropdownTrigger,{"aria-label":"Inbox",className:"flex size-9 shrink-0 items-center justify-center rounded-2lg border border-border-button-default bg-background-primary-default shadow-xs hover:bg-background-primary-hover",children:(0,t.jsx)(r.RiInbox2Line,{className:"size-5 text-foreground-icon-primary"})}),(0,t.jsxs)(f.DropdownPopover,{"aria-label":"Calendar subscriptions",placement:"bottom end",offset:8,className:"w-[266px] data-[placement=bottom]:origin-top-right",dialogClassName:"gap-4",children:[[{account:"hi@mertcan.works",calendars:["Incoming events","F1 Schedule","Holidays in Hetherlands"],tones:["bg-blue-200 text-blue-900","bg-red-200 text-red-700","bg-lime-200 text-lime-700"]},{account:"mertcanesmergul@gmail.com",calendars:["Incoming events","World Cup 2026"],tones:["bg-blue-200 text-blue-900","bg-purple-200 text-purple-700"]},{account:"hi@strider.studio",calendars:["Incoming events","UFC Nights","House of Dragons"],tones:["bg-blue-200 text-blue-900","bg-teal-200 text-teal-700","bg-pink-200 text-pink-700"]}].map((e,i)=>(0,t.jsxs)("div",{className:"contents",children:[i>0&&(0,t.jsx)("div",{className:"-mx-2.5 -my-1 h-px bg-border-button-default"}),(0,t.jsxs)("div",{className:"flex w-full flex-col gap-1.5 pt-[5px]",children:[(0,t.jsx)("p",{className:"pl-2 text-body-medium text-text-secondary",children:e.account}),(0,t.jsx)("div",{className:"flex w-full flex-col gap-1",children:e.calendars.map((i,l)=>{let s=`${e.account}-${i}`;return(0,t.jsxs)("button",{type:"button",onClick:()=>{n(!1),a?.(e.account,i)},className:"flex w-full cursor-pointer items-center gap-2 rounded-2lg px-2 py-1.5 outline-none transition-colors hover:bg-background-primary-hover focus-visible:bg-background-primary-hover",children:[(0,t.jsx)("span",{className:(0,y.cx)("flex size-5 shrink-0 items-center justify-center rounded-md",e.tones[l]),children:(0,t.jsx)(r.RiRssFill,{className:"size-3"})}),(0,t.jsx)("span",{className:"truncate text-body-medium text-text-primary",children:i})]},s)})})]})]},e.account)),(0,t.jsx)(h.Button,{size:"small",variant:"secondary",leadingIcon:r.RiAddLine,className:"w-full",onClick:()=>{n(!1),e?.()},children:"Add new account"})]})]})}function M({date:e,onAdd:i}){let[n,l]=(0,s.useState)(!1),[o,u]=(0,s.useState)(""),[m,p]=(0,s.useState)(null),[f,v]=(0,s.useState)("09:00"),[D,w]=(0,s.useState)("blue"),j=(0,s.useId)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.Button,{onClick:()=>l(!0),leadingIcon:r.RiAddLine,variant:"primary",size:"medium",children:"New event"}),(0,t.jsx)(d.ModalOverlay,{isOpen:n,onOpenChange:l,isDismissable:!0,className:"fixed inset-0 z-50 flex items-center justify-center bg-background-full/60 p-4 backdrop-blur-sm",children:(0,t.jsx)(d.Modal,{className:"w-full max-w-[400px] rounded-3xl border border-border-button-default bg-background-primary-default p-5 shadow-dropdown",children:(0,t.jsxs)(c.Dialog,{"aria-label":"New event",className:"outline-none",children:[(0,t.jsxs)("div",{className:"mb-5 flex items-center justify-between",children:[(0,t.jsx)("h2",{className:"text-title-3-semibold text-text-primary",children:"New event"}),(0,t.jsx)(g.IconButton,{icon:r.RiCloseLine,"aria-label":"Close new event",size:"small",onClick:()=>l(!1)})]}),(0,t.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.trim()&&(i({id:`event-${globalThis.crypto.randomUUID()}`,title:o.trim(),date:m?.toString()??S(e),start:f||void 0,color:D,duration:60}),l(!1),u(""),p(null))},className:"flex flex-col gap-4",children:[(0,t.jsxs)(b.TextField,{"aria-label":"Event name",value:o,onChange:u,isRequired:!0,children:[(0,t.jsx)("span",{className:"text-body-2-medium text-text-secondary",children:"Event name"}),(0,t.jsx)(b.InputBase,{id:j,placeholder:"What’s happening?",autoFocus:!0})]}),(0,t.jsxs)("div",{className:"flex items-end gap-3",children:[(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-1",children:[(0,t.jsx)("span",{className:"text-body-2-medium text-text-secondary",children:"Date"}),(0,t.jsx)(x.DatePicker,{"aria-label":"Event date",value:m??new a.CalendarDate(e.getFullYear(),e.getMonth()+1,e.getDate()),onChange:p})]}),(0,t.jsxs)(b.TextField,{"aria-label":"Start time",value:f,onChange:v,className:"max-w-[120px]",children:[(0,t.jsx)("span",{className:"text-body-2-medium text-text-secondary",children:"Time"}),(0,t.jsx)(b.InputBase,{type:"time"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("span",{className:"text-body-2-medium text-text-secondary",children:"Color"}),(0,t.jsx)("div",{className:"flex gap-2",children:k.map(e=>(0,t.jsx)("button",{type:"button","aria-label":`${e} event color`,"aria-pressed":D===e,onClick:()=>w(e),className:(0,y.cx)("flex size-7 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",N[e]),children:D===e&&(0,t.jsx)(r.RiCheckLine,{className:"size-4"})},e))})]}),(0,t.jsxs)("div",{className:"mt-2 flex justify-end gap-2",children:[(0,t.jsx)(h.Button,{variant:"secondary",onClick:()=>l(!1),children:"Cancel"}),(0,t.jsx)(h.Button,{type:"submit",variant:"primary",disabled:!o.trim(),children:"Create event"})]})]})]})})})]})}let L="(max-width: 639px)";function z(e){let t=window.matchMedia(L);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}let B=()=>window.matchMedia(L).matches,P=()=>!1;e.s(["CALENDAR_EVENTS",0,j,"Calendar",0,function({date:e,onDateChange:r,events:i,onEventsChange:n,onEventSelect:l,notifications:o=C,onAddAccount:c,onCalendarSelect:d,onEventEdit:u,className:m}={}){let[p,h]=(0,s.useState)(()=>new Date(2026,7,1,12)),[g,b]=(0,s.useState)(j),[v,w]=(0,s.useState)(!1),k=(0,s.useRef)(null),N=(0,s.useSyncExternalStore)(z,B,P),E=e??p,R=i??g,L=E.getFullYear(),I=E.getMonth(),O=E.toLocaleDateString("en-US",{month:"long",year:"numeric"}),$=new Date(L,I,1,12),G=Array.from({length:42},(e,t)=>new Date(L,I,t-$.getDay()+1,12)),H=new Map;for(let e of R){let t=H.get(e.date)??[];t.push(e),H.set(e.date,t)}function U(t){e||h(t),r?.(t)}return(0,t.jsxs)("section",{className:(0,y.cx)("flex w-full min-w-0 flex-col gap-2.5",m),"aria-label":"Calendar",children:[(0,t.jsxs)("header",{className:"flex flex-wrap items-end justify-between gap-2 px-3 pt-3 sm:px-0 sm:pt-0",children:[(0,t.jsx)("h1",{className:"whitespace-nowrap px-1 text-title-2-medium text-text-primary",children:O}),(0,t.jsxs)("div",{className:"flex w-full flex-nowrap items-start gap-2.5 sm:w-auto",children:[(0,t.jsx)(D.NotificationBell,{notifications:o,popoverClassName:"w-[430px] max-w-[calc(100vw-32px)] origin-top-right transition duration-150 ease-out data-[entering]:scale-95 data-[entering]:opacity-0 data-[entering]:blur-[2px] data-[exiting]:scale-95 data-[exiting]:opacity-0 data-[exiting]:blur-[2px]"}),(0,t.jsx)(T,{onAddAccount:c,onCalendarSelect:d}),(0,t.jsxs)("div",{className:"relative h-9 min-w-0 flex-1 sm:w-[320px] sm:flex-none",children:[(0,t.jsxs)("div",{className:"absolute inset-x-0 top-0 flex items-center rounded-2lg border border-border-button-default bg-background-primary-default p-2 shadow-dropdown dark:border-transparent dark:shadow-none",children:[(0,t.jsx)("button",{type:"button","aria-label":"Previous month",onClick:()=>U(new Date(L,I-1,1,12)),className:"flex size-4 shrink-0 items-center justify-center rounded-[3px] outline-none hover:bg-background-secondary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring",children:(0,t.jsx)(A,{direction:"previous"})}),(0,t.jsxs)("button",{ref:k,type:"button",onClick:()=>w(!v),"aria-label":`Jump to date, ${O}`,"aria-expanded":v,className:"min-w-0 flex-1 truncate text-center text-body-medium text-text-primary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",children:[(0,t.jsx)("span",{className:"sm:hidden",children:E.toLocaleDateString("en-US",{month:"short"})}),(0,t.jsx)("span",{className:"hidden sm:inline",children:O})]}),(0,t.jsx)("button",{type:"button","aria-label":"Next month",onClick:()=>U(new Date(L,I+1,1,12)),className:"flex size-4 shrink-0 items-center justify-center rounded-[3px] outline-none hover:bg-background-secondary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring",children:(0,t.jsx)(A,{direction:"next"})})]}),(0,t.jsx)(x.DatePicker,{"aria-label":"Jump to date",triggerRef:k,isOpen:v,onOpenChange:w,value:new a.CalendarDate(L,I+1,E.getDate()),onChange:e=>{e&&U(new Date(e.year,e.month-1,e.day,12))}})]}),(0,t.jsx)(M,{date:E,onAdd:function(e){let t=[...R,e];i||b(t),n?.(t)}})]})]}),(0,t.jsx)("div",{className:"w-full overflow-hidden rounded-b-3xl bg-background-secondary-default sm:overflow-visible sm:rounded-3xl sm:p-3",children:(0,t.jsxs)("div",{className:"flex h-full min-h-0 w-full flex-col overflow-hidden border-y border-separator-border-strong dark:border-separator-border sm:h-auto sm:gap-2 sm:overflow-visible sm:border-0",children:[(0,t.jsx)("div",{className:"grid grid-cols-7 border-b border-separator-border-strong dark:border-separator-border sm:gap-2 sm:border-0",children:_.map(e=>(0,t.jsx)("span",{className:"flex items-center justify-center border-r border-separator-border-strong bg-background-secondary-default px-0.5 py-1 text-center text-[11px] leading-4 text-text-secondary last:border-r-0 dark:border-separator-border sm:rounded-xl sm:border-0 sm:px-2.5 sm:py-[5px] sm:text-body-2-regular",children:e},e))}),(0,t.jsx)("div",{role:"grid","aria-label":O,className:"grid min-h-0 flex-1 grid-cols-7 grid-rows-[repeat(6,minmax(0,1fr))] sm:flex-none sm:grid-rows-[repeat(6,minmax(0,auto))] sm:gap-2",children:G.map(e=>{let a=S(e),r=H.get(a)??[],i=e.getMonth()===I;return(0,t.jsx)("div",{role:"gridcell","aria-label":e.toLocaleDateString("en-US",{month:"long",day:"numeric"}),className:"relative h-full min-w-0 border-r border-b border-separator-border-strong last:border-b-0 nth-[7n]:border-r-0 nth-[n+36]:border-b-0 dark:border-separator-border sm:border-0",children:(0,t.jsxs)("div",{className:(0,y.cx)("relative flex h-full min-h-[72px] min-w-0 flex-col overflow-hidden sm:min-h-[94px] sm:rounded-xl lg:min-h-[105px] xl:min-h-[128px] 2xl:min-h-[164px]",i?"bg-background-primary-default dark:bg-background-secondary-default sm:shadow-card sm:dark:bg-background-primary-default":"bg-background-secondary-default sm:bg-background-tertiary-default"),children:[(0,t.jsx)("button",{type:"button","aria-label":`Select ${a}`,onClick:()=>U(e),className:(0,y.cx)("w-full pt-1.5 pl-1.5 text-left text-[11px] leading-4 font-medium outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-border-focus-ring sm:pt-2 sm:pl-2.5 sm:text-body-2-medium",i?"text-text-primary":"text-text-secondary"),children:e.getDate()}),(0,t.jsxs)("div",{className:"mt-auto flex min-w-0 flex-col gap-0.5 px-1 pb-1 sm:gap-[5px] sm:px-2 sm:pb-2",children:[r.length>4&&(0,t.jsxs)(f.Dropdown,{children:[(0,t.jsxs)(f.DropdownTrigger,{className:"w-full truncate rounded-sm text-left text-[10px] leading-3 font-medium text-text-secondary sm:text-body-2-medium",children:["+",r.length-4," more"]}),(0,t.jsx)(f.DropdownPopover,{"aria-label":`Events on ${a}`,className:"w-[280px]",children:(0,t.jsx)(f.DropdownGroup,{label:e.toLocaleDateString("en-US",{month:"long",day:"numeric"}),children:r.map(e=>(0,t.jsx)(F,{event:e,onSelect:l,onEdit:u,compact:N},e.id))})})]}),r.slice(0,4).map(e=>(0,t.jsx)(F,{event:e,onSelect:l,onEdit:u,compact:N},e.id))]})]})},a)})})]})})]})}])},36297,e=>{"use strict";var t=e.i(38935),a=e.i(48545),r=e.i(46585),i=e.i(79240),n=e.i(79571),l=e.i(197);let s=[{label:"Move",value:1592,goal:1941,unit:"kcal",tone:3,progress:.82},{label:"Exercise",value:105,goal:175,unit:"min",tone:2,displayValue:"1h 45m",progress:.6},{label:"Running",value:5.2,goal:6.93,unit:"km",tone:4,progress:.75}];function o({rings:e=s,active:r,onHover:c,className:d,animate:u=!0}){let m=(0,i.useHydratedReducedMotion)(),p=e.length>1?Math.min(24,64/(e.length-1)):24,h=Math.min(18,.75*p);return(0,t.jsx)("svg",{viewBox:"0 0 200 200",className:(0,n.cx)("h-full max-h-[210px] w-full overflow-visible",d),role:"img","aria-label":e.map(e=>`${e.label}: ${e.displayValue??`${e.value} ${e.unit??""}`}`).join(", "),children:e.map((e,i)=>{let n=82-i*p,s=e.color??`var(--color-chart-${e.tone})`,o=100*(0,l.safeRatio)(e.progress??e.value/e.goal,1);return(0,t.jsxs)("g",{transform:"rotate(-90 100 100)",onMouseEnter:()=>c?.(i),onMouseLeave:()=>c?.(null),opacity:null!=r&&r!==i?.25:1,className:"transition-opacity duration-200 motion-reduce:transition-none",children:[(0,t.jsx)("circle",{cx:100,cy:100,r:n,fill:"none",stroke:s,strokeWidth:h,opacity:.16}),(0,t.jsx)(a.motion.circle,{cx:100,cy:100,r:n,pathLength:100,fill:"none",stroke:s,strokeWidth:h,strokeLinecap:"round",initial:!m&&!!u&&{strokeDasharray:"0 100"},animate:{strokeDasharray:`${o} ${100-o}`},transition:{duration:m||!u?0:.65,ease:"easeOut"}},m?"reduced":"animated")]},e.label)})})}e.s(["ACTIVITY_RINGS",0,s,"ActivityRings",0,o,"ActivityRingsCard",0,function({rings:e=s,title:a="Activity",className:i,height:c=330,selectedDate:d}={}){let[u,m]=(0,r.useState)(null),p=d&&e===s?e.map((e,t)=>({...e,value:0===t?816+(d.getDate()-10)*17:e.value,displayValue:0===t?void 0:e.displayValue,progress:0===t?.29+d.getDate()%8/20:e.progress})):e;return(0,t.jsxs)("section",{className:(0,n.cx)("flex w-full min-w-0 flex-col gap-4 rounded-[20px] bg-background-secondary-default p-2.5",i),style:{height:"auto"===c?void 0:c},children:[(0,t.jsxs)("div",{className:"flex flex-col gap-[11px]",children:[(0,t.jsx)("p",{className:"px-1.5 pt-1.5 text-body-medium text-text-secondary",children:a}),(0,t.jsx)("div",{className:"px-2 pb-1",children:(0,t.jsx)(l.StatTiles,{items:p.map(e=>({label:e.label,value:e.displayValue??`${e.value.toLocaleString("en-US")} ${e.unit??""}`,color:e.color??`var(--color-chart-${e.tone})`})),active:u,onHover:m})})]}),(0,t.jsx)("div",{className:"flex min-h-0 w-full flex-1 items-center justify-center",children:(0,t.jsx)(o,{rings:p,active:u,onHover:m})})]})}])},68161,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(359),i=e.i(88699),n=e.i(68893),l=["axis"],s=(0,a.forwardRef)((e,t)=>a.createElement(n.CartesianChart,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:l,tooltipPayloadSearcher:i.arrayTooltipSearcher,categoricalChartProps:e,ref:t})),o=e.i(13807),c=e.i(94500),d=e.i(13231),u=e.i(84133),m=e.i(73449),p=e.i(79240),h=e.i(81222),g=e.i(76660),x=e.i(197);let f=[{key:"organic",label:"Organic"},{key:"referral",label:"Referral"},{key:"paid",label:"Paid"}],b=g.AREA_DEMO_RANGES[0].data,v=g.AREA_DEMO_RANGES;e.s(["AREA_DATA",0,b,"AreaChartCard",0,function({data:e,series:i=f,ranges:n,title:l="Visitors",variant:g,stacked:y=!0,shape:D="smooth",prefix:w="",tiles:j=!0,...C}={}){let _=n??(e?void 0:v),k=(0,x.useChartRange)(_,C.defaultRange,C.onRangeChange),N=k.current?.data??e??b,E=g??(y?"stacked":"overlap"),A=(0,p.useHydratedReducedMotion)(),S=(0,a.useId)(),R=(0,h.useChartHover)(),[F,T]=(0,a.useState)(null),M=i.map((e,t)=>e.color??(e.tone?`var(--color-chart-${e.tone})`:(0,x.ink)(t))),L=i.map(e=>(0,x.sum)(N.map(t=>(0,x.numeric)(t[e.key])))),z=null!=R.activeIndex?N[R.activeIndex]:void 0,B=z?(0,x.sum)(i.map((e,t)=>null==F||F===t?(0,x.numeric)(z[e.key]):0)):null!=F?L[F]??0:k.current?.headline??C.headline??("overlap"===E?L[0]??0:(0,x.sum)(L)),P=C.format??(e=>w+(0,h.formatNumber)(e));return(0,t.jsx)(x.ChartFrame,{title:z?.label??(null!=F?i[F]?.label??l:l),value:B,format:P,delta:k.current?.delta??C.delta,className:C.className,action:(0,t.jsx)(x.PeriodSelect,{ranges:_,selected:k.id,onChange:e=>{R.clear(),k.select(e)},label:k.current?.label??C.range}),footer:j&&(0,t.jsx)(x.StatTiles,{items:i.map((e,t)=>({label:e.label,value:P(z?(0,x.numeric)(z[e.key]):L[t]??0),color:M[t]})),active:F,onHover:T}),children:(0,t.jsx)("div",{className:"h-[196px] w-full min-w-0",children:(0,t.jsx)(c.ResponsiveContainer,{width:"100%",height:"100%",children:(0,t.jsxs)(s,{data:N,stackOffset:"percent"===E?"expand":"none",margin:{top:4,right:6,bottom:0,left:0},...R.handlers,children:[(0,t.jsx)("defs",{children:i.map((e,a)=>(0,t.jsxs)("linearGradient",{id:`${S}-${e.key}`,x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:M[a],stopOpacity:.55}),(0,t.jsx)("stop",{offset:"100%",stopColor:M[a],stopOpacity:.04})]},e.key))}),(0,t.jsx)(o.CartesianGrid,{vertical:!1,stroke:"var(--color-chart-track)",strokeDasharray:"4 4"}),(0,t.jsx)(m.YAxis,{...x.chartAxis,width:44,tickCount:"percent"===E?5:4,domain:"percent"===E?[0,1]:[0,"auto"],tickFormatter:e=>"percent"===E?`${Math.round(100*e)}%`:w+(0,x.shortNumber)(e)}),(0,t.jsx)(u.XAxis,{...x.chartAxis,dataKey:"label",tickMargin:12}),(0,t.jsx)(d.Tooltip,{content:()=>null,cursor:h.CURSOR}),i.map((e,a)=>(0,t.jsx)(r.Area,{type:"sharp"===D?"linear":"monotone",dataKey:e.key,stackId:"overlap"===E?void 0:"total",stroke:M[a],fill:`url(#${S}-${e.key})`,strokeWidth:2,opacity:null!=F&&F!==a?.18:1,activeDot:{r:3,strokeWidth:2},isAnimationActive:!A,animationDuration:600},e.key))]})})})})}],68161)},66733,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(79571),i=e.i(197);let n=["var(--color-chart-contributions-empty)","var(--color-chart-contributions-1)","var(--color-chart-contributions-2)","var(--color-chart-contributions-3)","var(--color-chart-contributions-4)","var(--color-chart-contributions-5)"],l=[["2026-01-01",0],["2026-01-11",0],["2026-01-21",23],["2026-01-31",3],["2026-02-10",1],["2026-02-19",0],["2026-03-01",10],["2026-03-11",3],["2026-03-21",12],["2026-03-31",0],["2026-04-10",4],["2026-04-20",2],["2026-04-30",12],["2026-05-09",2],["2026-05-19",13],["2026-05-29",0],["2026-06-08",6],["2026-06-18",20],["2026-06-28",1],["2026-07-08",6],["2026-07-18",4],["2026-07-27",9],["2026-08-06",0],["2026-08-16",0],["2026-08-26",0],["2026-09-05",3],["2026-09-15",13],["2026-09-25",0],["2026-10-05",2],["2026-10-14",0],["2026-10-24",4],["2026-11-03",19],["2026-11-13",0],["2026-11-23",0],["2026-12-03",11],["2026-12-13",6],["2026-12-23",9],["2026-01-02",0],["2026-01-12",0],["2026-01-22",36],["2026-02-01",4],["2026-02-11",3],["2026-02-21",1],["2026-03-03",3],["2026-03-13",0],["2026-03-22",6],["2026-04-01",0],["2026-04-11",9],["2026-04-21",0],["2026-05-01",9],["2026-05-11",0],["2026-05-21",3],["2026-05-31",3],["2026-06-09",3],["2026-06-19",10],["2026-06-29",13],["2026-07-09",18],["2026-07-19",9],["2026-07-29",2],["2026-08-08",3],["2026-08-18",1],["2026-08-27",4],["2026-09-06",0],["2026-09-16",6],["2026-09-26",0],["2026-10-06",0],["2026-10-16",1],["2026-10-26",8],["2026-11-05",0],["2026-11-14",24],["2026-11-24",0],["2026-12-04",11],["2026-12-14",0],["2026-12-24",0],["2026-01-04",0],["2026-01-14",0],["2026-01-24",1],["2026-02-02",1],["2026-02-12",20],["2026-02-22",19],["2026-03-04",6],["2026-03-14",0],["2026-03-24",0],["2026-04-03",26],["2026-04-13",6],["2026-04-22",2],["2026-05-02",0],["2026-05-12",9],["2026-05-22",1],["2026-06-01",3],["2026-06-11",2],["2026-06-21",2],["2026-07-01",0],["2026-07-10",21],["2026-07-20",9],["2026-07-30",3],["2026-08-09",21],["2026-08-19",22],["2026-08-29",4],["2026-09-08",9],["2026-09-18",13],["2026-09-27",15],["2026-10-07",29],["2026-10-17",6],["2026-10-27",0],["2026-11-06",0],["2026-11-16",6],["2026-11-26",30],["2026-12-06",1],["2026-12-15",10],["2026-12-25",27],["2026-01-05",0],["2026-01-15",6],["2026-01-25",0],["2026-02-04",6],["2026-02-14",6],["2026-02-24",38],["2026-03-05",15],["2026-03-15",4],["2026-03-25",9],["2026-04-04",3],["2026-04-14",6],["2026-04-24",0],["2026-05-04",10],["2026-05-14",34],["2026-05-23",3],["2026-06-02",0],["2026-06-12",1],["2026-06-22",0],["2026-07-02",0],["2026-07-12",6],["2026-07-22",9],["2026-08-01",0],["2026-08-11",1],["2026-08-20",1],["2026-08-30",6],["2026-09-09",2],["2026-09-19",1],["2026-09-29",1],["2026-10-09",4],["2026-10-19",16],["2026-10-29",6],["2026-11-07",1],["2026-11-17",2],["2026-11-27",11],["2026-12-07",14],["2026-12-17",0],["2026-12-27",21],["2026-01-07",6],["2026-01-17",0],["2026-01-26",14],["2026-02-05",6],["2026-02-15",10],["2026-02-25",1],["2026-03-07",9],["2026-03-17",6],["2026-03-27",34],["2026-04-06",9],["2026-04-15",13],["2026-04-25",2],["2026-05-05",3],["2026-05-15",6],["2026-05-25",6],["2026-06-04",17],["2026-06-14",0],["2026-06-24",33],["2026-07-03",6],["2026-07-13",0],["2026-07-23",6],["2026-08-02",2],["2026-08-12",0],["2026-08-22",9],["2026-09-01",9],["2026-09-11",0],["2026-09-20",1],["2026-09-30",12],["2026-10-10",2],["2026-10-20",9],["2026-10-30",2],["2026-11-09",0],["2026-11-19",4],["2026-11-29",12],["2026-12-08",0],["2026-12-18",0],["2026-12-28",6],["2026-01-08",3],["2026-01-18",0],["2026-01-28",4],["2026-02-07",6],["2026-02-17",9],["2026-02-26",2],["2026-03-08",9],["2026-03-18",2],["2026-03-28",12],["2026-04-07",0],["2026-04-17",14],["2026-04-27",6],["2026-05-07",3],["2026-05-16",3],["2026-05-26",6],["2026-06-05",0],["2026-06-15",15],["2026-06-25",0],["2026-07-05",0],["2026-07-15",24],["2026-07-25",1],["2026-08-03",0],["2026-08-13",3],["2026-08-23",4],["2026-09-02",6],["2026-09-12",3],["2026-09-22",4],["2026-10-02",3],["2026-10-12",0],["2026-10-21",0],["2026-10-31",6],["2026-11-10",2],["2026-11-20",3],["2026-11-30",15],["2026-12-10",14],["2026-12-20",9],["2026-12-30",4],["2026-01-09",15],["2026-01-19",0],["2026-01-29",0],["2026-02-08",15],["2026-02-18",6],["2026-02-28",11],["2026-03-10",0],["2026-03-20",10],["2026-03-29",6],["2026-04-08",23],["2026-04-18",35],["2026-04-28",12],["2026-05-08",9],["2026-05-18",0],["2026-05-28",6],["2026-06-07",0],["2026-06-16",11],["2026-06-26",6],["2026-07-06",33],["2026-07-16",11],["2026-07-26",1],["2026-08-05",6],["2026-08-15",2],["2026-08-25",0],["2026-09-03",13],["2026-09-13",9],["2026-09-23",21],["2026-10-03",0],["2026-10-13",4],["2026-10-23",6],["2026-11-02",12],["2026-11-12",3],["2026-11-21",3],["2026-12-01",10],["2026-12-11",15],["2026-12-21",0],["2026-12-31",2]].map(([e,t])=>({date:e,value:t})),s=[{id:"weekly",label:"Weekly",data:l,headline:958,delta:.148},{id:"monthly",label:"Monthly",data:l,headline:958,delta:.148},{id:"yearly",label:"Yearly",data:l,headline:958,delta:.148}],o=[{label:"Lifetime tokens",value:"9B"},{label:"Peak tokens",value:"562.7M"},{label:"Longest task",value:"12h 54m"},{label:"Top streak",value:"62 days"}];e.s(["CONTRIBUTIONS_DATA",0,l,"ContributionsCard",0,function({title:e="Contributions this year",data:c,ranges:d,defaultRange:u,onRangeChange:m,stats:p=o,color:h,className:g,headline:x,delta:f}={}){let b=d??(c?void 0:s),v=(0,i.useChartRange)(b,u,m),y=v.current?.data??c??l,[D,w]=(0,a.useState)(null),j=Math.max(1,...y.map(e=>e.value)),C=Math.max(1,Math.ceil(y.length/7));return(0,t.jsxs)(i.ChartFrame,{title:null==D?e:y[D]?.date??e,value:null==D?v.current?.headline??x??(0,i.sum)(y.map(e=>e.value)):y[D]?.value??0,delta:v.current?.delta??f,className:(0,r.cx)("sm:h-[337px]",g),children:[(0,t.jsx)("div",{className:"-mx-2 grid grid-cols-2 gap-2 sm:grid-cols-4",children:p.map(e=>(0,t.jsxs)("div",{className:"rounded-2lg bg-background-inner-default px-2.5 py-2.5",children:[(0,t.jsx)("p",{className:"text-body-medium text-text-primary",children:e.value}),(0,t.jsx)("p",{className:"text-body-medium text-text-secondary",children:e.label})]},e.label))}),(0,t.jsxs)("div",{className:"-mt-2 flex flex-col gap-2",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-body-medium text-text-secondary",children:"Activity"}),b&&(0,t.jsx)(i.PeriodTabs,{ranges:b,selected:v.id,onChange:e=>{w(null),v.select(e)},plain:!0})]}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsx)("div",{className:"grid min-w-[440px] gap-1",style:{gridTemplateColumns:`repeat(${C}, minmax(0,1fr))`,gridTemplateRows:"repeat(7, minmax(0,1fr))"},children:y.map((e,a)=>(0,t.jsx)("button",{type:"button","aria-label":`${e.date}: ${e.value} contributions`,onMouseEnter:()=>w(a),onMouseLeave:()=>w(null),onFocus:()=>w(a),onBlur:()=>w(null),className:"aspect-square min-h-2 rounded-[3px] outline-none transition-[background-color,opacity] duration-200 motion-reduce:transition-none hover:ring-2 hover:ring-border-focus-ring focus-visible:ring-2 focus-visible:ring-border-focus-ring",style:{background:e.value>0?h?`color-mix(in srgb, ${h} ${20+80*(0,i.safeRatio)(e.value,j)}%, var(--color-background-inner-default))`:n[e.value<=4?1:e.value<=9?2:e.value<=15?3:e.value<=24?4:5]:"var(--color-chart-contributions-empty)"}},e.date))})}),(0,t.jsx)("div",{className:"flex justify-between text-caption-1-medium text-text-tertiary",children:i.MONTHS.map(e=>(0,t.jsx)("span",{children:e},e))})]})]})}])},77243,e=>{"use strict";var t=e.i(38935),a=e.i(48545),r=e.i(46585),i=e.i(79240),n=e.i(81222),l=e.i(76660),s=e.i(197);let o=l.EARNINGS_DEMO_RANGES[0].data,c=l.EARNINGS_DEMO_RANGES;e.s(["EARNINGS_DATA",0,o,"EarningsChartCard",0,function({data:e,ranges:l,title:d="Earned so far",color:u="var(--color-chart-2)",max:m,...p}={}){let h=l??(e?void 0:c),g=(0,s.useChartRange)(h,p.defaultRange,p.onRangeChange),x=g.current?.data??e??o,[f,b]=(0,r.useState)(null),v=(0,i.useHydratedReducedMotion)(),y=m??1.04*Math.max(1,...x.map(e=>e.value)),D=p.format??(e=>`$${(0,n.formatNumber)(e)}`);return(0,t.jsx)(s.ChartFrame,{title:null==f?d:x[f]?.fullLabel??x[f]?.label??d,value:null==f?g.current?.headline??p.headline??(0,s.sum)(x.map(e=>e.value)):x[f]?.value??0,format:D,delta:g.current?.delta??p.delta,className:p.className,height:329,action:h&&(0,t.jsx)(s.PeriodTabs,{ranges:h,selected:g.id,onChange:e=>{b(null),g.select(e)}}),children:(0,t.jsxs)("div",{className:"flex min-h-0 flex-1 gap-4 pt-2",children:[(0,t.jsx)("div",{className:"relative mb-7 w-9 shrink-0 text-right text-caption-1-regular text-text-tertiary",children:[0,.25,.4167,.8333].map(e=>(0,t.jsx)("span",{className:"absolute right-0 translate-y-1/2",style:{bottom:`${100*e}%`},children:0===e?"$0":`$${Math.round(y*e/1e3)}K`},e))}),(0,t.jsx)("div",{className:"flex min-w-0 flex-1 gap-4",children:x.map((e,r)=>(0,t.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col items-center gap-3",children:[(0,t.jsx)("button",{type:"button","aria-label":`${e.label}: ${D(e.value)}`,onMouseEnter:()=>b(r),onMouseLeave:()=>b(null),onFocus:()=>b(r),onBlur:()=>b(null),className:"relative w-full max-w-8 flex-1 rounded-[11px] bg-chart-track outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",children:(0,t.jsx)(a.motion.span,{className:"absolute inset-x-0 bottom-0 rounded-[11px]",initial:!v&&{height:0,opacity:1},animate:{height:`${100*(0,s.safeRatio)(e.value,y)}%`,opacity:null!=f&&f!==r?.5:1},transition:{duration:.6*!v,ease:"easeOut"},style:{background:u,outline:f===r?`2px solid ${u}`:void 0,outlineOffset:4}},v?"reduced":"animated")}),(0,t.jsx)("span",{className:"text-caption-1-regular text-text-tertiary",children:e.label})]},e.label))})]})})}])},18006,e=>{"use strict";var t=e.i(38935),a=e.i(48545),r=e.i(46585),i=e.i(79240),n=e.i(81222),l=e.i(197);let s=[{label:"Link opened",value:197},{label:"Started",value:110},{label:"Completed",value:77},{label:"Converted",value:38}],o=[{id:"7d",label:"Last 7 days",stages:s,delta:.052},{id:"30d",label:"Last 30 days",stages:s.map((e,t)=>({...e,value:[842,463,301,152][t]})),delta:.034},{id:"90d",label:"Last 90 days",stages:s.map((e,t)=>({...e,value:[2510,1380,902,455][t]})),delta:-.018}];e.s(["FUNNEL_STAGES",0,s,"FunnelChartCard",0,function({stages:e,ranges:c,title:d="Sign-up funnel",shape:u="smooth",mono:m=!1,tiles:p=!0,...h}={}){let g=c??(e?void 0:o),x=(0,l.useChartRange)(g,h.defaultRange,h.onRangeChange),f=x.current?.stages??e??s,[b,v]=(0,r.useState)(null),y=(0,i.useHydratedReducedMotion)(),D=h.format??n.formatNumber,w=f[0]?.value??0,j=f.map((e,t)=>m?"var(--color-text-tertiary)":e.color??(0,l.ink)(t));return(0,t.jsx)(l.ChartFrame,{title:null==b?d:f[b]?.label??d,value:null==b?x.current?.headline??h.headline??w:f[b]?.value??0,format:D,delta:x.current?.delta??h.delta,className:h.className,action:(0,t.jsx)(l.PeriodSelect,{ranges:g,selected:x.id,onChange:e=>{v(null),x.select(e)},label:x.current?.label??h.range??"Last 7 days"}),footer:p&&(0,t.jsx)(l.StatTiles,{columns:Math.max(1,f.length),items:f.map((e,t)=>({label:e.label,value:D(e.value),color:j[t]})),active:b,onHover:v}),children:(0,t.jsx)("svg",{viewBox:"0 0 640 160",preserveAspectRatio:"none",className:"h-40 w-full overflow-visible",role:"img","aria-label":`${d}: ${f.map(e=>`${e.label} ${D(e.value)}`).join(", ")}`,children:f.map((e,r)=>{let i=640/Math.max(1,f.length),n=r*i,s=Math.max(4,136*(0,l.safeRatio)(e.value,w)),o=Math.max(4,136*(0,l.safeRatio)(f[r+1]?.value??e.value,w)),c=80-s/2,d=80+s/2,m=80-o/2,p=80+o/2,h="sharp"===u?`M ${n} ${c} L ${n+i-3} ${m} L ${n+i-3} ${p} L ${n} ${d} Z`:`M ${n} ${c} H ${n+.46*i} C ${n+.7*i} ${c} ${n+.68*i} ${m} ${n+i-3} ${m} L ${n+i-3} ${p} C ${n+.68*i} ${p} ${n+.7*i} ${d} ${n+.46*i} ${d} H ${n} Z`;return(0,t.jsxs)(a.motion.g,{initial:!y&&{opacity:0},animate:{opacity:null!=b&&b!==r?.25:1},transition:{duration:.4*!y,delay:y?0:.06*r},onMouseEnter:()=>v(r),onMouseLeave:()=>v(null),children:["sharp"!==u&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:h,fill:j[r],opacity:.12,transform:"translate(0 -12) scale(1 1.15)"}),(0,t.jsx)("path",{d:h,fill:j[r],opacity:.2,transform:"translate(0 -6) scale(1 1.075)"})]}),(0,t.jsx)("path",{d:h,fill:j[r]}),(0,t.jsx)("foreignObject",{x:n,y:70,width:i,height:24,children:(0,t.jsxs)("span",{className:"mx-auto block w-fit rounded-full bg-background-inner-default px-1.5 text-caption-1-medium text-text-primary",children:[Math.round(100*(0,l.safeRatio)(e.value,w)),"%"]})})]},`${x.id}-${e.label}-${y?"reduced":"animated"}`)})})})}])},35013,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(359),i=e.i(10415),n=e.i(82260),l=e.i(94500),s=e.i(13231),o=e.i(84133),c=e.i(73449),d=e.i(79240),u=e.i(79571),m=e.i(81222),p=e.i(76660),h=e.i(197);let g=p.LINE_DEMO_RANGES[0].data,x=p.LINE_DEMO_RANGES,f=[{key:"revenue",label:"Revenue"}];e.s(["LINE_DATA",0,g,"LineChartCard",0,function({data:e,series:p=f,ranges:b,title:v="Revenue",shape:y,curve:D="smooth",prefix:w="$",color:j,...C}={}){let _=b??(e?void 0:x),k=(0,h.useChartRange)(_,C.defaultRange,C.onRangeChange),N=k.current?.data??e??g,E=(0,m.useChartHover)(),A=(0,d.useHydratedReducedMotion)(),S=(0,a.useId)(),R=p[0],F=null!=E.activeIndex?N[E.activeIndex]:void 0,T=F?(0,h.numeric)(F[R?.key??""]):k.current?.headline??C.headline??(0,h.sum)(N.map(e=>(0,h.numeric)(e[R?.key??""]))),M=p.map((e,t)=>e.color??(e.tone?`var(--color-chart-${e.tone})`:0===t&&j?j:(0,h.ink)(t)));return(0,t.jsx)(h.ChartFrame,{title:F?.fullLabel??F?.label??v,value:T,format:C.format??(e=>w+(0,m.formatNumber)(e)),delta:k.current?.delta??C.delta,className:(0,u.cx)("gap-6",C.className),height:329,action:_&&(0,t.jsx)(h.PeriodTabs,{ranges:_,selected:k.id,onChange:e=>{E.clear(),k.select(e)}}),children:(0,t.jsx)("div",{className:"min-h-0 w-full flex-1",children:(0,t.jsx)(l.ResponsiveContainer,{width:"100%",height:"100%",children:(0,t.jsxs)(i.ComposedChart,{data:N,margin:{top:4,right:6,bottom:0,left:0},...E.handlers,children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:S,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:M[0],stopOpacity:.35}),(0,t.jsx)("stop",{offset:"100%",stopColor:M[0],stopOpacity:0})]})}),(0,t.jsx)(c.YAxis,{...h.chartAxis,width:44,domain:[0,1.1*Math.max(1,...N.flatMap(e=>p.map(t=>(0,h.numeric)(e[t.key]))))],tickCount:4,tickFormatter:e=>w+(Math.abs(e)>=1e3?`${Math.round(e/1e3)}K`:String(e))}),(0,t.jsx)(o.XAxis,{...h.chartAxis,dataKey:"label",tickMargin:12}),(0,t.jsx)(s.Tooltip,{content:()=>null,cursor:m.CURSOR}),R&&(0,t.jsx)(r.Area,{type:(y??D)==="sharp"?"linear":"monotone",dataKey:R.key,fill:`url(#${S})`,stroke:"none",activeDot:!1,isAnimationActive:!A,animationDuration:450}),p.map((e,a)=>(0,t.jsx)(n.Line,{type:(y??D)==="sharp"?"linear":"monotone",dataKey:e.key,stroke:e.color??(e.tone?`var(--color-chart-${e.tone}-active)`:0===a&&j?j:`var(--color-chart-${h.PALETTE[a%h.PALETTE.length]}-active)`),strokeWidth:2.5,strokeDasharray:e.dashed?"5 5":void 0,dot:!1,activeDot:(0,t.jsx)(h.PulseDot,{}),isAnimationActive:!A,animationDuration:450},e.key))]})})})})}])},16698,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(79571),i=e.i(36297),n=e.i(197);let l=new Date(2026,6,10),s=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;e.s(["MostActiveDaysCard",0,function({title:e="Most active days",data:o,selectedDate:c,defaultDate:d=l,onDateChange:u,showActivity:m=!0,className:p,headline:h=32459}={}){let[g,x]=(0,a.useState)(d),f=c??g,[b,v]=(0,a.useState)(f.getMonth()),y=(0,a.useRef)(null),D=f.getFullYear();(0,a.useEffect)(()=>{v(f.getMonth())},[f]),(0,a.useEffect)(()=>{let e=y.current?.querySelector(`[data-month="${b}"]`);e&&y.current&&(y.current.scrollTop=e.offsetTop)},[b]);let w=o?.find(e=>e.date===s(f));return(0,t.jsxs)("div",{className:(0,r.cx)("grid w-full min-w-0 gap-4",m&&"md:grid-cols-2",p),children:[(0,t.jsx)(n.ChartFrame,{title:e,value:w?.steps??h,suffix:"total steps",height:330,className:"rounded-[20px]",action:(0,t.jsx)(n.WeekSwitcher,{label:new Date(D,b).toLocaleDateString("en-US",{month:"long"}),onPrevious:()=>v(e=>(e+11)%12),onNext:()=>v(e=>(e+1)%12)}),children:(0,t.jsx)("div",{ref:y,className:"relative -mx-1.5 -mb-0.5 min-h-0 flex-1 overflow-y-auto rounded-2lg bg-background-inner-default px-2.5 [scrollbar-width:none]",children:n.MONTHS.map((e,a)=>{let n=new Date(D,a+1,0).getDate();return(0,t.jsxs)("div",{"data-month":a,className:"pb-4",children:[(0,t.jsx)("p",{className:"px-1 pt-2.5 pb-3 text-headline-medium text-text-primary",children:e}),(0,t.jsxs)("div",{className:"grid grid-cols-7 gap-0.5",children:[Array.from({length:0},(e,a)=>(0,t.jsx)("span",{},`blank-${a}`)),Array.from({length:n},(e,n)=>{let l=new Date(D,a,n+1),c=s(l),d=o?.find(e=>e.date===c),m=s(f)===c,p=l>f,h=d?.rings??i.ACTIVITY_RINGS.map((e,t)=>({...e,progress:p?.03:Math.max(.12,(17*n+11*t+7*a)%90/100)}));return(0,t.jsxs)("button",{type:"button","aria-label":l.toLocaleDateString("en-US",{dateStyle:"full"}),"aria-pressed":m,onClick:()=>{x(l),u?.(l)},className:(0,r.cx)("flex h-[76px] min-w-0 flex-col items-center justify-between rounded-2lg border-2 py-2 text-body-regular text-text-primary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",m?"border-chart-cursor":"border-transparent hover:bg-background-secondary-default"),children:[(0,t.jsx)("span",{children:n+1}),(0,t.jsx)(i.ActivityRings,{rings:h,className:"size-7 max-h-7",animate:!1})]},c)})]})]},e)})})}),m&&(0,t.jsx)(i.ActivityRingsCard,{title:`Activity for ${f.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}`,rings:w?.rings,selectedDate:f})]})}])},26722,e=>{"use strict";var t=e.i(38935),a=e.i(48545),r=e.i(46585),i=e.i(79240),n=e.i(81222),l=e.i(76660),s=e.i(197);let o=l.RADIAL_DEMO_RANGES[0].data,c=l.RADIAL_DEMO_RANGES;e.s(["RADIAL_DATA",0,o,"RadialChartCard",0,function({data:e,ranges:l,title:d="Visitors",variant:u="rings",tiles:m=!1,max:p,...h}={}){let g=l??(e?void 0:c),x=(0,s.useChartRange)(g,h.defaultRange,h.onRangeChange),f=x.current?.data??e??o,[b,v]=(0,r.useState)(null),y=(0,i.useHydratedReducedMotion)(),D=(0,r.useId)(),w=(0,s.sum)(f.map(e=>e.value)),j=x.current?.max??p??1.1*Math.max(1,...f.map(e=>e.value)),C=h.format??n.formatNumber,_="gauge"===u||"solid"===u,k="stacked"===u,N=f[b??0],E=100*(0,s.safeRatio)(N?.value??0,k?w:j),A=0;return(0,t.jsx)(s.ChartFrame,{title:null==b?d:f[b]?.label??d,value:null==b?x.current?.headline??h.headline??w:f[b]?.value??0,format:C,delta:x.current?.delta??h.delta,className:h.className,action:(0,t.jsx)(s.PeriodSelect,{ranges:g,selected:x.id,onChange:e=>{v(null),x.select(e)},label:x.current?.label??h.range??"Last 7 days"}),footer:m?(0,t.jsx)(s.StatTiles,{items:f.map((e,t)=>({label:e.label,value:C(e.value),color:e.color??(0,s.ink)(t)})),active:b,onHover:v}):k&&(0,t.jsx)("div",{className:"flex flex-wrap justify-center gap-x-6 gap-y-2",children:f.map((e,a)=>(0,t.jsxs)("button",{type:"button",onMouseEnter:()=>v(a),onMouseLeave:()=>v(null),onFocus:()=>v(a),onBlur:()=>v(null),className:"flex items-center gap-1.5 text-body-regular text-text-secondary",children:[(0,t.jsx)("span",{className:"size-2 rounded-full",style:{background:e.color??(0,s.ink)(a)}}),e.label," ",(0,t.jsx)("span",{className:"text-text-primary",children:C(e.value)})]},e.label))}),children:(0,t.jsxs)("div",{className:"relative h-[231px] w-full",children:[(0,t.jsxs)("svg",{viewBox:"0 0 260 231",className:"h-full w-full",role:"img","aria-label":f.map(e=>`${e.label}: ${C(e.value)}`).join(", "),children:["solid"===u&&(0,t.jsx)("circle",{cx:130,cy:115.5,r:102,fill:"var(--color-background-inner-default)"}),"grid"===u&&[25,50,75,100].map(e=>(0,t.jsx)("circle",{cx:130,cy:115.5,r:e,fill:"none",stroke:"var(--color-chart-track)",strokeDasharray:"3 3"},e)),(_?f.slice(0,1):f).map((e,r)=>{let i=_?82:k?88:50+r*(50/Math.max(1,f.length-1)),n=_?"solid"===u?24:12:k?24:7,l=(0,s.safeRatio)(e.value,k?w:j)*(k?50:100),o=A;A+=l;let c=e.color??(0,s.ink)(r);return(0,t.jsxs)("g",{transform:`rotate(${k?-180:-90} 130 115.5)`,onMouseEnter:()=>v(r),onMouseLeave:()=>v(null),opacity:null!=b&&b!==r?.25:1,className:"transition-opacity duration-200 motion-reduce:transition-none",children:["grid"!==u&&!k&&(0,t.jsx)("circle",{cx:130,cy:115.5,r:i,fill:"none",stroke:"var(--color-chart-track)",strokeWidth:n}),(0,t.jsx)(a.motion.circle,{id:`${D}-${r}`,cx:130,cy:115.5,r:i,pathLength:100,fill:"none",stroke:c,strokeWidth:n,strokeLinecap:"round",strokeDashoffset:k?-o:0,initial:!y&&{strokeDasharray:"0 100"},animate:{strokeDasharray:`${Math.max(0,l-!!k)} 100`},transition:{duration:.7*!y,ease:"easeOut"}},y?"reduced":"animated"),"labels"===u&&(0,t.jsx)("text",{fill:"var(--color-text-primary)",fontSize:10,dy:3,children:(0,t.jsx)("textPath",{href:`#${D}-${r}`,startOffset:"3%",children:e.label})})]},`${x.id}-${e.label}`)})]}),(_||k)&&(0,t.jsxs)("div",{className:"pointer-events-none absolute inset-0 flex flex-col items-center justify-center",children:[(0,t.jsxs)("span",{className:"text-title-1-medium text-text-primary",children:[(0,t.jsx)(s.AnimatedNumber,{value:E}),"%"]}),(0,t.jsx)("span",{className:"text-body-2-regular text-text-secondary",children:k?N?.label:"of goal"})]})]})})}])},29554,e=>{"use strict";var t=e.i(38935),a=e.i(48545),r=e.i(46585),i=e.i(79240),n=e.i(79571),l=e.i(197);let s=[{label:"Duration",detail:"7h 50m",value:49,max:50,color:"var(--color-chart-5)"},{label:"Bedtime",detail:"20m earlier",value:29,max:30,color:"var(--color-chart-3)"},{label:"Interruptions",detail:"5m wake up",value:20,max:20,color:"var(--color-chart-6)"}],o=[{id:"previous",label:"22 Jun - 28 Jun",metrics:s.map((e,t)=>({...e,value:e.value-[5,4,2][t]}))},{id:"current",label:"29 Jun - 5 Jul",metrics:s},{id:"next",label:"6 Jul - 12 Jul",metrics:s.map((e,t)=>({...e,value:e.value-[2,1,0][t]}))}];e.s(["SLEEP_METRICS",0,s,"SleepScoreCard",0,function({title:e="Sleep score",metrics:s,weeks:c=o,defaultWeek:d="current",onWeekChange:u,className:m}={}){let[p,h]=(0,r.useState)(Math.max(0,c.findIndex(e=>e.id===d))),[g,x]=(0,r.useState)(null),f=(0,i.useHydratedReducedMotion)(),b=c[p],v=s??b?.metrics??[],y=(0,l.sum)(v.map(e=>e.value)),D=(0,l.sum)(v.map(e=>e.max)),w=e=>{let t=(p+e+c.length)%Math.max(1,c.length);h(t),x(null),c[t]&&u?.(c[t].id)},j=0;return(0,t.jsxs)(l.ChartFrame,{title:e,heading:(0,l.safeRatio)(y,D)>=.9?"Excellent":(0,l.safeRatio)(y,D)>=.75?"Good":"Fair",className:(0,n.cx)("rounded-[20px]",m),height:330,action:(0,t.jsx)(l.WeekSwitcher,{label:b?.label??"This week",onPrevious:()=>w(-1),onNext:()=>w(1)}),children:[(0,t.jsxs)("div",{className:"relative -mt-2 h-[104px] shrink-0",children:[(0,t.jsx)("svg",{viewBox:"0 0 120 120",className:"h-full w-full",role:"img","aria-label":`Sleep score: ${y} out of ${D}`,children:v.map((e,r)=>{let i=100*(0,l.safeRatio)(e.max,D),n=j;return j+=i,(0,t.jsx)(a.motion.circle,{cx:60,cy:60,r:51,pathLength:100,transform:"rotate(-82 60 60)",fill:"none",stroke:e.color??`var(--color-chart-${r+3})`,strokeWidth:17,strokeLinecap:"round",strokeDashoffset:-n,initial:!f&&{strokeDasharray:"0 100",opacity:1},animate:{strokeDasharray:`${Math.max(0,i-6)} 100`,opacity:null!=g&&g!==r?.2:1},transition:{duration:.55*!f},onMouseEnter:()=>x(r),onMouseLeave:()=>x(null)},`${e.label}-${f?"reduced":"animated"}`)})}),(0,t.jsx)("span",{className:"pointer-events-none absolute inset-0 flex items-center justify-center text-title-1-medium text-text-primary",children:(0,t.jsx)(l.AnimatedNumber,{value:null==g?y:v[g]?.value??0})})]}),(0,t.jsx)("div",{className:"-mx-1.5 mt-auto overflow-hidden rounded-2lg bg-background-inner-default",children:v.map((e,a)=>(0,t.jsxs)("button",{type:"button",onMouseEnter:()=>x(a),onMouseLeave:()=>x(null),onFocus:()=>x(a),onBlur:()=>x(null),className:"flex w-full items-center gap-1.5 border-b border-separator-border px-2.5 py-2.5 text-body-regular last:border-0 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-border-focus-ring",children:[(0,t.jsx)("span",{className:"size-3 rounded-[4px]",style:{background:e.color??`var(--color-chart-${a+3})`}}),(0,t.jsxs)("span",{className:"flex-1 text-left text-text-secondary",children:[e.label,": ",e.detail]}),(0,t.jsxs)("span",{className:"text-body-medium text-text-primary",children:[e.value,"/",e.max]})]},e.label))})]})}])},35490,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(48545),i=e.i(46585),n=e.i(79240),l=e.i(81222),s=e.i(197);let o=[a.RiEyeLine,a.RiUserAddLine,a.RiFlashlightLine,a.RiVipCrownLine,a.RiGroupLine,a.RiBuildingLine],c=["Visits","Sign-up","Active","Pro","Team","Enterprise"].map((e,a)=>{let r=o[a];return{label:e,value:[1180,790,460,250,120,40][a],icon:(0,t.jsx)(r,{className:"size-3.5 shrink-0"})}}),d=[{id:"7d",label:"Last 7 days",stages:c,delta:.024},{id:"30d",label:"Last 30 days",stages:c.map((e,t)=>({...e,value:[4820,3260,2010,1160,540,180][t]})),delta:.061},{id:"90d",label:"Last 90 days",stages:c.map((e,t)=>({...e,value:[13900,9410,5720,3300,1520,510][t]})),delta:-.012}];e.s(["STAGE_BARS",0,c,"StageBarsCard",0,function({stages:e,ranges:a,title:o="Pipeline",mono:u=!1,showIcons:m=!0,tiles:p=!0,...h}={}){let g=a??(e?void 0:d),x=(0,s.useChartRange)(g,h.defaultRange,h.onRangeChange),f=x.current?.stages??e??c,[b,v]=(0,i.useState)(null),y=(0,n.useHydratedReducedMotion)(),D=h.format??l.formatNumber,w=f[0]?.value??0,j=f.map((e,t)=>u?"var(--color-text-tertiary)":e.color??(0,s.ink)(t));return(0,t.jsx)(s.ChartFrame,{title:null==b?o:f[b]?.label??o,value:null==b?x.current?.headline??h.headline??w:f[b]?.value??0,format:D,delta:x.current?.delta??h.delta,className:h.className,action:(0,t.jsx)(s.PeriodSelect,{ranges:g,selected:x.id,onChange:e=>{v(null),x.select(e)},label:x.current?.label??h.range??"Last 7 days"}),footer:p&&(0,t.jsx)(s.StatTiles,{items:f.map((e,t)=>({label:e.label,value:D(e.value),color:j[t]})),active:b,onHover:v}),children:(0,t.jsx)("div",{className:"grid items-center gap-x-3 gap-y-3 py-2",style:{gridTemplateColumns:"max-content minmax(0, 1fr) max-content"},children:f.map((e,a)=>(0,t.jsxs)("div",{className:"contents",children:[(0,t.jsx)("span",{className:"text-right text-body-regular text-text-secondary",children:e.label}),(0,t.jsx)("div",{onMouseEnter:()=>v(a),onMouseLeave:()=>v(null),className:"relative h-5 rounded-full bg-chart-track",children:(0,t.jsx)(r.motion.div,{className:"absolute inset-y-0 left-0 flex items-center rounded-full px-1 text-text-primary",initial:!y&&{width:0,opacity:1},animate:{width:`${100*(0,s.safeRatio)(e.value,w)}%`,opacity:null!=b&&b!==a?.3:1},transition:{duration:.5*!y,ease:"easeOut"},style:{background:j[a]},children:m&&e.icon},y?"reduced":"animated")}),(0,t.jsxs)("span",{className:"flex items-center justify-end gap-1.5 text-body-medium text-text-primary tabular-nums",children:[D(e.value),(0,t.jsxs)("span",{className:"text-caption-1-medium text-text-tertiary",children:[Math.round(100*(0,s.safeRatio)(e.value,w)),"%"]})]})]},e.label))})})}])},46569,e=>{"use strict";var t=e.i(38935),a=e.i(48545),r=e.i(46585),i=e.i(79240),n=e.i(79571),l=e.i(81222),s=e.i(197);let o=s.DAYS.map((e,t)=>({label:e,fullLabel:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][t],value:[5600,2200,1900,6300,7100,5300,3200][t]})),c=[{id:"previous",label:"22 Jun - 28 Jun",data:o.map((e,t)=>({...e,value:[4200,7200,5100,4e3,8100,7900,2e3][t]}))},{id:"current",label:"29 Jun - 5 Jul",data:o},{id:"next",label:"6 Jul - 12 Jul",data:o.map((e,t)=>({...e,value:[3200,6400,2300,3800,5200,3900,5400][t]}))}];e.s(["STEPS_DATA",0,o,"StepsCard",0,function({title:e="Steps",data:o,weeks:d=c,defaultWeek:u="current",onWeekChange:m,className:p,color:h="var(--color-chart-1)",goal:g=8e3}={}){let[x,f]=(0,r.useState)(Math.max(0,d.findIndex(e=>e.id===u))),[b,v]=(0,r.useState)(null),y=(0,i.useHydratedReducedMotion)(),D=d[x],w=o??D?.data??[],j=Math.max(g,...w.map(e=>e.value)),C=e=>{let t=(x+e+d.length)%Math.max(1,d.length);f(t),v(null),d[t]&&m?.(d[t].id)};return(0,t.jsx)(s.ChartFrame,{title:null==b?e:w[b]?.fullLabel??w[b]?.label??e,value:null==b?(0,s.sum)(w.map(e=>e.value)):w[b]?.value??0,suffix:null==b?"total steps":"steps",className:(0,n.cx)("rounded-[20px]",p),height:330,action:(0,t.jsx)(s.WeekSwitcher,{label:D?.label??"This week",onPrevious:()=>C(-1),onNext:()=>C(1)}),children:(0,t.jsx)("div",{className:"flex min-h-0 flex-1 gap-8 px-1 pt-1",children:w.map((e,r)=>(0,t.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col items-center gap-2",children:[(0,t.jsx)("button",{type:"button","aria-label":`${e.label}: ${(0,l.formatNumber)(e.value)} steps`,onMouseEnter:()=>v(r),onMouseLeave:()=>v(null),onFocus:()=>v(r),onBlur:()=>v(null),className:"relative w-full flex-1 rounded-[11px] bg-chart-track outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",children:(0,t.jsx)(a.motion.span,{className:"absolute inset-x-0 bottom-0 rounded-[11px]",initial:!y&&{height:0,opacity:1},animate:{height:`${100*(0,s.safeRatio)(e.value,j)}%`,opacity:null!=b&&b!==r?.45:1},transition:{duration:.6*!y,ease:"easeOut"},style:{background:h,outline:b===r?`2px solid ${h}`:void 0,outlineOffset:4}},y?"reduced":"animated")}),(0,t.jsx)("span",{className:"text-caption-1-regular text-text-secondary",children:e.label})]},e.label))})})}])},14710,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(23974),i=e.i(88699),n=e.i(68893),l=["axis","item"],s=(0,a.forwardRef)((e,t)=>a.createElement(n.CartesianChart,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:l,tooltipPayloadSearcher:i.arrayTooltipSearcher,categoricalChartProps:e,ref:t})),o=e.i(94500),c=e.i(13231),d=e.i(84133),u=e.i(73449),m=e.i(45737),p=e.i(83826),h=e.i(79571);let g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=["January","February","March","April","May","June","July","August","September","October","November","December"],f=[{label:"Jan",current:1680,previous:1510},{label:"Feb",current:1740,previous:1480},{label:"Mar",current:1920,previous:1650},{label:"Apr",current:1850,previous:1620},{label:"May",current:2040,previous:1710},{label:"Jun",current:2110,previous:1760},{label:"Jul",current:2290,previous:1840},{label:"Aug",current:2180,previous:1890},{label:"Sep",current:2320,previous:1930},{label:"Oct",current:2410,previous:1970},{label:"Nov",current:2280,previous:1810},{label:"Dec",current:2342,previous:1798}],b=e=>e>=1e3?`${(e/1e3).toFixed(+(e%1e3!=0))}k`:`${e}`;e.s(["ORDERS_DATA",0,f,"OrdersChartCard",0,function({data:e=f,title:i="Orders",className:n}={}){let[l,v]=(0,a.useState)(null),y=e.reduce((e,t)=>e+t.current,0),D=e.reduce((e,t)=>e+t.previous,0),w=null!==l&&l<e.length?e[l]:null,j=w?w.current:y,C=w?w.previous:D,_=function(e,t){if(0===t)return{label:"New",color:"neutral"};let a=Math.round((e-t)/t*1e3)/10;return 0===a?{label:"0%",color:"neutral"}:{label:`${a>0?"+":""}${a}%`,color:a>0?"lime":"rose"}}(j,C),k=w?g.indexOf(w.label):-1,N=w?k>=0?x[k]:w.label:i,E=(0,p.useCountUp)(j),A=Math.max(...e.map(e=>Math.max(e.current,e.previous)));return(0,t.jsxs)("section",{className:(0,h.cx)("flex h-[344px] min-w-0 flex-1 flex-col gap-6 rounded-2xl bg-background-secondary-default px-4 pt-4 pb-3",n),children:[(0,t.jsxs)("div",{className:"flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,t.jsxs)("div",{className:"flex min-w-0 flex-col gap-0.5",children:[(0,t.jsx)("p",{className:"w-full text-body-medium text-text-secondary",children:N}),(0,t.jsxs)("div",{className:"flex w-full items-center gap-2",children:[(0,t.jsx)("p",{className:"animate-number-fade text-title-1-medium whitespace-nowrap text-text-primary tabular-nums",children:E.toLocaleString("en-US")},l??"total"),(0,t.jsx)(m.Chip,{variant:"bold",color:_.color,children:_.label})]}),(0,t.jsxs)("p",{className:"text-body-2-medium text-text-tertiary tabular-nums",children:[C.toLocaleString("en-US")," ",w?"a year earlier":"last year"]})]}),(0,t.jsxs)("dl",{className:"flex shrink-0 items-center gap-4 text-body-2-medium text-text-secondary",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"size-2 rounded-full bg-chart-9-active","aria-hidden":!0}),(0,t.jsx)("dt",{children:"This year"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"size-2 rounded-full bg-chart-neutral","aria-hidden":!0}),(0,t.jsx)("dt",{children:"Last year"})]})]})]}),(0,t.jsx)("div",{className:"min-h-0 w-full flex-1",children:(0,t.jsx)(o.ResponsiveContainer,{width:"100%",height:"100%",children:(0,t.jsxs)(s,{data:e,margin:{top:4,right:6,bottom:0,left:0},barCategoryGap:"28%",barGap:3,onMouseMove:e=>{let t=Number(e?.activeTooltipIndex);e?.isTooltipActive&&Number.isFinite(t)&&v(t)},onMouseLeave:()=>v(null),children:[(0,t.jsx)(u.YAxis,{width:40,domain:[0,1.1*A],tickCount:4,tickFormatter:b,tickLine:!1,axisLine:!1,tick:{fontSize:12,fill:"var(--color-text-tertiary)"}}),(0,t.jsx)(d.XAxis,{dataKey:"label",tickLine:!1,axisLine:!1,tickMargin:12,interval:"preserveStartEnd",tick:{fontSize:13,fill:"var(--color-text-tertiary)"}}),(0,t.jsx)(c.Tooltip,{content:()=>null,cursor:{fill:"var(--color-chart-track)",opacity:.5}}),(0,t.jsx)(r.Bar,{dataKey:"previous",fill:"var(--color-chart-neutral)",radius:[4,4,0,0],isAnimationActive:!0,animationDuration:450}),(0,t.jsx)(r.Bar,{dataKey:"current",fill:"var(--color-chart-9-active)",radius:[4,4,0,0],isAnimationActive:!0,animationDuration:450})]})})})]})}],14710)},92050,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(359),i=e.i(10415),n=e.i(82260),l=e.i(94500),s=e.i(13231),o=e.i(84133),c=e.i(73449),d=e.i(45737),u=e.i(83826),m=e.i(79571);let p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=["January","February","March","April","May","June","July","August","September","October","November","December"],g=[{label:"Jan",current:9840,previous:8210},{label:"Feb",current:10120,previous:8460},{label:"Mar",current:11380,previous:9950},{label:"Apr",current:10960,previous:10240},{label:"May",current:12210,previous:10880},{label:"Jun",current:12740,previous:11020},{label:"Jul",current:13980,previous:11760},{label:"Aug",current:13120,previous:12030},{label:"Sep",current:14210,previous:12190},{label:"Oct",current:14690,previous:12480},{label:"Nov",current:14360,previous:12160},{label:"Dec",current:14703.92,previous:11924}],x=e=>e>=1e3?`$${Math.round(e/1e3)}k`:`$${e}`,f=e=>e.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0});function b({cx:e,cy:a}){return void 0===e||void 0===a?null:(0,t.jsxs)("g",{children:[(0,t.jsx)("circle",{cx:e,cy:a,r:7,fill:"var(--color-chart-2-active)",opacity:.25}),(0,t.jsx)("circle",{cx:e,cy:a,r:4,fill:"var(--color-chart-2-active)",stroke:"var(--color-background-secondary-default)",strokeWidth:2})]})}e.s(["REVENUE_DATA",0,g,"RevenueChartCard",0,function({data:e=g,title:v="Revenue",className:y}={}){let[D,w]=(0,a.useState)(null),j=(0,a.useId)(),C=e.reduce((e,t)=>e+t.current,0),_=e.reduce((e,t)=>e+t.previous,0),k=null!==D&&D<e.length?e[D]:null,N=k?k.current:C,E=k?k.previous:_,A=function(e,t){if(0===t)return{label:"New",color:"neutral"};let a=Math.round((e-t)/t*1e3)/10;return 0===a?{label:"0%",color:"neutral"}:{label:`${a>0?"+":""}${a}%`,color:a>0?"lime":"rose"}}(N,E),S=k?p.indexOf(k.label):-1,R=k?S>=0?h[S]:k.label:v,F=(0,u.useCountUp)(Math.round(N)),T=Math.max(...e.map(e=>Math.max(e.current,e.previous)));return(0,t.jsxs)("section",{className:(0,m.cx)("flex h-[344px] min-w-0 flex-1 flex-col gap-6 rounded-2xl bg-background-secondary-default px-4 pt-4 pb-3",y),children:[(0,t.jsxs)("div",{className:"flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,t.jsxs)("div",{className:"flex min-w-0 flex-col gap-0.5",children:[(0,t.jsx)("p",{className:"w-full text-body-medium text-text-secondary",children:R}),(0,t.jsxs)("div",{className:"flex w-full items-center gap-2",children:[(0,t.jsxs)("p",{className:"animate-number-fade text-title-1-medium whitespace-nowrap text-text-primary tabular-nums",children:["$",f(F)]},D??"total"),(0,t.jsx)(d.Chip,{variant:"bold",color:A.color,children:A.label})]}),(0,t.jsxs)("p",{className:"text-body-2-medium text-text-tertiary tabular-nums",children:["$",f(E)," ",k?"a year earlier":"last year"]})]}),(0,t.jsxs)("dl",{className:"flex shrink-0 items-center gap-4 text-body-2-medium text-text-secondary",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"size-2 rounded-full bg-chart-2-active","aria-hidden":!0}),(0,t.jsx)("dt",{children:"This year"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"size-2 rounded-full bg-chart-neutral","aria-hidden":!0}),(0,t.jsx)("dt",{children:"Last year"})]})]})]}),(0,t.jsx)("div",{className:"min-h-0 w-full flex-1",children:(0,t.jsx)(l.ResponsiveContainer,{width:"100%",height:"100%",children:(0,t.jsxs)(i.ComposedChart,{data:e,margin:{top:4,right:6,bottom:0,left:0},onMouseMove:e=>{let t=Number(e?.activeTooltipIndex);e?.isTooltipActive&&Number.isFinite(t)&&w(t)},onMouseLeave:()=>w(null),children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:j,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"var(--color-chart-2)",stopOpacity:.35}),(0,t.jsx)("stop",{offset:"100%",stopColor:"var(--color-chart-2)",stopOpacity:0})]})}),(0,t.jsx)(c.YAxis,{width:44,domain:[0,1.1*T],tickCount:4,tickFormatter:x,tickLine:!1,axisLine:!1,tick:{fontSize:12,fill:"var(--color-text-tertiary)"}}),(0,t.jsx)(o.XAxis,{dataKey:"label",tickLine:!1,axisLine:!1,tickMargin:12,interval:"preserveStartEnd",tick:{fontSize:13,fill:"var(--color-text-tertiary)"}}),(0,t.jsx)(s.Tooltip,{content:()=>null,cursor:{stroke:"var(--color-chart-cursor)",strokeWidth:1,strokeDasharray:"4 4"}}),(0,t.jsx)(n.Line,{type:"monotone",dataKey:"previous",stroke:"var(--color-chart-neutral)",strokeWidth:2,strokeDasharray:"5 5",dot:!1,activeDot:!1,isAnimationActive:!0,animationDuration:450}),(0,t.jsx)(r.Area,{type:"monotone",dataKey:"current",stroke:"none",fill:`url(#${j})`,isAnimationActive:!0,animationDuration:450}),(0,t.jsx)(n.Line,{type:"monotone",dataKey:"current",stroke:"var(--color-chart-2-active)",strokeWidth:2.5,dot:!1,activeDot:(0,t.jsx)(b,{}),isAnimationActive:!0,animationDuration:450})]})})})]})}])},12846,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(56966),i=e.i(59790),n=e.i(45737),l=e.i(35228),s=e.i(79571);let o=[{icon:r.RiGroupLine,label:"Customers",value:"14,592",delta:"+5.3%",deltaColor:"lime"},{icon:r.RiBox3Line,label:"Unit sold",value:"385",delta:"-2.1%",deltaColor:"rose"},{icon:r.RiShoppingBasketLine,label:"Orders",value:"1,394",delta:"0.00%",deltaColor:"neutral"},{icon:r.RiChatSmile2Line,label:"Support tickets",value:"708",delta:"+12.8%",deltaColor:"lime"}],c=[{icon:r.RiCoinsFill,label:"Total revenue",value:"$152,313.92",delta:"16%",deltaColor:"lime",tone:"blue",hint:"Gross revenue across every channel this month, before refunds. The change is against the same days last month."},{icon:r.RiShoppingBasket2Fill,label:"Total orders",value:"25,162",delta:"20%",deltaColor:"lime",tone:"orange",hint:"Checkouts completed this month, repeat purchases included. The change is against the same days last month."},{icon:r.RiGroupFill,label:"New customers",value:"3,847",delta:"8.1%",deltaColor:"lime",tone:"purple",hint:"People who bought for the first time this month. The change is against the same days last month."},{icon:r.RiRefund2Fill,label:"Refunds",value:"$4,209.44",delta:"2.4%",deltaColor:"rose",tone:"pink",hint:"Value of orders refunded this month. Down is good here, so the change reads in red when refunds rise."}],d={blue:"from-blue-500 to-blue-600",orange:"from-orange-400 to-orange-500",purple:"from-purple-500 to-purple-600",pink:"from-pink-500 to-pink-600",sky:"from-sky-400 to-sky-500",emerald:"from-emerald-500 to-emerald-600"},u={lime:{icon:r.RiArrowUpCircleFill,className:"text-status-lime-text",pill:"bg-status-lime-background"},rose:{icon:r.RiArrowDownCircleFill,className:"text-status-rose-text",pill:"bg-status-rose-background"},neutral:{icon:r.RiIndeterminateCircleFill,className:"text-text-secondary",pill:"bg-background-secondary-default"}};function m({delta:e,deltaColor:a}){let{icon:r,className:i,pill:n}=u[a];return(0,t.jsxs)("span",{className:(0,s.cx)("flex shrink-0 items-center gap-1 rounded-full py-0.5 pr-2 pl-1",n),children:[(0,t.jsx)(r,{className:(0,s.cx)("size-4 shrink-0",i),"aria-hidden":!0}),(0,t.jsx)("span",{className:(0,s.cx)("text-body-medium whitespace-nowrap tabular-nums",i),children:e})]})}function p({label:e,hint:n}){let[s,o]=(0,a.useState)(!1);return(0,t.jsxs)(l.TooltipTrigger,{delay:200,isOpen:s,onOpenChange:o,children:[(0,t.jsx)(i.Focusable,{children:(0,t.jsx)("button",{type:"button","aria-label":`About ${e}`,onClick:()=>o(e=>!e),className:"flex shrink-0 cursor-pointer items-center justify-center rounded-full text-foreground-icon-secondary outline-none transition-colors duration-150 ease hover:text-foreground-icon-primary focus-visible:ring-2 focus-visible:ring-border-focus-ring",children:(0,t.jsx)(r.RiInformationFill,{className:"size-5","aria-hidden":!0})})}),(0,t.jsx)(l.Tooltip,{size:"md",children:n})]})}function h({stat:e}){return(0,t.jsxs)("section",{className:"flex h-[132px] min-w-0 flex-col items-start justify-between rounded-2xl bg-background-secondary-default p-4",children:[(0,t.jsx)("span",{className:"flex items-center rounded-md bg-stat-card-icon-background p-1.5",children:(0,t.jsx)(e.icon,{className:"size-5 shrink-0 text-foreground-icon-primary","aria-hidden":!0})}),(0,t.jsxs)("div",{className:"flex w-full flex-col gap-0.5",children:[(0,t.jsx)("p",{className:"w-full text-body-medium text-text-secondary",children:e.label}),(0,t.jsxs)("div",{className:"flex w-full flex-wrap items-center gap-2",children:[(0,t.jsx)("p",{className:"text-title-1-medium whitespace-nowrap text-text-primary",children:e.value}),(0,t.jsx)(n.Chip,{variant:"bold",color:e.deltaColor,children:e.delta})]})]})]})}function g({stat:e}){return(0,t.jsxs)("section",{className:"flex min-w-0 flex-col rounded-2xl bg-background-secondary-default p-2",children:[(0,t.jsxs)("div",{className:"flex w-full items-start justify-between gap-2.5 p-2",children:[(0,t.jsx)("span",{className:(0,s.cx)("flex size-10 shrink-0 items-center justify-center rounded-2lg bg-linear-to-b",d[e.tone??"blue"]),children:(0,t.jsx)(e.icon,{className:"size-5 shrink-0 text-white","aria-hidden":!0})}),e.hint&&(0,t.jsx)(p,{label:e.label,hint:e.hint})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-0.5 px-2 pt-2.5 pb-3.5",children:[(0,t.jsx)("p",{className:"truncate text-body-medium text-text-secondary",children:e.label}),(0,t.jsx)("p",{className:"text-display-4-medium whitespace-nowrap text-text-primary tabular-nums",children:e.value})]}),(0,t.jsxs)("div",{className:"mt-auto flex w-full items-center justify-between gap-2 rounded-2lg bg-background-inner-default py-1.5 pr-1.5 pl-2.5 shadow-card",children:[(0,t.jsx)("p",{className:"truncate text-body-regular text-text-secondary",children:e.caption??"From last month"}),(0,t.jsx)(m,{delta:e.delta,deltaColor:e.deltaColor})]})]})}e.s(["StatCards",0,function({variant:e="plain",stats:a,count:r,columns:i=4,className:n}={}){let l=a??("footer"===e?c:o);return(0,t.jsx)("div",{className:(0,s.cx)("grid w-full gap-4",1===i?"grid-cols-1":"footer"===e?"grid-cols-1 sm:grid-cols-2":"grid-cols-2",4===i&&("footer"===e?"xl:grid-cols-4":"lg:grid-cols-4"),n),children:l.slice(0,r??l.length).map(a=>"footer"===e?(0,t.jsx)(g,{stat:a},a.label):(0,t.jsx)(h,{stat:a},a.label))})}])},46990,e=>{"use strict";e.s([],6873),e.i(6873);var t=e.i(81467),a=e.i(35248),r=e.i(65891),i=e.i(10413),n=e.i(82232),l=e.i(3993),s=e.i(78194),o=e.i(82587),c=e.i(70249),d=e.i(15702),u=e.i(3464),m=e.i(33813),p=e.i(33905),h=e.i(47e3),g=e.i(76380),x=e.i(82152),f=e.i(63162),b=e.i(25447),v=e.i(51178),y=e.i(83543),D=e.i(23442),w=e.i(96527),j=e.i(55915),C=e.i(4352),_=e.i(29726),k=e.i(95756),N=e.i(38935),E=e.i(46585),A=e.i(79571);let S={idle:"shrink",shrink:"slide",slide:"enter",enter:"idle"};var R=e.i(50621),F=e.i(36297),T=e.i(68161),M=e.i(34628),L=e.i(81222),z=e.i(76660),B=e.i(63600),P=e.i(66733),I=e.i(77243),O=e.i(18006),$=e.i(77287),G=e.i(35013),H=e.i(16698),U=e.i(197),W=e.i(39005),J=e.i(26722),q=e.i(16874),Y=e.i(50665),V=e.i(17340),K=e.i(29554),X=e.i(35490),Z=e.i(46569),Q=e.i(54745),ee=e.i(79436),et=e.i(48642),ea=e.i(37656),er=e.i(95541),ei=e.i(14710),en=e.i(92050),el=e.i(12846),es=e.i(35878),eo=e.i(32718),ec=e.i(58034),ed=e.i(97131),eu=e.i(56966),em=e.i(28950);let ep=[{id:"mention-notes",category:"mentions",group:"Today",title:"Livia mentioned you",description:"Can you review the new empty state before we ship the dashboard?",timestamp:"2m",unread:!0,avatar:{src:"/avatars/livia-saris.webp",alt:"Livia Saris"},actions:[{id:"reply",label:"Reply",variant:"primary"},{id:"view",label:"View thread",variant:"secondary"}]},{id:"backup-ready",category:"system",group:"Today",title:"Workspace backup is ready",description:"The July 23 backup finished successfully and is ready to download.",timestamp:"18m",unread:!0,status:"success",icon:eu.RiDownloadCloud2Line,actions:[{id:"download",label:"Download",variant:"secondary"}]},{id:"project-invite",category:"activity",group:"Today",title:"You joined Project Sea",description:"Maria added you as an editor. You now have access to all project files.",timestamp:"1h",unread:!0,icon:eu.RiUserAddLine,status:"information"},{id:"pull-request",category:"mentions",group:"Earlier this week",title:"Jaydon requested your review",description:"Pull request #284 updates the notification preferences flow.",timestamp:"Mon",avatar:{src:"/avatars/jaydon-aminoff.webp",alt:"Jaydon Aminoff"},actions:[{id:"review",label:"Review changes",variant:"secondary"}]},{id:"security-check",category:"system",group:"Earlier this week",title:"Security check completed",description:"No exposed credentials or vulnerable dependencies were found.",timestamp:"Sun",status:"success",icon:eu.RiShieldCheckLine},{id:"deploy-failed",category:"system",group:"Earlier this week",title:"Preview deployment failed",description:"The build stopped while validating the application routes.",timestamp:"Sat",unread:!0,status:"error",icon:eu.RiGitPullRequestLine,actions:[{id:"retry",label:"Retry",variant:"primary"},{id:"logs",label:"View logs",variant:"secondary"}]}];var eh=e.i(84987),eg=e.i(41803),ex=e.i(52894),ef=e.i(58571),eb=e.i(25191),ev=e.i(30363),ey=e.i(38074),eD=e.i(15858),ew=e.i(33938),ej=e.i(49398),eC=e.i(13051),e_=e.i(74993),ek=e.i(47206),eN=e.i(52400),eE=e.i(76903),eA=e.i(78137),eS=e.i(29285),eR=e.i(81043),eF=e.i(64153),eT=e.i(48866),eM=e.i(65879),eL=e.i(52272),ez=e.i(94),eB=e.i(30102),eP=e.i(74761);e.s(["ACTIVITY_RINGS",()=>F.ACTIVITY_RINGS,"AGENT_PROGRESS_STEPS",()=>c.AGENT_PROGRESS_STEPS,"AIChatTemplate",()=>ej.AIChatTemplate,"AIImageGenerationTemplate",()=>eC.AIImageGenerationTemplate,"AIProfile",()=>e_.AIProfile,"AREA_DATA",()=>T.AREA_DATA,"AREA_DEMO_RANGES",()=>z.AREA_DEMO_RANGES,"AXIS",()=>L.AXIS,"AccountMenuContent",()=>er.AccountMenuContent,"ActivityRings",()=>F.ActivityRings,"ActivityRingsCard",()=>F.ActivityRingsCard,"AgentChangesPanel",()=>ew.AgentChangesPanel,"AgentChat",()=>i.AgentChat,"AgentChatActions",()=>t.AgentChatActions,"AgentChatHistory",()=>a.AgentChatHistory,"AgentComposer",()=>n.AgentComposer,"AgentLimitsCard",()=>u.AgentLimitsCard,"AgentMessage",()=>r.AgentMessage,"AgentProgress",()=>c.AgentProgress,"AgentThinking",()=>d.AgentThinking,"AgentWorkspace",()=>ew.AgentWorkspace,"AiChatComposerPreview",()=>ee.AiChatComposerPreview,"AnimatedAccordion",()=>m.AnimatedAccordion,"AnimatedNumber",()=>U.AnimatedNumber,"AnimatedPricing",()=>p.AnimatedPricing,"AppShell",()=>j.AppShell,"AreaChartCard",()=>T.AreaChartCard,"AsciiOverlay",()=>h.AsciiOverlay,"AuthCard",()=>k.AuthCard,"AuthMediaCarousel",0,function({slides:e,interval:t=3200,className:a}){let[r,i]=(0,E.useState)(0),[n,l]=(0,E.useState)("idle"),s=e.length;return(0,E.useEffect)(()=>{if(s<2||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e={idle:t,shrink:650,slide:700,enter:20}[n],a=window.setTimeout(()=>{"slide"===n&&i(e=>(e+1)%s),l(S[n])},e);return()=>window.clearTimeout(a)},[n,s,t]),(0,N.jsxs)("div",{style:{perspective:"850px"},className:(0,A.cx)("absolute inset-0 overflow-hidden",a),children:[e.map((e,t)=>{let a=(t-r+s)%s,i=0===a,l=1===a,o=i?"slide"===n?"translateX(-100%) translateZ(-220px) rotateY(-48deg) scale(0.82)":"shrink"===n?"scale(0.82)":"enter"===n?"scale(0.8)":"scale(1)":l&&"slide"===n?"scale(0.8)":"translateX(100%) translateZ(-220px) rotateY(48deg) scale(0.8)",c=i||l&&"slide"===n;return(0,N.jsx)("img",{src:e.src,alt:e.alt??"","aria-hidden":!e.alt||void 0,loading:0===t?"eager":"lazy",style:{transform:o,borderRadius:i&&"idle"===n?0:24,transitionDuration:"slide"===n?"700ms":"shrink"===n?"450ms":"500ms"},className:(0,A.cx)("absolute inset-0 size-full object-cover",c&&"enter"!==n?"transition-[transform,border-radius] ease-in-out":"transition-none")},e.src)}),e.length>1?(0,N.jsx)("div",{className:"absolute inset-x-0 bottom-4 flex justify-center gap-1.5",children:e.map((e,t)=>(0,N.jsx)("span",{"aria-hidden":!0,className:(0,A.cx)("h-1.5 rounded-full bg-white transition-all duration-500 ease-out",t===r?"w-5 opacity-90":"w-1.5 opacity-45")},e.src))}):null]})},"BAR_LIST_DATA",()=>M.BAR_LIST_DATA,"BAR_LIST_DEMO_TABS",()=>z.BAR_LIST_DEMO_TABS,"BarListCard",()=>M.BarListCard,"CALENDAR_EVENTS",()=>R.CALENDAR_EVENTS,"COMBO_DATA",()=>B.COMBO_DATA,"COMBO_DEMO_RANGES",()=>z.COMBO_DEMO_RANGES,"COMPOSER_MODELS",()=>ee.COMPOSER_MODELS,"CONTRIBUTIONS_DATA",()=>P.CONTRIBUTIONS_DATA,"CURSOR",()=>L.CURSOR,"Calendar",()=>R.Calendar,"ChartCard",()=>L.ChartCard,"ChartFrame",()=>U.ChartFrame,"ChartLegend",()=>L.ChartLegend,"ComboChartCard",()=>B.ComboChartCard,"Composer",()=>ee.Composer,"ComposerLoader",()=>Q.ComposerLoader,"ContributionsCard",()=>P.ContributionsCard,"ConversationFeedback",()=>ej.ConversationFeedback,"CurtainSlider",()=>g.CurtainSlider,"DASHBOARD_NAV",()=>et.DASHBOARD_NAV,"DAYS",()=>U.DAYS,"DEFAULT_AGENT_TASKS",()=>eD.DEFAULT_AGENT_TASKS,"DEFAULT_WEB_SEARCH_STEPS",()=>eP.DEFAULT_WEB_SEARCH_STEPS,"DashboardSidebar",()=>et.DashboardSidebar,"DashboardTeamMenu",()=>ea.DashboardTeamMenu,"DashboardUserMenu",()=>er.DashboardUserMenu,"DataDashboard",()=>ek.DataDashboard,"DataTableExample",()=>es.DataTableExample,"DemoTransport",()=>s.DemoTransport,"DualScramble",()=>x.DualScramble,"EARNINGS_DATA",()=>I.EARNINGS_DATA,"EARNINGS_DEMO_RANGES",()=>z.EARNINGS_DEMO_RANGES,"EarningsChartCard",()=>I.EarningsChartCard,"FUNNEL_STAGES",()=>O.FUNNEL_STAGES,"FeatureDialog",()=>f.FeatureDialog,"FinanceDashboard",()=>eN.FinanceDashboard,"FunnelChartCard",()=>O.FunnelChartCard,"GlassComposer",()=>ee.GlassComposer,"GuideBridge",()=>o.GuideBridge,"HEATMAP_COLUMNS",()=>$.HEATMAP_COLUMNS,"HEATMAP_DEMO_RANGES",()=>z.HEATMAP_DEMO_RANGES,"HEATMAP_ROWS",()=>$.HEATMAP_ROWS,"HRManagement",()=>eA.HRManagement,"HeatmapChartCard",()=>$.HeatmapChartCard,"HomeDashboard",()=>eE.HomeDashboard,"IMAGE_GALLERY",()=>eS.IMAGE_GALLERY,"ImageFlyIn",()=>b.ImageFlyIn,"ImportantAlertsCard",()=>eo.ImportantAlertsCard,"LINE_DATA",()=>G.LINE_DATA,"LINE_DEMO_RANGES",()=>z.LINE_DEMO_RANGES,"LineChartCard",()=>G.LineChartCard,"LogRow",()=>o.LogRow,"MONTHS",()=>U.MONTHS,"MarketingDashboard",()=>eR.MarketingDashboard,"MedicalProfile",()=>eF.MedicalProfile,"MorphingTooltip",()=>v.MorphingTooltip,"MostActiveDaysCard",()=>H.MostActiveDaysCard,"MultiLevelDrawerMenu",()=>y.MultiLevelDrawerMenu,"NotificationBell",()=>C.NotificationBell,"NotificationCenter",()=>em.NotificationCenter,"NotificationCenterDemo",0,function(){return(0,N.jsx)(em.NotificationCenter,{notifications:ep})},"ORDERS_DATA",()=>ei.ORDERS_DATA,"OrdersChartCard",()=>ei.OrdersChartCard,"PALETTE",()=>U.PALETTE,"PatientInfoCard",()=>ec.PatientInfoCard,"PeriodSelect",()=>U.PeriodSelect,"PeriodTabs",()=>U.PeriodTabs,"PlanArtFlame",()=>eh.PlanArtFlame,"PulseDot",()=>U.PulseDot,"RADAR_DATA",()=>W.RADAR_DATA,"RADAR_DEMO_RANGES",()=>z.RADAR_DEMO_RANGES,"RADIAL_DATA",()=>J.RADIAL_DATA,"RADIAL_DEMO_RANGES",()=>z.RADIAL_DEMO_RANGES,"RECENT_HIRES",()=>eT.RECENT_HIRES,"REVENUE_DATA",()=>en.REVENUE_DATA,"RadarChartCard",()=>W.RadarChartCard,"RadialChartCard",()=>J.RadialChartCard,"RecentHiresCard",()=>eT.RecentHiresCard,"RevenueChartCard",()=>en.RevenueChartCard,"RowConnector",()=>o.RowConnector,"SANKEY_DEMO_RANGES",()=>Y.SANKEY_DEMO_RANGES,"SANKEY_LINKS",()=>q.SANKEY_LINKS,"SANKEY_NODES",()=>q.SANKEY_NODES,"SCATTER_DEMO_RANGES",()=>z.SCATTER_DEMO_RANGES,"SCATTER_SERIES",()=>V.SCATTER_SERIES,"SLEEP_METRICS",()=>K.SLEEP_METRICS,"SOFT_EASE",()=>o.SOFT_EASE,"STAGE_BARS",()=>X.STAGE_BARS,"STARTER_NOTIFICATIONS",()=>_.STARTER_NOTIFICATIONS,"STARTER_SITE_PREFIX",()=>j.STARTER_SITE_PREFIX,"STARTER_UNREAD_COUNT",()=>_.STARTER_UNREAD_COUNT,"STEPS_DATA",()=>Z.STEPS_DATA,"SankeyChartCard",()=>q.SankeyChartCard,"ScaleSlider",()=>D.ScaleSlider,"ScatterChartCard",()=>V.ScatterChartCard,"SearchSiteMark",()=>eP.SearchSiteMark,"SettingsCard",()=>eb.SettingsCard,"SettingsGeneral",()=>eg.SettingsGeneral,"SettingsModal",()=>ex.SettingsModal,"SettingsProfile",()=>ef.SettingsProfile,"SettingsRow",()=>eb.SettingsRow,"SettingsSectionLabel",()=>eb.SettingsSectionLabel,"SettingsStorage",()=>ev.SettingsStorage,"SettingsTools",()=>ey.SettingsTools,"SettingsValueField",()=>eb.SettingsValueField,"ShimmerText",()=>o.ShimmerText,"SleepScoreCard",()=>K.SleepScoreCard,"StageBarsCard",()=>X.StageBarsCard,"StatCards",()=>el.StatCards,"StatTiles",()=>U.StatTiles,"StatusBar",()=>ee.StatusBar,"StepsCard",()=>Z.StepsCard,"SwitchingTransport",()=>s.SwitchingTransport,"TEMPLATE_DEMO_ROWS",()=>eM.TEMPLATE_DEMO_ROWS,"THEME_CHANGE_EVENT",()=>eB.THEME_CHANGE_EVENT,"THEME_STORAGE_KEY",()=>eB.THEME_STORAGE_KEY,"TaskChip",()=>eD.TaskChip,"TaskList",()=>eD.TaskList,"TemplateRecordDialog",()=>ez.TemplateRecordDialog,"TemplateShell",()=>eL.TemplateShell,"TemplateTable",()=>ez.TemplateTable,"TextReveal",()=>w.TextReveal,"ThemeToggle",()=>eB.ThemeToggle,"UNIT_ANIMATE",()=>o.UNIT_ANIMATE,"UNIT_INITIAL",()=>o.UNIT_INITIAL,"UNIT_TRANSITION",()=>o.UNIT_TRANSITION,"WebSearch",()=>eP.WebSearch,"WeekRangePill",()=>ed.WeekRangePill,"WeekSwitcher",()=>U.WeekSwitcher,"WorkingRow",()=>o.WorkingRow,"applyTheme",()=>eB.applyTheme,"average",()=>U.average,"chartAxis",()=>U.chartAxis,"createTemplateRows",()=>ez.createTemplateRows,"describeDelta",()=>L.describeDelta,"formatCompact",()=>L.formatCompact,"formatNumber",()=>L.formatNumber,"formatTokens",()=>u.formatTokens,"ink",()=>U.ink,"numeric",()=>U.numeric,"pickDemoAnswer",()=>l.pickDemoAnswer,"safeRatio",()=>U.safeRatio,"shortNumber",()=>U.shortNumber,"starterNav",()=>j.starterNav,"sum",()=>U.sum,"useChartHover",()=>L.useChartHover,"useChartRange",()=>U.useChartRange,"useLogMotion",()=>o.useLogMotion,"useRevealMask",()=>o.useRevealMask,"useRevealTicker",()=>o.useRevealTicker,"useStarterBase",()=>j.useStarterBase,"useStarterSelected",()=>j.useStarterSelected,"useThemeMode",()=>eB.useThemeMode],46990)},32718,97131,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(56966),i=e.i(74183),n=e.i(79571);let l=(0,n.cx)("flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[3px] text-text-secondary outline-none","transition-colors duration-150 ease hover:bg-background-secondary-hover","focus-visible:ring-2 focus-visible:ring-border-focus-ring");function s({label:e}){let[r,i]=(0,a.useState)(e),[l,o]=(0,a.useState)(null);return(0,a.useEffect)(()=>{e!==r&&(o(r),i(e))},[e,r]),(0,a.useEffect)(()=>{if(null===l)return;let e=setTimeout(()=>o(null),240);return()=>clearTimeout(e)},[l]),(0,t.jsxs)("span",{className:"relative flex-1 overflow-hidden text-center text-body-medium whitespace-nowrap text-text-primary",children:[(0,t.jsx)("span",{className:"invisible",children:r}),null!==l&&(0,t.jsx)("span",{className:"animate-label-out absolute inset-0 flex items-center justify-center",children:l},`out-${l}`),(0,t.jsx)("span",{className:(0,n.cx)("absolute inset-0 flex items-center justify-center",null!==l&&"animate-label-in"),children:r},`in-${r}`)]})}function o({label:e,onPrev:a,onNext:r,className:c}){let d=!!(a||r);return(0,t.jsxs)("div",{className:(0,n.cx)("flex h-8 w-[151px] shrink-0 items-center justify-between gap-1 rounded-2lg border border-border-button-default bg-background-primary-default px-1 py-1 shadow-xs",c),children:[d?(0,t.jsx)("button",{type:"button","aria-label":"Previous",onClick:a,className:l,children:(0,t.jsx)(i.ChevronLeft16,{})}):(0,t.jsx)("span",{className:"flex size-4 shrink-0 items-center justify-center text-text-secondary","aria-hidden":!0,children:(0,t.jsx)(i.ChevronLeft16,{})}),d?(0,t.jsx)(s,{label:e}):(0,t.jsx)("span",{className:"flex-1 text-center text-body-medium whitespace-nowrap text-text-primary",children:e}),d?(0,t.jsx)("button",{type:"button","aria-label":"Next",onClick:r,className:l,children:(0,t.jsx)(i.ChevronRight16,{})}):(0,t.jsx)("span",{className:"flex size-4 shrink-0 items-center justify-center text-text-secondary","aria-hidden":!0,children:(0,t.jsx)(i.ChevronRight16,{})})]})}e.s(["WeekRangePill",0,o],97131);let c=[{icon:r.RiHeartPulseFill,iconBg:"bg-rose-600",title:"High Heart rate",description:"Your heart rate rose above 120 BPM while you seemed to be inactive for 10 minutes starting at 8:59 AM, 12 June.",date:"June, 12"},{icon:r.RiAsterisk,iconBg:"bg-amber-400",title:"Medical ID",description:"Your emergency contact and allergy information was updated in your Medical ID.",date:"June, 9"},{icon:r.RiTestTubeFill,iconBg:"bg-emerald-500",title:"Lab results ready",description:"Your latest blood panel ordered by Dr. Mattheus Clarkson is back — cholesterol and glucose are within the normal range.",date:"June, 9"},{icon:r.RiCapsuleFill,iconBg:"bg-blue-400",title:"Medication reminder",description:"You missed your 9:00 AM dose of Metoprolol. Take it as soon as possible unless your next dose is near.",date:"June, 8"},{icon:r.RiMoonClearFill,iconBg:"bg-purple-400",title:"Irregular sleep",description:"Your bedtime shifted by more than 2 hours on 3 of the last 7 nights, which can affect your sleep score.",date:"June, 6"},{icon:r.RiLungsFill,iconBg:"bg-teal-400",title:"Low blood oxygen",description:"Your blood oxygen dipped to 93% for a short period during sleep on the night of 4 June.",date:"June, 5"}];e.s(["ImportantAlertsCard",0,function({className:e}={}){let[r,i]=(0,a.useState)(!1);return(0,t.jsxs)("section",{className:(0,n.cx)("flex h-[330px] w-full min-w-0 flex-col gap-4 overflow-hidden rounded-[20px] border border-background-secondary-default bg-background-secondary-default px-2.5 pt-2.5",e),children:[(0,t.jsxs)("div",{className:"flex w-full items-start justify-between gap-2 px-1.5 pt-1.5",children:[(0,t.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col gap-0.5",children:[(0,t.jsx)("p",{className:"text-body-medium text-text-secondary",children:"Important alerts"}),(0,t.jsxs)("div",{className:"flex items-baseline gap-1",children:[(0,t.jsx)("p",{className:"text-title-1-medium whitespace-nowrap text-text-primary tabular-nums",children:12}),(0,t.jsx)("span",{className:"text-caption-1-medium whitespace-nowrap text-text-secondary",children:"this week"})]})]}),(0,t.jsx)(o,{label:"29 Jun - 5 Jul"})]}),(0,t.jsxs)("div",{className:"relative min-h-0 w-full flex-1",children:[(0,t.jsx)("div",{className:"flex h-full w-full flex-col gap-2.5 overflow-y-auto overscroll-contain pb-2.5",onScroll:e=>i(e.currentTarget.scrollTop>0),children:c.map((e,a)=>(0,t.jsxs)("div",{className:"relative flex w-full shrink-0 flex-col gap-2 rounded-2lg bg-background-inner-default p-2.5",children:[(0,t.jsx)("span",{className:(0,n.cx)("flex size-8 shrink-0 items-center justify-center rounded-full",e.iconBg),children:(0,t.jsx)(e.icon,{className:"size-[18px] text-white","aria-hidden":!0})}),(0,t.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,t.jsx)("p",{className:"text-body-medium whitespace-nowrap text-text-primary",children:e.title}),(0,t.jsx)("p",{className:"text-body-2-regular text-text-secondary",children:e.description})]}),(0,t.jsx)("span",{className:"absolute top-2.5 right-2.5 rounded-md bg-background-secondary-default px-1.5 py-px text-body-medium whitespace-nowrap text-text-secondary",children:e.date})]},`${e.title}-${a}`))}),(0,t.jsx)("div",{"aria-hidden":!0,className:(0,n.cx)("pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-background-secondary-default to-transparent","transition-opacity duration-200 ease-out",r?"opacity-100":"opacity-0")})]})]})}],32718)},58034,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(17185),i=e.i(31614),n=e.i(79571);let l=[{icon:a.RiAsterisk,label:"Date of Birth",value:"28 July, 1997"},{icon:a.RiMenLine,label:"Gender",value:"Male"},{icon:a.RiDropLine,label:"Blood Type",value:"A rh+"},{icon:a.RiStethoscopeLine,label:"GP Doctor",value:"Mattheus Clarkson"}];e.s(["PatientInfoCard",0,function({className:e}={}){return(0,t.jsxs)("section",{className:(0,n.cx)("flex h-[330px] w-full min-w-0 flex-col items-center gap-[15px] rounded-[20px] bg-background-secondary-default px-2.5 pt-6 pb-2.5",e),children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(r.Avatar,{size:"lg",initials:"M",className:"size-[66px] text-[24.75px]"}),(0,t.jsx)(i.Button,{variant:"secondary",size:"xs",iconOnly:!0,leadingIcon:a.RiAddLine,"aria-label":"Add profile photo",className:"absolute -top-0.5 -right-0.5 rounded-full"})]}),(0,t.jsx)("p",{className:"text-title-2-medium whitespace-nowrap text-text-primary",children:"Mertcan Esmergül"}),(0,t.jsx)("div",{className:"flex w-full flex-1 flex-col gap-2.5",children:l.map(e=>(0,t.jsxs)("div",{className:"flex w-full items-center justify-between rounded-2lg bg-background-inner-default px-2.5 py-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsx)(e.icon,{className:"size-4 shrink-0 text-text-secondary","aria-hidden":!0}),(0,t.jsx)("span",{className:"text-body-regular whitespace-nowrap text-text-secondary",children:e.label})]}),(0,t.jsx)("span",{className:"text-body-medium whitespace-nowrap text-text-primary",children:e.value})]},e.label))})]})}])},13051,29285,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(6632),i=e.i(48545),n=e.i(52410),l=e.i(46585),s=e.i(90688),o=e.i(70683),c=e.i(92533),d=e.i(31614),u=e.i(80066),m=e.i(7196),p=e.i(74539),h=e.i(79571),g=e.i(33938),x=e.i(49398);let f=[{src:"/ai-chat/gallery/green-ape.webp",alt:"Green ape, screenprint halftone"},{src:"/ai-chat/gallery/cloud-crown.webp",alt:"Cloud crown, editorial portrait"},{src:"/ai-chat/gallery/cat-with-beer.webp",alt:"Cat with a beer, bold linework"},{src:"/ai-chat/gallery/hanok-bookshop.webp",alt:"Hanok bookshop, pastel duotone"},{src:"/ai-chat/gallery/nairobi-vibes.webp",alt:"Nairobi Vibes, blackletter poster"},{src:"/ai-chat/gallery/ronin-red.webp",alt:"Ronin in red, cel-shaded"},{src:"/ai-chat/gallery/bloom-swirl.webp",alt:"Bloom swirl, impasto abstraction"},{src:"/ai-chat/gallery/hoopoes.webp",alt:"Hoopoes in olive branches, gouache"},{src:"/ai-chat/gallery/girls-and-blooms.webp",alt:"Girls and blooms, painterly crop"},{src:"/ai-chat/gallery/biker-rest.webp",alt:"Biker resting, watercolour manga"},{src:"/ai-chat/gallery/beach-kid.webp",alt:"Beach kid, 35mm flash"},{src:"/ai-chat/gallery/reader-pink.webp",alt:"Reader on pink, crayon texture"},{src:"/ai-chat/gallery/underwater-highway.webp",alt:"Underwater highway, flat vector"},{src:"/ai-chat/gallery/perfume-still-life.webp",alt:"Perfume still life, grainy neon"},{src:"/ai-chat/gallery/yellow-cabs.webp",alt:"Yellow cabs, palette-knife oil"},{src:"/ai-chat/gallery/goldfish-living-room.webp",alt:"Goldfish living room, surreal collage"},{src:"/ai-chat/gallery/linen-campaign.webp",alt:"Linen campaign, crimson backdrop"},{src:"/ai-chat/gallery/helmet-portraits.webp",alt:"Helmet portraits, risograph grid"},{src:"/ai-chat/gallery/racing-suit.webp",alt:"Racing suit editorial, metallic green"},{src:"/ai-chat/gallery/massive-box.webp",alt:"MASSIV3 packaging, studio mockup"}];e.s(["IMAGE_GALLERY",0,f],29285);let b={src:"/ai-chat/generated-footballer.jpg",alt:"Vintage illustration of a footballer in Argentina's home kit against a blue background"},v=["Editorial","Photography","Illustration","3D render","Screenprint","Cinematic"];function y(){let e=(0,l.useRef)(null),a=(0,n.useReducedMotion)();return(0,l.useEffect)(()=>{let t=e.current,r=t?.getContext("2d");if(!t||!r)return;let i=0,n=performance.now(),l=Math.min(devicePixelRatio||1,2);t.width=200*l,t.height=250*l,r.scale(l,l);let s=e=>{let t=a?1:(e-n)/1e3;r.clearRect(0,0,200,250);for(let e=0;e<24;e++){let a=(7*e+13*t)%168+3,i=.24*Math.sin(Math.min(a/168,1)*Math.PI);r.beginPath(),r.ellipse(100,125,.74*a,a,.12*Math.sin(.6*t),0,2*Math.PI),r.strokeStyle=`rgba(122,123,136,${i})`,r.lineWidth=.7,r.stroke()}a||(i=requestAnimationFrame(s))};return s(n),()=>cancelAnimationFrame(i)},[a]),(0,t.jsx)("canvas",{ref:e,"aria-hidden":!0,className:"absolute inset-0 size-full"})}function D({result:e,busy:l,seconds:s,animateEntry:o,onOpen:c}){let d=(0,n.useReducedMotion)();return(0,t.jsxs)(i.motion.div,{initial:!!o&&!d&&{height:0,opacity:0},animate:{height:250,opacity:1},transition:{duration:.7*!d,ease:[.22,1,.36,1]},className:"relative w-[200px] overflow-hidden rounded-2xl bg-background-tertiary-default",children:[l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{}),(0,t.jsxs)("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-2",children:[(0,t.jsx)("span",{className:"text-body-regular text-text-secondary",children:"Generating image"}),null!==s&&(0,t.jsx)(r.AnimatePresence,{mode:"popLayout",children:(0,t.jsxs)(i.motion.span,{initial:!!o&&!d&&{y:10,rotateX:-80,opacity:0},animate:{y:0,rotateX:0,opacity:1},exit:{y:-10,rotateX:80,opacity:0},transition:{duration:.3*!d},className:"text-title-3-medium text-text-primary tabular-nums",children:[s,"s"]},s)})]})]}),e&&(0,t.jsxs)(i.motion.button,{type:"button","aria-label":"Open generated image",className:"group absolute inset-0 size-full cursor-zoom-in overflow-hidden rounded-2xl",onClick:c,initial:!d&&{"--reveal":"0%",opacity:0,filter:"blur(12px)"},animate:{"--reveal":"132%",opacity:1,filter:"blur(0px)"},transition:{duration:1.6*!d,ease:[.22,1,.36,1]},style:{maskImage:"radial-gradient(circle at 50% 50%, #000 calc(var(--reveal) - 26%), transparent var(--reveal))"},children:[(0,t.jsx)("img",{src:e.src,alt:e.alt??"Generated image",className:"size-full object-cover"}),(0,t.jsx)("span",{className:"absolute right-2 bottom-2 rounded-full bg-background-full p-1.5 text-text-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",children:(0,t.jsx)(a.RiSearchLine,{className:"size-4"})})]})]})}e.s(["AIImageGenerationTemplate",0,function({onGenerate:e,gallery:r=f,autoRun:y=!0,enableStylePresets:w=!1,contained:j,className:C}={}){let[_,k]=(0,l.useState)(""),[N,E]=(0,l.useState)(y&&!e?"Create a vintage editorial illustration of Lionel Messi dribbling in Argentina's home kit against a blue background.":""),[A,S]=(0,l.useState)(y&&!e),[R,F]=(0,l.useState)(null),[T,M]=(0,l.useState)(4),[L,z]=(0,l.useState)(0),[B,P]=(0,l.useState)("gallery"),[I,O]=(0,l.useState)("Editorial"),[$,G]=(0,l.useState)(""),[H,U]=(0,l.useState)(r),[W,J]=(0,l.useState)(null),[q,Y]=(0,l.useState)(""),V=(0,l.useRef)(null),K=(0,l.useRef)(0),X=(0,n.useReducedMotion)(),Z=()=>{K.current+=1,V.current?.abort(),S(!1)};(0,l.useEffect)(()=>()=>V.current?.abort(),[]);let Q=(0,l.useCallback)((e,t)=>{let a={...e,alt:e.alt??t};F(a),S(!1),U(t=>[a,...t.filter(t=>t.src!==e.src)])},[]);(0,l.useEffect)(()=>{if(!A||e)return;let t=!0,a=performance.now(),r=setInterval(()=>{t&&K.current===L&&M(Math.max(1,4-Math.floor((performance.now()-a)/1e3)))},200),i=setTimeout(()=>{t&&K.current===L&&Q(b,N)},4300);return()=>{t=!1,clearInterval(r),clearTimeout(i)}},[A,e,L,N,Q]);let ee=()=>{Z(),E(""),k(""),F(null),Y(""),J(null)},et=async t=>{let a=t.trim();if(!a)return;Z();let r=K.current,i=new AbortController;if(V.current=i,E(a),k(""),F(null),Y(""),M(4),z(r),S(!0),e)try{let t=await e(a,{signal:i.signal,style:I});K.current!==r||i.signal.aborted||Q(t,a)}catch(e){if(K.current!==r||i.signal.aborted)return;S(!1),Y(e instanceof Error?e.message:"Image generation failed. Try again.")}},ea=H.filter(e=>e.alt.toLowerCase().includes($.toLowerCase())),er=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-2.5 flex h-[30px] shrink-0 items-center justify-between gap-2",children:[(0,t.jsx)(p.PillTabList,{"aria-label":"Panel view",children:[{id:"gallery",label:"Gallery",Icon:a.RiGalleryLine},{id:"styles",label:"Styles",Icon:a.RiSparklingLine}].map(({id:e,label:a,Icon:r})=>(0,t.jsx)(p.PillTab,{onSelect:()=>P(e),isSelected:B===e,icon:r,className:"gallery"===e?"[&_svg]:size-[18px]":void 0,children:a},e))}),(0,t.jsx)(u.IconButton,{size:"small",icon:a.RiAddLine,"aria-label":"Start a new image",onClick:ee,className:"size-[22px] rounded-md border-0 bg-transparent p-0.5 shadow-none [&_svg]:size-[18px]"})]}),"styles"===B?w?(0,t.jsx)("div",{className:"min-h-0 grid grid-cols-2 gap-2 overflow-y-auto",children:v.map((e,i)=>(0,t.jsxs)("button",{type:"button",onClick:()=>O(e),"aria-pressed":e===I,className:(0,h.cx)("group relative cursor-pointer overflow-hidden rounded-2xl border-2 text-left",e===I?"border-border-focus-ring":"border-transparent"),children:[(0,t.jsx)("img",{src:r[i]?.src??b.src,alt:"",className:"aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"}),(0,t.jsxs)("span",{className:"absolute inset-x-2 bottom-2 flex items-center justify-between rounded-lg bg-background-full px-2 py-1 text-body-medium text-text-primary",children:[e,e===I&&(0,t.jsx)(a.RiCheckLine,{className:"size-4"})]})]},e))}):(0,t.jsx)("div",{className:"flex min-h-0 w-full flex-1 items-center justify-center rounded-2lg bg-background-secondary-default",children:(0,t.jsx)("span",{className:"text-body-medium text-text-tertiary",children:"Style presets"})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"mb-2",children:(0,t.jsx)(m.InputBase,{"aria-label":"Search gallery",value:$,onChange:e=>G(e.target.value),placeholder:"Search images",leadingIcon:a.RiSearchLine})}),(0,t.jsxs)("div",{className:"min-h-0 flex-1 overflow-y-auto",children:[(0,t.jsx)("div",{className:"columns-3 gap-2",children:ea.map(e=>(0,t.jsxs)(i.motion.button,{layout:!X,type:"button",onClick:()=>J(e),"aria-label":`Open ${e.alt}`,className:"group relative mb-2 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-2lg",children:[(0,t.jsx)("img",{src:e.src,alt:e.alt,loading:"lazy",className:"w-full transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"}),(0,t.jsx)("span",{className:"absolute right-1.5 bottom-1.5 rounded-full bg-background-full p-1 text-text-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",children:(0,t.jsx)(a.RiArrowDownLine,{className:"size-3"})})]},e.src))}),0===ea.length&&(0,t.jsx)("p",{className:"p-4 text-body-regular text-text-secondary",children:"No images match your search."})]})]})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g.AgentWorkspace,{kind:"image",input:_,onInputChange:k,onSubmit:e=>void et(e),onStop:Z,onNew:ee,busy:A,contained:j,className:C,panel:er,children:[!N&&(0,t.jsxs)("div",{className:"flex flex-1 flex-col justify-center py-20 text-center",children:[(0,t.jsx)("h1",{className:"text-title-2-medium text-text-primary",children:"Bring your ideas to life."}),(0,t.jsx)("p",{className:"pt-2 text-body-regular text-text-secondary",children:"Describe an image to get started."})]}),N&&(0,t.jsx)(i.motion.p,{initial:0!==L&&!X&&{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.3*!X},className:"ml-auto max-w-md rounded-2xl bg-background-tertiary-default px-4 py-3 text-body-regular text-text-primary",children:N},N),N&&!e&&(0,t.jsx)("p",{className:"text-body-2-regular text-text-tertiary",children:"Example image generation · No generation service connected"}),(A||R)&&(0,t.jsx)(D,{busy:A,seconds:e?null:T,animateEntry:L>0,result:R,onOpen:()=>R&&J({src:R.src,alt:R.alt??N})},L),R&&(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)(x.ConversationFeedback,{text:N,onRetry:()=>void et(N)}),(0,t.jsxs)("a",{href:R.src,download:!0,className:"flex items-center gap-1 text-body-2-medium text-text-secondary hover:text-text-primary",children:[(0,t.jsx)(a.RiDownloadLine,{className:"size-4"}),"Download"]})]}),q&&(0,t.jsx)("p",{role:"alert",className:"text-body-regular text-status-rose-text",children:q}),N&&!A&&!R&&!q&&(0,t.jsx)("p",{role:"status",className:"text-body-regular text-text-secondary",children:"Generation stopped."}),N&&!A&&!R&&(0,t.jsx)(d.Button,{size:"small",variant:"secondary",className:"self-start",onClick:()=>void et(N),children:"Try again"})]}),(0,t.jsx)(c.ModalOverlay,{isOpen:!!W,onOpenChange:e=>{e||J(null)},isDismissable:!0,className:"fixed inset-0 z-50 flex items-center justify-center bg-background-modal-overlay p-4 backdrop-blur-lg",children:(0,t.jsx)(c.Modal,{className:"max-h-[95dvh] max-w-4xl overflow-auto rounded-3xl border border-border-button-default bg-background-full p-3 shadow-dropdown",children:(0,t.jsxs)(s.Dialog,{className:"outline-none",children:[(0,t.jsxs)("div",{className:"mb-3 flex items-center justify-between gap-4",children:[(0,t.jsx)(o.Heading,{slot:"title",className:"truncate text-body-medium text-text-primary",children:W?.alt}),(0,t.jsx)(u.IconButton,{icon:a.RiCloseLine,size:"small","aria-label":"Close image",onClick:()=>J(null)})]}),W&&(0,t.jsx)("img",{src:W.src,alt:W.alt,className:"max-h-[75dvh] w-full rounded-xl object-contain"}),(0,t.jsx)("div",{className:"mt-3 flex justify-end",children:(0,t.jsxs)("a",{href:W?.src,download:!0,className:"flex items-center gap-1 rounded-full bg-button-primary px-3 py-2 text-body-medium text-button-primary-foreground",children:[(0,t.jsx)(a.RiDownloadLine,{className:"size-4"}),"Download image"]})})]})})})]})}],13051)},74993,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(48545),i=e.i(46585),n=e.i(90688),l=e.i(70683),s=e.i(92533),o=e.i(17185),c=e.i(45737),d=e.i(31614),u=e.i(7196),m=e.i(79240),p=e.i(66733),h=e.i(52272);let g={name:"Mertcan Esmergül",handle:"sitenley",cover:"/templates/ai-profile-cover.png"},x=["January","February","March","April","May","June","July","August","September","October","November","December"];function f({kind:e}){let[n,l]=(0,i.useState)(11),[s,o]=(0,i.useState)(null),d=(0,m.useHydratedReducedMotion)(),u=(0,i.useId)(),p=Array.from({length:30},(t,a)=>"agents"===e?(17*a+3*n)%18+1:8+(19*a+11*n)%22+5*Math.sin(a/2)),h=Math.max(...p),g="agents"===e?221:171,b=p.map((e,t)=>[648*t/29,g-e/h*(g-10)]),v=b.map(([e,t],a)=>`${a?"L":"M"}${e},${t}`).join(" "),y=null===s?"agents"===e?"32 agents":"667.7M tokens":"agents"===e?`${p[s]} agents`:`${p[s].toFixed(1)}M tokens`;return(0,t.jsxs)("section",{className:"flex flex-col gap-3 rounded-[20px] bg-background-secondary-default px-2.5 py-3",children:[(0,t.jsxs)("div",{className:"flex items-start justify-between gap-3 px-1.5",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-body-medium text-text-secondary",children:"agents"===e?"Agents":"Tokens"}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("p",{className:"text-title-2-medium text-text-secondary tabular-nums",children:y}),"tokens"===e&&(0,t.jsx)(c.Chip,{color:"purple",children:"+9.4%"})]})]}),"agents"===e&&(0,t.jsxs)("div",{className:"flex items-center rounded-2lg border border-border-button-default bg-background-primary-default shadow-xs",children:[(0,t.jsx)("button",{type:"button","aria-label":"Previous month",onClick:()=>{l(e=>(e+11)%12),o(null)},className:"cursor-pointer rounded-l-2lg p-1 text-text-secondary",children:(0,t.jsx)(a.RiArrowLeftSLine,{className:"size-4"})}),(0,t.jsx)("span",{className:"px-1 text-body-medium text-text-primary",children:x[n]}),(0,t.jsx)("button",{type:"button","aria-label":"Next month",onClick:()=>{l(e=>(e+1)%12),o(null)},className:"cursor-pointer rounded-r-2lg p-1 text-text-secondary",children:(0,t.jsx)(a.RiArrowRightSLine,{className:"size-4"})})]})]}),(0,t.jsx)("div",{className:"relative",style:{height:g},children:"agents"===e?(0,t.jsx)("div",{className:"flex h-full items-end gap-1.5",children:p.map((e,a)=>(0,t.jsx)("button",{type:"button","aria-label":`Day ${a+1}: ${e} agents`,onMouseEnter:()=>o(a),onMouseLeave:()=>o(null),onFocus:()=>o(a),onBlur:()=>o(null),className:"relative h-full min-w-0 flex-1 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",children:(0,t.jsx)(r.motion.span,{initial:!d&&{height:0},animate:{height:`${e/h*90}%`,opacity:null!==s&&s!==a?.3:1},transition:{duration:.65*!d,delay:d?0:.012*a},className:"absolute inset-x-0 bottom-0 rounded-sm bg-chart-5"},`${n}-${d}`)},`day-${a+1}`))}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{viewBox:`0 0 648 ${g}`,preserveAspectRatio:"none",className:"h-full w-full",role:"img","aria-label":"Token use over the last 30 days",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:u,x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,t.jsx)("stop",{stopColor:"var(--color-chart-5)",stopOpacity:".35"}),(0,t.jsx)("stop",{offset:"1",stopColor:"var(--color-chart-5)",stopOpacity:"0"})]})}),(0,t.jsx)(r.motion.path,{d:`${v} L648,${g} L0,${g} Z`,fill:`url(#${u})`,initial:!d&&{opacity:0},animate:{opacity:1},transition:{duration:.8*!d}},`fill-${d}`),(0,t.jsx)(r.motion.path,{d:v,fill:"none",stroke:"var(--color-chart-5)",strokeWidth:2,initial:!d&&{pathLength:0},animate:{pathLength:1},transition:{duration:1.2*!d,ease:"easeOut"}},`line-${d}`),null!==s&&(0,t.jsx)("circle",{cx:b[s][0],cy:b[s][1],r:4,fill:"var(--color-chart-5-active)",stroke:"var(--color-background-full)",strokeWidth:2})]}),(0,t.jsx)("div",{className:"absolute inset-0 flex",children:p.map((e,a)=>(0,t.jsx)("button",{type:"button","aria-label":`Day ${a+1}: ${e.toFixed(1)} million tokens`,onMouseEnter:()=>o(a),onMouseLeave:()=>o(null),onFocus:()=>o(a),onBlur:()=>o(null),className:"h-full flex-1 outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"},`day-${a+1}`))})]})}),(0,t.jsxs)("div",{className:"flex justify-between px-1.5 text-caption-1-regular text-text-tertiary",children:[(0,t.jsx)("span",{children:"Jun 14"}),(0,t.jsx)("span",{children:"Today"})]})]})}e.s(["AIProfile",0,function({profile:e,onProfileChange:r,contained:m,className:x}={}){let[b,v]=(0,i.useState)(g),y=e??b,[D,w]=(0,i.useState)(y),[j,C]=(0,i.useState)(!1),[_,k]=(0,i.useState)(!1),[N,E]=(0,i.useState)(""),A=async()=>{try{await navigator.clipboard.writeText(window.location.href),k(!0)}catch{E("Copy the URL from your browser’s address bar to share this profile.")}};return(0,t.jsxs)(h.TemplateShell,{title:"Profile",selected:"profile",hideHeader:!0,contained:m,className:x,columnClassName:"max-w-[680px] gap-4 sm:pb-6",children:[(0,t.jsxs)("section",{className:"relative w-full overflow-hidden rounded-3xl border border-border-ai-profile-card bg-background-full",children:[(0,t.jsx)("img",{src:y.cover,alt:"",className:"h-[165px] w-full object-cover"}),(0,t.jsxs)("div",{className:"relative px-4 pt-4",children:[(0,t.jsx)("div",{className:"absolute -top-10 left-4",children:(0,t.jsx)(o.Avatar,{size:"lg",src:y.avatar,initials:y.name[0],alt:y.name,className:"size-20"})}),(0,t.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,t.jsx)(d.Button,{variant:"secondary",size:"small",leadingIcon:_?a.RiCheckLine:a.RiShareBoxLine,onClick:A,children:_?"Copied":"Share"}),(0,t.jsx)(d.Button,{variant:"secondary",size:"small",leadingIcon:a.RiEditBoxLine,onClick:()=>{w(y),C(!0)},children:"Edit"})]}),(0,t.jsx)("h1",{className:"mt-1 text-title-2-medium text-text-primary",children:y.name}),(0,t.jsxs)("div",{className:"mt-0.5 flex items-center gap-1.5",children:[(0,t.jsxs)("p",{className:"text-headline-medium text-text-secondary",children:["@",y.handle]}),(0,t.jsx)(c.Chip,{color:"neutral",children:"PRO"})]}),N&&(0,t.jsx)("p",{role:"status",className:"pt-2 text-body-2-regular text-text-secondary",children:N})]}),(0,t.jsx)(p.ContributionsCard,{headline:7462,data:p.CONTRIBUTIONS_DATA,className:"rounded-none bg-background-full [&_div.bg-background-inner-default]:bg-background-secondary-default"})]}),(0,t.jsx)(f,{kind:"agents"}),(0,t.jsx)(f,{kind:"tokens"}),(0,t.jsx)(s.ModalOverlay,{isOpen:j,onOpenChange:C,isDismissable:!0,className:"fixed inset-0 z-50 flex items-center justify-center bg-background-modal-overlay p-4 backdrop-blur-sm",children:(0,t.jsx)(s.Modal,{className:"w-full max-w-md rounded-3xl border border-border-button-default bg-background-primary-default p-6 shadow-dropdown",children:(0,t.jsx)(n.Dialog,{className:"outline-none",children:(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t={...D,name:D.name.trim(),handle:D.handle.replace(/^@/,"").trim()};t.name&&t.handle&&(v(t),r?.(t),C(!1))},className:"flex flex-col gap-4",children:[(0,t.jsx)(l.Heading,{slot:"title",className:"text-title-3-medium text-text-primary",children:"Edit profile"}),(0,t.jsx)(u.Input,{label:"Name",value:D.name,onChange:e=>w({...D,name:e}),isRequired:!0}),(0,t.jsx)(u.Input,{label:"Username",value:D.handle,onChange:e=>w({...D,handle:e}),isRequired:!0}),(0,t.jsx)(u.Input,{label:"Cover image URL",value:D.cover,onChange:e=>w({...D,cover:e})}),(0,t.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,t.jsx)(d.Button,{variant:"secondary",onClick:()=>C(!1),children:"Cancel"}),(0,t.jsx)(d.Button,{type:"submit",children:"Save changes"})]})]})})})})]})}])},76903,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(46585),i=e.i(90688),n=e.i(70683),l=e.i(92533),s=e.i(31614),o=e.i(7196),c=e.i(66733),d=e.i(77243),u=e.i(35013),m=e.i(12846),p=e.i(35878),h=e.i(48866),g=e.i(52272);e.s(["HomeDashboard",0,function({contained:e,className:x,onCreateTicket:f}={}){let[b,v]=(0,r.useState)(!1),[y,D]=(0,r.useState)(""),[w,j]=(0,r.useState)("");return(0,t.jsxs)(g.TemplateShell,{title:"Home",heading:"Welcome Mertcan",selected:"home",contained:e,className:x,onAction:()=>v(!0),children:[(0,t.jsxs)("div",{className:"grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,673px)]",children:[(0,t.jsx)(h.RecentHiresCard,{}),(0,t.jsx)(d.EarningsChartCard,{})]}),(0,t.jsxs)("div",{className:"grid gap-4 lg:grid-cols-2",children:[(0,t.jsx)(u.LineChartCard,{className:"h-[337px]! gap-6"}),(0,t.jsx)(c.ContributionsCard,{className:"sm:h-[337px]"})]}),(0,t.jsx)(m.StatCards,{}),(0,t.jsx)(p.DataTableExample,{}),w&&(0,t.jsxs)("p",{role:"status",className:"rounded-xl bg-status-lime-background px-4 py-3 text-body-medium text-status-lime-text",children:["Ticket created: ",w]}),(0,t.jsx)(l.ModalOverlay,{isOpen:b,onOpenChange:v,isDismissable:!0,className:"fixed inset-0 z-50 flex items-center justify-center bg-background-modal-overlay p-4 backdrop-blur-sm",children:(0,t.jsx)(l.Modal,{className:"w-full max-w-md rounded-3xl border border-border-button-default bg-background-primary-default p-6 shadow-dropdown",children:(0,t.jsx)(i.Dialog,{className:"outline-none",children:(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),y.trim()&&(f?.(y.trim()),j(y.trim()),D(""),v(!1))},className:"flex flex-col gap-4",children:[(0,t.jsx)(n.Heading,{slot:"title",className:"text-title-3-medium text-text-primary",children:"Create ticket"}),(0,t.jsx)(o.Input,{label:"Ticket title",value:y,onChange:D,isRequired:!0,autoFocus:!0}),(0,t.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,t.jsx)(s.Button,{variant:"secondary",onClick:()=>v(!1),children:"Cancel"}),(0,t.jsx)(s.Button,{type:"submit",leadingIcon:a.RiAddLine,children:"Create ticket"})]})]})})})})]})}])},78137,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(34628),i=e.i(63600),n=e.i(39005),l=e.i(35490),s=e.i(12846),o=e.i(47206),c=e.i(48866);e.s(["HRManagement",0,function(e={}){return(0,t.jsxs)(o.DataDashboard,{...e,kind:"hr",title:"HR Team",selected:"hr",action:"Add employee",children:[(0,t.jsx)(s.StatCards,{stats:[{icon:a.RiGroupLine,label:"Employees",value:"248",delta:"+4.2%",deltaColor:"lime"},{icon:a.RiBriefcaseLine,label:"Open roles",value:"12",delta:"+8.3%",deltaColor:"lime"},{icon:a.RiTimeLine,label:"Time to hire",value:"24 days",delta:"-8.3%",deltaColor:"lime"},{icon:a.RiUserUnfollowLine,label:"Attrition",value:"3.8%",delta:"-0.6%",deltaColor:"lime"}]}),(0,t.jsxs)("div",{className:"grid gap-4 xl:grid-cols-3",children:[(0,t.jsx)(c.RecentHiresCard,{}),(0,t.jsx)(l.StageBarsCard,{title:"Hiring pipeline",stages:[{label:"Applications",value:412},{label:"Screens",value:156},{label:"Interviews",value:68},{label:"Offers",value:21},{label:"Hires",value:12}],range:"Last 30 days",delta:.062,showIcons:!1}),(0,t.jsx)(n.RadarChartCard,{title:"Team engagement",variant:"score",range:"Q3 survey",max:100,data:[{label:"Growth",score:84},{label:"Compensation",score:71},{label:"Culture",score:88},{label:"Management",score:79},{label:"Balance",score:66},{label:"Tools",score:91}],series:[{key:"score",label:"Engagement"}]})]}),(0,t.jsxs)("div",{className:"grid gap-4 lg:grid-cols-2",children:[(0,t.jsx)(i.ComboChartCard,{title:"Hires",data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((e,t)=>({label:e,hires:[8,9,12,10,13,15,12,14,11,13,14,15][t],attrition:[5.2,4.8,4.5,4.2,4.4,4.1,4.2,4,4.1,3.8,4.2,3.9][t]})),bar:{key:"hires",label:"Hires"},line:{key:"attrition",label:"Attrition",format:e=>`${e.toFixed(1)}%`},range:"This year",delta:.084}),(0,t.jsx)(r.BarListCard,{metric:"value",metricLabel:"People",tabs:[{id:"departments",label:"Departments",items:[{label:"Engineering",value:96},{label:"Sales",value:44},{label:"Support",value:38},{label:"Marketing",value:26},{label:"Design",value:22}]},{id:"sources",label:"Hiring sources",items:[{label:"Referral",value:88},{label:"LinkedIn",value:74},{label:"Careers page",value:56}]},{id:"locations",label:"Locations",items:[{label:"London",value:84},{label:"New York",value:70},{label:"Berlin",value:54},{label:"Remote",value:40}]}]})]})]})}])},81043,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(68161),i=e.i(34628),n=e.i(63600),l=e.i(18006),s=e.i(26722),o=e.i(12846),c=e.i(47206);let d=[{label:"Google Ads",value:39},{label:"Meta",value:25},{label:"X Ads",value:14},{label:"LinkedIn",value:8},{label:"Email",value:7}],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=u.map((e,t)=>({label:e,spend:[10800,12300,13600,15800,17200,18900,19600,21e3,22400,20700,21500,23900][t],roas:[2.4,2.5,3.1,2.8,3.5,3.7,3.5,4.2,4.1,4.4,4.1,4.9][t]})),p=u.map((e,t)=>({label:e,organic:[3500,4100,4900,5300,6100,5800,6400,7100,6900,7600,7900,8900][t],paid:[1700,2100,2200,2300,2800,3100,3300,3400,3700,4100,4500,5300][t],social:[900,1e3,1200,1300,1500,1800,1900,2e3,2100,2200,2600,2900][t]}));e.s(["MarketingDashboard",0,function(e={}){return(0,t.jsxs)(c.DataDashboard,{...e,kind:"marketing",title:"Marketing",selected:"marketing",action:"New campaign",children:[(0,t.jsx)(o.StatCards,{stats:[{icon:a.RiMoneyDollarCircleLine,label:"Ad spend",value:"$24,380",delta:"+8.4%",deltaColor:"lime"},{icon:a.RiEyeLine,label:"Impressions",value:"1.94M",delta:"+12.6%",deltaColor:"lime"},{icon:a.RiShoppingBag3Line,label:"Conversions",value:"1,286",delta:"+5.2%",deltaColor:"lime"},{icon:a.RiCursorLine,label:"Cost per click",value:"$1.24",delta:"-3.1%",deltaColor:"lime"}]}),(0,t.jsxs)("div",{className:"grid gap-4 xl:grid-cols-3",children:[(0,t.jsx)(l.FunnelChartCard,{title:"Acquisition funnel",stages:[{label:"Visits",value:96400},{label:"Sign-ups",value:38600},{label:"Trials",value:14100},{label:"Customers",value:5200}],range:"Last 30 days",delta:.058,format:e=>e.toLocaleString("en-US",{notation:"compact",maximumFractionDigits:1})}),(0,t.jsx)(s.RadialChartCard,{title:"Spend by channel",variant:"stacked",range:"Last 30 days",delta:.084,format:e=>`$${e.toLocaleString()}`,data:[{label:"Paid search",value:11400},{label:"Paid social",value:7620},{label:"Email",value:3180},{label:"Affiliates",value:2680}]}),(0,t.jsx)(i.BarListCard,{metricLabel:"Sessions",tabs:[{id:"channels",label:"Channels",items:d},{id:"campaigns",label:"Campaigns",items:[{label:"Spring launch",value:28e3},{label:"Brand search",value:19e3},{label:"Retargeting",value:12e3}]},{id:"pages",label:"Landing pages",items:[{label:"/",value:44e3},{label:"/pricing",value:18e3},{label:"/features",value:16e3}]}]})]}),(0,t.jsxs)("div",{className:"grid gap-4 lg:grid-cols-2",children:[(0,t.jsx)(n.ComboChartCard,{title:"Ad spend",data:m,bar:{key:"spend",label:"Ad spend",format:e=>`$${e.toLocaleString("en-US",{notation:"compact",maximumFractionDigits:1})}`},line:{key:"roas",label:"ROAS",format:e=>`${e.toFixed(1)}x`},range:"This year",delta:.094}),(0,t.jsx)(r.AreaChartCard,{title:"Visitors",data:p,series:[{key:"organic",label:"Organic"},{key:"paid",label:"Paid"},{key:"social",label:"Social"}],range:"This year",delta:.088})]})]})}])},64153,e=>{"use strict";var t=e.i(38935),a=e.i(46585),r=e.i(36297),i=e.i(16698),n=e.i(29554),l=e.i(46569),s=e.i(32718),o=e.i(58034),c=e.i(47206);e.s(["MedicalProfile",0,function(e={}){let[d,u]=(0,a.useState)(()=>new Date(2026,6,10));return(0,t.jsxs)(c.DataDashboard,{...e,kind:"medical",title:"Medical Profile",selected:"medical",action:"File a report",children:[(0,t.jsxs)("div",{className:"grid gap-4 xl:grid-cols-3",children:[(0,t.jsx)(o.PatientInfoCard,{}),(0,t.jsx)(l.StepsCard,{}),(0,t.jsx)(n.SleepScoreCard,{})]}),(0,t.jsxs)("div",{className:"grid gap-4 xl:grid-cols-3",children:[(0,t.jsx)(i.MostActiveDaysCard,{selectedDate:d,onDateChange:u,showActivity:!1}),(0,t.jsx)(r.ActivityRingsCard,{selectedDate:d}),(0,t.jsx)(s.ImportantAlertsCard,{})]})]})}])},48866,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(6632),i=e.i(48545),n=e.i(52410),l=e.i(46585),s=e.i(17185),o=e.i(31614),c=e.i(79571);let d=[{name:"Livia Saris",joined:"Joined today",role:"Backend Engineer",avatar:"/avatars/livia-saris.webp"},{name:"Jaydon Aminoff",joined:"2 days ago",role:"UI Designer",avatar:"/avatars/jaydon-aminoff.webp"},{name:"Maria Lubin",joined:"5 days ago",role:"User Researcher",avatar:"/avatars/maria-lubin.webp"},{name:"Ann Press",joined:"A week ago",role:"DevOps Engineer",avatar:"/avatars/ann-press.webp"},{name:"John Clarkson",joined:"2 weeks ago",role:"Product Designer",avatar:"/avatars/john-clarkson.webp"},{name:"Aspen Lubin",joined:"2 weeks ago",role:"Legal Counsel",avatar:"/avatars/aspen-lubin.webp"},{name:"Michael Ekstrom",joined:"3 weeks ago",role:"Finance Ops",avatar:"/avatars/michael-ekstrom.webp"},{name:"Kianna Vaccaro",joined:"A month ago",role:"Design Lead",avatar:"/avatars/kianna-vaccaro.webp"}];e.s(["RECENT_HIRES",0,d,"RecentHiresCard",0,function({hires:e=d,total:u=56,team:m="Board team",className:p}){let[h,g]=(0,l.useState)(0),x=(0,n.useReducedMotion)(),f=Math.ceil(e.length/4);return(0,t.jsxs)("section",{className:(0,c.cx)("relative flex h-[329px] min-w-0 flex-col rounded-2xl bg-background-secondary-default p-2",p),children:[(0,t.jsxs)("div",{className:"flex items-start justify-between px-2 pt-2",children:[(0,t.jsxs)("div",{className:"flex min-w-0 flex-col gap-0.5",children:[(0,t.jsx)("p",{className:"text-body-medium text-text-secondary",children:"Recent hires"}),(0,t.jsx)("p",{className:"whitespace-nowrap text-title-1-medium text-text-primary",children:u})]}),(0,t.jsx)("span",{className:"text-body-medium text-text-primary",children:m})]}),(0,t.jsx)(r.AnimatePresence,{mode:"wait",initial:!1,children:(0,t.jsx)(i.motion.div,{initial:!x&&{opacity:0,y:6,filter:"blur(2px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:-4},transition:{duration:.18*!x},className:"mt-[11px] grid flex-1 grid-cols-2 grid-rows-2 gap-2",children:e.slice(4*h,4*h+4).map(e=>(0,t.jsxs)("div",{className:"flex min-w-0 flex-col items-start justify-between rounded-2lg bg-background-inner-default p-2.5 shadow-card",children:[(0,t.jsxs)("div",{className:"flex w-full min-w-0 items-center gap-2",children:[(0,t.jsx)(s.Avatar,{src:e.avatar,alt:e.name,initials:e.name.split(" ").map(e=>e[0]).join(""),size:"lg"}),(0,t.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col items-start justify-center",children:[(0,t.jsx)("p",{className:"w-full truncate text-body-medium text-text-primary",children:e.name}),(0,t.jsx)("p",{className:"w-full truncate text-body-2-medium text-text-secondary",children:e.joined})]})]}),(0,t.jsx)("p",{className:"w-full truncate rounded-md bg-background-recent-hire-role px-1.5 py-1 text-center text-caption-1-medium text-text-secondary",children:e.role})]},e.name))},h)}),(0,t.jsxs)("div",{className:"mt-2 flex w-full items-center gap-2",children:[(0,t.jsx)(o.Button,{variant:"secondary",size:"small",className:"flex-1",leadingIcon:a.RiArrowLeftLine,disabled:0===h,onClick:()=>g(e=>Math.max(0,e-1)),children:"Previous"}),(0,t.jsx)(o.Button,{variant:"secondary",size:"small",className:"flex-1",trailingIcon:a.RiArrowRightLine,disabled:h>=f-1,onClick:()=>g(e=>Math.min(f-1,e+1)),children:"Next"})]})]})}])},74761,e=>{"use strict";var t=e.i(38935),a=e.i(56966),r=e.i(48545),i=e.i(46585),n=e.i(60267),l=e.i(79571),s=e.i(82587);let o=[{label:"Ran 3 searches",icon:a.RiSearchLine,heading:!0,dwell:1700},{label:"Searching for what teams actually pay for in a component library",icon:a.RiLightbulbLine,meta:"5 results",dwell:900,sourceDwell:2400,sources:[{title:"Tailwind UI vs building your own: a cost breakdown",domain:"www.reddit.com",brand:"reddit",href:"https://www.reddit.com/"},{title:"We shipped our design system in 6 weeks. Here is what it cost",domain:"www.linkedin.com",brand:"linkedin",href:"https://www.linkedin.com/"},{title:"shadcn/ui — the registry model explained",domain:"github.com",brand:"github",href:"https://github.com/"},{title:"Design tokens: a practical guide",domain:"www.figma.com",brand:"figma",href:"https://www.figma.com/"},{title:"How we priced our component library",domain:"www.notion.so",brand:"notion",href:"https://www.notion.so/"}]},{label:"Searched X for",query:"component library OR design system pricing",brand:"x",meta:"7 posts",dwell:1900},{label:"Searched Reddit for",query:"r/reactjs worth paying for",brand:"reddit",meta:"12 threads",dwell:1800},{label:"Reading the strongest three threads",icon:a.RiLightbulbLine,dwell:2400}];function c({brand:e,className:r}){let i=e?n.SOCIAL_PROVIDERS[e]:void 0;return i?(0,t.jsx)("svg",{"aria-hidden":!0,viewBox:i.viewBox,className:(0,l.cx)("size-4 shrink-0 text-text-primary",r),style:{color:e&&["github","notion","x"].includes(e)?void 0:i.brand},fill:"currentColor",children:(0,t.jsx)("path",{d:i.path})}):(0,t.jsx)(a.RiSearchLine,{"aria-hidden":!0,className:(0,l.cx)("size-4 text-foreground-icon-secondary",r)})}function d({sources:e}){let[n,o]=(0,i.useState)(!1),[u,m]=(0,i.useState)(0),[p,h]=(0,i.useState)(Math.min(5,e.length)),g=(0,i.useRef)(0),x=(0,i.useId)(),f=(0,s.useLogMotion)(),b=e.length;(0,i.useEffect)(()=>{let e=n?b:0,t=Math.min(g.current,b);if(f){g.current=e,m(e),h(Math.min(5,b-e));return}g.current=t,m(t);let a=[],r=e>t?1:-1;for(let i=1;i<=Math.abs(e-t);i++){let e=t+r*i,n=100*i;a.push(window.setTimeout(()=>{g.current=e,m(e)},n)),a.push(window.setTimeout(()=>{h(Math.min(5,b-e))},n+80))}return t===e&&h(Math.min(5,b-e)),()=>a.forEach(window.clearTimeout)},[n,f,b]);let v=(e,a)=>(0,t.jsx)(r.motion.span,{layoutId:f?void 0:`${x}-source-${a}`,initial:!1,transition:f?{duration:0}:{type:"spring",stiffness:420,damping:36},className:"relative flex size-5 shrink-0 items-center justify-center rounded-full border border-border-button-default bg-background-primary-default",style:{zIndex:b-a},children:(0,t.jsx)(c,{brand:e.brand,className:"size-3"})},`${a}-${e.domain}`);return(0,t.jsxs)("div",{className:"py-1",children:[(0,t.jsxs)("button",{type:"button","aria-label":`Open ${e.length} sources`,"aria-expanded":n,"aria-controls":x,onClick:()=>o(e=>!e),className:"group flex cursor-pointer items-center rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",children:[(0,t.jsx)("span",{className:"text-body-regular text-text-secondary",children:"Sources"}),(0,t.jsx)(r.motion.span,{initial:!1,animate:{width:p?20+(p-1)*14:0},transition:f?{duration:0}:{type:"spring",stiffness:420,damping:36},className:"ml-2 flex items-center",children:(0,t.jsx)("span",{className:"flex items-center -space-x-1.5",children:e.slice(0,Math.min(5,b-u)).map(v)})}),(0,t.jsx)(a.RiArrowDownSLine,{className:(0,l.cx)("ml-1 size-4 shrink-0 text-foreground-icon-quaternary transition-transform duration-300 group-hover:text-foreground-icon-secondary motion-reduce:transition-none",n&&"rotate-180"),"aria-hidden":!0})]}),(0,t.jsx)("div",{id:x,role:"region","aria-label":"Research sources","aria-hidden":!n,inert:!n,children:(0,t.jsx)("ul",{className:"flex flex-col",children:e.map((e,a)=>{let i=a>=b-u;return(0,t.jsx)(r.motion.li,{"aria-hidden":!i,inert:!i,initial:!1,animate:{height:i?"auto":0},transition:{duration:.28*!f,ease:s.SOFT_EASE},className:"overflow-hidden",children:(0,t.jsxs)("a",{href:e.href??`https://${e.domain.replace(/^https?:\/\//,"")}`,target:"_blank",rel:"noreferrer",className:"flex cursor-pointer items-center gap-2 rounded-md px-1 py-1 outline-none transition-colors duration-150 hover:bg-background-secondary-default focus-visible:ring-2 focus-visible:ring-border-focus-ring",children:[i?v(e,a):(0,t.jsx)("span",{"aria-hidden":!0,className:"size-5 shrink-0"}),(0,t.jsxs)(r.motion.span,{initial:!1,animate:{opacity:+!!i},transition:{duration:.16*!f,delay:f||!i?0:.05,ease:"easeOut"},className:"flex min-w-0 flex-1 items-center gap-2",children:[(0,t.jsx)("span",{className:"min-w-0 flex-1 truncate text-body-regular text-text-secondary",children:e.title}),(0,t.jsx)("span",{className:"hidden shrink-0 text-caption-1-regular text-text-tertiary sm:block",children:e.domain})]})]})},`${a}-${e.title}`)})})})]})}function u({children:e,reduce:a}){let i=(0,s.useRevealMask)(a);return(0,t.jsx)(r.motion.div,{initial:!a&&s.UNIT_INITIAL,animate:s.UNIT_ANIMATE,transition:s.UNIT_TRANSITION,...i,className:"overflow-hidden",children:e})}e.s(["DEFAULT_WEB_SEARCH_STEPS",0,o,"SearchSiteMark",0,c,"WebSearch",0,function({steps:e=o,revealed:r,run:i=!0,startDelay:n=320,stepInterval:m=850,onComplete:p,className:h}={}){let g=(0,s.useLogMotion)(),x=e.flatMap((e,t)=>[{step:t,sources:!1},...e.sources?.length?[{step:t,sources:!0}]:[]]),f=x.length+ +(void 0===r&&x.length>0),b=(0,s.useRevealTicker)({total:f,run:i,startDelay:n,stepInterval:m,revealed:r,onComplete:p,delayFor:t=>0===t?n:x[t-1]?.sources?e[x[t-1]?.step??0]?.sourceDwell??m:e[x[t-1]?.step??0]?.dwell??m}),v=b>=f,y=0;return(0,t.jsxs)("div",{className:(0,l.cx)("flex w-full flex-col",h),"aria-label":"Web research trail",children:[e.map((r,i)=>{let n=y;if(y+=1+ +!!r.sources?.length,b<=n)return null;let l=!v&&b<=y,o=r.icon??a.RiSearchLine,m=(0,t.jsxs)("div",{className:"flex items-start gap-2",children:[r.brand?(0,t.jsx)("span",{className:"mt-0.5 flex size-4 shrink-0 items-center justify-center",children:(0,t.jsx)(c,{brand:r.brand,className:"size-[13px]"})}):(0,t.jsx)(o,{"aria-hidden":!0,className:"mt-0.5 size-4 shrink-0 text-foreground-icon-secondary"}),(0,t.jsxs)("p",{className:"min-w-0 flex-1 text-body-regular text-text-secondary",children:[l?(0,t.jsx)(s.ShimmerText,{children:r.label}):r.label,r.query&&(0,t.jsx)("span",{className:"ml-1.5 break-words font-mono text-caption-1-regular text-text-tertiary",children:r.query})]}),r.meta&&(0,t.jsx)("span",{className:"shrink-0 pt-px text-body-regular text-text-tertiary tabular-nums",children:r.meta})]});if(r.heading)return(0,t.jsx)(u,{reduce:g,children:(0,t.jsx)("div",{className:"py-1",children:m})},r.id??i);let p=i===e.length-1||b<=y;return(0,t.jsxs)("div",{className:"relative ml-[7px]",children:[i>0&&e[i-1]?.heading&&(0,t.jsx)(s.GuideBridge,{height:6,offset:0,reduce:g}),(0,t.jsx)("ul",{children:(0,t.jsx)(s.LogRow,{first:0===i,last:p,reduce:g,className:"pl-[14px]",children:(0,t.jsxs)("div",{className:"py-1",children:[m,r.sources?.length&&b>n+1?(0,t.jsxs)("div",{className:"relative mt-0.5",children:[(0,t.jsx)(s.GuideBridge,{height:5,offset:7,reduce:g}),(0,t.jsx)("ul",{className:"ml-[7px]",children:(0,t.jsx)(s.LogRow,{first:!1,last:!0,reduce:g,children:(0,t.jsx)(d,{sources:r.sources})})})]}):null]})})})]},r.id??i)}),!v&&(0,t.jsx)(s.WorkingRow,{label:"Working",reduce:g})]})}])}]);