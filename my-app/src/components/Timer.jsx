import React, { useEffect, useState } from 'react'

function Timer() {

       const [count, setCount] = useState(0);
    useEffect(()=> {
        console.log("screen rendered or refresed");
        // checkCount();
        //setCount(1);
        setTimeout(()=> {
          setCount((pre) => {return pre + 1})
        }, 2000)
    }, [])

    function checkCount() {
        if(count > 10) {
            setCount(1);
        }
    }


     function updateCount() {
        setCount((pre) => {return pre + 1})
     }

  return (
    <>
       <h1>Timer to understand useEffect</h1>
       <h1>i have render {count} times</h1>
       <button onClick={updateCount} >Increase Count</button>
    </>
  )
}

export default Timer