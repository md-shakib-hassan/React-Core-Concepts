import { use } from "react"
import Post from "./Post";

export default function Posts({postPromise}){

    const post = use(postPromise);
    
    return(
        <>
            {
                post.map(element => <Post element={element}></Post> )
            }
        </>
    )
}