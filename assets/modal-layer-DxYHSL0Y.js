const b="data-radix-focus-guard",v="data-aria-hidden",s="data-scroll-locked";let f=0;function S(){const t=document.createElement("span");return t.setAttribute(b,""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}function T(){const t=document.querySelectorAll(`[${b}]`);return document.body.insertAdjacentElement("afterbegin",t[0]??S()),document.body.insertAdjacentElement("beforeend",t[1]??S()),f+=1,()=>{if(f===1)for(const o of Array.from(document.querySelectorAll(`[${b}]`)))o.remove();f-=1}}const l=new WeakMap,m=new WeakMap,p=new WeakSet;function $(t){const o=t.ownerDocument.body,c=[t,...Array.from(o.querySelectorAll("[aria-live], script"))],u=new Set(c),r=new Set,g=e=>{!e||r.has(e)||(r.add(e),g(e.parentNode))};for(const e of c)g(e);const y=[],A=e=>{if(!u.has(e))for(const n of Array.from(e.children)){if(r.has(n)){A(n);continue}const d=n.getAttribute("aria-hidden"),w=d!==null&&d!=="false",k=(l.get(n)??0)+1,x=(m.get(n)??0)+1;l.set(n,k),m.set(n,x),y.push(n),k===1&&w&&p.add(n),x===1&&n.setAttribute(v,"true"),w||n.setAttribute("aria-hidden","true")}};return A(o),()=>{for(const e of y){const n=(l.get(e)??1)-1,d=(m.get(e)??1)-1;l.set(e,n),m.set(e,d),n===0&&(p.has(e)||e.removeAttribute("aria-hidden"),p.delete(e)),d===0&&e.removeAttribute(v)}}}let i=0,a=null;function h(t){const o=Number.parseInt(t,10);return Number.isFinite(o)?o:0}function E(){const t=window.getComputedStyle(document.body),o=h(t.marginLeft),c=h(t.marginTop),u=h(t.marginRight),r=Math.max(0,window.innerWidth-document.documentElement.clientWidth+u-o);return`
  .with-scroll-bars-hidden {
   overflow: hidden !important;
   padding-right: ${r}px !important;
  }
  body[${s}] {
    overflow: hidden !important;
    overscroll-behavior: contain;
    position: relative !important;
    padding-left: ${o}px;
    padding-top: ${c}px;
    padding-right: ${u}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${r}px !important;
  }
  body[${s}] {
    --removed-body-scroll-bar-size: ${r}px;
  }
`}function C(){return i===0&&(a=document.createElement("style"),a.textContent=E(),document.head.appendChild(a)),i+=1,document.body.setAttribute(s,String(i)),()=>{if(i-=1,i>0){document.body.setAttribute(s,String(i));return}document.body.removeAttribute(s),a?.remove(),a=null}}export{T as a,$ as h,C as l};
