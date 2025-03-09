import "@/styles/globals.css";
import BlendCursor from "@/components/BlendCursor";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className="grainyBackground"></div>
			<BlendCursor />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
