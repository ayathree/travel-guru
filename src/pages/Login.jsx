import { useContext, useRef, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";




const Login = () => {

    const {signIn, google} = useContext(AuthContext)
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const emailRef = useRef(null);

    
    
    const handleLogin=e=>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password)
      
      setErrorMessage('');
        signIn(email, password)
        .then(result=>{
            e.target.reset();
            navigate('/');
            
            console.log(result.user)
        })
        .catch(error=>{
          setErrorMessage(error.message)
            console.log(error)
        })
    }

    const handleGoogle =()=>{
        google()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handlePass =()=>{
      const email = emailRef.current.value;
      
      sendPasswordResetEmail(auth,email)
      .then(
        alert('please check your email')

      )
      .catch(error=>{
        console.log(error)
      })
    }

    
    return (
        <div>
            
            <h2>login</h2>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" onClick={handlePass} className="label-text-alt link link-hover">Forgot password?</a>
            
           
          </label>
          {
            errorMessage && <p className="text-red-600">{errorMessage}</p>
          }
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <p>Do not have an account?Please <Link to={'/register'}><span className="text-blue-600 font-semibold">Register</span></Link></p>
          
          <button onClick={handleGoogle} className="btn">Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;