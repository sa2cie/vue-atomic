<template>
  <button
    :class="['button', styleButtonType, styleButtonSize, styleButtonDisplay, styleButtonTransparent, styleButtonCircle]"
    :disabled="disabled"
  >
    <slot/>
  </button>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
