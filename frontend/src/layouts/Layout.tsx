import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/Sidebar";
import { Div, OutletDiv } from "../style/Container";

type Props = {
  socket: any;
};

const Layout = ({socket}: Props) => {
  return (
    <Div>
      <SideBar socket={socket}/>
      <OutletDiv>
        <Outlet />
      </OutletDiv>
    </Div>
  );
};

export default Layout;
