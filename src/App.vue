<template>
  <div class="till-wrapper">
    <Order class="order"/>
    <DrinksTable class="drinks-table"/>
    <PaymentButtons class="payments"/>
  </div>
</template>

<script>
import DrinksTable from './components/DrinksTable.vue';
import PaymentButtons from './components/PaymentButtons.vue';
import Order from './components/Order.vue';

export default {
  name: 'App',
  components: {
    DrinksTable,
    PaymentButtons,
    Order
  }
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  .till-wrapper{
    border: solid 3px;
    width: 95vh;
    height: 95vh;
    margin: auto;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
  }

  .order{
    height: 90%;
    display: inline-block;
    flex: 1;
  }

  .drinks-table{
    display: flex;
    flex: 2;
    height: 90%;
  }
</style>
