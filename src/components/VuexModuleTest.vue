<template>
    <div>
        <button @click="toggleShow">toggle</button>
        <span v-show="isShow">12312</span>
        {{ message }} {{ getTestMessage }}
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    data () {
        return {
            message: "test"
        }
    },
    computed: {
        ...mapGetters('moduleTest', {
            getTestMessage: 'getTestMessage',
            isShow: 'isShow'
        })
    },
    methods: {
        ...mapActions('moduleTest', ['setTestMessage', 'toggleShow'])
    }
}
</script>
