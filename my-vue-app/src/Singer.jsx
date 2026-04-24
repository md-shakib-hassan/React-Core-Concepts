export default function Singer({singers}){
    console.log(singers)
    return(
        <>
        <h5>Name: {singers.name}</h5>
        <p>Age: {singers.age}</p>
        
        </>
    )
}