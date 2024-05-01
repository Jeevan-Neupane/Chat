import Spinner from "../alert/Spinner";
import { LogoutButton, LogoutDivOuter } from "./style";

type Props = {
  logoutUser: any;
  token: string;
  isLoading: boolean;
};

const LogoutDiv = ({ logoutUser, token, isLoading }: Props) => {
  return (
    <LogoutDivOuter>
      <LogoutButton
        onClick={() => {
          logoutUser(token);
        }}
      >
        <span>Logout</span>
        {isLoading && <Spinner />}
      </LogoutButton>
    </LogoutDivOuter>
  );
};

export default LogoutDiv;
