const estanteDeLivros = [
    { titulo: "Memórias Póstumas de Brás Cubas", anoPublicacao: 1881, paginas: 344 },
    { titulo: "Macunaíma", anoPublicacao: 1928, paginas: 288 },
    { titulo: "Dom Casmurro", anoPublicacao: 1899, paginas: 256 },
    { titulo: "Vidas Secas", anoPublicacao: 1938, paginas: 176 },
];

for (let counter = 0;counter < estanteDeLivros.length; counter++) {

    let livros = estanteDeLivros[counter]
    
    console.log(`TITULO: ${livros.titulo} TIPO DE LEITURA: ${livros.paginas < 300 && 2026 - livros.anoPublicacao > 100 ? 'Clássica, rápida' : 'Contemporânea, densa'}`)


}