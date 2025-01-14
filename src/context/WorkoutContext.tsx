import { createContext, useContext, useState, PropsWithChildren } from "react";

type Workout = {
  name: string;
  description: string;
  typeOfTraining: string;
  duration: string;
};

type WorkoutContextType = {
  trainingPlans: Workout[]; 
  addTrainingPlan: (newPlan: Workout) => void; 
};

export const TrainingContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export const TrainingProvider = ({ children }: PropsWithChildren) => {
  const [trainingPlans, setTrainingPlans] = useState<Workout[]>([]);

  const addTrainingPlan = (newPlan: Workout) => {
    setTrainingPlans((prevPlans) => [...prevPlans, newPlan]); 
  };

  return (
    <TrainingContext.Provider value={{ trainingPlans, addTrainingPlan }}>
      {children}
    </TrainingContext.Provider>
  );
};

export const useTrain = (): WorkoutContextType => {
  const context = useContext(TrainingContext);

  if (!context) {
    throw new Error("useTrain must be used within a TrainingProvider");
  }

  return context;
};
