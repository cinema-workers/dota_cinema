<template>
<div>
    <nav>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">Blog</router-link></li>
        <li><router-link to="about">About</router-link></li>
    </ul>
    </nav>
</div>
</template>

<style lang="scss" scoped>
    .header {
        height: 50px;
        background-color: rgb(138, 123, 123);
        width: 100%;
    }
</style>