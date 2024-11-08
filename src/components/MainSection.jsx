import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MainSection = () => {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);
  // jvvchgois
  const handleSend = (e) => {
    e.preventDefault();
    if (message === "") {
      alert("Please enter a message");
    } else setList([...list, message]), setMessage("");

    // jxcvvhoj
    console.log(list);
    console.log(message);
    // setMessage("");
  };

  return (
    <div className="flex-1 p-8 flex justify-center items-center ">
      <div className="text-center max-w-lg">
        <h1 className="text-[32px] font-semibold mb-6">
          What can I help with?
        </h1>
        <div className="m-8 flex justify-center items-center  flex-col bg-gray-300 rounded-2xl  ">
          {list.map((item, id) => {
            return (
              <div
                key={(item, id)}
                className="card m-auto mb-2 mt-2 w-[320px] rounded-2xl flex justify-center items-center
h-[150px] bg-slate-100 border-[2px] border-yellow-800 shadow-lg shadow-black"
              >
                <h1 className="text-[32px] font-semibold mb-6">
                  {item}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="mb-8 flex justify-center items-center w-full">
          <div className="w-full max-w-md mx-auto">
            <div className=" flex justify-center items-center rounded-lg">
              {/* Add the SVG logo inside a span */}
              <span className="px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  className="bi bi-chat-left-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v10.793l-2.853-2.854A.5.5 0 0 0 11 9.5H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2h8.793l3.854 3.853A.5.5 0 0 0 16 14.5V2a2 2 0 0 0-2-2H2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
              <form action="" className="flex">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  placeholder="Message ChatGPT "
                  className="w-full py-2 px-3 border-[3px] border-gray-400 text-black focus:outline-none rounded-3xl "
                />
                <button
                  onClick={(e) => handleSend(e)}
                  className="py-2 px-3 bg-orange-400 rounded-lg text-white  hover:bg-blue-600 focus:outline-none "
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              label: "Brainstorm",
              icon: "fa-table-list",
              color: "text-red-400",
            },
            {
              label: "Summarize text",
              icon: "fa-book-open",
              color: "text-orange-500",
            },
            { label: "Code", icon: "fa-code", color: "text-green-500" },
            {
              label: "Make a plan",
              icon: "fa-calendar-check",
              color: "text-blue-500",
            },
            {
              label: "Get advice",
              icon: "fa-lightbulb",
              color: "text-yellow-600",
            },
            { label: "More", icon: "fa-ellipsis-h", color: "text-blue-950" },
          ].map(({ label, icon, color }) => (
            <button
              key={label}
              className="text-gray-500 px-6 py-2 rounded-lg hover:bg-white hover:text-black flex items-center gap-2"
              aria-label={label}
            >
              <i className={`fas ${icon} ${color}`}></i>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
