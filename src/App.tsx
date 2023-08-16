import React, { useState } from "react";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/Nav/NavBar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex">
        <div className={`${isSidebarOpen ? "w-[130px] " : "w-[274px]"}`}>
          <SideBar isOpen={isSidebarOpen} />
        </div>
        <div className="w-auto ">
          <NavBar handleSidebarToggle={handleSidebarToggle} />
        </div>
      </div>
    </>
  );
}

export default App;
