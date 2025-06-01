import{a as q,S as P,i}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const M="50611483-a84caa89bfe2ebe23d067e8bc",$="https://pixabay.com/api/",l=new URLSearchParams({key:M,q:null,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),m=async(t,r)=>{l.set("q",t),l.set("page",r);const{data:s}=await q($+"?"+l);return s},O=new P(".gallery-item a");function h(t){const r=t.map(({webformatURL:s,largeImageURL:c,tags:e,likes:o,views:n,comments:v,downloads:R})=>`<li class="gallery-item">
    <a href="${c}"><img src="${s}" alt="${e}"/> 
    <ul>
      <li>
        <p>Likes<span>${o}</span></p>
      </li>
      <li>
        <p>Views<span>${n}</span></p>
      </li>
      <li>
        <p>Comments<span>${v}</span></p>
      </li>
      <li>
        <p>Downloads<span>${R}</span></p>
      </li>
    </ul>
    </a>
    
    
    </li>`).join("");p.insertAdjacentHTML("beforeend",r),O.refresh()}function B(){p.innerHTML=""}function g(){b.classList.remove("is-hidden")}function y(){b.classList.add("is-hidden")}function E(){f.classList.remove("is-hidden")}function L(){f.classList.add("is-hidden")}const p=document.querySelector(".gallery"),b=document.querySelector(".loader"),f=document.querySelector(".load-more");let a=1,u="",d;const w=document.querySelector(".form");w.addEventListener("submit",N);f.addEventListener("click",A);async function N(t){t.preventDefault();try{const r=t.currentTarget.elements.search.value.trim();if(r===""){i.warning({message:"WARNING",position:"topRight"});return}a=1,u=r,g(),B(),L();const s=await m(u,a);if(s.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits),w.reset(),s.totalHits>15?E():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d=p.firstElementChild,S(d)}catch(r){i.error({message:r.message,position:"topRight"})}finally{y()}}async function A(){try{a+=1,g();const t=await m(u,a);h(t.hits),S(d),Math.ceil(t.totalHits/15)===a&&(L(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){i.error({message:t.message,position:"topRight"})}finally{y()}}function S(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
