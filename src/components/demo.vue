<template>
    <div id="root">
        <p>{{this.$store.getters.originalPrice}}</p>
        <p>{{doublePrice}}</p>
        <p>{{triplePrice}}</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed : {
        // originalPrice(){
        //     return this.$store.getters.originalPrice;
        // },
        // doublePrice(){
        //     return this.$store.getters.doublePrice;
        // },
        ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])
    }
}
</script>

<style>

</style>
