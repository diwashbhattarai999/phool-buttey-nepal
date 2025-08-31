import Image from "next/image";
import Link from "next/link";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";
import { IconBrandInstagram, IconBrandTiktok, IconPhoneCall } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-primary/10 to-transparent pt-36">
      <div className="flex flex-col lg:flex-row items-center xl:items-start max-w-screen-2xl mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 py-12 xl:pt-40">
          <h1
            className={cn(
              "text-[38px] md:text-[56px] lg:text-[58px] font-bold leading-[1.1] text-balance",
              integralCF.className
            )}
          >
            AUTHENTIC NEPALI DHKA MALMAL AND COTTON ACCESSORIES
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-[680px]">
            Discover handmade Dhaka Malmal and cotton accessories crafted in Nepal. Every piece
            celebrates Nepali tradition and brings authentic style to your wardrobe. Worldwide
            shipping available.
          </p>
          <Link
            href="/products"
            className="mt-8 px-12 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/80 transition-colors w-fit text-base"
          >
            Shop Now
          </Link>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div>
              <div className="font-bold text-xl lg:text-2xl">Handmade</div>
              <div className="text-sm text-muted-foreground">Authentic Nepali Craft</div>
            </div>
            <div>
              <div className="font-bold text-xl lg:text-2xl">Worldwide</div>
              <div className="text-sm text-muted-foreground">Shipping</div>
            </div>
            <div>
              <div className="font-bold text-xl lg:text-2xl">3 Days</div>
              <div className="text-sm text-muted-foreground">Easy Exchange</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6">
            <Link
              href="https://www.instagram.com/phool_butey_nepal/reels/?hl=en"
              target="_blank"
              className="text-primary-foreground hover:bg-primary/50 p-2 rounded-full"
            >
              <IconBrandInstagram />
            </Link>
            <Link
              href="https://www.tiktok.com/@phool_butey_nepal"
              target="_blank"
              className="text-primary-foreground hover:bg-primary/50 p-2 rounded-full"
            >
              <IconBrandTiktok />
            </Link>

            {/* Contact */}
            <a
              href="tel:+9779816466808"
              className="text-primary-foreground hover:bg-primary/50 p-2 rounded-full"
            >
              <IconPhoneCall />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-[45%] flex items-center justify-center h-[500px] lg:h-[calc(100vh-8rem)]">
          <Image
            src="/images/dhaka_malmal2.png"
            alt="Dhaka Malmal Accessories"
            fill
            className="object-cover lg:object-contain lg:object-right-top brightness-[1.15]"
            priority
          />
          <Image
            src="/images/dhaka_malmal2.png"
            alt="Dhaka Malmal Accessories"
            width={500}
            height={500}
            className="absolute -top-0 -z-[1] -right-40 object-cover lg:object-contain lg:object-right-top brightness-[1.15] rotate-[10deg]"
            priority
          />
          <Image
            src="/images/dhaka_malmal2.png"
            alt="Dhaka Malmal Accessories"
            width={500}
            height={500}
            className="absolute bottom-40 -z-[1] -left-28 object-cover lg:object-contain lg:object-right-top brightness-[1.15] rotate-[-20deg]"
            priority
          />

          {/* Decorative Stars */}
          <div className="absolute top-8 right-8 text-primary">
            <StarIcon className="w-10 h-10" />
          </div>
          <div className="absolute bottom-1/3 left-8 text-primary">
            <StarIcon className="w-8 h-8" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 text-primary">
            <StarIcon className="w-8 h-8" />
          </div>
          <div className="absolute top-1/4 right-0 text-primary">
            <StarIcon className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}
