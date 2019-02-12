<template>
  <input
    v-model="inputValue"
    type="text"
    :class="['textInput', withIcon && '--withIcon']"
    :name="name"
    :placeholder="placeholder"
    @keyup.enter="onSubmit"
  />
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
