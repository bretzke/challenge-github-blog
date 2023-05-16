import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 300px;
  background-color: #0d2741;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;
    position: absolute;
    width: 148px;
    height: 98px;
    left: calc(50% - 148px / 2);
    top: 64px;
  }
`;
