<template>
    <a @click="onClick"><slot></slot></a>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>   
a {
    display: block;
    padding: 1em 0;
    width: 200px;
    background-color: rgb(217, 63, 63);
    color: white;
    text-align: center;
    text-decoration: none;
    margin: 20px auto;
    cursor: pointer;
    user-select: none;
}
a:hover,
a:active {
    background-color: rgb(197, 50, 50);
}
</style>