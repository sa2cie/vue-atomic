<template>
    <div class="favoriteButton">
        <Button @click.native="click" circle><Icon name="heart" :type="isActive ? 'success' : 'secondary'" size="small"></Icon></Button>
    </div>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scope/>
