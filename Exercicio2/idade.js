function faixaEtaria(){
    let nome = prompt('Informe o nome:')
    let idade = prompt('Informe a sua idade:')
    
    if (idade >= 0 && idade < 15){
        classificacao = 'criança'
    } else if (idade >= 15 && idade < 30){
        classificacao = 'jovem'
    } else if (idade >= 30 && idade < 60){
        classificacao = 'adulto'
    } else if (idade >= 60) {
        classificacao = 'idoso'
    }
    document.write(`O Sr(a) ${nome} é classificado como ${classificacao}.`)
}
faixaEtaria()