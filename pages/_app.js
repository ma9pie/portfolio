import "@/styles/reset.scss";
import "@/styles/fonts.scss";
import "@/styles/globals.scss";
import "@/styles/simplebar.scss";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;
