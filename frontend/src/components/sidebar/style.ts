import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBarOuterDiv = styled.div`
flex:2;
display: flex;

`
export const NavbarOuterDiv = styled.div`
flex:1;
border-right: 1px solid #e0e0e0;
display: flex;
flex-direction: column;
justify-content: space-between;

`

export const IconsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
margin-top: 2rem;

`

export const NavIcon = styled(NavLink)`

font-size:3rem;
gap:1rem;
color:${props => props.theme.text};

`
export const UserIconDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
`
export const UserImageDiv = styled.div`
width:40px;
height:40px;
border-radius:50%;
margin-bottom:2rem;
cursor: pointer;
`
export const UserImage = styled.img`
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
object-position:center;
`

export const FriendsbarOuterDiv = styled.div`
flex:3;
display: flex;
align-items:center;

flex-direction:column;
border-right: 1px solid #e0e0e0;
`


