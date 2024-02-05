import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(null);

  const menu = () => {
    setMenuOpen(true);
  };

  const close = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen ? (
        <motion.div
          initial={{ y: 0, position: "fixed" }}
          animate={{ y: 0, transition: { duration: 1, ease: "easeIn" } }}
          exit={{ y: -100, transition: { duration: 1, ease: "easeOut" } }}
          className="fixed inset-0 bg-white"
          onClick={() => close()}
        ></motion.div>
      ) : null}

      <div className="max-w-[1400px] mx-auto my-2 flex justify-between items-center">
        {/* 1> logopart */}
        <div className="flex h-[fit-content] sm:gap-2">
          <div className="">
            <img
              src="logo3.png"
              alt="image"
              className="sm:h-20 h-16 -mt-3 w-16 sm:w-20"
            />
          </div>
          <div className="leading-none">
            <p className="font-bold text-md sm:text-xl">CAR</p>
            <p className="font-semibold text-sm sm:text-xl leading-none">
              Rental
            </p>
          </div>
        </div>
        {menuOpen ? (
          <div className="sm:hidden z-10">
            <button className="relative mr-3" onClick={() => close()}>
              <IoCloseSharp />
            </button>
          </div>
        ) : (
          <div className="sm:hidden block">
            <button className="relative mr-3" onClick={() => menu()}>
              <GiHamburgerMenu />
            </button>
          </div>
        )}
        {/* 2> Navpart */}
        {menuOpen ? (
          <div className="font-bold text-xl fixed  top-[100px] left-[100px] right-[100px] ">
            <ul
              className={`flex justify-center items-center gap-8  whitespace-nowrap flex-col sm:flex-row`}
            >
              <Link to="#Home" className="hover:text-gray-500">
                Home
              </Link>
              <Link to="#About" className="hover:text-gray-500">
                About
              </Link>
              <Link to="#Vehicle" className="hover:text-gray-500">
                Vehicles Models
              </Link>
              <Link to="#Testiomonial" className="hover:text-gray-500">
                Testimonials
              </Link>
            </ul>
          </div>
        ) : null}
        {/* 3> Buttonpart */}
        <div className="font-bold text-xl hidden sm:flex ">
          <ul className={`flex flex-col sm:flex-row gap-4`}>
            <Link to="#Home" className="hover:text-gray-500">
              Home
            </Link>
            <Link to="#About" className="hover:text-gray-500">
              About
            </Link>
            <Link to="#Vehicle" className="hover:text-gray-500">
              Vehicles Models
            </Link>
            <Link to="#Testiomonial" className=" hover:text-gray-500">
              Testimonials
            </Link>
            <Link to="#Contact" className=" hover:text-gray-500">
              Contact
            </Link>
          </ul>
        </div>
        <div className="font-bold h-[fit-content] text-md hidden sm:flex">
          <button className="px-4 py-2 color hover:text-gray-500">
            {" "}
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgb(169, 46, 46)" }}
            type="tween"
            className="mr-3 px-4 rounded-md bg-red-600 text-white"
          >
            Register
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
