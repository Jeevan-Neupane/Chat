import {
  FriendImage,
  FriendImageDiv,
  FriendNameDiv,
  LoadingDiv,
  SearchedFriendDiv,
  SearchedFriendOuterDiv,
} from "./style";

type Props = {
  searchedFriends: any;
  loading: boolean;
};

const SearchFriend = ({ searchedFriends, loading }: Props) => {
  if (searchedFriends?.length === 0) {
    return <SearchedFriendOuterDiv>No users found</SearchedFriendOuterDiv>;
  }
  return (
    <SearchedFriendOuterDiv>
      {loading ? <LoadingDiv>Loading..</LoadingDiv> : ""}
      {!loading &&
        searchedFriends?.map((friend: any) => {
          return (
            <SearchedFriendDiv
              to={`/chat/${friend._id}`}
              key={friend._id}
            >
              <FriendImageDiv>
                <FriendImage
                  src={friend.avatar}
                  alt='friend_photo'
                />
              </FriendImageDiv>
              <FriendNameDiv>{friend.fullName}</FriendNameDiv>
            </SearchedFriendDiv>
          );
        })}
    </SearchedFriendOuterDiv>
  );
};

export default SearchFriend;
