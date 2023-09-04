import React, { useState, useMemo } from "react";

function Usememo() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multicountMemo = useMemo(function multicount(){
        console.log("multicount");
        return count*5
    },[count])

    return(
        <>
            {/* === usememo use for function component and pure component use for Class component but of both work are same === */}
            <h1>UseMemo Hook In React</h1>
            <h2>Count: {count}</h2>
            <h2>Item: {item}</h2>
            <h2>{multicountMemo}</h2>
            <button onClick={()=> setCount(count+1)}>Update Count</button>
            <button onClick={()=> setItem(item*10)}>Update Count</button>
        </>
    )
}

export default Usememo;

// ============ note ===========

// have me ek function ne khali count na click uper update muku che tyare to te render thay che but jyare hu update item button per hu click karu chu tyare value update na karava chata te function call thay che valuew update nathi thati but te rerender kare che function ne.
// aa vastu ne solve krva mate aapde UseMemo no use kari ye chiye.
// atyare aa khabar nahi pade bu mani lyo ke aa function bov motu che ane karn vager nu rerendring thya rakhe to app hange thay chake and response aav va ma pan vadhare time ley min load vadhu thay.
// aathi aapde usememo vaparvi and use memo thi aapdi app fast bani shake.