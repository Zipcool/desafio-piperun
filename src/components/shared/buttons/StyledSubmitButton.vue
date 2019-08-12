<template>
    <button type="submit"><slot></slot></button>
</template>

<script>
export default {
}
</script>

<style scoped>   
button {
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
    border: none;
}
button:hover,
button:active {
    background-color: rgb(197, 50, 50);
}
</style>