import Link from "next/link";

export const PostLink = ({post}) => {
    return(
        <>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                <a> {post.title}</a>
            </Link>
        </>
    )
}
