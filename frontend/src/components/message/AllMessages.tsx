import { useDispatch, useSelector } from "react-redux";
import { AllMessagesInnerDiv, AllMessagesOuterDiv } from "./style";
import Messages from "./Messages";
import isReceiver from "../../utils/isReceiver";
import FriendInfo from "./FriendInfo";
import Chatinput from "../chatinput/Chatinput";
import { useEffect, useRef } from "react";
import { useUpdateMessageViewMutation } from "../../store/api/userApi";
import {
  addUpdatedRecentMessage,
  updateRecentMessage,
} from "../../store/store";
import MessageSeen from "../messageSeen/MessageSeen";

type Props = {
  socket: any;
  chatId: string | undefined;
};

const AllMessages = ({ socket, chatId }: Props) => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const messages = useSelector((state: any) => state.messages.messages);
  const userId = useSelector((state: any) => state.user.user._id);
  const latestMessage = useSelector(
    (state: any) => state.messages.recentMessage
  );
  const token = useSelector((state: any) => state.user.token);
  const [updateMessage, status] = useUpdateMessageViewMutation();
  const dispatch = useDispatch();

  const { data } = status;
  const nextFriend = messages[0]?.chat?.chatUsers?.filter(
    (user: any) => user._id !== userId
  );

  let nextFriendInfo: any;

  if (nextFriend) {
    nextFriendInfo = nextFriend[0];
  }

  useEffect(() => {
    if (
      latestMessage &&
      latestMessage?.sender?._id !== userId &&
      latestMessage?.readBy?.length === 0
    ) {
      updateMessage({ messageId: latestMessage._id, token });
    }
  }, [latestMessage]);

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (data) {
      socket.emit("message read", data.data);
      dispatch(addUpdatedRecentMessage(data.data));
      dispatch(updateRecentMessage(data.data));
    }
  }, [data]);
  const seenBy = latestMessage?.readBy;
  console.log("seenBy", seenBy);
  console.log("latestMessage", latestMessage);
  let latestMessageChatId = latestMessage?.chat?._id;

  return (
    <AllMessagesOuterDiv>
      <AllMessagesInnerDiv ref={scrollableDivRef}>
        <FriendInfo
          image={nextFriendInfo?.avatar}
          name={nextFriendInfo?.fullName}
          status='active'
        />
        {messages.map((message: any) => {
          return (
            <Messages
              key={message._id}
              message={message.message}
              date={message.createdAt}
              isReceived={isReceiver(message.sender._id, userId)}
            />
          );
        })}
        {seenBy?.length > 0 &&
          chatId === latestMessageChatId &&
          seenBy?.map((user: any) => {
            if (user._id !== userId) {
              return (
                <MessageSeen
                  key={user._id}
                  image={user.avatar}
                />
              );
            }
          })}
      </AllMessagesInnerDiv>
      <Chatinput socket={socket} />
    </AllMessagesOuterDiv>
  );
};

export default AllMessages;
