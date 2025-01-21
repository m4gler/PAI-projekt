import { useForm } from "react-hook-form"; // Importing react-hook-form for form handling
import { useNavigate } from "react-router-dom"; // For navigation
import { useTrain } from "../context/WorkoutContext"; // Importing context for managing workouts
import { db } from "../firebaseConfig"; // Firebase database configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore functions for database operations

// Defining the structure of a Workout object
type Workout = {
  name: string;
  description: string;
  typeOfTraining: string;
  duration: string;
};

export const AddWorkout = () => {
  const navigate = useNavigate(); // React Router hook for navigation
  const { addTrainingPlan } = useTrain(); // Function from context to add training plans locally
  const { register, handleSubmit } = useForm<Workout>(); // Hook for managing form inputs

  // Function to send the workout to the custom API
  const sendToAPI = async (workout: Workout) => {
    try {
      const response = await fetch("http://localhost:5000/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workout),
      });
      if (!response.ok) {
        throw new Error("Error while sending to API");
      }
      console.log("Added to API:", workout);
    } catch (error) {
      console.error("Error while sending to API:", error);
    }
  };

  // Function to send the workout to Firebase Firestore
  const sendToFirebase = async (workout: Workout) => {
    try {
      const workoutsCollection = collection(db, "workouts"); // Reference to the Firestore "workouts" collection
      await addDoc(workoutsCollection, workout); // Adding the workout to Firestore
      console.log("Added to Firebase:", workout);
    } catch (error) {
      console.error("Error while sending to Firebase:", error);
    }
  };

  // Function called when the form is submitted
  const onSubmit = async (data: Workout) => {
    try {
      addTrainingPlan(data); // Adding the workout locally using context
      await sendToAPI(data); // Sending the workout to the custom API
      await sendToFirebase(data); // Sending the workout to Firebase
      alert("Workout added successfully!"); // Notify the user of success
    } catch (error) {
      alert(error)
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-800">
      {/* Header with navigation */}
      <header className="h-24 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-between px-10 shadow-md">
        <div className="text-white text-4xl font-bold">
          Gym<span className="text-yellow-400">Buddy</span>
        </div>
        <button
          className="hover:text-gray-300"
          onClick={() => navigate("/user-panel")} // Navigate to the user panel
        >
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
        </button>
      </header>

      {/* Main content */}
      <div className="p-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-yellow-400 mb-8">Add New Workout</h1>

        {/* Form for adding a new workout */}
        <form
          onSubmit={handleSubmit(onSubmit)} // Handling form submission
          className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-xl"
        >
          {/* Input for workout name */}
          <div className="mb-6">
            <input
              {...register("name")} // Registering input for workout name
              placeholder="Workout Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input for workout description */}
          <div className="mb-6">
            <textarea
              {...register("description")} // Registering input for workout description
              placeholder="Workout Description"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Input for workout type */}
          <div className="mb-6">
            <input
              {...register("typeOfTraining")} // Registering input for type of training
              placeholder="Type of Workout (e.g., Strength, Cardio)"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input for workout duration */}
          <div className="mb-6">
            <input
              {...register("duration")} // Registering input for workout duration
              type="number"
              placeholder="Duration (minutes)"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Form buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-400 text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-500"
              onClick={() => navigate("/home")} // Navigate back to home
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-red-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
