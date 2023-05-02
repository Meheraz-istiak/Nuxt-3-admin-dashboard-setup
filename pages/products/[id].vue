<template>

    <div>
        <Head>
        <title>{{ product.title }}</title>
    </Head>

        <h3>{{ product.title }}</h3>
        <h4>{{ product.price }}</h4>
        <h5>{{ product.description }}</h5>

    </div>
</template>

<script setup>
const{id}= useRoute().params

const uri='https://fakestoreapi.com/products/'+id

const {data:product}=await useFetch(uri,{key:id})

if(!product.value)
{
    throw createError({statusCode:404 ,statusMessage:'page not found'})
}

</script>

<style scoped>

</style>