"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import FeaturedBurner from "@/components/FeaturedBurner";
import BurnerControllerFeature from "@/components/BurnerControllerFeature";
import PipelineFeature from "@/components/PipelineFeature";
import ServicesSection from "@/components/ServicesSection";
import CapabilitySection from "@/components/CapabilitySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesSection from "@/components/IndustriesSection";
import ProjectsSection from "@/components/ProjectsSection";
import BrandsSection from "@/components/BrandsSection";
import GallerySection from "@/components/GallerySection";
import LeadGenSection from "@/components/LeadGenSection";
import ContactSection from "@/components/ContactSection";
import QuoteModal from "@/components/QuoteModal";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductForQuote(undefined);
  };

  return (
    <main className="min-h-screen bg-[#0B1624] text-[#F3F5F7] relative">
      {/* High-Tech 5-Second Industrial Loading Screen */}
      <LoadingScreen />

      {/* Header Navigation */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Trust Metrics Bar */}
      <TrustBar />

      {/* Editorial About Section */}
      <AboutSection />

      {/* Asymmetric Product Showcase */}
      <ProductSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Featured Industrial Burner Section */}
      <FeaturedBurner onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Featured Burner Controller Section */}
      <BurnerControllerFeature onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Industrial Pipeline Section */}
      <PipelineFeature onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Interactive Industrial Services */}
      <ServicesSection />

      {/* Industrial Capability Section */}
      <CapabilitySection />

      {/* Why Choose Us Numbered Section */}
      <WhyChooseUs />

      {/* Solutions Across Industries */}
      <IndustriesSection />

      {/* Field Executions & Projects */}
      <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Supported Component Brands */}
      <BrandsSection />

      {/* Industrial Gallery with Lightbox */}
      <GallerySection />

      {/* High-Impact Lead Generation Section */}
      <LeadGenSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Contact Section */}
      <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Footer */}
      <Footer />

      {/* Fixed Mobile Bottom Action Bar */}
      <MobileNav onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Quote Form Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialProduct={selectedProductForQuote}
      />
    </main>
  );
}
