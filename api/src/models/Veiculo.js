const { Model, DataTypes } = require("sequelize");

class Veiculo extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        modelo: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo Modelo não pode ser vazio",
            },
          },
        },
        marca: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo Marca não pode ser vazio",
            },
          },
        },
        ano: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo Ano não pode ser vazio",
            },
          },
        },
        motor: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo Motor não pode ser vazio",
            },
          },
        },
        portas: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo Portas não pode ser vazio",
            },
          },
        },
        cambio: {
          type: DataTypes.STRING(30),
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo Câmbio não pode ser vazio",
            },
          },
        },
        ar_condicionado: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo Ar condicionado não pode ser vazio",
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
        tableName: "VEICULO",
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Locadora, {
      foreignKey: "id_locadora",
      as: "locadora",
    });
  }
}
module.exports = Veiculo;
