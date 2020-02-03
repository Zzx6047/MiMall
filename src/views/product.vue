<template>
    <div class="product">
        <product-param>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="h">xxx</div>
        <div class="h">xxx</div>
        <div class="h">xxx</div>
        <div class="h">xxx</div>
        <div class="h">xxx</div>
        <div class="h">xxx</div>
    </div>
</template>
<script>
import ProductParam from './../components/ProductParam'
export default {
    name: 'product',
    components: {
        ProductParam
    }
}
</script>
<style lang="scss">
.product {
    .h {
        height: 150px;
    }
    button {
        margin-left: 10px;
    }
}
</style>