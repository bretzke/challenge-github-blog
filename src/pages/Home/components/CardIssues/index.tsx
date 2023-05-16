import { dateFormatter } from "../../../../utils/formatter";
import { CardContainer, CardContent, CardHeader } from "./style";

interface CardIssuesProps {
  id: number;
  title: string;
  postedIn: string;
  text: string;
}
export function CardIssues({ id, title, postedIn, text }: CardIssuesProps) {
  return (
    <CardContainer key={id}>
      <CardHeader>
        <h3>{title}</h3>
        <span>{dateFormatter.format(new Date(postedIn))}</span>
      </CardHeader>
      <CardContent>{text}</CardContent>
    </CardContainer>
  );
}
