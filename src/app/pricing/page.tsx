
"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Hobby",
    price: "$0",
    priceDescription: "per month",
    description: "For personal projects and exploring the platform.",
    features: [
      "Unlimited website generations",
      "Preview in real-time",
      "Download source code",
      "Community support",
    ],
    buttonText: "Start for Free",
    href: "/signup",
    variant: "outline"
  },
  {
    name: "Pro",
    price: "Soon",
    priceDescription: "",
    description: "For professionals who need more power and features.",
    features: [
      "All features in Hobby",
      "Save and manage projects",
      "Access to premium templates",
      "Priority email support",
      "No Azoya branding",
    ],
    buttonText: "Coming Soon",
    href: "#",
    variant: "default"
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          Choose the plan that's right for you. Get started for free.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`flex flex-col h-full ${tier.variant === 'default' ? 'border-primary' : ''}`}>
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="flex items-baseline pt-4">
                    <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                    {tier.priceDescription && (
                        <span className="text-sm font-semibold ml-1 text-muted-foreground">{tier.priceDescription}</span>
                    )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full" variant={tier.variant as any} disabled={tier.buttonText === "Coming Soon"}>
                    <Link href={tier.href}>{tier.buttonText}</Link>
                 </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
