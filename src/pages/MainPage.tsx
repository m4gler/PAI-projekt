import { usePlan } from "../context/PlanContext";
import { Navigate, useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { setSelectedPlan } = usePlan();
  const navigate = useNavigate()

  const handlePlan = (plan: string) => {
    setSelectedPlan(plan);
    navigate("/payment", {state: {plan}})
    console.log("plan: ", plan);
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col">
      {/* Pasek nawigacji */}
      <div className="h-24 bg-black flex items-center justify-between px-10">
        <div className="text-white text-4xl font-bold">
          Sił<span className="text-yellow-400">KA</span>
        </div>

        <nav>
          <ul className="flex space-x-8 text-white text-2xl">
            <li className="hover:text-gray-400">
              <a href="#">Nasze Kluby</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#">Cennik</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#">Kontakt</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-white text-2xl hover:text-gray-400">Mój klub</button>
          <button className="text-white text-2xl hover:text-gray-400">Zaloguj się</button>
          <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-500">
            Kup karnet
          </button>
        </div>
      </div>

      {/* Hero Sekcja */}
      <div className="relative flex flex-col justify-center items-center h-[80vh] bg-blue-900 text-white text-center">
        <h1 className="text-6xl font-extrabold mb-6 leading-snug max-w-4xl">
          Rozpocznij swoją drogę do zdrowia i siły z nami!
        </h1>
        <p className="text-2xl max-w-3xl mb-8">
          Nasze siłownie oferują szeroki wybór zajęć, nowoczesny sprzęt oraz wsparcie profesjonalnych trenerów.
        </p>
        <button className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 text-xl">
          Dołącz teraz
        </button>
      </div>

      {/* Sekcja "Wybierz swój karnet" */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-10">
        <h2 className="text-5xl font-bold text-center text-black mb-10">Wybierz swój karnet</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Karnet Miesięczny</h3>
            <p className="text-gray-700 mb-4">Dostęp do wszystkich zajęć i strefy cardio</p>
            <p className="text-3xl font-bold text-black mb-6">99,99 zł</p>
            <button
              onClick={() => handlePlan("Miesięczny - 99,99 zł")}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
            >
              Wybierz
            </button>
          </div>

          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Karnet 3-Miesięczny</h3>
            <p className="text-gray-700 mb-4">Bez opłat za zajęcia grupowe</p>
            <p className="text-3xl font-bold text-black mb-6">249,99 zł</p>
            <button
              onClick={() => handlePlan("3-Miesieczny - 249,99 zł")}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
            >
              Wybierz
            </button>
          </div>

          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Karnet Roczny</h3>
            <p className="text-gray-700 mb-4">Dostęp do sauny i darmowe konsultacje</p>
            <p className="text-3xl font-bold text-black mb-6">899,99 zł</p>
            <button
              onClick={() => handlePlan("Roczny - 899,99 zł")}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
            >
              Wybierz
            </button>
          </div>
        </div>
      </div>

      {/* Dlaczego warto nas wybrać */}
      <div className="py-10 bg-gray-200">
        <h2 className="text-4xl font-bold text-center text-black mb-10">Dlaczego warto nas wybrać?</h2>
        <div className="flex justify-center space-x-10">
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Najlepszy sprzęt</h3>
            <p className="text-gray-700">Nowoczesny sprzęt klasy premium.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Wykwalifikowani trenerzy</h3>
            <p className="text-gray-700">Profesjonalne wsparcie na każdym kroku.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Doskonała lokalizacja</h3>
            <p className="text-gray-700">Łatwy dostęp w centrum miasta.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
