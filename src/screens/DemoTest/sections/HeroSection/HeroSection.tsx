import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center py-5 px-10 bg-[linear-gradient(180deg,rgba(254,254,254,1)_0%,rgba(254,254,254,1)_50%,rgba(43,45,50,1)_50%,rgba(43,45,50,1)_100%)]">
      <div className="w-full max-w-[1330px] flex items-start justify-center px-[290px] py-0 bg-neutral-100 rounded-[20px] overflow-hidden">
        <div className="relative w-full max-w-[1260px] h-[587.59px] mx-[-255px]">
          <img
            className="absolute top-[124px] left-10 w-[76px] h-[120px]"
            alt="Setapp logo svg"
            src="/setapp-logo-svg.svg"
          />

          <div className="flex w-[calc(100%_-_80px)] items-start max-w-[600px] absolute top-[265px] left-10">
            <h1 className="mt-[-1px] [font-family:'Avenir_Next-DemiBold',Helvetica] font-bold text-[#26262b] text-[46px] tracking-[1.30px] leading-[59.8px]">
              Superpowers starting $9.99/month.
              <br />
              Free for 7 days.
            </h1>
          </div>

          <div className="flex w-[calc(100%_-_80px)] items-start gap-[24.5px] absolute top-[446px] left-10">
            <Button className="px-[31px] py-[13px] bg-[#26262b] hover:bg-[#26262b]/90 rounded-md [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[1.00px] leading-6">
              Get started now
            </Button>

            <Button
              variant="outline"
              className="px-[31px] py-[13px] rounded-md border border-solid border-[#26262b] bg-transparent hover:bg-[#26262b]/5 [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#26262b] text-base tracking-[1.00px] leading-6"
            >
              More about Setapp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
