import { useLocation } from "react-router-dom";
import { FriendsbarOuterDiv } from "./style";
import { useSelector } from "react-redux";
import {
  FriendMessageDiv,
  FriendNameAndMessageDiv,
  FriendNameDiv,
  FriendPhoto,
  FriendPhotoDiv,
  MessageOuterDiv,
} from "./friendstyle";
import shortenMessage from "../../utils/shortenMessage";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";
import SearchFriend from "../searchFriend/SearchFriend";
import getFriendName from "../../utils/getFreindName";
import getFriendPhoto from "../../utils/getFriendPhoto";

type Props = {};

const Friendsbar = ({}: Props) => {
  const { pathname } = useLocation();
  const [searchedFriends, setSearchedFriends] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state: any) => state.user.token);
  const userId = useSelector((state: any) => state?.user?.user?._id) || "";
  console.log(userId);
  const data = useSelector((state: any) => state.user.allChats);
  console.log(data);

  let chatToDisplay;

  if (data) {
    chatToDisplay = data.data.filter((item: any) => {
      return item.isGroupChat === false;
    });
  }

  if (data && pathname === "/groups") {
    chatToDisplay = data.data.filter((item: any) => {
      return item.isGroupChat === true;
    });
  }
  return (
    <FriendsbarOuterDiv>
      <SearchBar
        setSearchedFriends={setSearchedFriends}
        setLoading={setLoading}
      />
      {!data && <p style={{ color: "white" }}>No chats available</p>}

      {data &&
        chatToDisplay.map((chat: any) => {
          return (
            <MessageOuterDiv
              to={`/chat/${chat._id}`}
              key={chat._id}
            >
              <FriendPhotoDiv>
                <FriendPhoto
                  src={getFriendPhoto(userId, chat)}
                  alt='friend_photo'
                />
              </FriendPhotoDiv>

              <FriendNameAndMessageDiv>
                <FriendNameDiv>{getFriendName(userId, chat)}</FriendNameDiv>
                <FriendMessageDiv>
                  {shortenMessage(
                    chat?.latestMessage[chat?.latestMessage?.length - 1]
                      ?.message || "Click to start a conversation",
                    20
                  )}
                </FriendMessageDiv>
              </FriendNameAndMessageDiv>
            </MessageOuterDiv>
          );
        })}
      {(searchedFriends || loading) && (
        <SearchFriend
          searchedFriends={searchedFriends}
          loading={loading}
        />
      )}
    </FriendsbarOuterDiv>
  );
};

export default Friendsbar;
