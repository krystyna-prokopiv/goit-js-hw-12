import axios from 'axios';

async function getImagesByQuery(query, page = 1) {
    const {data} = await
     axios('https://pixabay.com/api/', {
        params: {
            key: '55787535-61c82cd2300b887fd2ca60733',
             q: query,
             per_page: 15,
            page: page,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
     })
        
        return data
       
}

export default getImagesByQuery