const cargosconcurso = [

{cargo: "TAE", salario: 2400},
{cargo: "Professor", salario: 3200},
{cargo: "Analista", salario: 5000},

]

concurseiro = cargosconcurso[0]

switch(concurseiro.cargo) {

case "TAE":
    concurseiro.salario = 3100
        console.log(`Parabéns concurseiro inscrito em`, concurseiro.cargo,`, teu salário vai ser R$`, concurseiro.salario)
            break;

case "Professor":
    concurseiro.salario = 5130
        console.log(`Parabéns concurseiro inscrito em`, concurseiro.cargo,`, teu salário vai ser R$`, concurseiro.salario)
            break;

case "Analista":
    concurseiro.salario = 16000
        console.log(`Parabéns concurseiro inscrito em`, concurseiro.cargo,`, teu salário vai ser R$`, concurseiro.salario)
            break;

}