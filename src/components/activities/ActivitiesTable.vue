<template>
    <styled-table :tableheaders="headers" :actions="3">
        <tr v-for="(activity, index) in activities" :key="index">
            <td>{{ activity.title }}</td>
            <td>{{ activity.description }}</td>
            <td class="center-text">{{ activity.owner_id }}</td>
            <td class="center-text">{{ getTypeName(activity.activity_type) }}</td>
            <td class="center-text">{{ getStatusName(activity.status) }}</td>
            <td class="center-text">{{ activity.start_at | formatDate }}</td>
            <td class="center-text">{{ activity.end_at | formatDate }}</td>
            <td class="center-text">
                <styled-table-button @click="closeActivity(activity, index)" v-if="activity.status == 0">Concluir</styled-table-button>
                <styled-table-button @click="editActivity(activity)">Editar</styled-table-button>
                <styled-table-button @click="removeActivity(activity, index)">Excluir</styled-table-button>
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
    data() {
        return {
            headers: ["Título", "Descrição", "Responsável", "Tipo", "Status", "Início", "Prazo"]
        }
    },
    computed: {
        activityTypes() {
            return this.$store.getters.activityTypes;
        },
        activities() {
            return this.$store.getters.activities;
        }
    },
    methods: {
        closeActivity(activity, index) {
            console.log('Concluindo atividade ' + activity.title + '...');

            this.$http.put('activities/' + activity.id, { status: 2 })
                .then(res => {
                    console.log(res)
                    this.activities[index].status = 2;
                })
                .catch(err => console.log(err));
        },
        editActivity(activity) {
            console.log('Editando atividade ' + activity.title + '...');
            this.$router.push('/atividades/editar/' + activity.id);
        },
        removeActivity(activity, index) {
            if (confirm('Confirmar exclusão da seguinte atividade?\n\n' + activity.title)) {
                console.log('Excluindo atividade ' + activity.title + '...');
                
                this.$http.delete('activities/' + activity.id)
                    .then(res => {
                        console.log(res);
                        this.$store.dispatch("repeatLastSearchActivities");
                    })
                    .catch(err => console.log(err));
            }
        },
        getTypeName(typeId) {
            return this.activityTypes.find(x => x.id == typeId).name;
        },
        getStatusName(statusId) {
            let statusName = statusId;

            if(statusId == 0) statusName = 'Aberta';
            if(statusId == 2) statusName = 'Fechada';

            return statusName;
        }
    }
}
</script>

<style scoped>
    .center-text {
        text-align: center;
    }
</style>