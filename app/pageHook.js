"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Snowfall from "react-snowfall";

function PageHook() {
  const [isOpen, setIsOpen] = useState(false);
  const [setIsOpenModel] = useState(false);

  const handleOpenModel = () => {
    setIsOpenModel(true);
    setTimeout(() => {
      setIsOpenModel(false);
    }, 4000);
  }

  return (
    <div className="h-full w-full p-3 flex items-center justify-center relative z-50">
      <Snowfall
        snowflakeCount={200}
        color="grey"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -9,
        }}
        speed={"140"}
        radius={"12"}
      />
      <section className=" mt-4  ">
        <div className="space-y-3 ">
          <div className="space-y-8 text-center">
            <div className="flex items-center justify-center mt-40">
              <div className="p-[1px] bg-transparent  relative">
                <div className="p-0 ">
                  <span className="absolute inset-0 px-3 rounded-3xl overflow-hidden">
                    <span
                      className="w-[500%] aspect-square absolute bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-20"
                      style={{
                        translateX: "-50%",
                        translateY: "-10%",
                        zIndex: -1,
                      }}
                    />
                  </span>
                  <span className="bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-700">
                    The Future of Expense Tracking!
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold  sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800 capitalize md:max-w-2xl lg:max-w-3xl mx-auto ">
              Join The Waitlist For Our Expense Tracker!
            </h1>
            <p className="max-w-[600px] leading-7 text-center text-[16px] bg-clip-text text-transparent dark:bg-gradient-to-br bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-700 mx-auto ">
            Take control of your finances with our cutting-edge expense tracker. Our intuitive interface makes it easy to track spending and achieve your financial goals. 
            Whether you're saving for a big purchase or managing daily expenses, our tool is designed to help you succeed.
            </p>
          </div>
          <div className="p-3 rounded-lg border dark:border-white/10 border-neutral-400 dark:border-opacity-10 relative top-14 sm:top-14 lg:top-24 max-w-xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
            <p className=" text-zinc-500 dark:text-zinc-100">
              Get ready to redefine your email experience.
            </p>
            <Link
              onClick={() => setIsOpen(true)}
              className=" bg-zinc-700/30 lg:py-1 py-2 px-2 w-full lg:w-fit mt-3 md:mt-3 lg:mt-0 text-center rounded-md  text-white"
              href="/"
            >
              <span>Terms & Conditions</span>
            </Link>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageHook;

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="bg-black/80  p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll "
        >
          <div
            className="bg-white/20 backdrop-blur-lg  border border-white/10 border-opacity-10 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative "
          >
            <div className="relative z-10">
              <p className="lg:text-justify  leading-6 mb-6">
                I'm doing a little Giveaway on the Launch of this Template
                Website by December. So If you sign up today, which will only
                take a few seconds and 1 click, you'll automatically be
                participated in our giveaway and 10 lucky people will get free
                access to one of Our Premium Templates, free of cost!
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className=" flex gap-x-3 items-center justify-center lg:justify-start bg-transparent bg-white text-black hover:bg-neutral-300  transition-colors duration-200 dark:text-black font-semibold lg:w-fit w-full py-2 lg:py-1.5 rounded px-8"
                >
                  Got that
                  <Image
                    width={5}
                    height={5}
                    className="w-5"
                    src="/img/alarm.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}