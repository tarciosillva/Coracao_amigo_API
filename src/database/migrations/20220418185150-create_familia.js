'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('familias', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      id_usuario_criacao:{
        type:Sequelize.INTEGER,
        references:{model:'usuarios', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        allowNull:false
      },
      membros: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      renda_familiar: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      programas_governo: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('familias');
  }
};