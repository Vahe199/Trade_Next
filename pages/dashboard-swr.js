import {useEffect, useState} from "react";
import useSWR from 'swr'
import {MainLayout} from "../component/MainLayout";

const fetcher = async ()=>{
    const response = await fetch('http://localhost:4200/dashboard')
    const data = response.json()
    return data
}
export default function DashboardSwr(){
 const {data,error} = useSWR('dashboard', fetcher)
if(error) return 'An error has occured'
    if(!data) return 'Loading ...'
    return(<MainLayout>
      <h2>Dashboard SWR</h2>
        <h2>Posts - {data?.posts}</h2>
        <h2>Likes - {data?.likes}</h2>
        <h2>Followers - {data?.followers}</h2>
        <h2>Following - {data?.following}</h2>
    </MainLayout>)
}

