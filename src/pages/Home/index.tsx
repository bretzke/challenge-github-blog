import { useContext } from "react";
import { CardIssues } from "./components/CardIssues";
import { GithubProfile } from "./components/GithubProfile";
import { SearchIssues } from "./components/SearchIssues";
import { CardsContainer, HomeContainer } from "./styles";
import { IssuesContext } from "../../contexts/IssuesContext";

export function Home() {
  const { issues } = useContext(IssuesContext);

  return (
    <HomeContainer>
      <GithubProfile />
      <SearchIssues />

      <CardsContainer>
        {issues.map((issue) => {
          return (
            <CardIssues
              id={issue.id}
              title={issue.title}
              postedIn={issue.created_at}
              text={issue.body}
            />
          );
        })}
      </CardsContainer>
    </HomeContainer>
  );
}
