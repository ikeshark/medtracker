import{S as a,i as t,s as o,a as s,e,t as r,q as c,d as l,c as i,b as n,f as d,g as f,h,j as m,k as p,l as u,n as x}from"./client.93378492.js";import{f as y}from"./firebase.eefa67c6.js";function S(a){let t,o,y,S,E,b,g,k,v,H;return{c(){t=s(),o=e("h1"),y=r("Med"),S=e("br"),E=r("Tracker"),b=s(),g=e("button"),k=r("Export Data"),this.h()},l(a){c('[data-svelte="svelte-1cwatjh"]',document.head).forEach(l),t=i(a),o=n(a,"H1",{class:!0});var s=d(o);y=f(s,"Med"),S=n(s,"BR",{}),E=f(s,"Tracker"),s.forEach(l),b=i(a),g=n(a,"BUTTON",{class:!0});var e=d(g);k=f(e,"Export Data"),e.forEach(l),this.h()},h(){document.title="Symptom Tracker",h(o,"class","text-orange-400 text-6xl md:text-4xl leading-none"),h(g,"class","border-2 border-black p-2 text-md mt-12")},m(s,e){m(s,t,e),m(s,o,e),p(o,y),p(o,S),p(o,E),m(s,b,e),m(s,g,e),p(g,k),v||(H=u(g,"click",a[0]),v=!0)},p:x,i:x,o:x,d(a){a&&l(t),a&&l(o),a&&l(b),a&&l(g),v=!1,H()}}}function E(a){return[async function(){const a=await y();JSON.parse(localStorage.activityHistory).forEach((t=>{a.collection("activity").add(t)})),JSON.parse(localStorage.peeHistory).forEach((t=>{a.collection("urine").add(t)})),JSON.parse(localStorage.foodHistory).forEach((t=>{a.collection("food").add(t)})),JSON.parse(localStorage.symptomHistory).forEach((t=>{a.collection("symptom").add(t)}))}]}export default class extends a{constructor(a){super(),t(this,a,E,S,o,{})}}
