/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const FirstSlide = ({ slides }) => {
  //   console.log(slides);
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(4);

  let prevSlide = () => {
    setStart(start - 4);
    setEnd(end - 4);

    // console.log(start, end);
  };

  let nextSlide = () => {
    setStart(start + 4);
    setEnd(end + 4);

    // console.log("s", start, "e", end);
  };

  return (
    <div>
      <div className="text-center">
        <h1>
          {start} to {end} ({slides.length})
        </h1>
      </div>
      <div className="overflow-hidden relative">
        <div className="mx-7 grid grid-cols-1 md:grid-cols-2   transition ease-out duration-100">
          {slides.slice(start, end).map((s, i) => {
            return (
              <div key={i} className="flex m-4 bg-red-500 gap-6">
                <div>
                  <img src={s.image} alt="" className="h-32" />
                </div>
                <div className="w-[60%]">
                  <h1>{s.name}</h1>
                  <h1>{s.price}</h1>
                  <h1>{s.description}</h1>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 h-full w-full flex justify-between  items-center  ">
          <button
            onClick={prevSlide}
            className={`${start == 0 && "btn-disabled "}`}
          >
            <FaArrowCircleLeft className="text-3xl  hover:text-red-400" />
          </button>
          <button
            onClick={nextSlide}
            className={`${end == slides.length && "btn-disabled"}`}
          >
            <FaArrowCircleRight className="text-3xl  hover:text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
