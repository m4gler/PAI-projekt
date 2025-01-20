import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { useUser } from "../context/UserContex";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm<User>();
  const { addUser, setCurrentUser } = useUser();
  const navigate = useNavigate(); 

  const onSubmit = async (data: User) => {
    try {
      await addUser(data); 
      setCurrentUser(data); 
    } catch (error) {
      alert("Error during registration. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <header className="h-16 w-full bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-between px-10 shadow-md">
        <div className="text-white text-4xl font-bold">
          Gym<span className="text-yellow-400">Buddy</span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-white text-lg hover:text-yellow-400 transition duration-300"
        >
          Back
        </button>
      </header>

      <div className="flex justify-center items-center flex-grow">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-12 rounded-3xl shadow-2xl w-11/12 max-w-lg space-y-8"
        >
          <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
            Sign Up
          </h2>

          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            placeholder="First Name"
            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg"
          />

          <input
            {...register("lastName", { required: "Last name is required" })}
            type="text"
            placeholder="Last Name"
            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg"
          />

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Email"
            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg"
          />

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            placeholder="Password"
            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg"
          />

          <button
          onClick={() => navigate("/payment")}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 px-6 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-orange-700 transition duration-300 shadow-xl"
          >
            Sign Up
          </button>
        </form>
      </div>

      <footer className="h-16 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center">
        <p className="text-gray-300 text-sm">&copy; 2025 GymBuddy. All rights reserved.</p>
      </footer>
    </div>
  );
};
