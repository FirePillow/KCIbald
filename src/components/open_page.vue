<template>
    <navigation></navigation>
</template>

<script>
    import navigation from '../components/navigation.vue';
    export default {
        name: "open_page",
        components: {navigation},
        mounted() {
            console.log('openpage mounted.')
        }
    }
</script>

<style scoped>

</style>