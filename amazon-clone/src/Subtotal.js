import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={cart
          ?.map((item) => item.price)
          ?.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items):
              <strong> {value} </strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button> Proceed to Checkout </button>
    </div>
  );
}

export default Subtotal;
