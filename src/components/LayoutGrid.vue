<template>
      <div class="till-wrapper">
        <Order class="order"/>
        <SizesPanel class="sizes"/>
        <DrinksTable class="drinks-table"/>
        <PaymentButtons class="payments"/>
      </div>
</template>

<script>

import DrinksTable from './DrinksTable.vue';
import PaymentButtons from './PaymentButtons.vue';
import Order from './Order.vue';
import SizesPanel from './SizesPanel.vue';

export default {
    name: 'LayoutGrid',
    components: {
        DrinksTable,
        PaymentButtons,
        Order,
        SizesPanel
  }

}
</script>

<style>

</style>



// THIS IS THE MAIN BRANCH VERSION TO MERGE WITH 
