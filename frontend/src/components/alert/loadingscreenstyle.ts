import styled from "styled-components";

export const LoadingScreenDiv = styled.div`
display: flex;
align-items:center;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
justify-content:center;
background-color:${props => props.theme.background_color};
.loader {
  display: inline-flex;
  gap: 10px;
}
.loader:before,
.loader:after {
  content: "";
  height: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side,#000 95%,#0000) 35% 35%/6px 6px no-repeat
    #fff;
  animation: l5 3s infinite;
}
@keyframes l5 {
  0%,11%   {background-position:35% 35%}
  14%,36%  {background-position:65% 35%}
  38%,61%  {background-position:65% 65%}
  64%,86%  {background-position:35% 65%}
  88%,100% {background-position:35% 35%}
}
`