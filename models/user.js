'use strict';
const {hash} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserBook, {foreignKey: "UserId", sourceKey: "id"})
      User.belongsToMany(models.Book, {through: models.UserBook})
    }
  };
  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : `First Name musn't be null`
        }
      }
    },
    last_name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : `Username musn't be null`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : `Password musn't be null`
        }
      }
    }
  }, {
    hooks : {
      beforeCreate(instance,option){
        if (instance.last_name === '' || instance.last_name === undefined) {
          instance.last_name = instance.first_name
        }
        let newPass = hash(instance.password)
        instance.password = newPass
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};