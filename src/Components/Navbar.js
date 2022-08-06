import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../Assets/logo.png";
import CustomLink from "../Shared/CustomLink";

import style from "./Navbar.module.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);
  const handleClose = () => setMenu(!menu);
  return (
    <div className="reveal active">
      <nav className="p-3 bg-gradient-to-r from-[#0f172a]/90 to-[#152d46]/70 fixed top-0 left-0 right-0 shadow-sm shadow-slate-700 backdrop-blur-sm">
        <div className="flex flex-wrap justify-between xl:w-3/4 lg:w-3/4 md:w-3/4 w-11/12 mx-auto">
          {/* Logo Section */}
          <div className="flex flex-wrap align-middle gap-x-3">
            <Link to={"/"} className="flex w-36 gap-x-5">
              <img width="25%" src={logo} alt="" />
              <h4 className="text-xl">Edu Book</h4>
            </Link>
          </div>

          {/*  */}

          <div>
            {/* Menubar for Desktop */}

            <ul className="hidden xl:flex lg:flex md:flex gap-x-5">
              <li className={style.hoverColor}>
                <CustomLink className="ease-in duration-500" to="/home">
                  Home
                </CustomLink>
              </li>
              <li className={style.hoverColor}>
                <CustomLink className="ease-in duration-500" to="/course">
                  Course
                </CustomLink>
              </li>
              <li className={style.hoverColor}>
                <CustomLink className="ease-in duration-500" to="/live">
                  Live
                </CustomLink>
              </li>
              <li className={style.hoverColor}>
                <CustomLink className="ease-in duration-500" to="/service">
                  Service
                </CustomLink>
              </li>
              <li className={style.hoverColor}>
                <CustomLink className="ease-in duration-500" to="/contact">
                  Contact
                </CustomLink>
              </li>
              <li className={style.hoverColor}>
                <CustomLink className="ease-in duration-500" to="/login">
                  Login
                </CustomLink>
              </li>
            </ul>

            {/* Toggle */}
            <div
              className="flex gap-x-5 xl:hidden lg:hidden md:hidden"
              onClick={handleClick}
            >
              {!menu ? (
                <span className="cursor-pointer ease-in duration-500">
                  <Icon icon="eva:menu-2-outline" width="36" height="36" />
                </span>
              ) : (
                <span className="cursor-pointer ease-in duration-500">
                  <Icon icon="codicon:close-all" width="36" height="36" />
                </span>
              )}
            </div>

            <div>
              {/* Menubar for mobile*/}

              <ul className={!menu ? "hidden" : "absolute mt-10"}>
                <li className={style.hoverColor}>
                  <CustomLink
                    className="ease-in duration-500"
                    onClick={handleClose}
                    to="/home"
                  >
                    Home
                  </CustomLink>
                </li>
                <li className={style.hoverColor}>
                  <CustomLink
                    className="ease-in duration-500"
                    onClick={handleClose}
                    to="/course"
                  >
                    Course
                  </CustomLink>
                </li>
                <li className={style.hoverColor}>
                  <CustomLink
                    className="ease-in duration-500"
                    onClick={handleClose}
                    to="/live"
                  >
                    Live
                  </CustomLink>
                </li>
                <li className={style.hoverColor}>
                  <CustomLink
                    className="ease-in duration-500"
                    onClick={handleClose}
                    to="/service"
                  >
                    Service
                  </CustomLink>
                </li>
                <li className={style.hoverColor}>
                  <CustomLink
                    className="ease-in duration-500"
                    onClick={handleClose}
                    to="/contact"
                  >
                    Contact
                  </CustomLink>
                </li>
                <li className={style.hoverColor}>
                  <CustomLink
                    className="ease-in duration-500"
                    onClick={handleClose}
                    to="/login"
                  >
                    Login
                  </CustomLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
