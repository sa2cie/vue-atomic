<template>
    <h1 v-if="level === 1" class="heading --level1">{{ txt }}</h1>
    <h2 v-else-if="level === 2" class="heading --level2">{{ txt }}</h2>
    <h3 v-else-if="level === 3" class="heading --level3">{{ txt }}</h3>
    <h4 v-else-if="level === 4" class="heading --level4">{{ txt }}</h4>
    <h5 v-else-if="level === 5" class="heading --level5">{{ txt }}</h5>
    <h6 v-else-if="level === 6" class="heading --level6">{{ txt }}</h6>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
