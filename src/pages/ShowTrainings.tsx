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
    <div className="min-h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col items-center py-10 px-4">
      {trainingPlans.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {trainingPlans.map((plan, index) => (
            <div
              key={index} // Use the index as a unique key for each plan (consider using a unique ID if available)
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col space-y-4 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Display the details of the training plan */}
              <h1 className="text-2xl font-bold text-gray-800 text-center">{plan.name}</h1>
              <p className="text-gray-600">Description: {plan.description}</p>
              <p className="text-gray-600">Type: {plan.typeOfTraining}</p>
              <p className="text-gray-600">Duration: {plan.duration} minutes</p>

              {/* Button to delete the training plan */}
              <button
                onClick={() => removeTrainingPlan(plan.name)} // Call the remove function from context
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 self-center"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        // If no training plans are available, display this message
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">No Training Plans Available</h1>
          <p className="text-gray-300 text-lg">Add a new training plan to see it here.</p>
        </div>
      )}
    </div>
  );
};
