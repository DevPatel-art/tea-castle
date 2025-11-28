import React from "react";
import { useCart } from "../context/cartcontext";

function Cart() {
  const { items, subtotal, removeFromCart, updateQty, clearCart } = useCart();

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-kicker">Cart</div>
          <h2 className="section-title">Your Tea Basket</h2>

          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="card">
              <div className="cart-header-row">
                <span>Product</span>
                <span>Price</span>
                <span>Qty</span>
                <span>Total</span>
              </div>

              {items.map((item) => (
                <div className="cart-row" key={item.id}>
                  <span>{item.name}</span>

                  <span>${item.price}</span>

                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) =>
                      updateQty(item.id, parseInt(e.target.value))
                    }
                  />

                  <span>${item.qty * item.price}</span>

                  <button
                    className="btn-ghost"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="cart-summary">
                <strong>Subtotal: ${subtotal.toFixed(2)}</strong>

                <div>
                  <button className="btn btn-secondary" onClick={clearCart}>
                    Clear cart
                  </button>
                  <button className="btn">Checkout</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Cart;
