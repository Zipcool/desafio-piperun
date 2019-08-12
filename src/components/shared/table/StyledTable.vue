<template>
    <table class="styled-table">
        <thead>
            <tr>
                <th v-for="(tableheader, i) in tableheaders" :key="i">{{ tableheader }}</th>
                <th class="actions" v-if="actions > 0" :colspan="actions">Ações</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        tableheaders: {
            type: Array,
            required: true
        },
        actions: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
    .styled-table {
        width: 100%;
        margin: auto;
    }
    .styled-table th {
        color: white;
        font-weight: normal;
        padding: 8px;
        background-color: rgb(97, 61, 99);
    }
    .styled-table td {
        padding: 4px;
        background-color: rgb(238, 238, 238);
    }
    .actions {
        width: 100px;
    }
</style>