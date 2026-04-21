const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Produit = sequelize.define(
  "Produit",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NumProduit: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    Design: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    prix: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "Produit",
    timestamps: false,
  },
);

module.exports = Produit;
