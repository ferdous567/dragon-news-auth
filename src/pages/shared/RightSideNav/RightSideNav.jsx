import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold">Login with</h2>

            <div className="">
                <button className="btn btn-outline btn-primary m-3 w-full mx-auto">
                    <FaGoogle></FaGoogle>
                    Google</button>
            </div>
            <div className="">
                <button className="btn btn-outline btn-primary m-3 w-full mx-auto">
                    <FaGithub></FaGithub>
                    Github</button>
            </div>

            <div>
                <h2 className="text-3xl font-bold mt-12 mb-3">Find Us On</h2>
                <div className="border">
                    <a className="flex p-4 border-b" href="">
                        <FaFacebook className="text-xl "></FaFacebook>
                        <span className="ml-2 items-center"> Facebook</span>
                    </a>
                    <a className="flex p-4 border-b" href="">
                        <FaTwitter className="text-xl"></FaTwitter>
                        <span className="ml-2 items-center"> Twitter</span>
                    </a>
                    <a className="flex p-4" href="">
                        <FaInstagram className="text-xl"></FaInstagram>
                        <span className="ml-2 items-center"> Instragram</span>
                    </a>
                </div>
            </div>
            <div className="bg-base-200 p-4 mt-12">
                <h2 className="text-3xl font-bold  mb-3">Q-Zone</h2>
                <div>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;