expect = require('chai').expect;
var assert = require('chai').assert;
const cart = require('./cartDiscount')


describe('Applicar desconto para o carrinho - Filme', () => {
    it('Deve aplicar desconto de 10% quando preço > R$100 e < R$200, ', () => {
        const carrinhoCompras = [1, 3];
        const valorComDesconto = cart.getValorTotalCarrinho(carrinhoCompras, 10);
        assert.equal(130.5, valorComDesconto);
    });
    it('Deve aplicar desconto de 20% quando preço > R$200 e < R$300, ', () => { 
        const carrinhoCompras = [4, 6];
        const valorComDesconto = cart.getValorTotalCarrinho(carrinhoCompras, 20);
        assert.equal(204, valorComDesconto);
    });
    it('Deve aplicar desconto de 25% quando preço > R$300 e < R$400, ', () => {
        const carrinhoCompras = [4, 5, 6];
        const valorComDesconto = cart.getValorTotalCarrinho(carrinhoCompras, 25);
        assert.equal(266.25, valorComDesconto);
    });

    it('Deve aplicar desconto de 30% quando preço > R$400, ', () => { 
        const carrinhoCompras = [3, 4, 5, 6];
        const valorComDesconto = cart.getValorTotalCarrinho(carrinhoCompras, 30);
        assert.equal(318.5, valorComDesconto);
    });

    it('Filme do gênero ação applica-se mais 5% de desconto ao carrinho, ', () => { 
        const carrinhoCompras = [3, 4];
        const valorComDesconto = cart.getValorTotalCarrinho(carrinhoCompras, 10+5);
        assert.equal(131.75, valorComDesconto);
    });
});