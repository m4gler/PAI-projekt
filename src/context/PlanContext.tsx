import { createContext, useContext, useState, PropsWithChildren } from "react";

// Define the structure of the PlanContext
type PlanContextType = {
  selectedPlan: string | null; // Stores the currently selected plan (or null if none)
  setSelectedPlan: (plan: string) => void; // Function to update the selected plan
};

// Create a context for managing plan-related data
export const PlanContext = createContext<PlanContextType | undefined>(undefined);

// Define a provider component for the PlanContext
export const PlanProvider = ({ children }: PropsWithChildren) => {
  // State to store the selected plan
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    // Provide the state and the function to update it to the component tree
    <PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

// Custom hook to access the PlanContext
export const usePlan = (): PlanContextType => {
  const context = useContext(PlanContext); // Access the context

  // Throw an error if the hook is used outside of its provider
  if (!context) {
    throw new Error("error");
  }

  return context; // Return the context value
};
