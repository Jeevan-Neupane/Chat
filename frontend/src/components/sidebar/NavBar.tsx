import { FaRegMessage } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import {
  IconsDiv,
  NavbarOuterDiv,
  NavIcon,
  UserIconDiv,
  UserImage,
  UserImageDiv,
} from "./style";
import { useSelector } from "react-redux";
type Props = {};

const Navbar = ({}: Props) => {
  const user = useSelector((state: any) => state.user.user);
  const navbarIcons = [
    { id: 1, icon: FaRegMessage, link: "/", to: "/" },
    { id: 2, icon: FaUserFriends, link: "/groups", to: "/groups" },
  ];

  const activeStyle = ({ isActive }: any) => {
    if (isActive) {
      return { color: isActive ? "teal" : " " };
    }
  };

  return (
    <NavbarOuterDiv>
      <IconsDiv>
        {navbarIcons.map((icon) => {
          return (
            <NavIcon
              style={activeStyle}
              to={icon.to}
              key={icon.id}
            >
              <icon.icon />
            </NavIcon>
          );
        })}
      </IconsDiv>
      <UserIconDiv>
        <UserImageDiv title={user?.fullName}>
          <UserImage
            src={user?.avatar}
            alt='user'
          />
        </UserImageDiv>
      </UserIconDiv>
    </NavbarOuterDiv>
  );
};

export default Navbar;
