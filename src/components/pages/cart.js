import React from 'react'
import "../styles/cart.css";

export default function Cart(props) {

    const totalPrice = props.cartItems.reduce((hinta, item) => hinta + item.amount * item.hinta, 0);

  return (
    <>

    <div className={("cart-Items", "main")}>
        <div className="cart-items-header">Cart Items</div>
 
        {props.cartItems.length === 0 && ( <div className="cartItems-empty">Ostoskori on tyhjä.</div>
        )} 
        <div>
            {props.cartItems.map((item) => (
                <div key={item.tuotenro} className="cartitems-list">
                    <img className='cartitems-image'
                    src={item.kuva}  // imaget sql.llästä?
                    alt={item.tuotemalli}
                    />
                    <div className="cartItems-name">{item.tuotemalli}</div>
                    <div className="cartItems-function">
                         <button
                            className="cartItems-add"
                            onClick={() => props.addToCart(item)}
                        >+</button> 
                        <button
                            className="cartItems-substract"
                            onClick={() => props.subtractFromCart(item)}
                        >-</button> 
                         <button
                            className="cartItems-remove"
                           onClick={() => props.removeFromCart(item)}
                        >Remove</button> 
                        </div>
                        <div className="cartItems-price">
                            {item.amount} x {item.hinta}€
                        </div>

                    </div>
            ))}
        </div>
        <div className="cartItems-totalprice-name">
                        Kokonaishinta
            <div className="cartItems-total-price">
                ${totalPrice}
            </div>
        </div>
    </div>
    </>
  )
}
