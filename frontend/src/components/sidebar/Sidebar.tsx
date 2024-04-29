import { SideBarOuterDiv } from "./style";
import Friendsbar from "./Friendsbar";
import Navbar from "./NavBar";
type Props = {};

const SideBar = ({}: Props) => {
  return (
    <SideBarOuterDiv>
      <Navbar />
      <Friendsbar />
    </SideBarOuterDiv>
  );
};

export default SideBar;
