import { useParams } from "react-router-dom";
import { useGetAllChatMessagesQuery } from "../store/api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { SingleChatLoadingDiv, SingleChatMain } from "../style/Container";
import { useEffect, useState } from "react";
import {
  addAllMessages,
  addMessage,
  addNotification,
  addRecentMessage,
  upadateSeenMessage,
  updateRecentMessage,
} from "../store/store";
import Spinner from "../components/alert/Spinner";
import ErrorAlert from "../components/alert/ErrorAlert";
import AllMessages from "../components/message/AllMessages";
import io from "socket.io-client";
import { ENDPOINT } from "../utils/constant";
import { setSocketConnected } from "../store/slice/socketSlice";
import { addUpdatedRecentMessage } from "../store/store";

type Props = {
  socket: any;
};

const SingleChat = ({ socket }: Props) => {
  const token = useSelector((state: any) => state.user.token);
  const [newMessage, setNewMessage] = useState<any | null>(null);
  const user = useSelector((state: any) => state.user.user);
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const { data, isFetching, error, refetch } = useGetAllChatMessagesQuery({
    chatId,
    token,
  });


  useEffect(() => {
    refetch();
  }, [chatId]);

  useEffect(() => {
    if (data) {
      dispatch(addAllMessages(data.data));
      dispatch(addRecentMessage());
    }

    if (error) {
      ErrorAlert({
        title: "Error",
        message: "Error fetching messages",
      });
    }
  }, [data, error]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user._id);
    socket.on("connected", () => {
      dispatch(setSocketConnected(true));
    });
    socket.emit("join chat", chatId);

    socket.on("message received", (data: any) => {
      setNewMessage((prev: any) => {
        if (prev !== data) return data;
      });
    });
    socket.on("read by update", (data: any) => {
      dispatch(addUpdatedRecentMessage(data));
      // dispatch(updateRecentMessage(data));
      dispatch(upadateSeenMessage(data));
    });
  });

  useEffect(() => {
    if (newMessage) {
      if (newMessage.chat._id === chatId) {
        dispatch(addMessage(newMessage));
      }

      if (newMessage.chat._id !== chatId) {
        dispatch(addNotification(newMessage));
      }
      dispatch(updateRecentMessage(newMessage));
    }
  }, [newMessage]);

  return (
    <SingleChatMain>
      {isFetching ? (
        <SingleChatLoadingDiv>
          <Spinner />
        </SingleChatLoadingDiv>
      ) : (
        <AllMessages
          chatId={chatId}
          socket={socket}
        />
      )}
    </SingleChatMain>
  );
};

export default SingleChat;
