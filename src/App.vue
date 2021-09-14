<template>
  <LayoutGrid/>
</template>

<script>

import LayoutGrid from './components/LayoutGrid.vue'

export default {
  name: 'App',
  components:{
    LayoutGrid
  }

}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  .till-wrapper{
    border: solid 3px;
    width: 95vh;
    height: 95vh;
    margin: auto;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
  }

  .order{
    height: 90%;
    display: inline-block;
    flex: 1;
  }

  .drinks-table{
    display: flex;
    flex: 2;
    height: 90%;
  }
</style>
