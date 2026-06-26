const resultadosSimulado = [
    { materia: "Hardware", acertos: 22 },
    { materia: "Software", acertos: 14 },
    { materia: "Redes", acertos: 28 },
    { materia: "Segurança", acertos: 10 },
]


for (let counter = 0; counter < resultadosSimulado.length; counter++) {

    if(resultadosSimulado[counter].acertos >= 15) {

        let resultadofinal = (resultadosSimulado[counter].materia)
            console.log(`Aluno aprovado em : ${resultadofinal}`)
    }

    else{

        console.log(`Aluno reprovado em : ${resultadosSimulado[counter].materia}`)
    }


}