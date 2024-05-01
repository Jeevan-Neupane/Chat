import styled from "styled-components";


export const ChatInputOuterDiv = styled.div`
position:absolute;
left:0;
right:0;
bottom:0;
background-color:${props => props.theme.header_footer};
z-index:10000;
display: flex;
align-items:center;
justify-content:space-between;
padding-left:1rem;
padding-right:1rem;
`


export const ChatIconDiv = styled.div`
display: flex;
gap:1rem;
padding:1rem;
align-items:center;
justify-content:center;

`

export const ChatIcon = styled.div`

font-size:3rem;
cursor: pointer;
display: flex;
align-items:center;
justify-content:center;
`

export const MessageForm=styled.form`
flex:1;

`

export const Input = styled.input`
width:100%; 
outline:none;
border:none;
font-size:1.5rem;
padding:.5rem;
border-radius:1rem;
padding-left:1rem;


`



export const SendButton = styled.button`
outline:none;
border:none;
margin-left:1rem;
background-color:${props => props.theme.button};
color:${props => props.theme.text}; 

`


