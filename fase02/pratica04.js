const candidatosTAE = [
    { nome: "Samuel", acertos: 42, totalQuestoes: 50 },
    { nome: "Carlos", acertos: 25, totalQuestoes: 50 },
    { nome: "Alice", acertos: 48, totalQuestoes: 50 },
    { nome: "Veras", acertos: 36, totalQuestoes: 50 }
];

function GerarAprovados(lista) {

    const Aprovados = lista.filter(Candidatos => (Candidatos.acertos/Candidatos.totalQuestoes) * 100 >= 75)

        return (Aprovados)
}

console.table(GerarAprovados(candidatosTAE))