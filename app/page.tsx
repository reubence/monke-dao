import { Button, buttonVariants } from "@/components/ui/button";
import NavigationMenu from "@/components/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import NFT from "public/nft-1.png";
// array of objects - each object has a image, label
const frameworks = [
  {
    image: "public/nft-1.png",
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: "public/nft-2.png",
    id: "3253",
    gen: 3,
    multiplier: 4,
  },
];

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-clip">
      <NavigationMenu />
      <main className="h-full w-full">
        <div className="max-w-screen-7xl w-full overflow-x-clip px-4 sm:px-8 lg:px-10 pt-20">
          <section className="flex flex-col lg:flex-row">
            <div className="flex flex-col content-stretch relative items-end mx-auto lg:mr-0">
              <Image
                src={NFT}
                alt="Logo"
                sizes="(min-width: 808px) 550px, (max-width: 808px) 343px"
                style={{ width: "auto", height: "45vh" }}
                className="hidden lg:block"
              />
              <Image
                src={NFT}
                alt="Logo"
                sizes="(min-width: 808px) 550px, (max-width: 808px) 343px"
                className="lg:hidden"
              />
            </div>
            <div className="bg-white w-full max-w-[550px] lg:max-w-[500px] xl:max-w-[663px] xl:w-[866px] mx-auto lg:ml-0">
              <h1>SMB #1232</h1>
            </div>
          </section>
          <section className="flex flex-col lg:flex-row"></section>
        </div>
      </main>
    </div>
  );
}
