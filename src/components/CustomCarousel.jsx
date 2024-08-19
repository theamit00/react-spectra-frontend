import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import ImageComponent from "./ImageComponent";

const CustomCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="h-[max-content] w-full p-8 sm:p-10 border-[2px] border-black shadow-[0px_4px_0px_0px_#050505] rounded-[40px] bg-white "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent className="relative" >
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="border-none shadow-none gap-14 flex flex-col ">
                <CardContent className="flex p-0 flex-col gap-6">
                  <p className="text-[20px]">
                    "We value your feedback on our SaaS product. Here's a
                    customer <br /> review from one of our users:
                  </p>
                  <p className="text-[20px]">
                    "This SaaS solution completely transformed our workflow. It
                    increased <br /> our efficiency, improved collaboration, and
                    saved us time. It's an amazing solution!"
                  </p>
                </CardContent>
                <CardFooter className="p-0 flex justify-between ">
                  <div className="userDetails p-0 flex flex-col gap-4 ">
                    <ImageComponent
                      src={`https://framerusercontent.com/images/8x636UYOQdEprnaPCvSrokijA.png`}
                      className="rounded-full border-[1.5px] w-[min-content] border-black sm-box-shadow"
                      imageClassname="w-[108px] h-[108px]"
                    />
                    <p className="text-orange-100">
                      Director of Content @Flowbase
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-[80px] right-[100px] w-max hidden sm:block " >
        <CarouselPrevious className="border-[1.2px] border-black sm-box-shadow w-10 h-10" />
        <CarouselNext className="border-[1.2px] border-black sm-box-shadow w-10 h-10 " />
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
