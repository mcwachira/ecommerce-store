"use client";
import { cn } from "@/lib/utils";
import { Image as ImageTypes } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

interface GalleryImageProps {
  image: ImageTypes;
}

const GalleryTab = ({ image }: GalleryImageProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              fill
              alt=""
              className="object-cover object-center "
            />
          </span>

          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
