'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      id_familia:{
        type:Sequelize.INTEGER,
        references:{model:'familias', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id_usuario:{
        type:Sequelize.INTEGER,
        references:{model:'usuarios', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      municipio:{
        type:Sequelize.STRING,
        allowNull:false
      },
      bairro:{
        type:Sequelize.STRING,
        allowNull:false
      },
      rua:{
        type:Sequelize.STRING,
        allowNull:false
      },
      numero:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      geolocalizacao:{
        type:Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enderecos')
  }
};