import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col m-auto">
        <div className="min-w-[200px] h-auto flex flex-col items-center justify-start flex-wrap">
          <div className="font-bold text-[16px]">Social Media</div>
          <div className="min-w-[200px] h-auto flex flex-wrap items-center justify-start flex-wrap gap-7">
            <a href="https://www.instagram.com/shivendra.shivhare/" className="flex flex-wrap items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>    
            </a>
            <a href="https://twitter.com/03Shivendra_OP" className="flex flex-wrap items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>    
            </a>
            <a href="https://www.linkedin.com/in/shivendra-shivhare-88ba14235/" className="flex flex-wrap items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>    
            </a>
            <a href="https://discordapp.com/users/925644030484807782" className="flex flex-wrap items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>    
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
