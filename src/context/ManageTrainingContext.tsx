import { createContext, useContext, useState, type PropsWithChildren } from "react";

type Workout = {
    id: string;
    name: string;
};

type WorkoutContextType = {
    workouts: Workout[];
    addWorkout: (name: string) => void;
    removeWorkout: (id: string) => void;
};

export const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({ children }: PropsWithChildren) => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);

    const addWorkout = (name: string) => {
        const newWorkout: Workout = { id: Date.now().toString(), name };
        setWorkouts((prev) => [...prev, newWorkout]);
    };

    const removeWorkout = (id: string) => {
        setWorkouts((prev) => prev.filter((workout) => workout.id !== id));
    };

    return (
        <WorkoutContext.Provider value={{ workouts, addWorkout, removeWorkout }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkout = (): WorkoutContextType => {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error("useWorkout must be used within a WorkoutProvider");
    }
    return context;
};
