import React, { PureComponent } from "react";

class Pure2 extends PureComponent {

    render() {
        console.log("Pure2 Component");
        return (
            <>
                <h1>Pure2 Component in React only for prop testing</h1>
                <h1>{this.props.count}</h1>
            </>
            )
    }
}

export default Pure2;