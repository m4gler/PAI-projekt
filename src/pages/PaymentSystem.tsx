import { useState } from "react"
import { usePlan } from "../context/PlanContext";


export const PaymentSystem = () => {
    const {selectedPlan, setSelectedPlan} = usePlan();
    const [paymentStatus, setPaymentStatus] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);


    return (
        <div className=" flex justify-center items-center h-screen w-screen bg-gradient-to-r from-blue-700 to-blue-600" >
            <div className="flex items-center h-1/2 w-1/2 bg-white rounded-lg shadow-lg p-6">
            <h1>{selectedPlan}</h1>

            </div>
        </div>
    ); 

}