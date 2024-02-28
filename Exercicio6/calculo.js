let n1 = parseFloat(prompt('Digite um número'))
let n2 = parseFloat(prompt('Digite outro número'))
var operacao = prompt('Escolha uma operação: soma/subtracao')

function calcular(n1, n2, operacao){
    if (operacao === 'soma'){
        return n1 + n2
    } else if (operacao === 'subtracao');{
        return n1 - n2
    } 
}

document.write(`\n\n A ${operacao} de ${n1} com ${n2} é igual a ${calcular(n1,n2,operacao)}` )