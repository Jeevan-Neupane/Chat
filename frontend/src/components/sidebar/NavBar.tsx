import { FaRegMessage } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import {
  IconsDiv,
  NavbarOuterDiv,
  NavIcon,
  UserBoxOuterDiv,
  UserIconDiv,
  UserImage,
  UserImageDiv,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import LogoutDiv from "./LogoutDiv";
import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
type Props = {};
import { useLogoutUserMutation } from "../../store/api/userApi";
import { setAuth, setToken, setUser } from "../../store/store";
import SuccessAlert from "../alert/SuccessAlert";
import NotificationBell from "../notification/NotificationBell";

const Navbar = ({}: Props) => {
  const [showLogoutDiv, setShowLogoutDiv] = useState(false);
  const user = useSelector((state: any) => state.user.user);
  const navbarIcons = [
    { id: 1, icon: FaRegMessage, link: "/", to: "/" },
    { id: 2, icon: FaUserFriends, link: "/groups", to: "/groups" },
  ];
  const dispatch = useDispatch();

  const activeStyle = ({ isActive }: any) => {
    if (isActive) {
      return { color: isActive ? "teal" : " " };
    }
  };
  const token = useSelector((state: any) => state.user.token);
  const [logoutUser, status] = useLogoutUserMutation();
  const { data, isLoading } = status;

  useEffect(() => {
    if (data) {
      if (data.statusCode === 200) {
        SuccessAlert({
          title: "Success",
          message: data?.message,
        });
        dispatch(setToken(null));
        dispatch(setUser(null));
        dispatch(setAuth(false));
      }
    }
  }, [data]);

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
      <UserBoxOuterDiv>
        <NotificationBell />
        <OutsideClickHandler
          onOutsideClick={() => {
            setShowLogoutDiv(false);
          }}
        >
          <UserIconDiv
            onClick={() => {
              setShowLogoutDiv(!showLogoutDiv);
            }}
          >
            <UserImageDiv title={user?.fullName}>
              <UserImage
                src={user?.avatar}
                alt='user'
              />
            </UserImageDiv>
            {showLogoutDiv && (
              <LogoutDiv
                logoutUser={logoutUser}
                token={token}
                isLoading={isLoading}
              />
            )}
          </UserIconDiv>
        </OutsideClickHandler>
      </UserBoxOuterDiv>
    </NavbarOuterDiv>
  );
};

export default Navbar;
