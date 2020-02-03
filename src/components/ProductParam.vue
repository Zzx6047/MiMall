<template>
    <div class="nav-bar">
        <div class="container">
            <div class="pro-titl">
                小米8
            </div>
            <div class="pro-param">
                <a href="">概述</a><span>|</span>
                <a href="">参数</a><span>|</span>
                <a href="">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nav-bar',
    data() {
        return {

        }
    },
    mounted() {
        
    },
    methods: {

    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.nav-bar {
    height: 70px;
    line-height: 70px;
    border: 1px solid $colorH;
    .container {
        @include flex();
        .pro-title {
            font-size: $fontH;
            color: $colorB;
            font-weight: bold;
        }
        .pro-param {
            font-size: $fontJ;
            span {
                margin: 0 10px;
            }
            a {
                color: $colorC;
            }
        }
    }
}
</style>