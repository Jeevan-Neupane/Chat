import styled from "styled-components";

export const SearchBarDiv = styled.form`
margin-top:2rem;
margin-bottom:2rem;
display: flex;
align-items:center;
gap:1rem;
background-color:${props => props.theme.header_footer};
justify-content:space-between;
`
export const SearchIcon = styled.div`
font-size:2rem;
display: flex;
align-items:center;
justify-content:center;
padding-left:1rem;
`
const LoadingDiv=styled.div`

`