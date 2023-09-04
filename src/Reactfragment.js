import React, { Fragment } from "react";

function Reactfregment() {
    return (
        <>
            {/* ================== react fragment use for handel multipale element and component ============== */}
            {/* jyare aapde main div nolevi tyare aap de 2 h1 no lai shakiye temj multipale component no use karvo pade tyare aapde
            react fregment vaprvi */}
            {/* First Method Use React.Fragment */}
            {/* Second Method Import Fragment with react on top after write only Fragment */}
            {/* third method write only blank breackets like <>....</> */}
        </>

            // ==================== First Method ================

            // <React.Fragment>
            //     <h1>hey</h1>
            //     <h1>hey</h1>
            // </React.Fragment>

            // ================== Second Method ===============

            // <Fragment>
            //        <h1>hey</h1>
            //        <h1>hey</h1>
            // </Fragment>

            // ================ Third Method ==================

            // <>
            // <h1>hey</h1>
            // <h1>hey</h1>
            // </>

    )
}

export default Reactfregment;