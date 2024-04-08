
import { Carousel } from "flowbite-react";

const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-[80vh] 2xl:h-96 mt-10">
        <Carousel slideInterval={5000}>
          <img src="https://i.ibb.co/Z2DJRhH/received-312122771195592-01-1.jpg" alt="..." />
          <img src="https://i.ibb.co/zPQyj6z/received-1045027016784380-01.jpg" alt="..." />
          <img src="https://i.ibb.co/SdsFtcQ/received-2012742495746409-01.jpg" alt="..." />
   
        </Carousel>
      </div>
    );
};

export default Slider;