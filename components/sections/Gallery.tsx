"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery() {
  const galleryImages = [
    { id: 1, src: "/images/AdobeStock_1199248650.jpeg", alt: "Professional landscaping service" },
    { id: 2, src: "/images/AdobeStock_252563724.jpeg", alt: "Beautiful garden design" },
    { id: 3, src: "/images/AdobeStock_964977387.jpeg", alt: "Lawn care and maintenance" },
    { id: 4, src: "/images/AdobeStock_983618194.jpeg", alt: "Landscaping project" },
  ];

  return (
    <Section id="gallery">
      <Container>
        <ScrollReveal variant="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Gallery
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Explore our portfolio of beautiful landscapes and outdoor transformations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal
              key={image.id}
              variant="fadeInScale"
              delay={index * 0.1}
            >
              <motion.div
                className="relative aspect-square bg-background-secondary rounded-lg overflow-hidden border-3 border-accent-500 group cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(95, 179, 179, 0.6)" }}
                transition={{ duration: 0.3 }}
                style={{ boxShadow: "0 0 15px rgba(95, 179, 179, 0.3)" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
