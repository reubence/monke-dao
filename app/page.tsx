import { Button, buttonVariants } from "@/components/ui/button";
import NavigationMenu from "@/components/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
        <div className="max-w-screen-7xl w-full rounded-[60px] overflow-x-clip">
          <section className="flex flex-col w-full lg:flex-row items-stretch">
            <div className="flex flex-col items-end lg:w-1/2">
              <Image
                src={"/../public/nft-1.png"}
                alt="Logo"
                height={550}
                width={550}
              />
            </div>
            <div className="lg:col-span-1 bg-chocolate h-full w-full justify-center lg:w-1/2">
              <h1>SMB #1232</h1>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
