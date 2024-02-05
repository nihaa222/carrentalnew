const Home = () => {
  return (
    <div id="Home" className="max-w-[1300px] mx-auto mt-20 lg:mt-56">
      <div className="flex flex-col lg:flex-row mx-3 lg:w-1/3">
        <div className="flex  flex-col gap-3 items-center m-5  lg:items-start ">
          <p className="font-bold">Plan your trip now</p>
          <p className="font-bold leading-[45px] text-center lg:text-start text-[44px] lg:text-3xl">
            Save <span className="text-red-500 ">big </span>with our car rental
          </p>
          <p className="text-center">
            Rent the car of yur dreams. Unbeatable prices unlimited miled
            flexible pick-up options and much more
          </p>
        </div>
        <div> House</div>
      </div>
    </div>
  );
};

export default Home;
