const tipoDeProblema = prompt(`Informe o tipo do problema (max ou min)`)
const quantidadeVariaveis = parseInt(prompt(`Informe a quantidade de variáveis do problema`))
const quantidadeRestricoes = parseInt(prompt(`Informe a quantidade de restrições do problema`))


function criaCampos (){
    tipoDeProblema == 'max' ? document.write(`<h2> Problema de Maximização </h2> <hr> <input type="text" id="#max" value="Max Z =" disabled>`) :  document.write(`<h2> Problema de Minimização </h2> <hr> <input type="text" id="#min" value="Min Z =" disabled>`)
    for (let i = 1; i <= quantidadeVariaveis; i++){
        document.write(`<input type="text" id=${"id"+ "funcaoObjetivoParametro" + i}> x${i}`)
    }
    document.write("<p>Sujeito a:</p>")
    for (let i = 1; i <= quantidadeRestricoes - 1; i++){
        for (let j = 1; j <= quantidadeVariaveis; j++){
            document.write(`<input type="text" id=${"id"+ i + j }> x${j}`)
        }
        document.write(`<input type="text" id=${"id"+ "sinal" + i} placeholder ="sinal">  <input type="text" id=${"id"+ "resultado" + i}> <br>`)
    }
    document.write("<p>")
    let contador = 0;
    for (let i = 1; i <= quantidadeVariaveis; i++){
        document.write(`x${i} `)
        contador = contador + 1
        contador == quantidadeVariaveis ? document.write(" ")  : document.write (",")
    }    
    document.write( ">= 0 </p>")

}

function criaVariaveisNaoBasicas(){
    let variaveisNaoBasicas = Array()
    for (let i = 1; i<= quantidadeVariaveis; i++){
        eval("var " + "x" + i + " = " + ` "x" +${i}`)
        eval(`variaveisNaoBasicas.push(x${i})`)
    }

    return variaveisNaoBasicas
}


function recuperarEquacoes(){ //colocar isso pra funcionar dinamicamente
    let equacoes = [quantidadeRestricoes]
    let variaveisNB = criaVariaveisNaoBasicas()

    for (let i = 0; i < quantidadeRestricoes - 1; i++){
        equacoes[i] = " "
    }

    for (let i = 0; i < quantidadeRestricoes - 1; i++){
        for (let j = 0; j < quantidadeVariaveis; j++){
            if(j < quantidadeRestricoes - 2){
                //Essa linha gigante é basicamente um operador ternário responsável pela formatação da equação
                document.getElementById("id"+(i+1)+(j+1)).value > 0 ? equacoes[i] = equacoes[i] + document.getElementById("id"+(i+1)+(j+1)).value +"*" + variaveisNB[j] + " + " : equacoes[i] = "-" + equacoes[i] + document.getElementById("id"+(i+1)+(j+1)).value +"*" + variaveisNB[j] + " - " 
            } else {
                document.getElementById("id"+(i+1)+(j+1)).value > 0 ? equacoes[i] = equacoes[i] + document.getElementById("id"+(i+1)+(j+1)).value + "*"+ variaveisNB[j] + " " : equacoes[i] = "-" + equacoes[i] + document.getElementById("id"+(i+1)+(j+1)).value + "*" + variaveisNB[j] + " " 
            }
        } equacoes[i] = equacoes[i] + document.getElementById("idsinal" + (i+1)).value + document.getElementById("idresultado" + (i+1)).value
    }

    console.table(equacoes)
}


criaCampos()
criaVariaveisNaoBasicas()
document.write('<button name="calcular" onClick="recuperarEquacoes()" >Calcular</button>')


