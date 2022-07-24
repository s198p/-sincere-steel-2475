import React,{useState} from 'react'

const Formp = () => {

    const [projectname,setProjectname] = useState("");
    const [client,setClient] = useState("");
    const [time,setTime] = useState("");
    const[list,setList]=useState([]);

    const handleSubmit=(e)=> {
        e.preventDefault();
        const data={projectname,client,time};
        if(projectname&&client&&time){
            setList((ls)=>[...ls,data])
            setProjectname("");
            setClient("");
            setTime("");
        }

    }
// console.log(user)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name="projectname" value={projectname} onChange={(e)=>setProjectname(e.target.value)} placeholder="Projectname" />
            
            <input  name="client" value={client} onChange={(e)=>setClient(e.target.value)} placeholder="client" />
        
            <input type="number" name="time" value={time} onChange={(e)=>setTime(e.target.value)} placeholder="time" />
            <button>Add</button>
        </form>
        {/* <div>
            {
                list.map((a)=><div>
                    <li>{a.projectname}</li>
                    <li>{a.client}</li>
                    <li>{a.time}</li>
                </div>)
            }
        </div> */}
        
            
       
       
    </div>
  )
}

export default Formp