import React, { useState } from "react";
import { useWorkout, WorkoutProvider } from "../context/ManageTrainingContext";

export const ManageTraining = () => {
    const { workouts, addWorkout, removeWorkout } = useWorkout();
    const [newWorkoutName, setNewWorkoutName] = useState("");

    const handleAddWorkout = () => {
        if (newWorkoutName.trim()) {
            addWorkout(newWorkoutName);
            setNewWorkoutName("");
        }
    };

    return (
        <div className="h-screen w-screen bg-gray-100 flex flex-col">
  
            <div className="h-24 bg-black flex items-center justify-between px-10">
                <div className="text-white text-4xl font-bold">
                    Workout<span className="text-yellow-400">List</span>
                </div>
                <nav>
                    <ul className="flex space-x-8 text-white text-2xl">
                        <li className="hover:text-gray-400"><a href="home">Home</a></li>
                        <li className="hover:text-gray-400"><a href="#">About</a></li>
                        <li className="hover:text-gray-400"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="relative flex flex-col justify-center items-center h-[80vh] bg-blue-900 text-white text-center">
                <h1 className="text-6xl font-extrabold mb-6 leading-snug max-w-4xl">
                    Manage Your Workouts Efficiently</h1>
                <p className="text-2xl max-w-3xl mb-8">Add, remove, and track your workout routines in one place.</p>

                <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
                    <input
                        type="text"
                        placeholder="New workout"
                        value={newWorkoutName}
                        onChange={(e) => setNewWorkoutName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"/>
                    <button onClick={handleAddWorkout} className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500">
                        Add Workout
                    </button>
                </div>
            </div>

            <div className="py-10 bg-gray-200">
                <h2 className="text-4xl font-bold text-center text-black mb-10">Your Workout List</h2>
                <div className="flex flex-col items-center">
                    {workouts.length > 0 ? (
                        workouts.map((workout) => (
                            <div key={workout.id} className="bg-white p-4 rounded-lg shadow-md w-3/4 flex justify-between items-center mb-4">
                                <span className="text-lg text-gray-800">{workout.name}</span>
                                <button onClick={() => removeWorkout(workout.id)} className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600">Remove</button>
                            </div>
                        ))
                    ) : (
                        <p className="text-lg text-gray-700">No workouts added yet. Start by adding one!</p>
                    )}
                </div>
            </div>
        </div>
    );
};
