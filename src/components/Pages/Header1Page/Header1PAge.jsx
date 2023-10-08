import { useDispatch, useSelector } from "react-redux";
import styles from "./Header1Page.module.css";
import Carousel from "react-bootstrap/Carousel";
import { Rating } from "@mui/material";
import { Button } from "react-bootstrap";
import { AddCartItem } from "../../../reducer/ShopSlice";
import { useState } from "react";
import Popup from "./../../Popup/Popup";

const Header1Page = () => {
  const dispatch = useDispatch();

  const [pop, setPop] = useState(false);

  var value = useSelector((state) => {
    return state.shop.Header1Value;
  });

  const data = useSelector((state) => {
    return state.shop[value];
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
      <div>
        <hr />
        {data && <h1>{data[0].category.toUpperCase()}</h1>}
        <hr />
        {data &&
          data.map((ele, index) => {
            return (
              <div key={ele.id} className={styles.main}>
                <div className={styles.carouselBack}>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className={styles.CarouselImage}
                        src={ele.images[0]}
                        alt="First slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className={styles.CarouselImage}
                        src={ele.images[1]}
                        alt="Second slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className={styles.CarouselImage}
                        src={ele.images[3]}
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className={styles.CarouselImage}
                        src={ele.images[4]}
                        alt="Forth slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>

                <div className={styles.heading}>
                  <div className={styles.des}>
                    <h2>
                      <span className={styles.brandName}>
                        {ele.brand.toUpperCase()}
                      </span>
                    </h2>
                    <br />
                    <br />
                    {ele.title.toUpperCase()}
                    <br />
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
                    <br />
                    <br />
                    <Rating name="read-only" value={ele.rating} readOnly />
                    <br />
                    <br />
                    <span className={styles.subHead}> In Stock :</span>
                    <span className={styles.stock}> {ele.stock}left</span>
                    <br />
                    <br />
                    <span className={styles.subHead}> Description : </span>
                    {ele.description}
                    <br />
                    <br />

                    <div>
                      <Button variant="warning" className={styles.button}>
                        <i class="bi bi-lightning-fill"></i> Buy
                      </Button>
                      <Button
                        variant="info"
                        className={styles.button}
                        onClick={() => {
                          cartClickHandler(ele.id);
                        }}
                      >
                        <i class="bi bi-cart-check-fill"></i>
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Header1Page;
