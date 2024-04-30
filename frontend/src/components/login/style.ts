import { Link } from "react-router-dom";
import styled from "styled-components";
type Props = {
  cursor: string;

}
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${props => props.theme.components};
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width:30%;
  margin-top: 5rem;

`;

export const LoginButton = styled.button<Props>`
  background-color: ${props => props.theme.header_footer};
  color: ${props => props.theme.text};
  padding: 1rem;
  border: none;
  cursor: ${props => props.cursor};
  border-radius: .5rem;
  
  margin-top: 1rem;
 
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const SignupLinkDiv = styled.div`
margin-top:1rem;
font-size:1.5rem;
`
export const SignupLink = styled(Link)`
color:${props => props.theme.text};
`