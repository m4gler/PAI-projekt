import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContex";

export const HomeAfterLog = () => {
  const navigate = useNavigate(); // Hook to navigate between routes
  const { currentUser } = useUser(); // Retrieve the current logged-in user from context

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-gray-900 via-blue-800 to-blue-700 flex flex-col">
      {/* Header Section */}
      <header className="h-24 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-between px-10 shadow-lg">
        <div className="text-white text-4xl font-bold">
          Gym<span className="text-yellow-400">Buddy</span>
        </div>
        <button className="hover:text-gray-300 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 18.75a8.25 8.25 0 1115 0M4.5 18.75H4.49z"
            />
          </svg>
          <span className="text-white text-lg">
            {/* Display current user's name if logged in */}
            {currentUser
              ? `${currentUser.firstName} ${currentUser.lastName}`
              : "User"}
          </span>
        </button>
      </header>

      {/* Main Content Section */}
      <div className="flex-grow flex items-center justify-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Add Training Plan Card */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 rounded-2xl shadow-xl text-white text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">Add Your Training Plan</h2>
            <p className="text-gray-200 mb-6">
              Create a custom training plan tailored to your fitness goals.
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 shadow-lg"
              onClick={() => navigate("/add-workout")}
            >
              Create Plan
            </button>
          </div>

          {/* View Sample Workouts Card */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 rounded-2xl shadow-xl text-white text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">Sample Workouts</h2>
            <p className="text-gray-200 mb-6">
              Choose ready-made training plans and start exercising today.
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 shadow-lg"
              onClick={() => navigate("/show-workout")}
            >
              View Plans
            </button>
          </div>

          {/* Set Goals Card */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 rounded-2xl shadow-xl text-white text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">Set Your Goals</h2>
            <p className="text-gray-200 mb-6">
              Define your personal goals and track your progress effortlessly.
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 shadow-lg"
              onClick={() => navigate("/goals")}
            >
              Add Goals
            </button>
          </div>

          {/* Show Goals Card */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 rounded-2xl shadow-xl text-white text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">Show Goals</h2>
            <p className="text-gray-200 mb-6">
              View your goals and monitor your achievements easily.
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 shadow-lg"
              onClick={() => navigate("/show-goals")}
            >
              Show Goals
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="h-16 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center">
        <p className="text-gray-300 text-sm">&copy; 2025 GymBuddy. All rights reserved.</p>
      </footer>
    </div>
  );
};
