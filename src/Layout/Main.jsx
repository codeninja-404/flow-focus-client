import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";
import Home from "../Pages/Home/Home";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>

      <Outlet>
        <Home></Home>
      </Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
