import React, {useState, useEffect, useRef} from 'react'

function App() {

  const [name , setName] = useState('')

  const prevName = useRef('')
 // const [renderCount, setRenderCount] = useState(0)

  useEffect (()=>{

    // ComponentDidMount () & ComponentDidUpdate ()

    prevName.current = name


    return () =>{

      // code here for ComponentWillUnmount

    }

  },[name])

  // ComponentDidMount () : Dependency Array should be written as an empty Array

  // ComponentDidUpdate() : without dependency Array => useEffect() method after every render() methods runs.

  // ComponentDidUpdate() : with Dependency Array => method depending on the changing state




  return (
    <div>

    <input value={name} onChange={e=> setName(e.target.value)}/>

    <div> HALLLOOO HOW ARE YOU.... {name} and it used to be {prevName.current} </div>

    </div>
  )
}

export default App
