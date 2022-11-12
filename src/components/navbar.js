import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { AuthContext } from "../context/authcontext";
import { Auth } from "../config/firebase";

const Navbar = () => {
  const [trem, setTrem] = useState("");
  let { user, search, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  let handleSubmit = async () => {
    await signOut(Auth).then(dispatch({ type: "LOGOUT" }));
  };
  let handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: trem });
    navigate("/search");
    console.log(search);
  };
  const style = {
    link: "font-rabar-33 font-semibold text-lg text-gray-800 s:text-white",
  };
  const [openNav, setOpenNav] = useState("md:hidden");
  const [menu, setMenu] = useState("md:block");
  const [close, setClose] = useState("");
  const handleOpen = () => {
    setOpenNav("md:block");
    setMenu("md:hidden");
    setClose("md:block");
  };

  const handleClose = () => {
    setOpenNav("md:hidden");
    setMenu("md:block");
    setClose("md:hidden");
  };
  return (
    <div>
      {user && (
        <div>
          <nav class="flex justify-between py-4 items-center px-3 border-b-2 border-black  md:px-10 xl:px-4 relative  s:px-4">
            <div className="hidden md:block md:z-20">
              <button
                onClick={() => handleOpen()}
                className={`hidden md:block md:text-xl   md:hover:text-green-900 ${menu}`}
              >
                <ion-icon name="menu-outline"></ion-icon>
              </button>
              <button
                onClick={() => handleClose()}
                className={`hidden  md:text-xl  md:hover:text-green-900 ${close}`}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
            <ul
              class={
                openNav === "md:hidden"
                  ? `flex gap-10 text-xl  text-gray-800 font-semibold items-center duration-300  ${openNav}`
                  : " absolute  bg-[#00296b] z-10  transition-all duration-300 h-screen w-1/2  pt-14 items-center flex flex-col gap-4  top-0  right-0"
              }
            >
              <li class="transition duration-500  hover:text-green-900">
                <Link
                  onClick={() => handleClose()}
                  className={style.link}
                  to="/"
                >
                  پەرەی سەرەکی
                </Link>
              </li>
              <li class="transition duration-500  hover:text-green-900 ">
                <Link
                  onClick={() => handleClose()}
                  className={style.link}
                  to="add"
                >
                  زیادکردن
                </Link>
              </li>
              <button
                onClick={handleSubmit}
                className={`${style.link} bg-[#fdc500] s:text-black px-4 py-2 duration-500 rounded-md hover:bg-[#ffd500]`}
                to="/login"
              >
                چونەدەرەوە
              </button>
            </ul>
            <form onSubmit={handleSearch}>
              <div className="flex gap-x-1">
                <input
                  onChange={(e) => setTrem(e.target.value)}
                  type="text"
                  className="block w-full  px-4 py-2 text-gray-600 bg-white border rounded-full focus:border-[#fdc500] focus:ring-[#ffd500] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="گەران"
                />
                <button className="px-4 text-black bg-[#fdc500] rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
