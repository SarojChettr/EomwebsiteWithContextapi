import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();
  // const setDecrease = () => {
  //   // amount > 1 ? SetAmount(amount - 1) : SetAmount(1); //jaba samma amount greater than 1 xa decrease amount by 1 else set 1
  // };

  // const setIncrease = () => {
  //   // amount < stock ? SetAmount(amount + 1) : SetAmount(stock);
  // };
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* quantity */}

      <div>
        <CartAmountToggle
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrease(id)}
        />
      </div>
      {/* subtotal */}

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
