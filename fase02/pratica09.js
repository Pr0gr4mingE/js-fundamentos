const inventarioMercador = [
    { item: "Poção de Vida", preco: 50, emEstoque: true },
    { item: "Espada Enferrujada", preco: 15, emEstoque: false },
    { item: "Escudo de Carvalho", preco: 30, emEstoque: true },
    { item: "Amuleto Mágico", preco: 100, emEstoque: false }
];

function AnunciarProdutos(produtos) {

    const ProdutosDisponiveis = produtos.filter(estoque => estoque.emEstoque === true).map(anuncio => `Temos ${anuncio.item} a venda por R$${anuncio.preco}`);

            return(ProdutosDisponiveis)

}

console.log(AnunciarProdutos(inventarioMercador))