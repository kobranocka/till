<template>
    <section class="payments">
        <button>Cash</button>
        <button>Card</button>
        <button>£10</button>
        <button>£20</button>
    </section>
</template>

<script>
export default {
    name: 'PaymentButtons',
    data(){
        return{
  
    };
    }
}
</script>

<style scoped>
    .payments{
    background: lightpink;
    width: 100%;
    min-width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    }

    button{
        margin: 0.5rem;
    }
</style>