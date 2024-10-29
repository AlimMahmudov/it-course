import React from "react";
import logo from "@/assets/logo.svg";
import scss from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { LiaYoutube } from "react-icons/lia";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer id={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.logo}>
            <Image src={logo} alt="" />
            <div className={scss.logo_buttons}>
              <button>KG</button>
              <button>RU</button>
            </div>
          </div>
          <div className={scss.teg}>
            <h1>Быстрые ссылки</h1>
            <Link href="">о школе</Link>
            <Link href="">Наши курсы</Link>
            <Link href="">О нас</Link>
          </div>
          <div className={scss.icon}>
            <h1>Социальные сети</h1>
            <div className={scss.icons}>
              <h2>
                <FaInstagram />
              </h2>
              <h2>
                <LiaYoutube />
              </h2>
              <h2>
                <CiFacebook />
              </h2>
              <h2>
                <FiTwitter />
              </h2>
              <h2>
                <PiTiktokLogo />
              </h2>
              <h2>
                <PiTelegramLogo />
              </h2>
            </div>
          </div>
          <div className={scss.contact}>
            <h1>Контакты</h1>
            <h3>
              <BsTelephone /> @motionwebteam@gmail.com
            </h3>
            <h3>
              <TfiEmail /> +996 559 - 69 - 26 - 26
            </h3>
          </div>
          <div className={scss.adress}>
            <h1>Адреса</h1>
            <p>Турусбекова 109 / 3</p>
            <p>Идентификационный код: 1234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
