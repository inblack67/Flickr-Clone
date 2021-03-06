import axios from 'axios';

export default async id => {
    try {
        const res = await axios(`${process.env.REACT_APP_FLICKR_PROXY}?method=flickr.groups.getInfo&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&group_id=${id}&format=json&nojsoncallback=1`);

        return res.data;    
    } catch (err) {
        console.error(err);
    }
}