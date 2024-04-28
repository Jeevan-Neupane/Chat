import { Outlet } from "react-router-dom";
import Navbar from "../components/sidebar/Sidebar";
import { Div, OutletDiv } from "../style/Container";

type Props = {};

const Layout = ({}: Props) => {
  return (
    <Div>
      <Navbar />
      <OutletDiv>
        <Outlet />
      </OutletDiv>
    </Div>
  );
};

export default Layout;
