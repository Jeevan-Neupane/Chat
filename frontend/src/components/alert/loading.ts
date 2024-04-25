import styled from "styled-components";

const LoadingDiv = styled.div`
display: flex;
align-items:center;
justify-content:center ;

.loader {
  width: 100%;
  height: 25px;
  color: #000;
  border: 2px solid white;
  border-right-color: white;
  padding: 3px;
  background: 
    repeating-linear-gradient(90deg,white 0 10px,#ffff 0 15px) 
    0/0% no-repeat content-box content-box;
  position: relative;
  box-sizing: border-box;
  animation: l5 2s infinite steps(6);
}
.loader::before {
  content: "";
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: 100%;
  width: 10px;
  background:
    linear-gradient(
        #fff   calc(50% - 7px),white 0 calc(50% - 5px),
        #fff 0 calc(50% + 5px),white 0 calc(50% + 7px),#fff 0) left /100% 100%,
    linear-gradient(white calc(50% - 5px),#fff        0 calc(50% + 5px),white 0) left /2px 100%,
    linear-gradient(#fff        calc(50% - 5px),white 0 calc(50% + 5px),#ffff       0) right/2px 100%;
  background-repeat:no-repeat;
}
@keyframes l5 {
    100% {background-size:120%}
}

`

export { LoadingDiv }

