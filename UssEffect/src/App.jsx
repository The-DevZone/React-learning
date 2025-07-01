
import { useEffect, useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log(count + "count mounted")
  }, [])

  useEffect(() => {
    if (count > 1 || data ) {
      console.log("updating mount")
    }
  }, [count, data])

  return (
    <>
      <h1>Using In useEffect count</h1>
      <div>

        countValue:{count}
      </div>
      <div>
        dataCount:{data}
      </div>

      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => setData(data + 1)}>dataCount</button>
    </>
  )
}
export default App