"use client";

import Image from "next/image"
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {

  }
  
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Stay on top of your budget with our intuitive — Money Tracker app
        </h1>

        <p className="hero__subtitle">
          Effortlessly monitor your expenses and manage your finances
        </p>

        <CustomButton
          title="Get Started"
          containerStyles="bg-emerald-600 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/money.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay">
        </div>
      </div>
    </div>
  );
}

export default Hero