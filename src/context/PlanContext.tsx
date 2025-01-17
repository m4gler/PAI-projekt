import { createContext, useContext, useState, PropsWithChildren } from "react";

type PlanContextType = {
    selectedPlan: string | null;
    setSelectedPlan: (plan: string) => void
} 

export const PlanContext = createContext<PlanContextType | undefined>(undefined)

export const PlanProvider = ({children}: PropsWithChildren) => {
    const [selectedPlan, setSelectedPlan] = useState<string |null>(null)

    return (
        <PlanContext.Provider value = {{selectedPlan, setSelectedPlan}}>
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = (): PlanContextType => {
    const context = useContext(PlanContext);
    if (!context) {
        throw new Error("Uzyj plan provider")
    }
    return context;
}

