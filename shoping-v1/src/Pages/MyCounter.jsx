import React, { useState } from 'react'
//useState hook to update the value of a variable

function MyCounter() {
    const [count, setCountFunction] = useState(0)
    //modify any element then you need to take help of useState

    function IncrementCounter(){
        setCountFunction(count+1);
        console.log(count);
        console.log("function is called increment");
    }

    function DecrementCounter(){
        if(count<1){
            alert("Negative numbers are not allowed")
        }else{
            setCountFunction(count-1)
        }
        console.log(count);
        console.log("function is called Decrement");
        
    }
    //one more button multipler * with its current value
    //if number is going beyond 2000 then it should not be allowed

  return (
    <div>
        <h2>Counters's current value : {count} </h2>

        <div>
            
        <button onClick={IncrementCounter}>Increment button</button>
                <hr />
        <button onClick={DecrementCounter}>Decrement button</button>
            
        </div>

    </div>
  )
}

export default MyCounter