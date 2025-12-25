import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    id: 1,
    quote:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    author: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    bgColor: "bg-[#71719a]",
    socialIcon: "/div-testimonial-card--social-icon-1.svg",
  },
  {
    id: 2,
    quote:
      "My favorites ❤ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    author: "Mauricio Sanchez",
    handle: "@m741s",
    bgColor: "bg-[#d9ae89]",
    socialIcon: "/div-testimonial-card--social-icon.svg",
  },
  {
    id: 3,
    quote:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    author: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    bgColor: "bg-[#765070]",
    socialIcon: "/div-testimonial-card--social-icon-2.svg",
  },
];

const paginationDots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start justify-center pt-[120px] pb-0 px-[330px] bg-[#fefefe]">
      <div className="flex flex-col max-w-[1260px] w-full items-center pb-[1.53e-05px] pt-0 px-[30px]">
        <header className="grid grid-cols-12 gap-0 w-full mb-[25px]">
          <div className="col-span-5 flex items-start pl-2.5 pr-[101px] pt-0 pb-[17.08px]">
            <h2 className="[font-family:'Avenir_Next-DemiBold',Helvetica] font-bold text-[#26262b] text-4xl tracking-[1.30px] leading-[47.9px] whitespace-nowrap">
              Setapp in your words.
            </h2>
          </div>

          <div className="col-span-5 flex items-start pl-2.5 pr-[25px] py-0">
            <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#26262b] text-lg tracking-[0] leading-[32.0px]">
              What you say about how Setapp
              <br />
              powers you up.
            </p>
          </div>

          <div className="col-span-2">
            <img
              className="w-full h-full"
              alt="Div col"
              src="/div-col-12.svg"
            />
          </div>
        </header>

        <div className="relative w-full overflow-hidden">
          <div className="flex items-center justify-between mb-[44px]">
            <button
              className="flex items-center justify-center"
              aria-label="Previous testimonials"
            >
              <ChevronLeftIcon className="w-6 h-6 text-[#26262b]" />
            </button>
            <button
              className="flex items-center justify-center"
              aria-label="Next testimonials"
            >
              <ChevronRightIcon className="w-6 h-6 text-[#26262b]" />
            </button>
          </div>

          <div className="flex items-stretch gap-5 px-2.5 py-[5px] mb-[56px]">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="w-[calc(33.333%-14px)] bg-neutral-100 rounded-[15px] border-0 flex flex-col"
              >
                <CardContent className="p-[7px] flex flex-col h-full">
                  <div
                    className={`${testimonial.bgColor} rounded-lg p-[22px] mb-[7px] flex-1 flex flex-col justify-center`}
                  >
                    <p className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[28px]">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-end justify-between px-[22px] py-4 relative">
                    <div className="flex flex-col items-start">
                      <div className="[font-family:'Avenir_Next-DemiBold',Helvetica] font-bold text-[#26262b] text-base tracking-[0] leading-[24px]">
                        {testimonial.author}
                      </div>
                      <div className="[font-family:'Avenir_Next-DemiBold',Helvetica] font-bold text-[#9f9f9f] text-xs tracking-[0] leading-[20px]">
                        {testimonial.handle}
                      </div>
                    </div>

                    <img
                      className="flex-shrink-0 w-6 h-6"
                      alt="Social icon"
                      src={testimonial.socialIcon}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-start justify-center gap-[25px]">
            {paginationDots.map((dot, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-md ${dot.active ? "bg-[#1d1d22]" : "bg-[#d5d4d4]"}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={dot.active ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
