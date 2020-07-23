import axios from 'axios';

export default async () => {
    
    const res = await axios(`${process.env.REACT_APP_FLICKER_API_ENDPOINT}?method=flickr.groups.browse&api_key=${process.env.REACT_APP_FLICKER_API_KEY}&format=json&nojsoncallback=1`);


    return res.data;
}