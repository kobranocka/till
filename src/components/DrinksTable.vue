<template>
  <div class="main-table">

          <SizesPanel class="sizes"/>

          <span class = "product-item" v-for="item in category.products" :key="item.id"> 
            <button class = "product-button">{{item.name}}</button>
          </span> 


  </div>
</template>

<script>

import SizesPanel from './SizesPanel.vue';

let beerData = require("../assets/beer.json");
let wineData = require("../assets/wine.json");
let vodkaData = require("../assets/vodka.json");
let starterData = require("../assets/starters.json");
let mainsData = require("../assets/mains.json");
let dessertData = require("../assets/desserts.json");

let mult = 1;

export default {
  name: 'DrinksTable',
  components: {SizesPanel}
  ,

  data(){
    return{
      total: 0,
      category: beerData
    };
  },
  mounted(){
    //TEST: on size selected, enable the choice of drinks and count their price by mult
      this.emitter.on("sizeSelected", (multiply) =>{
        mult = multiply;
        // enable drinks
        this.drinks.forEach(drink => drink.isEnabled = true);
      });

      this.emitter.on("choseCategory", catagory =>{
        this.choseCategory(catagory);
      });
  },
  methods:{
    updateTotal(item, type){
      // update item's price field
      let newItem = JSON.parse(JSON.stringify(item));
      if(type == 'drink'){
        newItem.price = newItem.price*mult;
      }
      this.total += newItem.price;
      this.emitter.emit("itemPressed", newItem);
      // this.drinks.forEach(drink => drink.isEnabled = false);

    },

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
      this.emitter.emit("category", this.category.sizes);
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-table{
  background: #e3e3e3;
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
  grid-row-start: 2;

}

.product-button{
  /* width: 30px; */
  grid-area: 1, 1;
  /* grid-column: minmax(30px, 1fr);
  grid-row: minmax(30px, 1fr); */
  min-width: none;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
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
