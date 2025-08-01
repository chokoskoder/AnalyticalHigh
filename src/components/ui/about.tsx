import { Button } from "@/components/ui/button";


interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

// Data updated to reflect an analytics company's partners
const defaultCompanies = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    alt: "Innovate Inc.",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    alt: "DataCorp",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    alt: "QuantumLeap",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    alt: "NextGen Solutions",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    alt: "Synergy AI",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    alt: "Apex Analytics",
  },
];

// Data updated to reflect analytics-specific achievements
const defaultAchievements = [
  { label: "Data Points Processed Daily", value: "1.5B+" },
  { label: "Dashboards Created", value: "50K+" },
  { label: "Avg. Insight Discovery Time", value: "<5 min" },
  { label: "Integration Partners", value: "40+" },
];

const About3 = ({
  // Thematic title and description
  description = "AnalyticalHigh was founded by a team of data scientists and engineers passionate about making complex data analysis accessible to everyone. We build intuitive tools that empower businesses to discover insights and drive growth.",
  // Thematic alt text for images
  mainImage = {
    src: "/logo.svg",
    alt: "A modern analytics dashboard showing key performance indicators.",
  },
  secondaryImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    alt: "Team members collaborating around a data visualization.",
  },
  // Updated breakout/CTA section
  breakout = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "AnalyticalHigh Logo",
    title: "Explore Our Interactive Demo",
    description:
      "See our platform in action and discover how you can turn raw data into actionable insights in minutes.",
    buttonText: "Launch Demo",
    buttonUrl: "/demo",
  },
  // Updated titles and descriptions for sections
  companiesTitle = "Trusted by the World's Most Innovative Companies",
  companies = defaultCompanies,
  achievementsTitle = "Results You Can Measure",
  achievementsDescription = "We are dedicated to delivering tangible results, helping our clients improve efficiency, boost revenue, and foster a data-driven culture.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-45">
      <div className="container mx-auto  ">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="bg-clip-text text-transparent text-left bg-accent  text-5xl font-semibold">
        We-re on a mission to democratize  <span className='bg-gradient-to-r from-primary to-accent text-transparent bg-cover bg-clip-text font-extrabold'>Data</span>
      </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-max max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto shadow-2xs hover:shadow-2xl hover:scale-102 transition-all duration-75 ease-in-out">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto shadow-2xs hover:shadow-2xl hover:scale-102 transition-all duration-75 ease-in-out"
            />
          </div>
        </div>
        <div className="py-32">
          <p className="text-center">{companiesTitle} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3 " key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8 "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16 shadow-2xs hover:shadow-2xl hover:scale-102 transition-all duration-75 ease-in-out">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export { About3 };