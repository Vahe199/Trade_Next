import {MainLayout} from "../components/MainLayout";
import {useEffect, useState} from "react";
import Link from "next/link";
import {PostLink} from "../component/PostLink";

export default function Posts({posts}){
    return(<MainLayout title={"Post Page"}>
        <h1>Posts page</h1>
        <ul>
            {[...posts].map(post =>(<li key={post.id}>
               <PostLink post={post}/>
            </li>))}
        </ul>
        </MainLayout>)
}
Posts.getInitialProps = async (ctx) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const pst= await response.json()
    const posts = pst?.slice(0,10)
    return {posts}
}
