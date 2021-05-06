'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: "Users"},
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      LibraryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {tableName: "Books"},
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      borrowDate: {
        type: Sequelize.DATE
      },
      returnBook: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserBooks');
  }
};