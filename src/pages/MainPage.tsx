import { usePlan } from "../context/PlanContext";
// @ts-ignore
import { Navigate, useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { setSelectedPlan } = usePlan();
  const navigate = useNavigate();

  const handlePlan = (plan: string) => {
    setSelectedPlan(plan);
    navigate("/payment", { state: { plan } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col">
      <header className="h-24 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-between px-8 shadow-lg">
        <div className="text-white text-4xl font-bold">
          Sił<span className="text-yellow-400">KA</span>
        </div>
        <button
          className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
          onClick={() => navigate("/register")}
        >
          Zakup Karnet
        </button>
      </header>

      <div className="flex flex-col justify-center items-center h-[90vh] bg-gradient-to-b from-blue-800 to-blue-600 text-white text-center">
        <h1 className="text-6xl font-extrabold mb-8 leading-snug max-w-4xl drop-shadow-lg animate-pulse">
          Rozpocznij swoją drogę do zdrowia i siły z nami!
        </h1>
        <p className="text-xl max-w-2xl mb-12">
          Nasze siłownie oferują szeroki wybór zajęć, nowoczesny sprzęt oraz wsparcie profesjonalnych trenerów.
        </p>
        <button className="bg-red-500 text-white font-bold py-4 px-12 rounded-full hover:bg-red-600 text-xl transition duration-300 shadow-md">
          Dołącz teraz
        </button>
      </div>

      <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-12">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Wybierz swój karnet</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          <div className="bg-white p-6 border border-gray-300 rounded-xl shadow-lg w-80 text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-black mb-4">Karnet Miesięczny</h3>
            <p className="text-gray-700 mb-4">Dostęp do wszystkich zajęć i strefy cardio</p>
            <p className="text-3xl font-bold text-black mb-6">99,99 zł</p>
            <button
              onClick={() => handlePlan("Miesięczny - 99,99 zł")}
              className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300 shadow-md"
            >
              Wybierz
            </button>
          </div>

          <div className="bg-white p-6 border border-gray-300 rounded-xl shadow-lg w-80 text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-black mb-4">Karnet 3-Miesięczny</h3>
            <p className="text-gray-700 mb-4">Bez opłat za zajęcia grupowe</p>
            <p className="text-3xl font-bold text-black mb-6">249,99 zł</p>
            <button
              onClick={() => handlePlan("3-Miesięczny - 249,99 zł")}
              className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300 shadow-md"
            >
              Wybierz
            </button>
          </div>

          <div className="bg-white p-6 border border-gray-300 rounded-xl shadow-lg w-80 text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-black mb-4">Karnet Roczny</h3>
            <p className="text-gray-700 mb-4">Dostęp do sauny i darmowe konsultacje</p>
            <p className="text-3xl font-bold text-black mb-6">899,99 zł</p>
            <button
              onClick={() => handlePlan("Roczny - 899,99 zł")}
              className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300 shadow-md"
            >
              Wybierz
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-700 px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Dlaczego warto nas wybrać?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Najlepszy sprzęt</h3>
            <p className="text-gray-600">Nowoczesny sprzęt klasy premium.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Wykwalifikowani trenerzy</h3>
            <p className="text-gray-600">Profesjonalne wsparcie na każdym kroku.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Doskonała lokalizacja</h3>
            <p className="text-gray-600">Łatwy dostęp w centrum miasta.</p>
          </div>
        </div>
      </section>

      <footer className="h-16 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center">
        <p className="text-gray-300 text-sm">&copy; 2025 SiŁKA. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};
