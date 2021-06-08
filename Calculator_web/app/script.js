/*Funtions of the index*/
function somar(){
    let tn1 = document.getElementById('b11')
    let tn2 = document.querySelector('input#b12')
    let res = document.getElementById('r1')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 + n2

    res.innerHTML = `<h3>Resul:  ${s}</h3>`
}

function subtratir()
{    
    let tn1 = document.getElementById('b21')
    let tn2 = document.getElementById('b22')
    let res = document.getElementById('r2')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 - n2
    res.innerHTML = `<h3>Resul:  ${s}</h3>`
}

function multiplicar(){
    let tn1 = document.getElementById('b31')
    let tn2 = document.getElementById('b32')
    let res = document.getElementById('r3')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let m = n1 * n2

    res.innerHTML = `<h3>Resul:  ${m}</h3>`
}

function dividir(){
    let tn1 = document.getElementById('b41')
    let tn2 = document.getElementById('b42')
    let res = document.getElementById('r4')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let d = n1 / n2

    res.innerHTML = `<h3>Resul:  ${d}</h3>`
}

// bloco soma ----------------------
var b1 = window.document.getElementById("blocoSoma")
b1.addEventListener("mousemove", b1In)
b1.addEventListener("mouseout", b1Out)
//function b1In(){b1.style.backgroundColor = '#8625d2'}
//function b1Out(){b1.style.backgroundColor = '#18171e'}

//bordas
function b1In(){b1.style.borderColor = '#8625d2'}
function b1Out(){b1.style.borderColor = '#18171e'}

// bloco subtração ----------------------
var b2 = window.document.getElementById("blocoSubtracao")
b2.addEventListener("mousemove", b2In)
b2.addEventListener("mouseout", b2Out)
//function b2In(){b2.style.backgroundColor = '#11d15e'}
//function b2Out(){b2.style.backgroundColor = '#18171e'}

//bordas
function b2In(){b2.style.borderColor = '#11d15e'}
function b2Out(){b2.style.borderColor = '#18171e'}

// bloco multiplicação ----------------------
var b3 = window.document.getElementById("blocoMultiplicacao")
b3.addEventListener("mousemove", b3In)
b3.addEventListener("mouseout", b3Out)
//function b3In(){b3.style.backgroundColor = '#0060f1'}
//function b3Out(){b3.style.backgroundColor = '#18171e'}

//bordas
function b3In(){b3.style.borderColor = '#0060f1'}
function b3Out(){b3.style.borderColor = '#18171e'}

// bloco multiplicação ----------------------
var b4 = window.document.getElementById("blocoDividir")
b4.addEventListener("mousemove", b4In)
b4.addEventListener("mouseout", b4Out)
//function b4In(){b4.style.backgroundColor = '#ff8c00'}
//function b4Out(){b4.style.backgroundColor = '#18171e'}

//bordas
function b4In(){b4.style.borderColor = '#ff8c00'}
function b4Out(){b4.style.borderColor = '#18171e'}

