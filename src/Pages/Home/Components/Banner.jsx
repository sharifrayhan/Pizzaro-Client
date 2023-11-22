

const Banner = () => {
    return (
        <div className="p-1 px-12 justify-between min-h-[700px] flex items-center bg-[url(https://i.ibb.co/Njstp25/banner-bg.png)] bg-cover">
            
            <div className="ml-2 flex flex-col gap-7">
                <img className="h-8" src="https://i.ibb.co/NKgBCQP/fb-white.png" alt="" />
                <img className="h-6 w-6" src="https://i.ibb.co/4tSfSfp/insta-white.png" alt="" />
                <img className="h-6 w-6" src="https://i.ibb.co/jk9J84V/twitter-white.png" alt="" />
            </div>
            
            <div className="-mt-[150px] mr-[100px]" >
                {/* <center><img className="mt-[90px] mr-[140px] h-[570px]" src="https://i.ibb.co/BfBVC6h/bg-pizza.png" alt="" /></center> */}
                <h1 className="text-6xl font-antonio  uppercase  text-white"><span className="text-2xl text-gray-300">Where Every Bite Tells</span> <br /> a Pizza Story</h1>
            </div>
        </div>
    );
};

export default Banner;