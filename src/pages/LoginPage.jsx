
import Logo from "../assets/Frame 1216257797.png"
import Logo2 from "../assets/meetusvr 3d logo-01 2.png"
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";


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
        <div className="h-screen  flex flex-col md:flex-row font-sans bg-gradient-to-l from-[#E5E5] to-[#E5E5E5] overflow-auto">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:mt-4">
                <div className="w-full max-w-lg">
                    <h1
                        className="text-[56px] font-normal leading-[100%] text-center  px-6 py-3 rounded"
                    >
                        Welcome back
                    </h1>

                    <p className="text-[18px] text-center text-gray-500 mb-8">
                        Step into our shopping metaverse for an unforgettable shopping experience
                    </p>

                    <form onSubmit={handleLogin} className="space-y-5">
                        {/* Email */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            disabled={!isFormValid || loading}
                            className={`w-full py-2 rounded bg-[rgba(148,20,255,1)] text-white font-semibold ${!isFormValid || loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                                }`}
                        >
                            {loading ? "Loading..." : "Login"}
                        </button>


                        <p className="text-center text-sm text-gray-500 mt-2">
                            Don’t have an account? <span className="text-black cursor-pointer">Sign up</span>
                        </p>
                    </form>
                </div>
            </div>


            {/* Right Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 py-10">
                <div className="relative overflow-hidden">
                    <img src={Logo} alt="Logo" className="w-[100%] max-w-[600px]  object-contain" />
                    <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <img src={Logo2} alt="Logo" className="w-[100%] max-w-[400px]  object-contain" />
                    </div>
                </div>


            </div>
        </div>

    );
};

export default LoginPage;
