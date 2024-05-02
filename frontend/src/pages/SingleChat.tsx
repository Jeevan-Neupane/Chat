import { useParams } from "react-router-dom";
import { useGetAllChatMessagesQuery } from "../store/api/userApi";
import { useDispatch, useSelector } from "react-redux";
import Chatinput from "../components/chatinput/Chatinput";
import { SingleChatLoadingDiv, SingleChatMain } from "../style/Container";
import { useEffect } from "react";
import { addAllMessages } from "../store/store";
import Spinner from "../components/alert/Spinner";
import ErrorAlert from "../components/alert/ErrorAlert";
import AllMessages from "../components/message/AllMessages";

type Props = {};

const SingleChat = ({}: Props) => {
  const token = useSelector((state: any) => state.user.token);
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetAllChatMessagesQuery({
    chatId,
    token,
  });

  useEffect(() => {
    if (data) {
      dispatch(addAllMessages(data.data));
    }

    if (error) {
      ErrorAlert({
        title: "Error",
        message: "Error fetching messages",
      });
    }
  }, [data, error]);

  return (
    <SingleChatMain>
      {isFetching ? (
        <SingleChatLoadingDiv>
          <Spinner />
        </SingleChatLoadingDiv>
      ) : (
        <AllMessages />
      )}
      <Chatinput />
    </SingleChatMain>
  );
};

export default SingleChat;
