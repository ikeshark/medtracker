import{S as t,i as e,s as a,e as l,t as s,a as o,b as r,f as c,g as n,d as i,c as d,h,j as u,k as f,l as p,n as b,p as g,r as m,u as y,v,w as x,x as E,y as T,q as w,m as N,o as k,z as S,A as I,B as A,C as B}from"./client.8a0c33d8.js";import{M as D}from"./Modal.d1910ee5.js";function $(t,e,a){const l=t.slice();return l[20]=e[a],l}function H(t,e,a){const l=t.slice();return l[6]=e[a],l}function L(t){let e,a,o,d;return{c(){e=l("button"),a=s("Show History"),this.h()},l(t){e=r(t,"BUTTON",{class:!0});var l=c(e);a=n(l,"Show History"),l.forEach(i),this.h()},h(){h(e,"class","mt-4 block mx-auto rounded-md border-black border py-2 px-4 text-white bg-yellow-700")},m(l,s){u(l,e,s),f(e,a),o||(d=k(e,"click",t[10]),o=!0)},p:b,d(t){t&&i(e),o=!1,d()}}}function O(t){let e,a,p,b,m,y,v,x,E,T,w,N,k,S,I=t[12](),A=[];for(let e=0;e<I.length;e+=1)A[e]=M(H(t,I,e));return{c(){e=l("h2"),a=s("Food History"),p=o(),b=l("table"),m=l("tr"),y=l("th"),v=s("Date"),x=o(),E=l("th"),T=s("Name"),w=o(),N=l("th"),k=s("Quantity"),S=o();for(let t=0;t<A.length;t+=1)A[t].c();this.h()},l(t){e=r(t,"H2",{class:!0});var l=c(e);a=n(l,"Food History"),l.forEach(i),p=d(t),b=r(t,"TABLE",{});var s=c(b);m=r(s,"TR",{});var o=c(m);y=r(o,"TH",{});var h=c(y);v=n(h,"Date"),h.forEach(i),x=d(o),E=r(o,"TH",{});var u=c(E);T=n(u,"Name"),u.forEach(i),w=d(o),N=r(o,"TH",{});var f=c(N);k=n(f,"Quantity"),f.forEach(i),o.forEach(i),S=d(s);for(let t=0;t<A.length;t+=1)A[t].l(s);s.forEach(i),this.h()},h(){h(e,"class","text-yellow-300 bold text-2xl md:text-3xl text-center")},m(t,l){u(t,e,l),f(e,a),u(t,p,l),u(t,b,l),f(b,m),f(m,y),f(y,v),f(m,x),f(m,E),f(E,T),f(m,w),f(m,N),f(N,k),f(b,S);for(let t=0;t<A.length;t+=1)A[t].m(b,null)},p(t,e){if(4096&e){let a;for(I=t[12](),a=0;a<I.length;a+=1){const l=H(t,I,a);A[a]?A[a].p(l,e):(A[a]=M(l),A[a].c(),A[a].m(b,null))}for(;a<A.length;a+=1)A[a].d(1);A.length=I.length}},d(t){t&&i(e),t&&i(p),t&&i(b),g(A,t)}}}function U(t){let e,a,p=(g=t[20].time,new Date(parseInt(g)).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})+"");var g;let m,y,v,x,E,T,w,N,k=t[20].name+"",S=(t[20].quantity||"")+"";return{c(){e=l("tr"),a=l("td"),m=s(p),y=o(),v=l("td"),x=s(k),E=o(),T=l("td"),w=s(S),N=o(),this.h()},l(t){e=r(t,"TR",{});var l=c(e);a=r(l,"TD",{class:!0});var s=c(a);m=n(s,p),s.forEach(i),y=d(l),v=r(l,"TD",{});var o=c(v);x=n(o,k),o.forEach(i),E=d(l),T=r(l,"TD",{});var h=c(T);w=n(h,S),h.forEach(i),N=d(l),l.forEach(i),this.h()},h(){h(a,"class","text-sm")},m(t,l){u(t,e,l),f(e,a),f(a,m),f(e,y),f(e,v),f(v,x),f(e,E),f(e,T),f(T,w),f(e,N)},p:b,d(t){t&&i(e)}}}function M(t){let e,a,b,m,y,v=t[6][0]+"",x=t[6][1],E=[];for(let e=0;e<x.length;e+=1)E[e]=U($(t,x,e));return{c(){e=l("tr"),a=l("th"),b=s(v),m=o();for(let t=0;t<E.length;t+=1)E[t].c();y=p(),this.h()},l(t){e=r(t,"TR",{});var l=c(e);a=r(l,"TH",{class:!0,colspan:!0});var s=c(a);b=n(s,v),s.forEach(i),l.forEach(i),m=d(t);for(let e=0;e<E.length;e+=1)E[e].l(t);y=p(),this.h()},h(){h(a,"class","text-left"),h(a,"colspan","3")},m(t,l){u(t,e,l),f(e,a),f(a,b),u(t,m,l);for(let e=0;e<E.length;e+=1)E[e].m(t,l);u(t,y,l)},p(t,e){if(4096&e){let a;for(x=t[6][1],a=0;a<x.length;a+=1){const l=$(t,x,a);E[a]?E[a].p(l,e):(E[a]=U(l),E[a].c(),E[a].m(y.parentNode,y))}for(;a<E.length;a+=1)E[a].d(1);E.length=x.length}},d(t){t&&i(e),t&&i(m),g(E,t),t&&i(y)}}}function F(t){let e,a;return e=new D({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),e.$on("closeModal",t[8]),{c(){m(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){v(e,t,l),a=!0},p(t,a){const l={};8388620&a&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){a||(x(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){T(e,t)}}}function j(t){let e,a,p,b,g,m,y,v,x,E,T,w,S,I,B,D;return{c(){e=l("div"),a=l("label"),p=s("DATE\n\t\t\t\t"),b=l("input"),g=o(),m=l("label"),y=s("TIME\n\t\t\t\t"),v=l("input"),x=o(),E=l("button"),T=s("SUBMIT"),w=o(),S=l("button"),I=s("ABORT"),this.h()},l(t){e=r(t,"DIV",{class:!0});var l=c(e);a=r(l,"LABEL",{class:!0});var s=c(a);p=n(s,"DATE\n\t\t\t\t"),b=r(s,"INPUT",{class:!0,type:!0}),s.forEach(i),g=d(l),m=r(l,"LABEL",{class:!0});var o=c(m);y=n(o,"TIME\n\t\t\t\t"),v=r(o,"INPUT",{class:!0,type:!0}),o.forEach(i),x=d(l),E=r(l,"BUTTON",{class:!0});var h=c(E);T=n(h,"SUBMIT"),h.forEach(i),w=d(l),S=r(l,"BUTTON",{class:!0});var u=c(S);I=n(u,"ABORT"),u.forEach(i),l.forEach(i),this.h()},h(){h(b,"class","block bg-gray-900 pl-1"),h(b,"type","date"),h(a,"class","block p-1 mb-1"),h(v,"class","block bg-gray-900 pl-1"),h(v,"type","time"),h(m,"class","block p-1 mb-1"),h(E,"class","block w-full mb-2 p-2 border-double border-8 border-green-700 rounded-lg font-bold text-xl"),h(S,"class","block w-full mb-2 p-2 border-double border-8 border-red-700 rounded-lg font-bold text-xl"),h(e,"class","w-10/12 shadow-lg p-4 bg-gray-800")},m(l,s){u(l,e,s),f(e,a),f(a,p),f(a,b),N(b,t[2]),f(e,g),f(e,m),f(m,y),f(m,v),N(v,t[3]),f(e,x),f(e,E),f(E,T),f(e,w),f(e,S),f(S,I),B||(D=[k(b,"input",t[15]),k(v,"input",t[16]),k(E,"click",t[9]),k(S,"click",t[8])],B=!0)},p(t,e){4&e&&N(b,t[2]),8&e&&N(v,t[3])},d(t){t&&i(e),B=!1,A(D)}}}function R(t){let e,a,b,g,m,y,v,T,D,$,H,U,M,j,R,P,q,Q,J,V,z,C,G,K,W,X,Y,Z,_,tt,et,at,lt=Object.values(t[5]).length,st=lt&&L(t),ot=t[0]&&O(t),rt=t[1]&&F(t);return{c(){e=o(),a=l("h1"),b=s("Food / Drug "),g=l("br"),m=s("Log"),y=o(),v=l("form"),T=l("label"),D=l("span"),$=s("Food name"),H=o(),U=l("input"),M=o(),j=l("label"),R=l("span"),P=s("Quantity"),q=o(),Q=l("input"),J=o(),V=l("div"),z=l("button"),C=s("Add"),G=o(),K=l("button"),W=s("Manual Add"),X=o(),st&&st.c(),Y=o(),ot&&ot.c(),Z=o(),rt&&rt.c(),_=p(),this.h()},l(t){w('[data-svelte="svelte-1po7aon"]',document.head).forEach(i),e=d(t),a=r(t,"H1",{class:!0});var l=c(a);b=n(l,"Food / Drug "),g=r(l,"BR",{}),m=n(l,"Log"),l.forEach(i),y=d(t),v=r(t,"FORM",{class:!0});var s=c(v);T=r(s,"LABEL",{class:!0});var o=c(T);D=r(o,"SPAN",{class:!0});var h=c(D);$=n(h,"Food name"),h.forEach(i),H=d(o),U=r(o,"INPUT",{class:!0}),o.forEach(i),M=d(s),j=r(s,"LABEL",{class:!0});var u=c(j);R=r(u,"SPAN",{class:!0});var f=c(R);P=n(f,"Quantity"),f.forEach(i),q=d(u),Q=r(u,"INPUT",{class:!0}),u.forEach(i),J=d(s),V=r(s,"DIV",{class:!0});var x=c(V);z=r(x,"BUTTON",{class:!0});var E=c(z);C=n(E,"Add"),E.forEach(i),G=d(x),K=r(x,"BUTTON",{type:!0,class:!0});var N=c(K);W=n(N,"Manual Add"),N.forEach(i),x.forEach(i),s.forEach(i),X=d(t),st&&st.l(t),Y=d(t),ot&&ot.l(t),Z=d(t),rt&&rt.l(t),_=p(),this.h()},h(){document.title="Food Log",h(a,"class","mb-4 text-yellow-400 bold text-3xl md:text-4xl text-center leading-tight"),h(D,"class","text-xl"),h(U,"class","shadow-sm bg-gray-900 border-2 rounded border-yellow-300"),h(T,"class","space-y-1 block text-center"),h(R,"class","text-xl"),h(Q,"class","w-10 ml-2 px-1 shadow-sm bg-gray-900 border-2 rounded border-yellow-300"),h(j,"class","space-y-1 block text-center"),h(z,"class","rounded-md block border-black border py-2 px-4 text-white bg-gray-700"),h(K,"type","button"),h(K,"class","rounded-md block border-black border py-2 px-4 text-white bg-gray-700"),h(V,"class","pt-1 flex justify-evenly"),h(v,"class","space-y-2 border border-gray-700 py-2")},m(l,s){u(l,e,s),u(l,a,s),f(a,b),f(a,g),f(a,m),u(l,y,s),u(l,v,s),f(v,T),f(T,D),f(D,$),f(T,H),f(T,U),N(U,t[6]),f(v,M),f(v,j),f(j,R),f(R,P),f(j,q),f(j,Q),N(Q,t[4]),f(v,J),f(v,V),f(V,z),f(z,C),f(V,G),f(V,K),f(K,W),u(l,X,s),st&&st.m(l,s),u(l,Y,s),ot&&ot.m(l,s),u(l,Z,s),rt&&rt.m(l,s),u(l,_,s),tt=!0,et||(at=[k(U,"input",t[13]),k(Q,"input",t[14]),k(K,"click",t[7]),k(v,"submit",S(t[11]))],et=!0)},p(t,[e]){64&e&&U.value!==t[6]&&N(U,t[6]),16&e&&Q.value!==t[4]&&N(Q,t[4]),32&e&&(lt=Object.values(t[5]).length),lt?st?st.p(t,e):(st=L(t),st.c(),st.m(Y.parentNode,Y)):st&&(st.d(1),st=null),t[0]?ot?ot.p(t,e):(ot=O(t),ot.c(),ot.m(Z.parentNode,Z)):ot&&(ot.d(1),ot=null),t[1]?rt?(rt.p(t,e),2&e&&x(rt,1)):(rt=F(t),rt.c(),x(rt,1),rt.m(_.parentNode,_)):rt&&(B(),E(rt,1,1,(()=>{rt=null})),I())},i(t){tt||(x(rt),tt=!0)},o(t){E(rt),tt=!1},d(t){t&&i(e),t&&i(a),t&&i(y),t&&i(v),t&&i(X),st&&st.d(t),t&&i(Y),ot&&ot.d(t),t&&i(Z),rt&&rt.d(t),t&&i(_),et=!1,A(at)}}}function P(t,e,a){let l,s,o,r,c,n=!1,i=[];return i=localStorage.foodHistory?JSON.parse(localStorage.foodHistory):[],[n,l,s,o,c,i,r,function(){a(1,l=!0)},function(){a(1,l=!1)},function(){const t=parseInt(s),e=parseInt(s.slice(5,7))-1,n=parseInt(s.slice(8,11)),d=parseInt(o),h=parseInt(o.slice(3,5)),u=new Date(t,e,n,d,h).getTime();i.push({time:u,name:r,quantity:c}),localStorage.foodHistory=JSON.stringify(i),a(6,r=""),a(4,c=""),a(1,l=!1)},function(){a(0,n=!n)},function(){i.push({time:(new Date).getTime(),name:r,quantity:c}),localStorage.foodHistory=JSON.stringify(i),a(6,r=""),a(4,c="")},function(){let t={};return i.forEach((e=>{const a=(l=e.time,new Date(parseInt(l)).toLocaleDateString("en-US"));var l;t[a]?t[a].push(e):t[a]=[e]})),Object.entries(t).reverse()},function(){r=this.value,a(6,r)},function(){c=this.value,a(4,c)},function(){s=this.value,a(2,s)},function(){o=this.value,a(3,o)}]}export default class extends t{constructor(t){super(),e(this,t,P,R,a,{})}}