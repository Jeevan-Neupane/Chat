import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/Sidebar";
import { Div, OutletDiv } from "../style/Container";

type Props = {};

const Layout = ({}: Props) => {
  return (
    <Div>
      <SideBar />
      <OutletDiv>
        <Outlet />
      </OutletDiv>
    </Div>
  );
};

export default Layout;
