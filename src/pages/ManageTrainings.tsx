import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export type Workout = {
  name: string;
  type: string;
  desc: string;
  due: string;
};

export function AddZadanie() {
  const { register, handleSubmit, reset } = useForm<Workout>();
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  function onSubmit(data: Workout) {
    setWorkouts((prevWorkouts) => [...prevWorkouts, data]);
    reset();
  }

  function removeWorkout(index: number) {
    setWorkouts((prevWorkouts) => prevWorkouts.filter((_, i) => i !== index));
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col">
      <div className="h-24 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-between px-10 shadow-lg">
        <div className="text-white text-4xl font-bold">
          Sił<span className="text-yellow-400">KA</span>
        </div>
        <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
          <a href='home'>Powrót</a>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-full text-white">
        <div className="bg-gradient-to-b from-blue-800 to-blue-600 rounded-3xl shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-4xl font-bold mb-6 text-center">Dodaj Trening</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input id="name" {...register("name")} type="text" placeholder="Trening"
             className="w-full p-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input id="type" {...register("type")} type="text" placeholder="Typ" 
            className="w-full p-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input id="desc" {...register("desc")} type="text" placeholder="Opis" 
            className="w-full p-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input id="due" {...register("due")} type="text" placeholder="Termin" 
            className="w-full p-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <button type="submit" 
            className="bg-red-500 w-full text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition duration-300">
              Dodaj
            </button>
          </form>
        </div>
      </div>

      {workouts.length > 0 && (
        <div className="bg-blue-700 py-12">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Twoje Treningi</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {workouts.map((workout, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-lg w-80 text-center hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{workout.name}</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Typ:</span> {workout.type}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Opis:</span> {workout.desc}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Termin:</span> {workout.due}
                </p>
                <button onClick={() => removeWorkout(index)}
                 className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
                  Usuń
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
