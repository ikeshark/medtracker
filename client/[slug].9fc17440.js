import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,c,b as l,f as u,g as h,h as f,j as m,k as p,l as d,n as j}from"./client.c33ab951.js";function v(t){let s,a,v,g,b,x,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),g=o(y),b=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),v=l(t,"H1",{});var s=u(v);g=h(s,y),s.forEach(r),b=c(t),x=l(t,"DIV",{class:!0}),u(x).forEach(r),this.h()},h(){f(x,"class","content svelte-utjyme")},m(t,s){m(t,a,s),m(t,v,s),p(v,g),m(t,b,s),m(t,x,s),x.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&d(g,y),1&a&&E!==(E=t[0].html+"")&&(x.innerHTML=E)},i:j,o:j,d(t){t&&r(a),t&&r(v),t&&r(b),t&&r(x)}}}async function g({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function b(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,b,v,a,{post:0})}}export{g as preload};
