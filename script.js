/*
Review:
Váriaveis - OK
For / if - OK 
Function - OK
 */

const btnTeste = document.getElementById("btn-teste")
const btnTeste2 = document.getElementById("btn-teste2")
const btnTeste3 = document.getElementById("btn-teste3")
const btnTeste4= document.getElementById("btn-teste4")
const btnTeste5 = document.getElementById("btn-teste5")

const reset = document.getElementById("reset")
const minhaDiv = document.getElementById("minha-div")
const titulo = document.getElementById("titulo")

/* const buttons = document.querySelectorAll("button") */

/* buttons.forEach(element => {
    element.addEventListener('click', ()=> {
        minhaDiv.style.backgroundColor = element.id
    })
}) */


//Ele precisa de dois parâmetros: A ação e a função para executar
    btnTeste.addEventListener('click',()=>{
        minhaDiv.style.backgroundColor = "blue"
        titulo.textContent = "Você clicou no Azul"
        titulo.style.color = "blue"
    })

    btnTeste2.addEventListener('click',()=>{
        minhaDiv.style.backgroundColor = "green"
        titulo.textContent = "Você clicou no Verde"
        titulo.style.color = "green"
    })

    btnTeste3.addEventListener('click',()=>{
        minhaDiv.style.backgroundColor = "yellow"
        titulo.textContent = "Você clicou no Amarelo"
        titulo.style.color = "yellow"
    })

    btnTeste4.addEventListener('click',()=>{
        minhaDiv.style.backgroundColor = "gray"
        titulo.textContent = "Você clicou no Cinza"
        titulo.style.color = "gray"
    })

    btnTeste5.addEventListener('click',()=>{
        minhaDiv.style.backgroundColor = "red"
        titulo.textContent = "Você clicou no Vermelho"
        titulo.style.color = "red"
    })

    reset.addEventListener('click',()=>{
        minhaDiv.style.backgroundColor = ""
        titulo.textContent = "Você reiniciou"
        titulo.style.color = ""
    })