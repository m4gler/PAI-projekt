import { createContext, useContext, useState, PropsWithChildren } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

type Workout = {
  name: string;
  description: string;
  typeOfTraining: string;
  duration: string;
};

type WorkoutContextType = {
  trainingPlans: Workout[];
  addTrainingPlan: (newPlan: Workout) => void;
  removeTrainingPlan: (name: string) => void;
  fetchTrainingPlans: () => void;
};

export const TrainingContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export const TrainingProvider = ({ children }: PropsWithChildren) => {
  const [trainingPlans, setTrainingPlans] = useState<Workout[]>([]);

  const addTrainingPlan = (newPlan: Workout) => {
    setTrainingPlans((prevPlans) => [...prevPlans, newPlan]);
  };

  const removeTrainingPlan = (name: string) => {
    setTrainingPlans((prevPlans) => prevPlans.filter((plan) => plan.name !== name));
  };

  const fetchTrainingPlans = async () => {
    try {
      const workoutsCollection = collection(db, "workouts");
      const snapshot = await getDocs(workoutsCollection);
      const plans = snapshot.docs.map((doc) => doc.data() as Workout);
      setTrainingPlans(plans);
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  return (
    <TrainingContext.Provider
      value={{ trainingPlans, addTrainingPlan, removeTrainingPlan, fetchTrainingPlans }}
    >
      {children}
    </TrainingContext.Provider>
  );
};

export const useTrain = (): WorkoutContextType => {
  const context = useContext(TrainingContext);

  if (!context) {
    throw new Error("dfgff");
  }

  return context;
};
