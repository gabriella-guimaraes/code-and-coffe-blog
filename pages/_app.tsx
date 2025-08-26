//Styles
import GlobalStyle from "@/theme/GlobalStyle";

//Next
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return(
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}