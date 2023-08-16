import logo from "../../Assest/Images/logo-ct-dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBasketShopping,
  faCity,
  faRocket,
  faScrewdriverWrench,
  faStore,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../../Assest/Style/Index.css";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const DropdownItem = ({ icon, text }: { icon: any; text: string }) => (
  <li className="w-full">
    <a className="hover:cursor-pointer flex gap-5 text-sm py-1.5 ml-5.5 pl-1 my-0 mr-4 items-center bg-transparent whitespace-nowrap pr-4 font-normal text-slate-800/50 shadow-none transition-colors">
      <FontAwesomeIcon className="h-1.5 w-1.5" icon={icon} />
      <span>{text}</span>
    </a>
  </li>
);

interface DropdownItemDashProps {
  icon: any;
  text: string;
  index: number;
  active: number;
  onClick: any;
}

const DropdownItemDash: React.FC<DropdownItemDashProps> = ({
  icon,
  text,
  index,
  active,
  onClick,
}) => (
  <li className="w-full">
    <a
      className={`flex gap-6 text-sm py-1.5 ml-5.5 pl-1 my-1 mr-4 items-center bg-transparent whitespace-nowrap
     pr-4 font-normal hover:cursor-pointer focus:text-[#c3c4c7] shadow-none transition-colors ${
       active === index
         ? "text-[#3a416f] text-base font-medium"
         : "text-slate-800/50 "
     }`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className={`${active === index ? "h-2 w-2" : "h-1.5 w-1.5"}`}
        icon={icon}
      />
      <span>{text}</span>
    </a>
  </li>
);
interface SidebarProps {
  isOpen: boolean;
}
const SideBar = ({ isOpen }: SidebarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownId ? null : dropdownId
    );
  };
  const [active, setActive] = useState(0);
  return (
    <aside
      className={`" inset-y-0 psOver bg-[#e5e9ed] mt-4 mr-0 mb-4 ml-4 bg-transparent rounded-2xl " ${
        isOpen ? "fixed  transition-all" : "fixed h transition-all"
      }`}
    >
      <div
        className={` ${
          isOpen
            ? "flex items-center justify-center h-20 px-5 py-6"
            : "h-20 px-8 py-6"
        }`}
      >
        <a className="flex items-center">
          <img className="max-h-8" src={logo} alt="main-logo" />
          <span
            className={` ${
              isOpen
                ? "hidden"
                : "text-[#344767] mb-1 leading-6 text-sm font-semibold ml-2"
            }`}
          >
            Soft UI Dashboard PRO
          </span>
        </a>
      </div>
      <hr
        className={`border-t my-4 h-px bg-transparent bg-gradient-to-r from-transparent via-black/25 to-transparent  ${
          isOpen ? "w-20" : "w-60"
        }`}
      />
      <div className="items-center block w-full h-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0 list-none">
          <li className={`mt-0.5 ${isOpen ? "w-[82px]" : "w-full "}`}>
            <a
              className={`"group hover:bg-neutral-300 hover:ring-neutral-300 hover:cursor-pointer  
              ${
                isOpen
                  ? "flex items-center justify-center whitespace-nowrap bg-white rounded-lg mx-4 my-0 py-2.5"
                  : "flex items-center whitespace-nowrap bg-white rounded-lg px-4 py-2.5 mx-3 my-0"
              }
              "`}
              id="dashboard"
              onClick={() => toggleDropdown("dropdown7")}
            >
              <div
                className={`w-8 h-8 flex bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg justify-center items-center boxShadow ${
                  isOpen ? "mr-0" : "mr-2 "
                }`}
              >
                <FontAwesomeIcon
                  className="text-white h-3 w-3"
                  icon={faStore}
                />
              </div>

              <span
                className={`"group-hover:text-purple-600 " ${
                  isOpen
                    ? "hidden"
                    : "ml-1 text-sm text-[#344767] font-semibold leading-6"
                }`}
              >
                Dashboards
              </span>
              <FontAwesomeIcon
                className={`group-hover:stroke-white ml-16 h-2.5 w-2.5  text-[#4b5568] transition-all ${
                  openDropdown === "dropdown7" ? "rotate-180" : ""
                } ${isOpen ? "hidden" : ""}`}
                icon={faAngleDown}
              />
            </a>
            <div
              className={`h-auto overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === "dropdown7" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col flex-wrap pl-4 mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                <DropdownItemDash
                  icon={faCircle}
                  text="Default"
                  index={0}
                  active={active}
                  onClick={() => setActive(0)}
                />
                <DropdownItemDash
                  icon={faCircle}
                  text="Automotive"
                  index={1}
                  active={active}
                  onClick={() => setActive(1)}
                />
                <DropdownItemDash
                  icon={faCircle}
                  text="Smart Home"
                  index={2}
                  active={active}
                  onClick={() => setActive(2)}
                />
                <DropdownItemDash
                  icon={faCircle}
                  text="Virtual Reality"
                  index={3}
                  active={active}
                  onClick={() => setActive(3)}
                />
                <DropdownItemDash
                  icon={faCircle}
                  text="CRM"
                  index={4}
                  active={active}
                  onClick={() => setActive(4)}
                />
              </ul>
            </div>
          </li>
          <li className="mt-4 w-full">
            <h6 className="pl-6 mb-2 font-bold leading-tight opacity-60 uppercase text-xs">
              Pages
            </h6>
          </li>
          <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
              onClick={() => toggleDropdown("dropdown1")}
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faCity} />
              </div>

              <span
                className={`${
                  isOpen
                    ? "hidden"
                    : "text-sm text-[#67748e] font-normal leading-6"
                }`}
              >
                Pages
              </span>
              <svg
                className={`w-2 h-2 ml-auto transition-all ${
                  openDropdown === "dropdown1" ? "rotate-180" : ""
                } ${isOpen ? "hidden" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`h-auto overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === "dropdown1" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col flex-wrap pl-4 mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                <DropdownItem icon={faCircle} text="Profile" />
                <DropdownItem icon={faCircle} text="Users" />
                <DropdownItem icon={faCircle} text="Account" />
                <DropdownItem icon={faCircle} text="Pricing Page" />
              </ul>
            </div>
          </li>
          <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
              onClick={() => toggleDropdown("dropdown2")}
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon
                  className="h-3 w-3"
                  icon={faScrewdriverWrench}
                />
              </div>

              <span
                className={`${
                  isOpen
                    ? "hidden"
                    : "text-sm text-[#67748e] font-normal leading-6"
                }`}
              >
                Applications
              </span>
              <svg
                className={`w-2 h-2 ml-auto transition-all ${
                  openDropdown === "dropdown2" ? "rotate-180" : ""
                } ${isOpen ? "hidden" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`h-auto overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === "dropdown2" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col flex-wrap pl-4 mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                <DropdownItem icon={faCircle} text="Wizard" />
                <DropdownItem icon={faCircle} text="DataTables" />
                <DropdownItem icon={faCircle} text="Calender" />
                <DropdownItem icon={faCircle} text="Analytics" />
              </ul>
            </div>
          </li>
          <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
              onClick={() => toggleDropdown("dropdown3")}
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faBasketShopping} />
              </div>

              <span
                className={`${
                  isOpen
                    ? "hidden"
                    : "text-sm text-[#67748e] font-normal leading-6"
                }`}
              >
                Ecommerce
              </span>
              <svg
                className={`w-2 h-2 ml-auto transition-all ${
                  openDropdown === "dropdown3" ? "rotate-180" : ""
                } ${isOpen ? "hidden" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`h-auto overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === "dropdown3" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col flex-wrap pl-4 mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                <DropdownItem icon={faCircle} text="Overview" />
                <DropdownItem icon={faCircle} text="Products" />
                <DropdownItem icon={faCircle} text="Orders" />
                <DropdownItem icon={faCircle} text="Referral" />
              </ul>
            </div>
          </li>
          <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
              onClick={() => toggleDropdown("dropdown4")}
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faStore} />
              </div>

              <span
                className={`${
                  isOpen
                    ? "hidden"
                    : "text-sm text-[#67748e] font-normal leading-6"
                }`}
              >
                Authentication
              </span>
              <svg
                className={`w-2 h-2 ml-auto transition-all ${
                  openDropdown === "dropdown4" ? "rotate-180" : ""
                } ${isOpen ? "hidden" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`h-auto overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === "dropdown4" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col flex-wrap pl-4 mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                <DropdownItem icon={faCircle} text="SignIn" />
                <DropdownItem icon={faCircle} text="SignUp" />
                <DropdownItem icon={faCircle} text="Lock" />
                <DropdownItem icon={faCircle} text="Error" />
              </ul>
            </div>
          </li>
          <hr
            className={`border-t my-4 h-px bg-transparent bg-gradient-to-r from-transparent via-black/25 to-transparent  ${
              isOpen ? "w-20" : "w-60"
            }`}
          />
          <li className="mt-0 w-full">
            <h6 className="pl-6 mb-2 font-bold leading-tight opacity-60 uppercase text-xs">
              Docs
            </h6>
          </li>
          <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
              onClick={() => toggleDropdown("dropdown5")}
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faRocket} />
              </div>

              <span
                className={`${
                  isOpen
                    ? "hidden"
                    : "text-sm text-[#67748e] font-normal leading-6"
                }`}
              >
                Basic
              </span>
              <svg
                className={`w-2 h-2 ml-auto transition-all ${
                  openDropdown === "dropdown5" ? "rotate-180" : ""
                } ${isOpen ? "hidden" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`h-auto overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === "dropdown5" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col flex-wrap pl-4 mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                <DropdownItem icon={faCircle} text="Getting Started" />
                <DropdownItem icon={faCircle} text="Foundation" />
              </ul>
            </div>
          </li>
          <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
              onClick={() => toggleDropdown("dropdown6")}
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faCreditCard} />
              </div>

              <span
                className={`${
                  isOpen
                    ? "hidden"
                    : "text-sm text-[#67748e] font-normal leading-6"
                }`}
              >
                Components
              </span>
              <svg
                className={`w-2 h-2 ml-auto transition-all ${
                  openDropdown === "dropdown6" ? "rotate-180" : ""
                } ${isOpen ? "hidden" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`h-auto overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === "dropdown6" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col flex-wrap pl-4 mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                <DropdownItem icon={faCircle} text="Alert" />
                <DropdownItem icon={faCircle} text="Badge" />
                <DropdownItem icon={faCircle} text="Buttons" />
                <DropdownItem icon={faCircle} text="Card" />
                <DropdownItem icon={faCircle} text="Forms" />
                <DropdownItem icon={faCircle} text="Navs" />
                <DropdownItem icon={faCircle} text="NavBar" />
                <DropdownItem icon={faCircle} text="Model" />
              </ul>
            </div>
          </li>
          <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faCreditCard} />
              </div>

              <span
                className={`${
                  isOpen
                    ? "hidden"
                    : "text-sm text-[#67748e] font-normal leading-6"
                }`}
              >
                Changelog
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default SideBar;
