// import { useContext } from "react";
import Navbar from "../Home/Components/Navbar";
// import { Context } from "../../Context/AllContext";
import useAxiosSecure from "../../axios/useAxiosSecure";
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Helmet } from "react-helmet";

const AddItem = () => {
  // const { user } = useContext(Context);

  // const userName = user?.displayName;
  // const userPhoto = user?.photoURL;
  // const userEmail = user?.email;

  const userName = 'Aurora';
  const userPhoto = 'https://i.ibb.co/TRVRyBL/Aurora-Evengella-Grace.jpg';
  const userEmail = 'aurora@gmail.com';

  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const url = '/items'; // Assuming the endpoint for adding items
      const response = await axiosSecure.post(url, data);

      if (response.status === 200) {
        Swal.fire('Success!', 'Add Item completed!', 'success');
      } else {
        Swal.fire('Error', 'Add Item failed', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Add Item failed', 'error');
    }
  };

  return (
    <div className="bg-[url(https://i.ibb.co/K5PmkF6/reg.jpg)] bg-no-repeat p-1">
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pizzaro | Add Item</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className=" pt-10">
        <div className="min-w-[100px] mx-2 md:mx-10 lg:mx-24 mt-5 mb-10">
          <div className="w-full max-w-md mx-auto">
            <div className="py-10 px-14 glass rounded-md">
              <div className="text-center my-5">
                <h1 className="mb-6 text-orange-400 font-garamond uppercase font-semibold text-3xl">Add New Item</h1>
                <p className="text-white">You can add new items to the menu from here.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* Item Name */}
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700" htmlFor="itemName">
                    Item Name:
                  </label>
                  <input
                    type="text"
                    {...register('itemName', { required: true })}
                    placeholder="Enter Item Name"
                    className="w-full text-black border rounded px-3 py-2"
                  />
                  {errors.itemName && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Item Price */}
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700" htmlFor="itemPrice">
                    Item Price:
                  </label>
                  <input
                    type="text"
                    {...register('itemPrice', { required: true })}
                    placeholder="Enter Item Price"
                    className="w-full text-black border rounded px-3 py-2"
                  />
                  {errors.itemPrice && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Item Image */}
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700" htmlFor="itemImage">
                    Item Image URL:
                  </label>
                  <input
                    type="url"
                    {...register('itemImage', { required: true })}
                    placeholder="Enter Item Image URL"
                    className="w-full text-black border rounded px-3 py-2"
                  />
                  {errors.itemImage && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Item Description */}
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700" htmlFor="itemDescription">
                    Item Description:
                  </label>
                  <textarea
                    {...register('itemDescription', { required: true })}
                    placeholder="Enter Item Description"
                    className="w-full text-black h-[42px] border rounded px-3 py-2"
                  />
                  {errors.itemDescription && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Item Category */}
                <div className="mb-4">
                  <label className="block font-semibold text-gray-700" htmlFor="itemCategory">
                    Item Category:
                  </label>
                  <select
                    {...register('itemCategory', { required: true })}
                    className="w-full text-black border rounded px-3 py-2"
                  >
                    <option value="pizza">Pizza</option>
                    <option value="pasta">Pasta</option>
                    <option value="pasta">Tea</option>
                    <option value="pasta">Soft Drinks</option>
                  
                  </select>
                  {errors.itemCategory && <span className="text-red-500">This field is required</span>}
                </div>

                {/* <div className="mb-4">
                  <label className="block font-semibold text-gray-700" htmlFor="itemProviderName">
                    Item Provider Name:
                  </label>
                  <input
                    type="text"
                    defaultValue={userName}
                    readOnly
                    {...register('itemProviderName', { required: true })}
                    placeholder="Enter Item Provider Name"
                    className="w-full border rounded px-3 py-2"
                  />
                  {errors.itemProviderName && <span className="text-red-500">This field is required</span>}
                </div> */}

                {/* <div className="mb-4">
                  <label className="block font-semibold text-gray-700" htmlFor="itemProviderEmail">
                    Item Provider Email:
                  </label>
                  <input
                    type="email"
                    defaultValue={userEmail}
                    readOnly
                    {...register('itemProviderEmail', { required: true })}
                    placeholder="Enter Item Provider Email"
                    className="w-full border rounded px-3 py-2"
                  />
                  {errors.itemProviderEmail && <span className="text-red-500">This field is required</span>}
                </div> */}

                {/* <div className="mb-4">
                  <label className="block font-semibold text-gray-700" htmlFor="itemProviderImage">
                    Item Provider Image URL:
                  </label>
                  <input
                    type="url"
                    defaultValue={userPhoto}
                    {...register('itemProviderImage', { required: true })}
                    placeholder="Enter Item Provider Image URL"
                    className="w-full border rounded px-3 py-2"
                  />
                  {errors.itemProviderImage && <span className="text-red-500">This field is required</span>}
                </div> */}

                <center>
                  <button
                    type="submit"
                    className="bg-red-500 my-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Item
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
