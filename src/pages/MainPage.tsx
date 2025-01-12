import { usePlan } from "../context/PlanContext";

export const MainPage = () => {
  const { setSelectedPlan } = usePlan();

  const handlePlan = (plan: string) => {
    setSelectedPlan(plan);
    console.log("plan: ", plan);
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col">
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
          <button className="text-white text-2xl hover:text-gray-400">
            Mój klub
          </button>
          <button className="text-white text-2xl hover:text-gray-400">
            Zaloguj się
          </button>
          <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-500">
            Kup karnet
          </button>
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center h-[80vh]">
        <img
          src="https://mosir.rumia.pl/upload/images/GalleryPhoto/0a02fe45e9b89370dcaeef1f3458d0bb.jpg"
          alt="Siłownia"
          className="w-full h-full object-cover"
        />

        <div className="absolute text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            Jak wytrwać w realizacji noworocznych postanowień?
          </h1>
          <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600">
            Sprawdź!
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-10">
        <h2 className="text-5xl font-bold text-center text-black mb-10">
          Wybierz swój karnet
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Karnet Miesięczny
            </h3>
            <p className="text-gray-700 mb-4">
              Dostęp do wszystkich zajęć i strefy cardio
            </p>
            <p className="text-3xl font-bold text-black mb-6">99,99 zł</p>
            <button
              onClick={() => handlePlan("Miesięczny - 99,99 zł")}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
            >
              Wybierz
            </button>
          </div>

          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Karnet 3-Miesięczny
            </h3>
            <p className="text-gray-700 mb-4">
              Bezpłatny trening personalny w pakiecie
            </p>
            <p className="text-3xl font-bold text-black mb-6">249,99 zł</p>
            <button
              onClick={() => handlePlan("3-Miesieczny - 249,99 zł")}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
            >
              Wybierz
            </button>
          </div>

          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Karnet Roczny
            </h3>
            <p className="text-gray-700 mb-4">
              Dostęp do sauny i darmowe konsultacje
            </p>
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
    </div>
  );
};
