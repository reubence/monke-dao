"use client";

import Image from "next/image";
import LOGO_ONE from "../public/logo-1.svg";
import LOGO_ICON from "../public/Logo-Icon.svg";
import LOGO_WALL from "../public/logo-wall.png";
import DASHBOARD from "../public/icons/dashboard-icon.svg";
import LEADERBOARD from "../public/icons/leaderboard-icon.svg";
import DISCONNECT from "../public/icons/disconnect-icon.svg";
import TWITTER from "../public/icons/twitter-icon.svg";
import DISCORD from "../public/icons/discord-icon.svg";
import WEBSITE from "../public/icons/website-icon.svg";
import SQUARE from "../public/icons/square-icon.svg";

import * as React from "react";
import { Check, ChevronsUpDown, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { name: "Twitter", href: "#", icon: TWITTER },
  { name: "Discord", href: "#", icon: DISCORD },
  { name: "Square", href: "#", icon: SQUARE },
  { name: "Website", href: "#", icon: WEBSITE },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const frameworks = [
  {
    icon: DASHBOARD,
    value: "dashboard",
    label: "DASHBOARD",
  },
  {
    icon: LEADERBOARD,
    value: "user leaderboard",
    label: "USER LEADERBOARD",
  },
];

export default function NavigationMenu() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("dashboard");

  return (
    <nav className="bg-gray-800 overflow-clip relative">
      <div className="absolute inset-0">
        <Image
          src={LOGO_WALL}
          alt="Logo"
          className="absolute"
          fill
          objectFit="cover"
        />
      </div>

      <div className="mx-auto px-8 h-36">
        <div className="relative flex h-full items-center justify-between">
          <div className="flex">
            <div className="flex">
              {/* Logo */}
              <Image src={LOGO_ONE} alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block"></div>
          </div>

          <div className="flex mr-[18%] md:-mr-[20%] lg:-mr-[25%] xl:-mr-[30%] 2xl:-mr-[20%]">
            <Image src={LOGO_ICON} alt="Logo" className="w-[70px] h-[70px]" />
          </div>

          <div className="hidden md:flex gap-5">
            <div className="hidden xl:flex items-center [&>*:last-child]:!border-none mr-2">
              {navItems.map((item, index) => (
                <div className="px-4 border-r" key={index}>
                  <Link href="#">
                    <Image
                      key={item.name}
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
            </div>
            <div className="hidden lg:block relative mr-2">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    role="combobox"
                    aria-expanded={open}
                    className="w-64 h-16 justify-between"
                  >
                    {value ? (
                      <div className="flex items-center text-sm font-semibold capitalize">
                        <Image
                          src={
                            frameworks.find(
                              (framework) => framework.value === value
                            )?.icon!
                          }
                          alt={
                            frameworks.find(
                              (framework) => framework.value === value
                            )?.icon!
                          }
                          className="mr-2 mb-1"
                        />
                        {
                          frameworks.find(
                            (framework) => framework.value === value
                          )?.label
                        }
                      </div>
                    ) : (
                      "Select a page"
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 px-4 text-xs font-semibold text-muted-foreground">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No Page Found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                          className="text-muted-foreground"
                        >
                          <Image
                            src={framework.icon!}
                            alt={
                              frameworks.find(
                                (framework) => framework.value === value
                              )?.icon!
                            }
                            className="mr-3.5"
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    <Separator />
                    <CommandGroup>
                      <CommandItem>
                        <div className="w-full">
                          <div className="relative flex items items-center text-xs text-muted-foreground">
                            <Image
                              src={DISCONNECT}
                              alt={"Disconnect"}
                              className="mr-3.5"
                            />

                            <Link href="https://google.com">DISCONNECT</Link>
                          </div>
                        </div>
                      </CommandItem>
                    </CommandGroup>
                  </Command>
                  <div className="">
                    <Image
                      src={LOGO_ICON}
                      alt={"Logo Icon"}
                      width={50}
                      height={50}
                      className="mx-auto mt-14"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <p className="flex items-center gap-2 text-muted-foreground/40 font-normal">
                      Powered by:
                      <svg
                        width="92"
                        height="16"
                        viewBox="0 0 92 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.9283 4.42456H26.2201V13.1537H23.9283V4.42456Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M34.3852 13.1537L30.2674 9.02212V13.1537H27.9756V4.42456H28.9064L33.0356 8.54476V4.42456H35.3274V13.1537H34.3852Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M36.8977 4.41324H43.7724V6.69428H41.4579V13.1538H39.1661V6.69428H36.8977V4.41324Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M45.3544 4.42456H50.7751V6.32197H47.6462V7.74201H50.4144V9.67423H47.6462V11.2804H50.7751V13.1544H45.3544V4.42523V4.42456Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M57.4758 13.1537L56.1261 10.8378H54.7069V13.1537H52.4151V4.42456H56.0907C57.8585 4.42456 59.3012 5.86804 59.3012 7.63689C59.3012 8.56819 58.8943 9.40575 58.266 9.98823L60.1155 13.1544H57.4751L57.4758 13.1537ZM54.7076 8.85876H56.1268C56.8247 8.85876 57.3834 8.31177 57.3834 7.61346C57.3834 6.91516 56.8254 6.35678 56.1268 6.35678H54.7076V8.85943V8.85876Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M61.2441 4.42456H63.5359V10.8492H66.6769V13.1537H61.2441V4.42456Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M67.7351 13.1537L71.8068 4.42456H72.842L76.9484 13.1537H74.6567L74.1213 12.0128H70.5502L70.0269 13.1537H67.7351ZM71.4461 10.0813H73.226L72.3421 8.16113L71.4461 10.0813Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M83.2053 7.31142C82.8447 6.95055 82.3328 6.74099 81.7399 6.74099C80.5535 6.74099 79.6924 7.60199 79.6924 8.78971C79.6924 9.97743 80.5529 10.8384 81.7399 10.8384C82.3334 10.8384 82.8447 10.6289 83.2053 10.2566L84.834 11.8628C84.0431 12.6542 82.9497 13.155 81.7399 13.155C79.3317 13.155 77.3778 11.1993 77.3778 8.79038C77.3778 6.38147 79.3324 4.42581 81.7399 4.42581C82.9383 4.42581 84.0197 4.90317 84.8106 5.69454L83.2053 7.31209V7.31142Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M86.5791 4.42456H91.9998V6.32197H88.8709V7.74201H91.6391V9.67423H88.8709V11.2804H91.9998V13.1544H86.5791V4.42523V4.42456Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M4.33389 9.80658C3.30208 8.78825 3.2907 7.11982 4.30846 6.08742C5.32622 5.05503 6.9937 5.04365 8.02551 6.06198L13.0052 10.9769L15.5366 8.62891L10.4157 3.637C8.04759 1.29972 4.22013 1.32583 1.88418 3.69525C-0.439728 6.05261 -0.425676 9.85412 1.90559 12.1947L4.64771 15.2243L7.17102 12.9379L4.39946 9.87554C4.37805 9.85211 4.35597 9.82868 4.33322 9.80591L4.33389 9.80658Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                        <path
                          d="M19.436 11.9729C20.2236 10.7343 20.6378 9.29352 20.6217 7.79113C20.6003 5.74375 19.7833 3.8276 18.3212 2.39551C16.8793 0.982162 14.9796 0.206863 12.9641 0.206863C12.9367 0.206863 12.9093 0.206863 12.8818 0.206863L11.122 0.22561L11.1521 3.10185L12.912 3.0831C14.192 3.06703 15.3971 3.55511 16.3105 4.45025C17.2239 5.34539 17.7344 6.54248 17.7478 7.82126C17.7612 9.10003 17.2761 10.3078 16.3814 11.2217C15.4868 12.1356 14.2904 12.6465 13.0123 12.6598C12.9956 12.6598 12.9789 12.6598 12.9615 12.6598C11.5837 12.6598 10.2849 11.9321 9.37423 10.8937L7.20355 12.9263C8.6616 14.588 10.756 15.5361 12.9615 15.5361C12.9882 15.5361 13.0157 15.5361 13.0424 15.5361C14.1545 15.5247 15.2285 15.277 16.2068 14.819L20.1754 15.6439L19.436 11.9736V11.9729Z"
                          fill="#184623"
                          fill-opacity="0.5"
                        />
                      </svg>
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="inset-y-0 right-0 flex items-center lg:hidden">
            <button>
              <span className="sr-only">Open main menu</span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.96826 7.46826H24.9683"
                  stroke="white"
                  stroke-width="2.5"
                />
                <path
                  d="M4.96826 14.9683H24.9683"
                  stroke="white"
                  stroke-width="2.5"
                />
                <path
                  d="M4.96826 22.4683H24.9683"
                  stroke="white"
                  stroke-width="2.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div> */}
    </nav>
  );
}
