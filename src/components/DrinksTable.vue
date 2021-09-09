<template>
  <div>
    <ul>
      <li v-for="drink in drinks" :key="drink.id">
        <button>{{drink.name}}</button>
      </li>
    </ul>
  </div>
</template>

<script>

let drinksData = require("../assets/drink.json");

export default {
  name: 'DrinksTable',
  data(){
    return{
      drinks: drinksData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
