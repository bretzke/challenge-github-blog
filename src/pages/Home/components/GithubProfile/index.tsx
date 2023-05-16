import { Banner } from "../../../../components/Banner";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileIcons,
  ProfileImage,
  ProfileText,
} from "./styles";

export function GithubProfile() {
  return (
    <Banner>
      <ProfileContainer>
        <ProfileImage
          src="https://avatars.githubusercontent.com/u/68381741?v=4"
          alt=""
        />
        <div>
          <ProfileHeader>
            <h1>Willian Bretzke</h1>
            <a href="">Github</a>
          </ProfileHeader>

          <ProfileText>
            Esse é o perfil do Will blabla blabla blabla blabla blabla blabla
            blabla blabla blabla blabla blabla blabla blabla blabla blabla
            blabla
          </ProfileText>

          <ProfileIcons>
            <div>
              <span>bretzke</span>
            </div>
            <div>
              <span>Take Blip</span>
            </div>
            <div>
              <span>40 seguidores</span>
            </div>
          </ProfileIcons>
        </div>
      </ProfileContainer>
    </Banner>
  );
}
