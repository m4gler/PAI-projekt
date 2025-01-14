import { useNavigate } from "react-router-dom";

export const HomeAfterLog = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col">
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

      <div className="flex-grow flex items-center justify-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-xl shadow-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Dodaj swój plan treningowy</h2>
            <p className="text-gray-200">
              Utwórz własny plan treningowy, dostosowany do Twoich potrzeb.
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600"
              onClick={() => navigate("/add-workout")}
            >
              Stwórz plan
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-xl shadow-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Przykładowe treningi</h2>
            <p className="text-gray-200">
              Wybierz gotowe plany treningowe i rozpocznik ćwiczenia.
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600"
              onClick={() => navigate("/show-workout")}
            >
              Zobacz plany
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-xl shadow-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Lokalizacje</h2>
            <p className="text-gray-200">
              Znajdź najbliższą siłownię lub lokalizację naszych klubów.
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600"
              onClick={() => navigate("/locations")}
            >
              Sprawdź lokalizacje
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-xl shadow-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ustaw swoje cele</h2>
            <p className="text-gray-200">
              Wyznacz cele i śledź swoje postępy w treningach.
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600"
              onClick={() => navigate("/goals")}
            >
              Dodaj cele
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-xl shadow-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Zarządzaj treningiem</h2>
            <p className="text-gray-200">
              Organizuj swoje treningi i monitoruj postępy.
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600"
              onClick={() => navigate("/manage-trainings")}
            >
              Zarządzaj
            </button>
          </div>
        </div>
      </div>

      <footer className="h-16 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center">
        <p className="text-gray-300 text-sm">&copy; 2025 SiŁKA. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};
