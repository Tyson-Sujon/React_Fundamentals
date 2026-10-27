// props = empty object ,ata function hisabe jai 

// export default function Card(props){
//     console.log(props);
//     return (
//         <div>
//            <p> firstName: {props.firstName}</p>
//             <p>lastName: {props.lastName} </p>
//             <p> age: {props.age} </p>
//             <p> me: {props.name} </p>
//         </div>
  
//     )
// }

export default function Card({firstName,lastName,name,age}){
    return(
        <div>
            <p>first name={firstName}</p>
            <p>Last name={lastName}</p>
            <p>name={name}</p>
            <p>Age={age}</p>
        </div>
    )

}