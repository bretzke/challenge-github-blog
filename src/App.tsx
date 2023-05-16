import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { IssuesProvider } from "./contexts/IssuesContext";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssuesProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
