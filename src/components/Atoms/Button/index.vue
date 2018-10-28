<template>
    <button :class="['button', styleButtonType, styleButtonisBlock]" :disabled="disabled">
        <slot/>
    </button>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scope/>
