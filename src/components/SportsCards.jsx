import { IoIosAlarm } from "react-icons/io";
import { FaCalendarDay } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { FaFantasyFlightGames } from "react-icons/fa";
import allSports from "../assets/sports/sport-all.webp";
import cricket from "../assets/sports/cricket.webp";
import soccer from "../assets/sports/soccer.webp";
import tennis from "../assets/sports/tennis.webp";
const SportsCards = () => {
  return (
    <div className="bg-blue-50">
      <div className="flex gap-2 p-4 ">
        <div className="bg-white rounded-xl">
          <div
            className={
              "flex bg-yellow-400 rounded-xl flex-col items-center py-2 px-1 text-black mb-4"
            }
          >
            <IoIosAlarm className="text-4xl mb-q " />
            <p className="text-xs ">In-Play</p>
          </div>
          <div
            className={
              "flex text-gray-700 rounded-xl flex-col items-center py-2 px-1 hover:text-black mb-4"
            }
          >
            <FaCalendarDay className="text-4xl mb-1 " />
            <p className="text-xs ">Today</p>
          </div>
          <div
            className={
              "flex text-gray-700 rounded-xl flex-col items-center py-2 px-1 hover:text-black mb-4"
            }
          >
            <FaCalendarDays className="text-4xl mb-1 " />
            <p className="text-xs ">Tomorrow</p>
          </div>
          <div
            className={
              "flex text-gray-700 rounded-xl flex-col items-center py-2 px-1 hover:text-black mb-4"
            }
          >
            <GiTrophy className="text-4xl mb-1 " />
            <p className="text-xs ">Leagues</p>
          </div>
          <div
            className={
              "flex text-gray-700 rounded-xl flex-col items-center py-2 px-1 hover:text-black mb-4"
            }
          >
            <FaFantasyFlightGames className="text-4xl mb-1 " />
            <p className="text-xs ">Parlay</p>
          </div>
        </div>
        <div className="w-full">
          <div
            style={{ backgroundImage: `url(${allSports})` }}
            className="w-full h-[120px] bg-cover bg-center rounded-xl mb-2"
          >
            <div className="p-4 ">
              <p className="text-xl font-semibold text-gray-700">All</p>
              <p className="text-5xl font-bold">7</p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cricket})` }}
            className="w-full h-[120px] bg-cover bg-center rounded-xl mb-2"
          >
            <div className="p-4 ">
              <p className="text-xl font-semibold text-gray-700">Cricket</p>
              <p className="text-5xl font-bold">3</p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${soccer})` }}
            className="w-full h-[120px] bg-cover bg-center rounded-xl mb-2"
          >
            <div className="p-4 ">
              <p className="text-xl font-semibold text-gray-700">Soccer</p>
              <p className="text-5xl font-bold">4</p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${tennis})` }}
            className="w-full h-[120px] bg-cover bg-center rounded-xl mb-2"
          >
            <div className="p-4 ">
              <p className="text-xl font-semibold text-gray-700">Tennis</p>
              <p className="text-5xl font-bold">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCards;
