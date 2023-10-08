import { Route, Routes } from "react-router-dom";
import routes from "./../routes/routes.json";
import MasterLayout from "../components/layouts/MasterLayout";
import Shop from "../components/Shop/Shop";
import Header1Page from "../components/Pages/Header1Page/Header1PAge";
import ShopItemPage from "../components/Pages/ShopItemPage/ShopItemPage";
import CartPage from "../components/Pages/CartPage/CartPage";
import LoginPage from "./../components/Pages/LoginPage/LoginPage";
import SignupPage from "../components/Pages/SignupPage/SignupPage";
const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<MasterLayout />}>
          <Route index element={<Shop />} />
          <Route path={routes.HOME} element={<Shop />} />
          <Route path={routes.HEADER1PAGE} element={<Header1Page />} />
          <Route path={routes.SHOPITEMPAGE} element={<ShopItemPage />} />
          <Route path={routes.CARTPAGE} element={<CartPage />} />
        </Route>
        <Route path={routes.LOGINPAGE} element={<LoginPage />} />
        <Route path={routes.SIGNUPPAGE} element={<SignupPage />} />
      </Routes>
    </>
  );
};
export default PageRoutes;
