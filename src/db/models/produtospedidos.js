'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdutosPedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProdutosPedidos.belongsTo(models.Pedido, { foreignKey: 'pedidoId' });
      ProdutosPedidos.belongsTo(models.Produto, { foreignKey: 'produtoId' });
    }
  }
  ProdutosPedidos.init({
    pedidoId: DataTypes.INTEGER,
    produtoId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProdutosPedidos',
  });
  return ProdutosPedidos;
};