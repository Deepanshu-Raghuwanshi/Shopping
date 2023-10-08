import { useState } from "react"
import { useNavigate } from "react-router-dom"





const SignupPage = ()=>{

const [username,setUsername] = useState('')

const [password,setPassword] = useState('')

const navigate = useNavigate()

console.log(username,password)

const loginHandler = ()=>{
  const name1 = username.trim(' ')
  const password1 = password.trim(' ')
  if(name1.length == 0 || password1.length==0){
    alert('Enter Valid Username and Password')
  }
}

const signupHandler = ()=>{
navigate('/signuppage')
}




    return( <>
      <Header />
      <div className={styles.out}>
        
<h4  style={{borderBottom : '2px solid black',padding:'25px'}}>Login</h4>

 <br/>
 <label className="me-3 ms-2"><b>Username</b></label>
 <input onChange={(e)=>{setUsername(e.target.value)}} 
 className="me-2 ms-2 mb-3" type="text" placeholder="Dipans" required/>
<br/>
<br/>
  <label className="me-4 ms-2"><b>Password</b></label>
 <input onChange={(e)=>{setPassword(e.target.value)}} 
 className="me-2 ms-2 mb-1" type="Password" placeholder="XXXXX" required/>
<br/>
<br/>
<hr/>
 <Button onClick={loginHandler} >Login</Button>
 <hr/>
 <br/>
 <p>Already have account ? .. </p>
 <Button onClick={signupHandler} className="mb-2" variant="warning">Signup</Button>

      </div>
    </>)
}
export default SignupPage