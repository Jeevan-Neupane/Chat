import { FaRegMessage } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { SideBarOuterDiv } from "./style";
type Props = {};

const Navbar = ({}: Props) => {
  const navbarIcons = [
    { id: 1, icon: FaRegMessage, link: "/" },
    { id: 2, icon: FaUserFriends, link: "/groups" },
  ];

  return <SideBarOuterDiv>
    Sidebar
  </SideBarOuterDiv>;
};

export default Navbar;
