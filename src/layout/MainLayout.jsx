import Hero from "../pages/home/hero";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};
