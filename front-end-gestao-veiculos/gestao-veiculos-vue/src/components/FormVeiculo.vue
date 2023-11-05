<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-6 mb-3">
          <label class="form-label">Nome</label>

          <select class="form-select mb-3" v-model="veiculoForm.id_locadora" required>
            <template v-if="locadoras.length">
              <option selected disabled>Selecione um locadora ...</option>
              <option v-for="locadora in locadoras" :value="locadora.id" :key="locadora.id">
                {{ locadora.nome }}
              </option>
            </template>
          </select>

          <label class="form-label">Marca</label>
          <input type="text" class="form-control mb-3" v-model="veiculoForm.marca" placeholder="Ex: Fiat" required />

          <label class="form-label">Modelo</label>
          <input type="text" class="form-control mb-3" v-model="veiculoForm.modelo" placeholder="Ex: Mobi" required />

          <label class="form-label">Ano</label>
          <input type="number" class="form-control mb-3" v-model="veiculoForm.ano" placeholder="Ex: 2023" required />

          <label class="form-label">Motor</label>
          <input type="text" class="form-control mb-3" v-model="veiculoForm.motor" placeholder="Ex: 1.0" required />

          <label class="form-label">Câmbio</label>
          <input type="text" class="form-control mb-3" v-model="veiculoForm.cambio" placeholder="Ex: Manual" required />
          <label class="form-label">Portas</label>
          <input type="number" class="form-control mb-3" v-model="veiculoForm.portas" placeholder="Ex: 4" required />

          <input type="checkbox" class="form-check-input mb-3" v-model="veiculoForm.ar_condicionado" />
          <label class="form-check-label ms-3 mb-3">Ar condicionado</label>

          <div class="d-flex justify-content-between">
            <div>
              <button class="btn btn-primary mb-6" type="submit">
                Adicionar
              </button>
            </div>
            <div>
              <button @click.prevent="resetar" class="btn btn-secondary" type="button">
                Resetar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

import { obterLocadoras } from "../services/locadoraService";
import { adicionarVeiculo, editarVeiculo } from "@/services/veiculoService";

import { Locadora } from "../models/Locadora";

const veiculoForm = reactive<any>({
  id: "",
  modelo: "",
  marca: "",
  ano: "",
  motor: "",
  portas: "",
  cambio: "",
  ar_condicionado: false,
  dataCriacao: "",
  dataAtualizacao: "",
  id_locadora: "",
});

const emit = defineEmits(["veiculo"]);
const props = defineProps(["veiculoParaEditar"]);

const locadoras = ref<Locadora[]>([]);

onMounted(async () => {
  locadoras.value = await obterLocadoras();
});

watch(
  () => props.veiculoParaEditar,
  (newValue) => {
    if (newValue) {
      Object.assign(veiculoForm, newValue);
    }
  }
);

const onSubmit = async () => {
  if (veiculoForm.id) {
    await editarVeiculo(veiculoForm.id, veiculoForm);
    emit("veiculo");
  } else {
    await adicionarVeiculo(veiculoForm);
    emit("veiculo");
  }

  resetar();
};

const resetar = () => {
  for (const key in veiculoForm) {
    veiculoForm[key] = key == "ar_condicionado" ? false : "";
  }
};
</script>
