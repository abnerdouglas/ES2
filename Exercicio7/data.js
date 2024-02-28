function dataPorExtenso(){
    let data = prompt('Digite uma data no formato dd/mm/aaaa')
    let dataFormatada = data.split('/')
    var dia = dataFormatada[0]
    var mes = dataFormatada[1]
    var ano = dataFormatada[2]

    const meses =  {
        '01' : 'janeiro',
        '02' : 'fevereiro',
        '03' : 'março',
        '04' : 'abril',
        '05' : 'maio',
        '06' : 'junho',
        '07' : 'julho',
        '08' : 'agosto',
        '09' : 'setembro',
        '10' : 'outubro',
        '11' : 'novembro',
        '12' : 'dezembro'
    }
    function obterNomesMeses(mes){
        return meses[mes]
    }
    document.write(`${dia} de ${obterNomesMeses(mes)} de ${ano}.`)
}
dataPorExtenso()