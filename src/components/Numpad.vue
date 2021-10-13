<template>
    <div class="numpad-wrapper">
        <table v-for="number in numbers" :key="number">
            <button v-on:click="clickedNumber(number)">{{number}}</button>
        </table>
        <button v-on:click="clear">CLEAR</button>
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
}
</style>