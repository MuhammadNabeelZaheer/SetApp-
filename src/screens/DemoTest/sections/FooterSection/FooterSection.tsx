import { MailIcon } from "lucide-react";
import { Input } from "../../../../components/ui/input";

const footerLinks = {
  column1: [
    "Home",
    "How It Works",
    "All Apps",
    "Pricing",
    "Setapp for Teams",
    "Blog",
    "Podcast",
    "Download",
  ],
  column2: [
    "About",
    "Support",
    "Education Discount",
    "Family Plan",
    "For Developers",
    "Gift Cards",
    "Redeem Card or Code",
    "Setapp Reviews",
    "Affiliate Program",
    "Mac Developer Survey 2023",
  ],
  column3: [
    "Getting started with Setapp",
    "Remote access to other Mac",
    "Fix macOS Ventura problems",
    "Best productivity apps",
    "Best YouTube downloaders",
    "Uninstall apps",
  ],
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex w-full items-start bg-transparent">
      <div className="flex w-full items-start justify-start pt-[60px] pb-10 pl-[60px] pr-[60px] bg-[#2b2d32]">
        <div className="flex flex-col max-w-[1440px] w-full items-start gap-10 pl-[30px] pr-[30px]">
          <div className="flex w-full items-start justify-between gap-[230px]">
            <div className="flex flex-col max-w-[460px] items-start gap-[78px] pt-0 pb-[109px] px-2.5 flex-shrink-0">
              <img
                className="w-[440px] h-8"
                alt="Div logo"
                src="/div-logo.svg"
              />

              <div className="flex flex-col w-[440px] items-start gap-6 pt-0 pb-[3.29px] px-0">
                <div className="w-[440px] h-[28.48px] relative">
                  <div className="flex items-center justify-start [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[28.5px] whitespace-nowrap">
                    Updates from our team, written with love
                  </div>

                  <MailIcon className="absolute top-1.5 left-[300px] w-4 h-4 text-white" />
                </div>

                <div className="flex w-[440px] items-start gap-0">
                  <Input
                    placeholder="Enter your email"
                    className="flex-1 bg-[#404547] border-0 rounded-[6px_0px_0px_6px] text-[#9d9ca2] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base h-[50px]"
                  />

                  <img
                    className="h-[50px]"
                    alt="Button subscribe for"
                    src="/button---subscribe-for-newsletters.svg"
                  />
                </div>
              </div>
            </div>

            <div className="flex max-w-[690px] items-start flex-1">
              <div className="flex w-[690px] items-start gap-0">
                <div className="flex flex-col max-w-[230px] items-start gap-[0.5px] pl-2.5 pr-[93px] pt-[0.5px] pb-[65px] flex-1">
                  {footerLinks.column1.map((link, index) => (
                    <div
                      key={index}
                      className={`${index === 0 ? "mt-[-1.00px]" : ""} flex items-center justify-start w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity`}
                    >
                      {link}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col max-w-[230px] items-start gap-[0.5px] pl-2.5 pr-3.5 pt-[0.5px] pb-0 flex-1">
                  {footerLinks.column2.map((link, index) => (
                    <div
                      key={index}
                      className={`${index === 0 ? "mt-[-1.00px]" : ""} flex items-center justify-start w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity`}
                    >
                      {link}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col max-w-[230px] items-start gap-[0.5px] pl-2.5 pr-3.5 pt-[0.5px] pb-[97.5px] flex-1">
                  <div className="mt-[-1.00px] flex items-center justify-start w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
                    Getting started with Setapp
                  </div>

                  <div className="flex items-center justify-start w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
                    Remote access to other Mac
                  </div>

                  <div className="inline-flex flex-col items-start gap-[0.5px]">
                    <div className="flex items-center justify-start w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
                      Fix macOS Ventura
                    </div>
                    <div className="flex items-center justify-start w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
                      problems
                    </div>
                  </div>

                  <div className="flex items-center justify-start w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
                    Best productivity apps
                  </div>

                  <div className="flex items-center justify-start w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
                    Best YouTube downloaders
                  </div>

                  <div className="flex items-center justify-start w-fit [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
                    Uninstall apps
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-[1360px] items-center justify-between">
            <div className="inline-flex items-start gap-px">
              <div className="w-[41px] h-[26px] bg-[#969799] relative">
                <div className="absolute top-1.5 left-1 w-[33px] h-3 flex items-center justify-center [font-family:'Arial-Bold',Helvetica] font-bold text-white text-[11px] tracking-[0] leading-[26px] whitespace-nowrap">
                  DMCA
                </div>
              </div>

              <div className="w-[83.84px] h-[26px] bg-[#404547] relative">
                <div className="absolute top-1.5 left-2 w-[68px] h-3 flex items-center justify-center [font-family:'Arial-Bold',Helvetica] font-bold text-white text-[11px] tracking-[0] leading-[26px] whitespace-nowrap">
                  PROTECTED
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <img className="w-7 h-3.5" alt="En svg" src="/en-svg.svg" />

              <div className="flex items-center justify-center [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[28.5px] whitespace-nowrap">
                English
              </div>

              <img className="w-2.5 h-2.5" alt="Svg" src="/svg-1.svg" />
            </div>
          </div>

          <div className="w-full max-w-[1360px] border-t border-neutral-200 pt-[29px]">
            <div className="flex flex-col gap-[45px]">
              <div className="flex items-start justify-between">
                <div className="max-w-[920px] pl-2.5">
                  <div className="flex items-center justify-start [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[21.4px]">
                    © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
                    P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
                  </div>
                </div>

                <img
                  className="h-[26px]"
                  alt="Div col"
                  src="/div-col-12-1.svg"
                />
              </div>

              <div className="flex items-start gap-[12.67px] pl-2.5">
                <div className="flex items-center justify-start [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#969799] text-xs tracking-[0] leading-[21.4px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
                  Terms of Use
                </div>

                <div className="flex items-center justify-start [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-[#969799] text-xs tracking-[0] leading-[21.4px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
