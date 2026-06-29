const candidatostae =   [

    {nome: "Samuel", nota: 100},
    {nome: "Carlos", nota: 83},
    {nome: "Everton", nota: 67},
    {nome: "Veras", nota: 41},

]

for(let counter = 0; counter < candidatostae.length; counter++) {

    let callcandidatos = (candidatostae[counter])

if(callcandidatos.nota > 75) {

    console.log(`${callcandidatos.nome} aprovado`)
}

else{

    console.log(`${callcandidatos.nome} reprovado`)
}
}