const armas = [
    { tipo: "Espada Longa", danoBase: 40 },
    { tipo: "Machado Duplo", danoBase: 55 },
    { tipo: "Arco Curto", danoBase: 25 }
];

function AfiarArma(armas) {

    const armaafiada = armas.map(afiar => {return { tipo: afiar.tipo, danoBase: afiar.danoBase + 15 }})

        return(armaafiada)

}

console.table(AfiarArma(armas))