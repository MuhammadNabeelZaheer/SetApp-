import React from "react";
import { Button } from "../../components/ui/button";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const navigationItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "All apps", href: "#all-apps" },
  { label: "Pricing", href: "#pricing" },
  { label: "For Teams", href: "#for-teams" },
  { label: "Blog", href: "#blog" },
  { label: "Podcast", href: "#podcast" },
];

export const DemoTest = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <header className="w-full bg-[#2b2d32] py-4 px-10 flex items-center justify-between relative z-10">
        <img
          className="w-[102px] h-8"
          alt="Link go to homepage"
          src="/link---go-to-homepage.svg"
        />

        <nav className="flex items-center gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-white text-sm tracking-[0.90px] leading-[25.8px] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img className="w-7 h-4" alt="Language flag" src="/item.svg" />
          </div>

          <div className="w-px h-5 bg-white/20" />

          <a
            href="#sign-in"
            className="[font-family:'Avenir_Next-Medium',Helvetica] font-medium text-white text-sm tracking-[0.90px] leading-[25.8px] whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            Sign In
          </a>

          <Button
            variant="outline"
            className="rounded-md border border-white bg-transparent text-white text-sm tracking-[1.00px] leading-[20.0px] px-6 py-2 [font-family:'Avenir_Next-Regular',Helvetica] font-normal hover:bg-white/10"
          >
            Try free
          </Button>
        </div>
      </header>

      <main className="w-full">
        <FeaturesSection />
        <TestimonialsSection />
        <MainContentSection />
        <HeroSection />
        <FooterSection />
      </main>

      <img
        className="fixed bottom-0 left-0 w-12 h-12 z-50"
        alt="Button open intercom"
        src="/button---open-intercom-messenger.svg"
      />
    </div>
  );
};
