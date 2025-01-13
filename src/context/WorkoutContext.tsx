import { createContext, useContext, useState, PropsWithChildren } from "react";

type WorkoutContextType = {
  TrainingPlan: string | null;
  setTrainingPlan: (TrainPlan: string) => void;
};

export const TrainingContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export const TrainingProvider = ({ children }: PropsWithChildren) => {
  const [TrainingPlan, setTrainingPlan] = useState<string | null>(null);

  return (
    <TrainingContext.Provider value={{ TrainingPlan, setTrainingPlan }}>
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
