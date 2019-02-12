<template>
  <div class="itemThumb">
    <!-- ItemThumb - Image -->
    <div class="itemThumb__image">
      <Img :src="src" :alt="alt" />
    </div>
    <!-- ItemThumb - Label -->
    <div v-if="label !== ''" class="itemThumb__label">
      <Label type="success" size="small">{{ label }}</Label>
    </div>
  </div>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scope/>
