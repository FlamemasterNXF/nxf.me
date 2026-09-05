/*
    link: {
        name: string
        desc: string
        link: normalizeLink(name) | string
        linkSrc: linkSrc.default | linkSrc
        lowercaseLink: false | bool
        isMain: false | bool
*/

const linkSrc = Object.freeze({
    nxf: "nxf.me/",
    githubRepo: "github.com/FlamemasterNXF/",
    aca: "github.com/Acamaeda/",
    default: "flamemasternxf.github.io/"
})

const linkData = [
    {
        name: "Ordinal Pringles",
        desc: "My largest and most popular project. Actively developed.",
        link: "ordinal-pringles",
        linkSrc: linkSrc.nxf,
        isMain: true
    },
    {
        name: "Bunny Game",
        desc: "A fun little game about collecting bunnies.",
        link: "bunny",
        linkSrc: linkSrc.nxf,
        isMain: true
    },
    {
        name: "The Modding Tree",
        desc: "A framework for making tree-based Incremental Games. Originally developed by Acamadea, updated and maintained by me",
        linkSrc: linkSrc.aca,
        isMain: true
    },
    {
        name: "Sea",
        desc: "A programming language made in C#, packaged with a custom REPL. Very simple but cool.",
        linkSrc: linkSrc.githubRepo,
        isMain: true
    },
    {
        name: "Flame Tree",
        desc: "An ok TMT mod. My first major project.",
        isMain: true
    },
    {
        name: "Circles",
        desc: "A true idle game. Grow your Circle to grow the higher Circles. Made before revolution idle.",
        isMain: true
    },
    {
        name: "UC",
        desc: "An incomplete Incremental Game with a reasonable amount of content. My second attempt at making a web game.",
        link: "UC-Remake"
    },
    {
        name: "The Grind: Director's Cut",
        desc: "A pretty good joke Incremental Game.",
        lowercaseLink: true
    },
    {
        name: "The Grind",
        desc: "A decent joke Incremental Game."
    },
    {
        name: "The Grind 2",
        desc: "A less decent joke Incremental Game.",
        lowercaseLink: true
    },
    {
        name: "PeanutScript",
        desc: "My first attempt at making a programming language. Made in Python and pretty buggy.",
        linkSrc: linkSrc.githubRepo
    },
    {
        name: "Conway's Game of Life",
        desc: "Conway's Game of Life, recreated by me. Was originally planned to be somehow Incremental.",
        link: "Conways-Incremental"
    },
    {
        name: "Synergism Plus",
        desc: "A tool for making Synergism Mods. Has not been updated for many years."
    },
    {
        name: "Alternation",
        desc: "A short and bad Incremental Game. My first attempt at making a web game."
    },
    {
        name: "Operation: Satisfaction",
        desc: "Essentially Circles without any circles. Not worth any time",
        link: "OperationSatisfaction"
    }
]

const linkColors = [
    "#f35e5e",
    "#dd9200",
    "#ddd900",
    "#20da45",
    "#6495edff",
    "#c691ff"
]

function getProjectName(i){
    return linkData[i].name
}
function getProjectDesc(i){
    return linkData[i].desc
}

function normalizeLink(text){
    return text.replaceAll(' ', '-').replaceAll(':', '').replaceAll('\'', '')
}
function getProjectLink(i){
    const src = linkData[i].linkSrc ?? linkSrc.default

    let link = linkData[i].link ?? normalizeLink(linkData[i].name)
    if(linkData[i].lowercaseLink) link = link.toLowerCase()

    return 'https://' + src + link
}

function showMoreProjects(){
    domCache("moreContainer").style.display = "flex"
    domCache("showMore").style.display = "none"
}

function initMainLinks(){
    const container = domCache('projectContainer')
    for (let i = 0; i < linkColors.length; i++) {
        let link = document.createElement('button');
        link.className = 'projButton'
        link.onclick = () => openLink(getProjectLink(i))
        link.innerHTML = `<span style="font-size: 1.2rem; color: ${linkColors[i]}">${getProjectName(i)}</span><br>${getProjectDesc(i)}`
        container.appendChild(link)
    }
}
function initAllLinks(){
    const container = domCache('moreContainer')
    for (let i = 0; i < linkData.length; i++) {
        if(linkData[i].isMain) continue;
        let link = document.createElement('button');
        link.className = 'projButton'
        link.onclick = () => openLink(getProjectLink(i))
        link.innerHTML = `<span style="font-size: 1.2rem; color: #dfdfdf">${getProjectName(i)}</span><br>${getProjectDesc(i)}`
        container.appendChild(link)
    }
    initMainLinks()
}

function openLink(link) {
    let win = window.open(link, '_blank');
    win.focus();
}

initAllLinks()