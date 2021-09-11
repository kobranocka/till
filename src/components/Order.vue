<template>
  <section class="order">

      <div class="bill"></div>
      <h5 class="total">Total: £0.00</h5>
  </section>
</template>

<script>

let total = 0;

export default {
    name: 'Order',
    data(){
        return{
            orderTotal: total
        }
    }
}
</script>

<style>
.order{
    background: grey;
    position: relative;
}

.bill{
    width: 100%;
    height: 90%;
    border: dotted coral;
}

.total{
    position: relative;
    padding: 0;
    margin: 0;
}
</style>