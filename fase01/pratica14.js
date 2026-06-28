const trabalhadores = [
    {nome:"Carlos Eduardo", idade: 85},
    {nome:"Levi Sena", idade: 54},
    {nome:"Samuel William", idade: 36},
    {nome:"Matheus Veras", idade: 72},
]


for (let counter = 0; counter < trabalhadores.length; counter++) {

    let cidadao = (trabalhadores[counter])
        let anosdecontribuicao = (cidadao.idade -18)
        console.log(`O cidadão ${cidadao.nome} ${cidadao.idade >= 45 && anosdecontribuicao >= 32 ? 'pode se aposentar!' : 'não pode se aposentar!'}`)

}

