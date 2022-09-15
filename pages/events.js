import {useState} from "react";
import {useRouter} from "next/router";

export default function Events({eventList}) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()
    const fetchSportsEvents = async ()=>{
        const response = await fetch(`http://localhost:4200/events?category=sports`)
        const data =await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, {shallow:true})
    }

    return(<>
        <button onClick={fetchSportsEvents}>Sports Events</button>
        <h1>List of events</h1>
        {
            events?.map((event)=>{
                return(
                    <div key={event.id}>
                        <h2>
                            {event.id} {event.title} {event.data} | {event.category}
                        </h2>
                        <p>{event.description}</p>
                        <hr/>
                    </div>
                )
            })
        }
        </>)
}
export async function getServerSideProps({query}){
    const {category} = query
    const queryString = category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4200/events?${queryString}`)
    const data =await response.json()
    return{
        props:{
            eventList:data
        }
    }
}
