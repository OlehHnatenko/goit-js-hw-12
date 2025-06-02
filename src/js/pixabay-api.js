import axios  from "axios";

const API_KEY = "50611483-a84caa89bfe2ebe23d067e8bc";
const URL = "https://pixabay.com/api/";

const searchParam = new URLSearchParams(
    {key: API_KEY, q: "query", image_type: "photo", orientation: "horizontal", safesearch: true, page: 1, per_page: 15 });


export const getImagesByQuery = async (query, page) => {


    
    searchParam.set("q", query);
    searchParam.set("page", page);
    
    const {data} = await axios(URL + "?" + searchParam);
    return data;
    
}