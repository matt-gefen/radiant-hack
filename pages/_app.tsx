import meta from "./_meta.json"
import { Nunito } from "next/font/google";
import '../styles.scss'
const defaultFont = Nunito({
    subsets:["latin"],
    weight:"400"
})


export default function MyApp({ Component, pageProps }) {
    return (
        <main className={defaultFont.className}>
            <Component {...pageProps} />
        </main>
    );
}