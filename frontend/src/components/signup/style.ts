import styled from "styled-components";


type Props = {
  cursor: string;

}

const SignUpFormContainer = styled.form`
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

const SignUpButton = styled.button<Props>`
  background-color: ${props => props.theme.header_footer};
  color: ${props => props.theme.text};
  padding: 1rem;
  border: none;
  cursor: ${props=>props.cursor};
  border-radius: .5rem;
  
  margin-top: 1rem;
 
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: ${props => props.theme.text}; 
  font-size:2rem;
`;

const SelectDropDown=styled.select`
padding: 1rem;
 border: 1px solid ${props => props.theme.header_footer};
 border-radius: 3px;
 background-color:${props => props.theme.header_footer};
color: ${props => props.theme.text}; 
outline:none;
`
const OptionsDropDown=styled.option`

`

export {
    ErrorMessage, InputWrapper, SignUpButton, SignUpFormContainer,SelectDropDown,OptionsDropDown,Label
}