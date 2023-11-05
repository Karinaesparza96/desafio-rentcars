<template>
  <div class="container">
    <div>
      <h3 class="my-4">Lista Veiculos : </h3>
    </div>
    <table class="table table-striped table-bordered">
      <thead >
        <tr class="text-center">
          <th scope="col"># ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Modelo</th>
          <th scope="col">Marca</th>
          <th scope="col">Ano</th>
          <th scope="col">Motor</th>
          <th scope="col">Cambio</th>
          <th scope="col">Portas</th>
          <th scope="col" class="text-nowrap">Ar condicionado</th>
          <th scope="col" class="text-nowrap">Data criação</th>
          <th scope="col" class="text-nowrap">Data atualização</th>
          <th scope="col" class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <ItemVeiculo v-for="veiculo in props.veiculos" :veiculo="veiculo" :key="veiculo.id" @editar="onEdit" @excluir="onClose"/>
      </tbody>
    </table>
  </div>
  
</template>
<script setup lang="ts">
import ItemVeiculo from './ItemVeiculo.vue';

const props = defineProps(['veiculos'])
const emits = defineEmits(['editar', 'excluir'])


const onEdit = (item: any) => {
  emits('editar', item)
}
const onClose = (item: any) => {
  emits('excluir', item)
}

</script>