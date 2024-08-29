import { Alegreya } from "@next/font/google";
import '../styles.css'
const alegreya = Alegreya({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={alegreya.className}>
            <Component {...pageProps} />
        </main>
    );
}