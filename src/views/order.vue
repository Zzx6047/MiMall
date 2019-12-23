<template>
    <div>
        <order-header></order-header>
        <router-view></router-view>
        <order-footer></order-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import OrderFooter from './../components/OrderFooter'
export default {
    components: {
        OrderHeader,
        OrderFooter
    }
}
</script>