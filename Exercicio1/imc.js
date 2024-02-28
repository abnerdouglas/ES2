function calculoImc() {
    var nome = prompt('Digite seu nome')
    var altura = prompt('Digite sua altura em cm')/100
    var peso = prompt('Digite seu peso em kg')
    let situacao
    
    let calculo = peso / (altura * altura)
    let imc = parseFloat(calculo)

    if (imc < 16){
    situacao = 'baixo peso muito grave'
    } else if (imc >= 16 && imc <= 16.99){
    situacao = 'baixo peso grave'
    } else if (imc >= 17 && imc <= 18.49 ){
    situacao = 'baixo peso'
    } else if (imc >- 18.50 && imc <= 24.99 ){
        situacao = 'peso normal'
    } else if (imc >= 25 && imc <= 29.99 ){
        situacao = 'sobrepeso'
    } else if (imc >= 30 && imc <= 34.99){
        situacao = 'obesidade grau I'
    } else if (imc >= 35 && imc <= 39.99){
        situacao = 'obesidade grau II'
    } else if (imc >= 40){
        situacao = 'obesidade grau III'
    }

    document.write(`O Sr(a) ${nome}, possui índice de massa corporal (IMC) igual a ${imc.toFixed(2)}, sendo classificada como ${situacao}.`)
}
calculoImc()