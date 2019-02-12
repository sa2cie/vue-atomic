<template>
  <div class="searchForm">
    <div class="searchForm__icon">
      <Icon name="search" type="secondary" size="small" />
    </div>
    <div class="searchForm__input">
      <TextInput :value="value" :name="name" :placeholder="placeholder" :onChange="onChange" :onSubmit="onSubmit" withIcon />
    </div>
  </div>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scope/>
