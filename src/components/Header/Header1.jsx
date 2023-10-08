import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Header1.module.css";
import { useDispatch } from "react-redux";
import { AddHeader1Value } from "../../reducer/ShopSlice";
import { useNavigate } from "react-router-dom";

const Header1 = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const clickHandler = (value) => {
    dispatch(AddHeader1Value(value));
    navigate("/header1page");
  };

  return (
    <>
      <div>
        <Nav className={styles.nav}>
          <NavDropdown title="Electronics" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                clickHandler("smartPhone");
              }}
            >
              Mobiles
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("laptops");
              }}
            >
              Laptops
            </NavDropdown.Item>
          </NavDropdown>



          <NavDropdown title="Wearables" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                clickHandler("tops");
              }}
            >
              Tops
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("womensDresses");
              }}
            >
              Women Dresses
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("womensShoes");
              }}
            >
              Women Shoes
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("mensShirts");
              }}
            >
              Mens Shirts
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("mensShoes");
              }}
            >
              Mens Shoes
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("mensWatches");
              }}
            >
              Mens Watches
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("womensBags");
              }}
            >
              Women Bags
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("womensJewellery");
              }}
            >
              Women Jewellery
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("sunglasses");
              }}
            >
              Sunglasses
            </NavDropdown.Item>
          </NavDropdown>



          <NavDropdown title="Perfume & Skincare" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                clickHandler("fragrances");
              }}
            >
              Perfumes
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("skincare");
              }}
            >
              Skincare
            </NavDropdown.Item>
          </NavDropdown>



          <NavDropdown title="Groceries" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                clickHandler("groceries");
              }}
            >
              Groceries
            </NavDropdown.Item>
          </NavDropdown>



          <NavDropdown title="Two Wheelers and Parts" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                clickHandler("motorcycle");
              }}
            >
              Motorcycle
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("automotive");
              }}
            >
              Automotive
            </NavDropdown.Item>
          </NavDropdown>



          <NavDropdown title="Others" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                clickHandler("furniture");
              }}
            >
              Furniture
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("homeDecoration");
              }}
            >
              Home Decoration
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                clickHandler("lighting");
              }}
            >
              Lighting
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </>
  );
};
export default Header1;
