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

  .drinks-table{
    display: flex;
    flex: 2;
    height: 90%;
  }


  .button{
    border: none;
    border-radius: 12px;
    color: white;
    box-shadow: inset -2px -3px 3px rgba(0, 0, 0, 0.589), inset 1px 3px 3px rgba(255, 255, 255, 0.856);
    margin: 1px;
  }

  .button > *{
    color: white;
    font-weight: bold;
  }

  .button:disabled{
  }

  .button > :disabled{
        
        background-color: rgb(131, 131, 131) !important;
        color: rgba(255, 255, 255, 0.705);
        box-shadow: inset -2px -3px 3px rgba(0, 0, 0, 0.589), inset 1px 3px 3px rgba(255, 255, 255, 0.856);
        border-radius: 12px;
  }


  .button:active{
    opacity: 0.4;
  }


  .button-1x1{
    grid-column: span 1;
    grid-row: span 1;
  }


  .button-2x1{
    grid-column: span 2;
    grid-row: span 1;
  }

  .button-4x4{
    grid-column: span 4;
    grid-row: span 4;
  }

  .b-purple{
    background-color: purple;
  }

  .b-lightpurple{
    background-color: rgb(155, 72, 155);
  }

  .b-red{
    background-color: red;
  }
  .b-green{
    background-color: green;
  }
  .b-blue{
    background-color: blue;
  }
  .b-darkblue{
    background-color: darkblue;
  }

  .b-pink{
    background-color: pink;
  }

  .b-yellow{
    background-color: yellow;
  }

  .b-orange{
    background-color: orange;
  }


</style>
