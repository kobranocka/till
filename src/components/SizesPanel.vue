<template>
    <ul>
        <li v-for="size in sizes" :key="size.size">
            <button v-on:click="sizeSelected(size)">{{size.size}}</button>
        </li>
    </ul>
</template>

<script>
let sizes = [
    {size: "pint", mult: "1"},
    {size: "half-pint", mult: "0.5"}];
export default {
    name: 'SizesPanel',
    data(){
        return{
            sizes:sizes
    };
    },
    methods:{
        sizeSelected(size){
            this.emitter.emit("sizeSelected", size.mult);
        }
    }
}

</script>

<style scoped>

</style>