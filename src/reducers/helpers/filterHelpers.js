export const filterHelper = (state) => {
    const {items, filter} = state

    let sortedItems = [...items]
    for(let key in filter) {
        if(filter.isAll === true) return sortedItems
        if(key === "isAll") continue
        sortedItems = sortedItems.filter(item=>item[key] === filter[key])
    }
    return sortedItems
}