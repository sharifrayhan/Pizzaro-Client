

const Banner = () => {
    return (
        <div className="p-1 px-12 min-h-[900px] flex items-center bg-[url(https://i.ibb.co/Y7NtMV1/Firefly-20231114223305.png)] bg-cover">
            
            <div className="ml-2 flex flex-col gap-7">
                <img className="h-8" src="https://i.ibb.co/S3hQ27d/facebook-1.png" alt="" />
                <img className="h-6 w-6" src="https://i.ibb.co/9cK6jRb/instagram-1.png" alt="" />
                <img className="h-6 w-6" src="https://i.ibb.co/tQhbKxY/twitter.png" alt="" />
            </div>
            
            <div >
                {/* <center><img className="mt-[90px] mr-[140px] h-[570px]" src="https://i.ibb.co/BfBVC6h/bg-pizza.png" alt="" /></center> */}
                <h1 className="text-6xl font-sigmar -mt-[250px] ml-4 uppercase  text-[#b6894d]"><span className="text-2xl text-gray-700">Where Every Bite Tells</span> <br /> a Pizza Story</h1>
            </div>
        </div>
    );
};

export default Banner;