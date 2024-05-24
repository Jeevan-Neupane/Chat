import { useNavigate } from "react-router-dom";
import { HomeMain } from "../style/Container";
import { useSelector } from "react-redux";
import { useEffect } from "react";

type Props = {};

const Homepage = ({}: Props) => {
  const recentChatId = useSelector(
    (state: any) => state.user.user.recentChatId
  );
  const navigate = useNavigate();

  console.log(recentChatId);

  useEffect(() => {
    if (recentChatId) {
      navigate(`/chat/${recentChatId}`);
    }
  }, [recentChatId]);
  return (
    <HomeMain>
      <h1>Select the User With Whom you want to Chat</h1>
    </HomeMain>
  );
};

export default Homepage;
