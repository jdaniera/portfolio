import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className="grainyBackground"></div>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
