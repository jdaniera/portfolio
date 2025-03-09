import "@/styles/globals.css";
import BlendCursor from "@/components/BlendCursor";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BlendCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
