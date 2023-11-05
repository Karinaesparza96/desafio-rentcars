<template>
    <Form 
        @veiculo="carregarVeiculos" 
        :veiculoParaEditar="veiculoSolicitadoParaEditar"
    />
    <TableVeiculo 
        @editar="notificarEditarVeiculo" 
        @excluir="excluir" 
        :veiculos="veiculos" 
        @atualizar="carregarVeiculos"
    /> 
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Form from '@/components/FormVeiculo.vue';
import TableVeiculo from '@/components/TableVeiculo.vue';
import { excluirVeiculo, obterVeiculos } from '@/services/veiculoService';

const veiculos = ref([]);
const veiculoSolicitadoParaEditar = ref(null);

const carregarVeiculos = async () => {
    veiculos.value = await obterVeiculos();
};

const notificarEditarVeiculo = (veiculo: any) => {
    veiculoSolicitadoParaEditar.value = veiculo
}
const excluir = (async (veiculo: any) => {
    await excluirVeiculo(veiculo.id)
    await carregarVeiculos();
})

onMounted(carregarVeiculos)

</script>
