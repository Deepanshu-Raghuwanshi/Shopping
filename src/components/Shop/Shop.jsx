import { useDispatch, useSelector } from "react-redux";
import styles from "./Shop.module.css";
import { Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Carousels from "../Carousel/Carousels";
import { AddShopItemId } from "../../reducer/ShopSlice";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const smartPhone = useSelector((state) => {
    return state.shop.smartPhone;
  });

  const laptop = useSelector((state) => {
    return state.shop.laptops;
  });

  const fragrances = useSelector((state) => {
    return state.shop.fragrances;
  });

  const skincare = useSelector((state) => {
    return state.shop.skincare;
  });

  const groceries = useSelector((state) => {
       return state.shop.groceries;
  });

  const homeDecoration = useSelector((state) => {
    return state.shop.homeDecoration;
  });

  const furniture = useSelector((state) => {
    return state.shop.furniture;
  });

  const tops = useSelector((state) => {
    return state.shop.tops;
  });

  const womensDresses = useSelector((state) => {
    return state.shop.womensDresses;
  });

  const womensShoes = useSelector((state) => {
    return state.shop.womensShoes;
  });

  const mensShirts = useSelector((state) => {
    return state.shop.mensShirts;
  });

  const mensShoes = useSelector((state) => {
    return state.shop.mensShoes;
  });

  const mensWatches = useSelector((state) => {
    return state.shop.mensWatches;
  });

  const womensWatches = useSelector((state) => {
    return state.shop.womensWatches;
  });

  const womensBags = useSelector((state) => {
    return state.shop.womensBags;
  });
  const womensJewellery = useSelector((state) => {
    return state.shop.womensJewellery;
  });

  const sunglasses = useSelector((state) => {
    return state.shop.sunglasses;
  });

  const automotive = useSelector((state) => {
    return state.shop.automotive;
  });

  const motorcycle = useSelector((state) => {
    return state.shop.motorcycle;
  });

  const lighting = useSelector((state) => {
    return state.shop.lighting;
  });

  const itemClickHandler = (id) => {
    dispatch(AddShopItemId(id));
    navigate("/shopitempage");
  };

  return (
    <>
      <Carousels />
      <div>
        <hr />
        <h3>Mobiles</h3>
        <hr />
      </div>
      {smartPhone &&
        smartPhone.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className={styles.main}
              onClick={() => {
                itemClickHandler(ele.id);
              }}
            >
              <div className={styles.item}>
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}

      <div>
        <br />
        <hr />
        <h3>Laptops</h3>
        <hr />
      </div>
      {laptop &&
        laptop.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className={styles.main}
              onClick={() => {
                itemClickHandler(ele.id);
              }}
            >
              <div className={styles.item}>
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Perfumes</h3>
        <hr />
      </div>
      {fragrances &&
        fragrances.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className={styles.main}
              onClick={() => {
                itemClickHandler(ele.id);
              }}
            >
              <div key={index} className={styles.item}>
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Skincare</h3>
        <hr />
      </div>
      {skincare &&
        skincare.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className={styles.main}
              onClick={() => {
                itemClickHandler(ele.id);
              }}
            >
              <div key={index} className={styles.item}>
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Groceries</h3>
        <hr />
      </div>
      {groceries &&
        groceries.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className={styles.main}
              onClick={() => {
                itemClickHandler(ele.id);
              }}
            >
              <div key={index} className={styles.item}>
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Home Decoration</h3>
        <hr />
      </div>
      {homeDecoration &&
        homeDecoration.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className={styles.main}
              onClick={() => {
                itemClickHandler(ele.id);
              }}
            >
              <div key={index} className={styles.item}>
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Furniture</h3>
        <hr />
      </div>
      {furniture &&
        furniture.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className={styles.main}
              onClick={() => {
                itemClickHandler(ele.id);
              }}
            >
              <div key={index} className={styles.item}>
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Tops</h3>
        <hr />
      </div>
      {tops &&
        tops.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className={styles.main}
              onClick={() => {
                itemClickHandler(ele.id);
              }}
            >
              <div key={index} className={styles.item}>
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Womens Dresses</h3>
        <hr />
      </div>
      {womensDresses &&
        womensDresses.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Womens Shoes</h3>
        <hr />
      </div>
      {womensShoes &&
        womensShoes.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Mens Shirts</h3>
        <hr />
      </div>
      {mensShirts &&
        mensShirts.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Mens Shoes</h3>
        <hr />
      </div>
      {mensShoes &&
        mensShoes.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Mens Watches</h3>
        <hr />
      </div>
      {mensWatches &&
        mensWatches.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Womens Watches</h3>
        <hr />
      </div>
      {womensWatches &&
        womensWatches.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Womens Bags</h3>
        <hr />
      </div>
      {womensBags &&
        womensBags.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Womens Jewellery</h3>
        <hr />
      </div>
      {womensJewellery &&
        womensJewellery.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Sunglasses</h3>
        <hr />
      </div>
      {sunglasses &&
        sunglasses.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Automotive</h3>
        <hr />
      </div>
      {automotive &&
        automotive.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Motorcycle</h3>
        <hr />
      </div>
      {motorcycle &&
        motorcycle.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> : {ele.price} $
                <hr />
                <b>Rating</b> : {ele.rating} / 5
                <hr />
                <b>Stock</b> : {ele.stock}
              </div>
            </div>
          );
        })}
      <div>
        <br />
        <hr />
        <h3>Lighting</h3>
        <hr />
      </div>
      {lighting &&
        lighting.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.main}>
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  itemClickHandler(ele.id);
                }}
              >
                <b>{ele.title}</b>
                <br />
                <img src={ele.images[0]} />
                <hr />
                <b>Price</b> :{ele.price} $
                <hr />
                <b>Rating</b> :{ele.rating} / 5
                <hr />
                <b>Stock</b> :{ele.stock}
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Shop;
