let themeBtn = document.querySelector('#themes-button')
let themeTab = document.querySelector('.theme-tab')

let themes = [
    {
        bg1:    '#2b282f',
        bg2:    '#1b191d',
        bgNav:  '#212121',
        hoNav:  '#303138',
        main:   '#ff32a1',
        scnd:   '#32dceb', 
        text:   '#fff',
        id: 0
    },
    {
        bg1:    '#ccc',
        bg2:    '#aaa',
        bgNav:  '#eee',
        hoNav:  '#fff',
        main:   '#b5285e',
        scnd:   '#1e2cc9',
        text:   '#0b0b0b',
        id: 1
    },
    {
        bg1:    '#1f0f2f',
        bg2:    '#18121c',
        bgNav:  '#201f3f',
        hoNav:  '#18142e',
        main:   '#a0f',
        scnd:   '#2f5', //Em preto fica maravilhoso
        text:   '#fff',
        id: 2
    }
]


themeBtn.addEventListener('click', a=>{
    if (themeBtn.classList.contains('opened')) {
        themeBtn.classList.remove('opened')
    } else {
        themeBtn.classList.add('opened')
    }
})

let dark = document.querySelector('#theme-dark'),
    light = document.querySelector('#theme-ligth'),
    purple = document.querySelector('#theme-purple');
;


dark.addEventListener('click', i=>{
    updateTheme(themes[0])
    localStorage.setItem('theme index', 0)
})
light.addEventListener('click', i=>{
    updateTheme(themes[1])
    localStorage.setItem('theme index', 1)
})
purple.addEventListener('click', i=>{
    updateTheme(themes[2])
    localStorage.setItem('theme index', 2)
})

function updateTheme(theme) {
    let r = document.querySelector(':root')
    r.style.setProperty('--bg-col-main',     theme.bg1)
    r.style.setProperty('--bg-col-secn',     theme.bg2)
    r.style.setProperty('--nav-bg-col',      theme.bgNav)
    r.style.setProperty('--nav-hover-col',   theme.hoNav)
    r.style.setProperty('--highlight-col',   theme.main)
    r.style.setProperty('--text-col-secn',   theme.scnd)
    r.style.setProperty('--text-col-main',   theme.text)
    
}

// get saved theme
let cTheme = localStorage.getItem('theme index')
if (cTheme==null) {cTheme = localStorage.setItem('theme index', 0)}
updateTheme(themes[cTheme])