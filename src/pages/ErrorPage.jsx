import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Oops! Page not found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={handleGoBack}
        className="btn btn-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
