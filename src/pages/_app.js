import "./../styles/globals.css";
import { Besley } from "next/font/google";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const besley = Besley({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={`${besley.variable} font-mont bg-orange-500 dark:bg-orange-600 w-full min-h-screen`}
            >
                <NavBar />
                <AnimatePresence mode="wait">
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>

                <Footer />
            </main>
        </>
    );
}