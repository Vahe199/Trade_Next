import Link from "next/link";
import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return (<MainLayout>
        <h1>Hello world</h1>
        <p><Link href='/about'><a>About</a></Link></p>
        <p><Link href='/posts'><a>Posts</a></Link></p>
        <p><Link href='/blog'><a>Blog</a></Link></p>
        <p><Link href='/dashboard'><a>Dashboard</a></Link></p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
    </MainLayout>)
}
