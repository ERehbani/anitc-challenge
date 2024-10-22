import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/public/img1.png",
  "/public/img2.png",
  "/public/img3.png",
  "/public/img4.png",
  "/public/img5.png",
  "/public/img6.png",
];

const Carousel = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div>
      <div className="relative h-[400px] overflow-hidden mb-20">
        <div
          ref={containerRef}
          className="absolute flex animate-scroll whitespace-nowrap"
          style={
            {
              "--scroll-width": `${scrollWidth}px`,
              animationPlayState: isPaused ? "paused" : "running",
            } as React.CSSProperties
          }
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          {[...Array(2)].map((_, outerIndex) => (
            <div key={outerIndex} className="flex">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="w-20 flex items-center justify-center mx-24">
                  <div className="flex items-center justify-center h-full">
                    <img
                      className="w-80 h-[400px] text-primary transition-all drop-shadow-sm shadow-white mx-40 px-10"
                      src={src}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="container mx-auto px-4 bg-white">
        <div className="flex justify-around items-center w-[85%] mx-auto mb-20 max-lg:flex-col max-lg:space-y-5">
          <h2 className="text-[#534B42] text-5xl">Inspirations</h2>
          <p className="text-sm text-[#706458E5] w-80">
            Our experts are keen to stay on top of trends in order to offer you
            new inspirations for your interior and exterior every day.
          </p>
          <div className="flex space-x-2 max-lg:hidden">
            {["left", "right"].map((direction) => (
              <Button
                key={direction}
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-[#A06056] hover:shadow-md hover:shadow-[#A06056] transition-all size-12">
                {direction === "left" ? (
                  <ChevronLeft className="h-4 w-4 text-[#A06056]" />
                ) : (
                  <ChevronRight className="text-[#A06056]" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
