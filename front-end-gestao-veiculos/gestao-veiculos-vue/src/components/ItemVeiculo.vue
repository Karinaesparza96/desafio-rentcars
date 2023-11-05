<template>
        <tr class="text-center">
          <th scope="row">{{ id }}</th>
          <td>{{ props.veiculo.locadora.nome }}</td>
          <td>{{ props.veiculo.modelo }}</td>
          <td>{{  props.veiculo.marca }}</td>
          <td>{{ props.veiculo.ano }}</td>
          <td>{{ props.veiculo.motor }}</td>
          <td>{{ props.veiculo.cambio }}</td>
          <td>{{ props.veiculo.portas }}</td>
          <td><input type="checkbox" v-model="props.veiculo.ar_condicionado" disabled></td>
          <td>{{ formattedCreateAt }}</td>
          <td>{{ formattedUpdatedAt }}</td>
          <td>
            <div class="d-flex justify-content-around">
              <div>
                 <button @click.prevent="editar" class="btn btn-primary" title="editar veículo">Editar</button>
              </div> 
               <div>
                 <button @click.prevent="excluir" class="btn btn-danger ms-2" title="excluir veículo">Excluir</button>
               </div> 
            </div>
          </td>
        </tr>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import dayjs from 'dayjs';

const props = defineProps(['veiculo'])
const emits = defineEmits(['editar', 'excluir'])

const editar = () => {
  emits('editar', props.veiculo);
}

const excluir = () => {
  emits('excluir', props.veiculo);
}

const id = computed(() => {
  return [...props.veiculo.id].slice(0, 5).join('');
})

const formattedCreateAt = computed(() => formatDate(props.veiculo.createdAt));
const formattedUpdatedAt = computed(() => formatDate(props.veiculo.updatedAt));

const formatDate = (date: any) => {
  return date && dayjs(date).isValid()
    ? dayjs(date).format('DD/MM/YYYY, HH:mm:ss')
    : '';
};

</script>