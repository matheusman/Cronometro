let start = document.getElementById('start')
let restart = document.getElementById('restart')
let container = document.getElementById('funcionalidade')
let text = document.getElementById('cronometro')
let mm = -1
let sec = 0
let min = 0
let cont = 0
let result1 = 0
var interval
var timeOut

let cronometroText = () => {
    mm++
    if (mm === 100) {
        mm = 0
        sec++
    }
    if (sec === 60) {
        sec = 0
        min++
    }
    let milesimos = mm < 10 ? "0" + mm : mm
    let segundos = sec < 10 ? "0" + sec : sec
    let minutos = min < 10 ? "0" + min : min
    return text.innerHTML = `<h1>${minutos}:${segundos}</h1><h3>:${milesimos}</h3>`
}

const returnButton = (text, callback) => {
    const button = document.createElement('button')
    button.innerHTML = text
    callback(button)
    container.insertAdjacentElement('afterbegin', button)
    return button 
}

let contagem = () => {
    interval = setInterval(() => cronometroText(), 10)
    container.removeChild(restart)
    container.removeChild(start)
    returnButton("Stop", (button) => {
        button.addEventListener('click', clear)
        button.addEventListener('mouseover', () => {button.style = `background-color: #e79427; color: white;`})
        button.addEventListener('mouseout', () => {button.style = `background-color: orange;color: white;`})
    })
    returnButton("Voltar", (button) => {
        button.addEventListener('click', voltarTimer)
        button.style = `background-color: #000000; color: white;`
        button.addEventListener('mouseover', () => {button.style = `background-color: #444444; color: white;`})
        button.addEventListener('mouseout', () => {button.style = `background-color: #000000; color: white;`})
    })
}
 
let clear = () => {
    const botao = document.querySelectorAll('#funcionalidade button')
    container.removeChild(botao[0])
    container.removeChild(botao[1])
    container.insertAdjacentElement('afterbegin', start)
    container.insertAdjacentElement('afterbegin', restart)
    clearInterval(interval)
}

let voltarTimer = () => {
    cont++
    let milesimos = mm < 10 ? "0" + mm : mm
    let segundos = sec < 10 ? "0" + sec : sec
    let minutos = min < 10 ? "0" + min : min
    let voltar = document.getElementById('voltar')
    voltar.innerHTML = `<h3>Volta</h3><h3>Hora</h3><h3>Duração total</h3>`
    voltar.innerHTML += `<p>${cont}</p>`
    voltar.innerHTML += `<p>${minutos}:${segundos}:${milesimos}</p>`
    voltar.innerHTML += `<p>${minutos}:${segundos}:${milesimos}</p>`
}

let restartTimer = () => {
    mm = sec = min = 0
    cont = 0
    clearInterval(interval)
    text.innerHTML = `<h1>00:00</h1><h3>:00</h3>`
}

cronometroText(mm)
start.addEventListener('click', contagem)
restart.addEventListener('click', restartTimer)