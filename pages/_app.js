import {globals} from "../styles/globals";
import Footers from "../component/Layout/Footers";
import Headers from "../component/Layout/Headers";
export default function MyApp({ Component, pageProps }) {
if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
}
    return <>
        <Headers/>
        <Component {...pageProps} />
        <Footers/>
        </>
}
