const notasCandidatos = [
    { nome: "Samuel", nota: 60 },
    { nome: "Alice", nota: 75 },
    { nome: "Veras", nota: 50 }
];

function bonusnota (bonus) {

    const aplicarbonus = bonus.map( alunos => {
       return {
        nome: alunos.nome,
        nota: alunos.nota + 10
       }
})

    return(aplicarbonus)
}

console.table(bonusnota(notasCandidatos))