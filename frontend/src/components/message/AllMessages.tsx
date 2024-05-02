import { useSelector } from "react-redux";
import { AllMessagesOuterDiv } from "./style";
import Messages from "./Messages";
import isReceiver from "../../utils/isReceiver";
import FriendInfo from "./FriendInfo";

const AllMessages = () => {
  const messages = useSelector((state: any) => state.messages.messages);
  const userId = useSelector((state: any) => state.user.user._id);
  const avatar = useSelector((state: any) => state.user.user.avatar);

  const nextFriend = messages[0]?.chat?.chatUsers?.filter(
    (user: any) => user._id !== userId
  );

  let nextFriendInfo:any;

  if (nextFriend) {
    nextFriendInfo = nextFriend[0];
  }

  return (
    <AllMessagesOuterDiv>
      <FriendInfo
        image={nextFriendInfo?.avatar}
        name={nextFriendInfo.fullName}
        status='active'
      />
      {messages.map((message: any) => {
        return (
          <Messages
            key={message._id}
            message={message.message}
            date={message.createdAt}
            image={nextFriendInfo?.avatar || avatar}
            isReceived={isReceiver(message.sender._id, userId)}
          />
        );
      })}
    </AllMessagesOuterDiv>
  );
};

export default AllMessages;
