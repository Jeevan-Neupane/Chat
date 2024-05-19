import { Link } from "react-router-dom";
import styled from "styled-components";


export const NotificationWrapper = styled.div`
display: flex;
align-items:center;
justify-content:center;

`
export const NotificationBellIcon = styled.div`
font-size:4rem;
position:relative;
cursor: pointer;

`
export const NotificationNumber = styled.div`

position:absolute;
top:-1rem;
right:-1rem;
background-color:green;
color:white;
border-radius:50%;
font-size:2rem;
height:3rem;
width:3rem;
display: flex;
align-items:center;
justify-content:center;
padding:1rem;
font-weight:bold;
`


//*For the notification box

export const NotificationHeader = styled.h2`
font-size:3rem;
text-align:center;
padding:1rem;

`

export const NotificationBoxWrapper = styled.div`
height: 80rem;
width: 50rem;
position: absolute;
background-color:${props => props.theme.header_footer};
bottom:12rem;
left:8rem;
z-index: 100;
border-radius: 1rem;
`

export const NotificationSingleBox = styled(Link)`
display: flex;
margin-top:2rem;
display: flex;
color:inherit;
text-decoration:none;

gap:2rem;
padding:2rem;
border-bottom: 1px solid ${props => props.theme.lightText};
border-top: 1px solid ${props => props.theme.lightText};
`

export const UserProfileDiv = styled.div`
height: 3rem;
width: 3rem;
border-radius: 50%;
display: flex;
align-items:center;
justify-content:center;
`



export const UserProfileImage = styled.img`

height: 100%;
width: 100%;
border-radius: 50%;
object-fit: cover;
object-position: center;

`
export const NotificationTitleDiv = styled.div`

`
export const SenderName = styled.p`
font-size:2rem;
font-weight:bold;

`
export const NotificationTitle = styled.p`
font-size:1.6rem;
span{
    color:${props => props.theme.specialTextTwo};
}
`



