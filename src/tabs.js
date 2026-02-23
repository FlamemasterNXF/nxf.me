let tab = "root"
function switchTab(t){
    if(t === tab) return

    DOM(`header`).innerText = t === 'root' ? 'nxf.me' : `nxf.me/${t}`

    DOM(t).style.display = `flex`
    DOM(tab).style.display = `none`
    tab = t
}