import styled from "styled-components";

export const BtnStyled = styled.button`
  border: 2px solid ${(props) => props.isBig ? "red" : "yellow"};
  border-radius: 5px;
  padding: 10px 15px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
`;
