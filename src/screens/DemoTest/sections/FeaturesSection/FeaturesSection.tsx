import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const floatingIcons = [
  {
    src: "/teamwork-svg.svg",
    className: "w-[227px] h-[113px] top-[339px] left-[331px]",
  },
  {
    src: "/pics-svg.svg",
    className: "w-[173px] h-[172px] top-[46px] left-[336px]",
  },
  {
    src: "/secure-svg.svg",
    className: "w-[175px] h-[175px] top-[418px] left-[330px]",
  },
  {
    src: "/pdf-svg.svg",
    className: "w-[142px] h-[141px] top-[170px] left-[440px]",
  },
  {
    src: "/wifi-svg-1.svg",
    className: "w-[202px] h-[126px] top-16 left-[1389px]",
  },
  {
    src: "/manage-svg.svg",
    className: "w-[230px] h-[127px] top-[336px] left-[1316px]",
  },
  {
    src: "/macpaw-svg.svg",
    className: "w-[58px] h-[57px] top-[177px] left-[335px]",
  },
  {
    src: "/plan-svg-1.svg",
    className: "w-[169px] h-[168px] top-[124px] left-[1297px]",
  },
  {
    src: "/code-svg-1.svg",
    className: "w-[152px] h-[152px] top-[440px] left-[1375px]",
  },
  {
    src: "/converter-svg-1.svg",
    className: "w-[155px] h-[152px] top-[235px] left-[1449px]",
  },
];

const featureCards = [
  {
    id: "clean",
    bgColor: "bg-[#df96ae]",
    icon: "/icon-cmm-png.png",
    title: "Keep your Mac clean",
    description: "Remove junk, scan for malware, wipe email attachments",
    image: "/cmm-big-2x-png.png",
    imageHeight: "h-[465px]",
    fullWidth: true,
    textColor: "text-[#26262b]",
  },
  {
    id: "code",
    bgColor: "bg-[#f4f0e4]",
    icon: "/icon-coderunner-png.png",
    title: "Write code",
    description: "Create applications in more than 25 languages",
    image: "/coderunner-2x-png.png",
    imageHeight: "h-[400.52px]",
    fullWidth: false,
    textColor: "text-[#26262b]",
  },
  {
    id: "meetings",
    bgColor: "bg-[#384c75]",
    icon: "/icon-meeter-png.png",
    title: "Join meetings in a click",
    description: "Quickly access links to your meetings from menu bar",
    image: "/meeter-2x-png.png",
    imageHeight: "h-[360px]",
    fullWidth: false,
    textColor: "text-white",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#26262b] relative">
      <div className="flex flex-col w-full items-center pt-[150px] pb-32 px-5 relative overflow-hidden">
        <div className="relative w-[1880px] h-[595.59px] ml-[-240.00px] mr-[-240.00px]">
          <img
            className="absolute top-0 left-[calc(50.00%_-_80px)] w-40 h-40"
            alt="Setapp icon birthday"
            src="/setapp-icon-birthday-15-svg-1.svg"
          />

          <div className="flex max-w-[680px] w-[680px] items-start justify-center pl-[56.36px] pr-[56.64px] pt-0 pb-[0.51px] absolute h-[calc(100%_-_391px)] top-[199px] left-[calc(50.00%_-_340px)]">
            <h1 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-white text-[64px] text-center tracking-[1.00px] leading-[67.8px]">
              Dozens of apps.
              <br />
              One subscription.
              <br />
              $9.99
            </h1>
          </div>

          <div className="absolute h-[calc(100%_-_544px)] top-[452px] left-[calc(50.00%_-_183px)] w-[366px] flex">
            <Button className="inline-flex w-[209.93px] h-[52px] relative items-start justify-center pl-8 pr-[30.93px] py-3.5 bg-white rounded-md border border-solid hover:bg-white/90">
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#26262b] text-base text-center tracking-[1.00px] leading-6 whitespace-nowrap">
                Try free for 7 days
              </span>
            </Button>

            <img
              className="w-[62px] relative ml-5"
              alt="Link"
              src="/link-3.svg"
            />

            <img
              className="w-[62px] relative ml-3"
              alt="Link"
              src="/link-4.svg"
            />
          </div>

          <div className="flex max-w-xs w-80 items-start justify-center pl-[1.72px] pr-[1.28px] py-0 absolute h-[calc(100%_-_531px)] top-[531px] left-[calc(50.00%_-_160px)]">
            <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[32.0px]">
              Power up your workflow with Setapp, a<br />
              smart way to get apps.
            </p>
          </div>

          {floatingIcons.map((icon, index) => (
            <img
              key={`icon-${index}`}
              className={`absolute ${icon.className}`}
              alt="App icon"
              src={icon.src}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1180px] mx-auto px-5 relative">
        <div className="flex flex-col border-t border-neutral-200 pt-[101px]">
          <div className="w-full h-[71.84px] relative">
            <div className="flex max-w-[500px] w-full items-start pt-0 pb-[0.84px] absolute -top-px left-0">
              <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-DemiBold',Helvetica] font-bold text-white text-4xl tracking-[1.00px] leading-[51.8px] whitespace-nowrap">
                What you get on Setapp.
              </h2>
            </div>

            <div className="flex max-w-[600px] w-full items-start absolute h-full top-0 right-0">
              <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[32.0px]">
                With a single monthly subscription at $9.99, you get 240+ apps
                for
                <br />
                your Mac.
              </p>
            </div>
          </div>

          <div className="inline-flex w-full h-[1258px] relative mt-[88.0px] flex-col items-center gap-5">
            <Card
              className={`flex flex-col w-full items-start justify-between pt-[60px] pb-0 px-0 relative flex-[0_0_auto] ${featureCards[0].bgColor} rounded-[20px] overflow-hidden border-0`}
            >
              <CardContent className="p-0 w-full">
                <div className="flex w-full items-center gap-8 pl-[60px] pr-[552px] py-0 relative flex-[0_0_auto]">
                  <div
                    className="w-20 h-20 bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${featureCards[0].icon})` }}
                  />

                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <h3
                      className={`relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-DemiBold',Helvetica] font-bold ${featureCards[0].textColor} text-[26px] tracking-[0] leading-[40.0px] whitespace-nowrap`}
                    >
                      {featureCards[0].title}
                    </h3>

                    <p
                      className={`relative flex items-center justify-center w-fit mt-[-0.46px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal ${featureCards[0].textColor} text-lg tracking-[0] leading-[32.0px] whitespace-nowrap`}
                    >
                      {featureCards[0].description}
                    </p>
                  </div>
                </div>

                <div className="flex w-full items-start justify-center px-[37px] py-0 relative flex-[0_0_auto]">
                  <div
                    className={`relative flex-1 max-w-[1106px] grow ${featureCards[0].imageHeight} bg-cover bg-[50%_50%]`}
                    style={{ backgroundImage: `url(${featureCards[0].image})` }}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap w-full items-stretch gap-[0px_20px] relative flex-[0_0_auto]">
              {featureCards.slice(1).map((card) => (
                <Card
                  key={card.id}
                  className={`flex flex-col w-[calc(50%_-_10px)] items-start justify-between pt-[60px] pb-0 px-0 relative ${card.bgColor} rounded-[20px] overflow-hidden border-0`}
                >
                  <CardContent className="p-0 w-full flex flex-col h-full">
                    {card.id === "code" && (
                      <div
                        className={`relative w-full ${card.imageHeight} z-[1] bg-cover bg-[50%_50%]`}
                        style={{ backgroundImage: `url(${card.image})` }}
                      />
                    )}

                    <div
                      className="flex flex-col w-full items-start gap-[19px] px-[60px] py-[60px] relative flex-[0_0_auto]"
                    >
                      <div
                        className="w-[68px] h-[68px] bg-cover bg-[50%_50%] relative"
                        style={{ backgroundImage: `url(${card.icon})` }}
                      />

                      <div className="flex w-full max-w-[460px] flex-col items-start relative flex-[0_0_auto]">
                        <h3
                          className={`relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-DemiBold',Helvetica] font-bold ${card.textColor} text-[26px] tracking-[0] leading-[40.0px] whitespace-nowrap`}
                        >
                          {card.title}
                        </h3>

                        <p
                          className={`relative flex items-center justify-center w-fit mt-[-0.46px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal ${card.textColor} text-lg tracking-[0] leading-[32.0px] whitespace-nowrap`}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {card.id === "meetings" && (
                      <div
                        className={`relative w-full ${card.imageHeight} bg-cover bg-[50%_50%] mt-auto`}
                        style={{ backgroundImage: `url(${card.image})` }}
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="h-14 relative mt-[150px] mx-auto rounded-md flex items-center justify-center cursor-pointer gap-6">
            <img
              className="w-[27px] h-[21px]"
              alt="Arrow icon"
              src="/a77801e1cdb15ca14faa-svg.svg"
            />

            <span className="h-[30px] flex items-center justify-center [font-family:'Avenir_Next-Medium',Helvetica] font-medium text-white text-xl text-center tracking-[1.60px] leading-[30px] whitespace-nowrap">
              View all superpowers
            </span>
          </div>
        </div>

        <div className="flex border-b border-neutral-200 pt-[232px] pb-[89px]">
          <div className="w-full relative">
            <div className="flex max-w-[400px] w-full items-start absolute -top-px left-0">
              <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-DemiBold',Helvetica] font-bold text-white text-4xl tracking-[1.00px] leading-[51.8px] whitespace-nowrap">
                Your Setapp journey.
              </h2>
            </div>

            <div className="flex max-w-[600px] w-full items-start absolute top-0 right-0">
              <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[32.0px]">
                Type in your task into Setapp search and get instant app
                <br />
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
