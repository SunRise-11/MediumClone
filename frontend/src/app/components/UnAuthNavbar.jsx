'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '../../../public/images/medium.png';
import Link from 'next/link';
import { links } from '../store/index';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 22) setNav(true);
    else setNav(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  let background = !nav ? 'bg-[#FCC017]' : 'bg-white';

  return (
    <div
      className={`wrapper min-w-lg w-full transition-all duration-500 ${background} sticky top-0 left-0`}
    >
      <div className="content mx-auto w-[80%] flex justify-between items-center h-[75px] py-[25px]">
        <div className="logo">
          <Link href={'/'}>
            <Image
              className="cursor-pointer object-contain"
              src={Logo}
              height={40}
              width={200}
              alt="image logo"
            />
          </Link>
        </div>
        <ul className="links flex items-center md:space-x-3">
          {links.map((link) => (
            <li
              className={
                'font-Helvetica md:flex hidden text-base cursor-pointer'
              }
              key={link.id}
            >
              {link.name}
            </li>
          ))}
          <Link href={'/login'}>
            <li className="font-Helvetica sm:flex md:px-1 px-4 hidden text-base cursor-pointer">
              Sign In
            </li>
          </Link>
          <li
            className={
              !nav
                ? 'font-Helvetica transition-colors duration-100 text-sm h-[37px] cursor-pointer  bg-black text-white px-[1rem] pt-[7px] pb-[9px] inline-block  text-center rounded-full'
                : 'font-Helvetica  transition-colors duration-100 text-sm h-[37px] cursor-pointer  bg-[#1A8917] text-white px-[1rem] pt-[7px] pb-[9px] inline-block  text-center rounded-full'
            }
          >
            Get started
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
