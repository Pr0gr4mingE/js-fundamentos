const jogadores = [
    { nick: "Fallen", patente: "Global", horas: 5000 },
    { nick: "NoobMaster", patente: "Prata", horas: 120 },
    { nick: "Coldzera", patente: "Global", horas: 4500 },
    { nick: "Tense", patente: "Ouro", horas: 800 }
];

function RecrutarProplayer(players){

    const findproplayer = players.filter(horasjogadas => horasjogadas.horas >= 1000 )

    return(findproplayer)

}

console.table(RecrutarProplayer(jogadores))