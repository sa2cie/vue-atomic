<template>
  <SearchItemListTemplate
    :searchInputName="privateState.searchInputName"
    :searchInputValue="privateState.searchInputValue"
    :searchInputPlaceholder="privateState.searchInputPlaceholder"
    :changeSearchInput="changeSearchInput"
    :submitSearchInput="submitSearchInput"
    :searchItems="privateState.searchItems"
    :clickFavoriteButton="clickFavoriteButton"
  />
</template>
<script src='./Home.ts' lang='ts'></script>
<style src='./Home.scss' lang='scss' scoped></style>
