var router = require('express').Router();
var ProductController = require('../controller/ProductController');

router.use((req, res, next) => {
  console.log('Controle de Estoque da Empresa ABC');
  next();
});

router.get('/produtos', (req, res) => {
  return ProductController.listar(req, res);
});

router.get('/produtos/:id', (req, res) => {
  return ProductController.mostrar(req, res);
});

router.post('/produtos', (req, res) => {
  return ProductController.salvar(req, res);
});

router.put('/produtos/:id', (req, res) => {
  return ProductController.editar(req, res);
})

router.delete('/produtos/:id', (req, res) => {
  return ProductController.deletar(req, res);
});

router.put('/produtos/:id/complemento', (req, res) => {
  return ProductController.complemento(req, res);
});

module.exports = router;
