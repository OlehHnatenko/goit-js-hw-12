import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, hideLoadMoreButton, showLoader, showLoadMoreButton } from "./js/render-function";



export const gallery = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");
export const loadMore = document.querySelector(".load-more");

let currentPage = 1;
let query = "";
let firstCard;

const form = document.querySelector(".form");
form.addEventListener("submit", onSubmit);
loadMore.addEventListener("click", onLoadMore);



async function onSubmit(evt) {
    evt.preventDefault();

    try {
         const input = evt.currentTarget.elements.search.value.trim();
    if(input === "") {
        iziToast.warning({message: "WARNING", position: "topRight"});
        return;
        
    }
    currentPage = 1;
    query = input;
    showLoader();
    clearGallery();
    hideLoadMoreButton();

        
        const data = await getImagesByQuery(query, currentPage); 
        if(data.hits.length === 0) {
            iziToast.warning({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            });
            return;
        }
        createGallery(data.hits);
        form.reset();
        if(data.totalHits > 15) {
            showLoadMoreButton();
            

        }else{
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight"
            });
        }

        firstCard = gallery.firstElementChild;
        scrollSmooth(firstCard);

    
        
    } catch (error) {iziToast.error({
        message: error.message,
        position: "topRight"
    })
        
    } finally {hideLoader()}

   
    


}

async function onLoadMore() {
    try {
        currentPage += 1;
        showLoader();
        const data = await getImagesByQuery(query, currentPage);
        createGallery(data.hits);
        scrollSmooth(firstCard);

        if(Math.ceil(data.totalHits / 15) === currentPage) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight"
            });
            
        }

        
    } catch (error) {
        iziToast.error({
        message: error.message,
        position: "topRight"
    })
        
    } finally {hideLoader()}
    
}

function scrollSmooth(element) {
    const {height} = element.getBoundingClientRect();
    
    
    window.scrollBy({
  top: height * 2,
  
  behavior: "smooth",
});

}







