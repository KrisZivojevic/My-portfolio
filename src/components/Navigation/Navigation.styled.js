import styled from "styled-components";

export const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10;
`;

export const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;

  li {
    cursor: pointer;
  }
`;
