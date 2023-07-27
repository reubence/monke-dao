import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import TWITTER from "../public/icons/twitter-icon.svg";
import DISCORD from "../public/icons/discord-icon.svg";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

const tasks = [
  {
    icon: DISCORD,
    value: "Discord Reaction",
    description: "User is awarded for Reacting to the latest annoucement",
  },
  {
    icon: TWITTER,
    value: "Twitter PFP",
    description: "User is awarded for using NFT as Twitter",
  },
  {
    icon: DISCORD,
    value: "Discord Reaction",
    description: "User is awarded for Reacting to the latest annoucement",
  },
];
export function CardWithForm() {
  return (
    <Card className="relative border-none shadow-none">
      <CardHeader className="px-8 py-6">
        <CardDescription className="font-black">Gen3</CardDescription>
        <CardTitle>SMB #1235</CardTitle>
        <CardDescription className="text-xs font-medium">
          Multiplier: 1x
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="account" className="">
          <Separator />
          <TabsList className="ml-5 mr-8 my-5">
            <TabsTrigger value="account">All Task (5)</TabsTrigger>
            <TabsTrigger value="password">Completed</TabsTrigger>
          </TabsList>
          <Separator />
          <TabsContent className="" value="account">
            <ScrollArea className="lg:h-[calc(45vh-212px)] tall:h-60">
              {tasks.map((item, index) => (
                <div className="py-4 px-8 " key={index}>
                  <div className="flex gap-2">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <mask
                        id="mask0_0_127"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="17"
                      >
                        <rect
                          y="0.5"
                          width="16"
                          height="16"
                          fill="url(#pattern0)"
                        />
                      </mask>
                      <g mask="url(#mask0_0_127)">
                        <rect
                          y="0.5"
                          width="16"
                          height="16"
                          fill="url(#pattern1)"
                        />
                        <rect
                          x="-2"
                          y="-2.5"
                          width="23"
                          height="22"
                          fill="#184623"
                        />
                      </g>
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_0_127"
                            transform="scale(0.00195312)"
                          />
                        </pattern>
                        <pattern
                          id="pattern1"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_0_127"
                            transform="scale(0.00195312)"
                          />
                        </pattern>
                        <image
                          id="image0_0_127"
                          width="512"
                          height="512"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPUIf2wAAAC90Uk5TAAEICQwTFRYcJTA4PlBRVFVXWmhpa21wc3Z7fYKFkJOYnKKmrrDBwsjQ0tTe6fg74c2YAAAEzElEQVR42u3WzW4SYRSAYeW3AQNBF7XGlNqIqave/2WwsklZ0KapNZFQFCoUDcaFuyaHMsDMwPPcwHxzvjdzpvCCvVYwAgEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEggPyppaYigCzopKYlAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABsFwAZ4l9yPDrNcLT91JTio52upUAqsllOIByePhJaoqZGKwV4B8AASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAA7EsB0FBi/iZQ3dfpG9ORCdPhReqP/kXyw1W0E8L0fGL6PbCyAd9GT69Hh++kFcB8dbRAOtmQFIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAAAkAACAABIAAEgAAQAAJAAEuZdCPt8+V13IkvAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAA2H4AtzfLG548Q3nPb+/oJLGtBDAaLG/WfIZ9/37Vm4lZAVYAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEsIrFbK3yfDdrGMWf/AUwvlinr3kO4Nc23t8KsAIQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABMAmnX4O1C4jAsizSqT4EBGAFYAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQADsSwF2kfBw4NMU8B/AtctCKmKIVgAAQAAJAAAgAASAABIAAWFXlMPJzGLgXQI6V3kburwMCQAAIAAEgAASAABAAAkAACAABCAABIAAEgAAQAAJAAAjgv8fIvBYpmnOOA7j9ErjrRKrmbAUgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACIA0A5j1IkdnSX1yU9kN4PckUqkmdeCmrAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAJAAGmbjyJuaqcDGPcDV27KCkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEIAAEgABWVz+PXHUD1/s4+uNobO1obN2JLwACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABCAABIAAEAACQAAIAAEgAATwz+uTQOsmMt/HybajuU2jsd1mI4BGM/BqENnLAKKxNV9GYxtZAQgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEADrC6BY5wnTWeBxVwIofeQJvYvA0ApAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEABrCuDuklUsdiWA6QOrWFgBCAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACIBN+QsA/nl5L2OMZAAAAABJRU5ErkJggg=="
                        />
                      </defs>
                    </svg>
                    <h2 className="text-sm font-semibold">{item.value}</h2>
                  </div>
                  <p className="px-6 pt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent className="px-8 py-5" value="password">
            Change your password here.
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
