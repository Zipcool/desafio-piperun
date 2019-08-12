<template>
    <div>
        <router-button to="/atividades">Voltar</router-button>
        <h2>Nova Atividade</h2>
        <form action="">
            <label for="title">Título:</label>
            <input type="text" name="title">
            <label for="user">Responsável:</label>
            <input type="text" name="user">
            <label for="type">Tipo (/activityTypes):</label>
            <input type="text" name="type">
            <label for="status">Status:</label>
            <input type="text" name="status">
            <styled-button>Cadastrar</styled-button>
        </form>
    </div>
</template>

<script>
import RouterButton from '../shared/buttons/RouterButton';
import StyledButton from '../shared/buttons/StyledButton';

export default {
    components: {
        RouterButton,
        StyledButton
    }
}
</script>

<style scoped>
</style>
