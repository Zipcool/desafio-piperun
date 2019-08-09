<template>
    <nav v-show="isLoggedIn">
        <ul>
            <li><router-link to="">Pipeline</router-link></li>
            <li><router-link to="/atividades">Atividades</router-link></li>
            <li><router-link to="">Empresas</router-link></li>
            <li><router-link to="">Pessoas</router-link></li>
            <li><router-link to="">Dashboard</router-link></li>
            <li><button @click="logout">Logout</button></li>
        </ul>
    </nav>
</template>

<script>
export default {
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
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
li {
    height: 50px;
    width: 150px;
    background-color: rgb(255, 70, 70);
    color: white;
    text-align: center;
    align-content: center;
    cursor: pointer;
}
li router-link {
    display: block;
    color: white;
}
li button {
    display: block;
    border: none;
    background-color: transparent;
    color: white;
}
a {
    color: white;
    text-decoration: none;
    height: 100%;
    width: 100%;
}
</style>
