import {
  ChatIcon,
  ChatIconDiv,
  ChatInputOuterDiv,
  Input,
  MessageForm,
  SendButton,
} from "./style";
import { RiGalleryFill } from "react-icons/ri";
import { LuSticker } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { usePostMessageMutation } from "../../store/api/userApi";
import ErrorAlert from "../alert/ErrorAlert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMessage } from "../../store/store";

type Inputs = {
  message: string;
};

const Chatinput = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { chatId } = useParams<{ chatId: string }>();
  const [postMessage, status] = usePostMessageMutation();
  const token = useSelector((state: any) => state.user.token);
  const dispatch = useDispatch();
  const { data, error, isLoading } = status;

  const chatIcons = [
    {
      icon: <RiGalleryFill />,
      id: 1,
      name: "send file",
    },
    {
      icon: <LuSticker />,
      id: 2,
      name: "send sticker",
    },
  ];
  const location = useLocation();

  const onMessageSubmit = (data: Inputs) => {
    let MessageData = {
      chatId: chatId,
      message: data.message,
    };

    if (data.message.trim() === "")
      return ErrorAlert({
        title: "Error",
        message: "Message cannot be empty",
      });

    postMessage({ formData: MessageData, token });
    reset();
  };

  useEffect(() => {
    reset();
  }, [location]);

  useEffect(() => {
    if (data) {
      dispatch(addMessage(data.data));
    }

    if (error) {
      ErrorAlert({
        title: "Error",
        message: "Error while sending message",
      });
    }
  }, [data, error]);

  return (
    <ChatInputOuterDiv>
      <ChatIconDiv>
        {chatIcons.map((icon, index) => {
          return (
            <ChatIcon
              title={icon.name}
              key={index}
            >
              {icon.icon}
            </ChatIcon>
          );
        })}
      </ChatIconDiv>
      <MessageForm onSubmit={handleSubmit(onMessageSubmit)}>
        <Input {...register("message")} />

        <SendButton>
          <ChatIcon>
            <IoSend />
          </ChatIcon>
        </SendButton>
      </MessageForm>
    </ChatInputOuterDiv>
  );
};

export default Chatinput;
