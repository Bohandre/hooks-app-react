import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setcounter] = useState(0);

    const incrementFather = useCallback( ( value ) => {
        setcounter( ( counter ) => counter + value );
    },
    [],
    )

    // const increment = () => {
    //     setcounter( counter +1 );
    // }

  return (
    <>
    
        <h1>useCallback Hook: { counter }</h1>
        <hr/>

        <ShowIncrement increment={ incrementFather }/>


    
    </>
  )
}
