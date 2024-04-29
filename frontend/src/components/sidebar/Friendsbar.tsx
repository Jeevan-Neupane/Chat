import { useLocation } from "react-router-dom";
import { FriendsbarOuterDiv } from "./style";
import { useAllChatsQuery } from "../../store/api/userApi";
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

type Props = {};

const Friendsbar = ({}: Props) => {
  const { pathname } = useLocation();
  const [searchedFriends, setSearchedFriends] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state: any) => state.user.token);
  const { data, isLoading } = useAllChatsQuery(token);

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
  console.log(searchedFriends);
  return (
    <FriendsbarOuterDiv>
      <SearchBar
        setSearchedFriends={setSearchedFriends}
        setLoading={setLoading}
      />
      {!data && !isLoading && (
        <p style={{ color: "white" }}>No chats available</p>
      )}
      {isLoading && <p>Loading...</p>}
      {data &&
        chatToDisplay.map((chat: any) => {
          return (
            <MessageOuterDiv
              to={`/chat/${chat._id}`}
              key={chat._id}
            >
              <FriendPhotoDiv>
                <FriendPhoto
                  src={chat.chatImage}
                  alt='friend_photo'
                />
              </FriendPhotoDiv>

              <FriendNameAndMessageDiv>
                <FriendNameDiv>{chat.chatName}</FriendNameDiv>
                <FriendMessageDiv>
                  {shortenMessage(
                    chat.latestMessage[chat.latestMessage.length - 1].message,
                    20
                  )}
                </FriendMessageDiv>
              </FriendNameAndMessageDiv>
            </MessageOuterDiv>
          );
        })}
      {searchedFriends?.length > 0 && (
        <SearchFriend
          searchedFriends={searchedFriends}
          loading={loading}
        />
      )}
    </FriendsbarOuterDiv>
  );
};

export default Friendsbar;
