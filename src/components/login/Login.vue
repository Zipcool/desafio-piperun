<template>
    <div>
        <h1>Login (Authentication)</h1>
        <form action="">
            <label for="user">Usuário:</label>
            <input type="text" name="user">
            <label for="password">Senha:</label>
            <input type="password" name="password">
            <button @click="login">Acessar</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch('login', { user: 'teste', password: 'teste' });

            this.$router.push('/atividades');
        }
    }
}
</script>

<style scoped>

</style>
