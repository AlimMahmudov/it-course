"use client";
import React from "react";
import scss from "./Header.module.scss";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/Language";

const Header = () => {
  const router = useRouter();
  const { translate } = useLanguageStore();

  return (
		<header id={scss.Header}>
			<div className='container'>
				<div className={scss.header}>
					<div className={scss.teg}>
						<Image onClick={() => router.push('/')} src={logo} alt='Logo' />
						<Link href='/school'>{translate('Мектеп жөнүндө', 'О школе')}</Link>
						<Link href=''>{translate('Биздин курстар', 'Наши курсы')}</Link>
						<Link href='/us'>{translate('Биз жөнүндө', 'О нас')}</Link>
					</div>
					<div className={scss.header_button}>
						<button
							onClick={() => router.push('/auth/signin')}
							className={scss.btn}
						>
							{translate('Кирүү', 'Войти')}
						</button>
						<button>{translate('Катталуу', 'Подписаться')}</button>
					</div>
				</div>
			</div>
		</header>
	)
};

export default Header;
