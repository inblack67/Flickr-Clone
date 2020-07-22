import axios from 'axios';

export default async id => {
    
    const res = await axios(`${process.env.REACT_APP_FLICKER_API_ENDPOINT}?method=flickr.groups.getInfo&api_key=${process.env.REACT_APP_FLICKER_API_KEY}&group_id=${id}&format=json&nojsoncallback=1`);

    return res.data.group;
}