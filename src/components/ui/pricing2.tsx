"use client";

import { CircleCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: PricingFeature[];
  button: {
    text: string;
    url: string;
  };
}

interface Pricing2Props {
  heading?: string;
  description?: string;
  plans?: PricingPlan[];
}

const Pricing2 = ({
  // Updated heading and description to match the analytics theme
  heading = "Flexible Plans for Your Data Needs",
  description = "Choose the perfect plan to unlock insights and visualize your data.",
  plans = [
    {
      id: "starter",
      name: "Starter",
      description: "For individuals and small teams starting out.",
      monthlyPrice: "$29",
      yearlyPrice: "$299",
      features: [
        { text: "Up to 3 users" },
        { text: "Connect up to 2 data sources" },
        { text: "5 Pre-built dashboard templates" },
        { text: "Standard report generation" },
        { text: "Email & community support" },
      ],
      button: {
        text: "Get Started",
        url: "/signup/starter", // Updated URL
      },
    },
    {
      id: "business",
      name: "Business",
      description: "For growing companies that need more power and collaboration.",
      monthlyPrice: "$79",
      yearlyPrice: "$799",
      features: [
        { text: "Up to 15 users" },
        { text: "Connect unlimited data sources" },
        { text: "Unlimited custom dashboards" },
        { text: "Predictive analytics features" },
        { text: "Priority email & chat support" },
        { text: "Full API Access" },
      ],
      button: {
        text: "Choose Plan",
        url: "/signup/business", // Updated URL
      },
    },
  ],
}: Pricing2Props) => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="py-48 ">
      <div className="container  mx-auto">
        <div className=" mx-auto flex  max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-semibold text-pretty lg:text-6xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-xl">{description}</p>
          <div className="flex items-center gap-3 text-lg">
            Monthly
            <Switch
              checked={isYearly}
              onCheckedChange={() => setIsYearly(!isYearly)}
            />
            Yearly
          </div>
          <div className="flex flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className="flex w-80 flex-col justify-between text-left"
              >
                <CardHeader>
                  <CardTitle>
                    <p>{plan.name}</p>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="flex items-end">
                    <span className="text-4xl font-semibold">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-2xl font-semibold text-muted-foreground">
                      {isYearly ? "/yr" : "/mo"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  {plan.id === "pro" && (
                    <p className="mb-3 font-semibold">
                      Everything in Plus, and:
                    </p>
                  )}
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CircleCheck className="size-4" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full">
                    <a href={plan.button.url} target="_blank">
                      {plan.button.text}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing2 };
