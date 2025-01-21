import { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Import Firebase database configuration
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; // Firestore functions

// Type for a goal object
type Goal = {
  id: string; // Unique identifier for each goal (from Firestore)
  title: string; // Title of the goal
  description: string; // Description of the goal
  deadline: string; // Deadline for achieving the goal
};

export const ShowGoals = () => {
  const [goals, setGoals] = useState<Goal[]>([]); // State to store goals

  // Function to fetch goals from Firestore
  const fetchGoals = async () => {
    try {
      const goalsCollection = collection(db, "goals"); // Reference to the "goals" collection in Firestore
      const snapshot = await getDocs(goalsCollection); // Fetching all documents from the collection
      const fetchedGoals = snapshot.docs.map((doc) => ({
        id: doc.id, // Firestore document ID
        ...doc.data(),
      })) as Goal[];
      setGoals(fetchedGoals); // Updating the state with fetched goals
    } catch (error) {
      console.error("Error fetching goals:", error); // Log any errors
    }
  };

  // Function to delete a goal from Firestore
  const deleteGoal = async (id: string) => {
    try {
      await deleteDoc(doc(db, "goals", id)); // Deleting a specific document from Firestore
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id)); // Updating the state to remove the deleted goal
    } catch (error) {
      alert("Error"); // Notify the user of the error
    }
  };

  // Fetch goals when the component mounts
  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col items-center justify-center">
      <header className="h-16 bg-gradient-to-r from-blue-950 to-blue-900 w-full flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Your Goals</h1>
      </header>

      <div className="p-6 w-full max-w-4xl">
        {goals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal) => (
              <div
                key={goal.id} // Unique key for each goal
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-xl font-bold text-blue-900 mb-2">{goal.title}</h2>
                <p className="text-gray-600 mb-4">{goal.description}</p>
                <p className="text-gray-400 mb-4">Deadline: {goal.deadline}</p>
                <button
                  onClick={() => deleteGoal(goal.id)} // Delete the goal when clicked
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-4">No Goals Found</h2>
            <p className="text-gray-300">Add new goals to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};
