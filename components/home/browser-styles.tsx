"use client";

import Image from "next/image";
import Link from "next/link";
import { integralCF, satoshi } from "@/app/ui/fonts";

const categories = [
  {
    id: "scarves",
    name: "Scarves",
    image: "/browse/scarf.png",
    href: "/products/scarves",
  },
  {
    id: "daura",
    name: "Daura Suruwal",
    image: "/browse/daura.png",
    href: "/products/daura",
  },
  {
    id: "furke-topi",
    name: "Furke Topi",
    image: "/browse/furke-topi.png",
    href: "/products/furke-topi",
  },
  {
    id: "ruffle",
    name: "Ruffle",
    image: "/browse/ruffle.png",
    href: "/products/ruffle",
  },
];

export default function BrowseCategories() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-8 md:py-12">
      <div className="rounded-[32px] bg-[#F8F5F2] p-6 md:p-8">
        <h2
          className={`${integralCF.className} mb-6 text-center text-2xl font-bold md:mb-8 md:text-[32px]`}
        >
          BROWSE BY CATEGORY
        </h2>
        <div className="flex flex-col gap-4">
          {/* Top row */}
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              href={categories[0].href}
              className="group relative h-[200px] w-full overflow-hidden rounded-2xl bg-white md:h-[240px] md:w-1/2"
            >
              <Image
                src={categories[0].image}
                alt={categories[0].name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent">
                <h3
                  className={`${satoshi.className} absolute top-4 left-4 text-xl text-white md:text-2xl`}
                >
                  {categories[0].name}
                </h3>
              </div>
            </Link>
            <Link
              href={categories[1].href}
              className="group relative h-[200px] w-full overflow-hidden rounded-2xl bg-white md:h-[240px] md:w-1/2"
            >
              <Image
                src={categories[1].image}
                alt={categories[1].name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent">
                <h3
                  className={`${satoshi.className} absolute top-4 left-4 text-xl text-white md:text-2xl`}
                >
                  {categories[1].name}
                </h3>
              </div>
            </Link>
          </div>
          {/* Bottom row */}
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              href={categories[2].href}
              className="group relative h-[200px] w-full overflow-hidden rounded-2xl bg-white md:h-[240px] md:w-[60%]"
            >
              <Image
                src={categories[2].image}
                alt={categories[2].name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent">
                <h3
                  className={`${satoshi.className} absolute top-4 left-4 text-xl text-white md:text-2xl`}
                >
                  {categories[2].name}
                </h3>
              </div>
            </Link>
            <Link
              href={categories[3].href}
              className="group relative h-[200px] w-full overflow-hidden rounded-2xl bg-white md:h-[240px] md:w-[40%]"
            >
              <Image
                src={categories[3].image}
                alt={categories[3].name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent">
                <h3
                  className={`${satoshi.className} absolute top-4 left-4 text-xl text-white md:text-2xl`}
                >
                  {categories[3].name}
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
