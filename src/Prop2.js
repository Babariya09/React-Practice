// ============================== function component ==================================================

// import Prop from "./Prop";
// import React, { useState } from "react";

// function Prop2() {
//     const [name, setName] = useState("Prince")
//     return(
//         <>

//         {/* <Prop name={"prince"} email={"prince@gmail.com"} other={{mobile:75757575, city:"surat"}}/> */}
//         {/* <Prop name={"babariya"}  email={"prince@gmail.com"}/>
//         <Prop name={"Harry"}  email={"prince@gmail.com"} /> */}

//         {/* <Prop name={name} />

//         <button onClick={()=>{setName("Babariya")}}>Update Name</button> */}

//         </>
//     )
// }

// export default Prop2;

// ========================================= class component ================================================

// import Prop from "./Prop";
// import React, { useState } from "react";

// class Prop2 extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name:"Prince"
//         }
//     }
//     render() {
//         return (
//             <>

//             <Prop name={this.state.name}/>
//             <button onClick={()=> {this.setState({name:"Babariya"})}}>Click Me :)</button>
//         </>
//     )

// }
// }

// export default Prop2;


// ================================== pass function in props [ Parent ] ===========================================

import Prop from "./Prop";

function Prop2() {
    function getData() {
        alert("hello From App");
    }
    return(
        <>
            <Prop data={getData} />
        </>
    )
}

export default Prop2;