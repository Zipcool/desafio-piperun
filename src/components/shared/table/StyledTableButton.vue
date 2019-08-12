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
    font-size: .9em;
    display: inline-block;
    padding: 5px 14px;
    width: auto;
    background-color: rgb(217, 63, 63);
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
}
a:hover,
a:active {
    background-color: rgb(197, 50, 50);
}
</style>