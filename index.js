import{a as u,S as f,i}from"./assets/vendor-BGqwtSVv.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(t){return u("https://pixabay.com/api/",{params:{key:"56834112-81b18363197e40e1492ee9283",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const l=document.querySelector(".gallery"),m=new f(".gallery a");function p(t){const a=t.map(s=>`
        <li class="cards">
        <a href='${s.largeImageURL}'>
        <img src='${s.webformatURL}' alt='${s.tags}'>
        </a>
        <ul class="image-info">
          <li class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${s.likes}</span>
          </li>

          <li class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${s.views}</span>
          </li>

          <li class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${s.comments}</span>
          </li>

          <li class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${s.downloads}</span>
          </li>
        </ul>
        </li>
        `).join("");l.insertAdjacentHTML("beforeend",a),m.refresh()}function g(){l.innerHTML=""}const c=document.querySelector(".loader");function h(){c.classList.add("showLoader")}function y(){c.classList.remove("showLoader")}const L=document.querySelector(".form");function b(t){t.preventDefault();const s=new FormData(t.currentTarget).get("search-text").trim();s!==""&&(g(),h(),d(s).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",class:"custom-error-toast"});return}p(o.hits)}).catch(o=>{i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight",class:"custom-error-toast"})}).finally(()=>y()))}L.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
