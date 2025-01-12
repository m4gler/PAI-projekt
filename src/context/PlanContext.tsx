import { createContext, useContext, useState, PropsWithChildren, Children} from "react";

type PlanContextType = {
    selectedPlan: string | null;
    setSelectedPland: (plan: string) => void
} 

const PlanContext = createContext<PlanContextType | undefined>(undefined)

export const PlanProvider = ({Children}) => {
    const [selectedPlan, setSelectedPlan] = useState<string |null>(null)

    return (
        <PlanContext.Provider value = {{selectedPlan, setSelectedPlan}}>
            {children}
        </PlanContext.Provider>
    );
};