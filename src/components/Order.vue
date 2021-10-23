<template>
  <section class="order" v-on:click="orderPressed()">

  <div class="order-top">
    <span id = "serverName" class="order-text white">Sean</span>
    <span id = "dateTime" class=" order-text white">11 Sep 2021 12:02</span>
  </div>
      <div class="bill">
          <ul>
              <li class="bill-item" v-for="item in billItems" :key="item.id">
                    <span class="bill-item-amount">{{item.amount}}</span>
                    <span class="bill-item-name">{{item.item.name}}</span>
                    <span class="bill-item-price">{{item.item.price}}</span>
              </li>
          </ul>
      </div>

    <div class="order-bottom">
      <h5 class = "total">Total</h5>
      <h5 class="total tot-amount">£{{orderTotal}}</h5>
    </div>
  </section>
</template>

<script>

class BilledItem{
    constructor(amount, item){
        this.amount = amount;
        this.item = item;
    }
}

let amount = "";
export default {
    name: 'Order',
    data(){
        return{
            // the running total
            orderTotal: 0.00,
            // stacked items
            billItems: [],
            amount: amount
        }
    },

    methods:{
        orderPressed(){
            this.emitter.emit("changeToClears");
        }
    },

    mounted(){
        // called when item is selected, received from DrinksTable component
        this.emitter.on("itemPressed", (item)=>{
            // create a copy of item and push it to the list
            let copiedItem = Object.assign({}, item);
            if(amount != ""){
                 this.orderTotal += amount * copiedItem.price;
                 this.billItems[this.billItems.length - 1].item.name = copiedItem.name;
                 this.billItems[this.billItems.length - 1].item.price = copiedItem.price;
            }else{
                this.orderTotal += copiedItem.price;
                this.billItems.push(new BilledItem(1, copiedItem));
            }
            amount = "";
        })
        // called when payment is made
        this.emitter.on("paymentReceived", (payment)=>{
            // if card/cash payments are made in full or amount is bigger than asking price
            if(payment == "max" || this.orderTotal - payment <= 0){
                this.orderTotal = 0.00;
                this.billItems.length = 0;
            }else{
                // if it's a partial payment
                this.orderTotal -= payment;
                let pay = {"name": "payment", "price": payment*(-1)};
                this.billItems.push(pay);
            }
        })
        this.emitter.on("amountChosen", (number) => {
            amount += "" + number
            if(this.billItems.length > 0 &&
            this.billItems[this.billItems.length - 1].item.name==""
            && this.billItems[this.billItems.length - 1].item.price==""){
                this.billItems[this.billItems.length - 1].amount = amount;
            }else{
                this.billItems.push(new BilledItem(amount, {"name":"", "price":""}));
            }
        })
        this.emitter.on("clear", ()=>{
            this.billItems.length = 0;
            amount = "";
            this.orderTotal = 0.00;
        })
        this.emitter.on("clearQuantity", ()=>{
            if(amount != ""){
                amount = "";
                this.billItems[this.billItems.length - 1].amount = amount;
            }
        })
    },
}
</script>

<style>
.order{
    background: rgb(48, 48, 48);
    border-radius: 12px;
    box-shadow: inset -2px -3px 2px rgb(71, 71, 71), inset 3px 2px 2px rgb(200, 200, 200);
    position: relative;
    width: 100%;
    max-width: 100%;
    padding: 5px 8px;
}

.bill{
    width: 100%;
    height: 90%;
    overflow: hidden;
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

.order-text{
    font-size: 13px;
}

.order-top{
    position: relative;
    width: 100%;
    /* border: solid red; */
    display: flex;
}

.order-bottom {
    display: flex;
}

.order-bottom .tot-amount{
    margin-left: auto;
}

#serverName{
    /* border: solid; */
}

#dateTime{
    margin-left: auto;
    /* border: solid; */
}

.white{
    color: white;
}

.yellow{
    color: yellow;
}
</style>