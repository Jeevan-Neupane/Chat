import { SideBarOuterDiv } from "./style";
import Friendsbar from "./Friendsbar";
import Navbar from "./NavBar";
type Props = {
  socket: any;
};

const SideBar = ({socket}: Props) => {
  return (
    <SideBarOuterDiv>
      <Navbar   />
      <Friendsbar socket={socket}/>
    </SideBarOuterDiv>
  );
};

export default SideBar;
