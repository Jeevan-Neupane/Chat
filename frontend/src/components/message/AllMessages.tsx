import { useSelector } from "react-redux";
import { AllMessagesInnerDiv, AllMessagesOuterDiv } from "./style";
import Messages from "./Messages";
import isReceiver from "../../utils/isReceiver";
import FriendInfo from "./FriendInfo";
import Chatinput from "../chatinput/Chatinput";
import { useEffect, useRef } from "react";

type Props = {
  socket: any;
};

const AllMessages = ({ socket }: Props) => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const messages = useSelector((state: any) => state.messages.messages);
  const userId = useSelector((state: any) => state.user.user._id);

  const nextFriend = messages[0]?.chat?.chatUsers?.filter(
    (user: any) => user._id !== userId
  );

  let nextFriendInfo: any;

  if (nextFriend) {
    nextFriendInfo = nextFriend[0];
  }

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  }, [messages]);

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
      </AllMessagesInnerDiv>
      <Chatinput socket={socket} />
    </AllMessagesOuterDiv>
  );
};

export default AllMessages;
