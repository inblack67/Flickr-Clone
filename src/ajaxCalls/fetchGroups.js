import axios from 'axios';

export default async text => {
    try {
        const res = await axios(`https://api.flickr.com/services/rest?method=flickr.groups.search&api_key=ed50388361ea6fb946c2426aafe1c40b&text=${text}&format=json&nojsoncallback=1`);
        return res.data;
    } catch (err) {
        console.error(err)
    }
}