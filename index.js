import{a as q,S as v,i as l}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function g(o,t=1){const{data:a}=await q("https://pixabay.com/api/",{params:{key:"55787535-61c82cd2300b887fd2ca60733",q:o,per_page:15,page:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}});return a}let h=null;function y(o){const t=o.map(({webformatURL:i,largeImageURL:e,tags:r,likes:s,views:L,comments:w,downloads:S})=>`<li class='gallery-item'>
        <a  href="${e}">
        <img  src="${i}" alt="${r}"/></a>
        <ul class="gallery-text-list">
        <li class='gallery-item-text'><h2>Likes</h2>
        <p> ${s}</p></li>
        <li class='gallery-item-text'>
        <h2>Views</h2>
        <p>${L}</p></li>
        <li class='gallery-item-text'>
        <h2>Comments</h2>
        <p>${w}</p></li>
        <li class='gallery-item-text'>
        <h2>Downloads</h2>
        <p>${S}</p></li></ul>
            </li > `).join(""),a=document.querySelector(".gallery");a&&(a.insertAdjacentHTML("beforeend",t),h?h.refresh():h=new v(".gallery a",{captionsData:"alt",captionDelay:250}))}function x(){const o=document.querySelector(".gallery");o&&(o.innerHTML="")}const u=document.querySelector(".loader");function p(){u&&u.classList.add("visible")}function b(){u&&u.classList.remove("visible")}const d=document.querySelector(".button-load-more");function P(){d&&d.classList.remove("load-more-hidden")}function $(){d&&d.classList.add("load-more-hidden")}const M=document.querySelector(".form"),m=document.querySelector(".button-load-more");M.addEventListener("submit",R);m.addEventListener("click",B);let n=1,c="",f=0;const O=15;function R(o){if(o.preventDefault(),c=o.target.elements["search-text"].value.trim(),x(),!c){l.show({color:"red",position:"topRight",message:"Please enter your request!"});return}p(),g(c,n).then(({hits:t,totalHits:a})=>{if(t.length==0){l.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(t),f=Math.ceil(a/O),n<f&&P()}).catch(t=>{l.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{b(),o.target.reset()})}async function B(o){n++,m.disabled=!0;try{p();const t=await g(c,n);y(t.hits),n>=f&&($(),l.show({color:"blue",position:"topRight",message:" We're sorry, but you've reached the end of search results."}));const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i,behavior:"smooth"})}catch{l.show({color:"red",position:"topRight",message:"Sorry, there are no images."})}finally{b(),m.disabled=!1}}
//# sourceMappingURL=index.js.map
