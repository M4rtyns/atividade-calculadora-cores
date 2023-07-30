const numeroum = document.querySelector('#nu1')
const numerodois = document.querySelector('#nu2')
const sinal1 = document.querySelector('#s1')
const sinal2 = document.querySelector('#s2')
const sinal3 = document.querySelector('#s3')
const sinal4 = document.querySelector('#s4')
const resultado = document.querySelector('#resultado')
const corpo = document.querySelector('#body')

function soma (){
	resultado.innerHTML = +numeroum.value + +numerodois.value
	sinal1.classList.add('azul')
	sinal2.classList.remove('vermelho')
	sinal3.classList.remove('verde')
	sinal4.classList.remove('rosa')
	corpo.classList.remove('vermelho')
	corpo.classList.remove('verde')
	corpo.classList.remove('rosa')
	corpo.classList.add('azul')
}

function subtrai (){
	resultado.innerHTML = +numeroum.value - +numerodois.value
	sinal2.classList.add('vermelho')
	sinal1.classList.remove('azul')
	sinal3.classList.remove('verde')
	sinal4.classList.remove('rosa')
	corpo.classList.remove('azul')
	corpo.classList.remove('verde')
	corpo.classList.remove('rosa')
	corpo.classList.add('vermelho')
}

function divide (){
	resultado.innerHTML = +numeroum.value / +numerodois.value
	sinal3.classList.add('verde')
	sinal2.classList.remove('vermelho')
	sinal1.classList.remove('azul')
	sinal4.classList.remove('rosa')
	corpo.classList.remove('vermelho')
	corpo.classList.remove('azul')
	corpo.classList.remove('rosa')
	corpo.classList.add('verde')
}

function multiplica (){
	resultado.innerHTML = +numeroum.value * +numerodois.value
	sinal4.classList.add('rosa')
	sinal2.classList.remove('vermelho')
	sinal3.classList.remove('verde')
	sinal1.classList.remove('azul')
	corpo.classList.remove('vermelho')
	corpo.classList.remove('verde')
	corpo.classList.remove('azul')
	corpo.classList.add('rosa')
}

sinal1.addEventListener('click',soma)
sinal2.addEventListener('click',subtrai)
sinal3.addEventListener('click',divide)
sinal4.addEventListener('click',multiplica)