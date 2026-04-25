export default function Post ({element}){
   
   const {title,body}=element;
    return(
        <>
        <h5>{element.title}</h5>
        <p>{element.body}</p>
        </>

    )
}