import NavigationMenu from "@/components/navigation-menu";
import Image from "next/image";
import NFT from "public/nft-1.png";
import { CardWithForm } from "@/components/art-details";
import THREE_MONKEYS from "../public/three-monkeys-muted-bg.svg";
import BG_TEXT_SM from "../public/monke-dao-muted-bg-text.svg";

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
    <div className="relative h-screen w-screen lg:overflow-clip">
      <NavigationMenu />
      <main className="h-full w-full">
        <div className="max-w-screen-7xl w-full overflow-x-clip px-4 sm:px-8 lg:px-10 py-20">
          <section></section>
          <section className="flex flex-col lg:flex-row">
            <div className="flex mx-auto lg:mr-0">
              <Image
                src={NFT}
                alt="Logo"
                sizes="(min-width: 808px) 550px, (max-width: 808px) 343px"
                className="hidden lg:block lg:h-[45vh] lg:w-auto tall:block tall:h-[550px]"
              />
              <Image
                src={NFT}
                alt="Logo"
                sizes="(min-width: 808px) 550px, (max-width: 808px) 343px"
                className="lg:hidden tall:hidden"
              />
            </div>
            <div className="relative bg-white w-full max-w-[550px] lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[663px] mx-auto lg:ml-0">
              <CardWithForm />

              {/* BACKGROUND SVGs */}
              <Image
                src={BG_TEXT_SM}
                alt="Monke Dao"
                className="hidden 2xl:block tall:absolute tall:block 2xl:absolute bottom-5 right-8"
              />
              <Image
                src={THREE_MONKEYS}
                alt="Three Monkeys"
                className="block lg:hidden tall:block tall:absolute bottom-0 left-0 w-full lg:w-fit"
              />
            </div>
          </section>
          <section
            className={`hidden fixed bottom-0 right-0 left-0 lg:flex lg:w-[calc(500px+45vh)] xl:w-[calc(550px+45vh)] 2xl:w-[calc(663px+45vh)] tall:w-[calc(550px+663px)] mx-auto`}
          >
            {[...Array(8)].map((_, i) => {
              return (
                <div
                  className="group hover:cursor-pointer relative flex-grow lg:h-[calc((500px+45vh)/8)] xl:h-[calc((550px+45vh)/8)]  2xl:h-[calc((663px+45vh)/8)] tall:h-[calc((550px+663px)/8)] bg-white"
                  key={i + 1}
                >
                  <div className="absolute inset-0 bg-gray-100 group-hover:-top-16 duration-500 transition-all ease-in-out">
                    <div className="absolute inset-0 m-4 z-10 text-muted-secondaryForeground opacity-0 group-hover:opacity-100 delay-300 duration-200 transition-all ease-in-out">
                      <p className="text-xs font-black text-muted-secondaryForeground">
                        Gen 2
                      </p>
                      <h2 className="text-xl font-black leading-none tracking-tight">
                        SMB #1235
                      </h2>
                    </div>
                    <Image
                      src={`/../public/nft-${i + 1}.png`} // dynamically sets the src attribute
                      alt="Monke Dao"
                      fill
                      quality={10}
                      className="hidden lg:block !h-[999px]"
                    />
                  </div>
                  <Image
                    src={`/../public/nft-${i + 1}.png`} // dynamically sets the src attribute
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
