const { boot } = require('../database/ProductMigration');

module.exports = {
  startup: () => {
    try {
      boot();
    } catch (e) {
      console.error(`ERRO: ${e.toString()}`);
    }
  }
}
