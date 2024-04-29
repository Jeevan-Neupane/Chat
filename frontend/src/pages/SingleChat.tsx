import { useParams } from "react-router-dom";
import { useSingleChatMutation } from "../store/api/userApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";

type Props = {};

const SingleChat = ({}: Props) => {
  const token = useSelector((state: any) => state.user.token);
  const { chatId } = useParams();

  const [getSingleChat, status] = useSingleChatMutation();

  const { data, isLoading, error } = status;

  useEffect(() => {
    if (token && chatId) {
      getSingleChat({ token, chatId });
    }
  }, [token, chatId]);

  console.log(data, isLoading, error);

  return <div>SingleChat</div>;
};

export default SingleChat;
