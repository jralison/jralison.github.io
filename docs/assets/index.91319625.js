import{o as f,d as p,c as i,a as t,F as g,r as h,b as w,B as x,e as y,f as v,g as r,n as b,h as _,i as k,t as L,j}from"./vendor.91766c5e.js";const B=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}};B();var C="/me.jpg";const E="true".toLowerCase()==="true",d="G-HF5STCBD04",F=`https://www.googletagmanager.com/gtag/js?id=${d}`,I="gtagJsManager";function S(){if(!E||document.getElementById(I)!==null)return;window.dataLayer=window.dataLayer||[],window.gtag=()=>window.dataLayer.push(arguments),window.gtag("js",new Date),window.gtag("config",d);const o=document.createElement("script");o.async=!0,o.src=F,document.head.appendChild(o)}const u="matomoAnalytics",T="false".toLowerCase()==="true",m="matomo.jralison.com",G="1";function q(){f(()=>{if(!T||document.getElementById(u)!==null)return;window._paq=window._paq||[],window._paq.push(["trackPageView"],["enableLinkTracking"],["setTrackerUrl",`//${m}/matomo.php`],["setSiteId",G]);const o=document.createElement("script");o.id=u,o.type="text/javascript",o.async=!0,o.defer=!0,o.src=`//${m}/matomo.js`,document.body.appendChild(o)})}const D={class:"h-full flex flex-col gap-4 place-content-center space-y-8"},M=t("div",{class:"mx-auto"},[t("div",{class:"flex flex-col sm:flex-row gap-4 sm:space-x-4"},[t("div",{class:"flex-none self-center"},[t("img",{src:C,class:"object-cover rounded-full w-28 h-28 transform scale-110 sm:scale-100 sm:hover:scale-125 transition-transform ring ring-white ring-opacity-40",alt:"Uma foto minha com duas pulseiras na m\xE3o, me observando no reflexo do computador"})]),t("div",{class:"flex-1 self-center text-white antialiased"},[t("h1",{class:"text-5xl font-semibold leading-none"},"Jonathan Souza"),t("div",{class:"font-light mt-3"},[t("div",{class:"text-2xl leading-normal"},"Desenvolvedor Web Fullstack"),t("div",{class:"text-lg leading-none"},[t("a",{href:"https://qstione.com.br/?ref=jralison.com",class:"hover:underline focus:underline"},"@Plataforma Qstione")])])])])],-1),N={key:0,class:"mx-auto text-center text-white"},P=t("div",{class:"uppercase text-sm tracking-wide font-semibold"},"Me encontre nas redes sociais",-1),A={class:"h-min space-x-4 space-y-4"},O=["href"],U=p({setup(o){q(),S();const s=[{rotulo:"LinkedIn",url:"https://www.linkedin.com/in/jralison",corFundo:"hover:bg-blue-600 focus:bg-blue-600",corTexto:"hover:text-white focus:text-white",icone:x},{rotulo:"Github",url:"https://www.github.com/jralison",corFundo:"hover:bg-gray-600 focus:bg-gray-600",corTexto:"hover:text-white focus:text-white",icone:y},{rotulo:"GitLab",url:"https://www.gitlab.com/jralison",corFundo:"hover:bg-yellow-600 focus:bg-yellow-600",corTexto:"hover:text-white focus:text-white",icone:v}];return(l,a)=>(r(),i("div",D,[M,s.length>0?(r(),i("div",N,[P,t("div",A,[(r(),i(g,null,h(s,(e,n)=>t("a",{key:e.url,class:b(["socialLink",e.corTexto||"",e.corFundo||""]),href:e.url},[(r(),_(k(e.icone),{class:"w-6 h-6 -mt-0.5 mr-1 inline-block object-scale-down"})),t("span",null,L(e.rotulo),1)],10,O)),64))])])):w("",!0)]))}});const V=j(U);V.mount("#app");
