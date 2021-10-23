<template>
      <div class="till-wrapper">

        <section class = "mainPanel" style="display:contents">
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
        </section>

        <section class="clears Removed">
          <div class="left-clear" v-on:click="orderPressed()">
            
          </div>
          <div class="center-clear">CENTER</div>
          <div class="right-clear">
            
          </div>
        </section>
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

  methods:{
    orderPressed(){
      this.emitter.emit("changeToMain");
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

    this.emitter.on("changeToClears", ()=>{
      let mainChildren = document.querySelector('.mainPanel').children;
      mainChildren.forEach(child => {child.classList.add('Removed')});

      document.querySelector('.clears').classList.remove('Removed');

    });

    this.emitter.on("changeToMain", ()=>{


      document.querySelector('.clears').classList.add('Removed');
      document.querySelector('.mainPanel').children.forEach(child => {child.classList.remove('Removed')});
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
  background-color: rgb(58, 58, 58);
}

.Removed{
  display: none !important;
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
  /* background: blue; */
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
  /* background: orange; */
}

.help-bar{
  grid-column: 1 / span 4;
  border: solid ;
}

.order{
  grid-column: 1 / span 4;
  grid-row: span 7;
}

.clears{
  display: contents;
}

.center-clear{
  grid-column: span 6;
  grid-row: 1 / span 14;
}

.left-clear, .right-clear{

    grid-column: span 4;
    grid-row: 2 / span 13;
    background: rgb(48, 48, 48);
    border-radius: 12px;
    box-shadow: inset -2px -3px 2px rgb(71, 71, 71), inset 3px 2px 2px rgb(200, 200, 200);
    position: relative;
    width: 100%;
    max-width: 100%;
    padding: 5px 8px;
}

.numpad{
  grid-column: 1 / span 4;
  grid-row: span 6;
}

</style>