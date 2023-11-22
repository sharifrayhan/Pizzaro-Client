import { useForm } from 'react-hook-form';

const ReservationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Handle reservation logic here
    console.log(data);
    // You can add your logic to send the reservation data to a server or perform other actions
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-6">Reservation Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Name:</label>
            <input
              type="text"
              {...register("name", { required: 'Name is required' })}
              className={`form-input mt-1 p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">{errors.name.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="text"
              {...register("email", {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/i,
                  message: 'Please enter a valid email address',
                },
              })}
              className={`form-input mt-1 p-2 w-full ${errors?.email ? 'border-red-500' : ''}`}
            />
            {errors?.email && (
              <span className="text-red-500 text-xs">
                {errors?.email.message}
              </span>
            )}
          </div>

          {/* ... (other form fields) ... */}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Special Requests:</label>
            <textarea
              {...register("specialRequests")}
              className={`form-textarea mt-1 p-2 w-full ${errors?.specialRequests ? 'border-red-500' : ''}`}
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Make Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
