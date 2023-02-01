import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="grid py-[100px] w-full border-t border-light text-light text-2xl 2xl:px-[300px]">
      <div className="flex items-start w-full max-md:grid max-md:gap-10 max-xs:text-base">
        <div className="pl-10 grid w-1/2 gap-10">
          <div className="grid gap-3">
            Socials
            <div className="flex gap-4 items-center">
              <Link
                href="#"
                className="relative w-6 h-6 transition-all hover:opacity-50 hover:scale-150"
              >
                <Image src="/social/facebook.svg" alt="facebook icon" fill />
              </Link>
              <Link
                href="#"
                className="relative w-6 h-6 transition-all hover:opacity-50 hover:scale-150"
              >
                <Image src="/social/instagram.svg" alt="instagram icon" fill />
              </Link>
              <Link
                href="#"
                className="relative w-6 h-6 transition-all hover:opacity-50 hover:scale-150"
              >
                <Image src="/social/twitter.svg" alt="twitter icon" fill />
              </Link>
              <Link
                href="#"
                className="relative w-6 h-6 transition-all hover:opacity-50 hover:scale-150"
              >
                <Image src="/social/linkedin.svg" alt="linkedin icon" fill />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid pl-10 pr-5 w-1/2 gap-10">
          <div className="grid ">
            Email
            <Link
              href="mailto:evajane@gmail.com"
              className="relative text-black transition-all after:content after:absolute after:bottom-0 after:left-0 after:duration-[0.5s] after:h-[2px] after:w-[318px] after:bg-black underline-offset-8 hover:after:opacity-100 after:opacity-0 max-xs:after:w-[213px]"
            >
              evajane.m.chi@sunlife.com.ph
            </Link>
          </div>
          <div className="grid">
            Contact
            <Link
              href="#"
              className="relative text-black transition-all after:content after:absolute after:bottom-0 after:left-0 after:duration-[0.5s] after:h-[2px] after:w-[140px] after:bg-black underline-offset-8 hover:after:opacity-100 after:opacity-0 max-xs:after:w-[93px]"
            >
              09367861241
            </Link>
          </div>
          <div className="grid">
            Location
            <span className="text-black">
              Macutay Residence, Lower Bagong Silang, Balangasan District,
              Pagadian City
            </span>
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/7%C2%B049'21.2%22N+123%C2%B025'08.4%22E/@7.8225445,123.4189885,17z/data=!3m1!4b1!4m4!3m3!8m2!3d7.8225445!4d123.4189885"
              className="relative text-black transition-all after:content after:absolute after:bottom-0 after:left-0 after:duration-[0.5s] after:h-[2px] after:w-[106px] after:bg-black underline-offset-8 hover:after:opacity-100 after:opacity-0 max-xs:after:w-[70px]"
            >
              Directions
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-40 flex justify-between">
        <span>©2023 Eva Jane Chi - All Rights Reserved</span>
        <span className="w-[60%]">
          Listed services in the page are in connection with{" "}
          <span className="font-semibold">Sun life Canada Phils. Inc.</span>,
          <span className="font-semibold"> Maxicare Healthcare Corp</span>, and
          <span className="font-semibold"> St. Peter life plans</span> thru
          affliation ang licensed of{" "}
          <span className="font-semibold">Eva Jane Macutay Chi.</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
