let tab = "bin"
function switchTab(t){
    if(t === tab) return
    domCache(tab).style.display = `none`
    domCache(t).style.display = `flex`
    tab = t
}