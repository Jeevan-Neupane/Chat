import { IoIosNotifications } from "react-icons/io";
import {
  NotificationBellIcon,
  NotificationNumber,
  NotificationWrapper,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import NotificationsBox from "./NotificationsBox";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { updateNotification } from "../../store/store";

const NotificationBell = () => {
  const notifications = useSelector(
    (state: any) => state.notification.notifications
  );

  let notificationsUnseen = notifications.filter(
    (notification: any) => notification?.seen === false
  );

  const dispatch = useDispatch();

  console.log(notificationsUnseen?.length);
  const [showNotificationBox, setShowNotificationBox] = useState(false);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowNotificationBox(false);
        dispatch(updateNotification());
      }}
    >
      <NotificationWrapper
        onClick={() => {
          setShowNotificationBox(!showNotificationBox);

          if (showNotificationBox) {
            dispatch(updateNotification());
          }
        }}
      >
        <NotificationBellIcon>
          <IoIosNotifications />
          <NotificationNumber>{notificationsUnseen?.length}</NotificationNumber>
        </NotificationBellIcon>

        {showNotificationBox && (
          <NotificationsBox notifications={notifications} />
        )}
      </NotificationWrapper>
    </OutsideClickHandler>
  );
};

export default NotificationBell;
