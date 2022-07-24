import { useEffect, useState } from "react";

function Timer(){
const [count,setCount] = useState(0);



useEffect(()=>{
  console.log("useEffect")
  const id = setInterval(()=> {
    console.log("setInterval")
    setCount((prev)=>prev+1);
  },1000);

const cleanup =()=>{
  clearInterval(id);
};
return cleanup;

},[]);

  return(
    <div>
      {count}
    </div>
  )
}

export default Timer;