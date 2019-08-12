<template>
    <div>
        <router-button to="atividades/adicionar">Nova Atividade</router-button>
        <h2>Listagem de atividades</h2>
        <p>Cada atividade deverá ter: editar, concluir e excluir</p>
        <p>Paginar atividades de 10 em 10</p>
        <p>Buscar por range de data</p>

        <styled-button @click="updateTable">Atualizar Tabela</styled-button>
        <activities-table :activities="activitiesList"></activities-table>

        <!-- <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
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
            activitiesList: null
        }
    },
    methods: {
        updateTable() {
            this.$http.get('activities')
                .then(res => {
                    console.log(res);
                    console.log(res.body.data);
                    this.activitiesList = res.body.data;
                })
                .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>
</style>
