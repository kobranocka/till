<template>
  <div class="drinks-table">
    <button class="item-type-button" v-on:click="drinkSelected= false">Food</button>
    <button class="item-type-button" v-on:click="drinkSelected = true">Drink</button>

    <section v-show="drinkSelected" class="subcatagory drinks">
      <button class="subcatagory-button beer" v-on:click="choseCategory('beer')">Beer</button>
      <button class="subcatagory-button wine" v-on:click="choseCategory('wine')">Wine</button>
      <button class="subcatagory-button vodka" v-on:click="choseCategory('vodka')">Vodka</button>
    </section>


    <section v-show="!drinkSelected" class="subcatagory food">
      <button class="subcatagory-button Starters" v-on:click="choseCategory('starters')">Starters</button>
      <button class="subcatagory-button Mains" v-on:click="choseCategory('mains')">Mains</button>
      <button class="subcatagory-button Desserts" v-on:click="choseCategory('desserts')">Desserts</button>
    </section>

    <ul>
      <li class = "product-item" v-for="item in category.products" :key="item.id"> 
          <button class = "product-button" :disabled="!item.isEnabled" v-on:click='choseProduct(item)'>{{item.name}}</button>
      </li> 
    </ul>

  </div>
</template>

<script>

let beerData = require("../assets/beer.json");
let wineData = require("../assets/wine.json");
let vodkaData = require("../assets/vodka.json");
let starterData = require("../assets/starters.json");
let mainsData = require("../assets/mains.json");
let dessertData = require("../assets/desserts.json");
let drinksData = [beerData, wineData, vodkaData];

export default {
  name: 'DrinksTable',
  data(){
    return{
      total: 0,
      drinkSelected: true,
      category: beerData,
      // keeping track of selected size
      pickedSize: null
    };
  },
  mounted(){
    // the client chose a size
      this.emitter.on("sizeSelected", (size) =>{
        this.pickedSize = size;
        // disable all items from other drinks categories while size is selected
        drinksData.forEach(data => data.products.forEach(item => item.isEnabled = false));
        this.category.products.forEach(item => item.isEnabled = true);
      })
  },
  methods:{
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
    // called when an item is clicked
    choseProduct(chosenProduct){
      if(this.drinkSelected){
        // disable all drinks again bc size is not selected anymore
        this.category.products.forEach(item => item.isEnabled = false);
        // find the right price of the item
        chosenProduct.price = chosenProduct.prices[this.pickedSize];
      }
      // update total and inform about the changes
      this.total += chosenProduct.price;
      this.emitter.emit("itemPressed", chosenProduct);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drinks-table{
  background: #e3e3e3;
  display: flex;
  flex-direction: column;
}

.product-group{
  display: flex;
}

.product-item{
  list-style-type: none;
}

.product-button{
  width: 90px;
  height: 60px;
  margin: 0.5rem;
}

.item-type-button{
  width: 80px;
  height: 40px;
  margin-left: auto;
}
</style>
