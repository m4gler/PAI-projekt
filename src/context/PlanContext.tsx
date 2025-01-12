import { createContext, useContext, useState, PropsWithChildren, Children} from "react";

type PlanContextType = {
    selectedPlan: string | null;
    setSelectedPlan: (plan: string) => void
} 

const PlanContext = createContext<PlanContextType | undefined>(undefined)

export const PlanProvider = ({Children}: PropsWithChildren) => {
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
}