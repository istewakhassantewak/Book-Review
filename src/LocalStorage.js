function getLocalItem(type) {
    const item = localStorage.getItem(type)
    if (item) {
        return JSON.parse(item);
    }
    return []
}
function setLocalItem(type, id) {
    const item = getLocalItem(type)
    item.push(id)
    localStorage.setItem(type, JSON.stringify(item))
}
export { getLocalItem, setLocalItem }