<template>
    <div class="itemInfo">
        <!-- itemInfo - Title -->
        <div class="itemInfo__title">
            <Txt>{{ name }}</Txt>
        </div>
        <!-- itemInfo - Footer -->
        <div class="itemInfo__footer">
            <!-- itemInfo - Price -->
            <div class="itemInfo__price">
                <Price>{{ price }}</Price>
            </div>
            <!-- itemInfo - FavoriteCount -->
            <div class="itemInfo__favoriteCount">
                <FavoriteCount>{{ count }}</FavoriteCount>
            </div>
        </div>
    </div>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scope/>
