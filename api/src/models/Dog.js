const { DataTypes } = require("sequelize");

//** Exportamos una funcion que define el modelo
//** Luego le injectamos la conexion a sequelize.

//** defino el modelo

module.exports = (sequelize) => {
  const Dog = sequelize.define("Dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    anos_vida: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Dog;
};
