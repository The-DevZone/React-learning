import React, { useEffect } from 'react'

const LifeCycleProps = ({ count, data }) => {

  const handalCount = () => {
    console.log("This is a MountCount");
  }

  const handalData = () => {
    console.log("This is a updateData");
  }

  useEffect(() => {
    handalCount()
  }, []);

  useEffect(() => {
    if(data > 1){
      alert("This is a data");
      handalData()
    }
  }, [data])

  return (
    <>
      <div> This is a count app</div>
      <div> {count}</div>
      <div> {data}</div>
    </>
  )
}

export default LifeCycleProps