<template>
    <nav class="menu">
        <h1 class="title">Desafio PipeRun</h1>
        <div v-show="isUserLogged">
            <router-link class="menu-item" to="/pipeline">Pipeline</router-link>
            <router-link class="menu-item" to="/atividades">Atividades</router-link>
            <router-link class="menu-item" to="/empresas">Empresas</router-link>
            <router-link class="menu-item" to="/pessoas">Pessoas</router-link>
            <router-link class="menu-item" to="/dashboard">Dashboard</router-link>
            <div class="user-info">
                <p>Seja bem vindo, Marcos!</p>
                <a class="menu-item" @click="logout">Sair</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        isUserLogged() {
            return this.$store.getters.isUserLogged;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.menu {
    background: darkslategray;
    padding-top: 0;
    user-select: none;
    text-align: center;
}

.title {
    color: white;
    font-weight: normal;
}

.menu-item {
    display: block;
    padding: 1em 0;
    width: 100%;
    background-color: rgb(217, 63, 63);
    color: white;
    text-decoration: none;
}

.menu-item:hover {
    background-color: rgb(197, 50, 50);
}

.user-info {
    position: absolute;
    bottom: 30px;
}

.user-info a {
    cursor: pointer;
}

.user-info p {
    color: white;
}
</style>
