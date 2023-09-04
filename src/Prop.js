// ======================== function component ======================

// function Prop(props) {
//     console.log(props);
//     return(
//         <>
        
//         <div style={{backgroundColor:"skyblue", margin:"10px", padding:"10px"}}>
//             <h1>Hello {props.name}</h1>
//             {/* <h1>Email {props.email}</h1> */}
//             {/* <h1>Mobile {props.other.mobile}</h1>
//             <h1>City {props.other.city}</h1> */}
//         </div>
        
//         </>
//     )
// }

// export default Prop;

// =============================== class component ===========================

// import React, { Component } from "react";

// export default class prop extends React.Component{
//     render() {
//         console.log(this.props);
//         return(
//             <>
//                 <div>{this.props.name }</div>
//             </>
//         )
//     }
// }

// ============================ pass function in props [ Child ] ===============================


function Prop(prop) {
    return(
        <>
            <button onClick={() => prop.data() }>Call Data Function</button>
        </>
    )
}

export default Prop;

