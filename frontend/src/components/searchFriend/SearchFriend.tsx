import { useDispatch, useSelector } from "react-redux";
import {
  FriendImage,
  FriendImageDiv,
  FriendNameDiv,
  LoadingDiv,
  SearchedFriendDiv,
  SearchedFriendOuterDiv,
} from "./style";
import { useSingleChatMutation } from "../../store/api/userApi";
import { useEffect, useState } from "react";
import { addSingleChat } from "../../store/store";
import { useNavigate } from "react-router-dom";
import Spinner from "../alert/Spinner";

type Props = {
  searchedFriends: any;
  loading: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  socket: any;
};

const SearchFriend = ({
  searchedFriends,
  loading,
  setSearch,
  socket,
}: Props) => {
  if (searchedFriends?.length === 0) {
    return <SearchedFriendOuterDiv>No users found</SearchedFriendOuterDiv>;
  }
  const [friendId, setFriendId] = useState<string>("");
  const token = useSelector((state: any) => state.user.token);
  const [createSingleChat, status] = useSingleChatMutation();
  const { data, error, isLoading } = status;
  const navigate = useNavigate();
  const userId = useSelector((state: any) => state.user.user._id);

  const onFriendClick = (friendId: string) => {
    createSingleChat({ friendId, token });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.data) {
      socket.emit("chat created", { data: data.data, userId });
      dispatch(addSingleChat(data.data));
      navigate(`/chat/${data.data._id}`);
      setSearch("");
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <SearchedFriendOuterDiv>
      {loading ? (
        <LoadingDiv>
          <Spinner />
        </LoadingDiv>
      ) : (
        ""
      )}
      {!loading &&
        searchedFriends?.map((friend: any) => {
          return (
            <SearchedFriendDiv
              key={friend._id}
              onClick={() => {
                onFriendClick(friend._id);
                setFriendId(friend._id);
              }}
            >
              <FriendImageDiv>
                <FriendImage
                  src={friend.avatar}
                  alt='friend_photo'
                />
              </FriendImageDiv>
              <FriendNameDiv>{friend.fullName}</FriendNameDiv>
              {isLoading && friendId === friend._id ? (
                <LoadingDiv>
                  <Spinner />
                </LoadingDiv>
              ) : (
                ""
              )}
            </SearchedFriendDiv>
          );
        })}
    </SearchedFriendOuterDiv>
  );
};

export default SearchFriend;
