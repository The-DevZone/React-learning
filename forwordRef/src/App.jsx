import { useRef } from "react"
import User from "./User";
import { Outlet } from "react-router";

function App() {

  const forwordRef = useRef();

  const colors = ["red", "green", "blue", "yellow", "purple", "pink", "brown", "black", "white"];
  const names = ["Rohit", "Mohit", "Sumit", "Amit", "Monika", "Kavita", "Ramesh", "Suresh", "Priya", "Neha"];


  function handalClick() {
    const selectedIndex = Math.floor(Math.random() * colors.length)
    const selectedColor = colors[selectedIndex]
    const selectedNameIndex = Math.floor(Math.random() * names.length)
    const selectName = names[selectedNameIndex]

    forwordRef.current.value = selectName;
    forwordRef.current.style.backgroundColor = selectedColor;
    forwordRef.current.focus();
  }

  return (
    <>
      <User handalClick={handalClick} ref={forwordRef} />
      <button onClick={handalClick}>Click Me</button>
      <Outlet />

    </>
  )
}
export default App