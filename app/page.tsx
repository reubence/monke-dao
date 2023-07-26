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
        <div className="mx-auto sm:px-10 sm:pt-20 lg:px-16 max-w-7xl grid grid-cols-2 gap-0 w-full h-full lg:flex-row items-stretch">
          <div className="col-span-1">
            <AspectRatio ratio={16 / 16}>
              <Image
                src={"/../public/nft-1.png"}
                alt="Logo"
                height={550}
                width={550}
              />
            </AspectRatio>
          </div>

          <div className="col-span-1 bg-white"></div>
        </div>
      </main>
    </div>
  );
}
