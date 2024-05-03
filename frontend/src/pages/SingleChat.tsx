import { useParams } from "react-router-dom";
import { useGetAllChatMessagesQuery } from "../store/api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { SingleChatLoadingDiv, SingleChatMain } from "../style/Container";
import { useEffect } from "react";
import { addAllMessages } from "../store/store";
import Spinner from "../components/alert/Spinner";
import ErrorAlert from "../components/alert/ErrorAlert";
import AllMessages from "../components/message/AllMessages";
import io from "socket.io-client";
import { ENDPOINT } from "../utils/constant";
let socket: any;

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
    socket = io(ENDPOINT);
    socket.emit("join chat", chatId);
  });

  useEffect(() => {
    socket.on("message received", (newmessage: any) => {
      console.log("message received", newmessage);
    });
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
    </SingleChatMain>
  );
};

export default SingleChat;
