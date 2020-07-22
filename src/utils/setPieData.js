export default (items) => {
    const res = items.map(item => { 
        return { name: item.name, y: +item.pool_count }
     })

     return res;
}