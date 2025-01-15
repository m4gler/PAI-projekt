import { useState } from "react";
import { usePlan } from "../context/PlanContext";
import { useNavigate } from "react-router-dom";

export const PaymentSystem = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const { selectedPlan, setSelectedPlan } = usePlan();
  // @ts-ignore
  const [paymentStatus, setPaymentStatus] = useState<string>("");
  // @ts-ignore
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const goBack = () => {
    navigate("/");
  };

  // const goAhead - () => {

  // }

  if (!selectedPlan) {
    alert("Wybierz plan");
  }

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-gradient-to-r from-blue-800 to-blue-600">
      <header className="h-16 w-full bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-between px-10 shadow-md">
        <div className="text-white text-4xl font-bold">
          Sił<span className="text-yellow-400">KA</span>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center h-auto w-11/12 max-w-lg bg-white rounded-xl shadow-2xl p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Wybrano plan: <span className="text-blue-500">{selectedPlan}</span>
        </h1>

        <div className="relative w-full h-32 mb-6">
          <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-md transform transition-transform duration-300 hover:rotate-3">
            <div className="p-4 text-white flex flex-col justify-between h-full">
              <h2 className="text-lg font-semibold">Karta Płatnicza</h2>
              <p className="text-base tracking-wide">**** **** **** 3456</p>
              <div className="flex justify-between text-sm">
                <span>MM/RR</span>
                <span>CVV</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4 mb-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Imię"
              className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md mb-4 md:mb-0"
            />
            <input
              type="text"
              placeholder="Nazwisko"
              className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
            />
          </div>

          <input
            type="text"
            placeholder="Numer karty (np. 1234 5678 9012 3456)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
          />

          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Data ważności (MM/RR)"
              className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md mb-4 md:mb-0"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            className="bg-indigo-500 text-white py-2 px-8 rounded-lg font-bold hover:bg-indigo-600 shadow-lg"
            onClick={() => alert(`Plan "${selectedPlan}" został wybrany!`)}
          >
            Potwierdź płatność
          </button>
          <button
            className="bg-red-500 text-white py-2 px-8 rounded-lg font-bold hover:bg-red-600 shadow-lg"
            onClick={() => goBack()}
          >
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
};
