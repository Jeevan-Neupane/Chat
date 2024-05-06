import {
  MessageDate,
  MessageDateDiv,
  MessageDiv,
  MessageInnerDiv,
  MessagesOuterDiv,
} from "./style";
import dateDifference from "../../utils/getDate";

type Props = {
  message: string;
  date: Date;

  isReceived: boolean;
};

const Messages = ({ message, isReceived, date }: Props) => {

  
  return (
    <MessagesOuterDiv rightplaced={isReceived ? "yes" : "no"}>
      <MessageInnerDiv>
        <MessageDateDiv>
          <MessageDate>{dateDifference(date)}</MessageDate>
        </MessageDateDiv>

        <MessageDiv colortype={isReceived ? "yes" : "no"}>{message}</MessageDiv>
      </MessageInnerDiv>
    </MessagesOuterDiv>
  );
};

export default Messages;
