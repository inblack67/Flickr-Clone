import axios from 'axios';

export default async id => {
    try {
        const res = await axios(`https://api.flickr.com/services/rest?method=flickr.groups.getInfo&api_key=ed50388361ea6fb946c2426aafe1c40b&group_id=${id}&format=json&nojsoncallback=1`);

        return res.data;    
    } catch (err) {
        console.error(err);
    }
}