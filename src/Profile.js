import React, { useState } from "react";

function Profile() {
    const [loggedIn, setLoggedin] = useState(1);

    // var loggedIn = 2

    return (
        <>
            {
                loggedIn == 1 ?
                    <h1>hello prince</h1>
                    : loggedIn == 2 ?
                        <h1>welcome user2</h1>
                        : <h1>user 3</h1>
            }
        </>
    )
}

export default Profile;