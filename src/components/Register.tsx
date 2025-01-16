import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    setServerMessage(null);

    try {
      const response = await fetch("https://example.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        await response.json();
        setServerMessage("Dane zostały zapisane pomyślnie!");
        reset();
      } else {
        setServerMessage("Wystąpił błąd przy zapisywaniu danych.");
      }
    } catch (error) {
      setServerMessage("Błąd połączenia z serwerem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg"
        style={{
          backgroundImage: `url('https://mosir.rumia.pl/upload/images/GalleryPhoto/0a02fe45e9b89370dcaeef1f3458d0bb.jpg')`,
        }}
      ></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md w-full p-6 bg-white shadow-md rounded-lg"
        >
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            Zarejestruj się
          </h2>
          <div className="mb-4">
            <input
              {...register("firstName", { required: true })}
              placeholder="Imię"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              {...register("lastName", { required: true })}
              placeholder="Nazwisko"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Hasło"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              {...register("confirmPassword", { required: true })}
              type="password"
              placeholder="Potwierdź hasło"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
          >
            {loading ? "Rejestrowanie..." : "Zarejestruj się"}
          </button>
          {serverMessage && (
            <p className="mt-4 text-center text-gray-700">{serverMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};
