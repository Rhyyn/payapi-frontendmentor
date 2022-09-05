import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>PayAPI</title>
                <meta charSet="UTF-8" />
                <meta
                    name="Payapi"
                    content="PayAPI Frontend mentor challenge"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
