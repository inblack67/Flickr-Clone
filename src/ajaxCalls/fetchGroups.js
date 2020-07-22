import axios from 'axios';

export default async text => {
    
    const res = await axios(`${process.env.REACT_APP_FLICKER_API_ENDPOINT}?method=flickr.groups.search&api_key=${process.env.REACT_APP_FLICKER_API_KEY}&text=${text}&format=json&nojsoncallback=1`);

    return res.data.groups;
}