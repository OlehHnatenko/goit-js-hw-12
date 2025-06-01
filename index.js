import{a as f,S as h,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="50611483-a84caa89bfe2ebe23d067e8bc",y="https://pixabay.com/api/",c=new URLSearchParams({key:g,q:null,image_type:"photo",orientation:"horizontal",safesearch:!0}),L=s=>(c.set("q",s),f(y+"?"+c).then(r=>r.data)),b=new h(".gallery-item a");function S(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:m,downloads:d})=>`<li class="gallery-item">
    <a href="${n}"><img src="${o}" alt="${e}"/> 
    <ul>
      <li>
        <p>Likes<span>${t}</span></p>
      </li>
      <li>
        <p>Views<span>${i}</span></p>
      </li>
      <li>
        <p>Comments<span>${m}</span></p>
      </li>
      <li>
        <p>Downloads<span>${d}</span></p>
      </li>
    </ul>
    </a>
    
    
    </li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){l.innerHTML=""}function P(){u.classList.remove("is-hidden")}function q(){u.classList.add("is-hidden")}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=document.querySelector(".form");p.addEventListener("submit",$);function $(s){s.preventDefault();const r=s.currentTarget.elements.search.value.trim();if(r===""){a.warning({message:"WARNING",position:"topRight"});return}P(),w(),L(r).then(o=>{if(o.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(o.hits),p.reset()}).catch(o=>a.error({message:o.message,position:"topRight"})).finally(()=>q())}
//# sourceMappingURL=index.js.map
