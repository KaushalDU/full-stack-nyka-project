import { useState } from "react"

const Signup=()=>{
    const [avatar,setAvatar] = useState("") 
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleRegister =()=>{
         const payload = {
            avatar,
            name,
            email,
            password
         }
         fetch("https://easy-tan-cape-buffalo-cap.cyclic.app/api/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
         })
         .then(res=>res.json())
         .then(data=>console.log(data))
         .catch(err=>console.log(err))

    }
    
return (
    <div>
        <h3>Regsiter New User</h3>
        <input type="text" value={avatar} placeholder="Avatar Url.." onChange={(e)=>setAvatar(e.target.value)}/>
        <input type="text" value={name} placeholder="Enter name.." onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={email} placeholder="Enter mail.." onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" value={password} placeholder="Enter Password.." onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleRegister}>Register</button>
    </div>
)
}

export {Signup}