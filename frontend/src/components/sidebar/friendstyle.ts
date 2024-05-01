import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
    activestyle: string;
};

export const MessageOuterDiv = styled(Link) <Props>`
display:flex;
background-color:${props => props.activestyle === "yes" ? props.theme.header_footer : ""};
padding:1rem;

margin-bottom:2rem;
margin-left:2rem;
gap:1rem;
text-decoration:none;
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


export const EmptyMessageDiv = styled.p`
text-align:center;
font-size:1.5rem;

`