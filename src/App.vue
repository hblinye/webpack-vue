<template>
    <div id='test-app'>
        {{ message }}
        <test-component/>
        <multi-test-component/>
        <multi-test-component/>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'hello, world'
        }
    }
}
</script>
