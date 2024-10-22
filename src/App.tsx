import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  Twitter,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import imgFooter from "../public/imgFooter.jpeg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";

function App() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [animationState, setAnimationState] = useState<"running" | "paused">(
    "running"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  const handleMouseEnter = () => {
    setAnimationState("paused");
  };

  const handleMouseLeave = () => {
    setAnimationState("running");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="">
        <section className="h-screen bg-[#F3EEE8] lg:flex lg:flex-row-reverse  lg:mx-auto lg:gap-8 lg:w-full">
          <div className="lg:relative lg:h-full absolute w-full">
            <img
              src="https://s3-alpha-sig.figma.com/img/17e1/3420/2e3130d914626b07ec182fc5179ca5d0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qJJUlR8B9rxzouqEjZIW2XJkNL304qjwjjuXOw~DpHiR8dVECGMGGx8fa8s0bvH71QhDOOApi2eYq5Pi9eYOYJVpJPdAThdTrWvTNUv2gXhNTLFUdyJZJcpHB8-Bel1hXbbpCZG4VI8BBwULaiHQvlpC32k3QjjnT6eJEvNt-Bodyt4GTCZXwO5375vdzcKNZVPnew3WjJrtK0c4N5ICaK3ulQG8cyQ4aisi6cpcvHLH1iFuEWWc3NIPpBvy-EDLTMaiNWkf71VKmMMXW4om9hD6~UIFj8hRyFN~wKgyarkM~9V8Tfsw0km5PHOt2hpPzQ0JonT2uy1SzcsV-KDJbg__"
              alt="Elegant copper pendant lights"
              className="absolute inset-0 w-full h-screen object-cover lg:static lg:w-full"
            />
          </div>
          <div className="relative h-full lg:static lg:w-full">
            <div className="mx-auto h-full flex flex-col">
              <header className="mx-auto py-6 flex justify-between items-center space-x-8  max-sm:w-full max-sm:justify-around">
                <h1 className="text-2xl font-light lg:text-[#A06056] text-white">
                  antic
                </h1>
                <nav className="max-sm:hidden block">
                  <ul className="flex space-x-6 text-sm lg:text-[#706458] text-white">
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
                <h2 className="text-white lg:text-[#A06056] uppercase text-sm mb-6 text-center lg:text-start">
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

        <section
          id="findout"
          className="bg-[#F3EEE8] px-4 py-24 lg:w-full flex flex-col lg:flex-row lg:justify-around gap-12">
          <div className="lg:w-[546px]">
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-[#706458] lg:w-3/4 font-light mb-8">
              We stay by your side to design your projects
            </h3>
            <Button
              variant="link"
              className="mt-4 text-[#A06056] hover:text-rose-700">
              Find out more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-[600px]">
            <div className="w-full max-w-sm">
              <h4 className="font-medium mb-2 text-[#A06056]">Our Advices</h4>
              <p className="text-sm text-[#706458E5] font-extralight">
                What if you took advantage of this rather special period to
                rethink your interior? You spend more time at home so you might
                as well feel good there.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <h4 className="font-medium mb-2 text-[#A06056]">
                Conception Service
              </h4>
              <p className="text-sm text-[#706458E5] font-extralight">
                Personalized service with an expert adviser for your interior
                and exterior decoration or layout projects.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <h4 className="font-medium mb-2 text-[#A06056]">
                Click and collect
              </h4>
              <p className="text-sm text-[#706458E5] font-extralight">
                Adapted and contactless. Free from € 200 of purchases in stores
                offering the service.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <h4 className="font-medium mb-2 text-[#A06056]">
                Installation Service
              </h4>
              <p className="text-sm text-[#706458E5] font-extralight">
                Our furniture packaged in flat packs are designed for easy
                assembly. But you can call on our partner.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto px-4 flex justify-around my-16 max-sm:flex-col max-sm:space-y-5">
            <div>
              <h3 className="text-4xl font-light mb-2">
                Be aware of the latest trends
              </h3>
              <p className="text-[#706458E5] mb-4 font-light">
                Stay informed of new trends, but also of our various offers.
              </p>
              <Button
                variant={"link"}
                className="flex items-center text-[#A06056] hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Input
                type="email"
                placeholder="email@address.com"
                className="max-w-md border-none bg-[#F3EEE84D] text-[#706458E5]"
              />
              <Button className="bg-[#534B42] text-white hover:text-[#534B42] hover:border hover:border-[#534B42] hover:shadow-sm hover:shadow-black transition-all">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4  bg-white flex flex-col max-md:flex-col-reverse">
          <div className="relative h-[400px] overflow-hidden mb-20">
            <div
              ref={containerRef}
              className="absolute flex animate-scroll whitespace-nowrap"
              style={
                {
                  "--scroll-width": `${scrollWidth}px`,
                  animationPlayState: animationState,
                } as React.CSSProperties
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              {[...Array(10)].map((_, outerIndex) => (
                <div key={outerIndex} className="flex">
                  <div className=" w-20 flex items-center justify-center cursor-pointer mx-24">
                    <div className="  flex items-center justify-center rounded-full transition-colors duration-200 h-full">
                      <img
                        className="w-80 h-[400px]  text-primary transition-all drop-shadow-sm shadow-white mx-40 px-10"
                        src={"../public/img1.png"}
                      />
                    </div>
                  </div>
                  <div className="max-lg w-20 flex items-center justify-center cursor-pointer mx-24">
                    <div className=" flex items-center justify-center rounded-full transition-colors duration-200 h-full">
                      <img
                        className="w-80 h-[400px]  text-primary transition-all drop-shadow-sm shadow-white mx-40 px-10"
                        src={"../public/img2.png"}
                      />
                    </div>
                  </div>
                  <div className="max-lg w-20 flex items-center justify-center cursor-pointer mx-24">
                    <div className=" flex items-center justify-center rounded-full transition-colors duration-200 h-full">
                      <img
                        className="w-80 h-[400px]  text-primary transition-all drop-shadow-sm shadow-white mx-40 px-10"
                        src={"../public/img3.png"}
                      />
                    </div>
                  </div>
                  <div className="max-lg w-20 flex items-center justify-center cursor-pointer mx-24">
                    <div className=" flex items-center justify-center rounded-full transition-colors duration-200 h-full">
                      <img
                        className="w-80 h-[400px]  text-primary transition-all drop-shadow-sm shadow-white mx-40 px-10"
                        src={"../public/img4.png"}
                      />
                    </div>
                  </div>
                  <div className="max-lg w-20 flex items-center justify-center cursor-pointer mx-24">
                    <div className=" flex items-center justify-center rounded-full transition-colors duration-200 h-full">
                      <img
                        className="w-80 h-[400px]  text-primary transition-all drop-shadow-sm shadow-white mx-40 px-10"
                        src={"../public/img5.png"}
                      />
                    </div>
                  </div>
                  <div className="max-lg w-20 flex items-center justify-center cursor-pointer mx-24">
                    <div className=" flex items-center justify-center rounded-full transition-colors duration-200 h-full ">
                      <img
                        className="w-80 h-[400px]  text-primary transition-all drop-shadow-sm shadow-white mx-40 px-10 "
                        src={"../public/img6.png"}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-around items-center w-[85%] mx-auto mb-20 max-lg:flex-col max-lg:space-y-5">
            <h2 className="text-[#534B42] text-5xl">Inspirations</h2>
            <p className="text-sm text-[#706458E5] w-80">
              Our experts are keen to stay on top of trends in order to offer
              you new inspirations for your interior and exterior every day.
              Remember that to inspire you we have to inspire ourselves and we
              want to share that with you.
            </p>
            <div className="flex space-x-2 max-lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-[#A06056] hover:shadow-md hover:shadow-[#A06056] transition-all size-12">
                <ChevronLeft className="h-4 w-4 text-[#A06056]" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-[#A06056] hover:shadow-md hover:shadow-[#A06056] transition-all size-12">
                <a href="#findout">
                  <ChevronRight className="text-[#A06056]" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f8f5f1] text-gray-700 py-16">
        <div className="container mx-auto px-4 max-md:w-fit">
          <div className="grid grid-cols-6 gap-8 max-md:flex max-md:flex-col max-md:items-start">
            <div className="col-span-1">
              <h2 className="text-3xl font-serif mb-6">antic</h2>
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
              <h3 className="font-semibold mb-4 max-md:text-center">We respect our planet</h3>
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
    </div>
  );
}

export default App;
