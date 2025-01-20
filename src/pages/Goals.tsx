import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

type Goal = {
  id?: string; // Optional ID for managing deletions
  title: string;
  description: string;
  deadline: string;
};

export const Goals = () => {
  const { register, handleSubmit, reset } = useForm<Goal>();
  const [goals, setGoals] = useState<Goal[]>([]); // State to store goals
  const navigate = useNavigate();

  // Function to fetch goals from Firebase
  const fetchGoals = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "goals"));
      const fetchedGoals = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Goal[];
      setGoals(fetchedGoals);
    } catch (error) {
      alert("error")
    }
  };

  // Function to add a new goal
  const onSubmit = async (data: Goal) => {
    try {
      const database = collection(db, "goals");
      await addDoc(database, data);
      reset();
      fetchGoals(); // Refresh the goal list
    } catch (error) {
      alert("Error adding goal.");
    }
  };

  // Function to delete a goal
  const removeGoal = async (id: string) => {
    try {
      await deleteDoc(doc(db, "goals", id));
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  // Fetch goals on component mount
  useEffect(() => {
    fetchGoals();
  }, []);

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

      {/* Display goals */}
      <div className="flex flex-col items-center mt-8">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-4"
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{goal.title}</h1>
            <p className="text-gray-600">Description: {goal.description}</p>
            <p className="text-gray-600">Deadline: {goal.deadline}</p>
            <button
              onClick={() => goal.id && removeGoal(goal.id)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <footer className="h-16 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center">
        <p className="text-gray-300 text-sm">&copy; 2025 GymBuddy. All rights reserved.</p>
      </footer>
    </div>
  );
};
