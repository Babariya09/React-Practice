import React,{createRef} from "react";

class Refwithclasscomponent extends React.Component {
    constructor() {
        super();
        this.inputRef = createRef();
    }
    componentDidMount() {
        // console.log(this.inputRef.current.value="1000");
    }
    getValue() {
        // console.log(this.inputRef.current.value="1000");
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color="red";
        this.inputRef.current.style.backgroundColor = "black";
    }
    render(){
        return(
            <>
                <h1>Ref in Reavt With Class component</h1>
                <input type="text" ref={this.inputRef}/>
                <button onClick={()=> this.getValue()}>Check Ref</button>
            </>
        )
    }
}

export default Refwithclasscomponent;

// ========= Note =======

// ref no use dom ne manipulate karva mate thay che.
// ref no mostofly use thayre thay jyare tamare force thi koi kam karvanuj hoi ex change input value, change input color.
// react.js hamesha key che ke ref no use ocho karo.
// react.js kwy che ke dom ne direct manipulate no karo.
// dome ne manipulate kar cho to react slo thache etl state and prop sathe j ramo khali.
// etle ref ne khali emergency maj use karvu.