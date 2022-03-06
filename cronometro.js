let thousandth = 0
let seconds = 0
let minutes = 0

let voltarMinutes = 0
let voltarSeconds = 0
let voltarthousandth = 0

let cont = 0
var myinterval;

const myClearInterval = () => clearInterval(myinterval)

const interval = () => myinterval = setInterval(() => {

    thousandth++
    if (thousandth === 60) {
        seconds++
        thousandth = 0   
    }
    else if (seconds === 60) {
        minutes++
        seconds = 0
    } else if (minutes === 24) {
        minutes = 0
    }

    voltarthousandth++
    if (voltarthousandth === 60) {
        voltarSeconds++
        voltarthousandth = 0
    } 
    else if (voltarSeconds === 60) {
        voltarMinutes++
        voltarSeconds = 0
    } else if (voltarMinutes === 60) {
        voltarMinutes = 0
    }

    const divs = `<h3>${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${thousandth.toString().padStart(2, '0')}</h3>`
    const divsVolt =  `<h3>${voltarMinutes.toString().padStart(2, '0')}:${voltarSeconds.toString().padStart(2, '0')}:${voltarthousandth.toString().padStart(2, '0')}</h3>`
    document.getElementById('timer').innerHTML = divs
    document.getElementById('number').innerHTML = cont + 1
    document.getElementById('hora').innerHTML = divsVolt
    document.getElementById('number-fixed').innerHTML = divs
}, 10)

const Voltarinterval = () => myinterval = setInterval(() => {
    
    const divs = `<h3>${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${thousandth.toString().padStart(2, '0')}</h3>`

}, 10)

function startCronometro() {
    myClearInterval()
    interval()
    document.getElementById('start').style.display = 'none'
    document.getElementById('restart').style.display = 'none'
    document.getElementById('mark').style.display = 'block'
    document.getElementById('stop').style.display = 'block'
}

function restartCronometro () {
    myClearInterval()
    document.getElementById('timer').innerHTML = `<h3>00:00:00</h3>`
    document.getElementById('voltar').innerHTML = ''
    thousandth = 0
    seconds = 0
    minutes = 0
    voltarMinutes = 0
    voltarSeconds = 0
    voltarthousandth = 0
}

function stopCronometro () {
    myClearInterval()
    document.getElementById('start').style.display = 'block'
    document.getElementById('restart').style.display = 'block'
    document.getElementById('mark').style.display = 'none'
    document.getElementById('stop').style.display = 'none'
}

function voltarCronometro () {
    cont++
    const voltar = document.getElementById('voltar')
    const timer = document.getElementById('timer')
    const hora = document.getElementById('hora')
    voltar.innerHTML += `<div class="voltarTimerId"><div class="number">${cont}</div><div>${hora.innerHTML}</div><div>${timer.innerHTML}</div></div>`
    voltarMinutes = 0
    voltarSeconds = 0
    voltarthousandth = 0
}

document.getElementById('start').addEventListener('click', startCronometro)
document.getElementById('restart').addEventListener('click', restartCronometro)
document.getElementById('stop').addEventListener('click', stopCronometro)
document.getElementById('mark').addEventListener('click', voltarCronometro)
//adiconar o click
//colocar todos os elementos de tempo em um let
//adicionar um setInterval e colocar para funcionar dentro do html