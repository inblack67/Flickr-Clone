export default str => {
    let res = '';
    const wordsArray = str.split(' ');
    wordsArray.forEach(word => {
        res += word[0].toUpperCase() + word.slice(1, word.length) + ' ';
    })
    return res.trim();
}