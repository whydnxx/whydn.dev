import "@/styles/globals.css";
import "@/styles/syntax-highlighting.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={"dark"}
      disableTransitionOnChange={true}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
