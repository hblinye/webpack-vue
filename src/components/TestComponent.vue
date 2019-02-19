<template>
    <div>
        testComponent: {{ message }} {{ getTestMessage }} {{ getCount }}
        <button @click="countUp">countUp</button>
        <input type="text" v-model="changedMessage" @input="setTestMessage">
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'this is testComponent',
            changedMessage: ''
        }
    },
    computed: {
        getTestMessage() {
            return this.$store.getters.getTestMessage
        },
        getCount() {
            return this.$store.getters.getCount
        }
    },
    methods: {
        countUp() {
            this.$store.dispatch('countUp')
        },
        setTestMessage() {
            this.$store.dispatch('setTestMessage', this.changedMessage)
        }
    }
}
</script>
