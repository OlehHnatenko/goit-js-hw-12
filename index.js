import{a as v,S as R,i}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const P="50611483-a84caa89bfe2ebe23d067e8bc",M="https://pixabay.com/api/",l=new URLSearchParams({key:P,q:"query",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),f=async(t,r)=>{l.set("q",t),l.set("page",r);const{data:s}=await v(M+"?"+l);return s},$=new R(".gallery-item a");function m(t){const r=t.map(({webformatURL:s,largeImageURL:c,tags:e,likes:o,views:n,comments:S,downloads:q})=>`<li class="gallery-item">
    <a href="${c}"><img src="${s}" alt="${e}"/> 
    <ul>
      <li>
        <p>Likes<span>${o}</span></p>
      </li>
      <li>
        <p>Views<span>${n}</span></p>
      </li>
      <li>
        <p>Comments<span>${S}</span></p>
      </li>
      <li>
        <p>Downloads<span>${q}</span></p>
      </li>
    </ul>
    </a>
    
    
    </li>`).join("");d.insertAdjacentHTML("beforeend",r),$.refresh()}function O(){d.innerHTML=""}function h(){L.classList.remove("is-hidden")}function g(){L.classList.add("is-hidden")}function B(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}const d=document.querySelector(".gallery"),L=document.querySelector(".loader"),p=document.querySelector(".load-more");let a=1,u="",b;const w=document.querySelector(".form");w.addEventListener("submit",E);p.addEventListener("click",N);async function E(t){t.preventDefault();try{const r=t.currentTarget.elements.search.value.trim();if(r===""){i.warning({message:"WARNING",position:"topRight"});return}a=1,u=r,h(),O(),y();const s=await f(u,a);if(s.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(s.hits),w.reset(),s.totalHits>15?B():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),b=d.firstElementChild}catch(r){i.error({message:r.message,position:"topRight"})}finally{g()}}async function N(){try{a+=1,h();const t=await f(u,a);m(t.hits),A(b),Math.ceil(t.totalHits/15)===a&&(y(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){i.error({message:t.message,position:"topRight"})}finally{g()}}function A(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
