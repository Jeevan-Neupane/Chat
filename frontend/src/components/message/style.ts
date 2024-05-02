import styled from "styled-components";


type Props = {
    rightplaced: string;
};

export const AllMessagesOuterDiv = styled.div``

export const MessagesOuterDiv = styled.div<Props>`
display: flex;
align-items:center;
margin-top:1rem;
justify-content:${props => props.rightplaced === "yes" ? "flex-end" : "flex-start"};
`


export const MessageTime = styled.div`
`


export const UserImageDiv = styled.div`
height:30px;
width:30px;
border-radius:50%;
overflow:hidden;
margin-right:1rem;


`

export const UserImage = styled.img`

height:100%;
width:100%;
border-radius:50%;
object-fit:cover;
object-position:center;
`


export const MessageDiv = styled.div`
font-size:1.5rem;
margin-right:1rem;
width:40%;
`

export const MessageDateDiv=styled.div``

export const MessageDate=styled.p``

//*Friend Info

export const FriendInfoOuterDiv = styled.div`
background-color:${props => props.theme.header_footer};
display: flex;
padding-top:1rem;
padding-bottom:1rem;
padding-left:1rem;

`


export const FriendInfoImageDiv = styled.div`
height:3rem;
width:3rem;
border-radius:50%;
overflow:hidden;
margin-right:1rem;


`
export const FriendInfoImage = styled.img`
height:100%;
width:100%;
border-radius:50%;
object-fit:cover;
object-position:center;



`



export const FriendInfoDiv = styled.div``
export const FriendInfoName = styled.p`
font-size:1.5rem;
`

export const FriendStatus = styled.p``