export default function UserDetails({element}){
   
    const {name,email}=element;
    return(
        <>
            <h5>Name:{element.name}</h5>
            <p>email:{element.email}</p>    
        </>
    )
}