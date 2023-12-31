import { useForm } from "react-hook-form";
import Navbar from "../Home/Components/Navbar";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle login logic here
    console.log(data);
    // You can add your logic to authenticate the user or perform other actions
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email:
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                className={`form-input mt-1 p-2 w-full ${
                  errors?.email ? "border-red-500" : ""
                }`}
              />
              {errors?.email && (
                <span className="text-red-500 text-xs">
                  {errors?.email.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password:
              </label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className={`form-input mt-1 p-2 w-full ${
                  errors?.password ? "border-red-500" : ""
                }`}
              />
              {errors?.password && (
                <span className="text-red-500 text-xs">
                  {errors?.password.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  {...register("remember")}
                />
                <label
                  className="ml-2 text-sm text-gray-600"
                  htmlFor="remember"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
