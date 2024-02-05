const Home = () => {
  return (
    <div id="Home" className="max-w-[1300px] mx-auto mt-12 lg:mt-56">
      <div className="flex flex-col lg:flex-row mx-3 ">
        <div className="flex  flex-col lg:w-[600px] gap-3 items-center m-5  lg:items-start ">
          <p className="font-bold">Plan your trip now</p>
          <p className="font-bold leading-[53px] lg:leading-none text-center lg:text-start text-[53px] lg:text-[65px] lg:text-3xl">
            Save <span className="text-red-500 ">big </span>with our car rental
          </p>
          <p className="text-center lg:text-start mt-5">
            Rent the car of yur dreams. Unbeatable prices unlimited miled
            flexible pick-up options and much more
          </p>
          <div className="flex flex-col gap-4 lg:flex-row mt-5">
            <button className="rounded-md hover:bg-red-300  px-20 lg:px-8 py-3 text-white bg-red-500">
              Book Ride{" "}
            </button>
            <button className="rounded-md px-20 hover:bg-gray-600 lg:px-8 py-3 text-white bg-black">
              {" "}
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-5">
          <img src="maincar.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
