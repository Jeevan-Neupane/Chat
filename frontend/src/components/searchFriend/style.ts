import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchedFriendOuterDiv = styled.div`
width:100%;
height:30rem;
background-color:${props => props.theme.header_footer};
display: flex;

position:absolute;
flex-direction:column;
top:6rem;
left:0;
right:0;
`

export const SearchedFriendDiv = styled(Link)`
display: flex;
align-items:center;
gap:2rem;
margin-left:2rem;
margin-top:2rem;
cursor: pointer;
`

export const FriendImageDiv = styled.div`
height:4rem;
width:4rem;

border-radius:50%;
`
export const FriendImage = styled.img`
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
object-position:center;


`
export const FriendNameDiv = styled.div`
font-size:1.5rem;
`


export const LoadingDiv = styled.div`

`

