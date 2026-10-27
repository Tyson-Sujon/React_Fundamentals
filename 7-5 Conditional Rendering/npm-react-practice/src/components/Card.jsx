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
import './Card.css'
export default function Card({name, age,children }) {

  
  return (
    <div className="myChild">
      {children}
      <h1>Hello There</h1>
      <p>name={name}</p>
      <p>Age={age}</p>
    </div>
  );
}

// 4.22