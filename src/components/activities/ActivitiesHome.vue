<template>
    <div>
        <router-button to="atividades/adicionar">Nova Atividade</router-button>
        <h2>Listagem de atividades</h2>
        
        <div class="paginationInfo" v-if="pagination">
            <p class="left">Página {{ pagination.current_page }} de {{ pagination.total_pages }}</p>
            <p class="right">Exibindo {{ pagination.count }} de {{ pagination.total }} resultados</p>
        </div>
        <activities-table :activities="activitiesList"></activities-table>
        <div class="pagination">
            <styled-button @click="goToFirstPage()">Primeira</styled-button><styled-button @click="goToPreviousPage">Anterior</styled-button><styled-button @click="goToNextPage">Próxima</styled-button><styled-button @click="goToLastPage">Última</styled-button>    
        </div>
    </div>
</template>

<script>
import RouterButton from '../shared/buttons/RouterButton';
import StyledButton from '../shared/buttons/StyledButton';
import ActivitiesTable from './ActivitiesTable';

export default {
    components: {
        RouterButton, StyledButton,  ActivitiesTable
    },
    data() {
        return {
            activitiesList: null,
            elementsPerPage: 10
        }
    },
    computed: {
        pagination() {
            return this.$store.getters.pagination;
        }
    },
    created() {
        if(this.pagination) return;

        this.$store.dispatch('searchActivities', { 
            page: 1, 
            show: this.elementsPerPage
        });
    },
    methods: {
        goToFirstPage() {
            this.updateTable(1);
        },
        goToPreviousPage() {
            this.updateTable(this.pagination.current_page - 1);
        },
        goToNextPage() {
            this.updateTable(this.pagination.current_page + 1);
        },
        goToLastPage() {
            this.updateTable(this.pagination.total_pages);
        },
        updateTable(page) {
            if(page == this.pagination.current_page || 
               page < 1 || 
               page > this.pagination.total_pages) return;

            let now = new Date();

            this.$store.dispatch('searchActivities', { 
                page: page, 
                show: this.elementsPerPage
            });
        }
    }
}
</script>

<style scoped>
.pagination {
    /* margin: auto; */
    text-align: center;
}
.pagination a {
    display: inline-block;
    margin-right: 2px;
    margin-left: 2px;
}
.paginationInfo {
    width: 100%;
}
.paginationInfo p {
    display: inline-block;
    margin: 14px 0;
}
.paginationInfo .left {
    position: relative;
    left: 10px;
}
.paginationInfo .right {
    position: absolute;
    right: 10px;
}
</style>
