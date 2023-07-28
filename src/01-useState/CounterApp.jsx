import { useState } from "react"


export const CounterApp = () => {

    const [ { counter1, counter2, counter3 } , setCounter] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
    });

  return (
    <>
        <h1>Counter: { counter1 }</h1>
        <h1>Counter: { counter2 }</h1>
        <h1>Counter: { counter3 }</h1>

        <hr/>

        <button className="btn btn-dark" onClick={ () => setCounter( prevState => ( { 
            ...prevState, 
            counter1: prevState.counter1 + 1 
            } ) ) } 
            >+1</button>
        <button className="btn btn-dark" onClick={ () => setCounter( prevState => ({ ...prevState, counter1: prevState.counter1 - 1 })) } >-1</button>

    </>
  )
}
