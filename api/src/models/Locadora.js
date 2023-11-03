const { Model, DataTypes } = require("sequelize");

class Locadora extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        nome: {
          type: DataTypes.STRING(100),
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo nome Locadora não pode ser vazio",
            },
          },
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultvalue: null,
        },
      },
      {
        sequelize,
        tableName: "LOCADORA",
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Veiculo, {
      foreignKey: "id_locadora",
      as: "veiculos",
    });
  }
}
module.exports = Locadora;
