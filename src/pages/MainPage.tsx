import { usePlan } from "../context/PlanContext";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { setSelectedPlan } = usePlan();
  const navigate = useNavigate();

  const handlePlan = (plan) => {
    setSelectedPlan(plan);
    navigate("/register", { state: { plan } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col">
      {/* Header Section */}
      <header className="h-24 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-between px-8 shadow-lg">
        <div className="text-white text-4xl font-bold">
          Gym<span className="text-yellow-400">Buddy</span>
        </div>
        <button
          className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md"
          onClick={() => navigate("/register")}
        >
          Buy Membership
        </button>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-[90vh] bg-gradient-to-b from-blue-800 to-blue-600 text-white text-center">
        <h1 className="text-7xl font-extrabold mb-8 leading-snug max-w-5xl drop-shadow-lg animate-pulse">
          Unlock Your Full Potential with GymBuddy!
        </h1>
        <p className="text-2xl max-w-3xl mb-12">
          Experience world-class facilities, expert trainers, and a community that inspires you to achieve your fitness goals.
        </p>
        <button onClick={() => navigate("/register")} className="bg-red-500 text-white font-bold py-4 px-12 rounded-full hover:bg-red-600 text-2xl transition duration-300 shadow-lg">
          Get Started
        </button>
      </div>

      {/* Membership Plans Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-12">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Choose Your Membership</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {[
            { name: "Monthly Plan", price: "$19.99", description: "Access to all classes and cardio zone" },
            { name: "3-Month Plan", price: "$49.99", description: "No fees for group classes" },
            { name: "Annual Plan", price: "$199.99", description: "Access to sauna and free consultations" },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-gray-300 rounded-xl shadow-lg w-80 text-center hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{plan.name}</h3>
              <p className="text-gray-700 mb-4">{plan.description}</p>
              <p className="text-3xl font-bold text-black mb-6">{plan.price}</p>
              <button
                onClick={() => handlePlan(`${plan.name} - ${plan.price}`)}
                className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300 shadow-md"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <h2 className="text-5xl font-extrabold text-center text-white mb-10">Discover the GymBuddy Advantage</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { title: "Tailored Programs", description: "Personalized fitness plans just for you" },
            { title: "State-of-the-Art Equipment", description: "Train with the best machines and tools" },
            { title: "Expert Trainers", description: "Guidance from certified professionals" },
            { title: "Community Support", description: "Be part of a vibrant fitness community" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg w-80 text-center hover:shadow-xl transition duration-300"
            >
              <h3 className="text-3xl font-bold text-blue-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="h-16 bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center">
        <p className="text-gray-300 text-sm">&copy; 2025 GymBuddy. All rights reserved.</p>
      </footer>
    </div>
  );
};
