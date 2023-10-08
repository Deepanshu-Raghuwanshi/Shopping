// import { useDispatch, useSelector } from "react-redux";
// import styles from "./CartPage.module.css";
// import { Button } from "react-bootstrap";
// import { emptyCart } from "../../../reducer/ShopSlice";

import CartItem from "../../cartItems/CartItems";

const CartPage = () => {
  // const dispatch = useDispatch();

  // const id = useSelector((state) => {
  //   return state.shop.cartId;
  // });

  // const data = useSelector((state) => {
  //   return state.shop.shopData && state.shop.shopData[0]?.products;
  // });

  // console.log(data);
  // console.log(id);
  // const emptyCartHandler = () => {
  //   dispatch(emptyCart());
  //   console.log(id);
  // };

  return (
    <>
      <CartItem />
      {/* {data &&
        id.map((ele, index) => {
          console.log(ele);
          const items = data.find((item, index) => item.id == ele);
          if (items) {
            console.log(items, "jj");
            return (
              <>
                <div className={styles.cartItem}>
                  <div className={styles.image}>
                    <img className={styles.image} src={items.images[0]} />

                    <button>+</button>
                  </div>

                  <div>
                    {items.title}
                    <br />
                    <br />
                    {items.brand}
                    <br />
                    <br />
                    <span className={styles.price}>$ {items.price}</span>
                    <span className={styles.oprice}>
                      $
                      {Math.round(
                        items.price / (1 - items.discountPercentage / 100)
                      )}
                    </span>
                    <span className={styles.discount}>
                      {items.discountPercentage}% OFF
                    </span>
                  </div>
                </div>
                <hr />
              </>
            );
          }
        })}
      <div>
        <h1>Cart</h1>
      </div>
      <Button onClick={emptyCartHandler}>Empty Cart</Button> */}
    </>
  );
};
export default CartPage;
