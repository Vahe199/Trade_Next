import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";

export default function Post({post}){
    return(
        <MainLayout title={'Post'}>
            <h1>{post?.title}</h1>
            <hr/>
            <p>{post?.body}</p>
            <Link href={"/posts"}><a>Back to all posts</a></Link>
        </MainLayout>
    )
}
// Post.getInitialProps = async (ctx) => {
//     const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
//     const post= await response.json()
//     return {post}
// }
export async function getServerSideProps({query,req, res}) {
     console.log(req.headers.cookie,"context1122")
    res.setHeader('Set-Cookie', ['name=Vishwas'])
    // Fetch data from external API
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const post = await response.json()

    // Pass data to the page via props
    return { props: { post } }
}
