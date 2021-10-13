<template>
    <ul>
        <li v-for="size in sizes" :key="size.size">
            <button class = "size-button button b-lightpurple" v-on:click="sizeSelected(size)">{{size}}</button>
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
        // called when size is selected, to be caught by DrinksTable to process the price etc
        sizeSelected(size){
            this.emitter.emit("sizeSelected", size);
        }
    },

    mounted(){
        // when category is selected, update the displayed sizes options, emitted by DrinksTable component
        this.emitter.on('category', sizeCategory => {
            this.sizes = sizesChoices[sizeCategory];
            });
    }
}

</script>

<style>

    ul.sizes{
        grid-column: 1 / span end;
    }

    .sizes li{
        list-style: none;
    }

    .size-button{
        height: 100%;
        max-height: 100%;
        width: 100%;
        max-width: 100%;
    }

</style>

