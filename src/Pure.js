// ==================== use pure component Normaly ====================

// import React, {PureComponent} from "react";

// class Pure extends PureComponent {
// constructor(){
//     super();
//     this.state={
//         count:1
//     }
// }
//     render() {
//         console.log("check-rerendring");
//         return (
//             <>
//                 <h1>Pure Component in React</h1>
//                 <h1>count: {this.state.count}</h1>
//                 {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button> */}  {/* ===== with upadate count ===== */}
//                 {/* <button onClick={()=>this.setState({count:this.state.count})}>Update Count</button> */} {/* ===== without upadate count ===== */}
//             </>
//             )
//     }
// }

// export default Pure;


// ==================== use pure component with props ====================

import React, {PureComponent} from "react";
import Pure2 from "./Pure2";

class Pure extends PureComponent {
constructor(){
    super();
    this.state={
        count:1
    }
}
    render() {
        console.log("check-rerendring");
        return (
            <>
                <h1>Pure Component in React</h1>
                <Pure2 count={this.state.count} />
                {/*<button onClick={()=>this.setState({count:this.state.count=1})}>Update Count</button> */}   {/* ===== with upadate count ===== */}
                {/* <button onClick={()=>this.setState({count:this.state.count})}>Update Count</button> */} {/* ===== without upadate count ===== */}
            </>
            )
    }
}

export default Pure;

// ============================= Note ======================================

// jyare koi vastu ekj hoi sata update par te rerendring karave tyare te ne solve karva pure component vapray but matr class component and function component mate use memo vapray.
// pure component like count 1 che but update na onclick ma te 1 j rahe che te ne badlav va ma aavu nathi chata te component ne rerendring kare che etle pure component no use thay che.


