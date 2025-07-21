import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-6 bg-gradient-to-r from-[#E5E5] to-[#E5E5E5]">
            <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
            <p className="text-xl mb-4">Page not found</p>
            <Link to="/" className="text-purple-600 underline">
                Go back to login
            </Link>
        </div>
    );
};

export default NotFoundPage;
