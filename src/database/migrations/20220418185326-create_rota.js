'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rotas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_voluntario:{
        type:Sequelize.INTEGER,
        references:{model:'usuarios', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        allowNull:false,
      },
      id_familia:{
        type: Sequelize.INTEGER,
        references:{model:'familias', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        allowNull:false,
      },
      nome_rota: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      status: {
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
    await queryInterface.dropTable('rotas');
  }
};