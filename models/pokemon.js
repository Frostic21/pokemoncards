'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pokemon extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Pokemon.init({
        name: DataTypes.STRING,
        element:DataTypes.STRING,
        move1:DataTypes.STRING,
        move2:DataTypes.STRING,
        image:DataTypes.STRING,
        hp:DataTypes.INTEGER,
        res1:DataTypes.STRING,
        res2:DataTypes.STRING,
        res3:DataTypes.STRING,
        color1:DataTypes.STRING,
        damage1:DataTypes.INTEGER,
        damage2:DataTypes.INTEGER,
        attelement1:DataTypes.STRING,
        attelement2:DataTypes.STRING,
        attelement3:DataTypes.STRING,
        attelement4:DataTypes.STRING,
        rating1:DataTypes.INTEGER,
        rating2:DataTypes.INTEGER,
        rating3:DataTypes.INTEGER,
        rating4:DataTypes.INTEGER


    }, {
        sequelize,
        modelName: 'Pokemon',
        tableName: 'pokemons',
        timestamps: false
    });
    return Pokemon;
};