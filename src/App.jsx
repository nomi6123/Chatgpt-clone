import React from "react";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />

        <MainSection />
      </div>
    </div>
  );
};

export default App;
