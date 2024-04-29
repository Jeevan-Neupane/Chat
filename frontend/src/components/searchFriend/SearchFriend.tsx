import { LoadingDiv, SearchedFriendOuterDiv } from "./style";

type Props = {
  searchedFriends: any;
  loading: boolean;
};

const SearchFriend = ({ searchedFriends, loading }: Props) => {
  console.log("searched ", searchedFriends, loading);
  return (
    <SearchedFriendOuterDiv>
      {loading ? <LoadingDiv>Loading..</LoadingDiv> : ""}
    </SearchedFriendOuterDiv>
  );
};

export default SearchFriend;
