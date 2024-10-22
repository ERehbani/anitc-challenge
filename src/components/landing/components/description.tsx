import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Description = () => {
  return (
    <div>
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
              rethink your interior? You spend more time at home so you might as
              well feel good there.
            </p>
          </div>
          <div className="w-full max-w-sm">
            <h4 className="font-medium mb-2 text-[#A06056]">
              Conception Service
            </h4>
            <p className="text-sm text-[#706458E5] font-extralight">
              Personalized service with an expert adviser for your interior and
              exterior decoration or layout projects.
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
    </div>
  );
};

export default Description;
