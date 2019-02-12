<template>
  <section class="itemCard">
    <!-- ItemCard - ItemThumb -->
    <div class="itemCard__itemThumb">
      <ItemThumb :src="src" :alt="alt" :label="label" />
    </div>
    <!-- ItemCard - Content -->
    <div class="itemCard__content">
      <!-- ItemCard - ItemInfo -->
      <div class="itemCard__itemInfo">
        <ItemInfo :name="name" :price="price" :count="count" />
      </div>
      <!-- ItemCard - FavoriteButton -->
      <div class="itemCard__favoriteButton">
        <FavoriteButton :click="clickFavoriteButton" :isActive="isActiveFavoriteButton" :key="lot"/>
      </div>
    </div>
  </section>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
