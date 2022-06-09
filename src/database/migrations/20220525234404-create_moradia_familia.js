'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('moradia_familias', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      id_familia:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'familias', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      tipo_moradia: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      condicao_moradia: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      estrutura_moradia: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      qualidade_agua: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      qualidade_eletrica: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      foto: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('moradia_familias');
  }
};