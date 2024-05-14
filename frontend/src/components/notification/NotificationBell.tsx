import { IoIosNotifications } from "react-icons/io";
import {
  NotificationBellIcon,
  NotificationNumber,
  NotificationWrapper,
} from "./style";

const NotificationBell = () => {
  return (
    <NotificationWrapper>
      <NotificationBellIcon>
        <IoIosNotifications />
      <NotificationNumber>5</NotificationNumber>
      </NotificationBellIcon>
    </NotificationWrapper>
  );
};

export default NotificationBell;
