import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { gallery, loader, loadMore } from "../main";

const modal = new SimpleLightbox('.gallery-item a');

export function createGallery (images) {
    const markup = images
    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
        `<li class="gallery-item">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"/> 
    <ul>
      <li>
        <p>Likes<span>${likes }</span></p>
      </li>
      <li>
        <p>Views<span>${views}</span></p>
      </li>
      <li>
        <p>Comments<span>${comments}</span></p>
      </li>
      <li>
        <p>Downloads<span>${downloads}</span></p>
      </li>
    </ul>
    </a>
    
    
    </li>`).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
    modal.refresh();
}



export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove("is-hidden");
}

export function hideLoader() {
    loader.classList.add("is-hidden");

    

}
export function showLoadMoreButton() {
  loadMore.classList.remove("is-hidden");

}

export function hideLoadMoreButton() {
  loadMore.classList.add("is-hidden");
}