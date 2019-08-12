<template>
    <div>
        <router-button to="/atividades">Voltar</router-button>
        <h2>{{ title }}</h2>

        <form class="activity-form" @submit.prevent="onSubmit">

            <label for="title">Título:</label>
            <input type="text" name="title" required>

            <label for="user">Responsável:</label>
            <input type="text" name="user" required>

            <label for="type">Tipo:</label>
            <select id="activity-type" v-model="activityType" required>
                <option v-for="type in activityTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
            </select>

            <label for="status">Status:</label>
            <select id="status" v-model="status" disabled required>
                <option value="0" selected="selected">Aberta</option>
                <option value="2">Fechada</option>
            </select>

            <styled-submit-button>{{ submitText }}</styled-submit-button>
        </form>
    </div>
</template>

<script>
import RouterButton from '../shared/buttons/RouterButton';
import StyledSubmitButton from '../shared/buttons/StyledSubmitButton';

export default {
    components: {
        RouterButton, StyledSubmitButton
    },
    data() {
        return {
            title: 'Nova Atividade',
            activityType: 29512,
            status: 0,
            submitText: 'Cadastrar',

            // Variáveis de edição:
            editMode: false,
            activityId: null,
            
        }
    },
    mounted() {
        console.log('ActivitiesAdd mounted chamado.');
        if(this.$route.params.id) { // Se recebeu uma id por parâmetro na rota, habilita o modo edição
            this.activityId = this.$route.params.id;
            this.enableEditMode();
        }
    },
    computed: {
        activityTypes() {
            return this.$store.getters.activityTypes;
        }
    },
    methods: {
        onSubmit() {
            console.log('Submitando...');
            if(this.editMode) { // Edita

            } else { // Cadastra

            }
        },
        enableEditMode() {
            this.editMode = true;
            this.title = 'Edição de Atividade (ID: ' + this.activityId + ')';
            this.submitText = 'Editar';
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
}
.activity-form {
    text-align: center;
    /* margin: auto; */
}
.activity-form input,
.activity-form select {
    display: block;
    margin: 10px auto;
    width: 200px;
}
.cadastrar {
    margin-top: 30px;
}
</style>
