<template>
    <a :href="url" class="link" :target="blank && '_blank'">
        <slot />
    </a>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
