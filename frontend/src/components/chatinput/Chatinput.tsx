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
const Chatinput = () => {
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
      <MessageForm>
        <Input />
      </MessageForm>

      <SendButton>
        <ChatIcon>
          <IoSend />
        </ChatIcon>
      </SendButton>
    </ChatInputOuterDiv>
  );
};

export default Chatinput;
