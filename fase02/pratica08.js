const guildaRPG = [
    { nome: "Arthur", classe: "Guerreiro", nivel: 15 },
    { nome: "Elara", classe: "Mago", nivel: 8 },
    { nome: "Thorn", classe: "Guerreiro", nivel: 5 },
    { nome: "Lyra", classe: "Ladino", nivel: 12 }
];


function PromoverVeteranos(promocao) {

    let promovidos = promocao.filter (sobreviventes => sobreviventes.classe === "Guerreiro" )


        promovidos = promovidos.map( sobreviventes => `O guerreiro ${sobreviventes.nome} foi promovido para a Guarda Real!`)

            return(promovidos)
}

    console.log(PromoverVeteranos(guildaRPG))