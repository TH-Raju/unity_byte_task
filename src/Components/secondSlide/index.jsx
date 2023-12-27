/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowCircleRight, FaCircle } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const SecondSlide = ({ slides }) => {
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
    // console.log("end", slides.length);
  };

  return (
    <div className="md:flex block justify-around items-center">
      <img
        src="https://images.unsplash.com/photo-1703192163759-316babf88c76?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full md:w-[40%] h-32 "
      />
      <div className="mt-10 md:mt-0">
        <div className="flex justify-around ">
          <h1>
            <span className="font-bold">Second Slide</span> {start} - {end} (
            {slides.length})
          </h1>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className={`${start == 0 && "btn-disabled "}`}
            >
              <FaCircle className={`${start < 4 && "text-purple-600 "}`} />
            </button>
            <button
              onClick={nextSlide}
              className={`${end == slides.length && "btn-disabled"}`}
            >
              <FaCircle className={`${start != 0 && "text-purple-600 "}`} />
            </button>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <div className="mx-7 grid grid-cols-1   transition ease-out duration-100">
            {slides.slice(start, end).map((s, i) => {
              return (
                <div key={i} className="flex items-center m-4  gap-6">
                  <div>
                    <img
                      src={s.image}
                      alt=""
                      className="h-32 md:h-14 lg:h-24"
                    />
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
    </div>
  );
};

export default SecondSlide;
