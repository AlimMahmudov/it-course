import logo from "@/shared/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import scss from "./Footer.module.scss";

import { useLanguageStore } from "@/shared/stores/Language";
import { BsTelephone } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LiaYoutube } from "react-icons/lia";
import { PiTelegramLogo, PiTiktokLogo } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  const { translate, setLanguage } = useLanguageStore();

  const handleLanguage = (lang: "ru" | "ky") => {
    setLanguage(lang);
  };

  return (
    <footer id={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.logo}>
            <Image src={logo} alt="" />
            <div className={scss.logo_buttons}>
              <button onClick={() => handleLanguage("ky")}>KG</button>
              <button onClick={() => handleLanguage("ru")}>RU</button>
            </div>
          </div>
          <div className={scss.teg}>
            <h1>{translate("Тез шилтемелер", "Быстрые ссылки")}</h1>
            <Link href="">{translate("Мектеп жөнүндө", "О школе")}</Link>
            <Link href="">{translate("Биздин курстар", "Наши курсы")}</Link>
            <Link href="">{translate("Биз жөнүндө", "О нас")}</Link>
          </div>
          <div className={scss.icon}>
            <h1>{translate("Социалдык тармактар", "Социальные сети")}</h1>
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
            <h1>{translate("Байланыштар", "Контакты")}</h1>
            <h3>
              <BsTelephone /> @motionwebteam@gmail.com
            </h3>
            <h3>
              <TfiEmail /> +996 559 - 69 - 26 - 26
            </h3>
          </div>
          <div className={scss.adress}>
            <h1>{translate("Даректер", "Адреса")}</h1>
            <p>{translate("Турусбекова 109 / 3", "Турусбекова 109 / 3")}</p>
            <p>
              {translate(
                "Идентификациялык код: 1234567890",
                "Идентификационный код: 1234567890"
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
