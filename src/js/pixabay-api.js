import axios  from "axios";

const API_KEY = "50611483-a84caa89bfe2ebe23d067e8bc";
const URL = "https://pixabay.com/api/";

const searchParam = new URLSearchParams({key: API_KEY, q: null, image_type: "photo", orientation: "horizontal", safesearch: true });


export const getImagesByQuery = (query) => {


    
    searchParam.set("q", query);
    
    return axios(URL + "?" + searchParam)
    .then(response => response.data);
}