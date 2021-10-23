<template>
    <section class="categories">
      
      <button class="item-type-button button button-2x1 b-red" v-on:click="emitMainCategoryChange(false)">Food</button>
      <button class="item-type-button button button-2x1 b-darkblue" v-on:click="emitMainCategoryChange(true)">Drink</button>


      <section v-show="drinkSelected" class="subcatagory drinks">
        <button class="subcatagory-button beer button button-1x1 b-lightpurple" v-on:click="emitCategory('beer')">Beer</button>
        <button class="subcatagory-button wine button button-1x1 b-lightpurple" v-on:click="emitCategory('wine')">Wine</button>
        <button class="subcatagory-button vodka button button-1x1 b-lightpurple" v-on:click="emitCategory('vodka')">Vodka</button>
      </section>

      <section v-show="!drinkSelected" class="subcatagory food">
        <button class="subcatagory-button Starters button button-1x1 b-lightpurple" v-on:click="emitCategory('starters')">Starters</button>
        <button class="subcatagory-button Mains button button-1x1 b-lightpurple" v-on:click="emitCategory('mains')">Mains</button>
        <button class="subcatagory-button Desserts button button-1x1 b-lightpurple" v-on:click="emitCategory('desserts')">Desserts</button>
      </section>

      <button v-on:click="changeCenter('pay')" class="payment-button button button-2x1 b-green">Pay</button>

    </section>
</template>

<script>
export default {
    name: "categories",

    data(){
        return{
          // keeping track of whether a drink is selected
          drinkSelected: true
        }
    },

    methods:{
        // the sub-category was changes, emit is caught by DrinksTable component
        emitCategory(category){
            this.changeCenter(category);
            this.emitter.emit("choseCategory", category);
        },

        // the main category (drink/food) was changed, emit is caught by DrinksTable component
        emitMainCategoryChange(drinkSelected){
          this.drinkSelected = drinkSelected;
          this.emitter.emit("drinkSelected", drinkSelected);
        },
       
        // run when pay button is clicked, the main page was changed, received by LayoutGrid
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
        /* border: dotted red; */
    }

    .subcatagory{
        display: contents;
    }

    .item-type-button{
  width: auto;
  grid-column: span 2;
}

.payment-button{
  grid-row: span 2 / end;
  grid-column: span 2;
}
 
</style>