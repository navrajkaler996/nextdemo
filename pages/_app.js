import { ClickContextProvider } from "../store/click-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ClickContextProvider>
      <Component {...pageProps} />
    </ClickContextProvider>
  );
}

export default MyApp;
