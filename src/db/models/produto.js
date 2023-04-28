'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto.belongsToMany(models.Pedido, {
        through: models.ProdutosPedidos,
        foreignKey: 'produtoId',
        as: 'pedidos'
      })
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    imagem_link: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};