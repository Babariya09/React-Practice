// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//     const navigate = useNavigate();

//     //================= first method =========

//     // const navTopage = () => {
//     //     let x = false;
//     //     if (x) {
//     //         navigate('/about');
//     //     } else {
//     //         navigate('/filter');
//     //     }
//     // }

//     // =============== sec method =============

//     const navTopage = (url) => {
//         navigate(url)
//     }


//     return(
//         <>
//             <h1>Home Page!</h1>

//             {/* ============= Normal Routing with Button ============= */}

//             {/* <button onClick={()=>navigate('/about')}>Go to About Page</button>
//             <button onClick={()=>navigate('/filter')}>Go to Filter Page</button> */}

//             {/* ============== Eouting with Butoon and function =================== */}

//             {/* ============ First Mehtod ============ */}

//             {/* <button onClick={()=>navTopage()}>Go to About Page</button>
//             <button onClick={()=>navTopage()}>Go to Filter Page</button> */}

//             {/* ========= sec methos ========= */}
//             <button onClick={()=>navTopage('/about')}>Go to About Page</button>
//             <button onClick={()=>navTopage('/filter')}>Go to Filter Page</button>
//         </>
//     )
// }

// export default Home;


// ======================== use Location ==================


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {

    const location = useLocation();
    console.log(location);

    return(
        <>
            <h1>Home Page!</h1>
        </>
    )
}

export default Home;