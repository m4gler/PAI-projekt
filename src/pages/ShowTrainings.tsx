import { useEffect } from "react";
import { useTrain } from "../context/WorkoutContext";

export const ShowTraining = () => {
  // Destructure training plans, remove functionality, and fetch logic from the context
  const { trainingPlans, removeTrainingPlan, fetchTrainingPlans } = useTrain();

  // Use the useEffect hook to fetch training plans when the component mounts
  useEffect(() => {
    fetchTrainingPlans(); // Fetch the training plans from the database
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col items-center justify-center">
      {trainingPlans.length ? (
        // If there are training plans, map through them and display each plan
        trainingPlans.map((plan, index) => (
          <div
            key={index} // Use the index as a unique key for each plan (consider using a unique ID if available)
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-4"
          >
            {/* Display the details of the training plan */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h1>
            <p className="text-gray-600">Description: {plan.description}</p>
            <p className="text-gray-600">Type: {plan.typeOfTraining}</p>
            <p className="text-gray-600">Duration: {plan.duration} minutes</p>

            {/* Button to delete the training plan */}
            <button
              onClick={() => removeTrainingPlan(plan.name)} // Call the remove function from context
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        // If no training plans are available, display this message
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">No Training Plans Available</h1>
          <p className="text-gray-300">Add a new training plan to see it here.</p>
        </div>
      )}
    </div>
  );
};
