import { LogoutButton, LogoutDivOuter } from "./style";

type Props = {
  logoutUser: any;
  token: string;
};

const LogoutDiv = ({ logoutUser, token }: Props) => {
  return (
    <LogoutDivOuter>
      <LogoutButton
        onClick={() => {
          logoutUser(token);
        }}
      >
        Logout
      </LogoutButton>
    </LogoutDivOuter>
  );
};

export default LogoutDiv;
