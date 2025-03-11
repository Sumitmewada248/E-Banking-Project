

import { Link } from "react-router-dom"
const Login=()=>{
    return(
 <>
 

 <h1 id="head">Costumer Login</h1>

 <div id="login">

 Enter Email Id:<input type="text"/><br/>
 Enter Password:<input type="password"/><br/>
 <button>Submit</button><br />


 If You Don't Have account <Link to="/register">Click Here!</Link>
 </div>

    </>

    )
}

export default Login