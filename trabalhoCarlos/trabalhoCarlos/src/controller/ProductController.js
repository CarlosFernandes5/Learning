var { produtos } = require('../database/ProductMigration');
var Product = require('../model/Product');

module.exports = {
  listar: (request, response) => {
    return response.json({ produtos });
  },

  mostrar: (request, response) => {
    let x = produtos.filter((produto) => produto.id == request.params.id);
    return response.json(x.length > 0 ? x : { message: "Não foi possível encontrar um produto com este ID" });
  },

  salvar: (request, response) => {
    const { id, nome, quantidade, valorUnitario, complemento } = request.body;

    if (id && nome && quantidade && valorUnitario && complemento) {
      if (produtos.filter((produto) => produto.id === id).length > 0) {
        return response.json({ message: "Já existe um produto com este ID" });
      }

      produtos.push(Product(request.body));
      return response.json({ message: "Produto cadastrado com sucesso" });
    }

    return response.json({ message: "Certifique-se de ter preenchido todos os campos corretamente: ID, Nome, Quantidade, Valor Unitário e Complemento" });
  },

  editar: (request, response) => {
    const { id, nome, quantidade, valorUnitario } = request.body;
    let produto = produtos.filter((produto) => produto.id == request.params.id)[0];

    if (!produto)
      return response.json({ message: "Não foi possível encontrar um produto com este ID" });

    if (produtos.filter((produto) => produto.id === id).length > 0)
      return response.json({ message: "Já existe um produto com este ID" });

    if (id && nome && quantidade && valorUnitario) {
      produto.id = id;
      produto.nome = nome;
      produto.quantidade = quantidade;
      produto.valorUnitario = valorUnitario;
      return response.json({ message: "Produto alterado com sucesso" });
    }

    return response.json({ message: "Certifique-se de ter preenchido todos os campos corretamente: ID: Number, Nome: String, Quantidade: Number e Valor Unitário: Number" });
  },

  deletar: (request, response) => {
    let produto = produtos.filter((produto) => produto.id == request.params.id)[0];

    if (!produto)
      return response.json({ message: "Não foi possível encontrar um produto com este ID" });

    produtos.splice(produtos.findIndex(p => p.id == request.params.id), 1);

    return response.json({ message: "Produto removido com sucesso", produto });
  },

  complemento: (request, response) => {
    const { complemento } = request.body;
    let produto = produtos.filter((produto) => produto.id == request.params.id)[0];

    if (!produto)
      return response.json({ message: "Não foi possível encontrar um produto com este ID" });

    if (complemento) {
      produto.complemento = complemento;
      return response.json({ message: "Complemento inserido com sucesso" });
    }

    return response.json({ message: "Certifique=se de ter preenchido o campo de complementos corretamente: Complementos: Array" });
  }
}
