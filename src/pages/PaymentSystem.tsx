import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Define the types for the payment form inputs
type PaymentFormInputs = {
  firstName: string;
  lastName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

export const PaymentSystem = () => {
  const navigate = useNavigate(); // Hook for navigating between routes
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>(); // Hook for managing form data

  // Function to handle form submission
  const onSubmit = (data: PaymentFormInputs) => {
    alert("Payment Succesful")
    navigate("/home")
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-gradient-to-r from-blue-800 to-blue-600">
      {/* Header section */}
      <header className="h-16 w-full bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-between px-10 shadow-md">
        <div className="text-white text-4xl font-bold">
          Gym<span className="text-yellow-400">Buddy</span>
        </div>
      </header>

      {/* Payment form */}
      <form
        onSubmit={handleSubmit(onSubmit)} // Attach the form handler
        className="flex flex-col items-center justify-center h-auto w-11/12 max-w-lg bg-white rounded-xl shadow-2xl p-8 mt-10"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Fill in Payment Details
        </h1>

        {/* Form fields */}
        <div className="w-full space-y-4 mb-6">
          {/* First and last name fields */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "First name is required" })}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          {/* Card number field */}
          <div>
            <input
              type="text"
              placeholder="Card Number (e.g., 1234 5678 9012 3456)"
              {...register("cardNumber", {
                required: "Card number is required",
                pattern: {
                  value: /^\d{4} \d{4} \d{4} \d{4}$/,
                  message: "Invalid card number format",
                },
              })}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md ${
                errors.cardNumber ? "border-red-500" : ""
              }`}
            />
            {errors.cardNumber && (
              <span className="text-red-500 text-sm">
                {errors.cardNumber.message}
              </span>
            )}
          </div>

          {/* Expiration date and CVV fields */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Expiration Date (MM/YY)"
                {...register("expirationDate", {
                  required: "Expiration date is required",
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                    message: "Invalid expiration date format (MM/YY)",
                  },
                })}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md ${
                  errors.expirationDate ? "border-red-500" : ""
                }`}
              />
              {errors.expirationDate && (
                <span className="text-red-500 text-sm">
                  {errors.expirationDate.message}
                </span>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="CVV"
                {...register("cvv", {
                  required: "CVV is required",
                  pattern: {
                    value: /^\d{3}$/,
                    message: "Invalid CVV format",
                  },
                })}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md ${
                  errors.cvv ? "border-red-500" : ""
                }`}
              />
              {errors.cvv && (
                <span className="text-red-500 text-sm">{errors.cvv.message}</span>
              )}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-indigo-500 text-white py-3 px-8 rounded-lg font-bold hover:bg-indigo-600 shadow-lg"
          >
            Confirm Payment
          </button>
          <button
            type="button"
            className="bg-red-500 text-white py-3 px-8 rounded-lg font-bold hover:bg-red-600 shadow-lg"
            onClick={() => navigate("/home")} // Navigate back to the home page
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
