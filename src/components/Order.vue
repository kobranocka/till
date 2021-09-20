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
            billItems: [],
        }
    },

    mounted(){
        // called when item is selected
        this.emitter.on("itemPressed", (item)=>{
            // create a copy of item and push it to the list
            let copiedItem = Object.assign({}, item);
            this.orderTotal += copiedItem.price;
            this.billItems.push(copiedItem);
        })
        // called when payment is made
        this.emitter.on("paymentReceived", (payment)=>{
            // if card/cash payments are made in full or amount is bigger than asking price
            if(payment == "max" || this.orderTotal - payment <= 0){
                this.orderTotal = 0;
                this.billItems.length = 0;
            }else{
                // if it's a partial payment
                this.orderTotal -= payment;
                let pay = {"name": "payment", "price": payment*(-1)};
                this.billItems.push(pay);
            }
        })
    },
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



// THIS IS THE MAIN BRANCH VERSION TO MERGE WITH 