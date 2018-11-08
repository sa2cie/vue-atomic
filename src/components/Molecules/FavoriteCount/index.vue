<template>
    <div class="favoriteCount">
        <Txt class="favoriteCount__txt" type="secondary" size="small">
            <Icon class="favoriteCount__icon" name="heart" type="secondary" size="xsmall"/>
            <slot/>
        </Txt>
    </div>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped/>
