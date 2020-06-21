const Product = require('../model/Product');

var produtos = [];

const boot = () => {
  produtos.push(Product({
    id: 0,
    nome: 'Produto A',
    quantidade: parseInt(Math.random() * 10),
    valorUnitario: parseFloat(Math.random() * 10).toFixed(5),
  }));
}

module.exports = {
  produtos,
  boot
}
