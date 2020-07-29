import axios from 'axios';

let count = 0;

export default async (id, per_page = 20) => {
    try {
        count++;
        const res = await axios(`${process.env.REACT_APP_FLICKR_PROXY}?method=flickr.groups.pools.getPhotos&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&group_id=${id}&page=${(count).toString()}&per_page=${per_page}&format=json&nojsoncallback=1`);
        return res.data;
    } catch (err) {
        console.error(err)
    }
}