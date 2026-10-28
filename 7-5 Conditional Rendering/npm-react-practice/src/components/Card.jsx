import './Card.css'

// props = empty object ,ai code e ata function hisabe jai

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



//  conditional rendering block nea kaj hoisay if-else or ternary operation


// export default function Card({name, age }) {
//   // jodi kondition matro akta hoi 
// if (age>20) {
//   return <div className='card'>you are so young</div>
// }
  
//   return (
//     <div className="card">
//       <h1>Hello There</h1>
//       <p>name={name}</p>
//       <p>Age={age}</p>
//     </div>
//   );
// }


export default function Card({name, age }) {
  // jodi kondition matro akta hoi 
if (age>20) {
  return <div className='card'>you are so young</div>
}
  
  return (
    <div className="card">
      <h1>Hello There</h1>
      <p>name={name}</p>
      <p>Age={age}</p>
    </div>
  );
}


// 5.30