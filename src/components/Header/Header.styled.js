import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: calc(100vh - 80px);
  background-color: darkgray;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  img {
    width: 300px;
    height: 300px;
    object-fit: none;
    object-position: 0 20%;
    border-radius: 50%;
  }
`

export const HeaderInfo = styled.div`
  width: 700px;
  h1 {
    font-size: 52px;
  }
  h2 {
    font-size: 36px;
  }
  p {
    text-align: justify;
    width: 400px;
  }
`