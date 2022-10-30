const quantidadeVariaveis = parseInt(prompt(`Informe a quantidade de variáveis do problema`))
const quantidadeRestricoes = parseInt(prompt(`Informe a quantidade de restrições do problema`))

function criaCampos (){
    for (let i = 1; i <= quantidadeRestricoes; i++){
        for (let j = 1; j <= quantidadeVariaveis; j++){
            document.write(`<input type="text" id=${"id"+ i + j }> x${j}`)
        }
        document.write(`<input type="text" id=${"id"+ "sinal" + i} placeholder ="sinal">  <input type="text" id=${"id"+ "resultado" + i}> <br>`)
    }

}



criaCampos()
