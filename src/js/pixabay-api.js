import axios from "axios";

function getImagesByQuery(query) {
    const API_address = "https://pixabay.com/api/";

    const API_key = "56834112-81b18363197e40e1492ee9283";

    const params = {
        key: API_key,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };


    return axios(API_address, { params: params }).then(response => response.data);
}

export { getImagesByQuery }

