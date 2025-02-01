import React, { useState } from "react";
import bgImage from "../assets/bg.jpg";
import { CiMenuFries } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { RiRefreshLine } from "react-icons/ri";
import coinGif from "../assets/coin.gif";
import NavBar from "../components/NavBar";
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="min-h-[100vh] bg-no-repeat bg-cover flex justify-center items-center"
    >
      <div className="bg-yellow-100 w-full max-w-[500px] min-h-[100vh] ">
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
