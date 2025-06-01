import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-function";



export const gallery = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");

const form = document.querySelector(".form");
form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    const input = evt.currentTarget.elements.search.value.trim();
    if(input === "") {
        iziToast.warning({message: "WARNING", position: "topRight"});
        return;
        
    }
    showLoader();
    clearGallery();
    getImagesByQuery(input).then(data => {
        if(data.hits.length === 0) {
            iziToast.warning({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            });
            return;
        }
        createGallery(data.hits);
        form.reset();

    }).catch(error => iziToast.error({
        message: error.message,
        position: "topRight"
    })). finally(() => hideLoader());


}






