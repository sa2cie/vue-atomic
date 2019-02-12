<template>
  <section class="l-container">
    <header class="l-header">
      <!-- SearchHeader -->
      <SearchHeader
        :name="searchInputName"
        :value="searchInputValue"
        :placeholder="searchInputPlaceholder"
        :onChange="changeSearchInput"
        :onSubmit="submitSearchInput"
      />
    </header>
    <div class="l-content">
      <!-- SearchItemList -->
      <ItemCardList
        :items="searchItems"
        :clickFavoriteButton="clickFavoriteButton"
      />
    </div>
  </section>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
