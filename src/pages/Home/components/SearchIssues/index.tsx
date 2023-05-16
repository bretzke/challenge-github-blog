import {
  SearchIssuesContainer,
  SearchIssuesHeader,
  SearchIssuesInput,
} from "./styles";

export function SearchIssues() {
  return (
    <SearchIssuesContainer>
      <SearchIssuesHeader>
        <p>Publicações</p>
        <span>6 publicações</span>
      </SearchIssuesHeader>
      <SearchIssuesInput placeholder="Buscar conteúdo" />
    </SearchIssuesContainer>
  );
}
