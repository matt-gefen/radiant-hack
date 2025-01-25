import meta from "./_meta.json"
import { Alegreya, Atkinson_Hyperlegible } from "next/font/google";
import '../styles.css'
const alegreya = Alegreya({ subsets: ["latin"] });
const atkin = Atkinson_Hyperlegible({
    subsets: ["latin"],
    weight: "400"
});


export default function MyApp({ Component, pageProps }) {
    return (
        <main className={atkin.className}>
            <Component {...pageProps} />
        </main>
    );
}