'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsTo(models.Cliente, { foreignKey: 'clienteId', as: 'cliente' });
      Pedido.belongsToMany(models.Produto, {
        through: models.ProdutosPedidos, 
        foreignKey: 'pedidoId', 
        as: 'produtos' 
      });
    }
  }
  Pedido.init({
    data: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    observacao: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    clienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};