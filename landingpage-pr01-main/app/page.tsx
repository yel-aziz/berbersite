"use client";
import Image from "next/image";
import Carousel from "./component/Carousel";
import bag from "@/app/bag.png";
import percent from "@/app/percent.png";
import gift from "@/app/gift-box.png";
import people from "@/app/people.jpg";
import Footer from "./component/Footer";
import mockup from "@/app/phone1.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-w-72 max-w-[2000px]">
      <div className="w-full h-full">
        <Carousel />
      </div>
      <div className="lg:hidden flex justify-center w-full">
        <div className="  flex justify-center flex-col items-center mt-5 w-[95%]">
          <div className="font-bold  text-[#292929] text-5xl lg:text-6xl">
            Get more time to pay.
          </div>
          <div className=" md:text-xs lg:text-xl mt-5 text-[#292929]">
            With BerBerPay, you can split your purchases interest-free
            payments, online or in-store.
          </div>
        </div>
      </div>
      <div className="mt-10 w-[95%] lg:w-[80%] ">
        <div className="text-4xl font-bold w-72 text-[#292929]">
          Shopping s new normal.
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <div className="flex justify-between flex-col mt-10 lg:w-[30%]  gap-5 md:w-full">
            <div className="w-16 h-16">
              <Image
                src={bag}
                alt="/"
                width={50}
                height={50}
                quality={100}
                priority={true}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-bold text-3xl">interest-free payments</div>
            Shop now and pay later by choosing BerBerPay at checkout to split your
            purchases into interest-free payments.
          </div>
          <div className="flex justify-between flex-col mt-10 lg:w-[30%] gap-5 md:w-full ">
            <Image
              src={percent}
              alt="/"
              width={50}
              height={50}
              quality={100}
              priority={true}
            />
            <div className="font-bold text-3xl">No interest or fees.</div>
            Built on trust. Not interest. You’ll never pay extra when you pay on
            time. No interest. No fees. No catch
          </div>
          <div className="flex justify-between flex-col mt-10 lg:w-[30%] gap-5 md:w-full">
            <Image
              src={gift}
              alt="/"
              width={50}
              height={50}
              quality={100}
              priority={true}
            />
            <div className="font-bold text-3xl">The best deals</div>
            You’ll never miss another deal or coupon with daily updates on your
            favourite brands, including BerBerPay exclusives.
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between w-[95%] lg:w-[80%]  mt-36">
        <div className=" w-full md:w-[50%]">
          <div className="font-bold text-6xl">
            Shop Now, Pay Later, Stress Never!
          </div>
          <div className="mt-10 text-2xl ">
            With BerberPay Buy Now, Pay Later solution, you can enjoy the
            freedom to get what you want today and spread the cost over time
            with zero hassle Shop with confidence, knowing you can pay at your
            own pace—no stress just smart choices!
          </div>
        </div>
        <div className="w-full md:w-[48%] md:h-[600px]  ">
          <Image
            src={people}
            className="w-full h-full object-cover rounded-3xl"
            alt="/"
            width={5000}
            height={5000}
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between  w-[95%] lg:w-[80%]">
        <div className=" md:w-[48%] h-[400px] md:h-[600px]  rounded-xl ">
          <Image
            src={mockup}
            width={5000}
            height={5000}
            alt="/"
            quality={100}
            className="w-full h-full rounded-xl object-contain"
          />
        </div>
        <div className="mb-5 mt-5 md:w-[50%]">
          <div className="font-bold text-6xl">
            Unlock a Smarter Way to Shop with BerberPay
          </div>
          <div className="mt-10 text-2xl">
            Join thousands of users in Morocco who trust BerberPay for a better
            shopping experience!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
