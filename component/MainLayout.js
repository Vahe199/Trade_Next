import Link from "next/link";
import Head from "next/head";

export const MainLayout = ({children,title='Nex App'}) => {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next, tutorial, learn"/>
                <meta name="description" content="bla bla bla "/>
                <meta charSet={"utf-8"}/>
            </Head>
            <nav>
                <h1>NAVIGATION</h1>
                <div>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
                </div>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
nav{
display: none;
position: fixed;
height: 60px;
left:0;
right: 0;
top: 0;
//display: flex;
align-items: center;
justify-content: space-between;
background: #0070f3;
padding: 0 20px;
}
nav a{
color: #fafafa;
text-decoration: none;
margin-right: 10px;
}
a:hover{
font-weight: bold;
}
main{
margin-top: 60px;
padding: 1rem;
min-height: 80vh;
}
            
`}</style>
        </>
    )
}
