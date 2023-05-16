import { CardContainer, CardContent, CardHeader } from "./style";

interface CardIssuesProps {
  id: string;
  title: string;
  postedIn: string;
  text: string;
}
export function CardIssues({ id, title, postedIn, text }: CardIssuesProps) {
  return (
    <CardContainer key={id}>
      <CardHeader>
        <h3>{title}</h3>
        <span>{postedIn}</span>
      </CardHeader>
      <CardContent>{text}</CardContent>
    </CardContainer>
  );
}
