"use client";
import logo from "@/shared/assets/logo.svg";
import { useLanguageStore } from "@/shared/stores/Language";
import Image from "next/image";
import scss from "./Header.module.scss";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Header = () => {
  const { translate } = useLanguageStore();
  const router = useRouter();
  const state = useSelector((s: any) => s?.api?.queries["getMe(undefined)"]);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsActive(window.innerWidth < 1000);
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => {
      window.addEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header id={scss.Header} data-header="true">
      <div className="container">
        <div className={scss.header}>
          <div className={scss.teg}>
            <Link href="/" data-home>
              <Image src={logo} alt="Logo" style={{ marginRight: "10px" }} />
            </Link>
            <div className={`${scss.teg} ${scss.none}`}>
              <Link href="/school">
                {translate("Мектеп жөнүндө", "О школе")}
              </Link>
              <Link href="/our_courses">
                {translate("Биздин курстар", "Наши курсы")}
              </Link>
              <Link href="/us">{translate("Биз жөнүндө", "О нас")}</Link>
            </div>
          </div>

          <div className={scss.header_button}>
            {!state?.data ? (
              <>
                <button
                  onClick={() => router.push("/auth/signin")}
                  className={scss.btn}
                >
                  {translate("Кирүү", "Войти")}
                </button>
                <button
                  className={scss.subscribe}
                  onClick={() => router.push("/subscription")}
                >
                  {translate("Катталуу", "Подписаться")}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => router.push("/auth/signin")}
                  className={scss.notify}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.7185 17.8451C20.4144 16.249 19.4938 15.4365 19.4938 11.0363C19.4938 7.00684 17.4361 5.57125 15.7426 4.87402C15.5176 4.7816 15.3058 4.56934 15.2373 4.33828C14.9402 3.32723 14.1074 2.43652 13.0004 2.43652C11.8933 2.43652 11.06 3.32773 10.766 4.3393C10.6974 4.57289 10.4857 4.7816 10.2607 4.87402C8.56514 5.57227 6.50951 7.00278 6.50951 11.0363C6.50698 15.4365 5.58631 16.249 4.28225 17.8451C3.74194 18.5063 4.21522 19.499 5.16026 19.499H20.8456C21.7855 19.499 22.2558 18.5032 21.7185 17.8451Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.2509 19.499V20.3116C16.2509 21.1737 15.9085 22.0005 15.2989 22.6101C14.6893 23.2196 13.8625 23.5621 13.0005 23.5621C12.1384 23.5621 11.3116 23.2196 10.702 22.6101C10.0925 22.0005 9.75 21.1737 9.75 20.3116V19.499"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className={scss.profile}
                  onClick={() => router.push("/profile/personal")}
                >
                  Профиль
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
