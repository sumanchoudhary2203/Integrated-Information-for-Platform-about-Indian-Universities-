import React from "react";

const NavBar = () => {
  const menuItems = [
    { name: "Home", link: "", isActive: true },
    { name: "Universities", link: "", isActive: false },
    { name: "Programs", link: "", isActive: false },
    { name: "Admission Info", link: "", isActive: false },
    { name: "Contact Us", link: "", isActive: false },
  ];

  return (
    <div className="flex justify-evenly text-black h-20 items-center ">
      <div className="text-3xl font-bold">
        <a href="/">UNIVINDIA</a>
      </div>
      <div className="flex gap-10 font-semibold">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={
              item.isActive ? "text-orange-400" : "hover:text-orange-400"
            }
          >
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
