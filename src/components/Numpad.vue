<template>
    <div class="numpad-wrapper">

        <button class="button button-2x1 b-orange" v-on:click="clear">Clear</button>
        <button class="button button-2x1 b-blue" disabled>Options</button>


        <ul class = "numpad-nums">
            <li v-for="number in numbers" class="button button-1x1 b-green" :key="number">
                <button v-on:click="clickedNumber(number)">{{number}}</button>
            </li>
        </ul>

        <button id = "priceEnquiry" class="button b-red">Price Enquiry</button>
        <button id = "clearQuantity" class = "button b-pink" v-on:click="clearQuantity">Clear quantity</button>
        <button id = "button0" class="button b-green">0</button>
    </div>
</template>


<script>
export default {
    name: 'Numpad',
    data(){
        return{
            numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        };
    },
    methods:{
        clickedNumber(number){
            this.emitter.emit("amountChosen", number);
        },
        clear(){
            this.emitter.emit("clear");
        },
        clearQuantity(){
            this.emitter.emit("clearQuantity");
        }
    }
}
</script>


<style scoped>
.numpad-wrapper{
    border: solid green;
    display: contents;
}

.numpad-nums{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column: 1 / 4;
    grid-row: 10 / span 3;
    /* background: pink; */
}

.numpad-nums li{
    list-style: none;
}

.numpad-nums li button{
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
}

#priceEnquiry{
    /* grid-column: 4; */
}

#clearQuantity{
}
</style>