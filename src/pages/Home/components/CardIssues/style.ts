import { styled } from "styled-components";

export const CardContainer = styled.div`
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  span {
    font-size: 14px;
    width: 30%;
    line-height: 160%;
    text-align: right;
  }

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: ${(props) => props.theme["base-title"]};
    width: 65%;
  }
`;

export const CardContent = styled.div`
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};
  /* height: 112px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  */
  display: -webkit-box;
  -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
