import { styled } from "styled-components";

export const BannerContainer = styled.div`
  padding: 32px;
  width: 100%;
  height: 212px;
  margin: auto;
  margin-top: -80px;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
