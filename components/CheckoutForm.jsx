

 
 function CheckoutForm ( {children, className}){
   
 
    const details={
        id:"from dashboard",
        quanity:2,
        price:"from dashboard"
    }

  
    return (
        <form action='/api/checkout' method="POST" >
            <input type="hidden" name="id" value="from dashboard"  />
            <input type="hidden" name="price" value="priceId" />
            <button type="submit" id="checkout-button">Checkout</button>
        </form>
    )
 }



 export {CheckoutForm}
 