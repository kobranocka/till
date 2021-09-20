<template>
    <section class="payments">
        <button v-on:click="payment('max', 'cash')">Cash</button>
        <button v-on:click="payment('max', 'card')">Card</button>
        <button v-on:click="payment(10, 'cash')">£10</button>
        <button v-on:click="payment(20, 'cash')">£20</button>
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
        payment(amount, method){
            if(method == "card"){
                alert("paid by card");
            }else if(amount == 'max'){
                alert("paid by cash");
            }
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




// THIS IS THE MAIN BRANCH VERSION TO MERGE WITH 