<template>
    <div>
        <h1>Atividades</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activityTypes: null
        }
    },
    created() {
        this.$store.dispatch('loadActivityTypes');
    },
    beforeDestroy() {
        this.$store.dispatch('unloadActivityTypes');
        this.$store.dispatch('clearStoredActivities');
    }
}
</script>

<style scoped>

</style>
