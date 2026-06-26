const numeros = [

    {numero: 1},

    {numero: 2},

    {numero: 3},

    {numero: 4},

    {numero: 5},

]



for (let counter = 0; counter < numeros.length; counter++) {



    let numeroAtual = numeros[counter].numero;



    if (numeroAtual % 2 > 0) {



        console.log(`Número ${numeroAtual} é ímpar`)



}



else {



    console.log(`Número ${numeroAtual} é par`)



}

}

