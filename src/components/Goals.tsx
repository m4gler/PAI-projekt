import React, { useState, useEffect } from "react";

type Goal = {
    text: string;
    completed: boolean;
};

export const Goals = () => {
    const [goals, setGoals] = useState<Goal[]>([]);
    const [newGoal, setNewGoal] = useState("");

    const fetchGoals = async (method: string, body?: Goal) => {
        const options: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        try {
            const response = await fetch("http://localhost:5000/api/workouts", options);
            const data = await response.json();

            if (method === "GET") {
                const formattedGoals = data.map((workout: any) => ({
                    text: workout.text || "Nieznany cel",
                    completed: workout.completed || false,
                }));
                setGoals(formattedGoals);
            }

            if (method === "POST" && body) {
                setGoals((prevGoals) => [...prevGoals, body]);
                setNewGoal("");
            }
        } catch (err) {
            console.error("Błąd fetchowania:", err);
        }
    };

    useEffect(() => {
        fetchGoals("GET");
    }, []);

    const addGoal = () => {
        if (!newGoal.trim()) return;
        const newGoalObject = { text: newGoal, completed: false };
        fetchGoals("POST", newGoalObject);
    };

    const toggleGoal = (index: number) => {
        setGoals(goals.map((goal, i) =>
            i === index ? { ...goal, completed: !goal.completed } : goal
        ));
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col items-center justify-center">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-white text-2xl font-bold text-center mb-4">
                    Twoje Cele
                </h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={newGoal}
                        onChange={(e) => setNewGoal(e.target.value)}
                        placeholder="Dodaj nowy cel"
                        className="flex-grow p-2 rounded-l bg-gray-100 text-black focus:outline-none"
                    />
                    <button
                        onClick={addGoal}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-r"
                    >
                        Dodaj
                    </button>
                </div>
                <ul className="space-y-2">
                    {goals.map((goal, index) => (
                        <li
                            key={index}
                            className={`p-3 rounded flex justify-between items-center ${
                                goal.completed ? "bg-green-600" : "bg-blue-800"
                            }`}
                        >
                            <span
                                className={`${
                                    goal.completed ? "line-through" : ""
                                } text-white`}
                            >
                                {goal.text}
                            </span>
                            <button
                                onClick={() => toggleGoal(index)}
                                className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded"
                            >
                                {goal.completed ? "Cofnij" : "Zrealizowane"}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
