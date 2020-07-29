import axios from 'axios';

export default async text => {
    try {
        const res = await axios(`${process.env.REACT_APP_FLICKR_PROXY}?method=flickr.groups.search&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&text=${text}&format=json&nojsoncallback=1`);
        return res.data;
    } catch (err) {
        console.error(err)
    }
}