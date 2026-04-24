export default function ToDo({tech,duration,done}){
    
    if(done===true){
        return(
            <>
            <li>Done:{tech} Durantion:{duration} </li>
            </>
            
        )
    
    }else{
        return(
            <>
            <li>Pending:{tech} Durantion:{duration} </li>
            </>
        )
    }     
    
}