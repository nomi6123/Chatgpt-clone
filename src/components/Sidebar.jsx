import React from "react";
import { PiCirclesFourThin } from "react-icons/pi";
// import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="border-[5px] hidden md:block bg-gray-100 w-full sm:w-1/4 lg:w-1/5 p-6 flex flex-col h-screen overflow-y-auto">


      {/* Explore GPTs Section */}
      <div className="flex items-center text-[15px] mb-3">
        <PiCirclesFourThin className="text-gray-500 text-[20px] mr-2" />
        <span>Explore GPTs</span>
      </div>
      {/* ChatGPT Section */}
      <h2 className="flex items-center text-[15px] mb-8">
      <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png"
            alt="ChatGPT Logo"
            className="h-5 w-5 mr-2"
          />
        {/* <IoChatboxEllipsesOutline className="text-gray-500 text-[20px] mr-2" /> */}

        ChatGPT
      </h2>

      {/* Main Content */}
      <div className="space-y-4 flex-grow">
        <div className="flex flex-col">
          <p className="font-semibold text-black"> Today </p>
          <div className="text-[15px] mb-1 mt-1">Adding react icons...</div>
          <div className="text-[15px] mb-1 mt-1">Add animated bg...</div>
          <div className="text-[15px] mb-1 mt-1">
            Expressing affection online...
          </div>
          <div className="text-[15px] mb-1 mt-1">Email icons fix</div>
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-black"> Yesterday </p>
          <div className="text-[15px] mb-1 mt-1">
            Adding fontawesome icons...
          </div>
          <div className="text-[15px] mb-1 mt-1">Remove the bg...</div>
          <div className="text-[15px] mb-1 mt-1">love no matter ...</div>
          <div className="text-[15px] mb-1 mt-1">bg change ...</div>
          <div className="text-[15px] mb-1 mt-1">Love no matter ...</div>
          <div className="text-[15px] mb-1 mt-1">I hate you ...</div>
          <div className="text-[15px] mb-1 mt-1">like emoji</div>
          <div className="text-[15px] mb-1 mt-1">
            Expressing affection online...
          </div>
          <div className="text-[15px] mb-1 mt-1">Email icons fix</div>
        </div>

        <div className="flex flex-col">
          <p className="text-black font-semibold">Previous 7 Days</p>
          <div className="text-[15px] mb-1 mt-1">
            How to add icons in React...
          </div>
          <div className="text-[15px] mb-1 mt-1">Remove the text...</div>
          <div className="text-[15px] mb-1 mt-1">Feeling expression...</div>
          <div className="text-[15px] mb-1 mt-1">WhatsApp icons fix</div>
          <div className="text-[15px] mb-1 mt-1">WhatsApp icons fix</div>
          <div className="text-[15px] mb-1 mt-1">WhatsApp date </div>
          <div className="text-[15px] mb-1 mt-1">WhatsApp time </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="mt-5">
          <p className="text-blue-500 font-semibold cursor-pointer">
            Upgrade Plan
          </p>
          <p className="text-gray-500 cursor-pointer">
            More access to upgrade plan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
