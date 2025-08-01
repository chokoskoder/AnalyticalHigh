import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

// 1. Expanded and updated reviews array with 11 entries.
// 'img' holds the background color class, and 'textColor' holds the appropriate text color class.
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "The real-time analytics are a total game-changer for our marketing campaigns. We can pivot strategies in minutes!",
    img: "bg-[#ff3333]", // Primary
    textColor: "text-white",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "Finally, a dashboard that doesn't look like it was designed in the 90s. The UI is clean, modern, and intuitive.",
    img: "bg-[#ffffff]", 
    textColor: "text-black",
  },
  {
    name: "Carlos",
    username: "@carlos",
    body: "The integration with our existing data sources was seamless. We were up and running in less than an hour.",
    img: "bg-[#0066ff]", 
    textColor: "text-white",
  },
  {
    name: "Mei",
    username: "@mei_lin",
    body: "I love the report generation feature. It saves me hours of manual work each month. Highly recommended!",
    img: "bg-[#ff3333]", 
    textColor: "text-white",
  },
  {
    name: "Ben",
    username: "@ben_dev",
    body: "As a developer, I appreciate the well-documented API. It allowed us to build custom solutions on top of their platform.",
    img: "bg-[#ffffff]", 
    textColor: "text-black",
  },
  {
    name: "Sofia",
    username: "@sofia_r",
    body: "The predictive analytics have given us an edge over the competition. We can now anticipate market trends with confidence.",
    img: "bg-[#0066ff]", 
    textColor: "text-white",
  },
  {
    name: "David",
    username: "@davey",
    body: "Customer support is top-notch. They are responsive, knowledgeable, and genuinely helpful.",
    img: "bg-[#ff3333]", // Primary
    textColor: "text-white",
  },
  {
    name: "Aisha",
    username: "@aisha_k",
    body: "The visualizations are not only beautiful but also incredibly effective at telling a story with data.",
    img: "bg-[#ffffff]", 
    textColor: "text-black",
  },
  {
    name: "Marco",
    username: "@marco_p",
    body: "This tool has democratized data in our organization. Everyone from marketing to sales can now make data-driven decisions.",
    img: "bg-[#0066ff]", 
    textColor: "text-white",
  },
  {
    name: "Elena",
    username: "@elena_v",
    body: "The performance is impressive, even with massive datasets. No lag, no waiting—just instant insights.",
    img: "bg-[#ff3333]", 
    textColor: "text-white",
  },
  {
    name: "Kenji",
    username: "@kenji",
    body: "It's the perfect balance of power and simplicity. Complex enough for data scientists, yet easy for beginners.",
    img: "bg-[#ffffff]",
    textColor: "text-black",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  textColor,
  name,
  username,
  body,
}: {
  img: string;
  textColor: string;
  name: string;
  username:string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer shadow-2xs overflow-hidden border border-gray-950/[.1] p-4 dark:border-gray-50/[.1]",
        " hover:shadow-xl", 
        img, 
        textColor 
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium opacity-60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// 4. The main Marquee component structure
export default function MyMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg  py-10 ">
      <Marquee pauseOnHover className="[--duration:60s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:60s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
