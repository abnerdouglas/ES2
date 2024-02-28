function calcularFrete() {
    let distancia = prompt('Qual a distancia em km do frete?')
    let pecas = prompt('Qual a quantidade de peças a ser transportado?')
    let regiao = prompt('Digite o número da região desejada para destino, 1 - Sul, 2 - Sudeste, 3 - Centro-Oeste')
    let taxa = prompt('Deseja rastreamento do produto? (sim/nao)')
    let frete

    if(regiao == 1 && pecas <= 1000){
        frete = pecas * 1.00
    } else if(regiao == 1 && pecas > 1000){
        desconto = (pecas - 1000) * 0.10
        frete = 1000 * 1.0 + desconto
    } else if(regiao == 2 && pecas <= 1000){
        frete = pecas * 1.2
    } else if(regiao == 2 && pecas > 1000){
        desconto = (pecas - 1000) * 0.12
        frete = 1000 * 1.2 + desconto
    } else if(regiao == 3 && pecas <= 1000){
        frete = pecas * 1.3
    } else if(regiao == 3 && pecas > 1000){
        desconto = (pecas - 1000) * 0.13
        frete = 1000 * 1.3 + desconto
    }

    var valorPorKm = (frete/distancia).toFixed(2)

    if (taxa == 'sim'){
        frete = (frete + 200).toFixed(2)
        document.write(`Taxa de rastreamento: R$200,00.`)
    }
    document.write(`Valor do frete pelas peças: R$${regiao}. Valor do frete por km R$${valorPorKm}. Valor Total R$${frete}.`)
    
}
calcularFrete()