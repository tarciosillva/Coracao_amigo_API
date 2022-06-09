'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entregas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      id_voluntario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        allowNull: false,
      },
      id_familia: {
        type: Sequelize.INTEGER,
        references: {
          model: 'familias',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      id_rota: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rotas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hora: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      entrega_descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('entregas');
  }
};