import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function About() {
    const linkClickHandle = (page) => {
        Router.push(page)
    }
    return (<MainLayout title={"About Page"}>
        <h1>About page</h1>
        <button onClick={() => linkClickHandle('/')}>Go back to home</button>
        <button onClick={() => linkClickHandle('/posts')}>Go back to Posts</button>
    </MainLayout>)
}
