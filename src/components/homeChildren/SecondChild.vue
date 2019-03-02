<template>
    <div>
        this is second child
        <button @click="backToFirst">back to first</button>
    </div>
</template>

<script>
export default {
    methods: {
        backToFirst(){
            this.$router.push({path: '/home/'})
        }
    }
}
</script>

<style>

</style>
