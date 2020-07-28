import axios from 'axios';

let count = 0;

export default async (id, per_page = 20) => {
    try {
        count++;
        const res = await axios(`https://api.flickr.com/services/rest?method=flickr.groups.pools.getPhotos&api_key=ed50388361ea6fb946c2426aafe1c40b&group_id=${id}&page=${(count).toString()}&per_page=${per_page}&format=json&nojsoncallback=1`);
        return res.data;
    } catch (err) {
        console.error(err)
    }
}