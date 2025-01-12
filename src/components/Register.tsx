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
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10"
    >
      <div className="mb-4">
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          {...register("confirmPassword", { required: true })}
          type="password"
          placeholder="Confirm Password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${loading && "opacity-50 cursor-not-allowed"}`}
      >
        {loading ? "Rejestrowanie..." : "Register"}
      </button>
      {serverMessage && (
        <p className="mt-4 text-center text-gray-700">{serverMessage}</p>
      )}
    </form>
  );
};
