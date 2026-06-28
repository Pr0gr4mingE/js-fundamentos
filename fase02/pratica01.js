
function corrigirprova(acertos) {

    if (acertos >= 30) {

        return ("Status: Aprovado")

}

    else {

        return ("Status: Reprovado")

}

}

console.log(corrigirprova(35));
console.log(corrigirprova(20));