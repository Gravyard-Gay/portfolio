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
        p = 'Cards animados que reagem com css e com o <a target="_blank" href="https://micku7zu.github.io/vanilla-tilt.js/">vanilla_tilt.js</a> que suportam todos os tipos de mídia, perfeitos para serem usados para expor informações de forma mais intereçante e criativa. <br> <a target="_blank" href="https://github.com/Gravyard-Gay/Transparent-Card">Repositório do Github</a>'
    }
    else if (this.id=='cssBtn') {
        title = 'Color Randomizer'
        p = 'Uma pequena experiência feita com javascript e css puro, onde é criada aleatoriamente uma cor e uma palheta de cores em código hex, tudo com apenas javascipt e variáveis do css.<br> <a target="_blank" href="https://github.com/Gravyard-Gay/Color-Randomizer">Repositório do Github</a>'
    }
    else if (this.id=='jsBtn') {
        title = 'Mais por vir...'
        p = 'Muitos outros projetos ainda vão ser acionados nessa página e muito provavelmente essa pagina também vai ser modificada, mas isso faz parte. Logo se você se interessou com qualquer projeto nesse site, sinta-se livre em me mandar um email e eu vou responder prontamente preparado para o trabalho!<br>gravyardgustavo@gmail.com'
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


let showMoreTab = document.querySelector("#more-projects")
let showMoreBtn = document.querySelector("#view-more-projects")

showMoreTab.style.display='none'

showMoreBtn.addEventListener('click', ()=>{
    if (showMoreTab.style.display == 'none') {
        showMoreTab.style.display='grid'
        showMoreTab.classList.add('animation')
        showMoreBtn.textContent="> Ver Menos <"
    } else {
        showMoreTab.style.display='none'
        showMoreTab.classList.remove('animation')
        showMoreBtn.textContent="> Ver Mais <"
    }
})

// Navbar smooth navigation

document.querySelectorAll('.nav-link-ancor[href^="#"]').forEach(ancor => {
    ancor.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
})