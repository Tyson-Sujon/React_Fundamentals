// File extention must be .jsx 
// Component name must be start with capital letter 
// there must be a default export function [for discover the component]
// there must be a single root returned 



// ------------ coding ---------

// const TestComponent = () => {
//     return <h1>test component</h1>;
// }
// export default TestComponent; 

const name='by mir';

export default function TestComponent(){
    return (
        <>
    <h1>test component {name}</h1>
    <div>
        <ul className="lex">
            <li>react fragment</li>
            <li>dog</li>
            <li>cat</li>
        </ul>
    </div>
    </>
    )
}