<template>
    <ul>
        <li v-for="size in sizes" :key="size.size">
            <button v-on:click="sizeSelected(size)">{{size}}</button>
        </li>
    </ul>
</template>

<script>

let sizesChoices = {
    pints: ["Pint", "Half Pint", "Shandy"],
    wines: ["125ml", "175ml", "250ml"],
    spirits: ["25ml", "50ml", "Bottle"]
}

export default {
    name: 'SizesPanel',
    data(){
        return{
            choices: sizesChoices,
            sizes: [],
    };
    },
    methods:{
        sizeSelected(size){
            this.emitter.emit("sizeSelected", size);
        }
    },

    mounted(){
        this.emitter.on('category', sizeCategory => {
            this.sizes = sizesChoices[sizeCategory];
            });
    }
}

</script>

<style scoped>

</style>