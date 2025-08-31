"use client";

import { useState } from "react";
import { MoreHorizontal, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { satoshi } from "@/app/ui/fonts";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  isVerified: boolean;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Anisha G.",
    rating: 5,
    content:
      "The Dhaka malmal dress I bought is so soft and lightweight! Perfect for summer wear. The handwoven fabric feels premium and unique—definitely something you won’t find in fast fashion stores.",
    date: "July 20, 2024",
    isVerified: true,
  },
  {
    id: "2",
    author: "Rahul S.",
    rating: 4.5,
    content:
      "I ordered a cotton bhoto set for my baby. The fabric is breathable and gentle on the skin. Loved the traditional touch—it feels like wearing a piece of our culture.",
    date: "August 2, 2024",
    isVerified: true,
  },
  {
    id: "3",
    author: "Maya T.",
    rating: 4,
    content:
      "Beautiful craftsmanship! The Dhaka khasto I received is both stylish and warm. Slightly smaller than I expected, but still worth every rupee.",
    date: "August 10, 2024",
    isVerified: true,
  },
  {
    id: "4",
    author: "Sujan K.",
    rating: 5,
    content:
      "Phool Butey Nepal never disappoints! Their malmal kurta is my favorite now—breathable, sustainable, and looks elegant on every occasion.",
    date: "August 18, 2024",
    isVerified: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={cn(
            "h-5 w-5",
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"
          )}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ProductReviews() {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="flex border-b">
          <Tabs.Trigger
            value="details"
            className={cn(
              "px-6 py-3 text-sm font-medium",
              activeTab === "details"
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Product Details
          </Tabs.Trigger>
          <Tabs.Trigger
            value="reviews"
            className={cn(
              "px-6 py-3 text-sm font-medium",
              activeTab === "reviews"
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Rating & Reviews
          </Tabs.Trigger>
          <Tabs.Trigger
            value="faqs"
            className={cn(
              "px-6 py-3 text-sm font-medium",
              activeTab === "faqs" ? "border-b-2 border-black" : "text-gray-500 hover:text-gray-700"
            )}
          >
            FAQs
          </Tabs.Trigger>
        </Tabs.List>

        {/* Product Details */}
        <Tabs.Content value="details" className="pt-8">
          <h2 className={cn("text-lg font-medium mb-4", satoshi.className)}>Product Details</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Handwoven in Nepal using traditional techniques</li>
            <li>100% natural Dhaka, Malmal & Cotton fabrics</li>
            <li>Lightweight, breathable, and perfect for all-day comfort</li>
            <li>Ethically made supporting local artisans</li>
          </ul>
        </Tabs.Content>

        {/* Reviews */}
        <Tabs.Content value="reviews" className="pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <h2 className={cn("text-lg font-medium", satoshi.className)}>
                All Reviews
                <span className="text-muted-foreground ml-2">({reviews.length})</span>
              </h2>
              <button className="lg:hidden">
                <SlidersHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:border-black transition-colors">
                  <span>Latest</span>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="bg-white rounded-lg shadow-lg border p-1 min-w-[150px]">
                    <DropdownMenu.Item className="px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-50">
                      Latest
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-50">
                      Highest Rating
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-50">
                      Lowest Rating
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
              <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-colors">
                Write a Review
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="p-6 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.author}</span>
                      {review.isVerified && (
                        <svg
                          className="h-4 w-4 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger className="p-1 hover:bg-gray-100 rounded-full">
                      <MoreHorizontal className="h-5 w-5" />
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-white rounded-lg shadow-lg border p-1 min-w-[150px]">
                        <DropdownMenu.Item className="px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-50">
                          Report Review
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </div>
                <p className="mt-4 text-gray-600">{review.content}</p>
                <p className="mt-4 text-sm text-gray-500">Posted on {review.date}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full py-4 border rounded-lg text-center hover:border-black transition-colors">
            Load More Reviews
          </button>
        </Tabs.Content>

        {/* FAQs */}
        <Tabs.Content value="faqs" className="pt-8">
          <h2 className={cn("text-lg font-medium mb-4", satoshi.className)}>FAQs</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-medium">Q: Are your fabrics handwoven?</p>
              <p>
                A: Yes, all our Dhaka, Malmal, and Cotton products are handwoven by Nepali artisans.
              </p>
            </div>
            <div>
              <p className="font-medium">Q: How do I wash these clothes?</p>
              <p>
                A: Gentle hand wash is recommended. Use mild detergent and cold water to preserve
                the fabric’s quality.
              </p>
            </div>
            <div>
              <p className="font-medium">Q: Do you ship internationally?</p>
              <p>
                A: Yes, we ship worldwide with reliable partners. Delivery time depends on your
                location.
              </p>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
