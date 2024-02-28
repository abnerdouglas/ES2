// os valores das notas nao foram informados, so i create them :)
function mediaPonderada() {
    let n1 = 8
    let n2 = 9
    let n3 = 9
    let p1 = 2
    let p2 = 5
    let p3 = 3

    m = ((p1 * n1) + (p2 * n2) + (p3 * n3))/(p1+p2+p3)

    if (m >= 9 && m < 10 ){
        c = 'A'
    } else if (m >= 8 && m < 9){
        c = 'B'
    } else if (m >= 7 && m < 8){
        c = 'C'
    } else if (m >= 6 && m < 7 ){
        c = 'D'
    } else if (m >= 5 && m < 6){
        c = 'E'
    } else if (m>= 0 && m < 5){
        c = 'F'
    }
    document.write(`A média ponderada do aluno é ${m} e sua classificação é ${c}.`)
}
mediaPonderada()