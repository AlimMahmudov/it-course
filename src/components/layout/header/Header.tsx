"use client";
import React from "react";
import scss from "./Header.module.scss";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.teg}>
            <Image onClick={() => router.push("/")} src={logo} alt="Logo" />
            <Link href="/school">о школе</Link>
            <Link href="">Наши курсы</Link>
            <Link href="/us">О нас</Link>
          </div>
          <div className={scss.header_button}>
            <button
              onClick={() => router.push("/auth/signin")}
              className={scss.btn}
            >
              Войти
            </button>
            <button>Подписаться</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
