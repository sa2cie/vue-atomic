<template>
    <ul class="mediaCardList">
        <li class="mediaCardList__item" v-for="(item, index) in datas" :key="index">
            <YoutubeCard
                :title="item.snippet.title"
                :description="item.snippet.description"
                :image="item.snippet.thumbnails.high.url"
                :alt="item.snippet.title"
                :url="`http://www.youtube.com/embed/${item.id.videoId}`"
                :click="click"
            />
        </li>
    </ul>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
