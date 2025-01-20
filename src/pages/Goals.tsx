import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

type Goal = {
  title: string;
  description: string;
  deadline: string;
};

export const Goals = () => {
  const { register, handleSubmit, reset } = useForm<Goal>();
  const navigate = useNavigate();

  const onSubmit = async (data: Goal) => {
    try {
      const database = collection(db, "goals"); 
      await addDoc(database, data);
      alert("Goal has been successfully saved!");
      reset(); 
    } catch (error) {
      console.error("Error saving goal:", error);
      alert("An error occurred while saving the goal. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <header className="h-16 w-full bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-between px-10 shadow-md">
        <div className="text-white text-4xl font-bold">
          Gym<span className="text-yellow-400">Fit</span>
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
            Set Your Goals
          </h2>

          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Goal Title"
            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg"
          />

          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Goal Description"
            rows={4}
            className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg"
          ></textarea>


          <input
            {...register("deadline", { required: "Deadline is required" })}
            type="date"
            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 px-6 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-orange-700 transition duration-300 shadow-xl"
          >
            Save Goal
          </button>
        </form>
      </div>

      <footer className="h-16 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center">
        <p className="text-gray-300 text-sm">&copy; 2025 GymFit. All rights reserved.</p>
      </footer>
    </div>
  );
};
