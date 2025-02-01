import { useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { useSpring, animated } from "react-spring";
const Headline = () => {
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 6000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div className="flex items-center bg-white w-full">
      <div className="relative bg-white z-50 px-4 border-r border-gray-200 py-2 ">
        <IoNewspaperOutline />
      </div>
      <div key={key} className="w-full ">
        <animated.div style={scrolling}>
          <p className="whitespace-nowrap font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            velit temporibus ut cum, accusantium ducimus. In hic quo
            exercitationem eius, labore suscipit molestias omnis ad expedita et
            reiciendis placeat eveniet iusto at, laudantium mollitia nobis sint.
            Dignissimos odit quae officia consectetur debitis obcaecati deleniti
            similique deserunt fugit! Omnis, quod officiis.
          </p>
        </animated.div>
      </div>
    </div>
  );
};

export default Headline;
