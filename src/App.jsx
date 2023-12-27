/* eslint-disable no-unused-vars */
import FirstSlide from "./Components/firstSlide";
import SecondSlide from "./Components/secondSlide";
import Home from "./Pages/Home";

const App = () => {
  let slide = [
    {
      name: "slide 1",
      price: "300",
      image:
        "https://images.unsplash.com/photo-1703631531141-c5bfe28c02e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
      description: "Some details of here",
    },
    {
      name: "slide 2",
      price: "300",
      image:
        "https://images.unsplash.com/photo-1701338678701-c053ba5d6ee1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
      description: "Some details of here",
    },
    {
      name: "slide 3",
      price: "300",
      image:
        "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
      description: "Some details of here",
    },
    {
      name: "slide 4",
      price: "300",
      image:
        "https://images.unsplash.com/photo-1699084681511-8cc4306de721?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      description: "Some details of here",
    },
    {
      name: "slide 5",
      price: "300",
      image:
        "https://images.unsplash.com/photo-1695653422853-3d8f373fb434?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
      description: "Some details of here",
    },
    {
      name: "slide 6",
      price: "300",
      image:
        "https://images.unsplash.com/photo-1695653422872-9bd1e29fe490?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
      description: "Some details of here",
    },
    {
      name: "slide 7",
      price: "300",
      image:
        "https://plus.unsplash.com/premium_photo-1682125831761-ba29ea80603a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
      description: "Some details of here",
    },
    {
      name: "slide 8",
      price: "300",
      image:
        "https://images.unsplash.com/photo-1695653423459-beb6b8a8169b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
      description: "Some details of here",
    },
  ];

  return (
    <div className="">
      <div>
        <h1 className="text-2xl text-center font-bold underline-offset-4 underline">
          1st Slide
        </h1>
        <FirstSlide slides={slide} />
      </div>
      <div className="my-24 bg-gray-200">
        <h1 className="text-2xl  text-center font-bold underline-offset-4 underline">
          2nd Slide
        </h1>
        <SecondSlide slides={slide} />
      </div>
    </div>
  );
};

export default App;
