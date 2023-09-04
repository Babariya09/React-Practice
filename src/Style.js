import React from "react";
import './style.css';
import style from "./custom.module.css"

function Style() {
    return(
        <>
            <h1 className="primary">style type 1</h1> {/* style.css */}
            <h1 style={{color:"red", backgroundColor:"blue"}}>style type 2</h1> {/* inline.css */}
            <h1 className={style.success}>style type 3</h1> {/* custom.css */}
        </>
    )
}

export default Style;