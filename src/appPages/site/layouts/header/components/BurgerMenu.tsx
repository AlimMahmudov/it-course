import React, { FC } from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";

interface BurgerMenuType {
  id: number;
  name: string;
  href: string;
}

interface NavbarType {
  navbar: BurgerMenuType[];
  isOpen: boolean;
}

const BurgerMenu: FC<NavbarType> = ({ navbar, isOpen }) => {
  return (
    <div
      className={
        isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
      }
    >
      {navbar.map((item) => (
        <Link href={item.href} key={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default BurgerMenu;
