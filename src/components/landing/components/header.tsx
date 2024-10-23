import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronDown, Menu, MessageCircle } from "lucide-react";
import chatMessage from "../../../../public/chat.svg";

const Header = () => {
  return (
    <section className="h-screen bg-[#F3EEE8] lg:flex lg:flex-row-reverse  lg:mx-auto lg:gap-8 lg:w-full ">
      <div className="lg:relative lg:h-full absolute w-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/17e1/3420/2e3130d914626b07ec182fc5179ca5d0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qJJUlR8B9rxzouqEjZIW2XJkNL304qjwjjuXOw~DpHiR8dVECGMGGx8fa8s0bvH71QhDOOApi2eYq5Pi9eYOYJVpJPdAThdTrWvTNUv2gXhNTLFUdyJZJcpHB8-Bel1hXbbpCZG4VI8BBwULaiHQvlpC32k3QjjnT6eJEvNt-Bodyt4GTCZXwO5375vdzcKNZVPnew3WjJrtK0c4N5ICaK3ulQG8cyQ4aisi6cpcvHLH1iFuEWWc3NIPpBvy-EDLTMaiNWkf71VKmMMXW4om9hD6~UIFj8hRyFN~wKgyarkM~9V8Tfsw0km5PHOt2hpPzQ0JonT2uy1SzcsV-KDJbg__"
          alt="Elegant copper pendant lights"
          className="absolute inset-0 w-full h-screen object-cover lg:static lg:w-full"
        />
        <Button>
          <div className="absolute top-11 right-12 border-2 border-white rounded-full p-2 flex flex-col items-center">
            <img src={chatMessage} alt="chat" />
          </div>
        </Button>
      </div>
      <div className="relative h-full lg:static lg:w-full">
        <div className="mx-auto h-full flex flex-col items-start ">
          <header className="lg:w-[60%] mx-auto py-11 flex justify-around items-center space-x-8  max-sm:w-full max-sm:justify-around">
            <h1 className="text-4xl font-semibold font-[Merrisweather] lg:text-[#A06056] text-white">
              antic
            </h1>
            <nav className="max-sm:hidden block">
              <ul className="flex space-x-6 text-lg lg:text-[#706458] text-white mt-2">
                <li>Products</li>
                <li>Rooms</li>
                <li>Services</li>
                <li>Inspirations</li>
              </ul>
            </nav>
            <Drawer>
              <DrawerTrigger className="max-sm:block hidden">
                <Menu className="text-white" />
              </DrawerTrigger>
              <DrawerContent className="bg-white">
                <DrawerHeader>
                  <ul className="flex flex-col items-center space-y-5 lg:text-[#706458">
                    <li>Products</li>
                    <li>Rooms</li>
                    <li>Services</li>
                    <li>Inspirations</li>
                  </ul>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </header>
          <div className="w-full lg:w-[60%] mx-auto h-full flex flex-col justify-center ">
            <h2 className="font-[Varta] text-white lg:text-[#A06056] uppercase text-sm mb-6 text-center lg:text-start lg:mb-12">
              Home design
            </h2>
            <h2 className="text-4xl lg:text-5xl text-white lg:text-[#A06056] font-light mb-4 leading-snug w-full lg:w-2/4  text-center lg:text-start">
              Elegance for Interiors & Exteriors
            </h2>
            <p className="text-white lg:text-[#706458E5] mb-8 text-lg lg:text-xl font-extralight w-full lg:w-4/5  text-center lg:text-start">
              We provide everyone with modern, trendy, quality furniture
            </p>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-white lg:border-[#A06056] hover:shadow-md hover:shadow-[#A06056] transition-all w-12 h-12 max-lg:mx-auto">
              <a href="#findout">
                <ChevronDown className="text-white lg:text-[#A06056]" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
