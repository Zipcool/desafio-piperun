<template>
    <styled-table :tableheaders="headers" :actions="3">
        <tr v-for="activity in activities" :key="activity.id">
            <td>{{ activity.title }}</td>
            <td>{{ activity.owner_id }}</td>
            <td>{{ getTypeName(activity.activity_type) }}</td>
            <td>{{ getStatusName(activity.status) }}</td>
            <td class="actions-row">
                <styled-table-button @click="closeActivity(activity)" v-if="activity.status == 0">Concluir</styled-table-button>
                <styled-table-button @click="editActivity(activity)">Editar</styled-table-button>
                <styled-table-button @click="removeActivity(activity)">Excluir</styled-table-button>
            </td>
        </tr>
    </styled-table>
</template>

<script>
import StyledTable from '../shared/table/StyledTable';
import StyledTableButton from '../shared/table/StyledTableButton';

export default {
    components: {
        StyledTable, StyledTableButton
    },
    props: {
        activities: Array
    }, 
    data() {
        return {
            headers: ["Título", "Responsável", "Tipo", "Status"]
        }
    },
    computed: {
        activityTypes() {
            return this.$store.getters.activityTypes;
        }
    },
    methods: {
        closeActivity(activity) {
            console.log("concluindo (fechando) atividade... " + activity.title);
        },
        editActivity(activity) {
            console.log("editando atividade..." + activity.title);
        },
        removeActivity(activity) {
            console.log("excluindo atividade..." + activity.title);
        },
        getTypeName(typeId) {
            return this.activityTypes.find(x => x.id == typeId).name;
        },
        getStatusName(statusId) {
            let statusName = statusId;

            if(statusId == 0) statusName = "Aberta";
            if(statusId == 2) statusName = "Fechada";

            return statusName;
        }
    }
}
</script>

<style scoped>
    .actions-row {
        text-align: center;
    }
</style>