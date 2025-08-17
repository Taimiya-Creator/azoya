
"use client";

import { Building, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Taimiya Amjad",
      role: "Founder & CEO",
      bio: "The visionary behind Azoya, leading the charge in AI-driven web development and designing the generative core that makes instant websites a reality.",
      avatar: "https://placehold.co/100x100.png",
      dataAiHint: "professional portrait"
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            We're Building the Future of Web Creation
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Azoya was born from a simple idea: what if anyone could bring their digital vision to life, just by describing it? We're a passionate team of innovators dedicated to making web development accessible to everyone.
          </p>
        </motion.div>

        {/* Mission and Vision Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-20 text-center"
        >
          <motion.div variants={itemVariants} className="bg-card p-8 rounded-lg shadow-sm border">
            <Target className="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-2 text-muted-foreground">
              To empower creators, entrepreneurs, and businesses by eliminating the technical barriers to web development. We want to turn your ideas into functional websites in seconds.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-card p-8 rounded-lg shadow-sm border">
            <Building className="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-2 text-muted-foreground">
              To lead the charge in the new era of AI-first development, creating tools that are not only powerful but also intuitive, collaborative, and inspiring to use.
            </p>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">The mind behind the magic.</p>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-1 justify-center"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-card p-6 rounded-lg shadow-sm border text-center max-w-md mx-auto">
                <img
                  className="w-24 h-24 mx-auto rounded-full"
                  src={member.avatar}
                  alt={member.name}
                  data-ai-hint={member.dataAiHint}
                />
                <h3 className="mt-6 text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <p className="mt-2 text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Create?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
            Join the revolution and start building your dream website today. No code, no hassle.
          </p>
          <Button asChild size="lg" className="mt-8 font-semibold">
            <Link href="/">Get Started for Free</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
