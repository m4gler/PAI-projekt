import { useForm } from 'react-hook-form';

export type Task = {
    email: string;
    password: string;
    saveLogin: boolean;
};

export function LoginPage() {
    const { register, handleSubmit } = useForm<Task>();

    function onSubmit(data: Task) {
        console.log("Login", data);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white">
            <div className="w-full max-w-md p-10 bg-white text-gray-800 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Zaloguj się</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <input
                            id="email"
                            {...register("email")}
                            type="email"
                            placeholder="Adres e-mail"
                            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            {...register("password")}
                            type="password"
                            placeholder="Hasło"
                            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            {...register("saveLogin")}
                            id="saveLogin"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="saveLogin" className="text-sm">
                            Nie wyloguj mnie
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Zaloguj się
                    </button>
                </form>
                <a
                    href="register"
                    className="block text-center mt-6 text-blue-500 hover:underline"
                >
                    Utwórz konto
                </a>
            </div>
        </div>
    );
}
