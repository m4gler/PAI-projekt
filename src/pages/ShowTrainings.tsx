import { useTrain } from "../context/WorkoutContext";

export const ShowTraining = () => {
  const { trainingPlans} = useTrain();

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col items-center justify-center">
      {trainingPlans ? (
        <div className="bg-white py-48 px-60 rounded">
            <p className="text-black ">{trainingPlans.name}</p>
            <p className="text-black">{trainingPlans.description}</p>
            <p className="text-black">{trainingPlans.typeOfTraining}</p>
            <p className="text-black">{trainingPlans.duration}</p>
        </div>

      ) : (

        <div className="bg-white py-48 px-60 rounded"> 
            <p className="text-red-700">Nie ma treningu</p>
        </div>

      )}
    </div>
  );
};
