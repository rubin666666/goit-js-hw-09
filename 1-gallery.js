import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{S as l}from"./assets/vendor-D0gBiHs0.js";const a=[{preview:"/img/1.jpg",original:"/img/1full.jpg",description:"Image 1"},{preview:"/img/2.jpg",original:"/img/2full.jpg",description:"Image 2"},{preview:"/img/3.jpg",original:"/img/3full.jpg",description:"Image 3"},{preview:"/img/1-1.jpg",original:"/img/1-1full.jpg",description:"Image 4"},{preview:"/img/2-1.jpg",original:"/img/2-1full.jpg",description:"Image 5"},{preview:"/img/3-1.jpg",original:"/img/3-1full.jpg",description:"Image 6"},{preview:"/img/2-2.jpg",original:"/img/2-2full.jpg",description:"Image 7"},{preview:"/img/3-2.jpg",original:"/img/3-2full.jpg",description:"Image 8"},{preview:"/img/14.jpg",original:"/img/14full.jpg",description:"Image 9"}],p=document.querySelector(".gallery");p.innerHTML=a.map(({preview:g,original:i,description:e})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${g}" data-source="${i}" alt="${e}" />
      </a>
    </li>`).join("");new l(".gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:300,fadeSpeed:300});
//# sourceMappingURL=1-gallery.js.map
