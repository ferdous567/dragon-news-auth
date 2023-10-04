import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">New to Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" />
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
                                    <input type="checkbox" name="" id="terms" />
                                    <label htmlFor="terms">
                                        <a href="#" className=" hover:underline">Accept our all terms and conditions.</a>
                                    </label>

                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>


                        <p className="my-2 text-center">Have an account? Please
                            <Link to='/login' className="font-semibold text-blue-600"> Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;