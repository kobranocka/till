<template>
  <section class="order">

      <div class="bill">
          <ul>
              <li class="bill-item" v-for="item in billItems" :key="item.id"><span class="bill-item-name">{{item.name}}</span><span class="bill-item-price">{{item.price}}</span></li>
          </ul>
      </div>
      <h5 class="total">Total: {{orderTotal}}</h5>
  </section>
</template>

<script>



export default {
    name: 'Order',
    data(){
        return{
            orderTotal: 0,
            billItems: []
        }
    },

    mounted(){
        this.emitter.on("itemPressed", (item)=>{
            this.orderTotal += item.price;
            this.billItems.push(item);
            console.log(item.name)
        })
    }
}
</script>

<style>
.order{
    background: grey;
    position: relative;
}

.bill{
    width: 100%;
    height: 90%;
    border: dotted coral;
    overflow: scroll;
}

.bill-item{
    list-style: none;
    padding: 0.25rem;
    font-size: 14px;
    /* border: dashed; */
    display: flex;
    justify-content: flex-start;
    color: white;
}

.bill-item-price{
    margin-left: auto;
}

.total{
    position: relative;
    padding: 0;
    margin: 0;
    color: yellow;
    font-size: 19px;
}
</style>