import React from "react";
import { Link } from "react-router-dom";
function Login() {
    return (
        <form action="/action_page.php" method="post">
           

            <div className="container" style={{width:"26%"}}>
              <h1>Login</h1>
             
                <input type="text" placeholder="Enter Username" name="uname" required />

        
                <input type="password" placeholder="Enter Password" name="psw" required />
                
                <button type="submit">Login</button>
                <label>
                Don't have an account?<Link to="/signup">Signup </Link>
                </label>
                <div className="container" style={{backgroundColor:"#f1f1f1"}}>
              
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
            </div>

            
        </form>
    );
}

export default Login;
