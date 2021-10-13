<template>
  <div class="main-table">

    <!-- The panel with sizes displayed -->
    <SizesPanel class="sizes"/>

    <!-- Showing all products from a chosen category as buttons, disabled when it's a drink and size is not selected -->
    <span class = "product-item button button-1x1 b-green" v-for="item in category.products" :key="item.id">
        <button class = "product-button" :disabled="!item.isEnabled" v-on:click='choseProduct(item)'>{{item.name}}</button>
    </span>



  </div>
</template>

<script>

import SizesPanel from './SizesPanel.vue';

// loading data from JSON files
let beerData = require("../assets/beer.json");
let wineData = require("../assets/wine.json");
let vodkaData = require("../assets/vodka.json");
let starterData = require("../assets/starters.json");
let mainsData = require("../assets/mains.json");
let dessertData = require("../assets/desserts.json");
// storing drinks together
let drinksData = [beerData, wineData, vodkaData];

export default {
  name: 'DrinksTable',
  components: {SizesPanel},
  data(){
    return{
      // keeping track of running total
      total: 0,
      // keeping track of whether the category selected is a drink
      drinkSelected: true,
      // keeping track of the current category
      category: beerData,
      // keeping track of selected size
      pickedSize: null
    };
  },
  mounted(){
    // size has been chosen, received from SizesPanel component
      this.emitter.on("sizeSelected", (size) =>{
        // updating the picked size
        this.pickedSize = size;
        // disable all items from other drinks categories while size is selected
        drinksData.forEach(data => data.products.forEach(item => {
        item.isEnabled = false;
        }));
        this.category.products.forEach(item => {
          item.isEnabled = true;
          });
      })

      // updating the main category (as food or drink) - received from Catagories component
      this.emitter.on("drinkSelected", (drinkSelected) => {
        this.drinkSelected = drinkSelected;
      })


      // the subcategory was chosen - received from Categories component
      this.emitter.on("choseCategory", (category) => {
        this.choseCategory(category);
      })
  },
  methods:{
    // run when subcategory change emit was caught
    choseCategory(cat){ 
      switch(cat){
        case 'beer':
          this.category = beerData;
        break;

        case 'vodka':
          this.category = vodkaData;
        break;

        case 'wine':
          this.category = wineData;
        break;

        case 'starters':
          this.category = starterData;
        break;

        case 'mains':
          this.category = mainsData;
        break;

        case 'desserts':
          this.category = dessertData;
        break;
      }
      // emit to be caught by SizesPanel to display the right sizes
      this.emitter.emit("category", this.category.sizes);
    },
    // called when an item is clicked
    choseProduct(chosenProduct){
      if(this.drinkSelected){
        // disable all drinks again bc size is not selected anymore
        this.category.products.forEach(item => item.isEnabled = false);
        // find the right price of the item
        chosenProduct.price = chosenProduct.prices[this.pickedSize];
      }
      // update total and inform Order component about the changes
      this.total += chosenProduct.price;
      // emit to be caught by Order to update the price and display
      this.emitter.emit("itemPressed", chosenProduct);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-table{
  /* background: #e3e3e3; */
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  grid-template-rows: repeat(14, minmax(0, 1fr));
  max-height: 100%;
  height: 100%;
  position: relative;
}

.product-group{
  display: flex;
}

.product-item{
  list-style-type: none;
  max-height: 100%;
  max-width: 100%;
  /* grid-row-start: 2; */

}

.product-button{

  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;

  background-color: transparent;
  border: none;
  box-shadow:none;

}


.variable-area{
  grid-column: 1 / span 8;
  grid-row: 1 / span end -1;
}

.catagories{

  grid-column: span 3 / end;
  grid-row: 1 / span end;
  background: magenta;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(14, 1fr);
}

.sizes{
  display: contents;
  grid-column: 1 / span end;
  grid-row: 1;
}
</style>
