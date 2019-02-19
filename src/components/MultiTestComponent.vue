<template>
    <div>
        multiTestComponent: {{ message }}{{ getState }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'this is multi-testComponent'
        }
    },
    computed: {
        getState() {
            return this.$store.state.testMessage
        }
    }
}
</script>
