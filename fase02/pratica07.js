const rotinaSemanal = [
    { dia: "Segunda", horas: 3, materia: "Matemática" },
    { dia: "Terça", horas: 2, materia: "Geografia" },
    { dia: "Quarta", horas: 4, materia: "Literatura" }
];

function diadeentrega (entrega) {

     entrega.forEach(dia =>

    console.log(`Entrega da atividade de ${dia.materia} na ${dia.dia}`)

)

}

console.log(diadeentrega(rotinaSemanal))