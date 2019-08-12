<template>
    <router-link :to="to"><slot></slot></router-link>
</template>

<script>
export default {
    props: {
        to: {
            type: Object,
            required: true
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>   
a {
    display: inline-block;
    padding: .7em 0;
    width: 140px;
    background-color: darkslategray;
    color: white;
    text-align: center;
    text-decoration: none;
    margin: 0 5px 0 0;
    cursor: pointer;
    user-select: none;
}
a:hover,
a:active {
    background-color: rgb(51, 104, 104);
}
</style>