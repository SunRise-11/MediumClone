import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/banner.png';

const Hero: React.FC = () => {
  return (
    <div className="wrapper min-w-lg h-[28.413rem] w-full bg-[#FCC017] border-y border-black">
      <div className="content w-[80%] h-full mx-auto max-w-screen-xl flex justify-between items-center flex-1">
        <div className="left md:w-[46%] w-full py-[93px] flex flex-col gap-3">
          <h1 className="w-full md:text-[6.625rem] text-[4.4rem] md:leading-[6rem] leading-[4rem] font-mediumSerifItalic">
            Stay curious.{' '}
          </h1>{' '}
          <p className="md:text-2xl text-[1.53rem] leading-6 font-Helvetica my-4 text-trend font-normal">
            Discover stories, thinking, and expertise from writers on any topic.{' '}
          </p>{' '}
          <button className="bg-black w-[13rem] px-[1rem] pt-[7px] pb-[9px] rounded-full text-white font-Segoe text-base">
            Start reading{' '}
          </button>{' '}
        </div>{' '}
        <div className="right md:w-[45%] h-full hidden md:inline-block">
          <Image
            className=" md:object-cover lg:object-contain  w-full h-full"
            src={Logo}
            width={500}
            height={400}
            alt="banner logo"
          />
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default Hero;
