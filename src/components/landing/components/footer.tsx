import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import imgFooter from "/public/imgFooter.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#f8f5f1] text-gray-700 py-16 ">
      <div className="px-4 max-md:w-fit w-[80%] mx-auto">
        <div className="grid grid-cols-6 gap-8 max-md:flex max-md:flex-col max-md:items-start">
          <div className="col-span-1">
            <h2 className="text-4xl font-serif mb-6">antic</h2>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>Furniture</li>
              <li>Decoration</li>
              <li>Storage</li>
              <li>Baby and child</li>
              <li>Connected home</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Rooms</h3>
            <ul className="space-y-2 text-sm">
              <li>Living room</li>
              <li>Dining room</li>
              <li>Cooked</li>
              <li>Bedroom</li>
              <li>Bathroom</li>
              <li>Office</li>
              <li>Laundry</li>
              <li>Garage</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Click and collect</li>
              <li>Conception</li>
              <li>Installation</li>
              <li>Advices</li>
              <li>Gift card</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>Our story</li>
              <li>Our stores</li>
              <li>Our partners</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 max-md:text-center">
              We respect our planet
            </h3>
            <img
              src={imgFooter}
              alt="Sustainable interior"
              className="w-full h-auto mb-4 rounded-md max-md:w-1/2 max-md:mx-auto"
            />
            <p className="text-sm mb-4 max-md:text-center">
              We're taking positive steps to reduce our impact on the planet.
              For us, that means retailing responsibly.
            </p>
            <Button
              variant="link"
              className="text-rose-700 p-0 h-auto font-semibold max-md:w-full">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <div className="flex space-x-4">
            <Facebook className="h-6 w-6 text-[#706458E5]" />
            <Twitter className="h-6 w-6 text-[#706458E5]" />
            <Linkedin className="h-6 w-6 text-[#706458E5]" />
            <Instagram className="h-6 w-6 text-[#706458E5]" />
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
          <p>&copy; 2021 Agence Dnd</p>
          <div className="flex space-x-4">
            <span>Privacy policy</span>
            <span>Term of service</span>
            <span>Language</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
