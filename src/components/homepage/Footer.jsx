import { Separator } from "@heroui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import logo from "@/assets/mango.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-olive-100 pt-20 mt-175 sm:mt-120 md:mt-60">
      <div className="grid gap-8 w-11/12 mx-auto sm:grid-cols-7 md:grid-cols-9">
        <div className="text-neutral-600 col-span-3 space-y-3">
          <p className="text-xl font-semibold mb-2">Information</p>
          <p>Contact our customer happiness team</p>
          <p>Monday-Friday 9am-5pm</p>
          <p className="border-b w-fit border-black">takebulislam@gmail.com</p>
          <p className="text-2xl text-red-500 font-semibold">
            (+880)-179-943-9775
          </p>
        </div>

        <div className="text-neutral-600 space-y-3 col-span-2">
          <p className="text-xl font-semibold mb-2">Category</p>
          <p>Coupons</p>
          <p>RX Prescription</p>
          <p>Scholarship Program</p>
          <p>Brand Directory</p>
          <p>E-Catalogs/Requests</p>
          <p>Order Form</p>
          <p>Blog</p>
        </div>

        <div className="text-neutral-600 space-y-3 col-span-2">
          <p className="text-xl font-semibold mb-2">About Us</p>
          <p>Contact Us</p>
          <p>Track Your Order</p>
          <p>Returns Policy</p>
          <p>Delivery Information</p>
          <p>Loyalty Program</p>
        </div>

        <div className="text-neutral-600 space-y-3 col-span-2">
          <p className="text-xl font-semibold mb-2">Need help?</p>
          <p>Help Center</p>
          <p>Shipping FAQs</p>
          <p>Pick up in Store</p>
          <p>Order Status</p>
          <p>Product Recalls</p>
          <p>Corrections & Updates</p>
          <p>Gift Cards</p>
        </div>
      </div>
      <Separator orientation="horizontal" className="mt-18 mb-3 pt-0.5" />
      <div className="grid grid-cols-3 text-center items-center justify-items-center">
        <div className="flex gap-4 items-center">
          <Link href={"https://www.facebook.com/stranger.8541"}>
            <FaFacebook size={30} />
          </Link>
          <Link href={"https://github.com/takebul/mango"}>
            <FaGithub size={30} />
          </Link>
          {/* I don't have linkedin account */}
          <FaLinkedin size={30} />
        </div>
        <div>&copy; 2026 - Takebul Islam. All Rights Reserved.</div>
        <div>
          <Image className="w-50" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

// ©
