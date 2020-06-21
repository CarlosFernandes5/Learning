module.exports = ({ id, nome, quantidade, valorUnt, complemento }) => {
  let tmp = {
    id,
    nome,
    quantidade,
    valorUnt,
    complemento: complemento || 'Não foi encontrado um complemento para este produto',
    precoTotal: quantidade * valorUnt,
    precoVenda: valorUnt * 1.20,
    situacao: quantidade >= 100 ? 'Excelente' : (quantidade >= 50 && quantidade < 100) ? 'Boa' : (quantidade < 50 && quantidade > 0) ? 'Estável' : 'Ruim'
  }
  tmp.lucro = parseFloat((tmp.precoVenda - tmp.valorUnt).toFixed(5));
  return tmp;
}
