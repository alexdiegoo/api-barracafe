'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [{
      nome: 'Rua da Ponte',
      imagem_link: 'img.exemplo.com',
      descricao: 'Um hamburguer tradicional',
      preco: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
