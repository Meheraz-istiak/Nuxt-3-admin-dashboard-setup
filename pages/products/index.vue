<template>

       <h2>product</h2>
    <div v-for="p in product" :key="p.id">
        <productCard :product="p"/>

    </div>



</template>

<script setup>

const{data: product}= await useFetch('https://fakestoreapi.com/products')
useHead({
    title:'product page'
})


</script>

<style scoped>

</style>