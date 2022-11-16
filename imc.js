const calcular = document.getElementById('calcular-btn')

function imc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const campoTxt = document.getElementById('text-area')

    if(nome !== '' && altura !== '' && peso !== ''){
        const result = (peso / (altura * altura)).toFixed(2)

        if(result < 18.5){
            campoTxt.textContent =`${nome}, seu IMC é de ${result}, portanto seu peso está abaixo do ideal.`
        }else if(result > 18.5 && result < 24.9 ){
            campoTxt.textContent = `${nome}, seu IMC é de ${result}, portanto seu peso está dentro do ideal.`
        }else if(result > 25 && result < 29.9){
            campoTxt.textContent = `${nome}, seu IMC é de ${result}, portanto seu peso está levemente acima do ideal.`
        }else if(result > 30 && result < 34.9){
            campoTxt.textContent = `${nome}, seu IMC é de ${result}, portanto seu peso está acima do ideal. Obesidade grau I.`
        }else if(result > 35 && result < 39.9){
            campoTxt.textContent = `${nome}, seu IMC é de ${result}, portanto seu peso está muito acima do ideal. Obesidade grau II.`
        }else if(result > 40){
            campoTxt.textContent = `${nome}, seu IMC é de ${result}, portanto seu peso está muito acima do ideal. Obesidade grau III. Cuidado!!`
        }
    }else{
        campoTxt.textContent = "Preencha todos os campos!"
    }
}

calcular.addEventListener('click', imc)
