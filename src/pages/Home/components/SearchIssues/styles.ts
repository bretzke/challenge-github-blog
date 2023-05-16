import { styled } from "styled-components";

export const SearchIssuesContainer = styled.div`
  margin-top: 72px;
  margin-bottom: 48px;
`;

export const SearchIssuesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchIssuesInput = styled.input`
  padding: 12px 16px;
  margin-top: 24px;
  width: 100%;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  border-radius: 6px;
  color: ${(props) => props.theme["base-label"]};
  font-size: 16px;
`;
