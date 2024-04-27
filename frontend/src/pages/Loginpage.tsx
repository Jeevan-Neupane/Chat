import Login from "../components/login/Login";
import { LoginMain } from "../style/Container";

type Props = {};

const Loginpage = ({}: Props) => {
  return (
    <LoginMain>
      <Login />
    </LoginMain>
  );
};

export default Loginpage;
