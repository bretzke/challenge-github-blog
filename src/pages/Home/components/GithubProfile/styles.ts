import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const ProfileImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  h1 {
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const ProfileText = styled.p`
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 24px;
`;

export const ProfileIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${(props) => props.theme["base-subtitle"]};
`;
