// This code is so old, but it works I guess :p
const DOMCache = new Map()
const domCache = (id) => {
    const cachedEl = DOMCache.get(id)
    if (cachedEl) return cachedEl
    const el = document.getElementById(id)
    if(el===null) throw `Element ${id} is null.`
    DOMCache.set(id, el)
    return el
}