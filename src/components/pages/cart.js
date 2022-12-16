import React from 'react'
import "../styles/cart.css";

export default function Cart(props) {

    const totalPrice = props.cartItems.reduce((hinta, item) => hinta + item.amount * item.hinta, 0);

  return (
    <>

    <div className={("main")}>
        <div className='cart-items'>
        <div className="cart-items-header">Cart Items</div>
 
        {props.cartItems.length === 0 && ( <div className="cartitems-empty">Ostoskori on tyhjä.</div>
        )} 
        <div>
            {props.cartItems.map((item) => (
                <div key={item.tuotenro} className="cartitems-list">
                  {/*  <img className='cartitems-image' width="150px" height="auto" 
                    //src={item.kuva}  // imaget sql.llästä? 
                    alt={item.tuotemalli}
                    /> */}
                    <div className="cartItems-name">{item.tuotemalli}</div>
                    <div className="cartItems-function">
                         <button
                            className="cartitems-add"
                            onClick={() => props.addToCart(item)}
                        >+</button> 
                        <button
                            className="cartitems-substract"
                            onClick={() => props.subtractFromCart(item)}
                        >-</button> 
                         <button
                            className="cartitems-remove"
                           onClick={() => props.removeFromCart(item)}
                        >Remove</button> 
                        </div>
                        <div className="cartitems-price">
                            {item.amount} x {item.hinta}€
                        </div>

                    </div>
            ))}
        </div>
        <div className="cartitems-totalprice-name">
                        Kokonaishinta
            <div className="cartitems-total-price">
                ${totalPrice}
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
