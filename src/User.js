import React, { useState } from "react";


function User() {

    const [data, setData] = useState("anil");

    function Apple () {
        setData("babariya")
    }
    console.warn("____________");
    return(
        <>
        
        <h1>{data}</h1>
        <button onClick={()=> Apple()}>Click Me!</button>
        
        </>
    )
}

export default User;


// import React, { Component } from 'react';

// export default class User extends Component {
    
//     constructor() {
//         super();
//         this.state = {
//             data:0
//         }
    
//     }

//     apple() {
//         this.setState({
//             data:this.state.data+1
//         })
//         // alert("apple")
//     }


//     render() {
//         return(
//             <>
//             <h1>{this.state.data}</h1>
//             <button onClick={()=>this.apple()}>Update Data</button>
//             </>
//         )
//     }
// }