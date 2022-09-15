import {useEffect, useState} from "react";
import {MainLayout} from "../components/MainLayout";

export default function Dashboard(){
    const [isLoading, setIsLoading] = useState(true)
    const [data, setDashboardData] = useState(null)


    useEffect(()=>{
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4200/dashboard')
            const data = await response.json()
            setDashboardData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    },[])

if(isLoading){
    return<h2>Loading...</h2>
}
    return(<MainLayout>
<h2>Dashboard</h2>
        <h2>Posts - {data?.posts}</h2>
        <h2>Likes - {data?.likes}</h2>
        <h2>Followers - {data?.followers}</h2>
        <h2>Following - {data?.following}</h2>
    </MainLayout>)
}
// export async function getServerSideProps() {
//      const response = await fetch(`http://localhost:4200/dashboard`)
//     const data = await response.json()
//
//     // Pass data to the page via props
//     return { props: { data } }
// }
