<template>
  <div class="searchHeader">
    <div class="searchHeader__exitButton">
      <ExitButton />
    </div>
    <div class="searchHeader__searchForm">
      <SearchForm :value="value" :name="name" :placeholder="placeholder" :onChange="onChange" :onSubmit="onSubmit" />
    </div>
  </div>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped/>
