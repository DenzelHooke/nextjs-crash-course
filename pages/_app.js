import "../styles/globals.css";
//Import all global styles into this file.
import Layout from "../components/Layout";

// This func wraps all of our pages.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
