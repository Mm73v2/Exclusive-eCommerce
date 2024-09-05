import { Outlet } from "react-router-dom";

import TopHeader from "../components/Header/TopHeader";
import MainHeader from "../components/Header/MainHeader";
import Footer from "../components/Footer/Footer";
import ToTopBtn from "../components/UI/ToTopBtn";
const MainLayout = () => {
  return (
    <>
      <ToTopBtn />
      <TopHeader />
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
