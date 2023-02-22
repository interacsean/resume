import theme, { GlobalStyles } from "theme";
import { ThemeProvider } from "styled-components";
import Resume from "components/Resume";
import PageLayout from "components/PageLayout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageLayout>
        <Resume />
      </PageLayout>
    </ThemeProvider>
  );
}
