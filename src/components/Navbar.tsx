import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import Logo from "./Logo";
import Photogal from "./Photogal";

const navItems = [
  { text: "Home", url: "/" },
  { text: "Popular Places", url: "/about" },
  { text: "Contact", url: "/team" },
  { text: "Register", url: "/resource" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // NAV MENU ICON CLASSES
  const menuIconClasses = (forOpen: boolean) =>
    clsx(
      "absolute top-8 right-10 text-6xl text-primary-600 cursor-pointer sm:hidden transition-all duration-300 ease-in-out ",
      forOpen
        ? isOpen
          ? "w-12 h-12 "
          : "w-0 h-0 "
        : !isOpen
        ? "w-12 h-12 "
        : "w-0 h-0 "
    );

  // NAV ITEM CLASSES
  const navItemsClasses = clsx(
    isOpen ? "h-96 " : "h-0 ",
    "absolute top-[100%] flex flex-col items-start justify-evenly gap-y-12 ",
    "sm:hidden transition-[height] duration-300 ease-in-out overflow-hidden",
    "w-full shadow-lg shadow-gray-200/80 rounded-b padding-1% "
  );

  return (
    <div className="main">
      <nav className="w-full m-10 fixed top-0 left-1/2 transform -translate-x-1/2 flex flex-col transition-all duration-300 ease-in-out h-navbar z-30 bg-black opacity-10 rounded-xl mr-4"></nav>
      <div className="overlay"></div>
      <video src="back.mp4" autoPlay loop muted />
      <div className="content">
        {/* NAVBAR */}
        <div className="flex-1 relative flex flex-col items-stretch justify-start gap-y-6 rounded shadow-lg shadow-black/5">
          {/* LOGO AND MENU BTN */}
          <div className="max-h-[8rem] py-4 self-center">
            {/* MENU BTN - ON MOBILE SCREENS */}
            <IoIosRemoveCircleOutline
              className={menuIconClasses(true)}
              onClick={() => setIsOpen(false)}
            />
            <CgMenuRight
              className={menuIconClasses(false)}
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* NAV ITEMS - ON TABLET AND LARGER SCREENS */}
          <div className="container mx-auto px-4 hidden sm:flex flex-1 items-center justify-between gap-x-4 pt-4 pb-6">
            <Logo />
            {navItems.map((item, i) => (
              <NavItem
                key={item.text + i}
                text={item.text}
                url={item.url}
                selected={router.pathname === item.url}
              />
            ))}
          </div>

          {/* NAV ITEMS - ON MOBILE SCREENS */}
          <div className={navItemsClasses}>
            {isOpen &&
              navItems.map((item, i) => (
                <NavItem
                  key={item.text + i}
                  text={item.text}
                  url={item.url}
                  selected={router.pathname === item.url}
                  className="text-2xl"
                />
              ))}
          </div>
          <Photogal />
        </div>
      </div>
    </div>
  );
};
export default Navbar;

const NavItem: FC<{
  text: string;
  url: string;
  className?: string;
  selected: boolean;
}> = ({ text, url, className, selected }) => {
  const linkClassName = clsx(
    "text-xl px-8 sm:px-0   text-left transition-all duration-300 ease-in-out " +
      "hover:text-primary-600 hover:scale-110  " +
      (selected &&
        " scale-100 before:absolute before:bottom-[-2px] before:left-0 before:h-1 before:w-full" +
          "before:bg-primary-600 before:rounded-xl "),
    className
  );

  return (
    <Link href={url} passHref className={linkClassName}>
      {text}
    </Link>
  );
};
