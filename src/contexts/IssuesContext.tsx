import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from "react";
import { api } from "../lib/axios";

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

interface IssuesContextType {
  issues: Issue[];
  fetchIssues: (query?: string) => Promise<void>;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchIssues = useCallback(async () => {
    const response = await api.get("/search/issues", {
      params: {
        q: "repo:bretzke/challenge-github-blog",
      },
    });

    const issues = response.data.items.map((issue: Issue) => {
      return {
        id: issue.id,
        title: issue.title,
        body: issue.body,
        created_at: issue.created_at,
      };
    }) as Issue[];

    setIssues(issues);
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}
