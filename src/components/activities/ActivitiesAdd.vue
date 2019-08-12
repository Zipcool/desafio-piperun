<template>
    <div>
        <router-button to="/atividades">Voltar</router-button>
        <h2>{{ title }}</h2>

        <form class="activity-form" @submit.prevent="onSubmit">

            <label for="title">Título:</label>
            <input id="title" type="text" v-model="activity.title" required>

            <label for="description">Descrição:</label>
            <input id="description" type="text" v-model="activity.description">

            <label for="owner-id">Responsável:</label>
            <select id="owner-id" v-model="activity.owner_id" required>
                <option :value="currentUserInfo.id" selected="selected">{{ currentUserInfo.name }}</option>
            </select>

            <label for="activity-type">Tipo:</label>
            <select id="activity-type" v-model="activity.activity_type" required>
                <option v-for="type in activityTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
            </select>

            <label for="status">Status:</label>
            <select id="status" v-model="activity.status" disabled required>
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
            activity: {
                // Parâmetros do formulário:
                title: '',
                description: '',
                owner_id: 0,
                activity_type: 29512,
                status: 0,
                
                // Parâmetro calculado:
                start_at: null,
                end_at: null,
                
                // Parâmetros requeridos pela API:
                priority: 0,
                type: 0,
                account_id: 0
            },
            submitText: 'Adicionar',

            // Variáveis de edição:
            editMode: false
        }
    },
    mounted() {
        console.log('ActivitiesAdd mounted chamado.');
        if(this.$route.params.id) { // Se receber uma id por parâmetro na rota, habilita o modo edição
            this.enableEditMode(this.$route.params.id);
        } else {
            let userInfo = this.$store.getters.currentUserInfo;
            this.activity.owner_id = userInfo.id;
            this.activity.account_id = userInfo.account_id;
        }
    },
    computed: {
        activityTypes() {
            return this.$store.getters.activityTypes;
        },
        currentUserInfo() {
            return this.$store.getters.currentUserInfo;
        }
    },
    methods: {
        onSubmit() {
            if(this.editMode) {
                this.editActivity();
            } else {
                this.addActivity();
            }
        },
        editActivity() {
            console.log("Editando atividade...");
            
            this.$http.put('activities/' + this.activity.id, { 
                title: this.activity.title,
                description: this.activity.description,
                activity_type: this.activity.activity_type,
            })
                .then(res => {
                    console.log(res)
                    alert("Alterações salvas com sucesso!");
                    this.$router.push("/atividades");
                    this.$store.dispatch("repeatLastSearchActivities");
                })
                .catch(err => console.log(err));
        },
        addActivity() {
            console.log("Adicionando atividade...");

            let now = new Date();
            this.activity.start_at = now;
            this.activity.end_at = new Date(now.getTime() + 3600 * 1000); // Incrementa em uma hora
            
            this.$http.post('activities', this.activity)
                .then(res => {
                    alert("Atividade adicionada com sucesso!");
                    this.$router.push("/atividades");
                    this.$store.dispatch("repeatLastSearchActivities");
                })
                .catch(err => console.log(err));
        },
        enableEditMode(id) {
            this.editMode = true;
            this.title = 'Edição de Atividade (ID: ' + id + ')';
            this.submitText = 'Salvar Alterações';
            
            // Carregar dados para edição
            this.activity = Object.assign({}, this.$store.getters.activities.find(x => x.id == id)); // O objeto original é clonado a fim de não atualizar precipitadamente a atividade na tabela, caso o usuário saia da edição sem salvar as alterações
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
}
.activity-form input,
.activity-form select {
    display: block;
    margin: 10px auto;
    width: 310px;
}
.inline input {
    display: inline-block;
    width: 150px;
}
.cadastrar {
    margin-top: 30px;
}
</style>
