import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type PaymentFormInputs = {
  firstName: string;
  lastName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

export const PaymentSystem = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<PaymentFormInputs>();

  const onSubmit = (data: PaymentFormInputs) => {
    console.log("Submitted Data:", data);
    alert("Płatność zatwierdzona!");
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-gradient-to-r from-blue-800 to-blue-600">
      <header className="h-16 w-full bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-between px-10 shadow-md">
        <div className="text-white text-4xl font-bold">
          Sił<span className="text-yellow-400">KA</span>
        </div>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center h-auto w-11/12 max-w-lg bg-white rounded-xl shadow-2xl p-8 mt-10"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Wypełnij dane płatności
        </h1>
        <div className="relative w-full h-40 mb-8">
          <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:rotate-3">
            <div className="p-4 text-white flex flex-col justify-between h-full">
              <h2 className="text-lg font-semibold">Karta Płatnicza</h2>
              <p className="text-lg tracking-wider font-bold">**** **** **** 3456</p>
              <div className="flex justify-between text-sm font-medium">
                <span>MM/RR</span>
                <span>CVV</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4 mb-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Imię"
              {...register("firstName")}
              className="w-full md:w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md mb-4 md:mb-0"
            />
            <input
              type="text"
              placeholder="Nazwisko"
              {...register("lastName")}
              className="w-full md:w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
            />
          </div>

          <input
            type="text"
            placeholder="Numer karty (np. 1234 5678 9012 3456)"
            {...register("cardNumber")}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
          />

          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Data ważności (MM/RR)"
              {...register("expirationDate")}
              className="w-full md:w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md mb-4 md:mb-0"
            />
            <input
              type="text"
              placeholder="CVV"
              {...register("cvv")}
              className="w-full md:w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-indigo-500 text-white py-3 px-8 rounded-lg font-bold hover:bg-indigo-600 shadow-lg"
          >
            Zatwierdź płatność
          </button>
          <button
            type="button"
            className="bg-red-500 text-white py-3 px-8 rounded-lg font-bold hover:bg-red-600 shadow-lg"
            onClick={() => navigate("/")}
          >
            Anuluj
          </button>
        </div>
      </form>
    </div>
  );
};
