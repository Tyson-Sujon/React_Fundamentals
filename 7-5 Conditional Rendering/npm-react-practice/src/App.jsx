import "./App.css";
import Card from "./components/Card";

//akta if kaj korle ja hoi

//  function App() {
//   return (
//     <Card name='sujon' age={65}>
//     <div>

//     </div>
//    </Card>
//   );
// }
// export default App;

// // akadhik condition er jonno
// function App() {
//   return (
//     <>
//       <div>
//         <Card name="sujon" age={65}></Card>
//         <Card name="mobarok ali" age={16}></Card>
//       </div>
//     </>
//   );
// }
// export default App;

// // if -else condition chara sort cuircite er jonno
// function App() {
//   return (
//     <>
//       <div>
//         <Card name="sujon" age={22}></Card>
//         {/* jodi akadhik value pete chao */}
//         <Card name="mobarok ali" age={25}></Card>
//       </div>
//     </>
//   );
// }
// export default App;

// 'ternary operator ' use kore
function App() {
  return (
    <>
      <div>
        <Card name="sujon" age={22}></Card>
        {/* jodi akadhik value pete chao */}
        <Card name="mobarok ali" age={80}></Card>
      </div>
    </>
  );
}
export default App;
