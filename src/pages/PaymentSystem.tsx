import { useState } from "react"
import { usePlan } from "../context/PlanContext"


export const PaymentSystem = () => {
    const [selectedPlan, setSelectedPlan] = usePlan();
    const [paymentStatus, setPaymentStatus] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);


    return (
        <div>
            <div ></div>
        
        </div>
    ); 

}