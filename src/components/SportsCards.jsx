import { IoIosAlarm } from "react-icons/io";
import { FaCalendarDay } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { FaFantasyFlightGames } from "react-icons/fa";
const SportsCards = () => {
  return (
    <div className="bg-blue-50">
      <div className="flex gap-2 p-4 ">
        <div className="bg-white rounded-xl">
          <div
            className={
              "flex bg-yellow-400 rounded-xl flex-col items-center p-2 text-black mb-1"
            }
          >
            <IoIosAlarm className="text-5xl " />
            <p className="text-xs ">In-Play</p>
          </div>
          <div
            className={
              "flex  rounded-xl flex-col items-center p-2 text-gray-500 duration-300 hover:text-black mb-1"
            }
          >
            <FaCalendarDay className="text-5xl " />
            <p className="text-xs ">Today</p>
          </div>
          <div
            className={
              "flex  rounded-xl flex-col items-center p-2 text-gray-500 duration-300 hover:text-black mb-1"
            }
          >
            <FaCalendarDays className="text-5xl " />
            <p className="text-xs ">Tomorrow</p>
          </div>
          <div
            className={
              "flex  rounded-xl flex-col items-center p-2 text-gray-500 duration-300 hover:text-black mb-1"
            }
          >
            <GiTrophy className="text-5xl " />
            <p className="text-xs ">Leagues</p>
          </div>
          <div
            className={
              "flex  rounded-xl flex-col items-center p-2 text-gray-500 duration-300 hover:text-black mb-1"
            }
          >
            <FaFantasyFlightGames className="text-5xl " />
            <p className="text-xs ">Parlay</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SportsCards;
