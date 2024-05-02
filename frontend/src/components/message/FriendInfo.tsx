import {
  FriendInfoDiv,
  FriendInfoImage,
  FriendInfoImageDiv,
  FriendInfoName,
  FriendInfoOuterDiv,
  FriendStatus,
} from "./style";

type Props = {
  image: string;
  name: string;
  status: string;
};

const FriendInfo = ({ image, name, status }: Props) => {
  return (
    <FriendInfoOuterDiv>
      <FriendInfoImageDiv>
        <FriendInfoImage
          src={image}
          alt='user'
        />
      </FriendInfoImageDiv>
      <FriendInfoDiv>
        <FriendInfoName>{name}</FriendInfoName>
        <FriendStatus>{status}</FriendStatus>
      </FriendInfoDiv>
    </FriendInfoOuterDiv>
  );
};

export default FriendInfo;
