import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;  
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
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
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>
    </form>
  );
};
