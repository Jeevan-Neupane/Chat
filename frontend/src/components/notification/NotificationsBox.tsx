import { useEffect } from "react";
import {
  NotificationBoxWrapper,
  NotificationHeader,
  NotificationSingleBox,
  NotificationTitle,
  NotificationTitleDiv,
  SenderName,
  UserProfileDiv,
  UserProfileImage,
} from "./style";

type NotificationsBoxProps = {
  notifications: any[];
};

const NotificationsBox = ({ notifications }: NotificationsBoxProps) => {
  return (
    <NotificationBoxWrapper>
      <NotificationHeader>Notifications</NotificationHeader>
      {notifications?.map((notification) => {
        return (
          <NotificationSingleBox
            to={`/chat/${notification?.chat?._id}`}
            notRead={notification?.seen}
          >
            <UserProfileDiv>
              <UserProfileImage src={notification?.sender?.avatar} />
            </UserProfileDiv>
            <NotificationTitleDiv>
              <SenderName>{notification?.sender?.fullName}</SenderName>
              <NotificationTitle>
                <span>Message: </span>
                {notification?.message}
              </NotificationTitle>
            </NotificationTitleDiv>
          </NotificationSingleBox>
        );
      })}
    </NotificationBoxWrapper>
  );
};

export default NotificationsBox;
