const registroDeEstudos = [
    { dia: "Segunda", horas: 4, materia: "Matemática" },
    { dia: "Terça", horas: 2, materia: "Literatura" },
    { dia: "Quarta", horas: 3, materia: "Geografia" },
    { dia: "Quinta", horas: 1, materia: "Revisão Leve" }
];



const diasFocados = registroDeEstudos.filter(dias => dias.horas >= 3)

console.table(diasFocados);