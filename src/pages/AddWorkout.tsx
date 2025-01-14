import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTrain } from "../context/WorkoutContext";

type Workout = {
  name: string;
  description: string;
  typeOfTraining: string;
  duration: string;
};

export const AddWorkout = () => {
  const navigate = useNavigate();
  const { addTrainingPlan } = useTrain();
  const { register, handleSubmit } = useForm<Workout>();

  const onSubmit = (data: Workout) => {
    addTrainingPlan(data);
    console.log("Dodano nowy plan: ", data);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-800">
      <header className="h-24 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-between px-10 shadow-md">
        <div className="text-white text-4xl font-bold">
          Sił<span className="text-yellow-400">KA</span>
        </div>
        <button
          className="hover:text-gray-300"
          onClick={() => navigate("/user-panel")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 18.75a8.25 8.25 0 1115 0M4.5 18.75H4.49z"
            />
          </svg>
        </button>
      </header>

      <div className="p-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-yellow-400 mb-8">Dodaj Nowy Trening</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-xl"
        >
          <div className="mb-6">
            <input
              {...register("name")}
              type="text"
              placeholder="Nazwa Treningu"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <textarea
              {...register("description")}
              placeholder="Opis Treningu"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="mb-6">
            <input
              {...register("typeOfTraining")}
              type="text"
              placeholder="Typ Treningu (Np. Siłowy, Cardio)"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <input
              {...register("duration")}
              type="number"
              placeholder="Czas Trwania (minuty)"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-400 text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-500"
              onClick={() => navigate("/home")}
            >
              Anuluj
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-red-600"
            >
              Dodaj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
