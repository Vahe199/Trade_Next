import Link from "next/link";
import classes from "../styles/error.module.scss"
import {MainLayout} from "../component/MainLayout";
export default function ErrorPage(){
    return(
        <MainLayout>
            <h1 className={classes.error}>Error 404</h1>
            <p>Please <Link href={"/"}><a>go bach</a></Link> to safety</p>
        </MainLayout>
    )
}
