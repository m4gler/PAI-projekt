import { useNavigate } from "react-router-dom";

export const HomeAfterLog = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-800 to-blue-600">
      <div className="h-24 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-between px-10">
        <div className="text-white text-4xl font-bold">
          Sił<span className="text-yellow-400">KA</span>
        </div>

        <div className="flex items-center space-x-6">
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
        </div>
      </div>

      <div className="p-10">
        <h1 className="text-5xl font-bold text-white text-center mb-8">
          Panel użytkownika
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Dodaj swój plan treningowy
          </h2>
          <p className="text-gray-600">
            Utwórz własny plan treningowy, dostosowany do Twoich potrzeb.
          </p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            onClick={() => navigate("/add-plan")}
          >
            Stwórz plan
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Przykładowe treningi
          </h2>
          <p className="text-gray-600">
            Wybierz gotowe plany treningowe i rozpocznij ćwiczenia.
          </p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            onClick={() => navigate("/example-trainings")}
          >
            Zobacz plany
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lokalizacje</h2>
          <p className="text-gray-600">
            Znajdź najbliższą siłownię lub lokalizację naszych klubów.
          </p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            onClick={() => navigate("/locations")}
          >
            Sprawdź lokalizacje
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ustaw swoje cele
          </h2>
          <p className="text-gray-600">
            Wyznacz cele i śledź swoje postępy w treningach.
          </p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            onClick={() => navigate("/goals")}
          >
            Dodaj cele
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Zarządzaj treningiem
          </h2>
          <p className="text-gray-600">
            Organizuj swoje treningi i monitoruj postępy.
          </p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            onClick={() => navigate("/manage-trainings")}
          >
            Zarządzaj
          </button>
        </div>
      </div>
    </div>
  );
};
