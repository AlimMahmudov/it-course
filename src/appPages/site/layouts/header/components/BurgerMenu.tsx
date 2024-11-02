import React, { FC } from "react";
import scss from "./BurgerMenu.module.scss";

interface LinksType {
  name: string;
  link: string;
}

interface BurgerMenuProps {
  links: LinksType[];
  isOpen: boolean;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen }) => {
  return (
    <div
      className={
        isOpen ? ` ${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
      }
    >
      <div className={scss.content}>
        <div className={scss.nav}>
          <ul>
            {links.map((item, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
