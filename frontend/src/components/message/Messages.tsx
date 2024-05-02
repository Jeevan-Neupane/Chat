import dayjs from "dayjs";
import {
  MessageDate,
  MessageDateDiv,
  MessageDiv,
  MessagesOuterDiv,
  UserImage,
  UserImageDiv,
} from "./style";
import dateDifference from "../../utils/getDate";

type Props = {
  message: string;
  date: Date;
  image: string;
  isReceived: boolean;
};

const Messages = ({ image, message, isReceived, date }: Props) => {
  console.log(isReceived);
  return (
    <MessagesOuterDiv rightplaced={isReceived ? "yes" : "no"}>
      <MessageDateDiv>
        <MessageDate>{dateDifference(date)}</MessageDate>
      </MessageDateDiv>
      {!isReceived ? (
        <UserImageDiv>
          <UserImage
            src={image}
            alt='user'
          />
        </UserImageDiv>
      ) : (
        ""
      )}
      <MessageDiv>{message}</MessageDiv>
    </MessagesOuterDiv>
  );
};

export default Messages;
