import Signup from "../components/signup/Signup";
import { SignupMain } from "../style/Container";

type Props = {};

const Signuppage = ({}: Props) => {
  return (
    <SignupMain>
      <Signup />
    </SignupMain>
  );
};

export default Signuppage;
