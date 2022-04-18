'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rotas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      id_voluntario:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'usuarios', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id_familia:{
        type:Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull:false,
        references:{model:'familias', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
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