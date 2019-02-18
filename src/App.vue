<template>
    <div id='test-app'>
        {{ message }}
        <test-component/>
        <multi-test-component/>
        <multi-test-component/>
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
