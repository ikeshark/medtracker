import{S as e,i as t,s as l,e as s,t as r,a,b as c,f as n,g as o,d as h,c as i,h as u,j as f,k as d,o as g,n as m,m as b,q as p,r as v}from"./client.c33ab951.js";function T(e,t,l){const s=e.slice();return s[12]=t[l],s}function x(e,t,l){const s=e.slice();return s[3]=t[l],s}function E(e){let t,l,a,i;return{c(){t=s("button"),l=r("End Pee"),this.h()},l(e){t=c(e,"BUTTON",{class:!0});var s=n(t);l=o(s,"End Pee"),s.forEach(h),this.h()},h(){u(t,"class","rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-red-700")},m(s,r){f(s,t,r),d(t,l),a||(i=v(t,"click",e[5]),a=!0)},p:m,d(e){e&&h(t),a=!1,i()}}}function S(e){let t,l,a,i;return{c(){t=s("button"),l=r("Start Pee"),this.h()},l(e){t=c(e,"BUTTON",{class:!0});var s=n(t);l=o(s,"Start Pee"),s.forEach(h),this.h()},h(){u(t,"class","block mb-4 mx-auto rounded-md border-black border py-2 px-4 text-white bg-green-700")},m(s,r){f(s,t,r),d(t,l),a||(i=v(t,"click",e[4]),a=!0)},p:m,d(e){e&&h(t),a=!1,i()}}}function y(e){let t,l,a,i;return{c(){t=s("button"),l=r("Show History"),this.h()},l(e){t=c(e,"BUTTON",{class:!0});var s=n(t);l=o(s,"Show History"),s.forEach(h),this.h()},h(){u(t,"class","block mx-auto rounded-md border-black border py-2 px-4 text-white bg-blue-700")},m(s,r){f(s,t,r),d(t,l),a||(i=v(t,"click",e[6]),a=!0)},p:m,d(e){e&&h(t),a=!1,i()}}}function H(e){let t,l,g,m,p,v,T,E,S,y,H,w=e[7](),D=[];for(let t=0;t<w.length;t+=1)D[t]=k(x(e,w,t));return{c(){t=s("h2"),l=r("Pee History"),g=a(),m=s("table"),p=s("tr"),v=s("th"),T=r("Date"),E=a(),S=s("th"),y=r("Length"),H=a();for(let e=0;e<D.length;e+=1)D[e].c();this.h()},l(e){t=c(e,"H2",{class:!0});var s=n(t);l=o(s,"Pee History"),s.forEach(h),g=i(e),m=c(e,"TABLE",{});var r=n(m);p=c(r,"TR",{class:!0});var a=n(p);v=c(a,"TH",{class:!0});var u=n(v);T=o(u,"Date"),u.forEach(h),E=i(a),S=c(a,"TH",{class:!0});var f=n(S);y=o(f,"Length"),f.forEach(h),a.forEach(h),H=i(r);for(let e=0;e<D.length;e+=1)D[e].l(r);r.forEach(h),this.h()},h(){u(t,"class","text-yellow-500 bold text-2xl md:text-3xl text-center"),u(v,"class","svelte-e5b6eg"),u(S,"class","svelte-e5b6eg"),u(p,"class","svelte-e5b6eg")},m(e,s){f(e,t,s),d(t,l),f(e,g,s),f(e,m,s),d(m,p),d(p,v),d(v,T),d(p,E),d(p,S),d(S,y),d(m,H);for(let e=0;e<D.length;e+=1)D[e].m(m,null)},p(e,t){if(128&t){let l;for(w=e[7](),l=0;l<w.length;l+=1){const s=x(e,w,l);D[l]?D[l].p(s,t):(D[l]=k(s),D[l].c(),D[l].m(m,null))}for(;l<D.length;l+=1)D[l].d(1);D.length=w.length}},d(e){e&&h(t),e&&h(g),e&&h(m),b(D,e)}}}function w(e){let t,l,g=(b=e[12][0],new Date(parseInt(b)).toLocaleTimeString("en-US")+"");var b;let p,v,T,x,E,S=function(e){console.log(e);const t=e/1e3,l=parseInt(t/60);let s=parseInt(t%60)+"";1===s.length&&(s="0"+s);return`${l}:${s}`}(e[12][1])+"";return{c(){t=s("tr"),l=s("td"),p=r(g),v=a(),T=s("td"),x=r(S),E=a(),this.h()},l(e){t=c(e,"TR",{class:!0});var s=n(t);l=c(s,"TD",{class:!0});var r=n(l);p=o(r,g),r.forEach(h),v=i(s),T=c(s,"TD",{class:!0});var a=n(T);x=o(a,S),a.forEach(h),E=i(s),s.forEach(h),this.h()},h(){u(l,"class","text-sm svelte-e5b6eg"),u(T,"class","svelte-e5b6eg"),u(t,"class","svelte-e5b6eg")},m(e,s){f(e,t,s),d(t,l),d(l,p),d(t,v),d(t,T),d(T,x),d(t,E)},p:m,d(e){e&&h(t)}}}function k(e){let t,l,m,p,v,x,E,S=e[3][0]+"",y=e[3][1],H=[];for(let t=0;t<y.length;t+=1)H[t]=w(T(e,y,t));return{c(){t=s("tr"),l=s("th"),m=r(S),p=a(),v=s("th"),x=a();for(let e=0;e<H.length;e+=1)H[e].c();E=g(),this.h()},l(e){t=c(e,"TR",{class:!0});var s=n(t);l=c(s,"TH",{class:!0});var r=n(l);m=o(r,S),r.forEach(h),p=i(s),v=c(s,"TH",{class:!0}),n(v).forEach(h),s.forEach(h),x=i(e);for(let t=0;t<H.length;t+=1)H[t].l(e);E=g(),this.h()},h(){u(l,"class","svelte-e5b6eg"),u(v,"class","svelte-e5b6eg"),u(t,"class","svelte-e5b6eg")},m(e,s){f(e,t,s),d(t,l),d(l,m),d(t,p),d(t,v),f(e,x,s);for(let t=0;t<H.length;t+=1)H[t].m(e,s);f(e,E,s)},p(e,t){if(128&t){let l;for(y=e[3][1],l=0;l<y.length;l+=1){const s=T(e,y,l);H[l]?H[l].p(s,t):(H[l]=w(s),H[l].c(),H[l].m(E.parentNode,E))}for(;l<H.length;l+=1)H[l].d(1);H.length=y.length}},d(e){e&&h(t),e&&h(x),b(H,e),e&&h(E)}}}function D(e){let t,l,b,v,T,x,w,k=Object.values(e[2]).length;function D(e,t){return e[0]?e[0]?E:void 0:S}let N=D(e),O=N&&N(e),P=k&&y(e),L=e[1]&&H(e);return{c(){t=a(),l=s("h1"),b=r("Pee Log"),v=a(),O&&O.c(),T=a(),P&&P.c(),x=a(),L&&L.c(),w=g(),this.h()},l(e){p('[data-svelte="svelte-1wulfr8"]',document.head).forEach(h),t=i(e),l=c(e,"H1",{class:!0});var s=n(l);b=o(s,"Pee Log"),s.forEach(h),v=i(e),O&&O.l(e),T=i(e),P&&P.l(e),x=i(e),L&&L.l(e),w=g(),this.h()},h(){document.title="Pee Log",u(l,"class","text-yellow-500 bold text-3xl md:text-4xl text-center")},m(e,s){f(e,t,s),f(e,l,s),d(l,b),f(e,v,s),O&&O.m(e,s),f(e,T,s),P&&P.m(e,s),f(e,x,s),L&&L.m(e,s),f(e,w,s)},p(e,[t]){N===(N=D(e))&&O?O.p(e,t):(O&&O.d(1),O=N&&N(e),O&&(O.c(),O.m(T.parentNode,T))),4&t&&(k=Object.values(e[2]).length),k?P?P.p(e,t):(P=y(e),P.c(),P.m(x.parentNode,x)):P&&(P.d(1),P=null),e[1]?L?L.p(e,t):(L=H(e),L.c(),L.m(w.parentNode,w)):L&&(L.d(1),L=null)},i:m,o:m,d(e){e&&h(t),e&&h(l),e&&h(v),O&&O.d(e),e&&h(T),P&&P.d(e),e&&h(x),L&&L.d(e),e&&h(w)}}}function N(e,t,l){let s=!1,r=!1;const a={startTime:null,totalTime:null};let c={...a},n={};return n=localStorage.peeHistory?JSON.parse(localStorage.peeHistory):{},[s,r,n,c,function(){l(0,s=!0),l(3,c.startTime=(new Date).getTime(),c)},function(){l(0,s=!1),l(3,c.totalTime=(new Date).getTime()-c.startTime,c),l(2,n[c.startTime]=c.totalTime,n),localStorage.peeHistory=JSON.stringify(n),l(3,c={...a})},function(){l(1,r=!0)},function(){let e={};return Object.entries(n).forEach((t=>{const l=(s=t[0],new Date(parseInt(s)).toLocaleDateString("en-US"));var s;e[l]?e[l].push(t):e[l]=[t]})),Object.entries(e)}]}export default class extends e{constructor(e){super(),t(this,e,N,D,l,{})}}