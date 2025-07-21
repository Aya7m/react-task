
import Logo from "../assets/Frame 1216257797.png"
import Logo2 from "../assets/meetusvr 3d logo-01 2.png"

import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import StableShipe from "./StableShipe";


const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuthStore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const isEmailValid = email.includes("@") && email.includes(".");
    const isFormValid = email && password && isEmailValid;

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await login({ email, password });
        setLoading(false);

        if (result.success) {
            navigate("/dashboard");
        }
    };

    return (
        <div className=" relative min-h-screen min-color flex flex-col md:flex-row font-sans  overflow-hidden">
           
           <StableShipe/>

            {/* Left Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:mt-4 z-10">
                <div className="w-full max-w-lg md:m-0">
                    <h1
                        className="text-[56px] min-text-color font-normal leading-[100%] text-center  px-6 py-3 rounded"
                    >
                        Welcome back
                    </h1>

                    <p className="text-[18px] md:w-[70%] mx-auto text-center  secondary-text-color mb-8 px-6 md:px-0 sm:mb-12">
                       Step into our shopping metaverse for an 
                       
                       unforgettable shopping experience
                    </p>

                    <form onSubmit={handleLogin} className="space-y-5 w-[70%] m-auto">
                        {/* Email */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 secondary-text-color" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 pr-4 py-2 rounded-md bg-white focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 secondary-text-color" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-2 rounded-md bg-white focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            disabled={!isFormValid || loading}
                            className={`w-full py-2 rounded secondary-color text-white font-semibold ${!isFormValid || loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
                                }`}
                        >
                            {loading ? "Loading..." : "Login"}
                        </button>


                        <p className="text-center text-[14px] secondary-text-color mt-2">
                            Don’t have an account? <span className="secondary-text-color cursor-pointer ">Sign up</span>
                        </p>
                    </form>
                </div>
            </div>


            {/* Right Section */}
            <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 py-10 z-10">

                <img src={Logo} alt="Logo" className="w-[100%] max-w-[600px]  object-contain" />
                <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <img src={Logo2} alt="Logo" className="w-[100%] max-w-[400px]  object-contain" />
                </div>




            </div>
        </div>

    );
};

export default LoginPage;
