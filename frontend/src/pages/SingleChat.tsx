import { useParams } from "react-router-dom";
import { useGetAllChatMessagesQuery } from "../store/api/userApi";
import { useSelector } from "react-redux";
import Chatinput from "../components/chatinput/Chatinput";
import { SingleChatMain } from "../style/Container";

type Props = {};

const SingleChat = ({}: Props) => {
  const token = useSelector((state: any) => state.user.token);
  const { chatId } = useParams();

  const { data, isLoading, error } = useGetAllChatMessagesQuery({
    chatId,
    token,
  });

  console.log(data, isLoading, error);
  return (
    <SingleChatMain>
      <Chatinput />
    </SingleChatMain>
  );
};

export default SingleChat;
