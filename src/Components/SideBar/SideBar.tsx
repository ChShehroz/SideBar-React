import React from "react";
import logo from "../../Assest/Images/logo-ct-dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBasketShopping,
  faCity,
  faRocket,
  faScrewdriverWrench,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import "../../Assest/Style/Index.css";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

const SideBar = () => {
  return (
    <aside className="fixed inset-y-0 overflow-y-auto w-[274px] psOver bg-[#e5e9ed] mt-4 mr-0 mb-4 ml-4 bg-transparent rounded-2xl psActiveY">
      <div className="h-20 px-8 py-6">
        <a className="flex items-center">
          <img className="max-h-8" src={logo} alt="main-logo" />
          <span className="text-[#344767] mb-1 leading-6 text-sm font-semibold ml-2">
            Soft UI Dashboard PRO
          </span>
        </a>
      </div>
      <hr className="border-t w-60 mt-0 mb-4 h-px bg-transparent bg-gradient-to-r from-transparent  via-black/40 to-transparent " />
      <div className="items-center block w-full h-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0 list-none">
          <li className="mt-0.5 w-full">
            <a
              className="flex items-center whitespace-nowrap bg-white rounded-lg px-4 py-2.5 mx-4 my-0"
              id="dashboard"
            >
              <div className="w-8 h-8 flex bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg justify-center items-center mr-2 boxShadow">
                <FontAwesomeIcon
                  className="text-white h-3 w-3"
                  icon={faStore}
                />
              </div>

              <span className="ml-1 text-sm text-[#344767] font-semibold leading-6">
                Dashboards
              </span>
              <FontAwesomeIcon
                className="ml-16 h-2.5 w-2.5  text-[#4b5568]"
                icon={faAngleDown}
              />
            </a>
          </li>
          <li className="mt-4 w-full">
            <h6 className="pl-6 ml-2 mb-2 font-bold leading-tight opacity-60 uppercase text-xs">
              Pages
            </h6>
          </li>
          <li className="mt-0.5 w-56">
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-4 my-0"
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faCity} />
              </div>

              <span className="text-sm text-[#67748e] font-normal leading-6">
                Pages
              </span>
              <svg
                className="w-2 h-2 ml-auto"
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
          </li>
          <li className="mt-0.5 w-56">
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-4 my-0"
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon
                  className="h-3 w-3"
                  icon={faScrewdriverWrench}
                />
              </div>

              <span className="text-sm text-[#67748e] font-normal leading-6">
                Applications
              </span>
              <svg
                className="w-2 h-2 ml-auto"
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
          </li>
          <li className="mt-0.5 w-56">
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-4 my-0"
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faBasketShopping} />
              </div>

              <span className="text-sm text-[#67748e] font-normal leading-6">
                Ecommerce
              </span>
              <svg
                className="w-2 h-2 ml-auto"
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
          </li>
          <li className="mt-0.5 w-56">
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-4 my-0"
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faStore} />
              </div>

              <span className="text-sm text-[#67748e] font-normal leading-6">
                Authentication
              </span>
              <svg
                className="w-2 h-2 ml-auto"
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
          </li>
          <hr className="border-t w-60 my-4 h-px bg-transparent bg-gradient-to-r from-transparent via-black/25 to-transparent " />
          <li className="mt-0 w-full">
            <h6 className="pl-6 ml-2 mb-2 font-bold leading-tight opacity-60 uppercase text-xs">
              Docs
            </h6>
          </li>
          <li className="mt-0.5 w-56">
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-4 my-0"
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faRocket} />
              </div>

              <span className="text-sm text-[#67748e] font-normal leading-6">
                Basic
              </span>
              <svg
                className="w-2 h-2 ml-auto"
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
          </li>
          <li className="mt-0.5 w-56">
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-4 my-0"
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faCreditCard} />
              </div>

              <span className="text-sm text-[#67748e] font-normal leading-6">
                Components
              </span>
              <svg
                className="w-2 h-2 ml-auto"
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
          </li>
          <li className="mt-0.5 w-56">
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-4 my-0"
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faCreditCard} />
              </div>

              <span className="text-sm text-[#67748e] font-normal leading-6">
                Changelog
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className="psRailY absolute top-0 right-0 h-[572px] ">
        <div className="psThumbY absolute top-0 h-[284px]" tabIndex={0}></div>
      </div>
    </aside>
  );
};
export default SideBar;
