<template>
    <ul class="mediaCardList">
        <li class="mediaCardList__item" v-for="(item, index) in data" :key="index">
            <MediaCard
                :title="item[titleKey]"
                :description="item[descriptionKey]"
                :image="item[imageKey]"
                :alt="item[altKey]"
                :url="item[urlKey]"
                :click="click"
            />
        </li>
    </ul>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
