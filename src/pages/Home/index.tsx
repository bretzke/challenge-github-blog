import { GithubProfile } from "./components/GithubProfile";
import { SearchIssues } from "./components/SearchIssues";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <GithubProfile />
      <SearchIssues />
    </HomeContainer>
  );
}
