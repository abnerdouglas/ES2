function redeHoteleira() {
    let horas = prompt('Digite o número de horas trabalhadas no mes')
    let categoria = prompt('Digite a sua categoria: G - Gerente ou F - Funcionário')
    let turno = prompt('Digite o seu turno de trabalho: M - Matutino, V - Vespertino, N - Noturno')
    let salarioMin = parseFloat(prompt('Digite o valor do salário mínimio na sua região'))

    let valorHora 
    let salarioFinal
    let auxilio = Number

    if(categoria == 'G'){
        if(turno == 'M' || turno == 'V'){
            valorHora = salarioMin * 0.04
        }
    } else if(categoria == 'F'){
        if(turno == 'N'){
            valorHora = salarioMin * 0.02
        } else {
            valorHora = salarioMin * 0.01
        }
    }

    var valorSalario = valorHora * horas

    if (valorSalario <= 800){
        auxilio = (valorSalario * 0.25) 
        salarioFinal = auxilio + valorSalario
    } else if (valorSalario > 800 && valorSalario <= 1200){
        auxilio = (valorSalario * 0.20) 
        salarioFinal = auxilio + valorSalario
    } else if (valorSalario > 1200){
        auxilio = (valorSalario * 0.15) 
        salarioFinal = auxilio + valorSalario
    }

    document.write(`Número de horas trabalhadas: R$${horas}. Valor da hora trabalhada: R$${valorHora}. Salário inicial: R$${valorSalario}. Auxílio alimentação: R$${auxilio.toFixed(2)}. Salário Final: R$${salarioFinal}.`)
}
redeHoteleira()