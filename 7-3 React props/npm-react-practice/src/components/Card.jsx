// props = empty object ,ata function hisabe jai 

export default function Card(props){
    console.log(props);
    return (
        <div>
           <p> firstName: {props.firstName}</p>
            <p>lastName: {props.lastName} </p>
            <p> age: {props.age} </p>
            <p> me: {props.name} </p>
        </div>
        // vide:8.23 
    )
}