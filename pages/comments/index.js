import {useState} from "react";

export default function CommentsPage(){
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
   const fetchComments = async () => {
       const response = await fetch('/api/comments')
       const data = await response.json()
       setComments(data)
   }
const submitComment = async () => {
   const response = await fetch('/api/comments',{
       method:'POST',
       body:JSON.stringify({comment}),
       headers:{
           'Content-Type':'application/json'
       }
   })
    const data = await response.json()
    console.log(data)

}
const deleteComment = async (commentId) => {
const response = await fetch(`/api/comments/${commentId}`,{
    method:'DELETE'
})
    const data = await response.json()
    console.log(data)
    fetchComments()
}
    return(<>
        <input  value={comment} onChange={(e)=>setComment(e.target.value)}/>
        <button onClick={submitComment}>Submit comment</button>
    <button onClick={fetchComments}>Load comments</button>
        {
            comments.map(coment => {
                return(
                    <div key={coment.id}>
                        {coment.id} {coment.text}
                        <button onClick={()=>deleteComment(coment.id)}>Delete</button>
                    </div>
                )
            })
        }
    </>)
}
