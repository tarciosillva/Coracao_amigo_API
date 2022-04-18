'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('responsaveis_familiares', {
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
      nome: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      estado_civil: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      profissao: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      ocupacao: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      escolaridade: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      numero_roupa: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      numero_calcado: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('responsaveis_familiares');
  }
};