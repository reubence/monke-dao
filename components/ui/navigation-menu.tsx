"use client";

import Image from "next/image";
import LOGO_ONE from "../../public/logo-1.svg";
import LOGO_ICON from "../../public/Logo-Icon.svg";
import LOGO_WALL from "../../public/logo-wall.png";
import DASHBOARD from "../../public/icons/dashboard-icon.svg";
import LEADERBOARD from "../../public/icons/leaderboard-icon.svg";
import DISCONNECT from "../../public/icons/disconnect-icon.svg";
import TWITTER from "../../public/icons/twitter-icon.svg";
import DISCORD from "../../public/icons/discord-icon.svg";
import WEBSITE from "../../public/icons/website-icon.svg";
import SQUARE from "../../public/icons/square-icon.svg";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
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

import { buttonVariants } from "./button";
import { Separator } from "./separator";
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
          <div className="flex -mt-8">
            <div className="flex">
              {/* Logo */}
              <Image src={LOGO_ONE} alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block"></div>
          </div>

          <div className="flex mr-[18%] md:-mr-[20%] lg:-mr-[25%] xl:-mr-[30%]">
            <Image src={LOGO_ICON} alt="Logo" className="w-[70px] h-[70px]" />
          </div>

          <div className="hidden sm:flex gap-5">
            <div className="hidden xl:flex items-center [&>*:last-child]:!border-none mr-2">
              {navItems.map((item, index) => (
                <div className="px-4 border-r" key={index}>
                  <Link href="#">
                    <Image
                      key={item.name}
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6 "
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="hidden md:flex">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="relative mr-2">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    role="combobox"
                    aria-expanded={open}
                    className="w-64 h-16 justify-between"
                  >
                    {value ? (
                      <div className="flex items-center font-bold capitalize">
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
                      "Select framework..."
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-0">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
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
                  </Command>
                  <div className="px-2">
                    <Separator />
                    <div className="relative flex px-2 py-1.5 text-sm">
                      <Image
                        src={DISCONNECT}
                        alt={"Disconnect"}
                        className="mr-3 -ml-1"
                      />

                      <Link href="https://google.com">DISCONNECT</Link>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
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
