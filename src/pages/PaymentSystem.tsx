import { useState } from "react"
import { usePlan } from "../context/PlanContext";
import { useNavigate } from "react-router-dom";


export const PaymentSystem = () => {
    const navigate = useNavigate()
    // @ts-ignore
    const {selectedPlan, setSelectedPlan} = usePlan();
    // @ts-ignore
    const [paymentStatus, setPaymentStatus] = useState<string>("")
    // @ts-ignore
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const goBack = () => {
      navigate("/")
    }

    if(!selectedPlan) {
      alert("Wybierz plan");
    }


    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="flex flex-col items-center justify-center h-1/2 w-3/4 lg:w-1/2 bg-white rounded-lg shadow-2xl p-10">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
              Wybrano plan: <span className="text-blue-500">{selectedPlan}</span>
            </h1>
    
            <div className="flex space-x-6">
              <button
                className="bg-blue-500 text-white py-3 px-8 rounded-lg font-bold hover:bg-blue-600"
                onClick={() => alert(`Plan "${selectedPlan}" został wybrany!`)}
              >
                Potwierdź płatność
              </button>
              <button
                className="bg-red-500 text-white py-3 px-8 rounded-lg font-bold hover:bg-red-600"
                onClick={() => goBack()}
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      );
    };

