export const MainPage = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-950 to-blue-800 flex flex-col">
      <div className="h-24 bg-black px-10 flex items-center justify-between text-2xl">
        <nav>
          <ul className="flex space-x-40 text-white">
            <li className="hover:text-gray-400">
              <a href="">Home</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="">Cennik</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="">Kontakt</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>

        <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500">
          Zaloguj
        </button>
      </div>

      <div className="flex justify-center items-center flex-grow">
        {/* tu bedzie jakies zdjecieale */}
      </div>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-10">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Wybierz swój karnet
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-transparent p-6 border border-gray-400 rounded-lg shadow-md w-64 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Karnet Miesięczny
            </h3>
            <p className="text-gray-300 mb-4">
              Dostęp do wszystkich zajęć i strefy cardio
            </p>
            <p className="text-3xl font-bold text-yellow-400 mb-4">99,99 zł</p>
            <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500">
              Wybierz
            </button>
          </div>

          <div className="bg-transparent p-6 border border-gray-400 rounded-lg shadow-md w-64 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Karnet 3-Miesięczny
            </h3>
            <p className="text-gray-300 mb-4">
              Bezpłatny trening personalny w pakiecie
            </p>
            <p className="text-3xl font-bold text-yellow-400 mb-4">249,99 zł</p>
            <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500">
              Wybierz
            </button>
          </div>

          <div className="bg-transparent p-6 border border-gray-400 rounded-lg shadow-md w-64 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Karnet Roczny
            </h3>
            <p className="text-gray-300 mb-4">
              Dostęp do sauny i darmowe konsultacje
            </p>
            <p className="text-3xl font-bold text-yellow-400 mb-4">899,99 zł</p>
            <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500">
              Wybierz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
