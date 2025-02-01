import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { RiRefreshLine } from "react-icons/ri";
import coinGif from "../assets/coin.gif";
import { FaChevronRight } from "react-icons/fa";
import { PiCoinsDuotone } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { TbCoins } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
const navLinks1 = [
  {
    title: "Deposit",
    icon: PiCoinsDuotone,
  },
  {
    title: "Bank & UPI Details",
    icon: BsCashCoin,
  },
  {
    title: "Notification",
    icon: FaBell,
  },
  {
    title: "Personal Info",
    icon: FaUser,
  },
  {
    title: "Promotions",
    icon: FaTrophy,
  },
  {
    title: "Payment Transfer Log",
    icon: TbCoins,
  },
  {
    title: "Upline WhatsApp Number",
    icon: FaWhatsapp,
  },
];

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="  top-0 w-full z-50  ">
      <div className="sticky top-0 z-50 p-4 bg-yellow-400 max-h-[60px] flex align-center justify-between gap-2">
        <div className="flex gap-2 items-center">
          <CiMenuFries
            className="text-xl font-bold"
            onClick={() => setShowMenu(!showMenu)}
          />

          <div>
            <h2 className="text-2xl font-bold">Velki</h2>
          </div>
        </div>
        {!isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <button
              className="bg-[#022D36] text-sm md:text-md  text-white px-4 py-1 rounded rounded-md font-semibold flex items-center gap-2"
              onClick={() => setIsLoggedIn(true)}
            >
              <CiLogin />
              Login
            </button>
            <button className="text-sm md:text-md bg-red-600 text-white px-4 py-1 rounded rounded-md font-semibold flex items-center gap-2">
              <CiLogin />
              Register
            </button>
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-between">
            <div className="flex flex-col">
              <h2 className=" font-bold text-sm">@Shishir Khan</h2>
              <p className="text-xs">
                <span className="font-bold">PUB</span> 0.00{" "}
                <span className="font-bold">Exp</span>{" "}
                <span className="font-bold text-red-600">(0.00)</span>
              </p>
            </div>
            <RiRefreshLine
              className="text-xl"
              onClick={() => window.location.reload()}
            />
            <div
              className="py-1 px-[3px] bg-gray-900 rounded-lg flex items-center gap-1"
              onClick={() => setIsLoggedIn(false)}
            >
              <img className="w-8" src={coinGif} alt="coin gif" />
            </div>
          </div>
        )}
      </div>
      <div
        className={`absolute bg-blue-50 px-4  top-0 w-3/4  transition-all duration-300 ease-in-out h-full z-50 ${
          showMenu ? "left-0" : "-left-full "
        } h-[100vh] overflow-y-scroll overflow-x-hidden`}
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-between items-center sticky top-0 bg-blue-50 p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <RxCross2 className="text-2xl" onClick={() => setShowMenu(false)} />
        </div>
        <ul className="flex flex-col  bg-white rounded-lg  mb-4">
          {navLinks1.map((link, index) => (
            <li
              key={index}
              className="border-b border-gray-200 p-4 flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                {link.icon && <link.icon className="text-xl" />}

                {link.title}
                {link.title === "Notification" && (
                  <div className="bg-yellow-400 w-8 h-8 rounded-lg text-center font-bold flex items-center justify-center">
                    0
                  </div>
                )}
              </span>
              <FaChevronRight className="text-gray-500 text-xl" />
            </li>
          ))}
        </ul>
        <ul className="flex flex-col  bg-white rounded-lg pb-4 mb-4">
          {navLinks1.map((link, index) => (
            <li
              key={index}
              className="border-b border-gray-200 p-4 flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                {link.icon && <link.icon className="text-xl" />}

                {link.title}
                {link.title === "Notification" && (
                  <div className="bg-yellow-400 w-8 h-8 rounded-lg text-center font-bold flex items-center justify-center">
                    0
                  </div>
                )}
              </span>
              <FaChevronRight className="text-gray-500 text-xl" />
            </li>
          ))}
        </ul>
        <ul
          className="flex flex-col  bg-white rounded-lg mb-4"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <li className=" p-4 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <IoSettings className="text-xl" />
              Setting
            </span>
            <FaChevronRight className="text-gray-500 text-xl" />
          </li>
        </ul>
        <ul
          className="flex flex-col  bg-gray-200 rounded-lg mb-[600px]"
          onClick={() => {
            setIsLoggedIn(false);
            setShowMenu(false);
          }}
        >
          <li className="p-4 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <CiLogout className="text-xl" />
              Logout
            </span>
            <FaChevronRight className="text-gray-500 text-xl" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
