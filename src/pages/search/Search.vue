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
<script src='./Search.ts' lang='ts'></script>
<style src='./Search.scss' lang='scss' scoped></style>
