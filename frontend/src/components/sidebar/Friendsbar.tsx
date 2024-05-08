import { useLocation, useParams } from "react-router-dom";
import {
  FriendMessage,
  FriendsbarOuterDiv,
  FriendSeenDiv,
  FriendSeenImage,
} from "./style";
import { useSelector } from "react-redux";
import {
  EmptyMessageDiv,
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
  const [search, setSearch] = useState<string>("");
  const { pathname } = useLocation();
  const [searchedFriends, setSearchedFriends] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const userId = useSelector((state: any) => state?.user?.user?._id) || "";
  const data = useSelector((state: any) => state.chats.allChats);

  const { chatId } = useParams();

  let chatToDisplay;

  if (data) {
    chatToDisplay = data?.filter((item: any) => {
      return item.isGroupChat === false;
    });
  }

  if (data && pathname === "/groups") {
    chatToDisplay = data?.filter((item: any) => {
      return item.isGroupChat === true;
    });
  }

  return (
    <FriendsbarOuterDiv>
      <SearchBar
        setSearchedFriends={setSearchedFriends}
        setLoading={setLoading}
        setSearch={setSearch}
        search={search}
      />
      {data.length === 0 && (
        <EmptyMessageDiv style={{ color: "white" }}>
          Search for friends to start a conversation.
        </EmptyMessageDiv>
      )}

      {data &&
        chatToDisplay?.map((chat: any) => {
          return (
            <MessageOuterDiv
              to={`/chat/${chat._id}`}
              activestyle={chat._id === chatId ? "yes" : "no"}
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
                  <FriendMessage>
                    {shortenMessage(
                      chat?.latestMessage[chat?.latestMessage?.length - 1]
                        ?.message || "Click to start a conversation",
                      20
                    )}
                  </FriendMessage>
                  {chat?.latestMessage[0]?.readBy?.length > 0 &&
                    chat?.latestMessage[0]?.readBy?.map((item: any) => {
                      if (item._id !== userId) {
                        return (
                          <FriendSeenDiv key={item.fullName}>
                            <FriendSeenImage
                              src={item.avatar}
                              alt='friend'
                            />
                          </FriendSeenDiv>
                        );
                      }
                    })}
                </FriendMessageDiv>
              </FriendNameAndMessageDiv>
            </MessageOuterDiv>
          );
        })}
      {(searchedFriends || loading) && (
        <SearchFriend
          searchedFriends={searchedFriends}
          loading={loading}
          setSearch={setSearch}
        />
      )}
    </FriendsbarOuterDiv>
  );
};

export default Friendsbar;
