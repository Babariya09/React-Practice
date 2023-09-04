import React from "react";

class Classcompolifecycle extends React.Component{

    constructor() {
        super();
        this.state={
            data:"prince"
        }
    }

    render() {
        return (
            <>
            <h1>{this.state.data}</h1>
        </>
    )
}
}

export default Classcompolifecycle;