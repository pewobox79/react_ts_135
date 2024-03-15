import { useState } from "react";
import EffectTest from "../components/EffectTest";

const Homepage = () => {

  const [color,setColor] = useState<boolean>(false);
  
  /* let newColor = false;
  console.log("newColor", newColor) */


  function handleClick(){
    setColor(!color)
  }

  return (
    <div>
      <h1 style={{ color: color ? "red" : "yellow" }}>Homepage</h1>
      <button onClick={handleClick}>Switch</button>

      <EffectTest/>
    </div>
  )
}

export default Homepage
