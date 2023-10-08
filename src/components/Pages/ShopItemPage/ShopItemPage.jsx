import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import styles from "./ShopItemPage.module.css";
import { Rating } from "@mui/material";
import { Button } from "react-bootstrap";
import { AddCartItem } from "../../../reducer/ShopSlice";
import React, { useState } from "react";
import Popup from "../../Popup/Popup";


const ShopItemPage = () => {
  const dispatch = useDispatch();

  const [pop, setPop] = useState(false);

  const id = useSelector((state) => {
    return state.shop.ShopItemId;
  });

  const data = useSelector((state) => {
    return state.shop.shopData && state.shop.shopData[0]?.products;
  });

  const cartClickHandler = (id) => {
    dispatch(AddCartItem(id));
    setPop(true);
  };

  const closeButtonHandler = () => {
    setPop(false);
  };

  return (
    <>
      {pop && (
        <>
          <Popup trigger={pop} closeButtonHandler={closeButtonHandler}>
            <h3 className={{ textalign: "center" }}> Item Added To Cart</h3>
          </Popup>
        </>
      )}
      {data &&
        data.map((ele, index) => {
          if (ele.id === id) {
            console.log(ele);
            return (
              <>
                <div key={ele.id} className={styles.main}>
                  <hr />
                  <hr />
                  <h2>{ele.brand.toUpperCase}</h2>
                  <hr />
                  <div className={styles.mainCarosel}>
                    <div className={styles.carouselBack}>
                      <Carousel
                        prevIcon={
                          <span className={styles.customArrow}>&#9664;</span>
                        }
                        nextIcon={
                          <span className={styles.customArrow}>&#9654;</span>
                        }
                      >
                        <Carousel.Item>
                          <img
                            className={styles.Carousel}
                            src={ele.images[0]}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className={styles.Carousel}
                            src={ele.images[1]}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className={styles.Carousel}
                            src={ele.images[3]}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className={styles.Carousel}
                            src={ele.images[4]}
                            alt="First slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <br />
                    <hr />
                    <div className={styles.des}>
                      <div>
                        <br />
                        <br />
                        <h3>{ele.title.toUpperCase()}</h3>

                        <hr />
                        <br />

                        <span className={styles.price}>$ {ele.price}</span>
                        <span className={styles.oprice}>
                          $
                          {Math.round(
                            ele.price / (1 - ele.discountPercentage / 100)
                          )}
                        </span>
                        <span className={styles.discount}>
                          {ele.discountPercentage}% OFF
                        </span>
                        <hr />
                        <br />
                        <Rating name="read-only" value={ele.rating} readOnly />
                        <hr />
                        <br />
                        <span className={styles.subHead}> In Stock :</span>
                        <span className={styles.stock}> {ele.stock}left</span>
                        <hr />
                        <span className={styles.subHead}> Description : </span>
                        {ele.description}
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <Button className={styles.button} variant="warning">
                      <i class="bi bi-lightning-fill"></i> Buy
                    </Button>
                    <Button
                      onClick={() => {
                        cartClickHandler(ele.id);
                      }}
                      variant="info"
                      className={styles.button}
                    >
                      <i class="bi bi-cart-check-fill"></i> Add To Cart
                    </Button>
                  </div>
                </div>
              </>
            );
          }
        })}
    </>
  );
};
export default ShopItemPage;
