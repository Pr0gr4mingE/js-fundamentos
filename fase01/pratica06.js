let notadoestudante =  0

const notasdecorte = [
    {curso: "Ciência da computação", nota: 634},
    {curso: "Gastronomia", nota: 685},
    {curso: "Ciências Sociais", nota: 660},
    {curo: "Música", nota: 584},
    {curso: "Medicina", nota: 789},
]

if (notadoestudante >= 600 ) {

    ingresso = notasdecorte.filter( notadocurso => notadocurso.nota >= 500)
        console.log(`Cursos dispóniveis são:\n`, ingresso)
}




if (notadoestudante > 0 && notadoestudante < 600) {

   ingresso = notasdecorte.filter(notadocurso => notadocurso.nota < 600)
        console.log(`Cursos dispóniveis são:\n`,ingresso)

}

else {
    if(notadoestudante <= 0){
        console.log(`Boa sorte na próxima Piá!`)
}
}