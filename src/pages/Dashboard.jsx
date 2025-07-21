import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const DashboardPage = () => {
    const { user, token, logout } = useAuthStore();
    const navigate = useNavigate();

    // Redirect لو مفيش توكن
    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    if (!user) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 md:p-12 bg-gradient-to-r from-[#E5E5] to-[#E5E5E5]">
            <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name || "User"} 👋</h1>

            <div className="bg-white shadow-md rounded p-6 w-full max-w-md space-y-4 text-left">
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Id:</strong> {user?.id}</p>





            </div>

            <button
                onClick={() => {
                    logout();
                    navigate("/");
                }}
                className="mt-6  secondary-color text-white px-4 py-2 rounded hover:bg-purple-600"
            >
                Logout
            </button>
        </div>
    );
};

export default DashboardPage;
