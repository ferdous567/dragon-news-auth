import { Link, NavLink } from "react-router-dom";
import userImage from '../../../assets/user.png';

const Navbar = () => {
    const navLink = <>
        <li><NavLink className='' to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
        {/* <li><NavLink to='/career'><button className="btn btn-link text-red-600 btn-sm">Link</button></NavLink></li> */}
    </>
    return (
        <div className='text-center'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userImage} />
                        </div>
                    </label>
                    <Link className="btn bg-sky-400
                     hover:bg-sky-500 active:bg-red-300 px-5 text-xl text-white
                      font-semibold py-2 ml-2">Login</Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;