import { useState } from "react"

const Login=()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin =()=>{
         const payload = {
            email,
            password
         }
         fetch("https://easy-tan-cape-buffalo-cap.cyclic.app/api/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
         })
         .then(res=>res.json())
         .then((data)=>{
            console.log(data);
            localStorage.setItem("token",data.token)
         })
         .catch(err=>console.log(err))

    }
    
return (
    <div>
        <h3>Login User</h3>
        <input type="text" value={email} placeholder="Enter mail.." onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" value={password} placeholder="Enter Password.." onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
)
}

export {Login}