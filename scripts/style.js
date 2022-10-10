let bal = document.querySelector('#inter')
bal.addEventListener('click', () => {
    if (bal.classList.contains('extend')) {
        document.querySelector('.bal').classList.remove('extend')
        bal.classList.remove('extend')
    } else {
        document.querySelector('.bal').classList.add('extend')
        bal.classList.add('extend')
    }
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))


let htmlBtn = document.querySelector("#htmlBtn")
let cssBtn = document.querySelector("#cssBtn")
let jsBtn = document.querySelector("#jsBtn")
let pyBtn = document.querySelector("#pyBtn")
let txtH3 = document.querySelector('#hab-display-title')
let txtPa = document.querySelector("#hab-display-text")
let displayDiv = document.querySelector('.hab-display')


function changeDisplay() {
    //#region [ Text deciding ]
    if (this.id=='htmlBtn') {
        title = 'Cards Transparentes'
        p = 'Cards animados que reagem com css e com o <a target="_blank" href="https://micku7zu.github.io/vanilla-tilt.js/">vanilla_tilt.js</a> que suportão todos os tipos de media, perfeitos para serem usados para expor informações de forma mais intereçante e criativa. <br> <a target="_blank" href="https://github.com/Gravyard-Gay/Transparent-Card">Repositorio do Github</a>'
    }
    else if (this.id=='cssBtn') {
        title = 'Color Randomizer'
        p = 'Uma pequena experiencia feita com javascript e css puro, onde é criada aleatóriamente uma cor e uma palheta de cores em codigo hex, tudo com apenas javascipt e variaveis do css.<br> <a target="_blank" href="https://github.com/Gravyard-Gay/Color-Randomizer">Repositorio do Github</a>'
    }
    else if (this.id=='jsBtn') {
        title = 'Mais por vir...'
        p = 'Muitos outros projetos ainda vão ser adcionados nessa pagina e muito provavelmente essa pagina tambem vai ser modificada, mas isso faz parte. Logo se você se interesou com qualquer projeto nesse site, sinta-se livre em me mandar um email e eu vou responder prontamente preparado para o trabalho!<br><b>gravyardgustavo@gmail.com</b>'
    }
    else if (this.id=='pyBtn') {
        title = '( Python )'
        p = ''
    }
    //#endregion
    displayDiv.classList.remove('show')
    setTimeout(() => {
        txtH3.textContent = title
        txtPa.innerHTML = p
    }, 600)
    setTimeout(() => {displayDiv.classList.add('show')}, 600)
}

htmlBtn.addEventListener('click', changeDisplay)
cssBtn.addEventListener('click', changeDisplay)
jsBtn.addEventListener('click', changeDisplay)
pyBtn.addEventListener('click', changeDisplay)


let navbarWrapper = document.querySelector('.header-navbar')

setTimeout(()=>{
    navbarWrapper.style.opacity=1
}, 2000)


document.querySelector('.butao').addEventListener('click', () => {
    let r = document.querySelector(':root')
    
    function randomInt(range = 10) {
        let num = Math.floor(Math.random() * range)
        return num
    }

    function colorSelect() {
        let color = '#' + randomInt() + randomInt() + randomInt()
        return color
    }
    
    let col1 = colorSelect()
    let col2 = colorSelect()
    
    r.style.setProperty('--highlight-col', col1)
    r.style.setProperty('--text-col-secn', col2)
})
