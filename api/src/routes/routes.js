const express = require("express");
const VeiculoController = require("../controllers/VeiculoController");
const LocadoraController = require("../controllers/LocadoraController");

const routes = express.Router();

routes.get("/veiculos", VeiculoController.obterTodosVeiculos);

routes.get("/veiculos/:id", VeiculoController.obterVeiculoPorId);

routes.post("/veiculos", VeiculoController.criarVeiculo);

routes.put("/veiculos/:id", VeiculoController.atualizarVeiculo);

routes.delete("/veiculos/:id", VeiculoController.deletarVeiculo);

routes.get("/locadoras", LocadoraController.obterTodasLocadoras);

routes.post("/locadoras", LocadoraController.criarLocadora);

module.exports = routes;
