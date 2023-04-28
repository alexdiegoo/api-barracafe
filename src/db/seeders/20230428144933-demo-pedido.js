'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedidos', [{
      data: new Date(),
      total: 21,
      observacao: 'Sem salada',
      status: false,
      clienteId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {});
  }
};
