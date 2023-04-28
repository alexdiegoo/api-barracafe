'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProdutosPedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedidoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pedidos',
          key: 'id'
        }
      },
      produtoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Produtos',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProdutosPedidos');
  }
};