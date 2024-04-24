import styled from "styled-components";

export const Container = styled.div`
display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  position: relative;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const AvatarPlaceholder = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
`;

export const Label = styled.label`
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

