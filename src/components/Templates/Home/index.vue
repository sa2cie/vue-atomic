<template>
    <section class='template --home'>
        <header class='template__header'>
            <Heading class='template__heading' :level=1 txt='Home' />
        </header>
        <div class="template__content">
            <Heading :level=2 txt='配信動画一覧' />
            <MediaCardList
                :data='privateState.media.data'
                :titleKey='privateState.media.name.title'
                :descriptionKey='privateState.media.name.description'
                :imageKey='privateState.media.name.image'
                :urlKey='privateState.media.name.url'
            />
        </div>
        <footer class="template__footer">
            copyright
        </footer>
    </section>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
