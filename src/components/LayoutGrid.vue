<template>
      <div class="till-wrapper">
        <div class="left-col">
          <HelpBar class="help-bar"/>
          <Order class="order"/>
          <Numpad class="numpad"/>
        </div>

        <div class="main">
          <!-- show the items page - DrinksTable component -->
          <div v-show="productPageShown" class="product-page page">
              <DrinksTable class="main-table"/>
          </div>
          <!-- show the items page - PaymentButton component -->
          <div v-show="!productPageShown" class="payment-page page">
              <PaymentButtons class="payments"/>
          </div>

          <Catagories class="categories"/>
  
        </div>
      </div>
</template>

<script>

import Numpad from './Numpad.vue';
import HelpBar from './HelpBar.vue';
import DrinksTable from './DrinksTable.vue';
import PaymentButtons from './PaymentButtons.vue';
import Order from './Order.vue';
import Catagories from './Catagories.vue';

export default {
    name: 'LayoutGrid',
    components: {
        DrinksTable,
        PaymentButtons,
        Order,
        Numpad,
        HelpBar,
        Catagories
  },

  data(){
      return{
        // keep track of the displayed page
        productPageShown: true
      }
  },

  mounted(){
    // emit received from Catagories component when pay button is clicked, change the page display
    this.emitter.on("mainPageChange", page =>{
      if(page == "pay"){
        this.productPageShown = false;
      }else{
        this.productPageShown = true;
      }
    })
  }

}
</script>

<style scoped>

.till-wrapper{
  display: grid;
  border: solid 4px gold;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(14, 1fr);
}

.left-col{
  grid-column: 1 / span 4;
  grid-row: 1 / span 14;
  background: red;
  display: contents;
}

.main{
  grid-column: 5 / span end;
  grid-row: 1 / span 14;
  background: blue;
  position: relative;
  height:100%;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-template-rows: repeat(14, minmax(0, 1fr));
}

.page{
  height: 100%;
  max-height: 100%;
  grid-column: span 8;
  grid-row: 1 / end;
}

.categories{
  grid-column: span 2;
  grid-row: 1 / end;
  background: orange;
}

.help-bar{
  grid-column: 1 / span 4;
  border: solid ;
}

.order{
  grid-column: 1 / span 4;
  grid-row: span 7;
}

.numpad{
  grid-column: 1 / span 4;
  grid-row: span 6;
}

</style>