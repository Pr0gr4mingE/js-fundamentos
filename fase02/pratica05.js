const obrasEnem = [
    { titulo: "Memórias Póstumas de Brás Cubas", escola: "Realismo" },
    { titulo: "O Cortiço", escola: "Naturalismo" },
    { titulo: "Macunaíma", escola: "Modernismo" },
    { titulo: "Quincas Borba", escola: "Realismo" }
];

function SepararRealismo(filterobras) {

const ObrasRealismo = filterobras.filter(obras => obras.escola == "Realismo")

    return(ObrasRealismo)

}

console.table(SepararRealismo(obrasEnem))