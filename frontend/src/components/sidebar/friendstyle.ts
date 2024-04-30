import { Link } from "react-router-dom";
import styled from "styled-components";

export const MessageOuterDiv = styled(Link)`
display:flex;


margin-bottom:2rem;
margin-left:2rem;
gap:1rem;
`



export const FriendPhotoDiv = styled.div`
width:3rem;
height:3rem;
border-radius:50%;
cursor: pointer;

`

export const FriendPhoto = styled.img`
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
object-position:center;
`

export const FriendNameAndMessageDiv = styled.div`
display: flex;
flex-direction: column;
`

export const FriendNameDiv = styled.p`
font-size:1.5rem;
color:${props => props.theme.text};

`

export const FriendMessageDiv = styled.p`
font-size:1rem;
color:${props => props.theme.text};
`