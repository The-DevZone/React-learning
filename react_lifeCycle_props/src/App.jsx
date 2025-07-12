import React, { useState } from 'react'
import LifeCycleProps from './lifeCycleProps'

const App = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  
  return (
    <>
      <div>
        <LifeCycleProps  count={count} data={data} />
      </div>
      <button onClick={() => setCount(count + 1)}> count </button>
      <button onClick={() => setData(data + 1)}>   data  </button>
    </>
  )

}

export default App