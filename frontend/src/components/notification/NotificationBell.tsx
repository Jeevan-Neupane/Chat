import { IoIosNotifications } from "react-icons/io";
import {
  NotificationBellIcon,
  NotificationNumber,
  NotificationWrapper,
} from "./style";
import { useSelector } from "react-redux";
import NotificationsBox from "./NotificationsBox";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const NotificationBell = () => {
  const notifications = useSelector(
    (state: any) => state.notification.notifications
  );
  const [showNotificationBox, setShowNotificationBox] = useState(false);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowNotificationBox(false);
      }}
    >
      <NotificationWrapper
        onClick={() => {
          setShowNotificationBox(!showNotificationBox);
        }}
      >
        <NotificationBellIcon>
          <IoIosNotifications />
          <NotificationNumber>{notifications?.length}</NotificationNumber>
        </NotificationBellIcon>

        {showNotificationBox && (
          <NotificationsBox notifications={notifications} />
        )}
      </NotificationWrapper>
    </OutsideClickHandler>
  );
};

export default NotificationBell;
