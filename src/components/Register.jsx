import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [errorRegi, setErrorRegi] = useState('')
    const[successRegi, setSuccessRegi]= useState('')
    

    const handleRegister=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        setErrorRegi('');
        setSuccessRegi('')
        
        console.log(name, email, password, confirmPassword)
        createUser(email, password)
        .then(result=>{
          setSuccessRegi('User created successfully')
            e.target.reset();

            console.log(result.user)
        })
        .catch(error=>{
          setErrorRegi(error.message)
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="name" className="input input-bordered" required />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          {
            errorRegi && <p className="text-red-600">{errorRegi}</p>
          }
          {
            successRegi && <p className="text-green-600">{successRegi}</p>
          }
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirmPassword" placeholder="confirm" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <p>Already have an account?Please <Link to={'/login'}><span className="text-blue-600 font-semibold">Login</span></Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Register;