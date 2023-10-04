import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location in the login page', location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'))
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        

        signIn(email, password)
        .then(result =>{
            console.log(result.user);
            
            // navigate after login
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error.message)
        })
       
    }

    
    
    return (
        <div>
            <Navbar></Navbar>
            <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">Login now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className="text-center ">-----Or continue with-----</p>
                        <div className="flex mr-2 pl-24 mt-2">
                            <button className="btn-sm text-2xl"><FaFacebook></FaFacebook></button>
                            <button className="btn-sm text-2xl"><FaGithub></FaGithub></button>
                            <button className="btn-sm text-2xl"><FaGoogle></FaGoogle></button>
                        </div>
                        <p className="my-2 text-center">New Here! Please
                            <Link to = '/register' className="font-semibold text-blue-600"> Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;