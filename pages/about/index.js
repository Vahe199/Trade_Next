import Router from "next/router";
import {MainLayout} from "../../component/MainLayout";
import Footers from "../../component/Layout/Footers";

 function About() {
    const linkClickHandle = (page) => {
        Router.push(page)
    }
    return (<MainLayout title={"About Page"}>
        <h1>About page</h1>
        <button onClick={() => linkClickHandle('/')}>Go back to home</button>
        <button onClick={() => linkClickHandle('/posts')}>Go back to Posts</button>
    </MainLayout>)
}
export default About
About.getLayout = function PageLayout(page) {
    return(
        <>
            {page}
            <Footers/>
        </>
    )
}
