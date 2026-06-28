const literatura = [
    { obra: "Memórias Póstumas", escola: "Realismo" },
    { obra: "Macunaíma", escola: "Modernismo" },
    { obra: "Iracema", escola: "Romantismo" },
    { obra: "Vidas Secas", escola: "Modernismo" }
];

const filterescola = literatura.filter(livro => livro.escola == "Modernismo")

console.table(filterescola);
