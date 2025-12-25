import { ChevronLeftIcon, ChevronRightIcon, Play } from "lucide-react";
import React from "react";

const testimonials = [
  {
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    image: "/image-67.png",
    active: true,
  },
  {
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    image: "/image-67.png",
    active: false,
  },
  {
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    image: "/image-67.png",
    active: false,
  },
  {
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    image: "/image-67.png",
    active: false,
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full relative bg-[linear-gradient(180deg,rgba(38,38,43,1)_0%,rgba(38,38,43,1)_50%,rgba(254,254,254,1)_50%,rgba(254,254,254,1)_100%)]">
      <div className="flex items-center justify-center py-6 px-4">
        <div className="relative w-full max-w-[1395px] overflow-hidden">
          <div className="flex items-center justify-center px-12 py-6">
            <div className="relative w-full bg-[#765070] rounded-[20px] overflow-hidden">
              <div className="flex items-center justify-between px-12 py-8 pb-0">
                <div className="flex flex-col gap-5 max-w-[556px] z-10">
                  <p className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-white text-[26px] leading-[40px]">
                    Musicians like Jason use Setapp to push the limits of their
                    creativity, dancing through tasks for more time to play.
                  </p>
                  <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base">
                    Jason Staczek
                  </p>
                  <button className="w-14 h-14 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors">
                    <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
                  </button>
                </div>
                <div className="flex-shrink-0 self-end">
                  <img
                    className="w-[670px] h-[690px] object-cover"
                    alt="Jason Staczek"
                    src="/image-67.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[25px] py-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-md ${
                  testimonial.active ? "bg-[#1d1d22]" : "bg-[#d5d4d4]"
                }`}
              />
            ))}
          </div>

          <div className="absolute top-[90px] right-[120px] flex gap-4">
            <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <ChevronRightIcon className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
