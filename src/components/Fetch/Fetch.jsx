import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addsmartPhones,
  addShopData,
  addlighting,
  addmotorcycle,
  addautomotive,
  addsunglasses,
  addwomensJewellery,
  addwomensBags,
  addwomensWatches,
  addmensWatches,
  addmensShoes,
  addmensShirts,
  addwomensShoes,
  addwomensDresses,
  addtops,
  addfurniture,
  addhomeDecoration,
  addgroceries,
  addskincare,
  addfragrances,
  addlaptops,
} from "../../reducer/ShopSlice";

const Fetch = () => {
  const dispatch = useDispatch();

  var id = [];

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        if (data.products.length != 0) {
          dispatch(addShopData(data));

          data.products.filter((ele, index) => {
            if (
              ele.category === "smartphones" &&
              id.includes(ele.id) == false
              // !id.includes(ele.id)
            ) {
              id.push(ele.id);
              dispatch(addsmartPhones(ele));
            } else if (
              ele.category === "laptops" &&
              id.includes(ele.id) == false
              // !id.includes(ele.id)
            ) {
              id.push(ele.id);
              dispatch(addlaptops(ele));
            }
            if (ele.category === "fragrances" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addfragrances(ele));
            }
            if (ele.category === "skincare" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addskincare(ele));
            }
            if (ele.category === "groceries" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addgroceries(ele));
            }
            if (
              ele.category === "home-decoration" &&
              id.includes(ele.id) == false
            ) {
              id.push(ele.id);
              dispatch(addhomeDecoration(ele));
            }
            if (ele.category === "furniture" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addfurniture(ele));
            }
            if (ele.category === "tops" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addtops(ele));
            }
            if (
              ele.category === "womens-dresses" &&
              id.includes(ele.id) == false
            ) {
              id.push(ele.id);
              dispatch(addwomensDresses(ele));
            }
            if (
              ele.category === "womens-shoes" &&
              id.includes(ele.id) == false
            ) {
              id.push(ele.id);
              dispatch(addwomensShoes(ele));
            }
            if (
              ele.category === "mens-shirts" &&
              id.includes(ele.id) == false
            ) {
              id.push(ele.id);
              dispatch(addmensShirts(ele));
            }
            if (ele.category === "mens-shoes" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addmensShoes(ele));
            }
            if (
              ele.category === "mens-watches" &&
              id.includes(ele.id) == false
            ) {
              id.push(ele.id);
              dispatch(addmensWatches(ele));
            }
            if (
              ele.category === "womens-watches" &&
              id.includes(ele.id) == false
            ) {
              id.push(ele.id);
              dispatch(addwomensWatches(ele));
            }
            if (
              ele.category === "womens-bags" &&
              id.includes(ele.id) == false
            ) {
              id.push(ele.id);
              dispatch(addwomensBags(ele));
            }
            if (
              ele.category === "womens-jewellery" &&
              id.includes(ele.id) == false
            ) {
              id.push(ele.id);
              dispatch(addwomensJewellery(ele));
            }
            if (ele.category === "sunglasses" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addsunglasses(ele));
            }
            if (ele.category === "automotive" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addautomotive(ele));
            }
            if (ele.category === "motorcycle" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addmotorcycle(ele));
            }
            if (ele.category === "lighting" && id.includes(ele.id) == false) {
              id.push(ele.id);
              dispatch(addlighting(ele));
            }
          });
        }
      });
  }, []);
  console.log(id, "outid");
  return <></>;
};
export default Fetch;
