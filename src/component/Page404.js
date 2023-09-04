import React from "react";
import { Link } from "react-router-dom";

function Page404() {
    return(
        <>
            <h1>404 Page</h1>
            <p>This Url Is incorrect!!</p>
            <Link to="/">Go to Home Page</Link>
        </>
    )
}

export default Page404;