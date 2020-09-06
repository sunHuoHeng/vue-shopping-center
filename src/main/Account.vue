<template>
    <div>
        <h1>这是Account</h1>
        <router-link to="/account/login">account/login</router-link>
        <router-link to="/account/1">1</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style scoped>
    div{
        background-color: blue;
    }
</style>