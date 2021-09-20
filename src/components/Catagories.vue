<template>
    <section class="categories">
      
      <button class="item-type-button" v-on:click="emitMainCategoryChange(false)">Food</button>
      <button class="item-type-button" v-on:click="emitMainCategoryChange(true)">Drink</button>

      <section v-show="drinkSelected" class="subcatagory drinks">
        <button class="subcatagory-button beer" v-on:click="emitCategory('beer')">Beer</button>
        <button class="subcatagory-button wine" v-on:click="emitCategory('wine')">Wine</button>
        <button class="subcatagory-button vodka" v-on:click="emitCategory('vodka')">Vodka</button>
      </section>

      <section v-show="!drinkSelected" class="subcatagory food">
        <button class="subcatagory-button Starters" v-on:click="emitCategory('starters')">Starters</button>
        <button class="subcatagory-button Mains" v-on:click="emitCategory('mains')">Mains</button>
        <button class="subcatagory-button Desserts" v-on:click="emitCategory('desserts')">Desserts</button>
      </section>

      <button v-on:click="changeCenter('pay')" class="payment-button">Pay</button>

    </section>
</template>

<script>
export default {
    name: "categories",

    data(){
        return{
          drinkSelected: true
        }
    },

    methods:{
        emitCategory(category){
            this.changeCenter(category);
            this.emitter.emit("choseCategory", category);
        },

        emitMainCategoryChange(drinkSelected){
          this.drinkSelected = drinkSelected;
          this.emitter.emit("drinkSelected", drinkSelected);
        },
       
        changeCenter(newCenter){
            this.emitter.emit("mainPageChange", newCenter);
        }
    }

}
</script>

<style scoped>
    .categories{
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: repeat(14, minmax(0, 1fr));
        border: dotted red;
    }

    .subcatagory{
        display: contents;
    }

    .item-type-button{
  width: auto;
  grid-column: span 2;
}

.payment-button{
  grid-row: end;
  grid-column: span 2;
}
 
</style>