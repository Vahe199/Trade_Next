import {NavBar} from "../elements/NavBar";
import Link from "next/link";
import Box from "../elements/Box";

const Headers = () => {
    return(
        <NavBar background="#f08000">
            <h1>NAVIGATION</h1>
            <Box>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </Box>
        </NavBar>
    )
}
export default Headers;
