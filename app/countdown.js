'use client';

import { useState, useEffect } from "react";
import { ClerkProvider, SignInButton } from '@clerk/nextjs';
import Image from "next/image";
import Link from "next/link";
import Snowfall from "react-snowfall";
import { motion } from "framer-motion";

function Countdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const countDownDate = new Date("Sep 8, 2024 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'),
      })
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <ClerkProvider>
      <div className="p-3 flex items-center justify-center relative z-50">
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
        <section className="mt-20">
          <div className="space-y-8 text-center">
            <div className="flex items-center justify-center">
              <div className="bg-transparent relative">
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
                <span className="bg-clip-text text-transparent md:text-2xl dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-500 dark:to-neutral-500">
                  The Future of Expense Tracking!
                </span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-5xl font-bold xl:text-6xl/none bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-300 dark:to-neutral-600 capitalize sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto break-words whitespace-normal">
              Join The Waitlist For Our Expense Tracker!
            </h1>

            <div className="pt-6 pb-6 text-xl sm:text-2xl text-bold align-center flex justify-center hover: cursor-pointer">
              <SignInButton>
                <motion.button
                  initial={{ "--x": "100%", scale: 1 }}
                  animate={{ "--x": "-100%" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                    type: "spring",
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                      type: "spring",
                      stiffness: 10,
                      damping: 5,
                      mass: 0.1,
                    },
                  }}
                  className="px-6 py-2 rounded-md relative radial-gradient"
                >
                  <span className="flex items-center light: text-neutral-800 dark:text-neutral-100 tracking-wide h-full w-full relative linear-mask">
                    Waitlist
                    <Image
                      width={20}
                      height={20}
                      className="w-5 ml-2"
                      src="/img/time.png"
                      alt="alarm"
                    />
                  </span>
                  <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
              </SignInButton>
            </div>
          </div>
          <div className="text-center md:mt-8">
            <div className="flex justify-center basis-24 space-x-4 sm:space-x-10">
              <div className="text-center">
                <span className="block text-6xl sm:text-8xl font-bold text-neutral-800 dark:text-white">{timeLeft.days}</span>
                <span className="flex align-left text-lg text-neutral-500 dark:text-neutral-300">Days</span>
              </div>
              <div className="text-center">
                <span className="block text-6xl sm:text-8xl font-bold text-neutral-750 dark:text-white/90">{timeLeft.hours}</span>
                <span className="flex align-left text-lg text-neutral-500 dark:text-neutral-300">Hours</span>
              </div>
              <div className="text-center">
                <span className="block text-6xl sm:text-8xl font-bold text-neutral-700 dark:text-white/80">{timeLeft.minutes}</span>
                <span className="flex align-left text-lg text-neutral-500 dark:text-neutral-300">Minutes</span>
              </div>
              <div className="text-center">
                <span className="block text-6xl sm:text-8xl font-bold text-neutral-600 dark:text-white/75">{timeLeft.seconds}</span>
                <span className="flex align-left text-lg text-neutral-500 dark:text-neutral-300">Seconds</span>
              </div>
            </div>
          </div>
          <div className="md:mt-10 sm-mt-10 p-3 rounded-lg border dark:border-white/10 border-neutral-300 dark:border-opacity-10 relative top-14 sm:top-14 lg:top-24 max-w-xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
            <p className="text-zinc-500 dark:text-zinc-100">
              Get ready to track your expenses with ease!
            </p>
            <Link
              onClick={() => setIsOpen(true)}
              className="bg-zinc-700/30 lg:py-1 py-2 px-2 w-full lg:w-fit mt-3 md:mt-3 lg:mt-0 text-center rounded-md text-white"
              href="/"
            >
              <span>Our Appreciation</span>
            </Link>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </section>
      </div>
    </ClerkProvider>
  )
}

export default Countdown;

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="bg-black/80 p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll">
          <div className="bg-white/20 backdrop-blur-lg border border-white/10 border-opacity-10 text-white p-6 rounded-3xl w-full max-w-lg shadow-xl cursor-default relative">
            <div className="relative z-10">
              <p className="lg:text-justify leading-6 mb-6">
              We are thrilled to invite you to our website! Our team has been working tirelessly to create a platform that not only meets but exceeds your expectations. 
              From innovative features to a user-friendly interface, every aspect of our website has been designed with you in mind. Thank you for being a part of our community.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex gap-x-3 items-center justify-center lg:justify-start bg-transparent bg-white text-black hover:bg-neutral-300 transition-colors duration-200 dark:text-black font-semibold lg:w-fit w-full py-2 lg:py-1.5 rounded px-8"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}