const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Veiculo = require("../models/Veiculo");
const Locadora = require("../models/Locadora");

const connection = new Sequelize(dbConfig);

Locadora.init(connection);
Veiculo.init(connection);

Locadora.associate(connection.models);
Veiculo.associate(connection.models);

module.exports = connection;
