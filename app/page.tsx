import NavigationMenu from "@/components/navigation-menu";
import Image from "next/image";
import { ArtDetails } from "@/components/art-details";

import NFT_1 from "../public/nft-1.png";
import NFT_2 from "../public/nft-2.png";
import NFT_3 from "../public/nft-3.png";
import NFT_4 from "../public/nft-4.png";
import NFT_5 from "../public/nft-5.png";
import NFT_6 from "../public/nft-6.png";
import NFT_7 from "../public/nft-7.png";
import NFT_8 from "../public/nft-8.png";
import THREE_MONKEYS from "../public/three-monkeys-muted-bg.svg";
import BG_TEXT_SM from "../public/monke-dao-muted-bg-text.svg";
import LOGO from "../public/Logo-Icon.svg";

import Slider from "@/components/slider";

const data = [
  {
    image: NFT_1,
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_2,
    id: "3253",
    gen: 3,
    multiplier: 4,
  },
  {
    image: NFT_3,
    id: "4456",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_4,
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_5,
    id: "3253",
    gen: 3,
    multiplier: 4,
  },
  {
    image: NFT_6,
    id: "4456",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_7,
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_8,
    id: "3253",
    gen: 3,
    multiplier: 4,
  },
];

export default function Home() {
  return (
    <div className="relative">
      <NavigationMenu />
      <main className="h-full w-full">
        <div className="max-w-screen-7xl w-full overflow-x-clip px-4 sm:px-8 lg:px-10 py-3 lg:py-20">
          <section className="lg:hidden max-w-[550px] mx-auto pb-7">
            <Slider />
          </section>
          <section className="flex flex-col lg:flex-row">
            <div className="flex mx-auto lg:mr-0">
              <Image
                src={NFT_1}
                alt="Logo"
                sizes="(min-width: 808px) 550px, (max-width: 808px) 343px"
                className="hidden lg:block lg:h-[46.5vh] lg:w-auto tallXL:block tallXL:h-[550px] tallXS:h-[450px]"
              />
              <Image
                src={NFT_1}
                alt="Logo"
                sizes="(min-width: 808px) 550px, (max-width: 808px) 343px"
                className="lg:hidden tallXL:hidden"
              />
            </div>
            <div className="relative bg-white w-full max-w-[550px] lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[663px] mx-auto lg:ml-0">
              <ArtDetails />

              {/* BACKGROUND SVGs */}
              <Image
                src={BG_TEXT_SM}
                alt="Monke Dao"
                className="hidden 2xl:block tallXL:absolute tallXL:block 2xl:absolute bottom-5 right-8"
              />
              <Image
                src={THREE_MONKEYS}
                alt="Three Monkeys"
                className="block lg:hidden tallXL:block tallXL:absolute bottom-0 left-0 w-full lg:w-fit"
              />
            </div>
          </section>
          <section
            className={`hidden fixed bottom-0 right-0 left-0 lg:flex lg:w-[calc(500px+45vh)] xl:w-[calc(550px+45vh)] 2xl:w-[calc(663px+45vh)] tallXL:w-[calc(550px+663px)] tallXS:w-[calc(450px+663px)] mx-auto`}
          >
            <div className="text-xl font-black capitalize flex flex-row items-baseline gap-2 absolute -inset-y-10">
              <Image
                src={LOGO}
                alt="Monke Dao"
                className="w-5 h-5 grayscale opacity-40"
              />
              MY SMB
            </div>

            <div className="font-black capitalize flex flex-row items-baseline gap-2 absolute -inset-y-9 right-0">
              Points: 5,000
            </div>

            {data.map((item, i) => {
              return (
                <div
                  className="group hover:cursor-pointer relative flex-grow lg:h-[calc((500px+45vh)/8)] xl:h-[calc((550px+45vh)/8)]  2xl:h-[calc((663px+45vh)/8)] tallXL:h-[calc((550px+663px)/8)] bg-white"
                  key={i + 1}
                >
                  <div className="absolute inset-0 bg-gray-100 group-hover:-top-16 duration-500 transition-all ease-in-out">
                    <div className="absolute inset-0 m-4 z-10 text-muted-secondaryForeground opacity-0 group-hover:opacity-100 delay-300 duration-200 transition-all ease-in-out">
                      <div className="relative text-[10px] tallXL:text-xs font-black text-muted-secondaryForeground">
                        Gen {item.gen}
                        <Image
                          src={LOGO}
                          alt="Monke Dao"
                          className="absolute w-5 h-5 -top-2 -right-2"
                        />
                      </div>
                      <h2 className="whitespace-nowrap tallXL:text-xl font-black leading-none tracking-tight">
                        SMB {item.id}
                      </h2>
                    </div>
                    <Image
                      src={item.image}
                      alt="Monke Dao"
                      fill
                      quality={10}
                      className="hidden lg:block !h-[999px]"
                    />
                  </div>
                  <Image
                    src={item.image}
                    alt="Monke Dao"
                    fill
                    className="hidden lg:block z-20"
                  />
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}
