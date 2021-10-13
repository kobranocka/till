<template>
    <div class="numpad-wrapper">

        <ul class = "numpad-nums">
        <li v-for="number in numbers" class="button button-1x1 b-green" :key="number">
            <button v-on:click="clickedNumber(number)">{{number}}</button>
        </li>
        </ul>
        <button class = "button b-pink" v-on:click="clear">Clear quantity</button>
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
    display: contents;
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
</style>