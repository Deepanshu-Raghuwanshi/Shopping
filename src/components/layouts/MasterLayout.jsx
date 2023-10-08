import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import Header1 from "../Header/Header1";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

const MasterLayout = () => {
  return (
    <>
      <Header />
      {/* <Header1 /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};
export default MasterLayout;
