import styled from "styled-components";

const Container = styled.div`
 display: flex;
flex-direction: column;
  
  border-radius: 8px;
  
  `;

const InputField = styled.input`
 
 padding: 1rem;
 border: 1px solid ${props => props.theme.header_footer};
 border-radius: 3px;
 background-color:${props => props.theme.header_footer};

color: ${props => props.theme.text}; 
outline:none;
flex:1;

`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: ${props => props.theme.text}; 
  font-size:2rem;
`;
export const IconAndInput = styled.div`
display:flex;
background-color:${props => props.theme.header_footer};
`
export const Icon = styled.div`
font-size:2rem;
display: flex;
align-items:center;
justify-content:center;
padding:1rem;
cursor: pointer;

`

export {
    Container,
    InputField,
    Label

}