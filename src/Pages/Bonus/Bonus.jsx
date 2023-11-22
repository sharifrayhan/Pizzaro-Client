// import Footer from "../Home/Components/Footer";
// import NavTwo from "./NavTwo";


const Bonus = () => {
    return (
        <div className=" ">
            {/* <NavTwo></NavTwo> */}
            
            <div className=" px-10 md:px-14 lg:px-10 bg-[#774E88] h-[130px] md:h-[160px] lg:h-[200px] flex justify-between items-center">
                <h1 className="mt-[80px] md:mt-0 lg:mt-0 text-2xl text-white">Contact Business Post</h1>
                <div className="hidden md:block lg:block md:mt-[104px] lg:mt-[142px]">
                    <button className="text-white bg-[#291958] p-4">Home</button>
                    <button className=" text-white bg-[#291958] p-4">Contact Business Post</button>
                </div>
            </div>

            <div className="px-10 md:px-14 lg:px-10 mb-3">
            <div className="flex flex-col md:flex-col lg:flex-row">
      {/* Form Part (2/3 width) */}
      <div className="w-full lg:w-2/3 pr-8">
        {/* Small Line */}
        {/* <hr className="border-t-6  mt-3 border-purple-700 mb-4" /> */}
        <div className="bg-purple-700 h-1 w-11 my-3"></div>

        {/* Contact Us Heading */}
        <h2 className="text-purple-700 text-lg mb-4">Contact Us</h2>

        {/* Larger Heading */}
        <h1 className="text-2xl font-bold mb-8">WE WANT TO HEAR FROM YOU</h1>

        {/* Form Inputs */}
        <form>
          {/* Name and Email Inputs */}
          <div className="flex gap-2 flex-col md:flex-row lg:flex-row mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full md:w-1/2 lg:w-1/2 px-4 mb-2  py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full md:w-1/2 lg:w-1/2 mb-2 px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>


            <div className="flex gap-2 flex-col md:flex-row lg:flex-row mb-4 ">
                {/* Phone Number Input */}
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full md:w-1/2 lg:w-1/2 px-4 py-2 border border-gray-300 rounded mb-2"
                />

                {/* Subject Dropdown */}
                <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                    <select
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    >
                    <option value="technical-support">Subject</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="billing">Billing</option>
                    <option value="testimonial">Testimonial</option>
                    </select>
                </div>
            </div>


          {/* Message Text Input */}
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded "
            rows="4"
          ></textarea>

          {/* Captcha */}
          <div className="mb-4">
           
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-600"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Other Part (1/3 width) */}
      
<div className="flex mt-2 flex-col">
       {/* First Box */}
       <div className="bg-[#4F287B] text-white p-4 mb-4 rounded">
          <p className="font-bold text-2xl">Business Broker's Name</p>
          <p className="text-sm">A member of Business Media Group</p>
          <div className="flex items-center mt-2">
            <span className="mr-2">
              <img src="" alt="" />
            </span>
            <p>Level 10 / 95 North Quay, Brisbane QLD 4000</p>
          </div>
          <div className="flex items-center mt-2">
            <span className="mr-2">
              <img src="" alt="" />
            </span>
            <p>support@businesspartner.com.au</p>
          </div>
        </div>

        <h2 className="font-bold text-3xl mb-4">GET IN TOUCH</h2>

      <div className="bg-[#EDF3F8] p-4 rounded">
          
          <p className="mb-4">Subscribe to our newsletters to receive the latest news and updates.</p>
          <div className="mb-4">
          <h1 className="font-bold">Name</h1>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded mb-2"
            />
            <h1 className="font-bold">Email</h1>
            <div className="relative flex-grow">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l mb-2 focus:outline-none"
              />
              <button
                type="button"
                className="bg-[#CCCCCC] text-[#666666] px-4 py-2 rounded-r absolute top-0 right-0"
              >
                {/* Add your email icon component here */}
                Subscribe
              </button>
            </div>
          </div>
        </div>
</div>



    </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Bonus;