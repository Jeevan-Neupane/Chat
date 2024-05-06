import {
  MessageSeenContainer,
  MessageSeenImage,
  MessageSeenImageContainer,
} from "./style";

type Props = {
  image: string;
};

const MessageSeen = ({ image }: Props) => {
  return (
    <MessageSeenContainer>
      <MessageSeenImageContainer>
        <MessageSeenImage
          alt='friend'
          src={image}
        />
      </MessageSeenImageContainer>
    </MessageSeenContainer>
  );
};

export default MessageSeen;
