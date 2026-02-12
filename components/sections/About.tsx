"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/config/site";
import { Leaf, Trees, Users } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Trees,
      title: "Expert Craftsmanship",
      description:
        "Our skilled landscapers bring years of experience and dedication to every project.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "We take the time to understand your vision and deliver results that exceed expectations.",
    },
    {
      icon: Leaf,
      title: "Premium Experience",
      description:
        "From design to installation, enjoy professional landscaping services with attention to detail.",
    },
  ];

  return (
    <Section id="about" variant="secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="fadeInUp">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About {siteConfig.business.name}
              </h2>
              <div className="space-y-4 text-foreground-muted">
                <p className="text-lg leading-relaxed">
                  Welcome to {siteConfig.business.name}, where expert landscaping meets
                  beautiful design. Located in San Diego, we&apos;ve been transforming
                  outdoor spaces with premium landscaping services that combine artistry
                  with quality craftsmanship.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team of experienced landscapers is passionate about creating
                  stunning outdoor environments. From custom landscape design to ongoing
                  maintenance, we bring your vision to life with attention to detail
                  and dedication to excellence.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe your outdoor space is an extension of your home. That&apos;s
                  why we work closely with each client to design and maintain landscapes
                  that reflect your style and enhance your property&apos;s beauty.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeInUp" delay={0.2}>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-background rounded-lg border border-foreground/10"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                        <Icon className="text-primary-500" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-foreground-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
