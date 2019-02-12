<template>
  <div class="itemCardList">
    <ul class="itemCardList__content">
        <li v-for="item in items" :key="item.lot" class="itemCardList__item">
          <a :href="`/item/${item.lot}`">
            <ItemCard
              :name="item.name"
              :lot="item.lot"
              :src="item.src"
              :alt="item.alt"
              :price="item.price"
              :count="item.count"
              :label="item.label"
              :clickFavoriteButton="clickEvent"
              :isActiveFavoriteButton="item.isFavorite"
            />
          </a>
        </li>
    </ul>
  </div>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
