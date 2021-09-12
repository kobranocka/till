<template>
    <section class="payments">
        <button v-on:click="payment('max')">Cash</button>
        <button v-on:click="payment('max')">Card</button>
        <button v-on:click="payment(10)">£10</button>
        <button v-on:click="payment(20)">£20</button>
    </section>
</template>

<script>
export default {
    name: 'PaymentButtons',
    data(){
        return{
  
    };
    },
    // TEST
    methods:{
        payment(amount){
            this.emitter.emit("paymentReceived", amount);
        }
    }
    // TEST
}

</script>

<style scoped>
    .payments{
    background: lightpink;
    width: 100%;
    min-width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    }

    button{
        margin: 0.5rem;
    }
</style>