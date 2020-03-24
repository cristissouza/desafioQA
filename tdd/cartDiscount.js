class CartDiscountCalculation{
    constructor(){
    }

     getValorTotalCarrinho = (carrinhoCompras, valorDesconto) => {
        const filmesDisponiveis = [
          { id: 1, nome: 'Senhor dos Anéis', genero: 'fantasia', valor: 45 },
          { id: 2, nome: 'As branquelas', genero: 'comédia', valor: 55 },
          { id: 3, nome: 'Velozes e furiosos 7', genero: 'ação', valor: 100 },
          { id: 4, nome: 'Velozes e furiosos 6', genero: 'ação', valor: 55 },
          { id: 5, nome: 'The Scapegoat', genero: 'drama', valor: 100 },
          { id: 6, nome: 'Meu malvado Favorito', genero: 'animação', valor: 200 }
        ];
    
        const itemsComprados = carrinhoCompras.map((itemCompra) => filmesDisponiveis.find((filme) => filme.id === itemCompra))
        const somatoriaCarrinhoCompras = itemsComprados.reduce((accumulator, currentValue) => currentValue.valor + accumulator, 0);
        const totalComDesconto = somatoriaCarrinhoCompras * (1 - (valorDesconto / 100));
        return totalComDesconto;
      }
}
module.exports = new CartDiscountCalculation();

