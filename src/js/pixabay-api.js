import axios from 'axios';

async function getImagesByQuery(query) {
    return axios('https://pixabay.com/api/', {
        params: {
            key: '55787535-61c82cd2300b887fd2ca60733',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true'
        }
     })
         .then(response => {
        return response.data.hits
    })
       
}

export default getImagesByQuery