export const MainPage = () => {
  return (
    <div className="h-screen w-auto bg-gradient-to-r from-blue-950 to-blue-800">
      <div className="h-24 bg-black flex items-center justify-between justify-center text-2xl relative">
        <nav>
          <ul className="flex space-x-40 text-white">
            <li className="hover:text-gray-400">
              <a href="">Home</a>
            </li >
            <li className="hover:text-gray-400">
              <a href="">Cennik</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="">Kontakt</a>
            </li >
            <li className="hover:text-gray-400">
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>

        <button className="bg-yellow-400 text-black font-bold py-2 px-2 rounded hover:bg-yellow-500">
          Zaloguj
        </button>

        
        
      </div>

    </div>
  );
};
