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
export const NotificationNumber=styled.div`

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