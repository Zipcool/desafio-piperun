<template>
    <div>
        <router-link to="/atividades">Voltar</router-link>
        <h2>Cadastro de Atividade</h2>
        <form action="">
            <label for="title">Título:</label>
            <input type="text" name="title">
            <label for="user">Responsável:</label>
            <input type="text" name="user">
            <label for="type">Tipo (/activityTypes):</label>
            <input type="text" name="type">
            <label for="status">Status:</label>
            <input type="text" name="status">
            <button>Adicionar</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
