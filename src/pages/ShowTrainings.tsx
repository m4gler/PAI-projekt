import { useTrain } from "../context/WorkoutContext";

export const ShowTraining = () => {
  const { trainingPlans } = useTrain(); 

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col items-center justify-center">
      {trainingPlans.length ? (
        trainingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-4"
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h1>
            <p className="text-gray-600">Opis: {plan.description}</p>
            <p className="text-gray-600">Typ: {plan.typeOfTraining}</p>
            <p className="text-gray-600">Czas trwania: {plan.duration} minut</p>
          </div>
        ))
      ) : (
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">Brak Planów Treningowych</h1>
          <p className="text-gray-300">Dodaj nowy plan treningowy, aby zobaczyć szczegóły.</p>
        </div>
      )}
    </div>
  );
};
