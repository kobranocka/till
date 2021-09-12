<template>
  <div class="drinks-table">

    <button class="item-type-button" v-on:click="drinkSelected= false">Food</button>
    <button class="item-type-button" v-on:click="drinkSelected = true">Drink</button>

    <ul class="product-group"  v-show ="drinkSelected">
      <li class = "product-item" v-for="drink in drinks" :key="drink.id">
        <button class = "product-button" v-on:click="updateTotal(drink)">{{drink.name}}</button>
      </li>
    </ul>

      <ul class="product-group" v-show="!drinkSelected">
      <li class = "product-item" v-for="food in foods" :key="food.id">
        <button class = "product-button" v-on:click="updateTotal(food)">{{food.name}}</button>
      </li>
    </ul>

    <p>Running total is: {{total}}</p>
  </div>
</template>

<script>

let drinksData = require("../assets/drink.json");
let foodData = require("../assets/food.json");
export default {
  name: 'DrinksTable',
  data(){
    return{
      drinks: drinksData,
      foods: foodData,
      total: 0,
      drinkSelected: true
    };
  },
  methods:{
    
    logPrice(price){
      console.log(price);
    },

    updateTotal(item){
      this.total += item.price;
      this.emitter.emit("itemPressed", item);
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
