import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/Checkout">{cart?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3> Delivery Adress </h3>
          </div>
          <div className="payment_adress">
            <p> {user?.email} </p>
            <p> adress </p>
            <p> city </p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3> Review items and delivery </h3>
          </div>
          <div className="payment_items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3> Payment Method</h3>
          </div>
          <div className="payment_details">{/* Stripe for the payment */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
