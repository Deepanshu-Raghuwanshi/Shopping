import { useDispatch, useSelector } from "react-redux";
import styles from "./CartItem.module.css";
// import { Button } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  addQuantity,
  cartQuantityIncrement,
  cartQuantitydeccrement,
  emptyCart,
} from "./../../reducer/ShopSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const id = useSelector((state) => {
    return state.shop.cartId;
  });

  const data = useSelector((state) => {
    return state.shop.shopData && state.shop.shopData[0]?.products;
  });

  useEffect(() => {
    id.forEach((ele) => {
      const items = data.find((item) => item.id === ele);
      if (items) {
        dispatch(addQuantity({ ...items, quantity: 1 }));
      }
    });
  }, []);

  const items11 = useSelector((state) => {
    return state.shop.cartItems;
  });
  let totalPrice = 0;
  let originalPrice = 0;
  items11.map((ele) => {
    totalPrice += ele.price * ele.quantity;
    originalPrice += Math.round(ele.price / (1 - ele.discountPercentage / 100));
  });

  const emptyCartHandler = (id) => {
    dispatch(emptyCart(id));
  };

  const incrementHandler = (id) => {
    dispatch(cartQuantityIncrement(id));
  };
  const decrementHandler = (id) => {
    dispatch(cartQuantitydeccrement(id));
  };

  const placeOrderHandler = () => {
    navigate("/LoginPage");
  };

  return (
    <>
      <hr />
      {items11.length == 0 && (
        <div className={styles.emptyCart}>
          <h1>Your Cart Is Empty</h1>
        </div>
      )}

      {items11.length != 0 && (
        <div className={styles.bill}>
          <h1>Price Details</h1>
          <hr />
          Price ({items11.length}items) = {totalPrice}$
          <br />
          <br />
          {/* <hr />
     Discount ={originalPrice - totalPrice} $ */}
          Deliver Charges = Free
          <br />
          <br />
          <b>Total Amount = {totalPrice}$</b>
          <hr />
          <Button onClick={placeOrderHandler} variant="info">
            Place Order
          </Button>
        </div>
      )}

      {items11 &&
        items11.map((ele, index) => {
          console.log(ele);

          return (
            <>
              <hr />
              <div key={ele.id} className={styles.cartItem}>
                <div className={styles.image1}>
                  <img className={styles.image} src={ele.images[0]} />
                  <br />
                  <div>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        onClick={() => {
                          incrementHandler(ele.id);
                        }}
                        variant="secondary"
                      >
                        +
                      </Button>
                      <Button variant="secondary">{ele.quantity}</Button>
                      <Button
                        disabled={ele.quantity <= 1}
                        onClick={() => {
                          decrementHandler(ele.id);
                        }}
                        variant="secondary"
                      >
                        -
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>

                <div>
                  {<b>{ele.title}</b>}
                  <br />
                  <br />
                  {ele.brand}
                  <br />
                  <br />
                  <span className={styles.price}>$ {ele.price}</span>
                  <span className={styles.oprice}>
                    $
                    {Math.round(ele.price / (1 - ele.discountPercentage / 100))}
                  </span>
                  <span className={styles.discount}>
                    {ele.discountPercentage}% OFF
                  </span>
                  <br />
                  <br />
                  <h5>Total Item Amount = {ele.price * ele.quantity} $</h5>
                </div>
              </div>
              <Button
                variant="danger"
                onClick={() => {
                  emptyCartHandler(ele.id);
                }}
              >
                Remove
              </Button>

              <hr />
            </>
          );
        })}
    </>
  );
};
export default CartItem;
