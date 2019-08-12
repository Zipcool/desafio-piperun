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
    padding: .75em 0;
    width: 100px;
    background-color: darkslategray;
    color: white;
    text-align: center;
    text-decoration: none;
    margin: 20px auto;
    cursor: pointer;
    user-select: none;
}
a:hover,
a:active {
    background-color: rgb(51, 104, 104);
}
</style>